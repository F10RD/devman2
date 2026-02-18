'use client';

import { useState } from 'react';
import { BookingData, BookingConfig } from '@/lib/booking-types';

type DetailsStepProps = {
  config: BookingConfig;
  bookingData: BookingData;
  updateBookingData: (data: Partial<BookingData>) => void;
  onNext: () => void;
  onBack: () => void;
};

export default function DetailsStep({
  config,
  bookingData,
  updateBookingData,
  onNext,
  onBack,
}: DetailsStepProps) {
  const [formData, setFormData] = useState({
    customerName: bookingData.customerName || '',
    customerEmail: bookingData.customerEmail || '',
    customerPhone: bookingData.customerPhone || '',
    notes: bookingData.notes || '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Name is required';
    }

    if (!formData.customerEmail.trim()) {
      newErrors.customerEmail = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.customerEmail)) {
      newErrors.customerEmail = 'Invalid email format';
    }

    if (config.requirePhone && !formData.customerPhone.trim()) {
      newErrors.customerPhone = 'Phone number is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (!validateForm()) return;

    updateBookingData({
      customerName: formData.customerName,
      customerEmail: formData.customerEmail,
      customerPhone: formData.customerPhone,
      notes: formData.notes,
    });
    onNext();
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-neutral-100 mb-2">
          Your Details
        </h3>
        <p className="text-neutral-400">
          Please provide your contact information
        </p>
      </div>

      <div className="space-y-4 max-w-2xl">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-neutral-200 mb-2"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            value={formData.customerName}
            onChange={(e) =>
              setFormData({ ...formData, customerName: e.target.value })
            }
            className="input bg-neutral-800 border-neutral-700 text-neutral-100 focus:border-rosegold-500"
            placeholder="John Doe"
          />
          {errors.customerName && (
            <div className="text-red-400 text-sm mt-1">
              {errors.customerName}
            </div>
          )}
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-neutral-200 mb-2"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            value={formData.customerEmail}
            onChange={(e) =>
              setFormData({ ...formData, customerEmail: e.target.value })
            }
            className="input bg-neutral-800 border-neutral-700 text-neutral-100 focus:border-rosegold-500"
            placeholder="john@example.com"
          />
          {errors.customerEmail && (
            <div className="text-red-400 text-sm mt-1">
              {errors.customerEmail}
            </div>
          )}
        </div>

        {/* Phone */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-neutral-200 mb-2"
          >
            Phone Number {config.requirePhone && '*'}
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.customerPhone}
            onChange={(e) =>
              setFormData({ ...formData, customerPhone: e.target.value })
            }
            className="input bg-neutral-800 border-neutral-700 text-neutral-100 focus:border-rosegold-500"
            placeholder="+32 123 456 789"
          />
          {errors.customerPhone && (
            <div className="text-red-400 text-sm mt-1">
              {errors.customerPhone}
            </div>
          )}
        </div>

        {/* Notes */}
        <div>
          <label
            htmlFor="notes"
            className="block text-sm font-medium text-neutral-200 mb-2"
          >
            Additional Notes (Optional)
          </label>
          <textarea
            id="notes"
            rows={4}
            value={formData.notes}
            onChange={(e) =>
              setFormData({ ...formData, notes: e.target.value })
            }
            className="input bg-neutral-800 border-neutral-700 text-neutral-100 focus:border-rosegold-500"
            placeholder="Any special requests or requirements..."
          />
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button onClick={onBack} className="btn-secondary">
          ← Back
        </button>
        <button
          onClick={handleNext}
          className="btn-primary bg-gradient-to-r from-burgundy-600 to-burgundy-700 hover:from-burgundy-700 hover:to-burgundy-800"
        >
          Review Booking →
        </button>
      </div>
    </div>
  );
}
