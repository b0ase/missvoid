import Link from "next/link";
import { notFound } from "next/navigation";
import GalleryImages from "../../components/GalleryImages";

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
  },
  { 
    id: 'void-industry', 
    name: 'VOID INDUSTRY', 
    description: 'Industrial and avant-garde inspired pieces', 
    image: '/images/hero.jpg' 
  },
  { 
    id: 'void-muscles', 
    name: 'VOID MUSCLES', 
    description: 'Strength and form-focused collection', 
    image: '/images/about.jpg' 
  }
];

// Generate metadata for the page
export function generateMetadata({ params }: { params: { slug: string } }) {
  const gallery = galleries.find(g => g.id === params.slug);
  
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

export default function GalleryPage({ params }: { params: { slug: string } }) {
  const gallery = galleries.find(g => g.id === params.slug);
  
  if (!gallery) {
    notFound();
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:py-14">
      <Link 
        href="/galleries"
        className="inline-flex items-center mb-8 py-2 px-3 bg-black border border-gray-800 rounded-md text-gray-300 hover:text-white transition-colors duration-200 group"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
        <span className="tracking-wide text-sm font-medium">BACK TO GALLERIES</span>
      </Link>
      
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{gallery.name}</h1>
        <div className="w-20 md:w-24 h-1 bg-white mx-auto mb-6 md:mb-8"></div>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 md:mb-12 px-2 text-gray-300 leading-relaxed">
          {gallery.description}
        </p>
      </div>
      
      <GalleryImages galleryId={params.slug} galleryName={gallery.name} />
    </div>
  );
} 