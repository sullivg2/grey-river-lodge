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
import { applyPageMetadata, PAGE_PATHS, resolvePageFromLocation } from './seo';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>(() => resolvePageFromLocation());
  const [prefilledBooking, setPrefilledBooking] = useState<{
    partySize?: string;
    seasonWindow?: string;
    guidingRatio?: '2:1' | '1:1';
    estimatedCost?: number;
  }>({});

  useEffect(() => {
    const handleLocationChange = () => {
      const nextPage = resolvePageFromLocation();
      setCurrentPage(nextPage);
      applyPageMetadata(nextPage);
    };

    handleLocationChange();
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    applyPageMetadata(page);

    const targetPath = PAGE_PATHS[page];
    const currentPath = window.location.pathname;
    if (currentPath !== targetPath) {
      window.history.pushState({}, '', targetPath);
    }

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
      />

    </div>
  );
}