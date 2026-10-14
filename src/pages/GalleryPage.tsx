import React, { useState, useMemo } from 'react';
import { Camera, MapPin, ZoomIn, MessageCircle } from 'lucide-react';
import { siteConfig, GalleryItem } from '../siteConfig';
import { LightboxModal } from '../components/LightboxModal';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [lightboxItem, setLightboxItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Wildlife', 'Landscapes', 'Camps', 'Guests'];

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return siteConfig.galleryItems;
    return siteConfig.galleryItems.filter((i) => i.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-[#FAF5ED] min-h-screen">
      {/* 1. Gallery Header */}
      <section className="bg-[#14281C] text-white py-16 sm:py-20 border-b border-[#C8963E]/30 relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C8963E] font-bold">
              <Camera className="w-4 h-4" />
              <span>Through the Viewfinder</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Wild Kenya in Raw Splendour
            </h1>

            <p className="text-sm sm:text-lg text-[#F5EDE0]/85 leading-relaxed font-light">
              Real moments captured from our private Land Cruiser hatches across the Maasai Mara, Amboseli marshes, and Great Rift Valley escarpments.
            </p>

            <div className="pt-2">
              <a
                href={`https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(
                  "Hello Kifaru Trails! I'm interested in a photography-focused safari with vehicle beanbags and open roof hatches."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-sm transition-all shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Enquire About Photography Safaris</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Category Filter Bar */}
      <section className="bg-white border-b border-stone-200 py-6 sticky top-[68px] sm:top-[74px] z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-stone-500 uppercase tracking-wider mr-2">
              Filter by Collection:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#1F3D2B] text-white shadow-xs'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="text-xs text-stone-500 font-medium">
            Showing {filteredItems.length} curated images · Click to enlarge
          </div>
        </div>
      </section>

      {/* 3. Masonry / Responsive Grid */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setLightboxItem(item)}
              className="break-inside-avoid bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-stone-200 group cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#C8963E] text-[#14281C] flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                    <ZoomIn className="w-6 h-6 stroke-[2.5]" />
                  </div>
                </div>

                <div className="absolute top-3 left-3 bg-[#14281C]/80 text-[#C8963E] px-2.5 py-1 rounded-md text-[11px] font-bold backdrop-blur-sm">
                  {item.category}
                </div>
              </div>

              <div className="p-5 space-y-2">
                <div className="flex items-center gap-1.5 text-xs text-stone-500">
                  <MapPin className="w-3.5 h-3.5 text-[#B5532F] shrink-0" />
                  <span className="truncate">{item.location}</span>
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-[#1F3D2B] group-hover:text-[#C8963E] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-600 line-clamp-2">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <LightboxModal
          item={lightboxItem}
          items={filteredItems}
          onClose={() => setLightboxItem(null)}
          onNavigate={(index) => setLightboxItem(filteredItems[index])}
        />
      )}
    </div>
  );
};
