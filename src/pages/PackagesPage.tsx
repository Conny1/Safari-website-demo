import React, { useState, useMemo } from 'react';
import { MessageCircle, Filter, Compass, Clock, MapPin, Check, ArrowRight, X } from 'lucide-react';
import { siteConfig, SafariPackage } from '../siteConfig';
import { useCurrency } from '../context/CurrencyContext';
import { PackageModal } from '../components/PackageModal';

export const PackagesPage: React.FC = () => {
  const { formatPrice, currency, setCurrency } = useCurrency();
  const [selectedPackage, setSelectedPackage] = useState<SafariPackage | null>(null);
  const [durationFilter, setDurationFilter] = useState<string>('All');
  const [destinationFilter, setDestinationFilter] = useState<string>('All');

  const filteredPackages = useMemo(() => {
    return siteConfig.packages.filter((pkg) => {
      const matchDuration =
        durationFilter === 'All' || pkg.durationCategory === durationFilter;
      const matchDestination =
        destinationFilter === 'All' || pkg.destination === destinationFilter;
      return matchDuration && matchDestination;
    });
  }, [durationFilter, destinationFilter]);

  const resetFilters = () => {
    setDurationFilter('All');
    setDestinationFilter('All');
  };

  return (
    <div className="bg-[#FAF5ED] min-h-screen">
      {/* 1. Page Header Banner */}
      <section className="bg-[#14281C] text-white py-16 sm:py-20 border-b border-[#C8963E]/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <img
            src="https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=80"
            alt="Savannah background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C8963E] font-bold">
              <Compass className="w-4 h-4" />
              <span>Tailor-Made Kenya Safaris</span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Bespoke Wildlife Journeys
            </h1>
            
            <p className="text-sm sm:text-lg text-[#F5EDE0]/85 leading-relaxed font-light">
              Explore our hand-crafted private itineraries across Kenya's premier reserves. Every safari includes a dedicated 4x4 Land Cruiser, senior silver-rated guide, and Flying Doctors medical cover.
            </p>

            {/* Above-the-fold CTA & Currency Toggle */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href={`https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Kifaru Trails! I'm reviewing your safari packages. Could you help recommend the best itinerary for my timeframe?"
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm transition-all shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Ask a Naturalist on WhatsApp</span>
              </a>

              <div className="inline-flex items-center gap-2 bg-[#1F3D2B] px-3 py-1.5 rounded-lg border border-[#C8963E]/30 text-xs">
                <span className="text-[#F5EDE0]/70">Showing Prices in:</span>
                <button
                  type="button"
                  onClick={() => setCurrency('USD')}
                  className={`px-2 py-1 rounded font-bold transition-colors ${
                    currency === 'USD' ? 'bg-[#C8963E] text-[#14281C]' : 'text-stone-300'
                  }`}
                >
                  USD ($)
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('KES')}
                  className={`px-2 py-1 rounded font-bold transition-colors ${
                    currency === 'KES' ? 'bg-[#C8963E] text-[#14281C]' : 'text-stone-300'
                  }`}
                >
                  KES (KSh)
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Filter Controls Section */}
      <section className="bg-white border-b border-stone-200 py-6 sticky top-[68px] sm:top-[74px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Duration Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider mr-1">
                Duration:
              </span>
              {['All', '1-3 Days', '4-5 Days', '6+ Days'].map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() => setDurationFilter(category)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    durationFilter === category
                      ? 'bg-[#1F3D2B] text-white shadow-xs'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Destination Filters */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider mr-1">
                Destination:
              </span>
              {[
                { label: 'All Regions', val: 'All' },
                { label: 'Maasai Mara', val: 'Maasai Mara' },
                { label: 'Amboseli', val: 'Amboseli' },
                { label: 'Rift Valley', val: 'Rift Valley' },
                { label: 'Full Circuit', val: 'Circuit' },
                { label: 'Coast Extension', val: 'Coast' },
              ].map((dest) => (
                <button
                  key={dest.val}
                  type="button"
                  onClick={() => setDestinationFilter(dest.val)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    destinationFilter === dest.val
                      ? 'bg-[#C8963E] text-[#14281C] font-bold shadow-xs'
                      : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                  }`}
                >
                  {dest.label}
                </button>
              ))}

              {(durationFilter !== 'All' || destinationFilter !== 'All') && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="px-2.5 py-1.5 text-xs text-[#B5532F] hover:underline flex items-center gap-1 font-semibold"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>

          </div>

          <div className="flex items-center justify-between text-xs text-stone-500 pt-1">
            <span>
              Showing {filteredPackages.length} of {siteConfig.packages.length} safari packages
            </span>
            <span className="text-[#1F3D2B] font-semibold">
              All itineraries 100% customizable to your dates & lodge preferences
            </span>
          </div>
        </div>
      </section>

      {/* 3. Packages Grid */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredPackages.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-stone-200 p-8 max-w-md mx-auto space-y-4">
            <Compass className="w-10 h-10 text-stone-400 mx-auto" />
            <h3 className="font-serif text-xl font-bold text-stone-800">No packages match this criteria</h3>
            <p className="text-xs text-stone-500">
              Try adjusting your duration or destination filters, or let us custom build a journey for you.
            </p>
            <button
              onClick={resetFilters}
              className="px-4 py-2 rounded-lg bg-[#1F3D2B] text-white text-xs font-semibold"
            >
              Show All Packages
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-stone-200 flex flex-col group"
              >
                {/* Image & Badges */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={pkg.heroImage}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  
                  {/* Duration Tag */}
                  <div className="absolute top-4 left-4 bg-[#14281C]/90 text-[#C8963E] px-3 py-1 rounded-full text-xs font-bold border border-[#C8963E]/40 backdrop-blur-sm">
                    {pkg.duration}
                  </div>

                  {/* Destination */}
                  <div className="absolute bottom-3 left-4 text-xs font-bold text-white flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C8963E]" />
                    <span>{pkg.destinationLabel}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h2 className="font-serif text-xl font-bold text-[#1F3D2B] group-hover:text-[#C8963E] transition-colors leading-snug">
                      {pkg.title}
                    </h2>
                    <p className="text-xs text-stone-500 line-clamp-2">
                      {pkg.subtitle}
                    </p>

                    {/* Highlights */}
                    <ul className="pt-2 space-y-1.5 text-xs text-stone-600">
                      {pkg.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#C8963E] font-bold">✦</span>
                          <span className="line-clamp-1">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & Actions */}
                  <div className="pt-4 border-t border-stone-100 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-stone-500 font-medium">Price per person</span>
                      <span className="font-serif text-2xl font-bold text-[#1F3D2B]">
                        From {formatPrice(pkg.priceUSD, pkg.priceKES)}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedPackage(pkg)}
                        className="w-full py-2.5 px-3 rounded-lg bg-[#1F3D2B] text-white hover:bg-[#14281C] font-semibold text-xs transition-colors text-center shadow-xs"
                      >
                        Detailed Itinerary
                      </button>
                      <a
                        href={`https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(
                          `Hello Kifaru Trails! I am interested in booking or customizing the "${pkg.title}" (${pkg.duration}).`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>Enquire</span>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 4. Custom Circuit Reassurance Banner */}
      <section className="bg-[#1F3D2B] text-white py-14 border-t border-[#C8963E]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-white">
              Want a Tailored Combination Circuit?
            </h3>
            <p className="text-sm text-[#F5EDE0]/80 max-w-xl">
              We frequently combine Mara migration tracking with Amboseli tuskers and direct flights to Diani Beach. Talk to our planners to customize any itinerary.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(
                "Hello Kifaru Trails! I would like to design a custom multi-destination Kenya safari circuit."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#C8963E] hover:bg-[#d6a54f] text-[#14281C] font-bold text-sm transition-colors shadow-lg"
            >
              Customise My Route
            </a>
          </div>
        </div>
      </section>

      {/* Package Detail Modal */}
      {selectedPackage && (
        <PackageModal
          pkg={selectedPackage}
          onClose={() => setSelectedPackage(null)}
        />
      )}
    </div>
  );
};
