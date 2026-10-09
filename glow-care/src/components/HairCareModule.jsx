import React from 'react';
import { Scissors, CheckCircle, Clock } from 'lucide-react';

export default function HairCareModule({ items, setItems }) {
  const markDone = (id) => {
    setItems(
      items.map((i) =>
        i.id === id ? { ...i, lastDone: 'Today', status: 'Optimal' } : i
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-2xl font-bold tracking-tight text-white">Hair Fall Prevention & Scalp Protocol</h2>
        <p className="text-slate-400 text-sm">Stimulate follicular microcirculation and maintain an antifungal scalp baseline.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item.id} className="p-5 rounded-2xl bg-glowCard border border-slate-800 flex flex-col justify-between space-y-4">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                  <Scissors className="w-5 h-5 text-electricBlue" />
                </div>
                <span
                  className={	ext-xs px-2.5 py-0.5 rounded-full font-mono border }
                >
                  {item.status}
                </span>
              </div>
              <h3 className="font-semibold text-white">{item.treatment}</h3>
              <p className="text-xs text-slate-400 mt-1 flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5" />
                <span>Target: {item.cadence}</span>
              </p>
              <p className="text-xs font-mono text-slate-500 mt-2">Last done: {item.lastDone}</p>
            </div>

            <button
              onClick={() => markDone(item.id)}
              className="w-full flex items-center justify-center space-x-2 py-2 rounded-xl bg-slate-800/80 hover:bg-electricBlue hover:text-black text-slate-200 transition-all font-medium text-xs border border-slate-700"
            >
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Mark Completed</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
