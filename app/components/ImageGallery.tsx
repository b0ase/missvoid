"use client";

import { useState } from "react";
import Image from "next/image";

type ImageType = {
  id: number | string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type ImageGalleryProps = {
  images: ImageType[];
  className?: string;
  columns?: 1 | 2 | 3 | 4;
};

export default function ImageGallery({ 
  images, 
  className = "", 
  columns = 3 
}: ImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ImageType | null>(null);

  const handleImageClick = (image: ImageType) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const getGridCols = () => {
    switch (columns) {
      case 1: return "grid-cols-1";
      case 2: return "grid-cols-1 md:grid-cols-2";
      case 3: return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      case 4: return "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";
      default: return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
    }
  };

  return (
    <>
      <div className={`grid ${getGridCols()} gap-4 ${className}`}>
        {images.map((image) => (
          <div 
            key={image.id} 
            className="relative group cursor-pointer"
            onClick={() => handleImageClick(image)}
          >
            <div className="aspect-square relative overflow-hidden rounded-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <button className="bg-white text-black px-4 py-2 rounded-full font-medium hover:bg-opacity-90 transition">
                View Image
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full">
            <button 
              className="absolute top-4 right-4 text-white z-10 bg-black bg-opacity-50 rounded-full p-2"
              onClick={handleClose}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="relative h-full w-full">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
} 