'use client';

import { BookingData, BookingConfig, TeamMember } from '@/lib/booking-types';

type TeamStepProps = {
  config: BookingConfig;
  bookingData: BookingData;
  updateBookingData: (data: Partial<BookingData>) => void;
  onNext: () => void;
  onBack: () => void;
};

export default function TeamStep({
  config,
  bookingData,
  updateBookingData,
  onNext,
  onBack,
}: TeamStepProps) {
  const handleSelectTeam = (member: TeamMember) => {
    updateBookingData({ teamMember: member });
    onNext();
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-neutral-100 mb-2">
          Choose Your Specialist
        </h3>
        <p className="text-neutral-400">
          Select a team member or let us assign one for you
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {config.teamMembers.map((member) => (
          <button
            key={member.id}
            onClick={() => handleSelectTeam(member)}
            className={`text-center p-6 rounded-xl border-2 transition-all hover:scale-[1.02] ${
              bookingData.teamMember?.id === member.id
                ? 'border-rosegold-500 bg-rosegold-500/10'
                : 'border-neutral-700 bg-neutral-800 hover:border-rosegold-700'
            }`}
          >
            <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-rosegold-400 to-burgundy-500 flex items-center justify-center text-4xl">
              {member.id === 'any' ? '🎯' : '👤'}
            </div>
            <div className="font-semibold text-neutral-100 mb-1">
              {member.name}
            </div>
            <div className="text-sm text-neutral-400">{member.role}</div>
          </button>
        ))}
      </div>

      <div className="flex justify-between pt-4">
        <button onClick={onBack} className="btn-secondary">
          ← Back
        </button>
      </div>
    </div>
  );
}
