'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-darkOlive-900 font-normal text-xl flex items-center tracking-tight">
            <span className="text-vibrantGreen-600 mr-1.5">●</span> Olive
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-darkOlive-800"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#why" className="text-darkOlive-800 hover:text-vibrantGreen-600 font-light transition-colors">
              Warum
            </Link>
            <Link href="#olive-oil" className="text-darkOlive-800 hover:text-vibrantGreen-600 font-light transition-colors">
              Olivenöl
            </Link>
            <Link href="#about" className="text-darkOlive-800 hover:text-vibrantGreen-600 font-light transition-colors">
              Über uns
            </Link>
            <Link
              href="#crowdfunding"
              className="bg-transparent border border-vibrantGreen-600 text-vibrantGreen-600 px-6 py-2 rounded-none hover:bg-vibrantGreen-600 hover:text-white transition-all duration-300"
            >
              Unterstützen
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-60 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-2 bg-white/95 backdrop-blur-md border-t border-sage-100">
            <Link
              href="#why"
              className="block px-4 py-3 text-sage-800 hover:bg-sage-50 font-light"
              onClick={() => setIsOpen(false)}
            >
              Warum
            </Link>
            <Link
              href="#olive-oil"
              className="block px-4 py-3 text-sage-800 hover:bg-sage-50 font-light"
              onClick={() => setIsOpen(false)}
            >
              Olivenöl
            </Link>
            <Link
              href="#about"
              className="block px-4 py-3 text-sage-800 hover:bg-sage-50 font-light"
              onClick={() => setIsOpen(false)}
            >
              Über uns
            </Link>
            <div className="px-4 py-3">
              <Link
                href="#crowdfunding"
                className="block w-full text-center border border-olive-600 text-olive-600 px-4 py-2 hover:bg-olive-600 hover:text-white transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                Unterstützen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
} 