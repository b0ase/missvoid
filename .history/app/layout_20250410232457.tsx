import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

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
      <body>
        <header className="py-4 px-6 border-b border-gray-800">
          <nav className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold tracking-wider">MISSVOID</Link>
            <ul className="flex gap-6">
              <li><Link href="/" className="hover:opacity-70">HOME</Link></li>
              <li><Link href="/galleries" className="hover:opacity-70">GALLERIES</Link></li>
              <li><Link href="/about" className="hover:opacity-70">ABOUT</Link></li>
            </ul>
          </nav>
        </header>
        
        <main>
          {children}
        </main>
        
        <footer className="py-6 px-6 border-t border-gray-800 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center">
              <p className="text-sm">© {new Date().getFullYear()} MissVoid.Store - All Rights Reserved</p>
              <div className="flex gap-6">
                <Link href="/privacy-policy" className="hover:opacity-70 text-sm">Privacy Policy</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
