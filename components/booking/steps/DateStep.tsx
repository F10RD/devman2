'use client';

import { useState } from 'react';
import {
  BookingData,
  BookingConfig,
  isPastDate,
  isWithinBookingWindow,
} from '@/lib/booking-types';

type DateStepProps = {
  config: BookingConfig;
  bookingData: BookingData;
  updateBookingData: (data: Partial<BookingData>) => void;
  onNext: () => void;
  onBack: () => void;
};

export default function DateStep({
  config,
  bookingData,
  updateBookingData,
  onNext,
  onBack,
}: DateStepProps) {
  const [selectedDate, setSelectedDate] = useState(bookingData.date || '');
  const [error, setError] = useState('');

  // Calculate min and max dates
  const today = new Date();
  const minDate = new Date(
    today.getTime() + config.minAdvanceBookingHours * 60 * 60 * 1000
  );
  const maxDate = new Date(
    today.getTime() + config.maxAdvanceBookingDays * 24 * 60 * 60 * 1000
  );

  const formatDateForInput = (date: Date): string => {
    // Guard – jeśli date jest nieprawidłowy zwróć dzisiejszą datę
    if (!date || isNaN(date.getTime())) {
      return new Date().toISOString().split('T')[0];
    }
    return date.toISOString().split('T')[0];
  };
  

  const handleDateChange = (dateString: string) => {
    setSelectedDate(dateString);
    setError('');

    if (isPastDate(dateString)) {
      setError('Please select a future date');
      return;
    }

    if (
      !isWithinBookingWindow(
        dateString,
        config.minAdvanceBookingHours,
        config.maxAdvanceBookingDays
      )
    ) {
      setError(
        `Please book between ${config.minAdvanceBookingHours} hours and ${config.maxAdvanceBookingDays} days in advance`
      );
      return;
    }
  };

  const handleNext = () => {
    if (!selectedDate) {
      setError('Please select a date');
      return;
    }

    if (error) return;

    updateBookingData({ date: selectedDate });
    onNext();
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-neutral-100 mb-2">
          Select a Date
        </h3>
        <p className="text-neutral-400">
          Choose your preferred appointment date
        </p>
      </div>

      <div className="max-w-md mx-auto">
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => handleDateChange(e.target.value)}
          min={formatDateForInput(minDate)}
          max={formatDateForInput(maxDate)}
          className="w-full px-4 py-3 rounded-lg bg-neutral-800 border-2 border-neutral-700 text-neutral-100 focus:border-rosegold-500 focus:outline-none text-lg"
        />

        {error && (
          <div className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/50 text-red-400 text-sm">
            {error}
          </div>
        )}

        {selectedDate && !error && (
          <div className="mt-4 p-4 rounded-lg bg-rosegold-500/10 border border-rosegold-500/50">
            <div className="text-neutral-300 text-sm mb-1">Selected Date:</div>
            <div className="text-neutral-100 font-semibold">
              {new Date(selectedDate + 'T12:00:00').toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between pt-4">
        <button onClick={onBack} className="btn-secondary">
          ← Back
        </button>
        <button
          onClick={handleNext}
          disabled={!selectedDate || !!error}
          className="btn-primary bg-gradient-to-r from-burgundy-600 to-burgundy-700 hover:from-burgundy-700 hover:to-burgundy-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
