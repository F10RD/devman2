'use client';

import { useState } from 'react';
import { BookingData, BookingConfig, formatDate } from '@/lib/booking-types';
import { saveBooking, BookingRecord } from '@/lib/supabase';
import { sendMockEmails } from '@/lib/email-service'; // Używamy mock na razie

type ConfirmationStepProps = {
  config: BookingConfig;
  bookingData: BookingData;
  onClose: () => void;
  onBack: () => void;
};

export default function ConfirmationStep({
  config,
  bookingData,
  onClose,
  onBack,
}: ConfirmationStepProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleConfirm = async () => {
    setIsSubmitting(true);
    setError('');

    try {
      // Prepare booking data for database
      const bookingRecord: BookingRecord = {
        business_name: config.businessName,
        services: bookingData.services?.map((s) => s.name) || [],
        team_member: bookingData.teamMember?.name,
        appointment_date: bookingData.date!,
        appointment_time: bookingData.time!,
        customer_name: bookingData.customerName!,
        customer_email: bookingData.customerEmail!,
        customer_phone: bookingData.customerPhone,
        notes: bookingData.notes,
        total_duration: bookingData.totalDuration!,
        total_price: bookingData.totalPrice!,
        status: 'pending',
      };

      // Save to database
      const savedBooking = await saveBooking(bookingRecord);
      const id = savedBooking.id || '';

      // Send emails
      await sendMockEmails(bookingData, config, id);

      setBookingId(id);
      setIsConfirmed(true);

      // Auto-close after 5 seconds
      setTimeout(() => {
        onClose();
      }, 5000);
    } catch (err) {
      console.error('Booking error:', err);
      setError('Failed to save booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-neutral-100 mb-2">
          Confirm Your Booking
        </h3>
        <p className="text-neutral-400">
          Please review your appointment details
        </p>
      </div>

      <div className="space-y-4 max-w-2xl">
        {/* Services */}
        <div className="p-4 rounded-lg bg-neutral-800 border border-neutral-700">
          <div className="text-sm text-neutral-400 mb-2">Selected Services</div>
          <div className="space-y-2">
            {bookingData.services?.map((service, index) => (
              <div
                key={index}
                className="flex items-center justify-between pb-2 border-b border-neutral-700 last:border-0 last:pb-0"
              >
                <div>
                  <div className="font-semibold text-neutral-100">
                    {service.name}
                  </div>
                  <div className="text-sm text-neutral-400">
                    {service.duration}
                  </div>
                </div>
                <div className="text-rosegold-400 font-semibold">
                  {service.price}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t border-neutral-600 flex items-center justify-between text-lg font-bold">
            <div className="text-neutral-100">Total</div>
            <div className="flex items-center gap-4">
              <span className="text-neutral-300 text-sm">
                ⏱️{' '}
                {bookingData.totalDuration &&
                  `${Math.floor(bookingData.totalDuration / 60)}h ${
                    bookingData.totalDuration % 60
                  }min`}
              </span>
              <span className="text-rosegold-400">
                €{bookingData.totalPrice}
              </span>
            </div>
          </div>
        </div>

        {/* Team Member */}
        {config.allowTeamSelection && bookingData.teamMember && (
          <div className="p-4 rounded-lg bg-neutral-800 border border-neutral-700">
            <div className="text-sm text-neutral-400 mb-1">Specialist</div>
            <div className="text-lg font-semibold text-neutral-100">
              {bookingData.teamMember.name}
            </div>
            <div className="text-sm text-neutral-300">
              {bookingData.teamMember.role}
            </div>
          </div>
        )}

        {/* Date & Time */}
        <div className="p-4 rounded-lg bg-neutral-800 border border-neutral-700">
          <div className="text-sm text-neutral-400 mb-1">Date & Time</div>
          <div className="text-lg font-semibold text-neutral-100">
            {bookingData.date && formatDate(bookingData.date)}
          </div>
          <div className="text-neutral-300 mt-1">🕐 {bookingData.time}</div>
        </div>

        {/* Customer Info */}
        <div className="p-4 rounded-lg bg-neutral-800 border border-neutral-700">
          <div className="text-sm text-neutral-400 mb-2">
            Contact Information
          </div>
          <div className="space-y-1 text-sm">
            <div className="text-neutral-100">
              👤 {bookingData.customerName}
            </div>
            <div className="text-neutral-100">
              ✉️ {bookingData.customerEmail}
            </div>
            {bookingData.customerPhone && (
              <div className="text-neutral-100">
                📞 {bookingData.customerPhone}
              </div>
            )}
          </div>
        </div>

        {/* Notes */}
        {bookingData.notes && (
          <div className="p-4 rounded-lg bg-neutral-800 border border-neutral-700">
            <div className="text-sm text-neutral-400 mb-1">
              Additional Notes
            </div>
            <div className="text-neutral-100">{bookingData.notes}</div>
          </div>
        )}

        {/* Important Info */}
        <div className="p-4 rounded-lg bg-burgundy-900/30 border border-burgundy-700/50">
          <div className="text-sm text-neutral-300 space-y-2">
            <p>
              📋 <strong>Please note:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>You will receive a confirmation email shortly</li>
              <li>Please arrive 5-10 minutes before your appointment</li>
              <li>Cancellations must be made at least 24 hours in advance</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          onClick={onBack}
          className="btn-secondary"
          disabled={isSubmitting}
        >
          ← Back
        </button>
        <button
          onClick={handleConfirm}
          disabled={isSubmitting}
          className="btn-primary bg-gradient-to-r from-burgundy-600 to-burgundy-700 hover:from-burgundy-700 hover:to-burgundy-800 disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Confirming...
            </span>
          ) : (
            'Confirm Booking ✓'
          )}
        </button>
      </div>
    </div>
  );
}
