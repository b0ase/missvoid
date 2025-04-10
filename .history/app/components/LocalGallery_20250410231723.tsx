"use client";

import { useState } from 'react';
import Image from 'next/image';
import { PINTEREST_CONFIG } from '@/app/config/pinterest';
import DemoGallery from './DemoGallery';

type GalleryImage = {
  id: string;
  src: string;
  alt: string;
};

type LocalGalleryProps = {
  boardId: string;
};

export default function LocalGallery({ boardId }: LocalGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  
  // Find the board data
  const board = PINTEREST_CONFIG.BOARDS.find(b => b.id === boardId);
  
  if (!board) {
    return (
      <div className="py-12 text-center">
        <div className="inline-block border border-gray-800 px-6 py-3 text-gray-400 bg-black">
          GALLERY NOT FOUND
        </div>
      </div>
    );
  }
  
  // Use Demo Gallery fallback
  return (
    <div className="py-12">
      <DemoGallery 
        boardName={board.name || 'MISS VOID'} 
        imageCount={board.count || 10} 
      />
    </div>
  );
} 