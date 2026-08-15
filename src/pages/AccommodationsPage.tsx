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
  Users, 
  Bed, 
  Bath, 
  ArrowRight,
  ShieldCheck,
  Compass
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
          <span className="text-xs uppercase tracking-widest text-[#D97746] font-bold">
            Wilderness Living
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-[#11191F]">
            Lodge Accommodations
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            More than 3,250 square feet of handcrafted pine and timber facilities designed for relaxation, home-cooked dining, and complete comfort after long days on the water.
          </p>
        </div>

        {/* 2 Main Lodges Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Main Lodge Card */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-md overflow-hidden flex flex-col justify-between">
            <div className="h-56 bg-[#1B2A32] relative overflow-hidden flex items-end">
              <LodgeImage 
                filename="9c19e13a-dc5e-4fb2-b418-46dd08758383.JPG"
                alt="Grey River Main Lodge and Helipad"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11191F] via-[#11191F]/40 to-transparent" />
              <div className="relative z-10 p-5 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold bg-[#11191F]/80 px-2.5 py-0.5 rounded backdrop-blur-sm inline-block">
                  Central Gathering Hub
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">The Main Lodge</h3>
                <span className="inline-block text-[11px] bg-[#D97746] text-white font-bold px-3 py-0.5 rounded-full">
                  1,929 Sq. Ft.
                </span>
              </div>
            </div>

            <div className="p-8 space-y-6 flex-grow">
              <p className="text-sm text-slate-600 leading-relaxed">
                The social core of the property featuring 5 private guest bedrooms, 5 washrooms, an open lounge with a wood-burning stove, commercial kitchen, and panoramic river views across the canyon.
              </p>

              {/* Floor Plan Quick Badges */}
              <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-100 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Bed className="w-4 h-4 text-[#D97746]" />
                  <span className="font-semibold">5 Private Bedrooms</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Bath className="w-4 h-4 text-[#D97746]" />
                  <span className="font-semibold">5 Dedicated Washrooms</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Flame className="w-4 h-4 text-[#D97746]" />
                  <span>Wood Stove Lounge</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Utensils className="w-4 h-4 text-[#D97746]" />
                  <span>Commercial Kitchen</span>
                </div>
              </div>

              <ul className="text-xs text-slate-700 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D4A3E]" />
                  <span>Wood stove & electric backup baseboard heating</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D4A3E]" />
                  <span>Commercial kitchen & full 3-course dinner service</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D4A3E]" />
                  <span>Expansive timber deck overlooking the river and landing pad</span>
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
                alt="Grey River Lodge Porch and River Vista"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11191F] via-[#11191F]/40 to-transparent" />
              <div className="relative z-10 p-5 space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold bg-[#11191F]/80 px-2.5 py-0.5 rounded backdrop-blur-sm inline-block">
                  Private Quarters & Syndicate
                </span>
                <h3 className="text-2xl font-serif font-bold text-white">The Secondary Lodge</h3>
                <span className="inline-block text-[11px] bg-[#2D4A3E] border border-white/30 text-white font-bold px-3 py-0.5 rounded-full">
                  930 Sq. Ft.
                </span>
              </div>
            </div>

            <div className="p-8 space-y-6 flex-grow">
              <p className="text-sm text-slate-600 leading-relaxed">
                Ideal for private fishing parties, corporate teams, or families wanting private quarters with dedicated amenities while enjoying full access to main lodge dining and social gatherings.
              </p>

              {/* Floor Plan Quick Badges */}
              <div className="grid grid-cols-2 gap-3 py-3 border-y border-slate-100 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <Bed className="w-4 h-4 text-[#2D4A3E]" />
                  <span className="font-semibold">3 Private Bedrooms</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Bath className="w-4 h-4 text-[#2D4A3E]" />
                  <span className="font-semibold">5 Dedicated Washrooms</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Flame className="w-4 h-4 text-[#2D4A3E]" />
                  <span>Private Wood Stove</span>
                </div>
                <div className="flex items-center gap-2 text-slate-700">
                  <Utensils className="w-4 h-4 text-[#2D4A3E]" />
                  <span>Private Kitchenette</span>
                </div>
              </div>

              <ul className="text-xs text-slate-700 space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D4A3E]" />
                  <span>3 Private Bedrooms with individual thermostatic controls</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D4A3E]" />
                  <span>Dedicated lounge with wood stove & card table</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2D4A3E]" />
                  <span>Private kitchenette with coffee station & beverage coolers</span>
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

        {/* Off-Grid Infrastructure (Prompt Requirement) */}
        <div className="bg-white p-8 sm:p-10 rounded-xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-slate-100 pb-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold">
                Mission-Grade Redundancy
              </span>
              <h3 className="text-2xl font-serif font-bold text-slate-900">
                Off-Grid Power & Utilities Architecture
              </h3>
            </div>
            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Zap className="w-3.5 h-3.5" /> 200-Amp Continuous
            </span>
          </div>

          <p className="text-sm text-slate-700 leading-relaxed">
            The property is fully equipped with continuous 200-amp power backed by a dual-generator plant (Honda EU3000 & Yanmar diesel) and a 2-panel solar array with high-capacity battery storage, ensuring uninterrupted LED lighting, charging capabilities for cameras and laptops, hot pressurized running water, and Starlink satellite communications in true roadless wilderness.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="bg-[#FAF8F4] p-4 rounded-lg border border-slate-200">
              <Zap className="w-5 h-5 text-[#D97746] mb-2" />
              <h4 className="text-xs font-bold uppercase text-slate-900">Dual Generator Plant</h4>
              <p className="text-[11px] text-slate-600 mt-1">Yanmar Diesel primary + Honda EU3000 quiet backup</p>
            </div>

            <div className="bg-[#FAF8F4] p-4 rounded-lg border border-slate-200">
              <Sun className="w-5 h-5 text-amber-500 mb-2" />
              <h4 className="text-xs font-bold uppercase text-slate-900">Solar Battery Storage</h4>
              <p className="text-[11px] text-slate-600 mt-1">2-panel solar array with deep cycle battery bank</p>
            </div>

            <div className="bg-[#FAF8F4] p-4 rounded-lg border border-slate-200">
              <Droplets className="w-5 h-5 text-cyan-600 mb-2" />
              <h4 className="text-xs font-bold uppercase text-slate-900">Hot Running Water</h4>
              <p className="text-[11px] text-slate-600 mt-1">Continuous pressurized hot water showers in all baths</p>
            </div>

            <div className="bg-[#FAF8F4] p-4 rounded-lg border border-slate-200">
              <Wifi className="w-5 h-5 text-[#2D4A3E] mb-2" />
              <h4 className="text-xs font-bold uppercase text-slate-900">Starlink Satellite</h4>
              <p className="text-[11px] text-slate-600 mt-1">High-speed wireless internet across lodge buildings</p>
            </div>
          </div>
        </div>

        {/* Dining & Gourmet Outfitting */}
        <div className="bg-[#11191F] text-white p-8 sm:p-12 rounded-xl shadow-xl space-y-8 border border-[#263B46]">
          <div className="max-w-3xl space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold">
              Wilderness Cuisine
            </span>
            <h3 className="text-3xl font-serif text-white">
              Gourmet Lodge Dining & Shore Lunches
            </h3>
            <p className="text-sm text-[#F5F2EB]/80 leading-relaxed">
              Every day starts with a hearty outfitter's hot breakfast, followed by fresh river shore lunches prepared over open fire, and concludes with multi-course dinners celebrating Atlantic seafood, prime cuts, and home-baked Newfoundland breads.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 text-xs text-[#F5F2EB]/80 border-t border-[#263B46]">
            <div className="space-y-1">
              <h4 className="font-bold text-[#D97746] uppercase">Hearty Morning Table</h4>
              <p>Fresh eggs, thick-cut bacon, blueberry pancakes, fresh fruit, and hot press coffee before the first morning tide.</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-[#D97746] uppercase">River Shore Lunches</h4>
              <p>Hot kettles, grilled sandwiches, and homemade soups served streamside at pool cabins and gravel bars.</p>
            </div>
            <div className="space-y-1">
              <h4 className="font-bold text-[#D97746] uppercase">Chef Dinners & Desserts</h4>
              <p>Pan-seared cod, prime roast beef, fresh local berries, wine pairings, and wood-stove fireside stories.</p>
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
