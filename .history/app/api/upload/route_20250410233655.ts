import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request: Request): Promise<NextResponse> {
  const { searchParams } = new URL(request.url);
  const filename = searchParams.get('filename');
  const galleryId = searchParams.get('gallery');

  // Ensure filename and gallery are provided
  if (!filename || !galleryId) {
    return NextResponse.json(
      { error: 'Filename and gallery are required' },
      { status: 400 }
    );
  }

  // Handle form data (multipart/form-data)
  const formData = await request.formData();
  const file = formData.get('file') as File;
  
  if (!file) {
    return NextResponse.json(
      { error: 'No file found in request' },
      { status: 400 }
    );
  }

  // Create path with gallery ID
  const blobPath = `galleries/${galleryId}/${filename}`;

  try {
    // Upload to Vercel Blob
    const blob = await put(blobPath, file, {
      access: 'public',
    });

    // Return the blob URL that can be used to access the image
    return NextResponse.json({ url: blob.url });
  } catch (error) {
    console.error('Error uploading to Vercel Blob:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
} 