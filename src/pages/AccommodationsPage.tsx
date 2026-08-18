import React from 'react';
import { PageId } from '../types';
import { PhotoGalleryShowcase } from '../components/PhotoGalleryShowcase';
import { 
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
  Anchor,
  Eye
} from 'lucide-react';

interface AccommodationsPageProps {
  onNavigate: (page: PageId) => void;
}

export const AccommodationsPage: React.FC<AccommodationsPageProps> = ({ onNavigate }) => {
  const AERIAL_IMG = '/lodgeaerial.jpg';

  return (
    <div className="py-8 sm:py-12 bg-[#F5F2EB]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8 sm:space-y-10">
        
        {/* Header */}
        <div className="space-y-2.5">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-[#D97746] font-bold bg-[#D97746]/10 px-3 py-0.5 rounded-full border border-[#D97746]/20">
            <Compass className="w-3.5 h-3.5" />
            <span>The Forks Lodge • Newfoundland's Most Remote Salmon Outpost</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-serif text-[#11191F] tracking-tight">
            Lodge Accommodations & Compound
          </h1>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-3xl">
            Over 3,250 square feet of handcrafted pine, timber, and off-grid facilities positioned in true roadless wilderness. Engineered with mission-grade electrical redundancy, high-speed connectivity, and complete private comfort.
          </p>
        </div>

        {/* Real Compound Aerial Hero Overview */}
        <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-300 group">
          <div className="h-60 sm:h-72 md:h-84 w-full bg-[#11191F] relative">
            <img 
              src={AERIAL_IMG}
              alt="Grey River Lodge Full Compound Aerial View"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#11191F]/90 via-[#11191F]/25 to-transparent" />
          </div>
          
          {/* Floating Aerial Details */}
          <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 text-white">
            <div className="space-y-1 max-w-xl">
              <div className="flex items-center gap-1.5 text-[10px] font-mono font-bold tracking-wider uppercase text-[#D97746] bg-[#11191F]/80 px-2 py-0.5 rounded backdrop-blur-sm inline-block">
                <Eye className="w-3 h-3 inline mr-1" />
                Aerial Layout • Forks Compound
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                Self-Contained Wilderness Infrastructure
              </h3>
              <p className="text-xs text-slate-200 line-clamp-2">
                Main Lodge (Green Roof), Secondary Annex (Tan Roof), interconnected boardwalks, and private helicopter landing platform.
              </p>
            </div>
            <div className="shrink-0 flex items-center gap-2 font-mono text-[11px] bg-white/10 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Direct Riverfront Footprint</span>
            </div>
          </div>
        </div>

        {/* 2 Main Lodges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          
          {/* Main Lodge Card - Focused on the Green Roof Main Lodge on the right */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between group">
            <div className="h-52 bg-[#1B2A32] relative overflow-hidden flex items-end">
              <img 
                src={AERIAL_IMG}
                alt="Grey River Main Lodge (Green Roof)"
                className="absolute inset-0 w-full h-full object-cover object-[85%_55%] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11191F] via-[#11191F]/40 to-transparent" />
              <div className="relative z-10 p-4 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold bg-[#11191F]/80 px-2.5 py-0.5 rounded backdrop-blur-sm inline-block">
                  Central Social Core • Green Roof
                </span>
                <h3 className="text-xl font-serif font-bold text-white">The Main Lodge</h3>
                <span className="inline-block text-[10px] bg-[#D97746] text-white font-bold px-2.5 py-0.5 rounded-full font-mono">
                  1,929 Sq. Ft.
                </span>
              </div>
            </div>

            <div className="p-6 space-y-5 flex-grow">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Robust wood construction featuring pine paneling, hardwood and ceramic tile flooring, and an expansive timber sun deck directly connecting to the river landing.
              </p>

              {/* Floor Plan Quick Badges */}
              <div className="grid grid-cols-2 gap-2.5 py-2.5 border-y border-slate-100 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Bed className="w-3.5 h-3.5 text-[#D97746]" />
                  <span className="font-semibold">5 Guest Bedrooms</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Bath className="w-3.5 h-3.5 text-[#D97746]" />
                  <span className="font-semibold">5 Full Washrooms</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Flame className="w-3.5 h-3.5 text-[#D97746]" />
                  <span>Wood Stove & Heat</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Utensils className="w-3.5 h-3.5 text-[#D97746]" />
                  <span>Commercial Kitchen</span>
                </div>
              </div>

              <ul className="text-xs text-slate-700 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4A3E] shrink-0" />
                  <span>Log walls with custom pine ceilings and hardwood finishes</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4A3E] shrink-0" />
                  <span>Full dining service, commercial refrigeration, and chef station</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4A3E] shrink-0" />
                  <span>Expansive timber deck directly connecting to boardwalks</span>
                </li>
              </ul>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full bg-[#11191F] hover:bg-[#D97746] text-white text-xs font-bold uppercase tracking-wider py-3 rounded transition cursor-pointer"
              >
                Inquire for Main Lodge Weeks
              </button>
            </div>
          </div>

          {/* Secondary Lodge Card - Focused on the Tan Roof Annex in the center */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between group">
            <div className="h-52 bg-[#2D4A3E] relative overflow-hidden flex items-end">
              <img 
                src={AERIAL_IMG}
                alt="Grey River Secondary Lodge and Annex (Tan Roof)"
                className="absolute inset-0 w-full h-full object-cover object-[42%_52%] transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11191F] via-[#11191F]/40 to-transparent" />
              <div className="relative z-10 p-4 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold bg-[#11191F]/80 px-2.5 py-0.5 rounded backdrop-blur-sm inline-block">
                  Private Syndicate Annex • Tan Roof
                </span>
                <h3 className="text-xl font-serif font-bold text-white">The Secondary Lodge</h3>
                <span className="inline-block text-[10px] bg-[#2D4A3E] border border-white/30 text-white font-bold px-2.5 py-0.5 rounded-full font-mono">
                  930 Sq. Ft.
                </span>
              </div>
            </div>

            <div className="p-6 space-y-5 flex-grow">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A dedicated, single-story rustic timber annex tailored for private parties, guides, or corporate teams seeking quiet autonomy alongside full main lodge hospitality.
              </p>

              {/* Floor Plan Quick Badges */}
              <div className="grid grid-cols-2 gap-2.5 py-2.5 border-y border-slate-100 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Bed className="w-3.5 h-3.5 text-[#2D4A3E]" />
                  <span className="font-semibold">3 Private Bedrooms</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Bath className="w-3.5 h-3.5 text-[#2D4A3E]" />
                  <span className="font-semibold">5 Washroom Facilities</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Flame className="w-3.5 h-3.5 text-[#2D4A3E]" />
                  <span>Wood Stove Heating</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Utensils className="w-3.5 h-3.5 text-[#2D4A3E]" />
                  <span>Kitchen & Lounge</span>
                </div>
              </div>

              <ul className="text-xs text-slate-700 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4A3E] shrink-0" />
                  <span>Painted timber floors and authentic wood-lath log ceilings</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4A3E] shrink-0" />
                  <span>Dedicated lounge with wood stove and morning coffee station</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2D4A3E] shrink-0" />
                  <span>Full electrical integration into the 200-Amp central grid</span>
                </li>
              </ul>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full bg-[#2D4A3E] hover:bg-[#3E6656] text-white text-xs font-bold uppercase tracking-wider py-3 rounded transition cursor-pointer"
              >
                Inquire for Private Buyout
              </button>
            </div>
          </div>

        </div>

        {/* Support Infrastructure */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-100 pb-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold">
                Support Infrastructure
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-slate-900">
                Dedicated Outbuildings & Storage (393 Sq. Ft.)
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
              3 Free-Standing Facilities
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-[#FAF8F4] p-4 rounded-lg border border-slate-200 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-lg bg-[#D97746]/10 border border-[#D97746]/20 flex items-center justify-center text-[#D97746]">
                  <Warehouse className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-700">
                  16' × 12' • 192 sq ft
                </span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Main Equipment & Fire Shed</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed mt-1">
                  Houses property ATV, high-pressure fire suppression pump system, and water pump.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF8F4] p-4 rounded-lg border border-slate-200 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-lg bg-[#2D4A3E]/10 border border-[#2D4A3E]/20 flex items-center justify-center text-[#2D4A3E]">
                  <Utensils className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-700">
                  12' × 10' • 120 sq ft
                </span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Secondary Food Storage</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed mt-1">
                  Climate-controlled cold pantry equipped with deep freezers and refrigeration.
                </p>
              </div>
            </div>

            <div className="bg-[#FAF8F4] p-4 rounded-lg border border-slate-200 flex flex-col justify-between space-y-3">
              <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono font-bold bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-700">
                  9' × 9' • 81 sq ft
                </span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Power & Generator Shed</h4>
                <p className="text-[11px] text-slate-600 leading-relaxed mt-1">
                  Houses Yanmar diesel, Honda, and Champion generators with battery controllers.
                </p>
              </div>
            </div>
          </div>

          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-700">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded bg-cyan-100 text-cyan-800 flex items-center justify-center shrink-0">
                <Anchor className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="font-bold text-slate-900">On-Site River Fleet & Direct Helipad: </span>
                <span className="text-slate-600">14' Smoker Craft & 12' utility craft paired with on-compound helicopter pad.</span>
              </div>
            </div>
            <span className="shrink-0 font-mono text-[10px] font-bold bg-white border border-slate-200 px-2.5 py-1 rounded text-slate-600 uppercase tracking-wider">
              Turnkey Outfitted
            </span>
          </div>
        </div>

        {/* Off-Grid Utilities */}
        <div className="bg-[#11191F] text-white p-6 sm:p-8 rounded-xl shadow-lg space-y-5 border border-[#263B46]">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-[#263B46] pb-3">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold">
                Mission-Grade Redundancy
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Off-Grid Power & Utilities Architecture
              </h3>
            </div>
            <span className="bg-[#2D4A3E] text-white text-xs font-mono font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-amber-400" /> 200-Amp Continuous
            </span>
          </div>

          <p className="text-xs sm:text-sm text-[#F5F2EB]/80 leading-relaxed">
            The Forks complex operates on an engineered 200-amp single-phase power system supported by a triple-generator plant (Yanmar Diesel, Honda EU3000, and Champion 4000) and dual solar arrays with high-capacity battery storage.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 pt-1">
            <div className="bg-[#18232A] p-3.5 rounded-lg border border-[#263B46]">
              <Zap className="w-4 h-4 text-[#D97746] mb-1.5" />
              <h4 className="text-xs font-bold uppercase text-white">Triple Generator Bank</h4>
              <p className="text-[11px] text-[#F5F2EB]/70 mt-0.5">Yanmar Diesel, Honda & Champion</p>
            </div>

            <div className="bg-[#18232A] p-3.5 rounded-lg border border-[#263B46]">
              <Sun className="w-4 h-4 text-amber-400 mb-1.5" />
              <h4 className="text-xs font-bold uppercase text-white">Dual Solar Bank</h4>
              <p className="text-[11px] text-[#F5F2EB]/70 mt-0.5">2-panel collection & battery bank</p>
            </div>

            <div className="bg-[#18232A] p-3.5 rounded-lg border border-[#263B46]">
              <Droplets className="w-4 h-4 text-cyan-400 mb-1.5" />
              <h4 className="text-xs font-bold uppercase text-white">Hot Running Water</h4>
              <p className="text-[11px] text-[#F5F2EB]/70 mt-0.5">Continuous on-demand hot water</p>
            </div>

            <div className="bg-[#18232A] p-3.5 rounded-lg border border-[#263B46]">
              <Wifi className="w-4 h-4 text-emerald-400 mb-1.5" />
              <h4 className="text-xs font-bold uppercase text-white">High-Speed Comms</h4>
              <p className="text-[11px] text-[#F5F2EB]/70 mt-0.5">Starlink satellite Wi-Fi across lodge</p>
            </div>
          </div>
        </div>

        {/* Dining */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
          <div className="max-w-3xl space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold">
              Wilderness Cuisine
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-slate-900">
              Lodge Dining & Streamside Lunches
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Every day begins with a hearty hot breakfast, followed by fresh river shore lunches prepared over open fire, and concludes with multi-course dinners celebrating fresh Atlantic seafood, prime cuts, and home-baked Newfoundland fare.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3 text-xs text-slate-700 border-t border-slate-100">
            <div className="space-y-1">
              <h4 className="font-bold text-[#D97746] uppercase">Morning Outfitter Table</h4>
              <p>Eggs, bacon, blueberry pancakes, fresh fruit, and hot press coffee.</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-[#D97746] uppercase">River Shore Lunches</h4>
              <p>Hot kettles, grilled sandwiches, and homemade soups served streamside.</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-[#D97746] uppercase">Chef Dinners & Desserts</h4>
              <p>Pan-seared cod, prime roasts, wild berries, and wood-stove fireside stories.</p>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="pt-2">
          <PhotoGalleryShowcase
            filterCategory="Lodge & Grounds"
            title="Lodge Architecture & Compound Views"
            subtitle="Explore our green-roofed timber lodges, private heli-pad, cedar verandas, and boardwalk network."
          />
        </div>

        {/* Booking CTA */}
        <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 text-center space-y-3 shadow-sm">
          <h3 className="text-xl sm:text-2xl font-serif text-slate-900">Experience Genuine Off-Grid Solitude</h3>
          <p className="text-xs text-slate-600 max-w-lg mx-auto">
            Our 8-rod weekly cap guarantees personal space, private bedroom quarters, and dedicated outfitter hospitality throughout your stay.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-block bg-[#D97746] hover:bg-[#C26334] text-white text-xs font-bold uppercase tracking-wider px-6 py-3 rounded shadow transition cursor-pointer"
          >
            Inquire for Available Lodge Weeks
          </button>
        </div>

      </div>
    </div>
  );
};