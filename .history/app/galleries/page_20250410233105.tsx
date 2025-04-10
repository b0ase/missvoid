import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Galleries | MissVoid.Store",
  description: "London fashion house creating fetish-inspired evening wear",
};

export default function GalleriesPage() {
  const galleries = [
    { name: 'VOID XXX', description: 'Our most provocative evening wear collection', image: '/images/void-xxx.jpg' },
    { name: 'VOID CHIC', description: 'Elegant and sophisticated fetish-inspired fashion', image: '/images/void-chic.jpg' },
    { name: 'VOID FOOTWEAR', description: 'Statement footwear for bold fashion statements', image: '/images/hero.jpg' },
    { name: 'MISS VOID', description: 'Our signature collection featuring iconic designs', image: '/images/miss-void.jpg' },
    { name: 'VOID INK', description: 'Dark and mysterious artistic expression', image: '/images/about.jpg' },
    { name: 'VOID BOUDOIR', description: 'Intimate and alluring boudoir fashion', image: '/images/void-chic.jpg' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">MISS VOID COLLECTIONS</h1>
        <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
        <p className="text-xl max-w-2xl mx-auto mb-10">
          London fashion house creating fetish-inspired evening wear
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleries.map((gallery, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="overflow-hidden border border-gray-800">
              <div className="relative h-80 w-full">
                <Image
                  src={gallery.image}
                  alt={gallery.name}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <span className="text-2xl font-bold text-center px-4 text-white">{gallery.name}</span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3 text-white text-xs">
                  VIEW GALLERY
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2">{gallery.name}</h2>
                <p className="text-gray-400">{gallery.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 