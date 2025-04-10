import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "MissVoid.Store",
  description: "London-based luxury fashion house creating distinctive fetish-inspired evening wear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-black text-white">
        <header className="py-5 px-6 border-b border-gray-800 sticky top-0 z-40 bg-black bg-opacity-95 backdrop-blur-sm">
          <nav className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
            <Link href="/" className="text-2xl font-bold tracking-widest mb-5 sm:mb-0 hover:opacity-80 transition-opacity">MISSVOID</Link>
            <ul className="flex gap-8 items-center">
              <li>
                <Link 
                  href="/" 
                  className="hover:text-white text-gray-300 px-2 py-1 transition-colors duration-200 tracking-wider text-sm uppercase font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/galleries" 
                  className="hover:text-white text-gray-300 px-2 py-1 transition-colors duration-200 tracking-wider text-sm uppercase font-medium"
                >
                  Galleries
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="hover:text-white text-gray-300 px-2 py-1 transition-colors duration-200 tracking-wider text-sm uppercase font-medium"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        
        <main className="flex-grow">
          {children}
        </main>
        
        <footer className="py-10 px-6 border-t border-gray-800 bg-black">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold tracking-wider mb-4">MISSVOID</h3>
                <p className="text-gray-400 max-w-md mb-6">
                  London-based luxury fashion house creating distinctive fetish-inspired evening wear, merging elegant silhouettes with avant-garde design elements.
                </p>
              </div>
              <div className="flex flex-col md:items-end justify-center">
                <div className="flex gap-6 mb-6">
                  <Link href="/galleries" className="hover:text-white text-gray-400 transition-colors">Galleries</Link>
                  <Link href="/about" className="hover:text-white text-gray-400 transition-colors">About</Link>
                  <Link href="/privacy-policy" className="hover:text-white text-gray-400 transition-colors">Privacy</Link>
                </div>
                <p className="text-sm text-gray-500">© {new Date().getFullYear()} MissVoid.Store - All Rights Reserved</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
