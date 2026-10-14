import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { siteConfig } from '../siteConfig';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(
    siteConfig.hero.whatsappPrefill
  )}`;

  return (
    <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-40 flex flex-col items-end pointer-events-auto">
      {/* Speech bubble popup */}
      {showTooltip && (
        <div className="mb-2.5 hidden sm:flex items-center gap-2 bg-[#14281C] text-white text-xs py-2 px-3.5 rounded-xl shadow-xl border border-[#C8963E]/40 animate-fade-in max-w-xs">
          <div>
            <p className="font-semibold text-[#C8963E]">Planning a 2026/2027 Safari?</p>
            <p className="text-[#F5EDE0]/80 text-[11px] mt-0.5">Chat directly with our Nairobi guides on WhatsApp</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-stone-400 hover:text-white p-0.5"
            aria-label="Close tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Kifaru Trails Safaris on WhatsApp"
        className="group relative flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-full shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 transform hover:-translate-y-0.5 focus-visible:ring-4 focus-visible:ring-[#25D366]/50"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500"></span>
        </span>
        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />
        <span className="font-semibold text-xs sm:text-sm tracking-wide">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
};
