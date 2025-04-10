'use client';

import { useState } from 'react';
import PlaceholderImage from './PlaceholderImage';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface DemoGalleryProps {
  boardName: string;
  imageCount?: number;
  realImages?: string[];
}

export default function DemoGallery({ boardName, imageCount = 10, realImages = [] }: DemoGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  // Create placeholder images if no real images provided
  const placeholderCount = Math.max(0, imageCount - realImages.length);
  
  const closeModal = () => setSelectedImage(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-4">
        {/* Real images if available */}
        {realImages.map((imagePath, index) => (
          <div 
            key={`real-${index}`} 
            className="aspect-[3/4] cursor-pointer overflow-hidden border border-gray-200 hover:border-white transition-all"
            onClick={() => setSelectedImage(index)}
          >
            <div className="relative w-full h-full transition-transform hover:scale-105 duration-500">
              <Image
                src={imagePath}
                alt={`${boardName} image ${index + 1}`}
                fill
                className="object-cover filter grayscale hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          </div>
        ))}
        
        {/* Placeholder images */}
        {Array.from({ length: placeholderCount }).map((_, index) => (
          <div 
            key={`placeholder-${index}`} 
            className="aspect-[3/4] cursor-pointer overflow-hidden border border-gray-200 hover:border-white transition-all"
            onClick={() => setSelectedImage(realImages.length + index)}
          >
            <div className="relative w-full h-full transition-transform hover:scale-105 duration-500">
              <PlaceholderImage
                width={300}
                height={400}
                text="MISS VOID"
                collection={boardName}
                index={index}
                className="w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Lightbox modal */}
      {selectedImage !== null && (
        <Dialog 
          open={selectedImage !== null} 
          onClose={closeModal}
          className="fixed inset-0 z-50 flex items-center justify-center"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-90" />
          
          <div className="relative z-10 max-w-4xl w-full h-[80vh] max-h-[80vh] overflow-hidden">
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-white hover:text-gray-200"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>
            
            <div className="w-full h-full flex items-center justify-center">
              {selectedImage < realImages.length ? (
                <Image
                  src={realImages[selectedImage]}
                  alt={`${boardName} image ${selectedImage + 1}`}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              ) : (
                <PlaceholderImage
                  width={600}
                  height={800}
                  text="MISS VOID"
                  collection={boardName}
                  index={selectedImage - realImages.length}
                  className="w-auto h-auto max-w-full max-h-full"
                />
              )}
            </div>
          </div>
        </Dialog>
      )}
    </>
  );
} 