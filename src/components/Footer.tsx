import React from 'react';
import { PageId } from '../types';
import { Compass, Mail, MapPin, ShieldCheck, Waves, Fish, PhoneCall } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#11191F] text-[#F5F2EB] border-t border-[#1B2A32]">
      {/* Top Value Banner */}
      <div className="border-b border-[#263B46]/60 py-8 bg-[#0B1014]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#263B46]/40 text-[#D97746]">
              <Fish className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-white uppercase tracking-wider text-[11px]">Strict Catch & Release</p>
              <p className="text-[#F5F2EB]/60">Preserving wild Atlantic salmon stocks for future generations.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#263B46]/40 text-[#3E6656]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-white uppercase tracking-wider text-[11px]">Licensed NL Outfitter</p>
              <p className="text-[#F5F2EB]/60">Certified wilderness guides with 30+ years local river knowledge.</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#263B46]/40 text-[#D97746]">
              <Waves className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-white uppercase tracking-wider text-[11px]">Helicopter Access Only</p>
              <p className="text-[#F5F2EB]/60">Scenic helicopter transfer directly onto private lodge landing pad.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <Compass className="w-6 h-6 text-[#D97746]" />
              <span className="font-serif text-2xl font-bold tracking-wider text-white">
                GREY RIVER LODGE
              </span>
            </div>
            <p className="text-xs font-mono uppercase tracking-widest text-[#D97746] font-semibold">
              The Most Remote Salmon Lodge in Newfoundland
            </p>
            <p className="text-sm text-[#F5F2EB]/70 max-w-md leading-relaxed">
              Wild Atlantic salmon and sea-run trout outfitting on the roadless, uninhabited south coast of Newfoundland. Accessible exclusively by helicopter.
            </p>
            <div className="pt-2 text-xs space-y-1.5 text-[#F5F2EB]/50">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#D97746]" />
                <span>Coordinates: 47°35'N, 57°06'W • South Coast NL</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#D97746]" />
                <a href="mailto:info@greyriverlodge.com" className="hover:text-white transition">
                  info@greyriverlodge.com
                </a>
              </p>
            </div>
          </div>

          {/* Nav 1 */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D97746] font-semibold mb-4">
              The Fishery
            </h4>
            <ul className="space-y-2 text-sm text-[#F5F2EB]/70">
              <li>
                <button onClick={() => onNavigate('the-fishery')} className="hover:text-white transition text-left cursor-pointer">
                  The River & Pools
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('the-fishery')} className="hover:text-white transition text-left cursor-pointer">
                  June Fresh Run
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('the-fishery')} className="hover:text-white transition text-left cursor-pointer">
                  July Dry Fly Peak
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('the-fishery')} className="hover:text-white transition text-left cursor-pointer">
                  August Sea Trout
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('the-fishery')} className="hover:text-white transition text-left cursor-pointer">
                  Tackle & Fly Guide
                </button>
              </li>
            </ul>
          </div>

          {/* Nav 2 */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#D97746] font-semibold mb-4">
              Accommodations & Trip
            </h4>
            <ul className="space-y-2 text-sm text-[#F5F2EB]/70">
              <li>
                <button onClick={() => onNavigate('accommodations')} className="hover:text-white transition text-left cursor-pointer">
                  Main Timber Lodge
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('accommodations')} className="hover:text-white transition text-left cursor-pointer">
                  Secondary Lodge
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('accommodations')} className="hover:text-white transition text-left cursor-pointer">
                  Off-Grid Infrastructure
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('rates')} className="hover:text-white transition text-left cursor-pointer">
                  2027 Season Rates
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('getting-here')} className="hover:text-white transition text-left cursor-pointer">
                  Helicopter Staging Base
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Outfitter CTA */}
          <div className="space-y-4">
            <h4 className="text-xs uppercase tracking-widest text-[#D97746] font-semibold mb-2">
              Reserve Your Week
            </h4>
            <p className="text-xs text-[#F5F2EB]/70 leading-relaxed">
              With our strict 8-rod weekly cap, prime Atlantic salmon dry fly weeks fill up quickly.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="w-full bg-[#D97746] hover:bg-[#C26334] text-white text-xs font-semibold uppercase tracking-wider py-3 px-4 rounded shadow transition flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Inquire for Dates</span>
            </button>
            <a
              href="mailto:info@greyriverlodge.com"
              className="w-full bg-[#1B2A32] hover:bg-[#263B46] text-[#F5F2EB] text-xs font-medium py-2.5 px-3 rounded border border-[#263B46] transition flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#D97746]" />
              <span>info@greyriverlodge.com</span>
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-8 border-t border-[#263B46]/80 flex flex-col sm:flex-row justify-between items-center text-xs text-[#F5F2EB]/40 gap-4">
          <p>&copy; {currentYear} Grey River Lodge. All rights reserved. South Coast, Newfoundland & Labrador, Canada.</p>
          <div className="flex items-center gap-4">
            <button onClick={() => onNavigate('getting-here')} className="hover:text-white transition cursor-pointer">
              Helicopter Access Only
            </button>
            <span>•</span>
            <button onClick={() => onNavigate('contact')} className="hover:text-white transition cursor-pointer">
              Direct Inquiries
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
