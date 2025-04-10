import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Galleries | MissVoid.Store",
  description: "London fashion house creating fetish-inspired evening wear",
};

export default function GalleriesPage() {
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

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">MISS VOID COLLECTIONS</h1>
        <div className="w-16 md:w-20 h-1 bg-white mx-auto mb-4 md:mb-6"></div>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6 md:mb-10 px-4">
          London fashion house creating fetish-inspired evening wear
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {galleries.map((gallery, index) => (
          <Link 
            key={index} 
            href={`/galleries/${gallery.id}`} 
            className="group cursor-pointer block mb-6 md:mb-0"
          >
            <div className="overflow-hidden border border-gray-800">
              <div className="relative h-64 md:h-80 w-full">
                <Image
                  src={gallery.image}
                  alt={gallery.name}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold text-center px-4 text-white">{gallery.name}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-2 md:p-3 text-white text-xs text-center">
                  VIEW GALLERY
                </div>
              </div>
              <div className="p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold mb-2">{gallery.name}</h2>
                <p className="text-gray-400 text-sm md:text-base">{gallery.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 