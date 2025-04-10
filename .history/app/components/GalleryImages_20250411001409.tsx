'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PINTEREST_CONFIG } from '@/app/config/pinterest';

type GalleryImagesProps = {
  galleryId: string;
  galleryName: string;
};

export default function GalleryImages({ galleryId, galleryName }: GalleryImagesProps) {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    // Function to get images from the configured board
    function getGalleryImages() {
      try {
        setLoading(true);
        // Find the board configuration from pinterest.ts
        const board = PINTEREST_CONFIG.BOARDS.find(b => b.id === galleryId);
        
        if (!board) {
          throw new Error(`Gallery '${galleryId}' not found in configuration`);
        }
        
        // Create array of image paths based on board settings
        const paths: string[] = [];
        for (let i = 0; i < board.count; i++) {
          // Use the actual path to the images in public directory
          paths.push(`${board.localPath}/${i+1}.jpg`);
        }
        
        setImages(paths);
      } catch (error) {
        console.error('Error loading gallery:', error);
        setError('Could not load gallery images. Please try again later.');
        // Provide at least some fallback images
        setImages([
          '/images/hero.jpg',
          '/images/about.jpg'
        ]);
      } finally {
        setLoading(false);
      }
    }
    
    getGalleryImages();
  }, [galleryId]);
  
  const openLightbox = (url: string, index: number) => {
    setSelectedImage(url);
    setSelectedIndex(index);
    // Prevent scrolling when lightbox is open
    document.body.style.overflow = 'hidden';
  };
  
  const closeLightbox = () => {
    setSelectedImage(null);
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
  };
  
  // Navigate between images in lightbox
  const navigateImage = (direction: 'prev' | 'next') => {
    if (images.length === 0) return;
    
    let newIndex;
    if (direction === 'prev') {
      newIndex = (selectedIndex - 1 + images.length) % images.length;
    } else {
      newIndex = (selectedIndex + 1) % images.length;
    }
    
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };
  
  if (loading) {
    return (
      <div className="text-center py-12">
        <div className="inline-block px-8 py-5 border border-gray-800">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-150"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-pulse delay-300"></div>
          </div>
          <p className="mt-4 text-gray-400">Loading gallery images...</p>
        </div>
      </div>
    );
  }
  
  if (error && images.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="inline-block border border-red-800 px-6 py-4 bg-black text-red-400">
          <p>{error}</p>
          <button 
            className="mt-4 px-4 py-2 border border-red-800 hover:bg-red-900"
            onClick={() => window.location.reload()}
          >
            Retry
          </button>
        </div>
      </div>
    );
  }
  
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div 
            key={index} 
            className="group cursor-pointer aspect-[3/4] relative overflow-hidden border border-gray-800"
            onClick={() => openLightbox(src, index)}
          >
            <Image
              src={src}
              alt={`${galleryName} - Image ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View
              </span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button 
            className="absolute top-4 right-4 z-50 text-white p-2 bg-black bg-opacity-50 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              closeLightbox();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          {/* Previous button */}
          <button 
            className="absolute left-4 z-50 text-white p-2 bg-black bg-opacity-50 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('prev');
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Next button */}
          <button 
            className="absolute right-4 z-50 text-white p-2 bg-black bg-opacity-50 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              navigateImage('next');
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <div 
            className="relative w-full max-w-5xl h-[85vh]"
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt={`${galleryName} - Image ${selectedIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
              quality={90}
            />
          </div>
        </div>
      )}
    </>
  );
} 