import { barberConfig } from '@/lib/booking-config-barber';

export default function TeamBarber() {
  return (
    <section id="our-barbers" className="bg-zinc-900 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-orange-500 text-xs uppercase tracking-widest font-medium mb-3">
            The Crew
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            Meet Your Barbers
          </h2>
          <div className="w-16 h-1 bg-orange-500 mt-4" />
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {barberConfig.teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-zinc-950 border border-zinc-800 hover:border-orange-500/50 
                rounded-xl overflow-hidden transition-all hover:-translate-y-1"
            >
              {/* Avatar area */}
              <div
                className="bg-gradient-to-br from-zinc-800 to-zinc-900 h-48 flex items-center 
                justify-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-orange-500/5 group-hover:bg-orange-500/10 transition-colors" />
                <span className="text-7xl relative z-10">{member.avatar}</span>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-white font-black text-xl uppercase tracking-wide">
                  {member.name}
                </h3>
                <p className="text-orange-500 text-xs uppercase tracking-widest mt-1 font-medium">
                  {member.role}
                </p>
                <div className="mt-4 pt-4 border-t border-zinc-800">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg
                        key={star}
                        className="w-4 h-4 text-orange-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="text-zinc-500 text-xs ml-2">5.0</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
