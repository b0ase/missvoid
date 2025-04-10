"use client";

import { useState } from 'react';
import Image from 'next/image';

type DemoGalleryProps = {
  boardName: string;
  imageCount?: number;
};

export default function DemoGallery({ boardName, imageCount = 6 }: DemoGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  
  // Generate demo images (just show colored boxes)
  const images = Array.from({ length: imageCount }, (_, i) => ({
    id: `demo-${i}`,
    index: i
  }));
  
  const colors = [
    '#1a1a1a', '#2a2a2a', '#3a3a3a', '#4a4a4a', 
    '#1d1d1d', '#2d2d2d', '#3d3d3d', '#4d4d4d'
  ];
  
  const handleImageClick = (index: number) => {
    setSelectedIndex(index);
  };
  
  const closeModal = () => {
    setSelectedIndex(null);
  };
  
  return (
    <>
      <h2 className="text-2xl font-bold mb-8 text-center">{boardName}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div 
            key={image.id} 
            className="aspect-square border border-gray-800 cursor-pointer overflow-hidden"
            onClick={() => handleImageClick(image.index)}
          >
            <div 
              className="w-full h-full flex items-center justify-center"
              style={{ backgroundColor: colors[image.index % colors.length] }}
            >
              <div className="text-white opacity-50 text-2xl font-mono">
                {image.index + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal */}
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-black border border-gray-800 max-w-3xl max-h-[90vh] w-full overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-4 flex justify-between items-center border-b border-gray-800">
              <h3 className="text-xl font-bold">{boardName} - Image {selectedIndex + 1}</h3>
              <button 
                className="text-white p-2"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
            <div 
              className="aspect-square w-full"
              style={{ backgroundColor: colors[selectedIndex % colors.length] }}
            >
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-white opacity-50 text-5xl font-mono">
                  {selectedIndex + 1}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
} 