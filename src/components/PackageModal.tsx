import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Check, Clock, MapPin, Calendar, MessageCircle, ChevronDown, ChevronUp, Compass, ShieldCheck } from 'lucide-react';
import { SafariPackage, siteConfig } from '../siteConfig';
import { useCurrency } from '../context/CurrencyContext';

interface PackageModalProps {
  pkg: SafariPackage | null;
  onClose: () => void;
}

export const PackageModal: React.FC<PackageModalProps> = ({ pkg, onClose }) => {
  const [openDay, setOpenDay] = useState<number>(1);
  const { formatPrice } = useCurrency();
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (pkg) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [pkg, onClose]);

  if (!pkg) return null;

  const prefilledWhatsappText = `Hello Kifaru Trails! I am interested in the "${pkg.title}" (${pkg.duration}). Could you share availability and lodge upgrade options for my proposed dates?`;

  const handleBookViaForm = () => {
    onClose();
    navigate(`/contact?package=${encodeURIComponent(pkg.title)}`);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-package-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fade-in"
    >
      <div
        className="relative bg-[#FAF5ED] text-[#1E1E1C] rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#C8963E]/30"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black/90 text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#C8963E]"
          aria-label="Close package details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Hero Banner */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-2xl">
          <img
            src={pkg.heroImage}
            alt={pkg.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14281C] via-[#14281C]/50 to-transparent" />
          
          <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              <span className="bg-[#C8963E] text-[#14281C] px-3 py-1 rounded-full font-bold">
                {pkg.duration}
              </span>
              <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[#F5EDE0]">
                {pkg.destinationLabel}
              </span>
            </div>
            <h2 id="modal-package-title" className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
              {pkg.title}
            </h2>
            <p className="text-sm text-[#F5EDE0]/85 italic line-clamp-2">
              {pkg.subtitle}
            </p>
          </div>
        </div>

        {/* Price & Action Bar */}
        <div className="bg-[#1F3D2B] text-white p-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-[#C8963E]/30">
          <div>
            <div className="text-xs uppercase tracking-wider text-[#C8963E] font-medium">Direct Local Operator Rate</div>
            <div className="text-2xl sm:text-3xl font-serif font-bold text-white">
              From {formatPrice(pkg.priceUSD, pkg.priceKES)}
              <span className="text-xs font-normal text-[#F5EDE0]/70 ml-2">/ person (sharing)</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <a
              href={`https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(prefilledWhatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Enquire on WhatsApp</span>
            </a>
            <button
              onClick={handleBookViaForm}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#C8963E] hover:bg-[#d6a54f] text-[#14281C] font-bold text-sm shadow-md transition-colors"
            >
              <span>Customise Route</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Overview & Highlights */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#1F3D2B] flex items-center gap-2">
              <Compass className="w-5 h-5 text-[#C8963E]" />
              <span>Expedition Overview</span>
            </h3>
            <p className="text-stone-700 leading-relaxed text-sm sm:text-base">
              {pkg.overview}
            </p>

            <div className="bg-[#F5EDE0] p-4 sm:p-5 rounded-xl border border-[#C8963E]/20 space-y-3">
              <h4 className="font-semibold text-sm text-[#1F3D2B] uppercase tracking-wider">Key Highlights</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-stone-800">
                {pkg.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[#C8963E] font-bold mt-0.5">✦</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Day-by-day itinerary Accordion */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-xl font-bold text-[#1F3D2B] flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#C8963E]" />
                <span>Day-by-Day Itinerary</span>
              </h3>
              <span className="text-xs text-stone-500 font-medium">Click any day to expand</span>
            </div>

            <div className="space-y-3">
              {pkg.dayByDayItinerary.map((day) => {
                const isOpen = openDay === day.day;
                return (
                  <div
                    key={day.day}
                    className="border border-stone-200 rounded-xl overflow-hidden bg-white shadow-xs"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenDay(isOpen ? 0 : day.day)}
                      className="w-full text-left p-4 sm:p-5 flex items-center justify-between bg-stone-50 hover:bg-[#F5EDE0]/40 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3.5 pr-2">
                        <span className="w-8 h-8 rounded-full bg-[#1F3D2B] text-[#C8963E] font-serif font-bold text-sm flex items-center justify-center shrink-0">
                          {day.day}
                        </span>
                        <div>
                          <div className="text-xs uppercase font-semibold text-[#B5532F]">Day {day.day}</div>
                          <div className="font-semibold text-stone-900 text-sm sm:text-base">{day.title}</div>
                        </div>
                      </div>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-stone-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-stone-500 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="p-4 sm:p-5 text-stone-700 text-sm space-y-3 border-t border-stone-100 bg-white">
                        <p className="leading-relaxed text-stone-700">{day.description}</p>
                        <div className="pt-2 flex flex-wrap gap-4 text-xs bg-[#FAF5ED] p-3 rounded-lg border border-stone-200">
                          <div>
                            <span className="font-semibold text-[#1F3D2B]">Accommodation: </span>
                            <span className="text-stone-700">{day.accommodation}</span>
                          </div>
                          <div>
                            <span className="font-semibold text-[#1F3D2B]">Meals: </span>
                            <span className="text-stone-700">{day.meals}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Inclusions & Exclusions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Inclusions */}
            <div className="bg-[#FAF5ED] p-5 rounded-xl border border-emerald-900/10 space-y-3">
              <h4 className="font-serif font-bold text-[#1F3D2B] flex items-center gap-2 text-base">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>What's Included</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                {pkg.inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-700 font-bold shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Exclusions */}
            <div className="bg-[#FAF5ED] p-5 rounded-xl border border-stone-200 space-y-3">
              <h4 className="font-serif font-bold text-stone-800 flex items-center gap-2 text-base">
                <span className="text-stone-400 font-bold">✕</span>
                <span>What's Excluded</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-stone-600">
                {pkg.exclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-stone-400 font-bold shrink-0">—</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Best Time & Trust note */}
          <div className="bg-[#1F3D2B]/5 p-4 rounded-xl flex items-start gap-3 border border-[#1F3D2B]/10 text-xs text-stone-700">
            <Clock className="w-5 h-5 text-[#C8963E] shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#1F3D2B]">Best Time for This Safari: </span>
              <span>{pkg.bestTime}</span>
              <p className="mt-1 text-stone-500">
                We adjust game routes according to real-time ranger radio updates to maximise predator sightings.
              </p>
            </div>
          </div>

          {/* Bottom Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-end gap-3 border-t border-stone-200">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-stone-300 text-stone-700 hover:bg-stone-100 font-medium text-sm transition-colors"
            >
              Close
            </button>
            <a
              href={`https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(prefilledWhatsappText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
