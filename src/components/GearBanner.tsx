import React from 'react';
import { PageId } from '../types';

interface GearBannerProps {
  className?: string;
  onNavigate?: (page: PageId) => void;
}

export const GearBanner: React.FC<GearBannerProps> = ({ className = '', onNavigate }) => {
  const handleFisheryClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('the-fishery');
    }
  };

  return (
    <section className={`w-full bg-[#11191F] text-white py-16 sm:py-24 border-y border-slate-800/80 relative overflow-hidden ${className}`}>
      {/* Ambient Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B2A32]/40 via-transparent to-transparent pointer-events-none" />
      <div className="absolute -right-32 -top-32 w-96 h-96 bg-[#D97746]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Context & Brand Story */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-3">
              <span className="h-px w-6 bg-[#D97746]" aria-hidden="true" />
              <span className="text-xs font-mono tracking-widest text-[#D97746] uppercase font-bold">
                THE RIVER ARSENAL • TACKLE PARTNERSHIP
              </span>
            </div>

            {/* NAM LOGO ONLY */}
            <div className="flex items-center pt-1">
              <div className="px-4 py-2 rounded-lg bg-[#18232A] border border-slate-700/80 hover:border-[#D97746]/50 shadow-md transition-all duration-300">
                <img 
                  src="/nam-products_logo_CMYK_white.jpg" 
                  alt="NAM Products" 
                  className="h-8 w-auto max-w-[140px] object-contain"
                />
              </div>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight font-normal pt-1">
              Equipped by NAM Products
            </h2>

            {/* Subhead / Lead */}
            <p className="text-base sm:text-lg text-[#F5F2EB]/80 font-light leading-relaxed">
              Precision Scandinavian Blanks & Tapers Meet South Coast Salmon.
            </p>

            {/* Body Copy */}
            <div className="space-y-4 text-sm sm:text-base text-[#F5F2EB]/70 leading-relaxed font-light">
              <p>
                Guests enjoy exclusive on-water access to an arsenal of NAM single-hand and double-handed spey rods, custom-tapered NAM fly lines, and Icelandic Einarsson sealed-drag reels. Every outfit is meticulously matched to deliver delicate presentations in crystal glides or launch heavy bombers into canyon winds.
              </p>
              <p>
                Leave cumbersome rod travel tubes at home or take this opportunity to test-drive cutting-edge tackle tuned specifically for Grey River’s holding pools, steep chutes, and ocean-fresh Atlantic salmon.
              </p>
            </div>

            {/* Action Link */}
            <div className="pt-3">
              <a 
                href="#the-fishery" 
                onClick={handleFisheryClick}
                className="group inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#D97746] hover:text-[#e58a5b] transition-colors duration-200 cursor-pointer"
              >
                <span>Explore Tackle & Pool Specs</span>
                <span className="transform transition-transform duration-200 group-hover:translate-x-1.5" aria-hidden="true">→</span>
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: 3 Feature Cards (Rods, Lines, Reels) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Card 1: Rods */}
            <div className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg p-5 transition-all duration-300 hover:border-slate-600 shadow-lg">
              <div className="flex items-center justify-between gap-3 mb-2">
                <h3 className="font-serif text-lg text-white font-medium">
                  NAM Single & Double-Hand Rods
                </h3>
                <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-[#D97746]/10 text-[#D97746] border border-[#D97746]/20 uppercase">
                  BLANKS
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#F5F2EB]/70 leading-relaxed">
                Ultra-responsive carbon and graphene actions dialed for dry fly presentations and canyon spey deliveries.
              </p>
            </div>

            {/* Card 2: Lines */}
            <div className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg p-5 transition-all duration-300 hover:border-slate-600 shadow-lg">
              <div className="flex items-center justify-between gap-3 mb-2">
                <h3 className="font-serif text-lg text-white font-medium">
                  NAM Precision Fly Lines
                </h3>
                <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-[#D97746]/10 text-[#D97746] border border-[#D97746]/20 uppercase">
                  TAPERS
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#F5F2EB]/70 leading-relaxed">
                Tuned floating tapers, shooting heads, and running lines crafted specifically for effortless turnover and long swings.
              </p>
            </div>

            {/* Card 3: Reels */}
            <div className="bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg p-5 transition-all duration-300 hover:border-slate-600 shadow-lg">
              <div className="flex items-center justify-between gap-3 mb-2">
                <h3 className="font-serif text-lg text-white font-medium">
                  Einarsson Sealed Drag Reels
                </h3>
                <span className="text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-[#D97746]/10 text-[#D97746] border border-[#D97746]/20 uppercase">
                  STOPPING POWER
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#F5F2EB]/70 leading-relaxed">
                Icelandic precision engineering with silky smooth startup inertia to protect fine tippets against ocean-fresh Atlantic salmon runs.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};