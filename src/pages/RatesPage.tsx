import React from 'react';
import { PageId } from '../types';
import { TripCostCalculator } from '../components/TripCostCalculator';
import { 
  CheckCircle2, 
  XCircle, 
  Calendar, 
  ShieldCheck, 
  ArrowRight, 
  CreditCard,
  Award,
  HelpCircle
} from 'lucide-react';

interface RatesPageProps {
  onNavigate: (page: PageId) => void;
  onSelectBooking: (details: {
    partySize: string;
    seasonWindow: string;
    guidingRatio: '2:1' | '1:1';
    estimatedCost: number;
  }) => void;
}

export const RatesPage: React.FC<RatesPageProps> = ({ onNavigate, onSelectBooking }) => {
  return (
    <div className="py-16 sm:py-20 bg-[#F5F2EB] space-y-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#D97746] font-bold">
            Newfoundland's Most Remote Salmon Outfitter
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif text-[#11191F]">
            Rates & Trip Inclusions
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            All packages are structured for 6-day / 7-night wilderness outfitting with dedicated guiding, private lodge quarters, chef meal service, and helicopter coordination.
          </p>
        </div>

        {/* 1. Core Package Inclusions Card (Faithful to prompt) */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-md">
          
          <div className="p-6 sm:p-8 bg-[#11191F] text-white flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold block">
                All-Inclusive Wilderness Outfitting
              </span>
              <h3 className="text-2xl font-serif text-white">Full Outfitted Package</h3>
            </div>
            <span className="bg-[#D97746] text-white font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full shadow">
              6-Day / 7-Night Standard
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            
            {/* What's Included */}
            <div className="p-6 sm:p-8 space-y-4">
              <h4 className="font-bold text-sm uppercase tracking-wider text-[#2D4A3E] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                What's Included
              </h4>
              <ul className="text-xs text-slate-700 space-y-3">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Professional licensed guiding (1:1 or 2:1 ratio)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Private lodge accommodations & hot showers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>All chef-prepared meals, shore lunches, and snacks</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Daily river pool transit via boat and utility quads</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-600 font-bold">✓</span>
                  <span>Full use of solar & lodge 200A power infrastructure</span>
                </li>
              </ul>
            </div>

            {/* Not Included */}
            <div className="p-6 sm:p-8 space-y-4 bg-[#FAF8F4]/40">
              <h4 className="font-bold text-sm uppercase tracking-wider text-slate-500 flex items-center gap-2">
                <XCircle className="w-4 h-4 text-slate-400" />
                Not Included
              </h4>
              <ul className="text-xs text-slate-700 space-y-3">
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 font-bold">•</span>
                  <span>Commercial flights to Deer Lake (YDF) / St. John's (YYT)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 font-bold">•</span>
                  <span>Helicopter charter transfer fees (coordinated directly via lodge)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 font-bold">•</span>
                  <span>NL Provincial non-resident salmon licenses</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 font-bold">•</span>
                  <span>Personal fly fishing tackle and wading gear</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-slate-400 font-bold">•</span>
                  <span>Guide & lodge staff gratuities</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* 2. Interactive Package & Trip Cost Calculator */}
        <div className="space-y-4">
          <div className="text-center space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D97746] font-bold">
              Custom Rates Calculator
            </span>
            <h3 className="text-2xl font-serif text-slate-900">
              Estimate Your 2027 Expedition
            </h3>
          </div>

          <TripCostCalculator 
            onSelectBooking={onSelectBooking}
            onNavigate={onNavigate}
          />
        </div>

        {/* 3. Booking Terms & Payment Schedule */}
        <div className="bg-white p-8 rounded-xl border border-slate-200 space-y-6">
          <h3 className="text-xl font-serif font-bold text-slate-900 flex items-center gap-2">
            <CreditCard className="w-5 h-5 text-[#D97746]" />
            Reservation & Payment Terms
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-700">
            <div className="bg-[#FAF8F4] p-4 rounded-lg border border-slate-200 space-y-1.5">
              <span className="font-bold text-slate-900 block uppercase">1. Deposit to Lock Dates</span>
              <p>A 50% non-refundable deposit is required at time of booking to secure your week and rod spots on the river.</p>
            </div>

            <div className="bg-[#FAF8F4] p-4 rounded-lg border border-slate-200 space-y-1.5">
              <span className="font-bold text-slate-900 block uppercase">2. Final Balance</span>
              <p>The remaining 50% balance, plus any scheduled charter transfer fees, is due 60 days prior to trip arrival.</p>
            </div>

            <div className="bg-[#FAF8F4] p-4 rounded-lg border border-slate-200 space-y-1.5">
              <span className="font-bold text-slate-900 block uppercase">3. Travel Insurance</span>
              <p>Due to remote wilderness weather contingencies, we strongly recommend comprehensive trip cancellation and medical evacuation insurance.</p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="text-center pt-4">
          <button
            onClick={() => onNavigate('contact')}
            className="inline-block bg-[#D97746] hover:bg-[#C26334] text-white text-xs font-semibold uppercase tracking-wider px-8 py-4 rounded shadow-lg transition cursor-pointer"
          >
            Inquire for Custom Group Quotes
          </button>
        </div>

      </div>
    </div>
  );
};
