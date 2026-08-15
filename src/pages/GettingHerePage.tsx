import React from 'react';
import { PageId } from '../types';
import { PackingChecklist } from '../components/PackingChecklist';
import { 
  Plane, 
  Car, 
  Compass, 
  MapPin, 
  ShieldAlert, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2,
  Clock,
  Luggage
} from 'lucide-react';

interface GettingHerePageProps {
  onNavigate: (page: PageId) => void;
}

export const GettingHerePage: React.FC<GettingHerePageProps> = ({ onNavigate }) => {
  return (
    <div className="py-16 sm:py-20 bg-[#F5F2EB] space-y-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <div className="space-y-4">
          <span className="text-xs uppercase tracking-widest text-[#D97746] font-bold">
            Transit Logistics
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-[#11191F]">
            Journey to Grey River
          </h1>
          <p className="text-slate-700 text-sm sm:text-base leading-relaxed max-w-2xl">
            Grey River is located on the rugged, roadless southern coast of Newfoundland. The arrival is an unforgettable part of the expedition experience.
          </p>
        </div>

        {/* 3 Step Logistics Cards (Exact Prompt Requirement) */}
        <div className="space-y-6">
          
          {/* Step 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-3 relative overflow-hidden">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-[#D97746] uppercase tracking-wider font-mono">
                Step 01
              </span>
              <div className="p-2 rounded-lg bg-[#FAF8F4] text-[#2D4A3E]">
                <Plane className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">
              Fly to Newfoundland
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Book commercial airline travel into <strong>Deer Lake Regional Airport (YDF)</strong> or <strong>St. John’s International (YYT)</strong> via Air Canada, WestJet, or Porter Airlines. We recommend arriving the afternoon prior to your scheduled lodge date.
            </p>
            <div className="pt-2 text-xs text-slate-500 font-mono flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#D97746]" />
              Primary Staging Hub: Deer Lake (YDF), NL
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-3 relative overflow-hidden">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-[#D97746] uppercase tracking-wider font-mono">
                Step 02
              </span>
              <div className="p-2 rounded-lg bg-[#FAF8F4] text-[#2D4A3E]">
                <Car className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">
              Staging & Charter Transfer
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Our outfitter team coordinates ground transfer to our designated charter staging base on the south/west coast. Relax while we verify flight manifests and weigh bags.
            </p>
            <div className="pt-2 text-xs text-slate-500 font-mono flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#D97746]" />
              Ground Transit Window: Approx. 90 minutes
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-3 relative overflow-hidden">
            <div className="flex justify-between items-start">
              <span className="text-xs font-bold text-[#D97746] uppercase tracking-wider font-mono">
                Step 03
              </span>
              <div className="p-2 rounded-lg bg-[#FAF8F4] text-[#D97746]">
                <Compass className="w-5 h-5" />
              </div>
            </div>
            <h3 className="text-xl font-serif font-bold text-slate-900">
              Helicopter / Floatplane Inbound
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              A spectacular 35-minute scenic flight over the Long Range Mountains and deep fjord canyons lands directly onto the private Grey River Lodge landing pad right beside the river.
            </p>
            <div className="pt-2 text-xs text-slate-500 font-mono flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-emerald-600" />
              Arrival: Grey River Lodge Fjord Pad (47°35'N, 57°06'W)
            </div>
          </div>

        </div>

        {/* Luggage Notice (Prompt Requirement) */}
        <div className="bg-[#11191F] text-white p-6 sm:p-8 rounded-xl shadow-lg border border-[#263B46] space-y-3">
          <div className="flex items-center gap-2.5">
            <Luggage className="w-5 h-5 text-[#D97746]" />
            <h4 className="text-sm font-bold text-[#D97746] uppercase tracking-wider">
              Luggage & Weight Policy Notice
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-[#F5F2EB]/80 leading-relaxed">
            Due to strict aircraft payload requirements, all guest gear must be packed in <strong>soft-sided duffel bags</strong> (maximum 40–50 lbs per angler). Hard-sided rolling suitcases cannot fit into aircraft exterior cargo pods. Rod tubes may be up to 10 feet.
          </p>
        </div>

        {/* Interactive Packing Checklist */}
        <div className="space-y-4">
          <PackingChecklist />
        </div>

        {/* Bottom CTA */}
        <div className="bg-white p-8 rounded-xl border border-slate-200 text-center space-y-4 shadow-sm">
          <h3 className="text-xl font-serif font-bold text-slate-900">
            Have Custom Charter or Group Transit Questions?
          </h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Our outfitter concierge coordinates group private jet arrivals, airport shuttles, and special cargo logistics directly.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-block bg-[#D97746] hover:bg-[#C26334] text-white text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded shadow transition cursor-pointer"
          >
            Contact Expedition Logistics Team
          </button>
        </div>

      </div>
    </div>
  );
};
