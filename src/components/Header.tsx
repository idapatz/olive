import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-darkOlive-900/80 backdrop-blur-md">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Logo und Name */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 bg-[#FF69B4] rounded-full transform rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
              <div className="absolute inset-2 bg-darkOlive-900 rounded-full"></div>
              <div className="absolute inset-3 bg-[#FF69B4] rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-2xl font-light text-white group-hover:text-[#FF69B4] transition-colors duration-300">
              Olive
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#why" className="text-darkOlive-200 hover:text-[#FF69B4] transition-colors duration-300 relative group">
              Warum
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF69B4] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#olive-oil" className="text-darkOlive-200 hover:text-[#FF69B4] transition-colors duration-300 relative group">
              Olivenöl
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF69B4] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#crowdfunding" className="text-darkOlive-200 hover:text-[#FF69B4] transition-colors duration-300 relative group">
              Crowdfunding
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF69B4] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link href="#about" className="text-darkOlive-200 hover:text-[#FF69B4] transition-colors duration-300 relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FF69B4] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="py-4 space-y-4">
            <Link 
              href="#why" 
              className="block text-darkOlive-200 hover:text-[#FF69B4] transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Warum
            </Link>
            <Link 
              href="#olive-oil" 
              className="block text-darkOlive-200 hover:text-[#FF69B4] transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Olivenöl
            </Link>
            <Link 
              href="#crowdfunding" 
              className="block text-darkOlive-200 hover:text-[#FF69B4] transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Crowdfunding
            </Link>
            <Link 
              href="#about" 
              className="block text-darkOlive-200 hover:text-[#FF69B4] transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </nav>
        </div>
      </div>

      {/* Dekorative Elemente */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FF69B4] to-transparent opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-darkOlive-700 to-transparent opacity-30"></div>
    </header>
  );
};

export default Header; 