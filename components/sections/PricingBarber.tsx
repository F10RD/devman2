'use client';

import { useState } from 'react';
import BookingModal from '../booking/BookingModal';
import { barberConfig } from '@/lib/booking-config-barber';

const plans = [
  {
    name: 'Single Visit',
    price: 'From $20',
    description: 'Pay per visit, no commitment',
    features: [
      'Any single service',
      'Professional barber',
      'Hot towel finish',
      'Styling advice',
    ],
    cta: 'Book a Visit',
    highlight: false,
  },
  {
    name: 'Monthly Pass',
    price: '$99/mo',
    description: '4 haircuts per month',
    features: [
      '4 Classic Haircuts',
      'Priority booking',
      'Free beard trim',
      'Loyalty discount 10%',
      'Product samples',
    ],
    cta: 'Get Monthly Pass',
    highlight: true,
  },
  {
    name: 'VIP Grooming',
    price: '$149/mo',
    description: 'Full unlimited grooming',
    features: [
      'Unlimited haircuts',
      'Unlimited beard trims',
      '1 Hot towel shave/mo',
      'Priority booking',
      'Free grooming products',
      'VIP lounge access',
    ],
    cta: 'Go VIP',
    highlight: false,
  },
];

export default function PricingBarber() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <>
      <section id="pricing" className="bg-zinc-950 py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="mb-16">
            <p className="text-orange-500 text-xs uppercase tracking-widest font-medium mb-3">
              Transparent Pricing
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
              Simple & Fair
            </h2>
            <div className="w-16 h-1 bg-orange-500 mt-4" />
          </div>

          {/* Plans */}
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-xl p-8 border transition-all
                  ${
                    plan.highlight
                      ? 'bg-orange-500 border-orange-400 scale-105'
                      : 'bg-zinc-900 border-zinc-800 hover:border-zinc-600'
                  }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span
                      className="bg-black text-orange-500 text-xs font-black 
                      uppercase tracking-widest px-4 py-1 rounded-full border border-orange-500"
                    >
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p
                    className={`text-xs uppercase tracking-widest font-bold mb-2
                    ${plan.highlight ? 'text-black/70' : 'text-zinc-500'}`}
                  >
                    {plan.name}
                  </p>
                  <p
                    className={`text-4xl font-black ${
                      plan.highlight ? 'text-black' : 'text-white'
                    }`}
                  >
                    {plan.price}
                  </p>
                  <p
                    className={`text-sm mt-1 ${
                      plan.highlight ? 'text-black/70' : 'text-zinc-500'
                    }`}
                  >
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <svg
                        className={`w-4 h-4 flex-shrink-0 
                        ${plan.highlight ? 'text-black' : 'text-orange-500'}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span
                        className={`text-sm ${
                          plan.highlight ? 'text-black' : 'text-zinc-400'
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setIsBookingOpen(true)}
                  className={`w-full py-3 rounded font-black uppercase tracking-wider text-sm transition-all
                    ${
                      plan.highlight
                        ? 'bg-black text-orange-500 hover:bg-zinc-900'
                        : 'bg-orange-500 hover:bg-orange-400 text-black'
                    }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
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
