'use client';

import { useState } from 'react';
import { BookingData, BookingConfig, formatDate } from '@/lib/booking-types';
import { saveBooking, BookingRecord } from '@/lib/supabase';
import { sendMockEmails } from '@/lib/email-service';

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

      const savedBooking = await saveBooking(bookingRecord);
      const id = savedBooking.id || '';

      await sendMockEmails(bookingData, config, id);

      setBookingId(id);
      setIsConfirmed(true);

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

  // ✅ Ekran sukcesu
  if (isConfirmed) {
    return (
      <div className="py-8 text-center space-y-6">
        {/* Ikona sukcesu */}
        <div className="w-20 h-20 bg-green-500/20 border-2 border-green-500/50 rounded-full 
          flex items-center justify-center mx-auto">
          <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-neutral-100 mb-2">
            Booking Confirmed! 🎉
          </h3>
          <p className="text-neutral-400">
            Your appointment has been successfully booked.
          </p>
        </div>

        {/* Booking ID */}
        {bookingId && (
          <div className="inline-block bg-neutral-800 border border-neutral-700 rounded-xl px-6 py-4">
            <p className="text-neutral-400 text-sm mb-1">Booking Reference</p>
            <p className="text-rosegold-400 font-mono font-bold text-lg tracking-wider">
              #{bookingId.slice(0, 8).toUpperCase()}
            </p>
          </div>
        )}

        {/* Szczegóły */}
        <div className="bg-neutral-800 border border-neutral-700 rounded-xl p-6 
          text-left max-w-sm mx-auto space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-neutral-400">Date</span>
            <span className="text-neutral-100 font-medium">
              {bookingData.date && formatDate(bookingData.date)}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-neutral-400">Time</span>
            <span className="text-neutral-100 font-medium">
              {bookingData.time}
            </span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-neutral-400">Services</span>
            <span className="text-neutral-100 font-medium text-right max-w-[180px]">
              {bookingData.services?.map((s) => s.name).join(', ')}
            </span>
          </div>
          {bookingData.teamMember && (
            <div className="flex justify-between text-sm">
              <span className="text-neutral-400">Specialist</span>
              <span className="text-neutral-100 font-medium">
                {bookingData.teamMember.name}
              </span>
            </div>
          )}
          <div className="flex justify-between text-sm pt-2 border-t border-neutral-700">
            <span className="text-neutral-400">Total</span>
            <span className="text-rosegold-400 font-bold">
              €{bookingData.totalPrice}
            </span>
          </div>
        </div>

        {/* Email info */}
        <p className="text-neutral-500 text-sm">
          📧 Confirmation sent to{' '}
          <span className="text-neutral-300">{bookingData.customerEmail}</span>
        </p>

        {/* Auto-close info */}
        <p className="text-neutral-600 text-xs">
          This window will close automatically in 5 seconds...
        </p>

        <button
          onClick={onClose}
          className="btn-primary bg-gradient-to-r from-burgundy-600 to-burgundy-700 
            hover:from-burgundy-700 hover:to-burgundy-800 px-8"
        >
          Close ✓
        </button>
      </div>
    );
  }

  // ✅ Ekran przeglądu (przed potwierdzeniem)
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
            <div className="text-neutral-100">👤 {bookingData.customerName}</div>
            <div className="text-neutral-100">✉️ {bookingData.customerEmail}</div>
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
            <p>📋 <strong>Please note:</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-4">
              <li>You will receive a confirmation email shortly</li>
              <li>Please arrive 5-10 minutes before your appointment</li>
              <li>Cancellations must be made at least 24 hours in advance</li>
            </ul>
          </div>
        </div>

        {/* Error */}
        {error && (
          <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/50 text-red-400 text-sm">
            ❌ {error}
          </div>
        )}
      </div>

      <div className="flex justify-between pt-4">
        <button
          onClick={onBack}
          disabled={isSubmitting}
          className="btn-secondary"
        >
          ← Back
        </button>
        <button
          onClick={handleConfirm}
          disabled={isSubmitting}
          className="btn-primary bg-gradient-to-r from-burgundy-600 to-burgundy-700 
            hover:from-burgundy-700 hover:to-burgundy-800 
            disabled:opacity-50 disabled:cursor-not-allowed min-w-[200px]"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12" cy="12" r="10"
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
