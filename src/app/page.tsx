
import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#D9D9D9] flex flex-col">
      <main className="flex-grow flex items-center justify-center px-4">
        <div className='text-[3.2rem]'><span className='text-[#0371E4]'>_</span>Ternal.</div>
      </main>
      <footer className="p-6 md:p-8 text-[2rem]">
        <div className="px-[5rem] mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <a 
            href="https://twitter.com/ternalxyz" 
            className="text-gray-600 hover:text-gray-900 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ternalxyz
          </a>
          
          <Link
            href="/privacy" 
            className="text-blue-500 hover:text-blue-700 transition-colors"
          >
            privacy policy
          </Link>
          
          <Link
            href="/contact" 
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            contact
          </Link>
        </div>
      </footer>
    </div>
  );
}