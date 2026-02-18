'use client';

import { useState } from 'react';
import { faq } from '@/lib/config-beauty';

export default function FAQBeauty() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section id="faq" className="section-padding bg-neutral-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-100 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rosegold-400 to-burgundy-500 mx-auto mb-6"></div>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Everything you need to know about our services and booking
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faq.map((item) => (
            <div
              key={item.id}
              className="bg-neutral-900 rounded-xl overflow-hidden border-2 border-burgundy-900/30 hover:border-rosegold-700/50 transition-all shadow-lg"
            >
              <button
                onClick={() => setOpenId(openId === item.id ? null : item.id)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-neutral-800 transition-colors"
              >
                <span className="font-semibold text-neutral-200 pr-4">
                  {item.question}
                </span>
                <span className="text-2xl text-rosegold-400 flex-shrink-0 font-light">
                  {openId === item.id ? '−' : '+'}
                </span>
              </button>

              {openId === item.id && (
                <div className="px-6 pb-5 text-neutral-300 leading-relaxed border-t border-burgundy-900/20">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
