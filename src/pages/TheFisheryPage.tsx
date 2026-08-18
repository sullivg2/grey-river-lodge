import React from 'react';
import { PageId } from '../types';
import { RiverPoolExplorer } from '../components/RiverPoolExplorer';
import { FlyBoxExplorer } from '../components/FlyBoxExplorer';
import { RiverGaugeCard } from '../components/RiverGaugeCard';
import { PhotoGalleryShowcase } from '../components/PhotoGalleryShowcase';
import { 
  ShieldCheck, 
  Sparkles, 
  Compass,
  ExternalLink
} from 'lucide-react';

interface TheFisheryPageProps {
  onNavigate: (page: PageId) => void;
}

export const TheFisheryPage: React.FC<TheFisheryPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 sm:py-20 bg-[#F5F2EB] space-y-20">
      
      {/* Top Header — 2-Column Editorial Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-16">
          
          {/* LEFT COLUMN: Title & Lead Hook (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D97746] font-bold bg-[#D97746]/10 px-3.5 py-1.5 rounded-full border border-[#D97746]/25">
              <Compass className="w-3.5 h-3.5" />
              <span>Newfoundland's Most Remote Salmon River</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-[#11191F] tracking-tight leading-[1.1]">
              The Grey River: <br />
              <span className="italic font-light text-[#2D4A3E]">Wild Water, Untamed Salmon</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-800 font-normal leading-relaxed">
              Carving a dramatic path through the rugged, roadless wilderness of southern Newfoundland, the Grey River is one of Atlantic Canada’s most pristine and secluded river systems. Flanked by towering granite canyon walls, ancient boreal barrens, and deep coastal fjords, the river flows through a dramatic glacial landscape that has remained largely untouched by the modern world.
            </p>

            {/* Quick River Attribute Badges */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <span className="text-xs font-mono bg-white border border-slate-300 text-slate-700 px-3 py-1.5 rounded-md shadow-2xs">
                🚁 Helicopter Access Only
              </span>
              <span className="text-xs font-mono bg-white border border-slate-300 text-slate-700 px-3 py-1.5 rounded-md shadow-2xs">
                🧭 Zero Road Pressure
              </span>
              <span className="text-xs font-mono bg-white border border-slate-300 text-slate-700 px-3 py-1.5 rounded-md shadow-2xs">
                👀 World-Class Sight Fishing
              </span>
            </div>
          </div>

          {/* RIGHT COLUMN: The Fishery Character & Solitude (5 Cols Card) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <span className="h-2 w-2 rounded-full bg-[#D97746]" />
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-slate-500">
                The Fishery Dynamic
              </span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed">
              What truly defines the Grey River is its prolific, ocean-fresh Atlantic salmon fishery. Fed by cold-water tributaries and dramatic tides entering the fjord, the river offers miles of classic freestone holding pools, glassy tailouts, and tumbling rapids. Beginning in late June and continuing through August, hard-fighting wild Atlantic salmon and trophy sea-run brook trout push upstream with every tide.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              The river’s exceptional water clarity makes it a world-class destination for sight-fishing, where anglers can watch sea-bright fish rise from deep holding lies to engulf surface-waking Bombers or track traditional wet flies swung through classic spey runs—a timeless destination for the authentic spirit of northern fly fishing.
            </p>
          </div>

        </div>

        {/* Live ECCC Station 02ZD002 Hydrometric Gauge Card */}
        <div className="mb-16">
          <RiverGaugeCard />
        </div>

        {/* 3 Season Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold">
              Late June – Early July
            </span>
            <h3 className="text-2xl font-serif font-bold text-slate-900">June Run</h3>
            <p className="text-xs text-[#2D4A3E] uppercase font-bold tracking-wider">
              Fresh Ocean Arrivals
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              The earliest ocean-bright salmon pushing through lower canyon holding pools. Aggressive fish taking swung wet flies and streamers on high cold tides.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-3 ring-2 ring-[#D97746]/20">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold">
              July 05 – July 26
            </span>
            <h3 className="text-2xl font-serif font-bold text-slate-900">July Peak</h3>
            <p className="text-xs text-[#D97746] uppercase font-bold tracking-wider">
              Prime Dry Fly & Bombers
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Waking Bombers across glassy slicks. Visual surface takes in deep pools under long sub-Arctic summer light with 18+ hours of daylight.
            </p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold">
              July 27 – Late August
            </span>
            <h3 className="text-2xl font-serif font-bold text-slate-900">August</h3>
            <p className="text-xs text-[#3E6656] uppercase font-bold tracking-wider">
              Salmon & Heavy Sea Trout
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Technical sight casting to resident salmon paired with heavy, aggressive sea-run brook trout (up to 6 lbs) entering the river system.
            </p>
          </div>

        </div>

        {/* 1. INTERACTIVE POOL EXPLORER */}
        <div className="mb-20">
          <RiverPoolExplorer />
        </div>

        {/* 2. INTERACTIVE FLY BOX EXPLORER */}
        <div className="mb-20">
          <FlyBoxExplorer />
        </div>

        {/* Genuine River & Trophy Catch Photography Showcase */}
        <div className="mb-16">
          <PhotoGalleryShowcase
            filterCategory="The Fishery"
            title="The River in Action"
            subtitle="Aerial perspectives of Grey River canyon pools, white water chutes, and untouched wilderness corridors."
          />
        </div>

        {/* Recommended Tackle & Gear Specs (Rods, Reels, Lines & Rigging) */}
        <div className="bg-[#11191F] text-white p-8 sm:p-12 rounded-2xl shadow-xl space-y-8 border border-[#263B46]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#263B46] pb-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold">
                Expedition Rigging & Tackle Standard
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white">
                Recommended Rods, Reels & Line Systems
              </h2>
            </div>
            <span className="text-xs bg-[#2D4A3E] text-[#F5F2EB] px-3.5 py-1.5 rounded-full font-semibold font-mono flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Single Barbless Mandatory
            </span>
          </div>

          {/* 4-Card Technical Gear Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-[#F5F2EB]/80 leading-relaxed">
            
            {/* Card 1: Single Hand Dry Fly */}
            <div className="bg-[#18232A] rounded-xl border border-[#263B46] overflow-hidden flex flex-col justify-between shadow-sm">
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-[#11191F]">
                  <img 
                    src="/renplus.jpg" 
                    alt="NAM Ren Single Hand Fly Rod" 
                    className="w-full h-full object-cover object-center opacity-90 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18232A] via-transparent to-black/20" />
                  <span className="absolute top-3 right-3 text-[10px] font-mono bg-[#11191F]/90 text-slate-300 px-2 py-0.5 rounded border border-[#263B46] backdrop-blur-xs">
                    Primary Rig
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <h4 className="font-bold text-[#D97746] uppercase tracking-wider text-xs flex items-center gap-1.5 font-mono">
                    <Compass className="w-4 h-4" />
                    Single-Hand Dry Fly
                  </h4>
                  <p className="text-xs text-slate-300">
                    Engineered for wind-resistant Bombers and delicate, drag-free surface presentations.
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#F5F2EB]/90 pt-1">
                    <li>• <strong>Rods:</strong> 9'0" or 9'6" (7wt / 8wt)</li>
                    <li>• <strong>Action:</strong> Fast / Medium-Fast Recovery</li>
                    <li>• <strong>Leaders:</strong> 10–14ft (8lb – 12lb)</li>
                  </ul>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-[#263B46]">
                  <a 
                    href="https://namproducts.com/collections/all-ren-rods" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-[11px] text-[#D97746] hover:text-[#f3986a] font-mono transition"
                  >
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>NAM Ren Single Hand</span>
                    <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2: Two-Hand Spey */}
            <div className="bg-[#18232A] rounded-xl border border-[#263B46] overflow-hidden flex flex-col justify-between shadow-sm">
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-[#11191F]">
                  <img 
                    src="/rendh.jpg" 
                    alt="NAM Ren Two-Handed Spey Rod" 
                    className="w-full h-full object-cover object-center opacity-90 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18232A] via-transparent to-black/20" />
                  <span className="absolute top-3 right-3 text-[10px] font-mono bg-[#11191F]/90 text-slate-300 px-2 py-0.5 rounded border border-[#263B46] backdrop-blur-xs">
                    Canyon Pools
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <h4 className="font-bold text-[#D97746] uppercase tracking-wider text-xs flex items-center gap-1.5 font-mono">
                    <Compass className="w-4 h-4" />
                    Two-Hand Spey
                  </h4>
                  <p className="text-xs text-slate-300">
                    Ideal for swinging classic wet flies through deep tailouts with tight backcast clearance.
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#F5F2EB]/90 pt-1">
                    <li>• <strong>Rods:</strong> 12'4" – 13'8" (6wt / 7wt / 8wt)</li>
                    <li>• <strong>Design:</strong> 5-Piece Expedition Travel</li>
                    <li>• <strong>Heads:</strong> Scandi 390gr–520gr Floating</li>
                  </ul>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-[#263B46]">
                  <a 
                    href="https://namproducts.com/collections/two-handed-ren-5-pcs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-[11px] text-[#D97746] hover:text-[#f3986a] font-mono transition"
                  >
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>NAM Ren 5-Piece DH</span>
                    <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3: Einarsson Reels */}
            <div className="bg-[#18232A] rounded-xl border border-[#263B46] overflow-hidden flex flex-col justify-between shadow-sm">
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-[#11191F]">
                  <img 
                    src="/einarsson.jpg" 
                    alt="Einarsson Fly Reel Drag Architecture" 
                    className="w-full h-full object-cover object-center opacity-90 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18232A] via-transparent to-black/20" />
                  <span className="absolute top-3 right-3 text-[10px] font-mono bg-[#11191F]/90 text-slate-300 px-2 py-0.5 rounded border border-[#263B46] backdrop-blur-xs">
                    Zero Inertia
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <h4 className="font-bold text-[#D97746] uppercase tracking-wider text-xs flex items-center gap-1.5 font-mono">
                    <Compass className="w-4 h-4" />
                    Fly Reels & Drag
                  </h4>
                  <p className="text-xs text-slate-300">
                    Smooth start-up inertia and shock-absorbing brake systems to protect fine tippets.
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#F5F2EB]/90 pt-1">
                    <li>• <strong>Brake:</strong> Watertight Sealed Drag</li>
                    <li>• <strong>Arbor:</strong> Large Arbor Fast Retrieval</li>
                    <li>• <strong>Backing:</strong> 150–200m (20–30lb Dacron)</li>
                  </ul>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-[#263B46]">
                  <a 
                    href="https://namproducts.com/collections/einarsson" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-[11px] text-[#D97746] hover:text-[#f3986a] font-mono transition"
                  >
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>Einarsson Fly Reels</span>
                    <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>

            {/* Card 4: Hazumi Lines */}
            <div className="bg-[#18232A] rounded-xl border border-[#263B46] overflow-hidden flex flex-col justify-between shadow-sm">
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-[#11191F]">
                  <img 
                    src="/hazumi.jpg" 
                    alt="Hazumi Line Company Fly Lines" 
                    className="w-full h-full object-cover object-center opacity-90 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18232A] via-transparent to-black/20" />
                  <span className="absolute top-3 right-3 text-[10px] font-mono bg-[#11191F]/90 text-slate-300 px-2 py-0.5 rounded border border-[#263B46] backdrop-blur-xs">
                    Precision Tapers
                  </span>
                </div>

                <div className="p-5 space-y-3">
                  <h4 className="font-bold text-[#D97746] uppercase tracking-wider text-xs flex items-center gap-1.5 font-mono">
                    <Compass className="w-4 h-4" />
                    Line Architecture
                  </h4>
                  <p className="text-xs text-slate-300">
                    High-floating tapers designed for turnover in winds and effortless line mending.
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#F5F2EB]/90 pt-1">
                    <li>• <strong>Single Hand:</strong> Aggressive WF Floating</li>
                    <li>• <strong>Spey Heads:</strong> Scandi Floating & Density</li>
                    <li>• <strong>Core:</strong> Low-Stretch Coldwater Braided</li>
                  </ul>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-[#263B46]">
                  <a 
                    href="https://namproducts.com/pages/hazumi-line-company" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1.5 text-[11px] text-[#D97746] hover:text-[#f3986a] font-mono transition"
                  >
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>Hazumi Line Co.</span>
                    <ExternalLink className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Conservation Protocol & Booking Action */}
          <div className="bg-[#0B1014] p-6 rounded-xl border border-[#263B46] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                River Conservation & Catch & Release Ethics
              </span>
              <p className="text-xs text-[#F5F2EB]/70 max-w-2xl">
                All Atlantic salmon are kept in the water for gentle unhooking with wet hands. Rubber mesh nets and single barbless hooks ensure 100% healthy fish release across all Grey River pools.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#D97746] hover:bg-[#C26334] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded transition cursor-pointer whitespace-nowrap"
            >
              Reserve Rod Dates
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};