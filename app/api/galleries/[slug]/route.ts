import { list } from '@vercel/blob';
import { NextResponse } from 'next/server';

// Gallery data (same as in the gallery page)
const galleries = [
  { 
    id: 'void-xxx', 
    name: 'VOID XXX', 
    description: 'Our most provocative evening wear collection'
  },
  { 
    id: 'void-chic', 
    name: 'VOID CHIC', 
    description: 'Elegant and sophisticated fetish-inspired fashion'
  },
  { 
    id: 'void-footwear', 
    name: 'VOID FOOTWEAR', 
    description: 'Statement footwear for bold fashion statements'
  },
  { 
    id: 'miss-void', 
    name: 'MISS VOID', 
    description: 'Our signature collection featuring iconic designs'
  },
  { 
    id: 'void-ink', 
    name: 'VOID INK', 
    description: 'Dark and mysterious artistic expression'
  },
  { 
    id: 'void-boudoir', 
    name: 'VOID BOUDOIR', 
    description: 'Intimate and alluring boudoir fashion'
  }
];

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
): Promise<NextResponse> {
  const { slug } = params;
  
  // Check if gallery exists
  const gallery = galleries.find(g => g.id === slug);
  
  if (!gallery) {
    return NextResponse.json(
      { error: 'Gallery not found' },
      { status: 404 }
    );
  }
  
  try {
    // List all blobs with the gallery's path prefix
    const { blobs } = await list({
      prefix: `galleries/${slug}/`
    });
    
    // Return gallery info and image URLs
    return NextResponse.json({
      gallery: gallery,
      images: blobs.map(blob => ({
        url: blob.url,
        name: blob.pathname.split('/').pop()
      }))
    });
  } catch (error) {
    console.error('Error fetching images from Vercel Blob:', error);
    return NextResponse.json(
      { error: 'Failed to fetch gallery images' },
      { status: 500 }
    );
  }
} 