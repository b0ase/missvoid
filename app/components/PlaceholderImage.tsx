"use client";

import { useState } from 'react';

interface PlaceholderImageProps {
  width: number;
  height: number;
  text?: string;
  collection?: string;
  index?: number;
  className?: string;
}

/**
 * A component that generates a styled placeholder for demo purposes
 */
export default function PlaceholderImage({ 
  width = 600, 
  height = 800, 
  text = 'MISS VOID', 
  collection = '',
  index = 0,
  className = ''
}: PlaceholderImageProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const backgroundColors = [
    'bg-black', 'bg-gray-900', 'bg-gray-800'
  ];
  const backgroundColor = backgroundColors[index % backgroundColors.length];
  
  const collectionText = collection ? `${collection.toUpperCase()}` : '';
  const displayText = `${text}\n${collectionText}`;

  return (
    <div 
      className={`relative ${backgroundColor} ${className}`}
      style={{ width, height }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`absolute inset-0 flex flex-col items-center justify-center text-white transition-opacity duration-300 ${isHovered ? 'opacity-30' : 'opacity-100'}`}>
        {displayText.split('\n').map((line, i) => (
          <div key={i} className="text-center">
            <span className="font-bold text-xl tracking-widest">{line}</span>
          </div>
        ))}
        <div className="mt-4 text-xs">Placeholder {index + 1}</div>
      </div>
      
      {/* Border overlay */}
      <div className={`absolute inset-0 border border-white ${isHovered ? 'opacity-100' : 'opacity-30'} transition-opacity duration-300`}></div>
    </div>
  );
} 