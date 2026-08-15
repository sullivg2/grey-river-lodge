import React, { useState } from 'react';
import { FLY_PATTERNS } from '../data/riverData';
import { FlyPattern } from '../types';
import { Sparkles, Eye, Waves, CheckCircle2 } from 'lucide-react';

export const FlyBoxExplorer: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeFly, setActiveFly] = useState<FlyPattern>(FLY_PATTERNS[0]);

  const filteredFlies = selectedCategory === 'All'
    ? FLY_PATTERNS
    : FLY_PATTERNS.filter(f => f.category === selectedCategory);

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
      
      {/* Header */}
      <div className="bg-[#1B2A32] text-white p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold">
            The Grey River Fly Box
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif text-white">Proven Salmon & Sea Trout Patterns</h3>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 bg-[#11191F] p-1.5 rounded-lg border border-[#263B46]">
          {['All', 'Dry Fly', 'Wet Fly', 'Trout / Streamer'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 text-xs rounded font-medium transition cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#D97746] text-white shadow'
                  : 'text-[#F5F2EB]/70 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of Fly Cards */}
      <div className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-[#FAF8F4]">
        {filteredFlies.map((fly) => {
          const isSelected = activeFly.id === fly.id;
          return (
            <div
              key={fly.id}
              onClick={() => setActiveFly(fly)}
              className={`bg-white rounded-lg p-5 border transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-4 hover:shadow-md ${
                isSelected
                  ? 'border-[#D97746] ring-2 ring-[#D97746]/20 shadow-md'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                      fly.category === 'Dry Fly'
                        ? 'bg-amber-100 text-amber-800'
                        : fly.category === 'Wet Fly'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {fly.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500 font-semibold">
                    Sizes: {fly.bestSizes}
                  </span>
                </div>

                <h4 className="text-lg font-serif font-bold text-slate-900 mb-1.5 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: fly.accentColor }}></span>
                  {fly.name}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {fly.description}
                </p>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-100 text-[11px]">
                <div className="flex items-center justify-between text-slate-600">
                  <span className="text-slate-400 font-medium">Water Type:</span>
                  <span className="font-semibold text-slate-800">{fly.waterCondition}</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span className="text-slate-400 font-medium">Presentation:</span>
                  <span className="font-semibold text-[#2D4A3E] truncate max-w-[180px]" title={fly.action}>
                    {fly.action}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Featured Fly Detail Focus Box */}
      <div className="bg-[#11191F] text-white p-6 sm:p-8 border-t border-[#263B46]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold">
              Spotlight Pattern: {activeFly.name}
            </span>
            <h4 className="text-xl font-serif text-white">
              Why this pattern dominates in Grey River waters
            </h4>
            <p className="text-xs text-[#F5F2EB]/80 leading-relaxed max-w-2xl">
              {activeFly.description} Target species: <strong className="text-[#D97746]">{activeFly.targetSpecies}</strong>. Best fished when water clarity is {activeFly.waterCondition.toLowerCase()}.
            </p>
          </div>

          <div className="bg-[#1B2A32] p-4 rounded-lg border border-[#263B46] shrink-0 text-xs space-y-1 text-center w-full md:w-auto">
            <span className="text-slate-400 block text-[10px] uppercase font-bold">Lodge Fly Tying Vise</span>
            <span className="text-[#D97746] font-bold">Custom tied on-site daily</span>
            <span className="text-[10px] text-[#F5F2EB]/60 block">Full supply in lodge fly shop</span>
          </div>
        </div>
      </div>

    </div>
  );
};
