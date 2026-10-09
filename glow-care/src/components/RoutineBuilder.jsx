import React, { useState } from 'react';
import { Sun, Moon, CheckCircle2, Circle, Plus, Trash2 } from 'lucide-react';

export default function RoutineBuilder({ routines, setRoutines }) {
  const [activeSegment, setActiveSegment] = useState('morning');
  const [newStep, setNewStep] = useState('');
  const [newProduct, setNewProduct] = useState('');

  const filtered = routines.filter((r) => r.type === activeSegment);

  const toggleCheck = (id) => {
    setRoutines(routines.map((r) => (r.id === id ? { ...r, completed: !r.completed } : r)));
  };

  const addStep = (e) => {
    e.preventDefault();
    if (!newStep || !newProduct) return;
    const item = {
      id: Date.now().toString(),
      step: newStep,
      product: newProduct,
      type: activeSegment,
      completed: false,
    };
    setRoutines([...routines, item]);
    setNewStep('');
    setNewProduct('');
  };

  const deleteStep = (id) => {
    setRoutines(routines.filter((r) => r.id !== id));
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-slate-800 pb-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Daily Regimens</h2>
          <p className="text-slate-400 text-sm">Track step-by-step routines to ensure barrier repair and consistency.</p>
        </div>
        <div className="flex bg-slate-900 border border-slate-800 p-1 rounded-xl">
          <button
            onClick={() => setActiveSegment('morning')}
            className={lex items-center space-x-2 px-4 py-1.5 rounded-lg text-sm transition-all }
          >
            <Sun className="w-4 h-4 text-amber-400" />
            <span>Morning</span>
          </button>
          <button
            onClick={() => setActiveSegment('night')}
            className={lex items-center space-x-2 px-4 py-1.5 rounded-lg text-sm transition-all }
          >
            <Moon className="w-4 h-4 text-indigo-400" />
            <span>Night</span>
          </button>
        </div>
      </div>

      <div className="grid gap-3">
        {filtered.map((item, idx) => (
          <div
            key={item.id}
            className={lex items-center justify-between p-4 rounded-xl border transition-all }
          >
            <div className="flex items-center space-x-4">
              <button onClick={() => toggleCheck(item.id)} className="text-slate-400 hover:text-electricBlue">
                {item.completed ? (
                  <CheckCircle2 className="w-6 h-6 text-electricBlue" />
                ) : (
                  <Circle className="w-6 h-6" />
                )}
              </button>
              <div>
                <span className="text-xs uppercase tracking-wider font-mono text-electricBlue">Step {idx + 1} â€¢ {item.step}</span>
                <p className={ont-semibold text-slate-100 }>
                  {item.product}
                </p>
              </div>
            </div>
            <button onClick={() => deleteStep(item.id)} className="text-slate-500 hover:text-deepRed p-1 transition-colors">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <form onSubmit={addStep} className="bg-glowCard border border-slate-800 p-4 rounded-xl flex flex-col md:flex-row gap-3">
        <input
          type="text"
          placeholder="Step Name (e.g. Antioxidant Boost)"
          value={newStep}
          onChange={(e) => setNewStep(e.target.value)}
          className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-electricBlue flex-1"
        />
        <input
          type="text"
          placeholder="Product (e.g. 15% Vitamin C)"
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
          className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-electricBlue flex-1"
        />
        <button
          type="submit"
          className="flex items-center justify-center space-x-2 bg-electricBlue/10 hover:bg-electricBlue/20 text-electricBlue border border-electricBlue/30 px-5 py-2 rounded-lg text-sm font-semibold transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add Step</span>
        </button>
      </form>
    </div>
  );
}
