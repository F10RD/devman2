import { barberConfig } from '@/lib/booking-config-barber';

export default function ServicesBarber() {
  return (
    <section id="services" className="bg-zinc-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-orange-500 text-xs uppercase tracking-widest font-medium mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Our Services
          </h2>
          <div className="w-16 h-1 bg-orange-500 mt-4" />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {barberConfig.services.map((service, i) => (
            <div
              key={service.id}
              className="group bg-zinc-950 border border-zinc-800 hover:border-orange-500/50 
                rounded-xl p-6 transition-all hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">
                  {['✂️', '🧔', '🪒', '💈', '⚡', '👦'][i % 6]}
                </span>
                <span className="text-orange-500 font-black text-xl">
                  ${service.price}
                </span>
              </div>
              <h3 className="text-white font-bold text-lg uppercase tracking-wide mb-2">
                {service.name}
              </h3>
              <p className="text-zinc-500 text-sm mb-4">
                {service.description}
              </p>
              <div className="flex items-center gap-1 text-zinc-600 text-xs">
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{service.duration} min</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
