export type BookingService = {
  id: string;
  name: string;
  category: string;
  duration: number | string;  // ← number lub string
  price: number | string;  
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  avatar?: string;
};

export type TimeSlot = {
  time: string;
  available: boolean;
};

export type BookingData = {
  services?: BookingService[]; // ZMIANA: array zamiast single service
  teamMember?: TeamMember;
  date?: string;
  time?: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  notes?: string;
  totalDuration?: number; // in minutes
  totalPrice?: number; // in euros (or your currency)
};

export type BusinessHours = {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
};

export type BookingConfig = {
  businessName: string;
  services: BookingService[];
  teamMembers: TeamMember[];
  businessHours: BusinessHours[];
  timeSlotDuration: number; // in minutes (e.g., 30)
  allowTeamSelection: boolean;
  requirePhone: boolean;
  minAdvanceBookingHours: number; // minimum hours in advance
  maxAdvanceBookingDays: number; // maximum days in advance
  theme?: {
    primaryColor?: string;
    accentColor?: string;
  };
};

// Utility functions
export const generateTimeSlots = (
  date: string,
  businessHours: BusinessHours[],
  slotDuration: number = 30
): TimeSlot[] => {
  const selectedDate = new Date(date);
  const dayName = selectedDate.toLocaleDateString('en-US', { weekday: 'long' });

  const dayHours = businessHours.find((h) => h.day === dayName);

  if (!dayHours || dayHours.closed) {
    return [];
  }

  const slots: TimeSlot[] = [];
  const [openHour, openMinute] = dayHours.open.split(':').map(Number);
  const [closeHour, closeMinute] = dayHours.close.split(':').map(Number);

  let currentHour = openHour;
  let currentMinute = openMinute;

  while (
    currentHour < closeHour ||
    (currentHour === closeHour && currentMinute < closeMinute)
  ) {
    const time = `${currentHour.toString().padStart(2, '0')}:${currentMinute
      .toString()
      .padStart(2, '0')}`;

    // Mock availability - randomly mark some slots as unavailable
    const available = Math.random() > 0.3;
    slots.push({ time, available });

    currentMinute += slotDuration;
    if (currentMinute >= 60) {
      currentHour += 1;
      currentMinute = 0;
    }
  }

  return slots;
};

export const isPastDate = (dateString: string): boolean => {
  const selected = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selected < today;
};

export const isWithinBookingWindow = (
  dateString: string,
  minHours: number,
  maxDays: number
): boolean => {
  const selected = new Date(dateString);
  const now = new Date();

  const minDate = new Date(now.getTime() + minHours * 60 * 60 * 1000);
  const maxDate = new Date(now.getTime() + maxDays * 24 * 60 * 60 * 1000);

  return selected >= minDate && selected <= maxDate;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Calculate total duration from selected services
export const calculateTotalDuration = (services: BookingService[]): number => {
  return services.reduce((total, service) => {
    // ← ZAMIEŃ CAŁĄ LOGIKĘ duration na:
    let minutes = 0;
  
    if (typeof service.duration === 'number') {
      // Barber/Beauty config – duration już jest liczbą
      minutes = service.duration;
    } else {
      // Professional config – duration jako string "1h 30min"
      const durationStr = service.duration.toLowerCase();
      const hourMatch = durationStr.match(/(\d+)h/);
      const minMatch = durationStr.match(/(\d+)min/);
      if (hourMatch) minutes += parseInt(hourMatch[1]) * 60;
      if (minMatch) minutes += parseInt(minMatch[1]);
      if (!hourMatch && !minMatch) minutes = parseInt(durationStr) || 0;
    }
  
    return total + minutes;
}, 0);
}
// Calculate total price from selected services
export const calculateTotalPrice = (services: BookingService[]): number => {
  return services.reduce((total, service) => {
    // ← ZAMIEŃ NA:
    let price = 0;
  
    if (typeof service.price === 'number') {
      // Barber/Beauty config – price już jest liczbą
      price = service.price;
    } else {
      // Professional config – price jako string "€120" lub "from €120"
      const priceStr = service.price.replace(/[^\d.]/g, '');
      price = parseFloat(priceStr) || 0;
    }
  
    return total + price;
  }, 0);
}

// Format price for display
export const formatPrice = (price: number): string => {
  return `€${price.toFixed(0)}`;
};

// Format duration for display
export const formatDuration = (minutes: number): string => {
  if (typeof minutes !== 'number' || isNaN(minutes)) return '0 min';
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}min` : `${h}h`;
};
