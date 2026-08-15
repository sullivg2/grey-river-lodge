import React, { useState } from 'react';
import { RIVER_POOLS } from '../data/riverData';
import { RiverPool } from '../types';
import { MapPin, Waves, Compass, Sparkles, Footprints, Anchor, Fish, ChevronRight, Eye } from 'lucide-react';

export const RiverPoolExplorer: React.FC = () => {
  const [selectedPool, setSelectedPool] = useState<RiverPool>(RIVER_POOLS[0]);
  const [filterSeason, setFilterSeason] = useState<string>('All');

  const filteredPools = filterSeason === 'All' 
    ? RIVER_POOLS 
    : RIVER_POOLS.filter(p => p.optimalSeason === filterSeason || p.optimalSeason === 'All Season');

  return (
    <div className="bg-white rounded-xl shadow-lg border border-[#263B46]/20 overflow-hidden">
      
      {/* Header Bar */}
      <div className="bg-[#11191F] text-white p-6 border-b border-[#263B46] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold">
            Interactive System Map & Pool Guide
          </span>
          <h3 className="text-2xl font-serif text-white">The Named Pools of Grey River</h3>
        </div>

        {/* Season Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-[#1B2A32] p-1.5 rounded-lg border border-[#263B46]">
          {['All', 'Late June', 'July Peak', 'August'].map((season) => (
            <button
              key={season}
              onClick={() => setFilterSeason(season)}
              className={`px-3 py-1 text-xs rounded font-medium transition cursor-pointer ${
                filterSeason === season
                  ? 'bg-[#D97746] text-white shadow'
                  : 'text-[#F5F2EB]/70 hover:text-white'
              }`}
            >
              {season}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Side: Illustrated Schematic Map */}
        <div className="lg:col-span-7 bg-[#1B2A32] p-6 relative min-h-[380px] sm:min-h-[460px] flex flex-col justify-between overflow-hidden border-b lg:border-b-0 lg:border-r border-[#263B46]">
          
          {/* Top Map HUD */}
          <div className="relative z-10 flex justify-between items-center text-xs text-[#F5F2EB]/70">
            <div className="flex items-center gap-2 bg-[#11191F]/80 backdrop-blur px-3 py-1.5 rounded-full border border-[#263B46]">
              <Compass className="w-3.5 h-3.5 text-[#D97746] animate-spin-slow" />
              <span className="font-mono text-[11px]">47°35'N, 57°06'W • Fjord Canyon Run</span>
            </div>
            <span className="bg-[#2D4A3E] text-white text-[10px] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider">
              {filteredPools.length} Pools Highlighted
            </span>
          </div>

          {/* SVG Fjord Canyon & River Graphic */}
          <div className="relative w-full h-[320px] sm:h-[360px] my-auto">
            
            {/* SVG Stylized River Course */}
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                {/* River water gradient */}
                <linearGradient id="riverGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1E5C6E" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#2E869E" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#1E5C6E" stopOpacity="0.9" />
                </linearGradient>
                {/* Mountain contour gradient */}
                <linearGradient id="canyonSlope" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#263B46" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#11191F" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Canyon topography lines */}
              <path d="M 0 30 Q 30 10 60 25 T 100 0 L 100 100 L 0 100 Z" fill="url(#canyonSlope)" />
              <path d="M 0 70 Q 40 85 70 65 T 100 90 L 100 100 L 0 100 Z" fill="url(#canyonSlope)" opacity="0.4" />

              {/* Meandering River System */}
              <path
                d="M 15 85 Q 25 65 38 48 T 58 35 T 78 20 T 92 10"
                fill="none"
                stroke="url(#riverGradient)"
                strokeWidth="12"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M 15 85 Q 25 65 38 48 T 58 35 T 78 20 T 92 10"
                fill="none"
                stroke="#67E8F9"
                strokeWidth="2"
                strokeDasharray="3 3"
                opacity="0.6"
              />

              {/* Tributary fork */}
              <path
                d="M 58 35 Q 70 45 85 48"
                fill="none"
                stroke="url(#riverGradient)"
                strokeWidth="6"
                strokeLinecap="round"
                opacity="0.8"
              />

              {/* Lodge Compound Indicator */}
              <circle cx="48" cy="54" r="3.5" fill="#D97746" />
              <circle cx="48" cy="54" r="6" fill="#D97746" opacity="0.3" />
            </svg>

            {/* Lodge Marker Pin */}
            <div className="absolute top-[52%] left-[48%] -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
              <div className="bg-[#D97746] text-white text-[9px] font-bold px-2 py-0.5 rounded shadow-lg whitespace-nowrap flex items-center gap-1">
                <span>★ Main Timber Lodge</span>
              </div>
            </div>

            {/* Interactive Pool Hotspots */}
            {RIVER_POOLS.map((pool) => {
              const isSelected = selectedPool.id === pool.id;
              const isVisible = filterSeason === 'All' || pool.optimalSeason === filterSeason || pool.optimalSeason === 'All Season';

              return (
                <button
                  key={pool.id}
                  onClick={() => setSelectedPool(pool)}
                  style={{ top: `${pool.coordinates.y}%`, left: `${pool.coordinates.x}%` }}
                  className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 group cursor-pointer transition-all duration-300 ${
                    isVisible ? 'opacity-100 scale-100' : 'opacity-30 scale-75'
                  }`}
                  title={`${pool.name} - Click for guide notes`}
                >
                  <div className="relative flex items-center justify-center">
                    {isSelected && (
                      <span className="absolute w-8 h-8 rounded-full bg-[#D97746] opacity-40 animate-ping"></span>
                    )}
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-[10px] shadow-lg border-2 transition-transform ${
                        isSelected
                          ? 'bg-[#D97746] text-white border-white scale-125'
                          : 'bg-[#11191F] text-[#F5F2EB] border-[#D97746] group-hover:bg-[#D97746] group-hover:text-white'
                      }`}
                    >
                      <Fish className="w-3.5 h-3.5" />
                    </div>
                  </div>

                  {/* Tooltip Name Label */}
                  <div
                    className={`mt-1 whitespace-nowrap px-2 py-0.5 rounded text-[10px] font-semibold transition-all ${
                      isSelected
                        ? 'bg-white text-slate-900 shadow-md font-bold'
                        : 'bg-[#11191F]/90 text-[#F5F2EB]/90 group-hover:bg-white group-hover:text-slate-900'
                    }`}
                  >
                    {pool.name}
                  </div>
                </button>
              );
            })}

          </div>

          {/* Bottom Map Note */}
          <div className="relative z-10 text-[11px] text-[#F5F2EB]/60 flex items-center justify-between border-t border-[#263B46]/60 pt-3">
            <span className="flex items-center gap-1">
              <Anchor className="w-3 h-3 text-[#D97746]" />
              Downstream: Tidal Fjord / Estuary
            </span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              Upstream: Devil's Gut / Upper Gorge
            </span>
          </div>

        </div>

        {/* Right Side: Detailed Pool Tactical Card */}
        <div className="lg:col-span-5 p-6 sm:p-8 bg-[#F5F2EB]/50 flex flex-col justify-between space-y-6">
          
          <div>
            {/* Header info */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#D97746] bg-[#D97746]/10 px-2.5 py-1 rounded border border-[#D97746]/20">
                {selectedPool.optimalSeason}
              </span>
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1">
                <Footprints className="w-3.5 h-3.5 text-[#3E6656]" />
                {selectedPool.accessMethod}
              </span>
            </div>

            <h4 className="text-2xl font-serif font-bold text-slate-900 mb-2">
              {selectedPool.name}
            </h4>

            <p className="text-sm text-slate-700 leading-relaxed mb-6">
              {selectedPool.description}
            </p>

            {/* Quick Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              
              <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Depth & Flow</span>
                <span className="text-sm font-bold text-slate-800">{selectedPool.depth}</span>
                <span className="text-[11px] text-[#3E6656] block">{selectedPool.currentType}</span>
              </div>

              <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Distance from Lodge</span>
                <span className="text-sm font-bold text-slate-800">{selectedPool.distanceFromLodge}</span>
                <span className="text-[11px] text-slate-500 block">{selectedPool.wadingDifficulty}</span>
              </div>

              <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm col-span-2">
                <span className="text-[10px] text-slate-400 uppercase font-semibold block">Expected Salmon Weight</span>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-[#D97746]">{selectedPool.averageFishSize}</span>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-medium">Single Barbless Only</span>
                </div>
              </div>

            </div>

            {/* Tactical Tip Box */}
            <div className="bg-[#11191F] text-white p-4 rounded-lg border-l-4 border-[#D97746] space-y-1.5">
              <span className="text-[10px] uppercase tracking-wider text-[#D97746] font-bold flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                Head Guide's Tactical Advice:
              </span>
              <p className="text-xs text-[#F5F2EB]/90 leading-relaxed italic">
                "{selectedPool.tacticalTip}"
              </p>
            </div>
          </div>

          {/* Primary Recommended Flies */}
          <div className="pt-4 border-t border-slate-200">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-700 block mb-2">
              Recommended Patterns for this Pool:
            </span>
            <div className="flex flex-wrap gap-2">
              {selectedPool.primaryFlies.map((fly, idx) => (
                <span
                  key={idx}
                  className="bg-white border border-[#2D4A3E]/30 text-[#2D4A3E] text-xs font-semibold px-3 py-1 rounded-full shadow-sm flex items-center gap-1"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D97746]"></span>
                  {fly}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
