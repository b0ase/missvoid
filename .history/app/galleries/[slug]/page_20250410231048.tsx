import Link from "next/link";
import { notFound } from "next/navigation";
import { PINTEREST_CONFIG } from "@/app/config/pinterest";
import LocalGallery from "@/app/components/LocalGallery";

// Get board data from our config
function getBoardData(slug: string) {
  const board = PINTEREST_CONFIG.BOARDS.find(board => board.id === slug);
  if (!board) return null;
  return board;
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const board = getBoardData(params.slug);
  
  if (!board) {
    return {
      title: "Gallery Not Found | MissVoid.Store",
      description: "The requested gallery could not be found",
    };
  }
  
  return {
    title: `${board.name} | MissVoid.Store`,
    description: board.description,
  };
}

export default async function GalleryPage({ params }: { params: { slug: string } }) {
  const board = getBoardData(params.slug);
  
  if (!board) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="mb-8">
        <Link 
          href="/galleries"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          BACK TO GALLERIES
        </Link>
      </div>
      
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 tracking-wider">{board.name}</h1>
        <div className="w-20 h-1 bg-white mx-auto mb-6"></div>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          {board.description}
        </p>
      </div>

      <div className="bg-black p-4 md:p-8 border border-gray-800">
        <LocalGallery boardId={params.slug} />
      </div>
    </div>
  );
} 