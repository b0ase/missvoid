"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { XMarkIcon } from '@heroicons/react/24/outline';

type PinterestPin = {
  id: string;
  media: {
    images: {
      original: {
        url: string;
      },
      [key: string]: any;
    },
  },
  alt_text: string;
  description?: string;
  link: string;
};

type PinterestGalleryProps = {
  boardId: string;
};

export default function PinterestGallery({ boardId }: PinterestGalleryProps) {
  const [pins, setPins] = useState<PinterestPin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedPin, setSelectedPin] = useState<PinterestPin | null>(null);

  useEffect(() => {
    const fetchPins = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Fetch pins for the board
        const response = await fetch(`/api/pinterest?boardId=${boardId}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch pins');
        }
        
        const data = await response.json();
        setPins(data.pins || []);
      } catch (err) {
        console.error('Error fetching Pinterest data:', err);
        setError('Failed to load Pinterest pins. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchPins();
  }, [boardId]);
  
  const handlePinClick = (pin: PinterestPin) => {
    setSelectedPin(pin);
  };
  
  const closeLightbox = () => {
    setSelectedPin(null);
  };
  
  if (loading) {
    return (
      <div className="py-12">
        <p className="text-center text-gray-400">Loading Pinterest pins...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="py-12">
        <p className="text-center text-red-500">{error}</p>
        <p className="text-center mt-4">
          <a 
            href={`https://pinterest.com/pin/${boardId}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 underline"
          >
            View board on Pinterest
          </a>
        </p>
      </div>
    );
  }
  
  if (pins.length === 0) {
    return (
      <div className="py-12">
        <p className="text-center text-gray-400">No pins found for this board.</p>
      </div>
    );
  }
  
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {pins.map((pin) => (
          <div 
            key={pin.id}
            className="aspect-[3/4] cursor-pointer border border-gray-800 overflow-hidden"
            onClick={() => handlePinClick(pin)}
          >
            <div className="relative h-full">
              <Image
                src={pin.media.images.original.url}
                alt={pin.alt_text || 'Pinterest pin'}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Lightbox */}
      {selectedPin && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative max-w-3xl max-h-[90vh] w-full h-full bg-black"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 text-white z-10"
              onClick={closeLightbox}
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
            
            <div className="h-full w-full overflow-hidden flex items-center justify-center">
              <Image
                src={selectedPin.media.images.original.url}
                alt={selectedPin.alt_text || 'Pinterest pin'}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </div>
            
            {selectedPin.description && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-4">
                <p className="text-white">{selectedPin.description}</p>
                <a 
                  href={selectedPin.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline mt-2 inline-block"
                  onClick={(e) => e.stopPropagation()}
                >
                  View on Pinterest
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
} 