export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-sm font-bold">A</span>
            </div>
            <span className="font-semibold text-lg">Admin Panel</span>
          </div>
          <div className="flex gap-6 text-sm text-gray-400">
            <a
              href="/admin/bookings"
              className="hover:text-white transition-colors"
            >
              Bookings
            </a>
            <a href="/" className="hover:text-white transition-colors">
              ← Back to Site
            </a>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-6 py-8">{children}</main>
    </div>
  );
}
