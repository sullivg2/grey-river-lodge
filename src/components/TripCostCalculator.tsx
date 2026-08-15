import React, { useState } from 'react';
import { ShieldCheck, Calculator, Check, ArrowRight, Sparkles, Users, Calendar, Award } from 'lucide-react';
import { PageId } from '../types';

interface TripCostCalculatorProps {
  onSelectBooking: (details: {
    partySize: string;
    seasonWindow: string;
    guidingRatio: '2:1' | '1:1';
    estimatedCost: number;
  }) => void;
  onNavigate: (page: PageId) => void;
}

export const TripCostCalculator: React.FC<TripCostCalculatorProps> = ({ onSelectBooking, onNavigate }) => {
  const [rods, setRods] = useState<number>(2);
  const [isBuyout, setIsBuyout] = useState<boolean>(false);
  const [season, setSeason] = useState<string>('july-peak');
  const [guidingRatio, setGuidingRatio] = useState<'2:1' | '1:1'>('2:1');
  const [includeHelicopter, setIncludeHelicopter] = useState<boolean>(true);

  // Pricing constants (2027 Season)
  // Base rates per rod for 6-day / 7-night full outfitting
  const baseRatePerRod = season === 'july-peak' ? 6850 : season === 'june-early' ? 6250 : 6450;
  const privateGuideUpgrade = guidingRatio === '1:1' ? 1400 : 0;
  const heliTransferEst = includeHelicopter ? 850 : 0;

  const activeRods = isBuyout ? 8 : rods;
  const rodRateTotal = isBuyout 
    ? 48000 // discounted exclusive private buyout rate for up to 8 rods
    : (baseRatePerRod + privateGuideUpgrade + heliTransferEst) * activeRods;

  const perPersonEstimate = isBuyout ? Math.round(rodRateTotal / 8) : (baseRatePerRod + privateGuideUpgrade + heliTransferEst);

  const handleProceedToBooking = () => {
    onSelectBooking({
      partySize: isBuyout ? 'buyout' : activeRods.toString(),
      seasonWindow: season,
      guidingRatio,
      estimatedCost: rodRateTotal
    });
    onNavigate('contact');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden">
      
      {/* Header */}
      <div className="bg-[#11191F] text-white p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Calculator className="w-4 h-4 text-[#D97746]" />
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold">
              2027 Season Outfitting Estimator
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-white">Custom Trip & Package Builder</h3>
        </div>
        <div className="text-left md:text-right">
          <span className="text-xs text-[#F5F2EB]/60 block">6-Day / 7-Night Outfitting</span>
          <span className="text-xs font-semibold text-emerald-400">Strictly Capped Rod Capacity</span>
        </div>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#FAF8F4]">
        
        {/* Left Side: Selectors */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Party Configuration */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3 flex justify-between items-center">
              <span>1. Party Size & Rod Allocation</span>
              <button
                type="button"
                onClick={() => setIsBuyout(!isBuyout)}
                className={`text-xs font-semibold px-2.5 py-0.5 rounded cursor-pointer transition ${
                  isBuyout
                    ? 'bg-[#D97746] text-white'
                    : 'bg-slate-200 text-slate-700 hover:bg-slate-300'
                }`}
              >
                {isBuyout ? '✓ Full Lodge Buyout Active' : 'Select Full Lodge Buyout'}
              </button>
            </label>

            {!isBuyout ? (
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setRods(num)}
                    className={`py-3 rounded-lg text-sm font-bold border transition cursor-pointer flex flex-col items-center ${
                      rods === num
                        ? 'bg-[#2D4A3E] text-white border-[#2D4A3E] shadow-sm'
                        : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400'
                    }`}
                  >
                    <span>{num}</span>
                    <span className="text-[10px] font-normal opacity-80">
                      {num === 1 ? 'Rod' : 'Rods'}
                    </span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="bg-[#2D4A3E]/10 border border-[#2D4A3E]/30 p-4 rounded-lg text-xs space-y-1">
                <p className="font-bold text-[#2D4A3E] flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  Exclusive Private Lodge Buyout (Up to 8 Anglers)
                </p>
                <p className="text-slate-600">
                  Full 3,250 sq. ft. compound (both Main & Secondary Lodges) reserved exclusively for your corporate party, family, or private syndicate with dedicated head guides & private chefs.
                </p>
              </div>
            )}
          </div>

          {/* Season Window */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              2. Target Season Window (2027)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              
              <div
                onClick={() => setSeason('june-early')}
                className={`p-3.5 rounded-lg border cursor-pointer transition ${
                  season === 'june-early'
                    ? 'bg-white border-[#D97746] ring-2 ring-[#D97746]/20 shadow-sm'
                    : 'bg-white border-slate-300 hover:border-slate-400'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-slate-900">Late June</span>
                  <span className="text-[10px] font-bold text-[#D97746]">$6,250</span>
                </div>
                <p className="text-[11px] text-slate-500">Fresh Run Arrival • Wet Flies</p>
              </div>

              <div
                onClick={() => setSeason('july-peak')}
                className={`p-3.5 rounded-lg border cursor-pointer transition ${
                  season === 'july-peak'
                    ? 'bg-white border-[#D97746] ring-2 ring-[#D97746]/20 shadow-sm'
                    : 'bg-white border-slate-300 hover:border-slate-400'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-slate-900">July Peak</span>
                  <span className="text-[10px] font-bold text-[#D97746]">$6,850</span>
                </div>
                <p className="text-[11px] text-slate-500">Prime Dry Fly & Bombers</p>
              </div>

              <div
                onClick={() => setSeason('aug-late')}
                className={`p-3.5 rounded-lg border cursor-pointer transition ${
                  season === 'aug-late'
                    ? 'bg-white border-[#D97746] ring-2 ring-[#D97746]/20 shadow-sm'
                    : 'bg-white border-slate-300 hover:border-slate-400'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-slate-900">August</span>
                  <span className="text-[10px] font-bold text-[#D97746]">$6,450</span>
                </div>
                <p className="text-[11px] text-slate-500">Salmon + Heavy Sea Trout</p>
              </div>

            </div>
          </div>

          {/* Guiding Ratio & Helicopter Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                3. Guiding Ratio
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 p-2.5 bg-white border border-slate-300 rounded cursor-pointer">
                  <input
                    type="radio"
                    name="guideRatio"
                    checked={guidingRatio === '2:1'}
                    onChange={() => setGuidingRatio('2:1')}
                    className="text-[#D97746] focus:ring-[#D97746]"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-slate-800">2:1 Guiding Ratio</span>
                    <span className="text-slate-500 block text-[10px]">(Standard Outfitting)</span>
                  </div>
                </label>

                <label className="flex items-center gap-2 p-2.5 bg-white border border-slate-300 rounded cursor-pointer">
                  <input
                    type="radio"
                    name="guideRatio"
                    checked={guidingRatio === '1:1'}
                    onChange={() => setGuidingRatio('1:1')}
                    className="text-[#D97746] focus:ring-[#D97746]"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-slate-800">1:1 Private Guide</span>
                    <span className="text-[#D97746] block text-[10px]">(+$1,400 per rod)</span>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                4. Helicopter Transfer
              </label>
              <div className="bg-white p-3 border border-slate-300 rounded space-y-2">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeHelicopter}
                    onChange={(e) => setIncludeHelicopter(e.target.checked)}
                    className="mt-0.5 text-[#D97746] focus:ring-[#D97746] rounded"
                  />
                  <div className="text-xs">
                    <span className="font-semibold text-slate-800">Include Fjord Helicopter Flight</span>
                    <span className="text-slate-500 block text-[10px]">
                      Round-trip staging base to lodge landing pad (~$850/person estimate)
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Estimated Summary Card */}
        <div className="lg:col-span-5 bg-[#11191F] text-white p-6 sm:p-8 rounded-xl flex flex-col justify-between space-y-6 shadow-xl border border-[#263B46]">
          
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D97746] font-bold">
              Transparent Cost Summary
            </span>
            <h4 className="text-xl font-serif text-white mt-1 mb-4">
              {isBuyout ? 'Exclusive Lodge Buyout' : `${activeRods} Angler Package`}
            </h4>

            <div className="space-y-3 text-xs border-b border-[#263B46] pb-4">
              <div className="flex justify-between text-[#F5F2EB]/80">
                <span>Base Outfitting ({isBuyout ? '8 Rod Buyout' : `${activeRods} Rods × 6 Days`}):</span>
                <span className="font-mono font-semibold">${(isBuyout ? 48000 : baseRatePerRod * activeRods).toLocaleString()} CAD</span>
              </div>
              {guidingRatio === '1:1' && !isBuyout && (
                <div className="flex justify-between text-[#F5F2EB]/80">
                  <span>1:1 Private Guide Upgrade:</span>
                  <span className="font-mono text-[#D97746]">+${(privateGuideUpgrade * activeRods).toLocaleString()} CAD</span>
                </div>
              )}
              {includeHelicopter && (
                <div className="flex justify-between text-[#F5F2EB]/80">
                  <span>Helicopter Fjord Transfer (Est.):</span>
                  <span className="font-mono text-[#D97746]">+${(heliTransferEst * activeRods).toLocaleString()} CAD</span>
                </div>
              )}
            </div>

            {/* Total Display */}
            <div className="pt-4 space-y-1">
              <div className="flex justify-between items-baseline">
                <span className="text-xs uppercase text-[#F5F2EB]/60">Total Estimated Package:</span>
                <span className="text-3xl font-serif font-bold text-[#D97746]">
                  ${rodRateTotal.toLocaleString()} <span className="text-xs font-sans text-[#F5F2EB]/70">CAD</span>
                </span>
              </div>
              <div className="flex justify-between text-[11px] text-[#F5F2EB]/50">
                <span>Per Angler Rate:</span>
                <span className="font-mono text-emerald-400 font-bold">${perPersonEstimate.toLocaleString()} CAD / rod</span>
              </div>
            </div>

            {/* Inclusions checklist */}
            <div className="mt-6 pt-4 border-t border-[#263B46] space-y-1.5 text-[11px] text-[#F5F2EB]/70">
              <p className="flex items-center gap-1.5 text-white font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                All gourmet meals, private lodge rooms & hot showers
              </p>
              <p className="flex items-center gap-1.5 text-white font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                Daily jet boat / quad pool transit & certified guide
              </p>
              <p className="flex items-center gap-1.5 text-white font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                200-amp off-grid power & high-speed Starlink Wi-Fi
              </p>
            </div>
          </div>

          <button
            onClick={handleProceedToBooking}
            className="w-full bg-[#D97746] hover:bg-[#C26334] text-white text-xs font-bold uppercase tracking-wider py-4 rounded-lg transition duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
          >
            <span>Proceed to Reservation Form</span>
            <ArrowRight className="w-4 h-4" />
          </button>

        </div>

      </div>

    </div>
  );
};
