import React from 'react';
import { Award, Flame, Sparkles } from 'lucide-react';

export default function ProfileView({ userProfile }) {
  const badges = [
    { title: '7-Day Sunscreen Streak', icon: Flame, color: 'text-amber-400', unlocked: true },
    { title: 'Acne Barrier Protector', icon: Sparkles, color: 'text-electricBlue', unlocked: true },
    { title: 'Scalp Health Pioneer', icon: Award, color: 'text-deepRed', unlocked: false },
  ];

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-2xl font-bold tracking-tight text-white">Skin Identity & Habit Consistency</h2>
        <p className="text-slate-400 text-sm">Review barrier milestones, adherence streaks, and unlocked badges.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="p-6 rounded-2xl bg-glowCard border border-slate-800 flex items-center space-x-4">
          <div className="p-3 rounded-2xl bg-amber-500/10 border border-amber-500/20">
            <Flame className="w-8 h-8 text-amber-400" />
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white">{userProfile.streakDays} Days</div>
            <p className="text-xs uppercase tracking-wider text-slate-400 font-mono">Routine Adherence</p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-glowCard border border-slate-800 flex items-center space-x-4">
          <div className="p-3 rounded-2xl bg-electricBlue/10 border border-electricBlue/20">
            <Sparkles className="w-8 h-8 text-electricBlue" />
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white">{userProfile.skinType}</div>
            <p className="text-xs uppercase tracking-wider text-slate-400 font-mono">Primary Derm Profile</p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-glowCard border border-slate-800 flex items-center space-x-4">
          <div className="p-3 rounded-2xl bg-deepRed/10 border border-deepRed/20">
            <Award className="w-8 h-8 text-deepRed" />
          </div>
          <div>
            <div className="text-3xl font-extrabold text-white">Tier 2</div>
            <p className="text-xs uppercase tracking-wider text-slate-400 font-mono">Care Level</p>
          </div>
        </div>
      </div>

      <div className="bg-glowCard border border-slate-800 p-6 rounded-2xl space-y-4">
        <h3 className="font-semibold text-lg text-white">Gamified Badges</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {badges.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className={p-4 rounded-xl border flex items-center space-x-3 }
              >
                <Icon className={w-5 h-5 } />
                <span className="text-sm font-medium">{b.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
