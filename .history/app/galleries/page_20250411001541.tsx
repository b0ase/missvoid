import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Galleries | MissVoid.Store",
  description: "London-based luxury fashion house creating distinctive fetish-inspired evening wear",
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

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">MISS VOID COLLECTIONS</h1>
        <div className="w-20 md:w-24 h-1 bg-white mx-auto mb-6 md:mb-8"></div>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 md:mb-12 px-4 text-gray-300 leading-relaxed">
          Browse our distinctive collections of fetish-inspired evening wear
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {galleries.map((gallery, index) => (
          <Link 
            key={index} 
            href={`/galleries/${gallery.id}`} 
            className="group block transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="overflow-hidden rounded-lg border border-gray-700 bg-black bg-opacity-40 h-full">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={gallery.image}
                  alt={gallery.name}
                  fill
                  className="object-cover scale-105 group-hover:scale-110 transition-all duration-700 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70">
                  <div className="absolute bottom-0 w-full p-6">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">{gallery.name}</h2>
                    <div className="w-10 h-0.5 bg-white mb-3 transition-all duration-300 group-hover:w-16"></div>
                    <span className="inline-block py-1 px-3 border border-white bg-black bg-opacity-50 text-xs uppercase tracking-wider transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      Explore Gallery
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-5 md:p-6">
                <p className="text-gray-300 text-base leading-relaxed">{gallery.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 