import React from 'react';
import { PageId } from '../types';
import { RiverPoolExplorer } from '../components/RiverPoolExplorer';
import { FlyBoxExplorer } from '../components/FlyBoxExplorer';
import { RiverGaugeCard } from '../components/RiverGaugeCard';
import { PhotoGalleryShowcase } from '../components/PhotoGalleryShowcase';
import { 
  Waves, 
  Fish, 
  ShieldCheck, 
  Sparkles, 
  Eye, 
  Compass, 
  ArrowRight, 
  Droplets, 
  Calendar 
} from 'lucide-react';

interface TheFisheryPageProps {
  onNavigate: (page: PageId) => void;
}

export const TheFisheryPage: React.FC<TheFisheryPageProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 sm:py-20 bg-[#F5F2EB] space-y-20">
      
      {/* Top Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D97746] font-bold bg-[#D97746]/10 px-3 py-1 rounded-full border border-[#D97746]/20">
            <Compass className="w-3.5 h-3.5" />
            <span>Newfoundland's Most Remote Salmon River • Helicopter Access Only</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif text-[#11191F]">
            The Grey River Fishery
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
            Carving its way through dramatic coastal fjords on Newfoundland's roadless south coast, the Grey River system offers cold, crystal-clear water with world-class sight fishing for hard-fighting wild Atlantic salmon and trophy sea-run brook trout.
          </p>
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

        {/* Recommended Tackle & Gear Specs (from prompt) */}
        <div className="bg-[#11191F] text-white p-8 sm:p-12 rounded-xl shadow-xl space-y-8 border border-[#263B46]">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-[#263B46] pb-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold">
                Expedition Standard
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-white">
                Recommended Tackle & Fly Selection
              </h2>
            </div>
            <span className="text-xs bg-[#2D4A3E] text-[#F5F2EB] px-3 py-1 rounded-full font-semibold">
              Single Barbless Only
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm text-[#F5F2EB]/80 leading-relaxed">
            <div className="space-y-3 bg-[#1B2A32] p-6 rounded-lg border border-[#263B46]">
              <h4 className="font-bold text-[#D97746] uppercase tracking-wider text-xs flex items-center gap-1.5">
                <Compass className="w-4 h-4" />
                Rods & Lines
              </h4>
              <ul className="space-y-2 text-xs text-[#F5F2EB]/90">
                <li>• <strong>9'0" 7wt or 8wt Single Hand Rods</strong> (Prime dry fly setup)</li>
                <li>• <strong>11'6" – 12'6" 6/7wt Switch Rods</strong> (For canyon pool swinging)</li>
                <li>• <strong>Weight-Forward Floating Lines</strong> (WF7F / WF8F)</li>
                <li>• <strong>9–12ft Tapered Leaders</strong> (8lb – 12lb test monofilament & fluorocarbon)</li>
              </ul>
            </div>

            <div className="space-y-3 bg-[#1B2A32] p-6 rounded-lg border border-[#263B46]">
              <h4 className="font-bold text-[#D97746] uppercase tracking-wider text-xs flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                Proven Fly Patterns
              </h4>
              <ul className="space-y-2 text-xs text-[#F5F2EB]/90">
                <li>• <strong>Dry:</strong> Green, White, and Brown Bombers (Sizes 2–8)</li>
                <li>• <strong>Wet:</strong> Blue Charm, Undertaker, Green Butt Cascade, Silver Doctor</li>
                <li>• <strong>Trout:</strong> Muddler Minnows, Woolly Buggers, Carter Bugs</li>
                <li>• <strong>Barbless Requirement:</strong> Single barbless hooks mandatory by NL law</li>
              </ul>
            </div>
          </div>

          {/* Conservation Protocol */}
          <div className="bg-[#0B1014] p-6 rounded-lg border border-[#263B46] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" />
                River Conservation & Catch & Release Ethics
              </span>
              <p className="text-xs text-[#F5F2EB]/70 max-w-2xl">
                All Atlantic salmon are kept in the water for gentle unhooking with wet hands. Rubber mesh nets and single barbless hooks ensure 100% healthy fish release.
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
