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
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-16">
      <section className="mb-16 md:mb-24">
        <div className="text-center mb-10 md:mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">MISSVOID.STORE</h1>
          <div className="w-20 md:w-28 h-1 bg-white mx-auto mb-6 md:mb-8"></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto px-2 tracking-wide">
            London-based luxury fashion house creating distinctive fetish-inspired evening wear
          </p>
        </div>
        
        <div className="relative h-[60vh] md:h-[80vh] w-full rounded-lg overflow-hidden border border-gray-700">
          <Image 
            src="/images/hero.jpg"
            alt="MISS VOID"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent bg-opacity-70 flex items-center justify-center">
            <div className="text-white text-center p-6 md:p-8 max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-10 tracking-tight">FEATURED COLLECTION</h2>
              <Link 
                href="/galleries" 
                className="inline-block bg-black text-white px-8 md:px-10 py-3 md:py-4 border border-white hover:bg-white hover:text-black transition-colors duration-300"
              >
                VIEW GALLERIES
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <section className="mb-16 md:mb-24">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">LATEST COLLECTIONS</h2>
          <div className="w-16 md:w-20 h-1 bg-white mx-auto mb-6 md:mb-8"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {featuredGalleries.map((gallery, index) => (
            <Link key={index} href={`/galleries/${gallery.id}`} className="group block">
              <div className="relative h-96 md:h-[30rem] w-full overflow-hidden rounded-lg border border-gray-700">
                <Image
                  src={gallery.image}
                  alt={gallery.name}
                  fill
                  className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 tracking-tight">{gallery.name}</h3>
                    <p className="text-base md:text-lg text-gray-300 mb-6">{gallery.description}</p>
                    <span className="inline-block py-2 px-4 border border-white bg-black bg-opacity-50 text-sm uppercase tracking-wider transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      View Gallery
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-10 md:mt-14">
          <Link 
            href="/galleries" 
            className="inline-block border border-white px-8 md:px-10 py-3 md:py-4 font-medium hover:bg-white hover:text-black transition-colors duration-300"
          >
            VIEW ALL GALLERIES
          </Link>
        </div>
      </section>
      
      <section className="mb-16 md:mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border border-gray-700 p-8 md:p-12 bg-black rounded-lg">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight">ABOUT MISS VOID</h2>
            <div className="w-14 md:w-16 h-1 bg-white mb-6 md:mb-8"></div>
            <p className="mb-8 text-base md:text-lg leading-relaxed">
              London-based luxury fashion house creating distinctive fetish-inspired evening wear, merging latex, leather, and PVC with elegant silhouettes and avant-garde design elements.
            </p>
            <Link 
              href="/about" 
              className="inline-block border border-white px-6 md:px-8 py-3 mt-2 md:mt-4 self-start hover:bg-white hover:text-black transition-colors duration-300"
            >
              DISCOVER MORE
            </Link>
          </div>
          <div className="relative h-80 md:h-96 rounded-lg overflow-hidden border border-gray-700 mt-6 md:mt-0">
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
