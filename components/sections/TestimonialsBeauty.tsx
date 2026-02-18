'use client';

import { StarIcon, QuoteIcon } from '@/lib/icons';
import { testimonials } from '@/lib/config-beauty';

export default function TestimonialsBeauty() {
  return (
    <section className="section-padding bg-neutral-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-100 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rosegold-400 to-burgundy-500 mx-auto mb-6"></div>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Real reviews from real people who love our services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl p-8 border-2 border-burgundy-900/30 hover:border-rosegold-700/50 transition-all shadow-xl relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-burgundy-900/40">
                <QuoteIcon />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 text-rosegold-400">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-neutral-300 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-burgundy-900/30 pt-4">
                <div className="font-bold text-neutral-100">
                  {testimonial.name}
                </div>
                <div className="text-sm text-rosegold-400">
                  {testimonial.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
