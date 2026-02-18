export const siteConfig = {
  name: 'Bella Studio',
  tagline: 'Your Beauty, Our Passion',
  description:
    'Premium beauty salon in Lebbeke - Hair, Nails & Beauty treatments',
  established: '2018',
  teamSize: '8',
  links: {
    email: 'hello@bellastudio.be',
    phone: '+32 52 123 456',
    address: 'Stationsstraat 45, 9280 Lebbeke',
    googleMaps: 'https://maps.google.com/?q=Lebbeke+Belgium',
    instagram: 'https://instagram.com/bellastudio',
    facebook: 'https://facebook.com/bellastudio',
  },
  hours: {
    weekdays: 'Mon-Fri: 9:00 - 19:00',
    saturday: 'Sat: 9:00 - 17:00',
    sunday: 'Sun: Closed',
  },
};

export const navItems = [
  { title: 'Home', href: '#home' },
  { title: 'Services', href: '#services' },
  { title: 'Pricing', href: '#pricing' },
  { title: 'Team', href: '#team' },
  { title: 'Gallery', href: '#gallery' },
  { title: 'Contact', href: '#contact' },
];

export const popularServices = [
  {
    id: '1',
    name: 'Balayage',
    category: 'Hair',
    price: 'from €120',
    duration: '2-3h',
  },
  {
    id: '2',
    name: 'Gel Manicure',
    category: 'Nails',
    price: '€45',
    duration: '1h',
  },
  {
    id: '3',
    name: 'Facial Treatment',
    category: 'Skincare',
    price: 'from €65',
    duration: '1h',
  },
];

export const services = [
  {
    id: 'hair',
    category: 'Hair Services',
    icon: 'Scissors',
    items: [
      { name: 'Wash & Blow Dry', price: '€35', duration: '45min' },
      { name: 'Cut & Style (Women)', price: '€55', duration: '1h' },
      { name: 'Cut (Men)', price: '€30', duration: '30min' },
      { name: 'Color (Full)', price: '€85', duration: '2h' },
      { name: 'Balayage / Highlights', price: 'from €120', duration: '2-3h' },
      { name: 'Hair Treatment', price: '€40', duration: '30min' },
      { name: 'Keratin Treatment', price: '€180', duration: '3h' },
    ],
  },
  {
    id: 'nails',
    category: 'Nail Services',
    icon: 'Hand',
    items: [
      { name: 'Classic Manicure', price: '€30', duration: '45min' },
      { name: 'Gel Manicure', price: '€45', duration: '1h' },
      { name: 'Classic Pedicure', price: '€40', duration: '1h' },
      { name: 'Gel Pedicure', price: '€55', duration: '1h 15min' },
      { name: 'Nail Art (per nail)', price: '€3', duration: '5min' },
      { name: 'Nail Extensions', price: '€65', duration: '1h 30min' },
    ],
  },
  {
    id: 'beauty',
    category: 'Beauty Treatments',
    icon: 'Sparkles',
    items: [
      { name: 'Express Facial', price: '€45', duration: '30min' },
      { name: 'Deep Cleansing Facial', price: '€65', duration: '1h' },
      { name: 'Anti-Aging Treatment', price: '€85', duration: '1h 15min' },
      { name: 'Eyebrow Shaping', price: '€15', duration: '15min' },
      { name: 'Eyelash Lift & Tint', price: '€60', duration: '1h' },
      { name: 'Waxing (Upper Lip)', price: '€10', duration: '10min' },
      { name: 'Full Face Waxing', price: '€35', duration: '30min' },
    ],
  },
];

export const team = [
  {
    id: '1',
    name: 'Sophie Laurent',
    role: 'Salon Owner & Master Stylist',
    specialization: 'Color Specialist',
    experience: '12 years',
    bio: 'Trained in Paris, specialized in balayage and color correction.',
  },
  {
    id: '2',
    name: 'Emma Van Der Berg',
    role: 'Senior Hair Stylist',
    specialization: 'Cutting & Styling',
    experience: '8 years',
    bio: 'Expert in modern cuts and bridal styling.',
  },
  {
    id: '3',
    name: 'Lisa Dubois',
    role: 'Nail Technician',
    specialization: 'Nail Art & Extensions',
    experience: '6 years',
    bio: 'Creative nail artist with a passion for intricate designs.',
  },
  {
    id: '4',
    name: 'Maria Garcia',
    role: 'Beauty Therapist',
    specialization: 'Facials & Skincare',
    experience: '10 years',
    bio: 'Certified esthetician specializing in anti-aging treatments.',
  },
];

export const testimonials = [
  {
    id: '1',
    name: 'Sarah M.',
    rating: 5,
    text: 'Best salon in Lebbeke! Sophie did an amazing balayage - exactly what I wanted. The team is so professional and friendly.',
    service: 'Balayage',
  },
  {
    id: '2',
    name: 'Anne K.',
    rating: 5,
    text: 'I come here monthly for my gel manicure. Lisa is incredibly talented and the salon is always spotless. Highly recommend!',
    service: 'Gel Manicure',
  },
  {
    id: '3',
    name: 'Laura V.',
    rating: 5,
    text: 'The facial treatment with Maria was heavenly. My skin has never looked better! The atmosphere is so relaxing.',
    service: 'Facial Treatment',
  },
];

export const faq = [
  {
    id: '1',
    question: 'Do I need to book an appointment?',
    answer:
      'Yes, we work by appointment only to ensure each client receives our full attention. Walk-ins are welcome based on availability.',
  },
  {
    id: '2',
    question: 'What is your cancellation policy?',
    answer:
      'Please give us at least 24 hours notice if you need to cancel or reschedule. Late cancellations may incur a 50% charge.',
  },
  {
    id: '3',
    question: 'Do you offer bridal packages?',
    answer:
      'Yes! We offer customized bridal packages including hair, makeup, and nails. Contact us for a personalized quote and trial session.',
  },
  {
    id: '4',
    question: 'What products do you use?',
    answer:
      "We use premium professional brands including L'Oréal Professionnel, Kérastase, OPI, and Dermalogica.",
  },
  {
    id: '5',
    question: 'Is parking available?',
    answer:
      'Yes, we have free parking available directly in front of the salon and on nearby streets.',
  },
];

export const gallery = [
  {
    id: '1',
    category: 'Hair',
    alt: 'Balayage hair color',
  },
  {
    id: '2',
    category: 'Hair',
    alt: 'Modern haircut',
  },
  {
    id: '3',
    category: 'Nails',
    alt: 'Gel manicure with nail art',
  },
  {
    id: '4',
    category: 'Nails',
    alt: 'French pedicure',
  },
  {
    id: '5',
    category: 'Beauty',
    alt: 'Facial treatment',
  },
  {
    id: '6',
    category: 'Beauty',
    alt: 'Eyelash extensions',
  },
];
