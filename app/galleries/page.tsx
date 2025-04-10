import Link from "next/link";
import { PINTEREST_CONFIG, getPinterestBoardUrl } from "@/app/config/pinterest";
import PlaceholderImage from "@/app/components/PlaceholderImage";

export const metadata = {
  title: "Galleries | MissVoid.Store",
  description: "London fashion house creating fetish-inspired evening wear",
};

export default function GalleriesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 tracking-wider">MISS VOID COLLECTIONS</h1>
        <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">
          London fashion house creating fetish-inspired evening wear, merging latex, leather, and PVC
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PINTEREST_CONFIG.BOARDS.map((board, index) => (
          <Link 
            key={board.id} 
            href={`/galleries/${board.id}`} 
            className="group"
          >
            <div className="noir-card overflow-hidden rounded-none">
              <div className="relative h-80 w-full">
                <PlaceholderImage 
                  width={400}
                  height={320}
                  text={board.name}
                  collection="MISS VOID"
                  index={index}
                  className="w-full h-full"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 p-3 text-white text-xs">
                  {board.count} IMAGES
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 tracking-wide">{board.name.toUpperCase()}</h2>
                <p className="text-gray-400">{board.description}</p>
                <div className="mt-6">
                  <Link
                    href={getPinterestBoardUrl(board.id)}
                    className="text-sm text-gray-400 hover:text-white flex items-center transition-colors"
                  >
                    <svg className="w-4 h-4 mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zm4.03 6.22a.75.75 0 00-1.06 0L4.97 10.47a.75.75 0 101.06 1.06L7.5 10.06l.97.97a.75.75 0 001.06 0l.97-.97 3.47 3.47a.75.75 0 101.06-1.06L11.44 8.28a.75.75 0 00-1.06 0l-.97.97-.97-.97z" clipRule="evenodd" />
                    </svg>
                    VIEW COLLECTION
                  </Link>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
} 