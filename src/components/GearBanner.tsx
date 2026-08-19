import React from 'react';
import { PageId } from '../types';

interface GearBannerProps {
  className?: string;
  onNavigate?: (page: PageId) => void;
}

interface TackleCardItem {
  title: string;
  badge: string;
  description: string;
  imageSrc: string;
  alt: string;
}

export const GearBanner: React.FC<GearBannerProps> = ({ className = '', onNavigate }) => {
  const handleFisheryClick = (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate('the-fishery');
    }
  };

  const tackleCards: TackleCardItem[] = [
    {
      title: 'NAM Single & Double-Hand Rods',
      badge: 'BLANKS',
      description:
        'Ultra-responsive carbon and graphene actions dialed for dry fly presentations and canyon spey deliveries.',
      // Replace with your actual image filename from /public or /src/assets
      imageSrc: '/nam-rod-thumbnail.jpg',
      alt: 'NAM Fly Rods',
    },
    {
      title: 'NAM Precision Fly Lines',
      badge: 'TAPERS',
      description:
        'Tuned floating tapers, shooting heads, and running lines crafted specifically for effortless turnover and long swings.',
      // Replace with your actual image filename from /public or /src/assets
      imageSrc: '/nam-line-thumbnail.jpg',
      alt: 'NAM Precision Fly Lines',
    },
    {
      title: 'Einarsson Sealed Drag Reels',
      badge: 'STOPPING POWER',
      description:
        'Icelandic precision engineering with silky smooth startup inertia to protect fine tippets against ocean-fresh Atlantic salmon runs.',
      // Replace with your actual image filename from /public or /src/assets
      imageSrc: '/einarsson-reel-thumbnail.jpg',
      alt: 'Einarsson Fly Reel',
    },
  ];

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

          {/* RIGHT COLUMN: 3 Feature Cards with Product Images */}
          <div className="lg:col-span-5 space-y-4">
            {tackleCards.map((card, idx) => (
              <div 
                key={idx}
                className="group bg-slate-800/80 hover:bg-slate-800 border border-slate-700/80 rounded-lg p-4 sm:p-5 transition-all duration-300 hover:border-slate-600 shadow-lg flex items-center gap-4 sm:gap-5"
              >
                {/* Product Thumbnail Container */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-md bg-[#0F161C] border border-slate-700/80 overflow-hidden shrink-0 flex items-center justify-center p-1.5">
                  <img 
                    src={card.imageSrc} 
                    alt={card.alt} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Card Text Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="font-serif text-base sm:text-lg text-white font-medium truncate">
                      {card.title}
                    </h3>
                    <span className="text-[9px] sm:text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-[#D97746]/10 text-[#D97746] border border-[#D97746]/20 uppercase shrink-0">
                      {card.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#F5F2EB]/70 leading-relaxed line-clamp-2 sm:line-clamp-none font-light">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};