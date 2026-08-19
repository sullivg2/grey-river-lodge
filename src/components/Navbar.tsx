import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Menu, X, PhoneCall, Waves, ShieldCheck, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Strict single-line nav items to prevent multiline wrapping
  const navItems: { id: PageId; name: string }[] = [
    { id: 'home', name: 'Home' },
    { id: 'the-fishery', name: 'Fishery' },
    { id: 'accommodations', name: 'Accommodations' },
    { id: 'rates', name: 'Rates' },
    { id: 'getting-here', name: 'Getting Here' },
    { id: 'fly-shop', name: 'Fly Shop' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Top Banner Status Bar */}
      <div className="bg-[#0B1014] text-[#F5F2EB]/80 text-[11px] py-1.5 px-4 border-b border-[#263B46]/40 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#D97746] font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-[#D97746] animate-pulse"></span>
              2027 Season Dates Open
            </span>
            <span className="text-[#F5F2EB]/40">•</span>
            <span className="text-white/80 font-medium">
              Newfoundland’s Most Remote Salmon Lodge • Helicopter Access Only
            </span>
            <span className="text-[#F5F2EB]/40">•</span>
            <span className="flex items-center gap-1 text-[#F5F2EB]/70">
              <Waves className="w-3 h-3 text-[#3E6656]" />
              Grey River System: Pristine Flow • 56°F
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="mailto:info@greyriverlodge.com" 
              className="hover:text-white transition flex items-center gap-1 text-[#F5F2EB]/90"
            >
              <PhoneCall className="w-3 h-3 text-[#D97746]" />
              Direct Outfitter: info@greyriverlodge.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#11191F]/95 backdrop-blur-md shadow-xl border-b border-[#263B46]'
            : 'bg-[#11191F] border-b border-[#1B2A32]'
        } text-white`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24 gap-4">
            
            {/* Brand Logo - Integrated Vector Fly + Typographic Lockup */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 sm:gap-3.5 group cursor-pointer focus:outline-none shrink-0 py-2"
              aria-label="Grey River Lodge Home"
            >
              <img
                src="/Grey River Lodge Fly logo.svg"
                alt="Grey River Salmon Fly Logo"
                className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
              />
              <div className="flex flex-col text-left">
                <span className="text-lg sm:text-xl md:text-2xl font-serif font-bold tracking-wider text-[#F5F2EB] uppercase leading-none">
                  Grey River Lodge
                </span>
                <span className="text-[9px] sm:text-[10px] md:text-[10.5px] tracking-[0.20em] text-[#D97746] font-medium uppercase mt-1 whitespace-nowrap">
                  Newfoundland
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-4 xl:space-x-6 shrink-0">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-xs xl:text-sm font-medium transition-colors cursor-pointer py-1.5 whitespace-nowrap flex items-center gap-1.5 ${
                    currentPage === item.id
                      ? 'text-[#D97746] font-semibold border-b-2 border-[#D97746]'
                      : 'text-[#F5F2EB]/80 hover:text-[#D97746]'
                  }`}
                >
                  {item.id === 'fly-shop' && (
                    <ShoppingBag className="w-3.5 h-3.5 text-[#D97746]" />
                  )}
                  <span>{item.name}</span>
                </button>
              ))}
            </nav>

            {/* Primary Action Button */}
            <div className="hidden lg:flex items-center shrink-0">
              <button
                onClick={() => handleNavClick('rates')}
                className="bg-[#D97746] hover:bg-[#C26334] text-white text-xs font-semibold uppercase tracking-wider px-4 py-2.5 xl:px-5 xl:py-3 rounded shadow-md transition-all duration-200 cursor-pointer flex items-center gap-2 whitespace-nowrap"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Reserve 2027</span>
              </button>
            </div>

            {/* Mobile / Tablet Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={() => handleNavClick('rates')}
                className="bg-[#D97746] text-white text-[11px] font-semibold uppercase px-3 py-1.5 rounded whitespace-nowrap"
              >
                Reserve
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-[#F5F2EB] hover:text-white hover:bg-[#1B2A32] focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#11191F] border-b border-[#263B46] px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-3 rounded text-base font-medium transition flex items-center justify-between ${
                  currentPage === item.id
                    ? 'bg-[#1B2A32] text-[#D97746] font-semibold'
                    : 'text-[#F5F2EB]/90 hover:bg-[#1B2A32]'
                }`}
              >
                <span>{item.name}</span>
                {item.id === 'fly-shop' && (
                  <ShoppingBag className="w-4 h-4 text-[#D97746]" />
                )}
              </button>
            ))}
            <div className="pt-4 border-t border-[#263B46] space-y-2">
              <button
                onClick={() => handleNavClick('rates')}
                className="w-full bg-[#D97746] hover:bg-[#C26334] text-white text-xs font-semibold uppercase tracking-wider py-3.5 rounded shadow text-center block"
              >
                Inquire & Reserve 2027 Dates
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};