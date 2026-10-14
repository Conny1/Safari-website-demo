import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Calendar } from 'lucide-react';
import { siteConfig } from '../siteConfig';

export const MobileStickyBar: React.FC = () => {
  return (
    <aside aria-label="Quick mobile contact actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#14281C]/95 backdrop-blur-md border-t border-[#C8963E]/30 px-3 py-2 flex items-center justify-between gap-2 shadow-2xl">
      {/* Click to Call */}
      <a
        href={`tel:${siteConfig.brand.phoneRaw}`}
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-[#1F3D2B] text-[#F5EDE0] text-[11px] font-medium border border-[#C8963E]/20 active:scale-95 transition-transform"
      >
        <Phone className="w-4 h-4 text-[#C8963E] mb-0.5" />
        <span>Call Guide</span>
      </a>

      {/* WhatsApp */}
      <a
        href={`https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(siteConfig.hero.whatsappPrefill)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-[#25D366] text-white text-[11px] font-semibold active:scale-95 transition-transform shadow-xs"
      >
        <MessageCircle className="w-4 h-4 fill-current mb-0.5" />
        <span>WhatsApp</span>
      </a>

      {/* Enquire CTA */}
      <Link
        to="/contact"
        className="flex-1 flex flex-col items-center justify-center py-1.5 px-2 rounded-lg bg-[#C8963E] text-[#14281C] text-[11px] font-bold active:scale-95 transition-transform shadow-sm"
      >
        <Calendar className="w-4 h-4 mb-0.5 stroke-[2.2]" />
        <span>Enquire Now</span>
      </Link>
    </aside>
  );
};
