import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, ShieldCheck, Compass, HeartHandshake } from 'lucide-react';
import { siteConfig } from '../siteConfig';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#14281C] text-[#F5EDE0] border-t border-[#C8963E]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-[#F5EDE0]/10">
          
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#C8963E] flex items-center justify-center text-[#14281C]">
                <Compass className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white">
                {siteConfig.brand.name}
              </span>
            </div>
            <p className="text-sm text-[#F5EDE0]/80 leading-relaxed">
              {siteConfig.brand.tagline} {siteConfig.brand.subTagline}
            </p>
            <div className="pt-2">
              <div className="flex items-center gap-2 text-xs text-[#C8963E] font-medium">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>KATO Member FE/489 · TRA Regulated</span>
              </div>
              <p className="text-xs text-[#F5EDE0]/60 mt-1">
                Bonded financial protection for all client advance deposits.
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links & Safaris */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-[#C8963E]/30 pb-2 inline-block">
              Explore Kenya
            </h3>
            <ul className="space-y-2 text-sm text-[#F5EDE0]/80">
              {siteConfig.navigation.map((nav) => (
                <li key={nav.path}>
                  <Link
                    to={nav.path}
                    className="hover:text-[#C8963E] transition-colors flex items-center gap-2 focus-visible:ring-1 focus-visible:ring-[#C8963E] rounded"
                  >
                    <span className="text-[#C8963E] text-xs">›</span>
                    <span>{nav.name}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/packages" className="hover:text-[#C8963E] transition-colors flex items-center gap-2">
                  <span className="text-[#C8963E] text-xs">›</span>
                  <span>Maasai Mara Great Migration</span>
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-[#C8963E] transition-colors flex items-center gap-2">
                  <span className="text-[#C8963E] text-xs">›</span>
                  <span>Amboseli Elephant Sanctuary</span>
                </Link>
              </li>
              <li>
                <Link to="/packages" className="hover:text-[#C8963E] transition-colors flex items-center gap-2">
                  <span className="text-[#C8963E] text-xs">›</span>
                  <span>Diani Beach Bush-to-Coast</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Nairobi Office & Hours */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-[#C8963E]/30 pb-2 inline-block">
              Nairobi Office & Hours
            </h3>
            <div className="space-y-3 text-sm text-[#F5EDE0]/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8963E] shrink-0 mt-1" />
                <address className="not-italic leading-relaxed text-xs sm:text-sm">
                  {siteConfig.brand.address.building}<br />
                  {siteConfig.brand.address.street}<br />
                  {siteConfig.brand.address.area}, {siteConfig.brand.address.city}, {siteConfig.brand.address.country}
                </address>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-[#C8963E] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  {siteConfig.brand.hours.map((h, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="font-medium text-white">{h.days}:</span>
                      <span className="text-[#F5EDE0]/70">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Direct Contacts & 24/7 Ops */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-semibold text-white tracking-wide border-b border-[#C8963E]/30 pb-2 inline-block">
              Speak to a Naturalist
            </h3>
            <div className="space-y-2.5 text-sm">
              <a
                href={`tel:${siteConfig.brand.phoneRaw}`}
                className="flex items-center gap-2.5 text-[#F5EDE0] hover:text-[#C8963E] transition-colors p-2 bg-[#1F3D2B]/80 rounded border border-[#C8963E]/20"
              >
                <Phone className="w-4 h-4 text-[#C8963E]" />
                <div>
                  <div className="text-[11px] text-[#F5EDE0]/60">Call Office Desk</div>
                  <div className="font-semibold text-xs sm:text-sm">{siteConfig.brand.phone}</div>
                </div>
              </a>

              <a
                href={`https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(siteConfig.hero.whatsappPrefill)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[#F5EDE0] hover:text-[#C8963E] transition-colors p-2 bg-[#1F3D2B]/80 rounded border border-[#C8963E]/20"
              >
                <div className="w-4 h-4 rounded-full bg-[#25D366] flex items-center justify-center text-white text-[10px] font-bold">W</div>
                <div>
                  <div className="text-[11px] text-[#F5EDE0]/60">Instant WhatsApp Chat</div>
                  <div className="font-semibold text-xs sm:text-sm">{siteConfig.brand.whatsappDisplay}</div>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.brand.email}`}
                className="flex items-center gap-2.5 text-[#F5EDE0] hover:text-[#C8963E] transition-colors p-2 bg-[#1F3D2B]/80 rounded border border-[#C8963E]/20"
              >
                <Mail className="w-4 h-4 text-[#C8963E]" />
                <div>
                  <div className="text-[11px] text-[#F5EDE0]/60">Enquiries & Quotations</div>
                  <div className="font-semibold text-xs truncate">{siteConfig.brand.email}</div>
                </div>
              </a>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <span className="text-xs text-[#F5EDE0]/60 shrink-0">Connect:</span>
              <div className="flex flex-wrap gap-1.5">
                {siteConfig.brand.socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded bg-[#1F3D2B] text-xs text-[#C8963E] hover:bg-[#C8963E] hover:text-[#14281C] transition-colors font-medium border border-[#C8963E]/20 shrink-0"
                  >
                    {s.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Website by Darnoc credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#F5EDE0]/60 gap-4">
          <div className="flex flex-wrap items-center gap-2 text-center sm:text-left">
            <span>© {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.</span>
            <span>·</span>
            <span>Nairobi, Republic of Kenya</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1 text-[#C8963E]">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Eco-Tourism Gold Certified</span>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span>Crafted with pride in Kenya</span>
            <span>·</span>
            <a
              href={siteConfig.brand.credit.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C8963E] hover:underline font-semibold hover:text-white transition-colors"
            >
              {siteConfig.brand.credit.text}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
