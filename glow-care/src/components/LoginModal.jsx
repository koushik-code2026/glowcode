import React, { useState } from 'react';
import { Fingerprint, Lock, Mail, X } from 'lucide-react';

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onLoginSuccess(email || 'User');
    onClose();
  };

  const handleBiometric = () => {
    onLoginSuccess('Biometric User');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-glowCard border border-slate-800 rounded-3xl p-6 shadow-2xl space-y-6">
        <button onClick={onClose} className="absolute top-5 right-5 text-slate-400 hover:text-white">
          <X className="w-5 h-5" />
        </button>

        <div className="text-center space-y-1">
          <h3 className="text-2xl font-bold text-white tracking-tight">Access Glow Code</h3>
          <p className="text-xs text-slate-400">Authenticate your secure dermal profile</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">Email</label>
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 focus-within:border-electricBlue">
              <Mail className="w-4 h-4 text-slate-400 mr-2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="bg-transparent text-sm text-slate-100 focus:outline-none w-full"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">Password</label>
            <div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl px-3 py-2.5 focus-within:border-electricBlue">
              <Lock className="w-4 h-4 text-slate-400 mr-2" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢"
                className="bg-transparent text-sm text-slate-100 focus:outline-none w-full"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-electricBlue text-black font-semibold py-2.5 rounded-xl shadow-lg shadow-electricBlue/25 hover:opacity-90 transition-all text-sm"
          >
            Sign In with Email
          </button>
        </form>

        <div className="relative flex items-center justify-center">
          <div className="border-t border-slate-800 w-full"></div>
          <span className="bg-glowCard px-3 text-[11px] font-mono uppercase text-slate-500 absolute">or passkey</span>
        </div>

        <button
          onClick={handleBiometric}
          className="w-full flex items-center justify-center space-x-2 bg-slate-900 hover:bg-slate-800/80 border border-slate-700/80 text-slate-200 py-2.5 rounded-xl transition-all text-sm font-medium"
        >
          <Fingerprint className="w-5 h-5 text-electricBlue" />
          <span>Continue with Touch ID / Face ID</span>
        </button>
      </div>
    </div>
  );
}
