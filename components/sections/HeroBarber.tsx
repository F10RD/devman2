'use client';

import { useState } from 'react';
import BookingModal from '../booking/BookingModal';
import { barberConfig } from '@/lib/booking-config-barber';

export default function HeroBarber() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen bg-zinc-950 flex items-center overflow-hidden">
        {/* Background pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              #f97316 0px, #f97316 1px,
              transparent 1px, transparent 60px
            )`,
          }}
        />

        {/* Orange accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-orange-500 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Left – Text */}
          <div className="space-y-8">
            <div
              className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 
              rounded px-4 py-2"
            >
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <span className="text-orange-400 text-xs uppercase tracking-widest font-medium">
                Est. 2018 · Premium Grooming
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-black text-white leading-none tracking-tight uppercase">
              Look
              <span className="block text-orange-500">Sharp.</span>
              Feel
              <span className="block text-orange-500">Bold.</span>
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
              Precision cuts, hot towel shaves and expert beard sculpting. Step
              in looking good — step out looking legendary.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="bg-orange-500 hover:bg-orange-400 text-black font-black px-8 py-4 
                  rounded uppercase tracking-wider text-sm transition-all hover:scale-105"
              >
                Book Your Cut
              </button>
              <a
                href="#services"
                className="border border-zinc-700 hover:border-orange-500 text-zinc-300 
                  hover:text-orange-400 font-bold px-8 py-4 rounded uppercase tracking-wider 
                  text-sm transition-all"
              >
                Our Services
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4 border-t border-zinc-800">
              {[
                { value: '2000+', label: 'Happy Clients' },
                { value: '8', label: 'Years Experience' },
                { value: '3', label: 'Master Barbers' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-2xl font-black text-orange-500">{value}</p>
                  <p className="text-zinc-500 text-xs uppercase tracking-wider mt-1">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Visual card */}
          <div className="relative hidden md:block">
            <div className="relative bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/10 rounded-bl-2xl rounded-tr-2xl" />

              <div className="text-center space-y-6">
                <div className="text-8xl">💈</div>
                <div className="space-y-2">
                  <p className="text-white font-black text-2xl uppercase tracking-wide">
                    Iron & Blade
                  </p>
                  <p className="text-orange-500 text-sm uppercase tracking-widest">
                    Premium Barbershop
                  </p>
                </div>
                <div className="border-t border-zinc-800 pt-6 space-y-3">
                  {[
                    '✂️ Classic & Modern Cuts',
                    '🪒 Hot Towel Shaves',
                    '🧔 Beard Sculpting',
                    '💆 Scalp Treatments',
                  ].map((item) => (
                    <p key={item} className="text-zinc-400 text-sm">
                      {item}
                    </p>
                  ))}
                </div>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="w-full bg-orange-500 hover:bg-orange-400 text-black font-black 
                    py-3 rounded uppercase tracking-wider text-sm transition-colors"
                >
                  Book Now — It's Free
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        config={barberConfig}
      />
    </>
  );
}
