'use client';

import { useState } from 'react';
import Link from 'next/link';

type HeaderBeautyProps = {
  onBookClick?: () => void;
};

export default function HeaderBeauty({ onBookClick }: HeaderBeautyProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-neutral-950/95 backdrop-blur-sm border-b border-burgundy-900/30">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/beauty" className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-rosegold-400 to-burgundy-500 bg-clip-text text-transparent">
              Bella Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#services"
              className="text-neutral-300 hover:text-rosegold-400 transition-colors"
            >
              Services
            </a>
            <a
              href="#team"
              className="text-neutral-300 hover:text-rosegold-400 transition-colors"
            >
              Team
            </a>
            <a
              href="#testimonials"
              className="text-neutral-300 hover:text-rosegold-400 transition-colors"
            >
              Reviews
            </a>
            <a
              href="#contact"
              className="text-neutral-300 hover:text-rosegold-400 transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+3252123456"
              className="flex items-center gap-2 text-neutral-300 hover:text-rosegold-400 transition-colors"
            >
              <span className="text-lg">📞</span>
              <span>+32 52 123 456</span>
            </a>
            <button
              onClick={onBookClick}
              className="btn-primary bg-gradient-to-r from-burgundy-600 to-burgundy-700 hover:from-burgundy-700 hover:to-burgundy-800"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-neutral-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-burgundy-900/30">
            <nav className="flex flex-col gap-4">
              <a
                href="#services"
                className="text-neutral-300 hover:text-rosegold-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </a>
              <a
                href="#team"
                className="text-neutral-300 hover:text-rosegold-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Team
              </a>
              <a
                href="#testimonials"
                className="text-neutral-300 hover:text-rosegold-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Reviews
              </a>
              <a
                href="#contact"
                className="text-neutral-300 hover:text-rosegold-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <button
                onClick={() => {
                  onBookClick?.();
                  setIsMobileMenuOpen(false);
                }}
                className="btn-primary bg-gradient-to-r from-burgundy-600 to-burgundy-700 hover:from-burgundy-700 hover:to-burgundy-800 w-full"
              >
                Book Now
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
