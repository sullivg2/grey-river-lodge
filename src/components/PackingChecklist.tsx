import React, { useState } from 'react';
import { CheckSquare, Square, Download, Printer, ShieldAlert, Sparkles, Check } from 'lucide-react';

interface ChecklistItem {
  id: string;
  category: 'Rods & Tackle' | 'Wading & Apparel' | 'Luggage & Camp' | 'Documents & Admin';
  text: string;
  mandatory: boolean;
  tip?: string;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  { id: '1', category: 'Rods & Tackle', text: '9\'0" 7wt or 8wt Single-Hand Fly Rod', mandatory: true, tip: 'Primary dry fly rod for Bombers & Wulffs' },
  { id: '2', category: 'Rods & Tackle', text: '11\'6" – 12\'6" 6/7wt Switch Rod (Optional)', mandatory: false, tip: 'Great for canyon pools & long swings' },
  { id: '3', category: 'Rods & Tackle', text: 'WF7F or WF8F Weight-Forward Floating Lines', mandatory: true },
  { id: '4', category: 'Rods & Tackle', text: '9ft – 12ft Fluorocarbon / Mono Leaders (8lb, 10lb, 12lb)', mandatory: true },
  { id: '5', category: 'Rods & Tackle', text: 'Bombers (Green, White, Brown #2 – #8 single barbless)', mandatory: true },
  { id: '6', category: 'Rods & Tackle', text: 'Wet Flies (Undertaker, Blue Charm, Green Butt #4 – #8)', mandatory: true },
  { id: '7', category: 'Wading & Apparel', text: 'Breathable Stockingfoot Waders', mandatory: true, tip: 'Inspect for pinhole leaks prior to arrival' },
  { id: '8', category: 'Wading & Apparel', text: 'Felt or Rubber-soled Wading Boots (No studs permitted in boats/decks)', mandatory: true },
  { id: '9', category: 'Wading & Apparel', text: 'Polarized Sunglasses (Amber or Copper lenses)', mandatory: true, tip: 'Essential for spotting salmon in crystal pools' },
  { id: '10', category: 'Wading & Apparel', text: 'Gore-Tex Rain / Wading Jacket', mandatory: true },
  { id: '11', category: 'Wading & Apparel', text: 'Merino Wool Base Layers & Thermal Socks', mandatory: true },
  { id: '12', category: 'Luggage & Camp', text: 'Soft-Sided Duffel Bags (Max 40–50 lbs total)', mandatory: true, tip: 'Strictly required for helicopter payload' },
  { id: '13', category: 'Luggage & Camp', text: 'Waterproof Dry Bag / Daypack for River Transit', mandatory: true },
  { id: '14', category: 'Luggage & Camp', text: 'Insect Repellent / Head Net (for warm evenings)', mandatory: true },
  { id: '15', category: 'Documents & Admin', text: 'Government Photo ID / Passport', mandatory: true },
  { id: '16', category: 'Documents & Admin', text: 'NL Non-Resident Salmon License (or arrange via Lodge)', mandatory: true }
];

export const PackingChecklist: React.FC = () => {
  const [checkedIds, setCheckedIds] = useState<Set<string>>(new Set(['1', '3', '7', '12']));
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const toggleCheck = (id: string) => {
    const next = new Set(checkedIds);
    if (next.has(id)) {
      next.delete(id);
    } else {
      next.add(id);
    }
    setCheckedIds(next);
  };

  const filteredItems = activeCategory === 'All'
    ? CHECKLIST_ITEMS
    : CHECKLIST_ITEMS.filter(item => item.category === activeCategory);

  const completionPercent = Math.round((checkedIds.size / CHECKLIST_ITEMS.length) * 100);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
      
      {/* Header */}
      <div className="bg-[#1B2A32] text-white p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold">
            Expedition Readiness
          </span>
          <h3 className="text-2xl font-serif text-white">Wilderness Packing & Tackle Checklist</h3>
        </div>

        {/* Progress pill */}
        <div className="bg-[#11191F] px-4 py-2 rounded-lg border border-[#263B46] text-xs flex items-center gap-3">
          <div>
            <span className="text-slate-400 block text-[10px] uppercase font-semibold">Packed Items</span>
            <span className="font-bold text-[#D97746] text-sm">
              {checkedIds.size} / {CHECKLIST_ITEMS.length} ({completionPercent}%)
            </span>
          </div>
          <div className="w-16 bg-[#263B46] h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#D97746] h-full transition-all duration-300"
              style={{ width: `${completionPercent}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="p-4 bg-[#FAF8F4] border-b border-slate-200 flex flex-wrap items-center gap-2">
        {['All', 'Rods & Tackle', 'Wading & Apparel', 'Luggage & Camp', 'Documents & Admin'].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 text-xs rounded-md font-medium transition cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#2D4A3E] text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-300 hover:border-slate-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map((item) => {
          const isChecked = checkedIds.has(item.id);
          return (
            <div
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`p-3.5 rounded-lg border cursor-pointer transition flex items-start gap-3 ${
                isChecked
                  ? 'bg-emerald-50/60 border-emerald-300 text-slate-800'
                  : 'bg-white border-slate-200 hover:border-slate-300'
              }`}
            >
              <button
                type="button"
                className={`mt-0.5 shrink-0 ${
                  isChecked ? 'text-emerald-600' : 'text-slate-400'
                }`}
              >
                {isChecked ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5" />}
              </button>

              <div className="space-y-1">
                <p className={`text-xs font-semibold ${isChecked ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                  {item.text}
                </p>
                {item.tip && (
                  <p className="text-[11px] text-[#D97746] italic">
                    Note: {item.tip}
                  </p>
                )}
                <span className="text-[10px] uppercase font-mono text-slate-400 block">
                  {item.category} {item.mandatory && '• Required'}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Aircraft Weight Warning Footer */}
      <div className="bg-[#11191F] text-white p-5 border-t border-[#263B46] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3">
          <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0" />
          <p className="text-[#F5F2EB]/80">
            <strong className="text-amber-400">Strict Helicopter Baggage Rule:</strong> 40–50 lbs max per angler in soft duffels. Hard suitcases cannot fit in helicopter bay pods.
          </p>
        </div>
        <button
          onClick={() => window.print()}
          className="bg-[#1B2A32] hover:bg-[#263B46] text-white text-xs font-semibold px-4 py-2 rounded border border-[#263B46] transition flex items-center gap-1.5 shrink-0 cursor-pointer"
        >
          <Printer className="w-3.5 h-3.5 text-[#D97746]" />
          <span>Print Checklist</span>
        </button>
      </div>

    </div>
  );
};
