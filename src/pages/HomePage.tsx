import React from 'react';
import { PageId } from '../types';
import { LiveRiverTicker } from '../components/LiveRiverTicker';
import { PhotoGalleryShowcase } from '../components/PhotoGalleryShowcase';
import { GearBanner } from '../components/GearBanner';
import { SEASON_WINDOWS, TESTIMONIALS } from '../data/riverData';
import { 
  ArrowRight, 
  Compass, 
  Fish, 
  Waves, 
  Home, 
  Star, 
  CheckCircle2
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-0">
      
      {/* 1. HERO SECTION - Real Aerial Lodge Background */}
      <section className="relative bg-[#11191F] text-white min-h-[90vh] flex items-center justify-center text-center px-4 overflow-hidden">
        
        {/* Real Aerial Compound Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-75 scale-105 transform transition-transform duration-1000"
          style={{
            backgroundImage: `url('/rover-drone.JPG')`
          }}
        />
        
        {/* Deep Fjord Dark Gradient Overlays for High-Contrast Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#11191F] via-[#11191F]/70 to-[#11191F]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#11191F]/50 to-[#11191F]" />

        {/* Content Container */}
        <div className="max-w-4xl mx-auto space-y-6 z-10 py-24 relative">
          
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#D97746] font-semibold bg-[#11191F]/80 px-4 py-2 rounded-full border border-[#D97746]/30 backdrop-blur-sm animate-fadeIn">
            <Compass className="w-3.5 h-3.5 text-[#D97746]" />
            <span>The Most Remote Salmon Lodge in Newfoundland • Helicopter Access Only</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-medium leading-[1.1] text-white tracking-tight">
            Undiscovered Water.<br />
            <span className="italic font-normal text-[#F5F2EB]">Unmatched Salmon.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#F5F2EB]/85 max-w-2xl mx-auto font-light leading-relaxed">
            Accessible exclusively by helicopter. Experience Newfoundland's most remote Atlantic salmon pools, authentic timber lodge comfort, and true maritime solitude on the island's wildest river.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto bg-[#D97746] hover:bg-[#C26334] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded shadow-xl transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 group"
            >
              <span>Inquire for Season Dates</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button
              onClick={() => onNavigate('the-fishery')}
              className="w-full sm:w-auto border border-[#F5F2EB]/30 hover:border-[#F5F2EB] bg-[#1B2A32]/50 backdrop-blur hover:bg-[#1B2A32]/80 text-[#F5F2EB] text-xs sm:text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded transition cursor-pointer flex items-center justify-center gap-2"
            >
              <Waves className="w-4 h-4 text-[#D97746]" />
              <span>Explore The Fishery</span>
            </button>
          </div>

          {/* Metric Highlights Pill */}
          <div className="pt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto text-left border-t border-[#263B46]/60">
            <div>
              <span className="text-xs text-[#F5F2EB]/60 block font-mono">Access Type</span>
              <span className="text-sm font-bold text-white">Helicopter Only</span>
            </div>
            <div>
              <span className="text-xs text-[#F5F2EB]/60 block font-mono">Weekly Rods</span>
              <span className="text-sm font-bold text-[#D97746]">Strictly Capped (8)</span>
            </div>
            <div>
              <span className="text-xs text-[#F5F2EB]/60 block font-mono">Location</span>
              <span className="text-sm font-bold text-white">Most Remote in NL</span>
            </div>
            <div>
              <span className="text-xs text-[#F5F2EB]/60 block font-mono">Power & Comms</span>
              <span className="text-sm font-bold text-emerald-400">200A • Starlink</span>
            </div>
          </div>

        </div>

      </section>

      {/* 2. LIVE RIVER CONDITIONS TICKER */}
      <LiveRiverTicker />

      {/* 3. VALUE PILLARS */}
      <section className="py-24 bg-[#F5F2EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#D97746] font-bold">
              The Grey River Standard
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#11191F]">
              Why Anglers Return Every Season
            </h2>
            <p className="text-sm text-slate-600">
              Unrivaled Atlantic salmon habitat paired with seasoned guide expertise and true maritime wilderness comfort.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 space-y-4 hover:shadow-md transition">
              <div className="flex justify-between items-center">
                <span className="text-[#D97746] font-serif text-3xl font-bold">01</span>
                <div className="p-2.5 rounded-lg bg-[#FAF8F4] text-[#2D4A3E]">
                  <Waves className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Zero Road Pressure</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                Miles of crystalline river holding pools where ocean-bright salmon and sea-run brook trout arrive fresh with every tide, undisturbed by public traffic or outside pressure.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5 text-[#2D4A3E] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 18+ Named Holding Pools
                </li>
                <li className="flex items-center gap-1.5 text-[#2D4A3E] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Direct Jet Boat & Quad Transit
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 space-y-4 hover:shadow-md transition">
              <div className="flex justify-between items-center">
                <span className="text-[#D97746] font-serif text-3xl font-bold">02</span>
                <div className="p-2.5 rounded-lg bg-[#FAF8F4] text-[#D97746]">
                  <Fish className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Strictly Capped Rods</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                We strictly limit total guests per week to ensure undisturbed pools, personalized guide attention, relaxed pool rotations, and sustainable Atlantic salmon river conservation.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5 text-[#2D4A3E] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 2:1 or 1:1 Guiding Ratios
                </li>
                <li className="flex items-center gap-1.5 text-[#2D4A3E] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Private Lodge Buyout Available
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 space-y-4 hover:shadow-md transition">
              <div className="flex justify-between items-center">
                <span className="text-[#D97746] font-serif text-3xl font-bold">03</span>
                <div className="p-2.5 rounded-lg bg-[#FAF8F4] text-[#3E6656]">
                  <Home className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900">Authentic Comfort</h3>
              <p className="text-slate-700 text-sm leading-relaxed">
                3,250+ sq. ft. of pine and log accommodations, commercial kitchen dining, hot showers, and reliable 200-amp dual generator and solar-backed power completely off the grid.
              </p>
              <ul className="text-xs text-slate-600 space-y-1.5 pt-2 border-t border-slate-100">
                <li className="flex items-center gap-1.5 text-[#2D4A3E] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 8 Private Bedrooms & Ensuites
                </li>
                <li className="flex items-center gap-1.5 text-[#2D4A3E] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Starlink Satellite Wi-Fi
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* 3.5 AUTHENTIC PHOTOGRAPHY SHOWCASE */}
      <section className="py-20 bg-[#EDE8DE] border-y border-slate-300/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PhotoGalleryShowcase 
            title="The Real Grey River Experience" 
            subtitle="Authentic guest photography from our 3,250+ sq. ft. timber lodge, granite river pools, and sea-bright Atlantic salmon catches."
          />
        </div>
      </section>

      {/* 4. SEASON WINDOWS OVERVIEW */}
      <section className="py-20 bg-[#FAF8F4] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D97746] font-bold">
                Run Timing & Peaks
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#11191F]">
                2027 Season Windows
              </h2>
            </div>
            <button
              onClick={() => onNavigate('the-fishery')}
              className="text-xs font-bold uppercase tracking-wider text-[#2D4A3E] hover:text-[#D97746] flex items-center gap-1 transition cursor-pointer"
            >
              <span>Explore Fishery Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SEASON_WINDOWS.map((season, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col justify-between"
              >
                <div>
                  <div className="bg-[#11191F] text-white p-5 flex justify-between items-center">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#D97746] font-bold block">
                        {season.period}
                      </span>
                      <h4 className="text-lg font-serif">{season.title}</h4>
                    </div>
                    <span className="text-xs bg-[#2D4A3E] text-[#F5F2EB] px-2.5 py-1 rounded font-semibold">
                      {season.dates}
                    </span>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100">
                      <span className="text-slate-500">Water Temp:</span>
                      <span className="font-semibold text-slate-800">{season.waterTemp}</span>
                    </div>

                    <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-100">
                      <span className="text-slate-500">Dry Fly Activity:</span>
                      <div className="flex gap-1 text-[#D97746]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className={i < season.dryFlyActivity ? 'text-[#D97746]' : 'text-slate-200'}>
                            ★
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-xs font-semibold text-[#D97746] uppercase tracking-wider">
                      {season.tag}
                    </p>

                    <ul className="space-y-2 text-xs text-slate-600">
                      {season.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-[#3E6656] font-bold">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="w-full bg-[#FAF8F4] hover:bg-[#D97746] hover:text-white text-slate-800 text-xs font-bold uppercase tracking-wider py-3 rounded border border-slate-300 hover:border-[#D97746] transition text-center cursor-pointer"
                  >
                    Inquire for {season.period} Dates
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4.5 TACKLE ARSENAL & PARTNERSHIP BANNER */}
      <GearBanner onNavigate={onNavigate} />

      {/* 5. GUEST TESTIMONIALS */}
      <section className="py-24 bg-[#11191F] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#D97746] font-bold">
              Angler Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-white">
              Words from the Riverbook
            </h2>
            <p className="text-sm text-[#F5F2EB]/70">
              Generations of Atlantic salmon anglers have called Grey River their home water.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-[#1B2A32] p-8 rounded-xl border border-[#263B46] space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex text-[#D97746] gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-[#F5F2EB]/90 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#263B46] flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-white block">{t.author}</span>
                    <span className="text-[#F5F2EB]/60">{t.location}</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#D97746] bg-[#11191F] px-2 py-1 rounded">
                    {t.year}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. CTA BANNER */}
      <section className="bg-[#2D4A3E] text-white py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 space-y-6 relative z-10">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-[#D97746] font-bold bg-[#11191F]/40 px-3.5 py-1.5 rounded-full border border-[#D97746]/30">
            Newfoundland's Most Remote Salmon Lodge • Helicopter Access Only
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-white">
            Secure Your Week on the River
          </h2>
          <p className="text-[#F5F2EB]/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Prime dry-fly weeks in July and early August book out up to a year in advance. Reserve early to lock in your preferred dates and private lodge buyout.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={() => onNavigate('contact')}
              className="w-full sm:w-auto bg-[#D97746] hover:bg-[#C26334] text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded shadow-xl transition cursor-pointer"
            >
              Request Booking Availability
            </button>
            <button
              onClick={() => onNavigate('rates')}
              className="w-full sm:w-auto border border-[#F5F2EB]/40 hover:border-white text-white text-xs font-bold uppercase tracking-wider px-8 py-4 rounded transition cursor-pointer"
            >
              View Rates & Inclusions
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};