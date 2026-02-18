import { BookingConfig } from './booking-types';

export const beautyBookingConfig: BookingConfig = {
  businessName: 'Bella Studio',

  services: [
    {
      id: '1',
      name: 'Balayage / Highlights',
      category: 'Hair',
      duration: '2-3h',
      price: '€120',
    },
    {
      id: '2',
      name: 'Cut & Style (Women)',
      category: 'Hair',
      duration: '1h',
      price: '€55',
    },
    {
      id: '3',
      name: 'Color (Full)',
      category: 'Hair',
      duration: '2h',
      price: '€85',
    },
    {
      id: '4',
      name: 'Hair Treatment',
      category: 'Hair',
      duration: '30min',
      price: '€40',
    },
    {
      id: '5',
      name: 'Keratin Treatment',
      category: 'Hair',
      duration: '3h',
      price: '€180',
    },
    {
      id: '6',
      name: 'Classic Manicure',
      category: 'Nails',
      duration: '45min',
      price: '€30',
    },
    {
      id: '7',
      name: 'Gel Manicure',
      category: 'Nails',
      duration: '1h',
      price: '€45',
    },
    {
      id: '8',
      name: 'Gel Pedicure',
      category: 'Nails',
      duration: '1h 15min',
      price: '€55',
    },
    {
      id: '9',
      name: 'Nail Extensions',
      category: 'Nails',
      duration: '1h 30min',
      price: '€65',
    },
    {
      id: '10',
      name: 'Express Facial',
      category: 'Beauty',
      duration: '30min',
      price: '€45',
    },
    {
      id: '11',
      name: 'Deep Cleansing Facial',
      category: 'Beauty',
      duration: '1h',
      price: '€65',
    },
    {
      id: '12',
      name: 'Anti-Aging Treatment',
      category: 'Beauty',
      duration: '1h 15min',
      price: '€85',
    },
    {
      id: '13',
      name: 'Eyelash Lift & Tint',
      category: 'Beauty',
      duration: '1h',
      price: '€60',
    },
  ],

  teamMembers: [
    { id: '1', name: 'Sophie Laurent', role: 'Color Specialist' },
    { id: '2', name: 'Emma Van Der Berg', role: 'Cutting & Styling' },
    { id: '3', name: 'Lisa Dubois', role: 'Nail Technician' },
    { id: '4', name: 'Maria Garcia', role: 'Beauty Therapist' },
    { id: 'any', name: 'No Preference', role: 'First Available' },
  ],

  businessHours: [
    { day: 'Monday', open: '09:00', close: '19:00' },
    { day: 'Tuesday', open: '09:00', close: '19:00' },
    { day: 'Wednesday', open: '09:00', close: '19:00' },
    { day: 'Thursday', open: '09:00', close: '19:00' },
    { day: 'Friday', open: '09:00', close: '19:00' },
    { day: 'Saturday', open: '09:00', close: '17:00' },
    { day: 'Sunday', open: '10:00', close: '16:00', closed: true },
  ],

  timeSlotDuration: 30, // 30-minute slots
  allowTeamSelection: true,
  requirePhone: true,
  minAdvanceBookingHours: 2, // Book at least 2 hours in advance
  maxAdvanceBookingDays: 60, // Book up to 60 days in advance

  theme: {
    primaryColor: 'rosegold',
    accentColor: 'burgundy',
  },
};
