'use client';

import { useState, useEffect } from 'react';
import {
  BookingData,
  BookingConfig,
  TimeSlot,
  generateTimeSlots,
} from '@/lib/booking-types';

type TimeStepProps = {
  config: BookingConfig;
  bookingData: BookingData;
  updateBookingData: (data: Partial<BookingData>) => void;
  onNext: () => void;
  onBack: () => void;
};

export default function TimeStep({
  config,
  bookingData,
  updateBookingData,
  onNext,
  onBack,
}: TimeStepProps) {
  const [selectedTime, setSelectedTime] = useState(bookingData.time || '');
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);

  useEffect(() => {
    if (bookingData.date) {
      const slots = generateTimeSlots(
        bookingData.date,
        config.businessHours,
        config.timeSlotDuration
      );
      setTimeSlots(slots);
    }
  }, [bookingData.date, config.businessHours, config.timeSlotDuration]);

  const handleSelectTime = (time: string) => {
    setSelectedTime(time);
  };

  const handleNext = () => {
    if (!selectedTime) return;
    updateBookingData({ time: selectedTime });
    onNext();
  };

  if (timeSlots.length === 0) {
    return (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-bold text-neutral-100 mb-2">
            Select a Time
          </h3>
          <p className="text-neutral-400">
            Sorry, no available times for this date
          </p>
        </div>
        <div className="flex justify-between pt-4">
          <button onClick={onBack} className="btn-secondary">
            ← Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-neutral-100 mb-2">
          Select a Time
        </h3>
        <p className="text-neutral-400">
          Choose your preferred appointment time
        </p>
      </div>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 max-h-96 overflow-y-auto p-2">
        {timeSlots.map((slot) => (
          <button
            key={slot.time}
            onClick={() => slot.available && handleSelectTime(slot.time)}
            disabled={!slot.available}
            className={`py-3 px-2 rounded-lg text-sm font-medium transition-all ${
              selectedTime === slot.time
                ? 'bg-gradient-to-r from-rosegold-500 to-burgundy-600 text-white'
                : slot.available
                ? 'bg-neutral-800 border-2 border-neutral-700 text-neutral-100 hover:border-rosegold-500'
                : 'bg-neutral-900 border-2 border-neutral-800 text-neutral-600 cursor-not-allowed'
            }`}
          >
            {slot.time}
          </button>
        ))}
      </div>

      {selectedTime && (
        <div className="p-4 rounded-lg bg-rosegold-500/10 border border-rosegold-500/50">
          <div className="text-neutral-300 text-sm mb-1">Selected Time:</div>
          <div className="text-neutral-100 font-semibold text-lg">
            {selectedTime}
          </div>
        </div>
      )}

      <div className="flex justify-between pt-4">
        <button onClick={onBack} className="btn-secondary">
          ← Back
        </button>
        <button
          onClick={handleNext}
          disabled={!selectedTime}
          className="btn-primary bg-gradient-to-r from-burgundy-600 to-burgundy-700 hover:from-burgundy-700 hover:to-burgundy-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
