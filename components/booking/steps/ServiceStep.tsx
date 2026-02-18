'use client';

import {
  BookingData,
  BookingConfig,
  BookingService,
  calculateTotalDuration,
  calculateTotalPrice,
  formatDuration,
  formatPrice,
} from '@/lib/booking-types';
import { useState } from 'react';

type ServiceStepProps = {
  config: BookingConfig;
  bookingData: BookingData;
  updateBookingData: (data: Partial<BookingData>) => void;
  onNext: () => void;
};

export default function ServiceStep({
  config,
  bookingData,
  updateBookingData,
  onNext,
}: ServiceStepProps) {
  const [selectedServices, setSelectedServices] = useState<BookingService[]>(
    bookingData.services || []
  );

  const handleToggleService = (service: BookingService) => {
    const isSelected = selectedServices.some((s) => s.id === service.id);

    let newServices: BookingService[];
    if (isSelected) {
      newServices = selectedServices.filter((s) => s.id !== service.id);
    } else {
      newServices = [...selectedServices, service];
    }

    setSelectedServices(newServices);
  };

  const handleNext = () => {
    if (selectedServices.length === 0) return;

    const totalDuration = calculateTotalDuration(selectedServices);
    const totalPrice = calculateTotalPrice(selectedServices);

    updateBookingData({
      services: selectedServices,
      totalDuration,
      totalPrice,
    });
    onNext();
  };

  // Group services by category
  const servicesByCategory = config.services.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, BookingService[]>);

  const totalDuration = calculateTotalDuration(selectedServices);
  const totalPrice = calculateTotalPrice(selectedServices);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-neutral-100 mb-2">
          Select Services
        </h3>
        <p className="text-neutral-400">
          Choose one or more services for your appointment
        </p>
      </div>

      <div className="space-y-8">
        {Object.entries(servicesByCategory).map(([category, services]) => (
          <div key={category}>
            <h4 className="text-lg font-semibold text-rosegold-400 mb-4 flex items-center gap-2">
              <span className="text-2xl">
                {category === 'Hair' && '💇'}
                {category === 'Nails' && '💅'}
                {category === 'Beauty' && '✨'}
              </span>
              {category}
            </h4>
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((service) => {
                const isSelected = selectedServices.some(
                  (s) => s.id === service.id
                );
                return (
                  <button
                    key={service.id}
                    onClick={() => handleToggleService(service)}
                    className={`text-left p-4 rounded-xl border-2 transition-all hover:scale-[1.02] relative ${
                      isSelected
                        ? 'border-rosegold-500 bg-rosegold-500/20'
                        : 'border-neutral-700 bg-neutral-800 hover:border-rosegold-700'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-rosegold-500 flex items-center justify-center text-white text-sm">
                        ✓
                      </div>
                    )}
                    <div className="font-semibold text-neutral-100 mb-1 pr-8">
                      {service.name}
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-400">
                        {service.duration}
                      </span>
                      <span className="font-bold text-rosegold-400">
                        {service.price}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      {selectedServices.length > 0 && (
        <div className="sticky bottom-0 p-4 rounded-xl bg-gradient-to-r from-burgundy-900/90 to-burgundy-950/90 backdrop-blur-sm border-2 border-rosegold-500/50">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-neutral-300">
              {selectedServices.length} service
              {selectedServices.length > 1 ? 's' : ''} selected
            </div>
            <button
              onClick={() => setSelectedServices([])}
              className="text-sm text-rosegold-400 hover:text-rosegold-300"
            >
              Clear all
            </button>
          </div>
          <div className="flex items-center justify-between text-lg font-bold">
            <div className="text-neutral-100">
              ⏱️ {formatDuration(totalDuration)}
            </div>
            <div className="text-rosegold-400">{formatPrice(totalPrice)}</div>
          </div>
        </div>
      )}

      <div className="flex justify-end pt-4">
        <button
          onClick={handleNext}
          disabled={selectedServices.length === 0}
          className="btn-primary bg-gradient-to-r from-burgundy-600 to-burgundy-700 hover:from-burgundy-700 hover:to-burgundy-800 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next ({selectedServices.length} selected) →
        </button>
      </div>
    </div>
  );
}
