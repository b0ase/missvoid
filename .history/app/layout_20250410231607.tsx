import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MissVoid.Store",
  description: "London fashion house creating fetish-inspired evening wear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col bg-black text-white`}
      >
        <header className="py-4 px-6 border-b border-gray-800">
          <nav className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 relative overflow-hidden">
                <Image 
                  src="/logo.png" 
                  alt="Miss Void Logo" 
                  width={40} 
                  height={40} 
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-xl font-bold tracking-wider">MISSVOID</span>
            </Link>
            <ul className="flex gap-6">
              <li><Link href="/" className="hover:text-gray-300 transition">HOME</Link></li>
              <li><Link href="/galleries" className="hover:text-gray-300 transition">GALLERIES</Link></li>
              <li><Link href="/about" className="hover:text-gray-300 transition">ABOUT</Link></li>
            </ul>
          </nav>
        </header>
        
        <main className="flex-grow">
          {children}
        </main>
        
        <footer className="py-6 px-6 border-t border-gray-800 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center gap-2 mb-4 md:mb-0">
                <div className="w-6 h-6 relative">
                  <Image 
                    src="/logo.png" 
                    alt="Miss Void Logo" 
                    width={24} 
                    height={24} 
                    className="object-contain"
                  />
                </div>
                <p className="text-sm">© {new Date().getFullYear()} MissVoid.Store - All Rights Reserved</p>
              </div>
              <div className="flex gap-6 mt-4 md:mt-0">
                <Link href="/privacy-policy" className="hover:text-gray-300 text-sm transition">Privacy Policy</Link>
                <Link href="/contact" className="hover:text-gray-300 text-sm transition">Contact</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
