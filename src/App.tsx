import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { TheFisheryPage } from './pages/TheFisheryPage';
import { AccommodationsPage } from './pages/AccommodationsPage';
import { RatesPage } from './pages/RatesPage';
import { GettingHerePage } from './pages/GettingHerePage';
import { ContactPage } from './pages/ContactPage';
import { NetlifyCodeExporterModal } from './components/NetlifyCodeExporterModal';
import { AiGuideChat } from './components/AiGuideChat';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isNetlifyModalOpen, setIsNetlifyModalOpen] = useState<boolean>(false);
  const [prefilledBooking, setPrefilledBooking] = useState<{
    partySize?: string;
    seasonWindow?: string;
    guidingRatio?: '2:1' | '1:1';
    estimatedCost?: number;
  }>({});

  // Sync with window history / hash if user navigates with browser buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '').replace('#', '') as PageId;
      if (['home', 'the-fishery', 'accommodations', 'rates', 'getting-here', 'contact'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = `#/${page === 'home' ? '' : page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectBookingFromRates = (details: {
    partySize: string;
    seasonWindow: string;
    guidingRatio: '2:1' | '1:1';
    estimatedCost: number;
  }) => {
    setPrefilledBooking(details);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F2EB] text-[#1B2A32] selection:bg-[#D97746] selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenNetlifyModal={() => setIsNetlifyModalOpen(true)}
      />

      {/* Main Page View Content */}
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'the-fishery' && <TheFisheryPage onNavigate={handleNavigate} />}
        {currentPage === 'accommodations' && <AccommodationsPage onNavigate={handleNavigate} />}
        {currentPage === 'rates' && (
          <RatesPage
            onNavigate={handleNavigate}
            onSelectBooking={handleSelectBookingFromRates}
          />
        )}
        {currentPage === 'getting-here' && <GettingHerePage onNavigate={handleNavigate} />}
        {currentPage === 'contact' && <ContactPage initialData={prefilledBooking} />}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenNetlifyModal={() => setIsNetlifyModalOpen(true)}
      />

      {/* AI Outfitter Concierge */}
      <AiGuideChat />

      {/* Netlify Code & Astro Project Files Exporter Modal */}
      <NetlifyCodeExporterModal
        isOpen={isNetlifyModalOpen}
        onClose={() => setIsNetlifyModalOpen(false)}
      />

    </div>
  );
}
