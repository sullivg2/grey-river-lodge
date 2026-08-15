import React, { useState, useEffect } from 'react';
import { PageId } from '../types';
import { Menu, X, Compass, PhoneCall, Waves, ShieldCheck } from 'lucide-react';

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

  const navItems: { id: PageId; name: string }[] = [
    { id: 'home', name: 'Home' },
    { id: 'the-fishery', name: 'The Fishery' },
    { id: 'accommodations', name: 'Accommodations' },
    { id: 'rates', name: 'Rates & Inclusions' },
    { id: 'getting-here', name: 'Getting Here' }
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
          <div className="flex items-center justify-between h-20">
            
            {/* Brand Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex flex-col text-left group cursor-pointer focus:outline-none"
            >
              <div className="flex items-center gap-2">
                <Compass className="w-6 h-6 text-[#D97746] transition-transform group-hover:rotate-45" />
                <span className="font-serif text-2xl font-bold tracking-wider text-white">
                  GREY RIVER
                </span>
              </div>
              <span className="text-[10px] tracking-[0.22em] text-[#D97746] uppercase font-medium pl-8">
                Most Remote Salmon Lodge • Newfoundland
              </span>
            </button>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-7">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-sm font-medium transition-colors cursor-pointer py-1 ${
                    currentPage === item.id
                      ? 'text-[#D97746] font-semibold border-b-2 border-[#D97746]'
                      : 'text-[#F5F2EB]/80 hover:text-[#D97746]'
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Primary Action Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => handleNavClick('contact')}
                className="bg-[#D97746] hover:bg-[#C26334] text-white text-xs font-semibold uppercase tracking-wider px-5 py-3 rounded shadow-md transition-all duration-200 cursor-pointer flex items-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>Reserve 2027 Dates</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => handleNavClick('contact')}
                className="bg-[#D97746] text-white text-[11px] font-semibold uppercase px-3 py-1.5 rounded"
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
          <div className="md:hidden bg-[#11191F] border-b border-[#263B46] px-4 pt-2 pb-6 space-y-2 animate-fadeIn">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-4 py-3 rounded text-base font-medium transition ${
                  currentPage === item.id
                    ? 'bg-[#1B2A32] text-[#D97746] font-semibold'
                    : 'text-[#F5F2EB]/90 hover:bg-[#1B2A32]'
                }`}
              >
                {item.name}
              </button>
            ))}
            <div className="pt-4 border-t border-[#263B46] space-y-2">
              <button
                onClick={() => handleNavClick('contact')}
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
