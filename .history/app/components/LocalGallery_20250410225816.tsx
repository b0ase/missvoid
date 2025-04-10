"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PINTEREST_CONFIG } from '@/app/config/pinterest';
import DemoGallery from './DemoGallery';
import path from 'path';

type GalleryImage = {
  id: string;
  src: string;
  alt: string;
};

type LocalGalleryProps = {
  boardId: string;
};

export default function LocalGallery({ boardId }: LocalGalleryProps) {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  useEffect(() => {
    const fetchLocalImages = async () => {
      try {
        setLoading(true);
        // Find the board data from our config
        const board = PINTEREST_CONFIG.BOARDS.find(b => b.id === boardId);
        
        if (!board || !board.localPath) {
          throw new Error('Gallery not found');
        }
        
        // In a real-world scenario, we'd fetch images from a proper API
        // This is a simplified version for the demo
        const imagePaths: string[] = [];
        
        // Try to get real images first
        try {
          // Create simulated paths based on the collection name
          // Note: Not using fullPath since we're not actually accessing the filesystem in client components
          
          // For demo purposes, we're generating 10 image paths
          // In production, these would come from your API or file system
          for (let i = 0; i < 10; i++) {
            imagePaths.push(`${board.localPath}/image-${i+1}.jpg`);
          }
        } catch {
          console.warn('No real images found, using placeholders');
        }
        
        // Convert paths to gallery images
        const galleryImages: GalleryImage[] = imagePaths.map((src, i) => ({
          id: `img-${i}`,
          src,
          alt: `${board.name} - Image ${i + 1}`
        }));
        
        setImages(galleryImages);
        setLoading(false);
      } catch (err) {
        console.error('Error loading local gallery:', err);
        setLoading(false);
        setImages([]);
      }
    };
    
    fetchLocalImages();
  }, [boardId]);
  
  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
  };
  
  // Find the board data
  const board = PINTEREST_CONFIG.BOARDS.find(b => b.id === boardId);
  
  if (loading) {
    return (
      <div className="py-12 text-center">
        <div className="inline-block border border-gray-800 px-6 py-3 text-gray-400 bg-black">
          LOADING IMAGES...
        </div>
      </div>
    );
  }
  
  // Use Demo Gallery fallback when no images are available
  if (!board || images.length === 0) {
    return (
      <div className="py-12">
        <DemoGallery 
          boardName={board?.name || 'MISS VOID'} 
          imageCount={board?.count || 10} 
        />
      </div>
    );
  }
  
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div 
            key={image.id}
            className="relative aspect-square group cursor-pointer border border-gray-800"
            onClick={() => handleImageClick(image)}
          >
            <div className="h-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-0 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 text-white transform translate-y-0 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-sm font-medium">{board.name}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-4xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-white z-10 bg-black border border-white rounded-none p-2"
              onClick={closeLightbox}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="relative aspect-auto max-h-[80vh] bg-black border border-gray-800 overflow-hidden">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain max-h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            
            <div className="bg-black border-t-0 border border-gray-800 p-6">
              <h3 className="text-lg font-medium mb-4">{selectedImage.alt}</h3>
              <a 
                href={`/galleries/${boardId}`}
                className="inline-flex items-center text-white hover:text-gray-300 border border-white px-4 py-2"
                onClick={(e) => {e.stopPropagation(); closeLightbox();}}
              >
                BACK TO GALLERY
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 