import React, { useState } from 'react';
import { Plus, ShieldCheck } from 'lucide-react';

export default function AcneTracker({ logs, setLogs }) {
  const [location, setLocation] = useState('Forehead');
  const [severity, setSeverity] = useState('Mild');
  const [trigger, setTrigger] = useState('');
  const [notes, setNotes] = useState('');

  const handleAddLog = (e) => {
    e.preventDefault();
    const newLog = {
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      location,
      severity,
      trigger: trigger || 'Unknown / Environmental',
      notes,
    };
    setLogs([newLog, ...logs]);
    setTrigger('');
    setNotes('');
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-2xl font-bold tracking-tight text-white">Acne Intelligence & Breakout Log</h2>
        <p className="text-slate-400 text-sm">Correlate hormonal, dietary, and stress triggers with localized flare-ups.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <form onSubmit={handleAddLog} className="bg-glowCard border border-slate-800 p-5 rounded-2xl space-y-4">
          <h3 className="text-lg font-bold text-slate-100 flex items-center space-x-2">
            <Plus className="w-4 h-4 text-deepRed" />
            <span>Log Breakout Incident</span>
          </h3>

          <div>
            <label className="text-xs uppercase tracking-wider font-mono text-slate-400 block mb-1">Location</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-200 focus:outline-none focus:border-deepRed"
            >
              <option>Forehead</option>
              <option>Left Cheek</option>
              <option>Right Cheek</option>
              <option>Chin / Jawline</option>
              <option>Nose / T-Zone</option>
              <option>Temples</option>
            </select>
          </div>

          <div>
            <label className="text-xs uppercase tracking-wider font-mono text-slate-400 block mb-1">Severity</label>
            <select
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-200 focus:outline-none focus:border-deepRed"
            >
              <option>Mild (Non-inflammatory / Comedone)</option>
              <option>Moderate (Papule / Pustule)</option>
              <option>Severe (Nodule / Cystic)</option>
            </select>
          </div>

          <div>
            <label className="text-xs uppercase tracking-wider font-mono text-slate-400 block mb-1">Suspected Trigger</label>
            <input
              type="text"
              placeholder="e.g. High dairy, 4hrs sleep, friction"
              value={trigger}
              onChange={(e) => setTrigger(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-200 focus:outline-none focus:border-deepRed"
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-wider font-mono text-slate-400 block mb-1">Treatment Notes</label>
            <textarea
              rows="2"
              placeholder="e.g. Applied BHA patch, avoiding touching"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2.5 text-sm text-slate-200 focus:outline-none focus:border-deepRed"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-deepRed to-red-600 text-white font-semibold py-2.5 rounded-xl shadow-lg shadow-deepRed/20 hover:opacity-90 transition-all text-sm"
          >
            Record Entry
          </button>
        </form>

        <div className="lg:col-span-2 space-y-3">
          {logs.map((log) => (
            <div key={log.id} className="p-4 rounded-xl bg-glowCard border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-2">
              <div className="flex justify-between items-start">
                <div className="flex items-center space-x-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-deepRed"></span>
                  <span className="font-semibold text-white">{log.location}</span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 border border-slate-700">{log.severity}</span>
                </div>
                <span className="text-xs font-mono text-slate-500">{log.date}</span>
              </div>
              <p className="text-sm text-slate-400"><span className="text-slate-300 font-medium">Trigger:</span> {log.trigger}</p>
              {log.notes && (
                <div className="bg-slate-900/60 p-2.5 rounded-lg border border-slate-800/80 text-xs text-slate-300 flex items-start space-x-2">
                  <ShieldCheck className="w-4 h-4 text-electricBlue shrink-0 mt-0.5" />
                  <span>{log.notes}</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
