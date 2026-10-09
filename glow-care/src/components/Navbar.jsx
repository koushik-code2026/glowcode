import React from 'react';
import { Sparkles, Calendar, Activity, Scissors, Archive, User, LogIn } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenLogin, isLoggedIn, userProfile }) {
  const tabs = [
    { id: 'routine', label: 'Routines', icon: Calendar },
    { id: 'acne', label: 'Acne Tracker', icon: Activity },
    { id: 'hair', label: 'Hair Health', icon: Scissors },
    { id: 'inventory', label: 'Cabinet', icon: Archive },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <header className="sticky top-0 z-40 bg-glowDark/80 backdrop-blur-md border-b border-slate-800/80 px-4 lg:px-8 py-3.5">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('routine')}>
          <div className="p-2 rounded-xl bg-gradient-to-tr from-electricBlue/20 to-deepRed/20 border border-electricBlue/40">
            <Sparkles className="w-5 h-5 text-electricBlue" />
          </div>
          <div>
            <span className="font-bold text-lg tracking-wider text-white">GLOW<span className="text-electricBlue">CODE</span></span>
            <span className="block text-[10px] text-slate-400 font-mono tracking-widest uppercase">Skin & Hair Engine</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-1 bg-glowCard/60 p-1 rounded-2xl border border-slate-800">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={lex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-150 }
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="flex items-center space-x-3">
          {isLoggedIn ? (
            <button
              onClick={() => setActiveTab('profile')}
              className="flex items-center space-x-2 bg-slate-900 border border-slate-700/80 rounded-full py-1.5 px-3 hover:border-electricBlue/60 transition-all"
            >
              <div className="w-7 h-7 rounded-full bg-gradient-to-br from-electricBlue to-deepRed flex items-center justify-center text-xs font-bold text-black">
                {userProfile.name[0]}
              </div>
              <span className="text-sm font-medium text-slate-200 hidden sm:inline">{userProfile.name}</span>
            </button>
          ) : (
            <button
              onClick={onOpenLogin}
              className="flex items-center space-x-2 text-sm font-medium bg-gradient-to-r from-electricBlue to-cyan-400 text-black px-4 py-2 rounded-xl hover:opacity-90 shadow-md shadow-electricBlue/20"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
