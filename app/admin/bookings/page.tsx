import BookingsTable from '@/components/admin/BookingsTable';

export default function AdminBookingsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-white">Bookings</h1>
        <p className="text-gray-400 mt-1">
          Manage all reservations across layouts
        </p>
      </div>
      <BookingsTable />
    </div>
  );
}
