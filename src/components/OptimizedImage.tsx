import React from 'react';

interface OptimizedImageProps {
  baseSrc: string;
  alt: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'async' | 'sync' | 'auto';
}

/**
 * OptimizedImage component that serves WebP with PNG/JPEG fallback.
 * Example: baseSrc="foto.png" will use foto.webp (WebP) if available.
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  baseSrc,
  alt,
  className,
  loading = 'eager',
  decoding = 'auto',
}) => {
  const baseWithoutExt = baseSrc.replace(/\.[^.]+$/, '');

  return (
    <picture>
      <source srcSet={`${baseWithoutExt}.webp`} type="image/webp" />
      <img
        src={baseSrc}
        alt={alt}
        className={className}
        loading={loading}
        decoding={decoding}
      />
    </picture>
  );
};

export default OptimizedImage;
