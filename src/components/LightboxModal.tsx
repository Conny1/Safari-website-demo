import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, MessageCircle } from 'lucide-react';
import { GalleryItem, siteConfig } from '../siteConfig';

interface LightboxModalProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, items, onClose, onNavigate }) => {
  const currentIndex = item ? items.findIndex((i) => i.id === item.id) : -1;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && currentIndex < items.length - 1) onNavigate(currentIndex + 1);
      if (e.key === 'ArrowLeft' && currentIndex > 0) onNavigate(currentIndex - 1);
    };

    if (item) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, currentIndex, items.length, onClose, onNavigate]);

  if (!item) return null;

  const whatsappPrefill = `Hello Kifaru Trails! I saw this photo on your gallery: "${item.title}" at ${item.location}. Which safari itinerary includes this location?`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fade-in"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-stone-800/80 hover:bg-stone-700 text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#C8963E]"
        aria-label="Close lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      {currentIndex > 0 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex - 1);
          }}
          className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-stone-800/80 hover:bg-stone-700 text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#C8963E]"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* Next button */}
      {currentIndex < items.length - 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNavigate(currentIndex + 1);
          }}
          className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-stone-800/80 hover:bg-stone-700 text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#C8963E]"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Image container & Caption card */}
      <div
        className="max-w-5xl w-full flex flex-col items-center max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full flex items-center justify-center overflow-hidden rounded-xl">
          <img
            src={item.imageUrl}
            alt={item.title}
            className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
          />
        </div>

        {/* Caption info below */}
        <div className="mt-4 w-full bg-[#14281C] text-white p-4 sm:p-5 rounded-xl border border-[#C8963E]/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#C8963E] font-semibold">{item.category}</span>
              <span className="text-stone-500">·</span>
              <span className="text-stone-300 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#B5532F]" />
                {item.location}
              </span>
            </div>
            <h3 className="font-serif text-lg font-bold text-white">{item.title}</h3>
            <p className="text-xs sm:text-sm text-[#F5EDE0]/80">{item.caption}</p>
          </div>

          <a
            href={`https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(whatsappPrefill)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-semibold transition-colors shrink-0 shadow-md"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Ask About This Sight</span>
          </a>
        </div>
      </div>
    </div>
  );
};
