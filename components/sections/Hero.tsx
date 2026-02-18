'use client';

import { ArrowRightIcon, CheckCircleIcon } from '@/lib/icons';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-neutral-50 -z-10" />

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="heading-xl mb-6">
              Expert Solutions for{' '}
              <span className="text-primary-600">Your Business</span>
            </h1>

            <p className="body-lg mb-8">
              Transform your business with professional consulting services. We
              deliver strategic insights and practical solutions tailored to
              your unique challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center gap-2">
                <CheckCircleIcon />
                <span className="text-neutral-700">15+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon />
                <span className="text-neutral-700">500+ Clients Served</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary group">
                Schedule Consultation
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  <ArrowRightIcon />
                </span>
              </a>
              <a href="#services" className="btn-secondary">
                Our Services
              </a>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-100 to-primary-200 shadow-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
