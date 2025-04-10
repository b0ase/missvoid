"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PINTEREST_CONFIG } from '@/app/config/pinterest';

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
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [loading, setLoading] = useState(true);
  
  // Find the board data
  const board = PINTEREST_CONFIG.BOARDS.find(b => b.id === boardId);
  
  useEffect(() => {
    if (!board) {
      setLoading(false);
      return;
    }
    
    // Generate image paths based on the board's localPath and count
    const galleryImages: GalleryImage[] = [];
    for (let i = 1; i <= board.count; i++) {
      galleryImages.push({
        id: `${boardId}-${i}`,
        src: `${board.localPath}/${i}.jpg`, // This assumes images are named numerically
        alt: `${board.name} - Image ${i}`
      });
    }
    
    setImages(galleryImages);
    setLoading(false);
  }, [board, boardId]);
  
  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };
  
  const handleClose = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };
  
  if (!board) {
    return (
      <div className="py-12 text-center">
        <div className="inline-block border border-gray-800 px-6 py-3 text-gray-400 bg-black">
          GALLERY NOT FOUND
        </div>
      </div>
    );
  }
  
  if (loading) {
    return (
      <div className="py-12 text-center">
        <div className="inline-block border border-gray-800 px-6 py-3 text-gray-400 bg-black">
          LOADING GALLERY...
        </div>
      </div>
    );
  }
  
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold mb-8 text-center">{board.name}</h2>
      
      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: board.count }, (_, i) => (
          <div 
            key={`${boardId}-${i}`} 
            className="aspect-[3/4] relative cursor-pointer overflow-hidden border border-gray-800 group"
            onClick={() => handleImageClick({
              id: `${boardId}-${i}`,
              src: `${board.localPath}/${i + 1}.jpg`,
              alt: `${board.name} - Image ${i + 1}`
            })}
          >
            {/* Show actual images from demo folders */}
            <Image
              src={`${board.localPath}/${i + 1}.jpg`}
              alt={`${board.name} - Image ${i + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>
      
      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <button 
            className="absolute top-4 right-4 text-white p-2 bg-black bg-opacity-50 rounded-full z-50"
            onClick={handleClose}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
} 