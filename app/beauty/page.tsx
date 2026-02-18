'use client';

import { useState } from 'react';
import HeaderBeauty from '@/components/layout/HeaderBeauty';
import HeroBeauty from '@/components/sections/HeroBeauty';
import ServicesBeauty from '@/components/sections/ServicesBeauty';
import TeamBeauty from '@/components/sections/TeamBeauty';
import TestimonialsBeauty from '@/components/sections/TestimonialsBeauty';
import FAQBeauty from '@/components/sections/FAQBeauty';
import ContactBeauty from '@/components/sections/ContactBeauty';
import Footer from '@/components/layout/Footer';
import BookingModal from '@/components/booking/BookingModal';
import { beautyBookingConfig } from '@/lib/booking-config-beauty';

export default function BeautyPage() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-neutral-950">
      <HeaderBeauty onBookClick={() => setIsBookingOpen(true)} />
      <HeroBeauty onBookClick={() => setIsBookingOpen(true)} />
      <ServicesBeauty />
      <TeamBeauty />
      <TestimonialsBeauty />
      <FAQBeauty />
      <ContactBeauty />
      <Footer variant="beauty" />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        config={beautyBookingConfig}
      />
    </main>
  );
}
