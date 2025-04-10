#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const FormData = require('form-data');

// Directory containing the catalog images
const SOURCE_DIR = '/Users/FRESH/Desktop/MissVOIDCatalogue';

// Gallery mapping
const GALLERIES = {
  'VOID XXX': 'void-xxx',
  'VOID CHIC': 'void-chic',
  'VOID FOOTWEAR': 'void-footwear',
  'MISS VOID': 'miss-void',
  'VOID INK': 'void-ink',
  'VOID BOUDOIR': 'void-boudoir',
  'VOID INDUSTRY': 'void-industry',
  'VOID MUSCLES': 'void-muscles'
};

// URL for the upload API
const UPLOAD_URL = 'https://missvoid-2mrxjj72w-ai-tribes.vercel.app/api/upload';

// Upload a single image
async function uploadImage(file, galleryId) {
  try {
    // Create form data for the upload
    const form = new FormData();
    const fileStream = fs.createReadStream(file.path);
    form.append('file', fileStream);
    
    // Generate a safe, unique filename
    const originalName = path.basename(file.path);
    const timestamp = Date.now();
    const safeFilename = `${timestamp}-${originalName.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
    
    // Upload the file
    const response = await fetch(`${UPLOAD_URL}?filename=${safeFilename}&gallery=${galleryId}`, {
      method: 'POST',
      body: form
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Failed to upload');
    }
    
    console.log(`✓ Uploaded ${file.path} to ${galleryId} as ${safeFilename}`);
    return data.url;
  } catch (error) {
    console.error(`✗ Error uploading ${file.path}: ${error.message}`);
    return null;
  }
}

// Process files in a directory
async function processDirectory(dirPath, galleryId) {
  console.log(`\nProcessing ${dirPath} → ${galleryId}`);
  
  try {
    // Read the directory
    const files = fs.readdirSync(dirPath)
      .filter(file => /\.(jpg|jpeg|png|webp|JPG|JPEG|PNG|WEBP)$/i.test(file))
      .map(file => ({
        name: file,
        path: path.join(dirPath, file)
      }));
    
    console.log(`Found ${files.length} images in ${path.basename(dirPath)}`);
    
    // Upload each file (limit to 5 concurrent uploads)
    const batchSize = 5;
    const results = [];
    
    for (let i = 0; i < files.length; i += batchSize) {
      const batch = files.slice(i, i + batchSize);
      const batchPromises = batch.map(file => uploadImage(file, galleryId));
      const batchResults = await Promise.all(batchPromises);
      results.push(...batchResults);
      
      // Progress update
      console.log(`Uploaded ${Math.min(i + batchSize, files.length)}/${files.length} images`);
    }
    
    return results.filter(Boolean);
  } catch (error) {
    console.error(`Error processing directory ${dirPath}: ${error.message}`);
    return [];
  }
}

// Main function
async function main() {
  console.log('Starting catalog upload to Vercel Blob...');
  
  try {
    // Check if source directory exists
    if (!fs.existsSync(SOURCE_DIR)) {
      throw new Error(`Source directory not found: ${SOURCE_DIR}`);
    }
    
    // Process each gallery directory
    const results = {};
    
    for (const [dirName, galleryId] of Object.entries(GALLERIES)) {
      const galleryPath = path.join(SOURCE_DIR, dirName);
      
      if (fs.existsSync(galleryPath)) {
        results[galleryId] = await processDirectory(galleryPath, galleryId);
      } else {
        console.warn(`Gallery directory not found: ${galleryPath}`);
      }
    }
    
    // Output summary
    console.log('\n===== Upload Summary =====');
    for (const [galleryId, urls] of Object.entries(results)) {
      console.log(`${galleryId}: ${urls.length} images uploaded`);
    }
    
    console.log('\nDone!');
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
}

// Run the script
main(); 