import React from 'react';
import { PageId } from '../types';
import { LodgeImage } from '../components/LodgeImage';
import { PhotoGalleryShowcase } from '../components/PhotoGalleryShowcase';
import { 
  Home, 
  Zap, 
  Flame, 
  Utensils, 
  Wifi, 
  Sun, 
  Droplets, 
  CheckCircle2, 
  Bed, 
  Bath, 
  Compass,
  Warehouse,
  Anchor
} from 'lucide-react';

interface AccommodationsPageProps {
  onNavigate: (page: PageId) => void;
}

export const AccommodationsPage: React.FC<AccommodationsPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 sm:py-20 bg-[#F5F2EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D97746] font-bold bg-[#D97746]/10 px-3.5 py-1 rounded-full border border-[#D97746]/20">
            <Compass className="w-3.5 h-3.5" />
            <span>The Forks Lodge • Newfoundland's Most Remote Salmon Outpost</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-[#11191F] tracking-tight">
            Lodge Accommodations & Compound
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            Over 3,250 square feet of handcrafted pine, timber, and off-grid facilities positioned in true roadless wilderness. Engineered with mission-grade electrical redundancy, high-speed connectivity, and complete private comfort.
          </p>
        </div>

        {/* 2 Main Lodges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Main Lodge Card */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-md overflow-hidden flex flex-col justify-between">
            <div className="h-56 bg-[#1B2A32] relative overflow-hidden flex items-end">
              <LodgeImage 
                filename="9c19e13a-dc5e-4fb2-b418-46dd08758383.JPG"
                category="Lodge & Grounds"
                alt="Grey River Main Lodge and Helipad"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11191F] via-[#11191F]/40 to-transparent" />
              <div className="relative z-10 p-5 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold bg-[#11191F]/80 px-2.5 py-0.5 rounded backdrop-blur-sm inline-block">
                  Central Social Core
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">The Main Lodge</h3>
                <span className="inline-block text-[11px] bg-[#D97746] text-white font-bold px-3 py-0.5 rounded-full font-mono">
                  1,929 Sq. Ft.
                </span>
              </div>
            </div>

            <div className="p-8 space-y-6 flex-grow">
              <p className="text-sm text-slate-600 leading-relaxed">
                Robust wood and concrete foundation construction featuring pine paneling, hardwood and ceramic tile flooring, and panoramic vistas overlooking the river gorge and helipad.
              </p>

              {/* Floor Plan Quick Badges */}
              <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-100 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Bed className="w-4 h-4 text-[#D97746]" />
                  <span className="font-semibold">5 Guest Bedrooms</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Bath className="w-4 h-4 text-[#D97746]" />
                  <span className="font-semibold">5 Full Washrooms</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Flame className="w-4 h-4 text-[#D97746]" />
                  <span>Wood Stove & Baseboards</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Utensils className="w-4 h-4 text-[#D97746]" />
                  <span>Commercial Kitchen</span>
                </div>
              </div>

              <ul className="text-xs text-slate-700 space-y-2.5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                  <span>Log walls with custom pine ceilings and hardwood finishes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                  <span>Full dining service, commercial refrigeration, and chef station</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                  <span>Expansive timber deck directly connecting to the river landing</span>
                </li>
              </ul>
            </div>

            <div className="p-8 pt-0">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full bg-[#11191F] hover:bg-[#D97746] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded transition cursor-pointer"
              >
                Inquire for Main Lodge Weeks
              </button>
            </div>
          </div>

          {/* Secondary Lodge Card */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-md overflow-hidden flex flex-col justify-between">
            <div className="h-56 bg-[#2D4A3E] relative overflow-hidden flex items-end">
              <LodgeImage 
                filename="5e93c486-9c74-495a-9a28-c445f6057ecb.JPG"
                category="Lodge & Grounds"
                alt="Grey River Lodge Porch and River Vista"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11191F] via-[#11191F]/40 to-transparent" />
              <div className="relative z-10 p-5 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold bg-[#11191F]/80 px-2.5 py-0.5 rounded backdrop-blur-sm inline-block">
                  Private Syndicate Annex
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">The Secondary Lodge</h3>
                <span className="inline-block text-[11px] bg-[#2D4A3E] border border-white/30 text-white font-bold px-3 py-0.5 rounded-full font-mono">
                  930 Sq. Ft.
                </span>
              </div>
            </div>

            <div className="p-8 space-y-6 flex-grow">
              <p className="text-sm text-slate-600 leading-relaxed">
                A dedicated, single-story rustic timber annex tailored for private parties, guides, or corporate teams seeking quiet autonomy alongside full main lodge hospitality.
              </p>

              {/* Floor Plan Quick Badges */}
              <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-100 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Bed className="w-4 h-4 text-[#2D4A3E]" />
                  <span className="font-semibold">3 Private Bedrooms</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Bath className="w-4 h-4 text-[#2D4A3E]" />
                  <span className="font-semibold">5 Washroom Facilities</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Flame className="w-4 h-4 text-[#2D4A3E]" />
                  <span>Wood Stove Heating</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Utensils className="w-4 h-4 text-[#2D4A3E]" />
                  <span>Kitchen & Lounge</span>
                </div>
              </div>

              <ul className="text-xs text-slate-700 space-y-2.5">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                  <span>Painted timber floors and authentic wood-lath log ceilings</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                  <span>Dedicated lounge with wood stove and morning coffee station</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D4A3E] shrink-0" />
                  <span>Full electrical integration into the 200-Amp central grid</span>
                </li>
              </ul>
            </div>

            <div className="p-8 pt-0">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full bg-[#2D4A3E] hover:bg-[#3E6656] text-white text-xs font-bold uppercase tracking-wider py-3.5 rounded transition cursor-pointer"
              >
                Inquire for Private Buyout
              </button>
            </div>
          </div>

        </div>

        {/* 3 Dedicated Outbuildings & Compound Logistics */}
        <div className="bg-white p-8 sm:p-10 rounded-xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-100 pb-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold">
                Support Infrastructure
              </span>
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                Dedicated Outbuildings & Storage (393 Sq. Ft.)
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
              3 Free-Standing Facilities
            </span>
          </div>

          {/* 3 Physical Outbuilding Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Equipment & Fire Shed */}
            <div className="bg-[#FAF8F4] p-5 rounded-lg border border-slate-200 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-[#D97746]/10 border border-[#D97746]/20 flex items-center justify-center text-[#D97746]">
                    <Warehouse className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono font-bold bg-white px-2.5 py-1 rounded border border-slate-200 text-slate-700">
                    16' × 12' • 192 sq ft
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Main Equipment & Fire Shed</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    Houses property quad/ATV, high-pressure fire suppression pump system, central water pump, and comprehensive maintenance bench.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Dedicated Food Storage */}
            <div className="bg-[#FAF8F4] p-5 rounded-lg border border-slate-200 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-[#2D4A3E]/10 border border-[#2D4A3E]/20 flex items-center justify-center text-[#2D4A3E]">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono font-bold bg-white px-2.5 py-1 rounded border border-slate-200 text-slate-700">
                    12' × 10' • 120 sq ft
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Secondary Food Storage</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    Climate-controlled cold pantry equipped with multiple deep freezers and commercial refrigeration units for expedition provisions.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Generator & Solar Plant Shed */}
            <div className="bg-[#FAF8F4] p-5 rounded-lg border border-slate-200 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono font-bold bg-white px-2.5 py-1 rounded border border-slate-200 text-slate-700">
                    9' × 9' • 81 sq ft
                  </span>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Power & Generator Shed</h4>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    Houses the off-grid Yanmar diesel, Honda, and Champion generators alongside battery charge controllers and solar bank management.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* River Fleet & Helipad Logistics Bar */}
          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-cyan-100 text-cyan-800 flex items-center justify-center shrink-0">
                <Anchor className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900">On-Site River Fleet & Direct Helipad: </span>
                <span className="text-slate-600">14' Smoker Craft & 12' aluminum utility craft for canyon pool access, paired with on-compound helicopter landing pad.</span>
              </div>
            </div>
            <span className="shrink-0 font-mono text-[10px] font-bold bg-white border border-slate-200 px-2.5 py-1 rounded text-slate-600 uppercase tracking-wider">
              Turnkey Outfitted
            </span>
          </div>
        </div>

        {/* Off-Grid Utilities Architecture */}
        <div className="bg-[#11191F] text-white p-8 sm:p-10 rounded-xl shadow-xl space-y-6 border border-[#263B46]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-[#263B46] pb-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold">
                Mission-Grade Redundancy
              </span>
              <h3 className="text-2xl font-serif font-bold text-white">
                Off-Grid Power & Utilities Architecture
              </h3>
            </div>
            <span className="bg-[#2D4A3E] text-white text-xs font-mono font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-400" /> 200-Amp Continuous
            </span>
          </div>

          <p className="text-sm text-[#F5F2EB]/80 leading-relaxed">
            The Forks complex operates on an engineered 200-amp single-phase power system supported by a triple-generator plant (Yanmar Diesel, Honda EU3000, and Champion 4000) and dual solar arrays with high-capacity battery storage.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-2">
            <div className="bg-[#18232A] p-4 rounded-lg border border-[#263B46]">
              <Zap className="w-5 h-5 text-[#D97746] mb-2" />
              <h4 className="text-xs font-bold uppercase text-white">Triple Generator Bank</h4>
              <p className="text-[11px] text-[#F5F2EB]/70 mt-1">Yanmar Diesel, Honda EU3000 & Champion 4000</p>
            </div>

            <div className="bg-[#18232A] p-4 rounded-lg border border-[#263B46]">
              <Sun className="w-5 h-5 text-amber-400 mb-2" />
              <h4 className="text-xs font-bold uppercase text-white">Dual Solar Bank</h4>
              <p className="text-[11px] text-[#F5F2EB]/70 mt-1">2-panel solar collection with deep-cycle storage</p>
            </div>

            <div className="bg-[#18232A] p-4 rounded-lg border border-[#263B46]">
              <Droplets className="w-5 h-5 text-cyan-400 mb-2" />
              <h4 className="text-xs font-bold uppercase text-white">Hot Running Water</h4>
              <p className="text-[11px] text-[#F5F2EB]/70 mt-1">Commercial pressure pump with continuous hot water</p>
            </div>

            <div className="bg-[#18232A] p-4 rounded-lg border border-[#263B46]">
              <Wifi className="w-5 h-5 text-emerald-400 mb-2" />
              <h4 className="text-xs font-bold uppercase text-white">High-Speed Comms</h4>
              <p className="text-[11px] text-[#F5F2EB]/70 mt-1">Starlink satellite Wi-Fi across the compound</p>
            </div>
          </div>
        </div>

        {/* Dining & Gourmet Outfitting */}
        <div className="bg-white p-8 sm:p-12 rounded-xl border border-slate-200 shadow-sm space-y-8">
          <div className="max-w-3xl space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold">
              Wilderness Cuisine
            </span>
            <h3 className="text-3xl font-serif text-slate-900">
              Lodge Dining & Streamside Lunches
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every day begins with a hearty hot breakfast, followed by fresh river shore lunches prepared over open fire, and concludes with multi-course dinners celebrating fresh Atlantic seafood, prime cuts, and home-baked Newfoundland fare.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-xs text-slate-700 border-t border-slate-100">
            <div className="space-y-1">
              <h4 className="font-bold text-[#D97746] uppercase">Morning Outfitter Table</h4>
              <p>Eggs, bacon, blueberry pancakes, fresh fruit, and hot press coffee before the first morning run.</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-[#D97746] uppercase">River Shore Lunches</h4>
              <p>Hot kettles, grilled sandwiches, and homemade soups served streamside at pool cabins and gravel bars.</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-[#D97746] uppercase">Chef Dinners & Desserts</h4>
              <p>Pan-seared cod, prime roasts, wild berries, wine pairings, and wood-stove fireside stories.</p>
            </div>
          </div>
        </div>

        {/* Real Lodge Compound Photo Gallery */}
        <div className="pt-4">
          <PhotoGalleryShowcase
            filterCategory="Lodge & Grounds"
            title="Lodge Architecture & Compound Views"
            subtitle="Explore our green-roofed timber lodges, private heli-pad, cedar verandas, and boardwalk network."
          />
        </div>

        {/* Bottom Booking CTA */}
        <div className="bg-white p-8 sm:p-10 rounded-xl border border-slate-200 text-center space-y-4 shadow-sm">
          <h3 className="text-2xl font-serif text-slate-900">Experience Genuine Off-Grid Solitude</h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
            Our 8-rod weekly cap guarantees personal space, private bedroom quarters, and dedicated outfitter hospitality throughout your stay.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-block bg-[#D97746] hover:bg-[#C26334] text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded shadow transition cursor-pointer"
          >
            Inquire for Available Lodge Weeks
          </button>
        </div>

      </div>
    </div>
  );
};