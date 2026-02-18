import { BookingConfig } from './booking-types';

export const barberConfig: BookingConfig = {
  businessName: 'Iron & Blade Barbershop',
  businessEmail: 'info@ironblade.com',
  layout: 'barber',

  services: [
    {
      id: 'classic-cut',
      name: 'Classic Haircut',
      duration: 30,
      price: 35,
      description: 'Clean cut, styled to perfection',
    },
    {
      id: 'beard-trim',
      name: 'Beard Trim & Shape',
      duration: 20,
      price: 25,
      description: 'Sculpted beard, sharp lines',
    },
    {
      id: 'hot-shave',
      name: 'Hot Towel Shave',
      duration: 40,
      price: 45,
      description: 'Traditional straight razor shave',
    },
    {
      id: 'cut-beard',
      name: 'Cut + Beard Combo',
      duration: 50,
      price: 55,
      description: 'Full grooming experience',
    },
    {
      id: 'fade',
      name: 'Skin Fade',
      duration: 45,
      price: 40,
      description: 'High, mid or low fade',
    },
    {
      id: 'kids-cut',
      name: "Kid's Cut",
      duration: 20,
      price: 20,
      description: 'Under 12 years old',
    },
  ],

  team: [
    {
      id: 'marcus',
      name: 'Marcus',
      role: 'Master Barber',
      avatar: '✂️',
    },
    {
      id: 'dante',
      name: 'Dante',
      role: 'Fade Specialist',
      avatar: '💈',
    },
    {
      id: 'ricky',
      name: 'Ricky',
      role: 'Beard Artist',
      avatar: '🪒',
    },
  ],

  workingHours: {
    start: '09:00',
    end: '20:00',
    slotDuration: 30,
  },

  workingDays: [1, 2, 3, 4, 5, 6], // Pon–Sob (niedziela wolna)
};
