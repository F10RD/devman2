'use client';

import { useState } from 'react';
import BookingModal from '../booking/BookingModal';
import { barberConfig } from '@/lib/booking-config-barber';

export default function HeaderBarber() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/95 backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-orange-500 rounded flex items-center justify-center">
              <span className="text-lg">💈</span>
            </div>
            <div>
              <p className="font-black text-white text-lg leading-none tracking-wide uppercase">
                Iron & Blade
              </p>
              <p className="text-orange-500 text-xs tracking-widest uppercase">
                Barbershop
              </p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {['Services', 'Pricing', 'Our Barbers', 'Gallery', 'Contact'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-zinc-400 hover:text-orange-500 transition-colors tracking-wide uppercase text-xs"
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-orange-500 hover:bg-orange-400 text-black font-bold px-5 py-2.5 
                rounded text-sm uppercase tracking-wider transition-colors"
            >
              Book Now
            </button>
            {/* Mobile menu */}
            <button
              className="md:hidden text-zinc-400 hover:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    menuOpen
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="md:hidden bg-zinc-900 border-t border-zinc-800 px-6 py-4 space-y-3">
            {['Services', 'Pricing', 'Our Barbers', 'Gallery', 'Contact'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  onClick={() => setMenuOpen(false)}
                  className="block text-zinc-400 hover:text-orange-500 transition-colors 
                  uppercase text-sm tracking-wider"
                >
                  {item}
                </a>
              )
            )}
          </div>
        )}
      </header>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        config={barberConfig}
      />
    </>
  );
}
