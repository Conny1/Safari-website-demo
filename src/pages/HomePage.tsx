import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  ShieldCheck,
  Coins,
  HeartPulse,
  ArrowRight,
  MessageCircle,
  Star,
  CheckCircle,
  Calendar,
  Sparkles,
  MapPin,
  Clock,
  ChevronRight,
  Sun,
  CloudRain,
  Eye,
  Award
} from 'lucide-react';
import { siteConfig, SafariPackage } from '../siteConfig';
import { useCurrency } from '../context/CurrencyContext';
import { PackageModal } from '../components/PackageModal';

export const HomePage: React.FC = () => {
  const { formatPrice } = useCurrency();
  const [selectedPackage, setSelectedPackage] = useState<SafariPackage | null>(null);
  const [activeSeasonMonth, setActiveSeasonMonth] = useState<number>(7); // Default to August (peak migration)

  const featuredPackages = siteConfig.packages.filter((p) => p.featured);
  const currentMonthData = siteConfig.seasonalCalendar[activeSeasonMonth];

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#14281C]">
        {/* Background image with high quality placeholder photography */}
        <div className="absolute inset-0 z-0">
          <img
            src={siteConfig.hero.backgroundImage}
            alt="African lion standing proudly on golden Kenya savannah"
            className="w-full h-full object-cover object-center scale-105 animate-subtle-zoom"
            loading="eager"
          />
          {/* Gradients for text contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#14281C]/90 via-[#14281C]/70 to-[#14281C]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#14281C] via-transparent to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white flex flex-col items-start justify-center">
          <div className="max-w-3xl space-y-6">
            
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F3D2B]/90 border border-[#C8963E]/50 text-xs sm:text-sm font-semibold text-[#C8963E] backdrop-blur-md shadow-lg">
              <Award className="w-4 h-4 text-[#C8963E]" />
              <span>{siteConfig.hero.badge}</span>
            </div>

            {/* H1 Heading */}
            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-white">
              {siteConfig.hero.heading}{' '}
              <span className="text-[#C8963E] italic block sm:inline">
                {siteConfig.hero.headingAccent}
              </span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-xl text-[#F5EDE0]/90 leading-relaxed font-light max-w-2xl">
              {siteConfig.hero.description}
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#C8963E] hover:bg-[#d6a54f] text-[#14281C] font-bold text-base sm:text-lg transition-all shadow-xl hover:shadow-[#C8963E]/30 focus-visible:ring-4 focus-visible:ring-[#C8963E]"
              >
                <span>{siteConfig.hero.primaryCtaText}</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </Link>

              <a
                href={`https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(siteConfig.hero.whatsappPrefill)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-base transition-all shadow-xl hover:shadow-[#25D366]/30 focus-visible:ring-4 focus-visible:ring-[#25D366]"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>{siteConfig.hero.secondaryCtaText}</span>
              </a>
            </div>

            {/* Quick reassurance */}
            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs text-[#F5EDE0]/70">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#C8963E]" />
                <span>100% Private 4x4 Land Cruisers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#C8963E]" />
                <span>Zero Hidden Fees</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-[#C8963E]" />
                <span>Flying Doctor Cover Included</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Trust Strip */}
      <section className="bg-[#1F3D2B] text-white border-y border-[#C8963E]/20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-[#C8963E]/20">
            {siteConfig.brand.trustStats.map((stat, idx) => (
              <div key={idx} className={`text-center ${idx > 0 ? 'pt-4 lg:pt-0' : ''}`}>
                <div className="font-serif text-3xl sm:text-4xl font-extrabold text-[#C8963E]">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-white mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-[#F5EDE0]/60 mt-0.5">
                  {stat.subtext}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Featured Packages Section */}
      <section className="py-20 bg-[#F5EDE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-xs uppercase tracking-widest text-[#B5532F] font-bold">
                Tailor-Made Expeditions
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F3D2B] mt-1">
                Signature Kenya Safaris
              </h2>
              <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-2xl">
                Unhurried game tracking, guaranteed window seats, and handpicked boutique tented camps. Every circuit is completely customizable.
              </p>
            </div>

            <Link
              to="/packages"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#1F3D2B] hover:text-[#C8963E] transition-colors border-b-2 border-[#1F3D2B] pb-1 shrink-0"
            >
              <span>View All 6 Safari Packages</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredPackages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-stone-200 flex flex-col group"
              >
                {/* Image */}
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={pkg.heroImage}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Duration Tag */}
                  <div className="absolute top-4 left-4 bg-[#14281C]/90 text-[#C8963E] px-3 py-1 rounded-full text-xs font-bold border border-[#C8963E]/40 backdrop-blur-sm">
                    {pkg.duration}
                  </div>

                  {/* Destination */}
                  <div className="absolute bottom-3 left-4 text-xs font-semibold text-white/90">
                    {pkg.destinationLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-xl font-bold text-[#1F3D2B] group-hover:text-[#C8963E] transition-colors">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-stone-500 line-clamp-2">
                      {pkg.subtitle}
                    </p>

                    {/* Highlights */}
                    <ul className="pt-2 space-y-1.5 text-xs text-stone-600">
                      {pkg.highlights.slice(0, 3).map((h, i) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-[#C8963E] font-bold">✓</span>
                          <span className="line-clamp-1">{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Price & Actions */}
                  <div className="pt-4 border-t border-stone-100 space-y-3">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs text-stone-500">From</span>
                      <span className="font-serif text-xl font-bold text-[#1F3D2B]">
                        {formatPrice(pkg.priceUSD, pkg.priceKES)}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setSelectedPackage(pkg)}
                        className="w-full py-2.5 px-3 rounded-lg border border-[#1F3D2B] text-[#1F3D2B] hover:bg-[#1F3D2B] hover:text-white font-semibold text-xs transition-colors text-center"
                      >
                        View Itinerary
                      </button>
                      <a
                        href={`https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(
                          `Hello Kifaru Trails! I'm enquiring about the ${pkg.title}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-3 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs transition-colors flex items-center justify-center gap-1.5"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. "Why Travel With Us" Section */}
      <section className="py-20 bg-[#1F3D2B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C8963E] font-bold">
              The Kifaru Standard
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Why Discerning Travelers Choose Us
            </h2>
            <p className="text-sm sm:text-base text-[#F5EDE0]/80">
              We operate exclusively in private vehicles with certified senior guides. No shared seat stress, no commercial rushing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteConfig.whyChooseUs.map((feature, idx) => {
              const icons = [
                <Compass key="1" className="w-8 h-8 text-[#C8963E]" />,
                <ShieldCheck key="2" className="w-8 h-8 text-[#C8963E]" />,
                <Coins key="3" className="w-8 h-8 text-[#C8963E]" />,
                <HeartPulse key="4" className="w-8 h-8 text-[#C8963E]" />,
              ];
              return (
                <div
                  key={idx}
                  className="bg-[#14281C] p-6 rounded-2xl border border-[#C8963E]/20 space-y-4 hover:border-[#C8963E]/60 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#1F3D2B] flex items-center justify-center border border-[#C8963E]/30">
                    {icons[idx]}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">
                    {feature.title}
                  </h3>
                  <div className="text-xs text-[#C8963E] font-medium uppercase tracking-wider">
                    {feature.subtitle}
                  </div>
                  <p className="text-xs sm:text-sm text-[#F5EDE0]/75 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. "Best Time to Visit" Seasonal Calendar Graphic */}
      <section className="py-20 bg-[#FAF5ED] border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#B5532F] font-bold">
              Wildlife Timing Guide
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F3D2B]">
              Best Time to Visit Kenya: Month-by-Month
            </h2>
            <p className="text-sm sm:text-base text-stone-600">
              Select any month to discover migration dynamics, expected weather, and prime game viewing regions.
            </p>
          </div>

          {/* Month selector tabs */}
          <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-2 mb-8">
            {siteConfig.seasonalCalendar.map((item, idx) => {
              const isSelected = activeSeasonMonth === idx;
              return (
                <button
                  key={item.month}
                  type="button"
                  onClick={() => setActiveSeasonMonth(idx)}
                  className={`p-2.5 rounded-xl text-center transition-all flex flex-col items-center justify-between border ${
                    isSelected
                      ? 'bg-[#1F3D2B] text-white border-[#C8963E] shadow-md scale-105'
                      : 'bg-white text-stone-700 border-stone-200 hover:bg-[#F5EDE0]'
                  }`}
                >
                  <span className="text-xs font-bold">{item.short}</span>
                  <span
                    className={`mt-1.5 text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${
                      item.season === 'Peak'
                        ? 'bg-[#C8963E] text-[#14281C]'
                        : item.season === 'High'
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {item.season === 'Peak' ? 'Peak' : item.season === 'High' ? 'High' : 'Green'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detailed Month Display Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-[#C8963E]/30 shadow-xl max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-stone-200">
              <div>
                <span className="text-xs font-bold text-[#B5532F] uppercase tracking-wider">Month Spotlight</span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F3D2B]">
                  {currentMonthData.month} in Kenya
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-stone-500">Season Classification:</span>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#1F3D2B] text-[#C8963E] border border-[#C8963E]/30">
                  {currentMonthData.season} Season
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#1F3D2B]">
                  <Sparkles className="w-4 h-4 text-[#C8963E]" />
                  <span>Wildlife & Safari Highlights</span>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed bg-[#FAF5ED] p-4 rounded-xl border border-stone-200">
                  {currentMonthData.highlights}
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#1F3D2B]">
                  <Sun className="w-4 h-4 text-[#C8963E]" />
                  <span>Weather & Conditions</span>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed bg-[#FAF5ED] p-4 rounded-xl border border-stone-200">
                  {currentMonthData.weather}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-stone-500 text-center sm:text-left">
                Want to travel in {currentMonthData.month}? Camps fill up quickly during peak migration months.
              </p>
              <Link
                to={`/contact?month=${currentMonthData.month}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#C8963E] hover:bg-[#d6a54f] text-[#14281C] font-bold text-xs uppercase tracking-wider shadow-md transition-colors"
              >
                <span>Check {currentMonthData.month} Availability</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 6. 3-Step "How Booking Works" */}
      <section className="py-20 bg-[#F5EDE0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#B5532F] font-bold">
              Simple & Transparent
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F3D2B]">
              How Your Safari Comes to Life
            </h2>
            <p className="text-sm sm:text-base text-stone-600">
              From your initial idea to watching the sunset over the Talek River, we handle all logistics with meticulous care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {siteConfig.bookingSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-stone-200 shadow-md relative space-y-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#1F3D2B] text-[#C8963E] font-serif font-bold text-xl flex items-center justify-center">
                  {step.step}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1F3D2B]">
                  {step.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonials Carousel / Grid */}
      <section className="py-20 bg-[#1F3D2B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#C8963E] font-bold">
              Guest Stories
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Trusted by Adventurers Worldwide
            </h2>
            <p className="text-sm sm:text-base text-[#F5EDE0]/80">
              Read direct feedback from international travelers and resident Kenyan families who journeyed with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {siteConfig.testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-[#14281C] p-7 rounded-2xl border border-[#C8963E]/30 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-[#C8963E]">
                      {[...Array(t.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-[#C8963E] font-medium bg-[#1F3D2B] px-2.5 py-1 rounded-full">
                      {t.trip}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-[#F5EDE0]/90 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F5EDE0]/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-[#C8963E]"
                      loading="lazy"
                    />
                    <div>
                      <div className="font-semibold text-white text-sm">{t.name}</div>
                      <div className="text-xs text-[#F5EDE0]/70 flex items-center gap-1.5">
                        <span>{t.flag}</span>
                        <span>{t.location}</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-xs text-[#F5EDE0]/50">{t.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Closing CTA Band */}
      <section className="relative py-20 bg-[#B5532F] text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <span className="text-xs uppercase tracking-widest text-[#F5EDE0] font-bold">
            Begin Your African Chapter
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold max-w-3xl mx-auto leading-tight">
            Ready to Witness the Untamed Great Rift & Mara Plains?
          </h2>
          <p className="text-base sm:text-lg text-white/90 max-w-2xl mx-auto font-light">
            Tell us your dream dates and wishlist wildlife sightings. Our lead Nairobi guide will build your bespoke itinerary within 24 hours.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#14281C] hover:bg-[#1F3D2B] text-white font-bold text-base transition-all shadow-xl"
            >
              Request Custom Itinerary
            </Link>
            <a
              href={`https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(siteConfig.hero.whatsappPrefill)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-base transition-all shadow-xl flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>Direct WhatsApp Chat</span>
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
