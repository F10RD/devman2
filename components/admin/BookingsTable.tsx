'use client';

import { useState, useEffect, useCallback } from 'react';
import { getAllBookings, updateBookingStatus } from '@/lib/supabase';
import StatusBadge from './StatusBadge';
import StatusUpdateButton from './StatusUpdateButton';

// ZAMIEŃ stary typ Booking na ten:
type Booking = {
  id: string;
  customer_name: string; // ← było: client_name
  customer_email: string; // ← było: client_email
  services: string[];
  appointment_date: string; // ← było: booking_date
  appointment_time: string; // ← nowe pole
  business_name: string; // ← nowe pole
  status: 'pending' | 'confirmed' | 'cancelled';
  layout_type?: string;
  created_at: string;
  total_price: number;
  total_duration: number;
};

type FilterStatus = 'all' | 'pending' | 'confirmed' | 'cancelled';

export default function BookingsTable() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<FilterStatus>('all');
  const [layoutFilter, setLayoutFilter] = useState<string>('all');
  const [search, setSearch] = useState('');

  const fetchBookings = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAllBookings();
      setBookings(data as Booking[]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBookings();
  }, [fetchBookings]);

  const filtered = bookings.filter((b) => {
    const matchStatus = filter === 'all' || b.status === filter;
    const matchLayout =
      layoutFilter === 'all' || b.layout_type === layoutFilter;
    const matchSearch =
      b.customer_name?.toLowerCase().includes(search.toLowerCase()) ||
      b.customer_email?.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchLayout && matchSearch;
  });

  const counts = {
    all: bookings.length,
    pending: bookings.filter((b) => b.status === 'pending').length,
    confirmed: bookings.filter((b) => b.status === 'confirmed').length,
    cancelled: bookings.filter((b) => b.status === 'cancelled').length,
  };

  const filterBtns: { key: FilterStatus; label: string }[] = [
    { key: 'all', label: `All (${counts.all})` },
    { key: 'pending', label: `Pending (${counts.pending})` },
    { key: 'confirmed', label: `Confirmed (${counts.confirmed})` },
    { key: 'cancelled', label: `Cancelled (${counts.cancelled})` },
  ];

  return (
    <div className="space-y-6">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        {(['pending', 'confirmed', 'cancelled'] as const).map((s) => (
          <div
            key={s}
            className="bg-gray-900 rounded-xl p-4 border border-gray-800"
          >
            <p className="text-sm text-gray-400 capitalize">{s}</p>
            <p className="text-2xl font-bold mt-1">{counts[s]}</p>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="flex gap-2">
          {filterBtns.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors
                ${
                  filter === key
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-white'
                }`}
            >
              {label}
            </button>
          ))}
        </div>

        <select
          value={layoutFilter}
          onChange={(e) => setLayoutFilter(e.target.value)}
          className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-sm text-gray-300"
        >
          <option value="all">All Layouts</option>
          <option value="professional">Professional</option>
          <option value="beauty">Beauty Studio</option>
          <option value="barber">Barber Shop</option>
        </select>

        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5
            text-sm text-gray-300 placeholder-gray-600 flex-1 min-w-[200px]"
        />
      </div>

      {/* Table */}
      {loading ? (
        <div className="text-center py-16 text-gray-500">
          Loading bookings...
        </div>
      ) : (
        <div className="rounded-xl border border-gray-800 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-900 text-gray-400 text-left">
              <tr>
                {[
                  'Client',
                  'Services',
                  'Date',
                  'Layout',
                  'Status',
                  'Actions',
                ].map((h) => (
                  <th key={h} className="px-4 py-3 font-medium">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {filtered.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-4 py-12 text-center text-gray-600"
                  >
                    No bookings found
                  </td>
                </tr>
              ) : (
                filtered.map((booking) => (
                  <tr
                    key={booking.id}
                    className="bg-gray-950 hover:bg-gray-900/50 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <p className="font-medium text-white">
                        {booking.customer_name}
                      </p>
                      <p className="text-gray-500 text-xs">
                        {booking.customer_email}
                      </p>
                    </td>
                    <td className="px-4 py-3 text-gray-300">
                      {Array.isArray(booking.services)
                        ? booking.services.join(', ')
                        : booking.services}
                    </td>
                    <td className="px-4 py-3 text-gray-300">
                      {booking.appointment_date
                        ? `${booking.appointment_date} ${
                            booking.appointment_time ?? ''
                          }`
                        : '—'}
                    </td>
                    <td className="px-4 py-3">
                      <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded capitalize">
                        {booking.layout_type ?? 'professional'}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge status={booking.status} />
                    </td>
                    <td className="px-4 py-3">
                      <StatusUpdateButton
                        bookingId={booking.id}
                        currentStatus={booking.status}
                        onUpdate={fetchBookings}
                      />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
