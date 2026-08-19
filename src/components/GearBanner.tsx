import React from 'react';
import { PageId } from '../types';
import { ArrowRight, ShoppingBag } from 'lucide-react';

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
  targetPage: PageId;
}

export const GearBanner: React.FC<GearBannerProps> = ({ className = '', onNavigate }) => {
  const handleNavigation = (page: PageId) => (e: React.MouseEvent) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(page);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const tackleCards: TackleCardItem[] = [
    {
      title: 'NAM Single & Double-Hand Rods',
      badge: 'BLANKS',
      description:
        'Ultra-responsive carbon and graphene actions dialed for delicate dry fly presentations and high-gradient canyon spey deliveries.',
      imageSrc: '/rendh.jpg', // Replace with transparent PNG or 16:9 lifestyle asset
      alt: 'NAM Fly Rods',
      targetPage: 'fly-shop',
    },
    {
      title: 'NAM Precision Fly Lines',
      badge: 'TAPERS',
      description:
        'Tuned floating tapers, shooting heads, and running lines crafted specifically for effortless turnover and heavy bomber deliveries.',
      imageSrc: '/hazumi.jpg',
      alt: 'NAM Precision Fly Lines',
      targetPage: 'fly-shop',
    },
    {
      title: 'Einarsson Sealed Drag Reels',
      badge: 'STOPPING POWER',
      description:
        'Icelandic precision engineering with near-zero startup inertia to protect fine tippets against ocean-fresh Atlantic salmon runs.',
      imageSrc: '/einarsson.jpg',
      alt: 'Einarsson Fly Reel',
      targetPage: 'fly-shop',
    },
  ];

  return (
    <section className={`w-full bg-[#11191F] text-white py-16 sm:py-24 border-y border-[#1B2A32] relative overflow-hidden ${className}`}>
      {/* Ambient Lighting */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1014]/60 via-transparent to-[#0B1014]/80 pointer-events-none" />
      <div className="absolute -right-32 top-1/4 w-96 h-96 bg-[#D97746]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT COLUMN: Narrative & Partnership Branding */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5">
              <span className="h-px w-6 bg-[#D97746]" aria-hidden="true" />
              <span className="text-xs font-mono tracking-widest text-[#D97746] uppercase font-bold">
                THE RIVER ARSENAL • TACKLE PARTNERSHIP
              </span>
            </div>

            {/* NAM Partner Logo Badge */}
            <div className="flex items-center pt-1">
              <div className="px-4 py-2 rounded-lg bg-[#18232A] border border-[#263B46] hover:border-[#D97746]/50 shadow-md transition-all duration-300">
                <img 
                  src="/nam-products_logo_CMYK_white.jpg" 
                  alt="NAM Products Logo" 
                  className="h-8 w-auto max-w-[140px] object-contain"
                />
              </div>
            </div>

            {/* Headline */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight font-normal pt-1">
              Equipped by NAM Products
            </h2>

            {/* Subhead */}
            <p className="text-base sm:text-lg text-[#F5F2EB]/80 font-light leading-relaxed">
              Precision Scandinavian Blanks & Tapers Meet South Coast Atlantic Salmon.
            </p>

            {/* Narrative Body Copy */}
            <div className="space-y-4 text-sm sm:text-base text-[#F5F2EB]/70 leading-relaxed font-light">
              <p>
                Guests enjoy exclusive lodge access to an arsenal of NAM single-hand and double-handed spey rods, custom-tapered NAM fly lines, and Icelandic Einarsson sealed-drag reels. Every outfit is tuned for Grey River’s pocket water, holding pools, and ocean-fresh runs.
              </p>
              <p>
                Leave cumbersome rod travel tubes at home or explore our curated shop to test-drive cutting-edge tackle matched to canyon winds and crystal glides.
              </p>
            </div>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-6">
              <button 
                onClick={handleNavigation('the-fishery')}
                className="group inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#D97746] hover:text-[#e58a5b] transition-colors duration-200 cursor-pointer"
              >
                <span>Explore Tackle & Pool Specs</span>
                <ArrowRight className="w-4 h-4 transform transition-transform duration-200 group-hover:translate-x-1.5" />
              </button>

              <button 
                onClick={handleNavigation('fly-shop')}
                className="group inline-flex items-center gap-2 text-sm sm:text-base font-medium text-[#F5F2EB]/80 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4 text-[#D97746]" />
                <span>Browse Full Fly Shop</span>
              </button>
            </div>

          </div>

          {/* RIGHT COLUMN: Tackle Showcase Cards with Widescreen Framing */}
          <div className="lg:col-span-6 space-y-4">
            {tackleCards.map((card, idx) => (
              <button
                key={idx}
                onClick={handleNavigation(card.targetPage)}
                className="w-full text-left group bg-[#18232A]/90 hover:bg-[#1E2E38] border border-[#263B46] hover:border-[#D97746]/60 rounded-xl p-4 transition-all duration-300 shadow-xl flex flex-col sm:flex-row items-center gap-4 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#D97746]"
                aria-label={`View ${card.title} in the Fly Shop`}
              >
                {/* 16:9 Widescreen Hardware Container */}
                <div className="w-full sm:w-36 h-28 rounded-lg bg-[#0F161C] border border-[#263B46]/80 overflow-hidden shrink-0 flex items-center justify-center p-2 relative">
                  <img 
                    src={card.imageSrc} 
                    alt={card.alt} 
                    className="w-full h-full object-contain transform transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Card Details */}
                <div className="flex-1 min-w-0 w-full">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <h3 className="font-serif text-base sm:text-lg text-white font-medium group-hover:text-[#D97746] transition-colors duration-200">
                      {card.title}
                    </h3>
                    <span className="text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded bg-[#D97746]/10 text-[#D97746] border border-[#D97746]/20 uppercase shrink-0">
                      {card.badge}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#F5F2EB]/70 leading-relaxed font-light">
                    {card.description}
                  </p>
                  
                  {/* Contextual CTA */}
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] font-mono font-medium text-[#D97746] opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <span>VIEW IN FLY SHOP</span>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </button>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};