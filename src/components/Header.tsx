import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, ShieldCheck, Menu, X, ArrowRight, Compass } from 'lucide-react';
import { siteConfig } from '../siteConfig';
import { useCurrency } from '../context/CurrencyContext';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { currency, setCurrency } = useCurrency();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Utility Bar */}
      <div className={`bg-[#14281C] text-xs text-[#F5EDE0]/80 transition-all duration-300 overflow-hidden ${
        isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-12 py-2 border-b border-[#F5EDE0]/10 opacity-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.brand.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-[#C8963E] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8963E]" />
              <span className="font-medium">{siteConfig.brand.phone}</span>
            </a>
            <a
              href={`mailto:${siteConfig.brand.email}`}
              className="hidden sm:flex items-center gap-1.5 hover:text-[#C8963E] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#C8963E]" />
              <span>{siteConfig.brand.email}</span>
            </a>
            <div className="hidden md:flex items-center gap-1 text-[#C8963E]/90 text-[11px] uppercase tracking-wider font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>KATO Bonded FE/489 · TRA Licensed</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Currency Selector */}
            <div className="flex items-center gap-1 bg-[#1F3D2B] p-0.5 rounded border border-[#C8963E]/20 text-[11px]">
              <span className="text-stone-400 px-1 text-[10px]">Currency:</span>
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-2 py-0.5 rounded font-medium transition-colors ${
                  currency === 'USD'
                    ? 'bg-[#C8963E] text-[#14281C] font-bold shadow-xs'
                    : 'text-[#F5EDE0]/70 hover:text-white'
                }`}
                title="View prices in US Dollars"
              >
                USD ($)
              </button>
              <button
                type="button"
                onClick={() => setCurrency('KES')}
                className={`px-2 py-0.5 rounded font-medium transition-colors ${
                  currency === 'KES'
                    ? 'bg-[#C8963E] text-[#14281C] font-bold shadow-xs'
                    : 'text-[#F5EDE0]/70 hover:text-white'
                }`}
                title="View prices in Kenyan Shillings"
              >
                KES (KSh)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1F3D2B]/95 backdrop-blur-md shadow-lg py-3 border-b border-[#C8963E]/20'
          : 'bg-[#1F3D2B] py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo and Brand */}
            <Link to="/" className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-[#C8963E] rounded-md p-1">
              <div className="w-10 h-10 rounded-full bg-[#C8963E] flex items-center justify-center text-[#1F3D2B] shadow-md group-hover:scale-105 transition-transform">
                <Compass className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white leading-none">
                  Kifaru Trails
                </span>
                <span className="text-[11px] tracking-widest uppercase font-semibold text-[#C8963E] mt-0.5">
                  Safaris Kenya
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-8">
              {siteConfig.navigation.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-sm font-medium transition-colors relative py-1 focus-visible:ring-1 focus-visible:ring-[#C8963E] rounded ${
                      isActive
                        ? 'text-[#C8963E] font-semibold'
                        : 'text-[#F5EDE0]/90 hover:text-[#C8963E]'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#C8963E] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Right Action CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded text-sm font-semibold tracking-wide bg-[#C8963E] text-[#14281C] hover:bg-[#d6a54f] transition-all duration-200 shadow-md hover:shadow-lg focus-visible:ring-2 focus-visible:ring-[#C8963E]"
              >
                <span>Plan My Safari</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded text-[#F5EDE0] hover:text-[#C8963E] focus-visible:ring-2 focus-visible:ring-[#C8963E]"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#14281C] border-b border-[#C8963E]/20 px-4 pt-4 pb-6 space-y-4 shadow-2xl transition-all">
          <div className="flex flex-col space-y-2">
            {siteConfig.navigation.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2.5 rounded-md text-base font-medium flex items-center justify-between ${
                    isActive
                      ? 'bg-[#1F3D2B] text-[#C8963E] font-bold border-l-4 border-[#C8963E]'
                      : 'text-[#F5EDE0] hover:bg-[#1F3D2B]/50 hover:text-[#C8963E]'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#C8963E]" />}
                </Link>
              );
            })}
          </div>

          {/* Currency Switcher on Mobile */}
          <div className="pt-2 border-t border-[#F5EDE0]/10 flex items-center justify-between px-3">
            <span className="text-xs text-[#F5EDE0]/70">Display Currency:</span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setCurrency('USD')}
                className={`px-3 py-1 rounded text-xs font-semibold ${
                  currency === 'USD' ? 'bg-[#C8963E] text-[#14281C]' : 'bg-[#1F3D2B] text-[#F5EDE0]'
                }`}
              >
                USD ($)
              </button>
              <button
                type="button"
                onClick={() => setCurrency('KES')}
                className={`px-3 py-1 rounded text-xs font-semibold ${
                  currency === 'KES' ? 'bg-[#C8963E] text-[#14281C]' : 'bg-[#1F3D2B] text-[#F5EDE0]'
                }`}
              >
                KES (KSh)
              </button>
            </div>
          </div>

          <div className="pt-3 border-t border-[#F5EDE0]/10 flex flex-col gap-2.5">
            <Link
              to="/contact"
              className="w-full text-center py-3 rounded bg-[#C8963E] text-[#14281C] font-semibold text-sm shadow-md"
            >
              Plan My Safari
            </Link>
            <a
              href={`https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(siteConfig.hero.whatsappPrefill)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 rounded bg-[#25D366] text-white font-semibold text-sm hover:bg-[#20ba59] transition-colors"
            >
              WhatsApp Us: {siteConfig.brand.whatsappDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
