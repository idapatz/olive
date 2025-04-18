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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-sm backdrop-blur-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-sage-900 font-bold text-xl flex items-center">
            <span className="text-olive-600 mr-1">●</span> Olive
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-sage-800"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
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
            <Link href="#why" className="text-sage-800 hover:text-olive-600 font-medium transition-colors">
              Warum
            </Link>
            <Link href="#olive-oil" className="text-sage-800 hover:text-olive-600 font-medium transition-colors">
              Olivenöl
            </Link>
            <Link href="#about" className="text-sage-800 hover:text-olive-600 font-medium transition-colors">
              Über uns
            </Link>
            <Link
              href="#crowdfunding"
              className="bg-olive-600 text-white px-5 py-2 rounded-full hover:bg-olive-700 transition-colors shadow-sm"
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
          <div className="py-2 bg-white rounded-lg shadow-lg">
            <Link
              href="#why"
              className="block px-4 py-2 text-sage-800 hover:bg-sage-50"
              onClick={() => setIsOpen(false)}
            >
              Warum
            </Link>
            <Link
              href="#olive-oil"
              className="block px-4 py-2 text-sage-800 hover:bg-sage-50"
              onClick={() => setIsOpen(false)}
            >
              Olivenöl
            </Link>
            <Link
              href="#about"
              className="block px-4 py-2 text-sage-800 hover:bg-sage-50"
              onClick={() => setIsOpen(false)}
            >
              Über uns
            </Link>
            <div className="px-4 py-2">
              <Link
                href="#crowdfunding"
                className="block w-full text-center bg-olive-600 text-white px-4 py-2 rounded-full hover:bg-olive-700"
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