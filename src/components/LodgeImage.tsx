import React, { useState, useEffect } from 'react';

interface LodgeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  filename?: string;
  src?: string;
  fallbackUrl?: string;
  category?: string;
}

// Curated high-res wilderness, salmon fishery, and lodge fallbacks
const DEFAULT_FALLBACKS: Record<string, string> = {
  'Lodge & Grounds': 'https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&w=1600&q=80',
  'The Fishery': 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80',
  'Trophy Catches': 'https://images.unsplash.com/photo-1535557142533-b5e1cc6e2a5d?auto=format&fit=crop&w=1600&q=80',
  'Wilderness & Wildlife': 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?auto=format&fit=crop&w=1600&q=80',
  default: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&q=80'
};

export const LodgeImage: React.FC<LodgeImageProps> = ({
  filename,
  src: directSrc,
  fallbackUrl,
  category = 'default',
  alt = 'Grey River Lodge Photo',
  className = '',
  ...props
}) => {
  const categoryFallback = DEFAULT_FALLBACKS[category] || DEFAULT_FALLBACKS.default;
  const ultimateFallback = fallbackUrl || categoryFallback;

  // Build an exhaustive candidate list for cross-platform / Netlify / Vite asset serving
  const getCandidateList = (): string[] => {
    if (directSrc) return [directSrc, ultimateFallback];
    if (!filename) return [ultimateFallback];

    // If filename is already a full remote URL
    if (filename.startsWith('http://') || filename.startsWith('https://')) {
      return [filename, ultimateFallback];
    }

    const clean = filename.replace(/^\/+/, '');
    const cleanLower = clean.toLowerCase();
    const cleanJpg = clean.replace(/\.JPG$/i, '.jpg').replace(/\.JPEG$/i, '.jpeg');
    const cleanJPG = clean.replace(/\.jpg$/i, '.JPG').replace(/\.jpeg$/i, '.JPG');
    const cleanJpeg = clean.replace(/\.jpg$/i, '.jpeg').replace(/\.JPG$/i, '.jpeg');

    const rawCandidates = [
      // Standard root public folder paths
      `/${clean}`,
      `/${cleanLower}`,
      `/${cleanJpg}`,
      `/${cleanJPG}`,
      `/${cleanJpeg}`,
      // Subfolder public paths
      `/images/${clean}`,
      `/images/${cleanLower}`,
      `/assets/${clean}`,
      `/assets/${cleanLower}`,
      // Relative paths
      `./${clean}`,
      `./${cleanLower}`,
      // Ultimate category fallback
      ultimateFallback
    ];

    // Deduplicate candidate URLs while preserving order
    return Array.from(new Set(rawCandidates));
  };

  const candidateUrls = getCandidateList();
  const [srcIndex, setSrcIndex] = useState(0);

  // Reset index whenever filename or directSrc changes
  useEffect(() => {
    setSrcIndex(0);
  }, [filename, directSrc, fallbackUrl]);

  const handleError = () => {
    if (srcIndex < candidateUrls.length - 1) {
      setSrcIndex(prev => prev + 1);
    }
  };

  return (
    <img
      src={candidateUrls[srcIndex]}
      alt={alt}
      onError={handleError}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      className={className}
      {...props}
    />
  );
};
