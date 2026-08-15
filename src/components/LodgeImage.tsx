import React, { useState } from 'react';

interface LodgeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  filename: string;
  fallbackKeywords?: string;
}

export const LodgeImage: React.FC<LodgeImageProps> = ({
  filename,
  alt = 'Grey River Lodge Photo',
  className = '',
  ...props
}) => {
  const [srcIndex, setSrcIndex] = useState(0);

  // Fallback URLs for smooth rendering across dev & Netlify environments
  const candidateUrls = [
    `/images/${filename}`,
    `/${filename}`,
    `./${filename}`,
    `https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80`
  ];

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
      referrerPolicy="no-referrer"
      className={className}
      {...props}
    />
  );
};
