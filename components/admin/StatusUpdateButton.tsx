'use client';

import { useState } from 'react';
import { updateBookingStatus } from '@/lib/supabase';

type Status = 'pending' | 'confirmed' | 'cancelled';

export default function StatusUpdateButton({
  bookingId,
  currentStatus,
  onUpdate,
}: {
  bookingId: string;
  currentStatus: Status;
  onUpdate: () => void;
}) {
  const [loading, setLoading] = useState(false);

  const transitions: Record<
    Status,
    { next: Status; label: string; style: string }[]
  > = {
    pending: [
      {
        next: 'confirmed',
        label: '✓ Confirm',
        style: 'bg-green-600 hover:bg-green-500',
      },
      {
        next: 'cancelled',
        label: '✕ Cancel',
        style: 'bg-red-600   hover:bg-red-500',
      },
    ],
    confirmed: [
      {
        next: 'cancelled',
        label: '✕ Cancel',
        style: 'bg-red-600   hover:bg-red-500',
      },
    ],
    cancelled: [
      {
        next: 'pending',
        label: '↺ Restore',
        style: 'bg-gray-600  hover:bg-gray-500',
      },
    ],
  };

  const handleUpdate = async (next: Status) => {
    setLoading(true);
    console.log('🔄 Updating booking', bookingId, 'to', next); // ← DODAJ
    try {
      await updateBookingStatus(bookingId, next);
      console.log('✅ Success!', bookingId); // ← DODAJ
      onUpdate();
    } catch (error) {
      console.error('❌ Error:', error); // ← DODAJ
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex gap-2">
      {transitions[currentStatus].map(({ next, label, style }) => (
        <button
          key={next}
          onClick={() => handleUpdate(next)}
          disabled={loading}
          className={`px-3 py-1 rounded text-xs font-medium text-white transition-colors
            disabled:opacity-50 disabled:cursor-not-allowed ${style}`}
        >
          {loading ? '...' : label}
        </button>
      ))}
    </div>
  );
}
