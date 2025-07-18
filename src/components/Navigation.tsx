'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  return (
    <div className="fixed w-full z-50 flex justify-center pt-4 px-8">
      <nav className="backdrop-blur-md bg-white/70 border border-sage-100/50 supports-[backdrop-filter]:bg-white/50 rounded-full px-12 py-3 shadow-sm w-full max-w-[90rem]">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-sage-900">
            vocavo
          </Link>
          <div className="flex space-x-12">
            <Link href="#why" className="text-sage-700 hover:text-sage-900 transition-colors">
              Warum
            </Link>
            <Link href="#olive-oil" className="text-sage-700 hover:text-sage-900 transition-colors">
              Olivenöl
            </Link>
            <Link href="#crowdfunding" className="text-sage-700 hover:text-sage-900 transition-colors">
              Crowdfunding
            </Link>
            <Link href="#about" className="text-sage-700 hover:text-sage-900 transition-colors">
              About
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
} 