'use client';

import { useState } from 'react';
import { BookingData, BookingConfig } from '@/lib/booking-types';
import ServiceStep from './steps/ServiceStep';
import TeamStep from './steps/TeamStep';
import DateStep from './steps/DateStep';
import TimeStep from './steps/TimeStep';
import DetailsStep from './steps/DetailsStep';
import ConfirmationStep from './steps/ConfirmationStep';

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  config: BookingConfig;
};

export default function BookingModal({
  isOpen,
  onClose,
  config,
}: BookingModalProps) {
  const [currentStep, setCurrentStep] = useState(1);
  const [bookingData, setBookingData] = useState<BookingData>({});

  const totalSteps = config.allowTeamSelection ? 6 : 5;

  const updateBookingData = (data: Partial<BookingData>) => {
    setBookingData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleClose = () => {
    setCurrentStep(1);
    setBookingData({});
    onClose();
  };

  if (!isOpen) return null;

  // Calculate current step considering team selection
  const getStepComponent = () => {
    let step = currentStep;

    if (!config.allowTeamSelection && currentStep > 1) {
      step = currentStep + 1; // Skip team step
    }

    switch (step) {
      case 1:
        return (
          <ServiceStep
            config={config}
            bookingData={bookingData}
            updateBookingData={updateBookingData}
            onNext={nextStep}
          />
        );
      case 2:
        return (
          <TeamStep
            config={config}
            bookingData={bookingData}
            updateBookingData={updateBookingData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 3:
        return (
          <DateStep
            config={config}
            bookingData={bookingData}
            updateBookingData={updateBookingData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 4:
        return (
          <TimeStep
            config={config}
            bookingData={bookingData}
            updateBookingData={updateBookingData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 5:
        return (
          <DetailsStep
            config={config}
            bookingData={bookingData}
            updateBookingData={updateBookingData}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 6:
        return (
          <ConfirmationStep
            config={config}
            bookingData={bookingData}
            onClose={handleClose}
            onBack={prevStep}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-neutral-900 rounded-2xl shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-neutral-200 transition-colors"
          aria-label="Close"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Progress Bar */}
        <div className="sticky top-0 bg-neutral-900 border-b border-burgundy-900/30 p-6 pb-4">
          <h2 className="text-2xl font-bold text-neutral-100 mb-4">
            Book Your Appointment
          </h2>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div key={index} className="flex-1">
                <div
                  className={`h-2 rounded-full transition-all ${
                    index + 1 <= currentStep
                      ? 'bg-gradient-to-r from-rosegold-400 to-burgundy-500'
                      : 'bg-neutral-700'
                  }`}
                />
              </div>
            ))}
          </div>
          <div className="mt-2 text-sm text-neutral-400">
            Step {currentStep} of {totalSteps}
          </div>
        </div>

        {/* Step Content */}
        <div className="p-6">{getStepComponent()}</div>
      </div>
    </div>
  );
}
