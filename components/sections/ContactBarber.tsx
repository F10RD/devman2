export default function ContactBarber() {
  return (
    <section id="contact" className="bg-zinc-950 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div className="space-y-8">
            <div>
              <p className="text-orange-500 text-xs uppercase tracking-widest font-medium mb-3">
                Find Us
              </p>
              <h2 className="text-4xl font-black text-white uppercase tracking-tight">
                Come In & Sit Down
              </h2>
              <div className="w-16 h-1 bg-orange-500 mt-4" />
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: '📍',
                  label: 'Address',
                  value: '123 Main Street, Downtown',
                },
                { icon: '📞', label: 'Phone', value: '+1 (555) 123-4567' },
                { icon: '✉️', label: 'Email', value: 'info@ironblade.com' },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 bg-orange-500/10 border border-orange-500/20 rounded 
                    flex items-center justify-center flex-shrink-0 text-lg"
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-zinc-500 text-xs uppercase tracking-wider">
                      {label}
                    </p>
                    <p className="text-white font-medium mt-1">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right – Hours */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8">
            <h3 className="text-white font-black text-lg uppercase tracking-wide mb-6">
              Opening Hours
            </h3>
            <div className="space-y-3">
              {[
                { day: 'Monday – Friday', hours: '9:00 AM – 8:00 PM' },
                { day: 'Saturday', hours: '9:00 AM – 6:00 PM' },
                { day: 'Sunday', hours: 'Closed', closed: true },
              ].map(({ day, hours, closed }) => (
                <div
                  key={day}
                  className="flex justify-between items-center 
                  py-3 border-b border-zinc-800 last:border-0"
                >
                  <span className="text-zinc-400 text-sm">{day}</span>
                  <span
                    className={`text-sm font-bold ${
                      closed ? 'text-red-500' : 'text-orange-500'
                    }`}
                  >
                    {hours}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-lg">
              <p className="text-orange-400 text-sm text-center">
                💈 Walk-ins welcome · Appointments preferred
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
