import React from 'react';
import { Waves, Thermometer, Wind, Sunrise, Droplets, CheckCircle2 } from 'lucide-react';

export const LiveRiverTicker: React.FC = () => {
  return (
    <div className="bg-[#1B2A32] border-y border-[#263B46] text-[#F5F2EB] py-3.5 px-4 overflow-hidden shadow-inner">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs">
        
        {/* River Status Indicator */}
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
          </span>
          <span className="font-semibold uppercase tracking-wider text-emerald-400 text-[11px]">
            Live River Conditions
          </span>
          <span className="text-[#F5F2EB]/40 hidden sm:inline">|</span>
          <span className="text-[#F5F2EB]/90 font-medium hidden sm:inline">
            South Coast Watershed • Grey River Gauging Station
          </span>
        </div>

        {/* Condition Metric Pills */}
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[12px]">
          
          <div className="flex items-center gap-1.5" title="Water Temperature">
            <Thermometer className="w-3.5 h-3.5 text-[#D97746]" />
            <span className="text-[#F5F2EB]/70">Water:</span>
            <span className="font-semibold text-white">56°F (13.3°C)</span>
            <span className="text-[10px] text-emerald-400 font-mono">(Prime)</span>
          </div>

          <div className="flex items-center gap-1.5" title="Water Clarity & Flow">
            <Droplets className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-[#F5F2EB]/70">Clarity:</span>
            <span className="font-semibold text-white">Crystal / 10+ ft</span>
          </div>

          <div className="flex items-center gap-1.5" title="Dry Fly Activity Rating">
            <Waves className="w-3.5 h-3.5 text-[#3E6656]" />
            <span className="text-[#F5F2EB]/70">Dry Fly Index:</span>
            <span className="font-semibold text-[#D97746]">9.4 / 10</span>
          </div>

          <div className="flex items-center gap-1.5 hidden lg:flex" title="Tidal Influence">
            <Sunrise className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-[#F5F2EB]/70">Tide:</span>
            <span className="font-semibold text-white">Incoming Push</span>
          </div>

        </div>

      </div>
    </div>
  );
};
