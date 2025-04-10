'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

type GalleryImagesProps = {
  galleryId: string;
  galleryName: string;
};

export default function GalleryImages({ galleryId, galleryName }: GalleryImagesProps) {
  const [images, setImages] = useState<{ url: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Default fallback images if API fails
  const fallbackImages = [
    `/images/${galleryId}.jpg`,
    '/images/hero.jpg',
    '/images/about.jpg'
  ];

  useEffect(() => {
    // Function to fetch gallery images
    async function fetchGalleryImages() {
      try {
        setLoading(true);
        
        const response = await fetch(`/api/galleries/${galleryId}`);
        
        if (!response.ok) {
          throw new Error('Failed to load gallery images');
        }
        
        const data = await response.json();
        
        if (data.images && data.images.length > 0) {
          setImages(data.images);
        } else {
          // Use fallback images if no images from the API
          setImages(fallbackImages.map(url => ({ url })));
        }
      } catch (error) {
        console.error('Error loading gallery:', error);
        setError('Could not load gallery images');
        // Use fallback images on error
        setImages(fallbackImages.map(url => ({ url })));
      } finally {
        setLoading(false);
      }
    }
    
    fetchGalleryImages();
  }, [galleryId]);
  
  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-400">Loading gallery images...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-500">{error}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {fallbackImages.map((src, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[3/4] w-full overflow-hidden border border-gray-800">
                <Image
                  src={src}
                  alt={`${galleryName} - Image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div key={index} className="group cursor-pointer">
          <div className="relative aspect-[3/4] w-full overflow-hidden border border-gray-800">
            <Image
              src={image.url}
              alt={`${galleryName} - Image ${index + 1}`}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      ))}
    </div>
  );
} 