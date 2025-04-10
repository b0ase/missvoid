'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AdminPage() {
  const [gallery, setGallery] = useState('void-xxx');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ success: boolean; message: string; url?: string } | null>(null);

  const galleries = [
    { id: 'void-xxx', name: 'VOID XXX' },
    { id: 'void-chic', name: 'VOID CHIC' },
    { id: 'void-footwear', name: 'VOID FOOTWEAR' },
    { id: 'miss-void', name: 'MISS VOID' },
    { id: 'void-ink', name: 'VOID INK' },
    { id: 'void-boudoir', name: 'VOID BOUDOIR' }
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      setResult({
        success: false,
        message: 'Please select a file to upload'
      });
      return;
    }
    
    setLoading(true);
    setResult(null);
    
    try {
      // Create form data
      const formData = new FormData();
      formData.append('file', file);
      
      // Generate a safe filename (original name + timestamp)
      const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;
      
      // Upload to our API
      const response = await fetch(`/api/upload?filename=${filename}&gallery=${gallery}`, {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to upload file');
      }
      
      setResult({
        success: true,
        message: 'Image uploaded successfully!',
        url: data.url
      });
    } catch (error) {
      setResult({
        success: false,
        message: error instanceof Error ? error.message : 'An unknown error occurred'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin - Upload Images</h1>
        <Link href="/" className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white">
          Back to Site
        </Link>
      </div>
      
      <div className="bg-gray-900 p-6 rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2">Select Gallery:</label>
            <select 
              value={gallery} 
              onChange={(e) => setGallery(e.target.value)}
              className="w-full px-4 py-2 bg-black border border-gray-700 text-white"
            >
              {galleries.map(g => (
                <option key={g.id} value={g.id}>{g.name}</option>
              ))}
            </select>
          </div>
          
          <div className="mb-6">
            <label className="block mb-2">Select Image:</label>
            <input 
              type="file" 
              onChange={handleFileChange}
              accept="image/*"
              className="w-full px-4 py-2 bg-black border border-gray-700 text-white"
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="px-6 py-3 bg-white text-black font-bold hover:bg-gray-200 disabled:opacity-50"
          >
            {loading ? 'Uploading...' : 'Upload Image'}
          </button>
        </form>
        
        {result && (
          <div className={`mt-6 p-4 ${result.success ? 'bg-green-900' : 'bg-red-900'}`}>
            <p>{result.message}</p>
            {result.url && (
              <div className="mt-4">
                <p className="mb-2">Image URL:</p>
                <a 
                  href={result.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline break-all"
                >
                  {result.url}
                </a>
              </div>
            )}
          </div>
        )}
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Gallery Links</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleries.map(g => (
            <Link 
              key={g.id}
              href={`/galleries/${g.id}`}
              className="px-4 py-3 bg-gray-800 hover:bg-gray-700 text-center"
            >
              {g.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
} 