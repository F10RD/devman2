import { BookingData, BookingConfig } from './booking-types';
import {
  getCustomerConfirmationEmail,
  getSalonNotificationEmail,
} from './email-templates';

// Mock email sending (for development without Resend API key)
export const sendMockEmails = async (
  bookingData: BookingData,
  config: BookingConfig,
  bookingId: string
) => {
  console.log('📧 ========== EMAIL NOTIFICATION ==========');
  console.log('✉️ CUSTOMER EMAIL:', bookingData.customerEmail);
  console.log('🔔 SALON EMAIL: info@bellastudio.com');
  console.log('📋 Booking ID:', bookingId);
  console.log('📅 Date:', bookingData.date);
  console.log('🕐 Time:', bookingData.time);
  console.log('💰 Total:', `€${bookingData.totalPrice}`);
  console.log('==========================================');

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return { success: true };
};

// API Route version - will be called from API endpoint
export const sendEmailsViaAPI = async (
  bookingData: BookingData,
  config: BookingConfig,
  bookingId: string
) => {
  try {
    const response = await fetch('/api/send-booking-emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        bookingData,
        config,
        bookingId,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send emails');
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending emails:', error);
    throw error;
  }
};
