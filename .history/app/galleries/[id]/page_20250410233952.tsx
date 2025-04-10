import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// Define the gallery data
const galleries = [
  { 
    id: 'void-xxx', 
    name: 'VOID XXX', 
    description: 'Our most provocative evening wear collection', 
    image: '/images/void-xxx.jpg' 
  },
  { 
    id: 'void-chic', 
    name: 'VOID CHIC', 
    description: 'Elegant and sophisticated fetish-inspired fashion', 
    image: '/images/void-chic.jpg' 
  },
  { 
    id: 'void-footwear', 
    name: 'VOID FOOTWEAR', 
    description: 'Statement footwear for bold fashion statements', 
    image: '/images/hero.jpg' 
  },
  { 
    id: 'miss-void', 
    name: 'MISS VOID', 
    description: 'Our signature collection featuring iconic designs', 
    image: '/images/miss-void.jpg' 
  },
  { 
    id: 'void-ink', 
    name: 'VOID INK', 
    description: 'Dark and mysterious artistic expression', 
    image: '/images/about.jpg' 
  },
  { 
    id: 'void-boudoir', 
    name: 'VOID BOUDOIR', 
    description: 'Intimate and alluring boudoir fashion', 
    image: '/images/void-chic.jpg' 
  }
];

// Generate metadata for the page
export function generateMetadata({ params }: { params: { id: string } }) {
  const gallery = galleries.find(g => g.id === params.id);
  
  if (!gallery) {
    return {
      title: 'Gallery Not Found | MissVoid.Store',
      description: 'The requested gallery could not be found.'
    };
  }
  
  return {
    title: `${gallery.name} | MissVoid.Store`,
    description: gallery.description
  };
}

// Temporary image data until Blob storage is populated
const tempImages = {
  'void-xxx': ['/images/void-xxx.jpg', '/images/about.jpg', '/images/hero.jpg'],
  'void-chic': ['/images/void-chic.jpg', '/images/miss-void.jpg', '/images/hero.jpg'],
  'void-footwear': ['/images/hero.jpg', '/images/void-xxx.jpg', '/images/miss-void.jpg'],
  'miss-void': ['/images/miss-void.jpg', '/images/void-chic.jpg', '/images/hero.jpg'],
  'void-ink': ['/images/about.jpg', '/images/void-xxx.jpg', '/images/miss-void.jpg'],
  'void-boudoir': ['/images/void-chic.jpg', '/images/about.jpg', '/images/hero.jpg']
};

export default function GalleryPage({ params }: { params: { id: string } }) {
  const gallery = galleries.find(g => g.id === params.id);
  
  if (!gallery) {
    notFound();
  }
  
  // Use temporary image data
  const images = tempImages[params.id as keyof typeof tempImages] || [];
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <Link 
        href="/galleries"
        className="inline-flex items-center mb-8"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        BACK TO GALLERIES
      </Link>
      
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">{gallery.name}</h1>
        <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
        <p className="text-xl max-w-2xl mx-auto mb-10">
          {gallery.description}
        </p>
      </div>
      
      {images.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((src, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-[3/4] w-full overflow-hidden border border-gray-800">
                <Image
                  src={src}
                  alt={`${gallery.name} - Image ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-400">No images found in this gallery.</p>
        </div>
      )}
    </div>
  );
} 