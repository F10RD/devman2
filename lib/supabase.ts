import { createClient } from '@supabase/supabase-js';


const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';


export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database Types
export type BookingRecord = {
  id?: string;
  created_at?: string;
  business_name: string;
  services: string[]; // JSON array of service names
  team_member?: string;
  appointment_date: string;
  appointment_time: string;
  customer_name: string;
  customer_email: string;
  customer_phone?: string;
  notes?: string;
  total_duration: number;
  total_price: number;
  status: 'pending' | 'confirmed' | 'cancelled';
};

// Save booking to database
export const saveBooking = async (booking: BookingRecord) => {
  const { data, error } = await supabase
    .from('bookings')
    .insert([booking])
    .select();

  if (error) {
    console.error('Error saving booking:', error);
    throw error;
  }

  return data?.[0];
};

// Get all bookings
export const getBookings = async () => {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('appointment_date', { ascending: true });

  if (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }

  return data;
};

// Get bookings by date
export const getBookingsByDate = async (date: string) => {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('appointment_date', date)
    .order('appointment_time', { ascending: true });

  if (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }

  return data;
};

// Update booking status
export const updateBookingStatus = async (
  id: string,
  status: 'pending' | 'confirmed' | 'cancelled'
) => {
  const { data, error } = await supabase
    .from('bookings')
    .update({ status })
    .eq('id', id)
    .select();

  if (error) {
    console.error('Error updating booking:', error);
    throw error;
  }

  return data?.[0];
};

// Admin alias - sortowanie od najnowszych
export const getAllBookings = async () => {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching bookings:', error);
    throw error;
  }

  return data;
};
