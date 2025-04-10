import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "About | MissVoid.Store",
  description: "Learn more about MissVoid.Store and our photography",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">About MissVoid.Store</h1>
        <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
        <p className="text-xl max-w-2xl mx-auto">
          Our story and mission
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
        <div className="md:w-1/2">
          <div className="relative h-80 w-full rounded-lg overflow-hidden">
            <Image 
              src="/images/about.jpg"
              alt="About Miss Void"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="mb-4">
            MissVoid.Store was founded with a passion for capturing and sharing beautiful moments through photography. 
            What started as a personal hobby has grown into a curated collection of galleries that showcase various 
            themes and styles.
          </p>
          <p>
            Our mission is to provide a platform for discovering and enjoying visual art that inspires, provokes thought, 
            and brings joy to its viewers.
          </p>
        </div>
      </div>
      
      <div className="border-t border-gray-200 pt-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Approach</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-gray-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Quality</h3>
            <p className="text-gray-600">
              We focus on showcasing high-quality imagery that demonstrates artistic vision and technical excellence.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gray-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Curation</h3>
            <p className="text-gray-600">
              Each gallery is thoughtfully curated to create a cohesive visual experience that tells a story.
            </p>
          </div>
          
          <div className="text-center">
            <div className="bg-gray-100 h-16 w-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Connection</h3>
            <p className="text-gray-600">
              We believe in the power of images to create emotional connections and foster appreciation for art.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 