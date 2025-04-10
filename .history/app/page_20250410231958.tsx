import Link from "next/link";
import Image from "next/image";
import { PINTEREST_CONFIG } from "@/app/config/pinterest";

export default function Home() {
  // Take the first 3 boards for featured galleries
  const featuredGalleries = PINTEREST_CONFIG.BOARDS.slice(0, 3);
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <section className="mb-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wider">MISSVOID.STORE</h1>
          <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            London fashion house creating fetish-inspired evening wear, merging latex, leather, and PVC
          </p>
        </div>
        
        <div className="relative h-[70vh] w-full border border-gray-800">
          <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
            <h2 className="text-5xl font-bold tracking-wider">MISS VOID</h2>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-white text-center p-6">
              <h2 className="text-3xl font-bold mb-8 tracking-wider">FEATURED COLLECTION</h2>
              <Link 
                href="/galleries" 
                className="inline-block bg-black text-white px-8 py-3 border border-white hover:bg-gray-900 transition"
              >
                VIEW GALLERIES
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 tracking-wider">LATEST COLLECTIONS</h2>
          <div className="w-16 h-1 bg-white mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredGalleries.map((gallery) => (
            <Link key={gallery.id} href={`/galleries/${gallery.id}`} className="group">
              <div className="relative h-80 w-full overflow-hidden border border-gray-800">
                <div className="absolute inset-0 bg-black flex items-center justify-center">
                  <span className="text-2xl font-bold text-white z-10 tracking-wider">{gallery.name}</span>
                </div>
                
                <Image
                  src={`/demo-images/${gallery.name}/IMG_8350.JPG`}
                  alt={gallery.name}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-70 filter grayscale hover:grayscale-0 transition-all duration-500"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 text-white">
                  <p className="line-clamp-1 text-sm text-gray-300">{gallery.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <Link 
            href="/galleries" 
            className="inline-block border border-white px-8 py-3 font-medium hover:bg-white hover:text-black transition"
          >
            VIEW ALL GALLERIES
          </Link>
        </div>
      </section>
      
      <section className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-gray-800 p-8 bg-black">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-4 tracking-wider">ABOUT MISS VOID</h2>
            <div className="w-12 h-1 bg-white mb-6"></div>
            <p className="text-gray-300 mb-6">
              London fashion house creating fetish-inspired evening wear, merging latex, leather, and PVC with elegant silhouettes and avant-garde design elements. Each piece embodies our distinctive noir aesthetic.
            </p>
            <Link 
              href="/about" 
              className="inline-block border border-white px-6 py-2 mt-4 self-start hover:bg-white hover:text-black transition"
            >
              DISCOVER MORE
            </Link>
          </div>
          <div className="relative h-80 border border-gray-800">
            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
              <h2 className="text-3xl font-bold">MISS VOID</h2>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
