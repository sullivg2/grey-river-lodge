import React, { useState } from 'react';
import { LODGE_PHOTOS, LodgePhoto } from '../data/lodgePhotos';
import { LodgeImage } from './LodgeImage';
import { Camera, MapPin, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface PhotoGalleryShowcaseProps {
  filterCategory?: string;
  title?: string;
  subtitle?: string;
  limit?: number;
}

export const PhotoGalleryShowcase: React.FC<PhotoGalleryShowcaseProps> = ({
  filterCategory,
  title = 'Authentic Grey River Gallery',
  subtitle = 'Actual photography from our lodge compound, river pools, and wilderness expeditions.',
  limit
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(filterCategory || 'All');
  const [activePhoto, setActivePhoto] = useState<LodgePhoto | null>(null);

  const categories = ['All', 'Lodge & Grounds', 'The Fishery', 'Trophy Catches', 'Wilderness & Wildlife'];

  const filteredPhotos = LODGE_PHOTOS.filter(photo => {
    if (filterCategory) return photo.category === filterCategory;
    if (selectedCategory === 'All') return true;
    return photo.category === selectedCategory;
  }).slice(0, limit || LODGE_PHOTOS.length);

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D97746] font-bold">
            <Camera className="w-4 h-4" />
            <span>Real Lodge Photography</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-serif text-[#11191F]">{title}</h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl">{subtitle}</p>
        </div>

        {/* Category Filter Pills */}
        {!filterCategory && (
          <div className="flex flex-wrap gap-1.5">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded-full font-medium transition cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#2D4A3E] text-white shadow'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Grid of Photos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredPhotos.map(photo => (
          <div
            key={photo.id}
            onClick={() => setActivePhoto(photo)}
            className="group relative bg-white rounded-xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
          >
            <div className="aspect-[4/3] overflow-hidden bg-slate-900 relative">
              <LodgeImage
                filename={photo.filename}
                alt={photo.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11191F]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-[11px] text-white flex items-center gap-1 font-semibold">
                  <Maximize2 className="w-3.5 h-3.5 text-[#D97746]" />
                  Click to View Details
                </span>
              </div>
              <span className="absolute top-2 right-2 bg-[#11191F]/70 backdrop-blur-sm text-[#F5F2EB] text-[10px] px-2 py-0.5 rounded font-mono border border-white/10">
                {photo.category}
              </span>
            </div>

            <div className="p-4 space-y-1.5 flex-grow flex flex-col justify-between">
              <div>
                <h4 className="font-serif font-bold text-slate-900 text-sm group-hover:text-[#D97746] transition-colors line-clamp-1">
                  {photo.title}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2 mt-1">
                  {photo.caption}
                </p>
              </div>
              <div className="pt-2 text-[11px] text-slate-400 font-mono flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#D97746]" />
                <span>{photo.locationTag}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activePhoto && (
        <div 
          className="fixed inset-0 z-50 bg-[#11191F]/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div 
            className="bg-[#1B2A32] text-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-[#263B46] shadow-2xl flex flex-col"
            onClick={e => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-5 border-b border-[#263B46] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-[#D97746] uppercase tracking-wider font-bold">
                  {activePhoto.category} • {activePhoto.locationTag}
                </span>
                <h3 className="text-lg sm:text-xl font-serif text-white">{activePhoto.title}</h3>
              </div>
              <button
                onClick={() => setActivePhoto(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-[#263B46] transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image Display */}
            <div className="relative bg-[#0B1014] flex items-center justify-center max-h-[60vh] overflow-hidden">
              <LodgeImage
                filename={activePhoto.filename}
                alt={activePhoto.title}
                className="max-h-[60vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Modal Caption */}
            <div className="p-4 sm:p-6 bg-[#1B2A32] border-t border-[#263B46]">
              <p className="text-xs sm:text-sm text-[#F5F2EB]/90 leading-relaxed">
                {activePhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
