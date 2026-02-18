import { BookingConfig } from './booking-types';

export const barberConfig: BookingConfig = {
  businessName: 'Iron & Blade Barbershop',

  services: [
    {
      id: 'classic-cut',
      name: 'Classic Haircut',
      category: 'Haircut',
      duration: '30min',
      price: '$35',
    },
    {
      id: 'beard-trim',
      name: 'Beard Trim & Shape',
      category: 'Beard',
      duration: '20min',
      price: '$25',
    },
    {
      id: 'hot-shave',
      name: 'Hot Towel Shave',
      category: 'Shave',
      duration: '40min',
      price: '$45',
    },
    {
      id: 'cut-beard',
      name: 'Cut + Beard Combo',
      category: 'Combo',
      duration: '50min',
      price: '$55',
    },
    {
      id: 'fade',
      name: 'Skin Fade',
      category: 'Haircut',
      duration: '45min',
      price: '$40',
    },
    {
      id: 'kids-cut',
      name: "Kid's Cut",
      category: 'Haircut',
      duration: '20min',
      price: '$20',
    },
  ],

  teamMembers: [
    { id: 'marcus', name: 'Marcus', role: 'Master Barber' },
    { id: 'dante',  name: 'Dante',  role: 'Fade Specialist' },
    { id: 'ricky',  name: 'Ricky',  role: 'Beard Artist' },
    { id: 'any',    name: 'No Preference', role: 'First Available' },
  ],

  businessHours: [
    { day: 'Monday',    open: '09:00', close: '20:00' },
    { day: 'Tuesday',   open: '09:00', close: '20:00' },
    { day: 'Wednesday', open: '09:00', close: '20:00' },
    { day: 'Thursday',  open: '09:00', close: '20:00' },
    { day: 'Friday',    open: '09:00', close: '20:00' },
    { day: 'Saturday',  open: '09:00', close: '18:00' },
    { day: 'Sunday',    open: '09:00', close: '18:00', closed: true },
  ],

  timeSlotDuration: 30,
  allowTeamSelection: true,
  requirePhone: false,
  minAdvanceBookingHours: 2,
  maxAdvanceBookingDays: 60,

  theme: {
    primaryColor: 'orange',
    accentColor: 'zinc',
  },
};
