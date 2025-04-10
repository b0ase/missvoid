import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-5xl font-bold mb-6">404</h1>
      <h2 className="text-2xl font-bold mb-4">Page Not Found</h2>
      <p className="max-w-md mb-8 text-gray-400">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link 
        href="/"
        className="inline-block border border-white px-8 py-3 font-medium hover:bg-white hover:text-black transition"
      >
        RETURN HOME
      </Link>
    </div>
  );
} 