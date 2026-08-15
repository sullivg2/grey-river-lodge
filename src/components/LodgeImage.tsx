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

  // Build list of candidate paths to resolve local files in public/ or external URLs
  const getCandidateList = () => {
    if (directSrc) return [directSrc, ultimateFallback];
    if (!filename) return [ultimateFallback];

    // If filename is already a full URL
    if (filename.startsWith('http://') || filename.startsWith('https://')) {
      return [filename, ultimateFallback];
    }

    // Try standard public directory paths
    const cleanFilename = filename.replace(/^\/+/, '');
    return [
      `/${cleanFilename}`,
      `/images/${cleanFilename}`,
      `/assets/${cleanFilename}`,
      `./${cleanFilename}`,
      ultimateFallback
    ];
  };

  const candidateUrls = getCandidateList();
  const [srcIndex, setSrcIndex] = useState(0);

  // Reset index if filename or src prop changes
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
