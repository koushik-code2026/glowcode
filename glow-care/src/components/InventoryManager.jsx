import React, { useState } from 'react';
import { Plus, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function InventoryManager({ inventory, setInventory }) {
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [lifespan, setLifespan] = useState('6');

  const addProduct = (e) => {
    e.preventDefault();
    if (!name || !brand) return;
    const item = {
      id: Date.now().toString(),
      name,
      brand,
      openDate: new Date().toISOString().split('T')[0],
      lifespanMonths: Number(lifespan),
      status: 'Active',
    };
    setInventory([...inventory, item]);
    setName('');
    setBrand('');
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h2 className="text-2xl font-bold tracking-tight text-white">Cabinet & PAO (Period After Opening)</h2>
        <p className="text-slate-400 text-sm">Prevent oxidized actives and expired formulations from compromising skin health.</p>
      </div>

      <form onSubmit={addProduct} className="bg-glowCard border border-slate-800 p-4 rounded-xl flex flex-col md:flex-row gap-3">
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-electricBlue flex-1"
        />
        <input
          type="text"
          placeholder="Brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-electricBlue flex-1"
        />
        <select
          value={lifespan}
          onChange={(e) => setLifespan(e.target.value)}
          className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-200 focus:outline-none focus:border-electricBlue"
        >
          <option value="3">3 Months PAO</option>
          <option value="6">6 Months PAO</option>
          <option value="12">12 Months PAO</option>
        </select>
        <button
          type="submit"
          className="flex items-center justify-center space-x-2 bg-electricBlue/10 hover:bg-electricBlue/20 text-electricBlue border border-electricBlue/30 px-5 py-2 rounded-lg text-sm font-semibold transition-all"
        >
          <Plus className="w-4 h-4" />
          <span>Add Product</span>
        </button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {inventory.map((item) => (
          <div key={item.id} className="p-4 rounded-xl bg-glowCard border border-slate-800 flex justify-between items-start">
            <div>
              <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">{item.brand}</span>
              <h4 className="font-semibold text-slate-100">{item.name}</h4>
              <p className="text-xs text-slate-500 mt-1">Opened: {item.openDate} ({item.lifespanMonths}M shelf life)</p>
            </div>
            <span
              className={	ext-xs px-2.5 py-0.5 rounded-full font-mono border flex items-center space-x-1 }
            >
              {item.status === 'Active' ? <ShieldCheck className="w-3 h-3" /> : <AlertTriangle className="w-3 h-3" />}
              <span>{item.status}</span>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
