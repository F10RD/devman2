'use client';

import { team } from '@/lib/config-beauty';

export default function TeamBeauty() {
  return (
    <section id="team" className="section-padding bg-neutral-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-100 mb-4">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rosegold-400 to-burgundy-500 mx-auto mb-6"></div>
          <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
            Passionate professionals dedicated to making you look and feel your
            best
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-neutral-900 rounded-2xl overflow-hidden border-2 border-burgundy-900/30 hover:border-rosegold-700/50 transition-all shadow-xl group"
            >
              {/* Image Placeholder */}
              <div className="aspect-[3/4] bg-gradient-to-br from-burgundy-900/20 via-rosegold-900/30 to-neutral-800 flex items-center justify-center border-b-2 border-burgundy-900/30 group-hover:border-rosegold-700/50 transition-colors">
                <div className="text-6xl filter grayscale opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all">
                  👩‍🦰
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-neutral-100 mb-1">
                  {member.name}
                </h3>
                <div className="text-rosegold-400 font-semibold text-sm mb-2">
                  {member.role}
                </div>
                <div className="text-sm text-neutral-300 mb-3">
                  <span className="font-medium">{member.specialization}</span>
                  <span className="text-neutral-500">
                    {' '}
                    • {member.experience}
                  </span>
                </div>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
