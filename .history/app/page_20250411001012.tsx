import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // Featured galleries
  const featuredGalleries = [
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
      id: 'miss-void', 
      name: 'MISS VOID', 
      description: 'Our signature collection featuring iconic designs', 
      image: '/images/miss-void.jpg' 
    }
  ];
  
  return (
    <div className="max-w-6xl mx-auto px-4 py-6 md:py-12">
      <section className="mb-10 md:mb-20">
        <div className="text-center mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">MISSVOID.STORE</h1>
          <div className="w-16 md:w-20 h-1 bg-white mx-auto mb-4 md:mb-6"></div>
          <p className="text-lg md:text-xl max-w-2xl mx-auto px-2">
            London-based fashion house creating luxury fetish-inspired evening wear
          </p>
        </div>
        
        <div className="relative h-[50vh] md:h-[70vh] w-full border border-gray-800">
          <Image 
            src="/images/hero.jpg"
            alt="MISS VOID"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-white text-center p-4 md:p-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">FEATURED COLLECTION</h2>
              <Link 
                href="/galleries" 
                className="inline-block bg-black text-white px-6 md:px-8 py-2 md:py-3 border border-white hover:bg-gray-900"
              >
                VIEW GALLERIES
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-10 md:mb-20">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">LATEST COLLECTIONS</h2>
          <div className="w-12 md:w-16 h-1 bg-white mx-auto mb-4 md:mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {featuredGalleries.map((gallery, index) => (
            <Link key={index} href={`/galleries/${gallery.id}`} className="group mb-6 md:mb-0">
              <div className="relative h-64 md:h-80 w-full overflow-hidden border border-gray-800">
                <Image
                  src={gallery.image}
                  alt={gallery.name}
                  fill
                  className="object-cover opacity-50 group-hover:opacity-70 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <span className="text-xl md:text-2xl font-bold text-white z-10">{gallery.name}</span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-4 text-white">
                  <p className="text-sm md:text-base">{gallery.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-8 md:mt-10">
          <Link 
            href="/galleries" 
            className="inline-block border border-white px-6 md:px-8 py-2 md:py-3 font-medium hover:bg-white hover:text-black"
          >
            VIEW ALL GALLERIES
          </Link>
        </div>
      </section>
      
      <section className="mb-8 md:mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border border-gray-800 p-6 md:p-8 bg-black">
          <div className="flex flex-col justify-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4">ABOUT MISS VOID</h2>
            <div className="w-10 md:w-12 h-1 bg-white mb-4 md:mb-6"></div>
            <p className="mb-6 text-sm md:text-base">
              London-based luxury fashion house creating distinctive fetish-inspired evening wear, merging latex, leather, and PVC with elegant silhouettes and avant-garde design elements.
            </p>
            <Link 
              href="/about" 
              className="inline-block border border-white px-5 md:px-6 py-2 mt-2 md:mt-4 self-start hover:bg-white hover:text-black"
            >
              DISCOVER MORE
            </Link>
          </div>
          <div className="relative h-64 md:h-80 border border-gray-800 mt-6 md:mt-0">
            <Image 
              src="/images/about.jpg"
              alt="About Miss Void" 
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
