import React from 'react';
import { ShieldCheck, Compass, Heart, Users, CheckCircle, Truck, Award, Globe, Leaf } from 'lucide-react';
import { siteConfig } from '../siteConfig';

export const AboutPage: React.FC = () => {
  const { about, brand } = siteConfig;

  return (
    <div className="bg-[#FAF5ED] min-h-screen">
      {/* 1. Page Header */}
      <section className="bg-[#14281C] text-white py-16 sm:py-20 border-b border-[#C8963E]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C8963E] font-bold">
              <Compass className="w-4 h-4" />
              <span>Family-Run Since 2014</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Guardians of the Wild Kenyan Frontier
            </h1>

            <p className="text-sm sm:text-lg text-[#F5EDE0]/85 leading-relaxed font-light">
              We are a boutique, independent safari house based in Karen, Nairobi. Founded by veteran Kenyan naturalists who believe wildlife tourism must be intimate, slow-paced, and deeply ethical.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Founder Story Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#C8963E]/40">
              <img
                src={about.founderImage}
                alt={about.founderName}
                className="w-full h-auto object-cover max-h-[550px]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#14281C] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="inline-flex items-center gap-1.5 bg-[#C8963E] text-[#14281C] px-2.5 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider mb-2">
                  <span>🇰🇪 Native Kenyan Naturalist</span>
                </div>
                <div className="text-xs uppercase tracking-wider text-[#C8963E] font-bold">
                  {about.founderRole}
                </div>
                <div className="font-serif text-2xl font-bold">
                  {about.founderName}
                </div>
                <div className="text-xs text-[#F5EDE0]/80 mt-0.5">
                  Roots: Narok County & Maasai Mara
                </div>
              </div>
            </div>

            <div className="mt-4 bg-[#1F3D2B] text-white p-5 rounded-xl border border-[#C8963E]/30 shadow-lg text-xs italic text-[#F5EDE0]/90">
              {about.founderQuote}
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="text-xs uppercase tracking-widest text-[#B5532F] font-bold">
              {about.founderTitle}
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F3D2B] leading-snug">
              {about.founderHeadline}
            </h2>

            <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
              {about.founderStory.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Licences Badges Grid */}
            <div className="pt-6 border-t border-stone-200">
              <div className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-4">
                Official Certifications & Memberships
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {brand.licenses.map((lic, i) => (
                  <div
                    key={i}
                    className="bg-white p-3.5 rounded-xl border border-stone-200 text-center shadow-xs flex flex-col justify-between"
                  >
                    <Award className="w-5 h-5 text-[#C8963E] mx-auto mb-1.5" />
                    <div className="font-bold text-xs text-[#1F3D2B]">{lic.name}</div>
                    <div className="text-[10px] text-[#B5532F] font-semibold mt-0.5">{lic.code}</div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Expedition Vehicle Fleet Section */}
      <section className="py-20 bg-[#1F3D2B] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-[#C8963E] font-bold">
                Field Engineering
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                {about.fleetTitle}
              </h2>
              <div className="text-sm font-semibold text-[#C8963E]">
                {about.fleetSubtitle}
              </div>
              <p className="text-sm sm:text-base text-[#F5EDE0]/80 leading-relaxed">
                {about.fleetDescription}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {about.fleetFeatures.map((feat, idx) => (
                  <div
                    key={idx}
                    className="bg-[#14281C] p-4 rounded-xl border border-[#C8963E]/20 space-y-1.5"
                  >
                    <div className="font-bold text-sm text-[#C8963E] flex items-center gap-1.5">
                      <Truck className="w-4 h-4 text-[#C8963E] shrink-0" />
                      <span>{feat.title}</span>
                    </div>
                    <p className="text-xs text-[#F5EDE0]/75 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-[#C8963E]/40">
                <img
                  src={about.fleetImage}
                  alt="Kifaru Trails Custom 4x4 Land Cruiser in Mara"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Team Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest text-[#B5532F] font-bold">
            100% Native Kenyan Team
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F3D2B]">
            Meet Your Kenyan Expedition Leaders
          </h2>
          <p className="text-sm sm:text-base text-stone-600">
            Born and raised across the Maasai Mara, the Great Rift Valley, and the Swahili Coast. Our naturalists combine indigenous tracking heritage with certified Kenya Professional Safari Guides Association (KPSGA) expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {about.team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-stone-200 flex flex-col justify-between"
            >
              <div>
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-[#14281C]/90 text-[#C8963E] px-2.5 py-1 rounded text-[11px] font-bold border border-[#C8963E]/30">
                    {member.badge}
                  </div>
                  <div className="absolute bottom-3 left-3 bg-[#C8963E] text-[#14281C] px-2.5 py-0.5 rounded text-[10px] font-extrabold shadow-sm">
                    🇰🇪 {member.origin}
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="font-serif text-lg font-bold text-[#1F3D2B]">
                    {member.name}
                  </h3>
                  <div className="text-xs text-[#B5532F] font-semibold">
                    {member.role}
                  </div>
                  <div className="text-xs text-stone-500 font-medium">
                    Experience: {member.experience}
                  </div>
                  <p className="text-xs text-stone-600 pt-2 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-stone-100">
                <div className="text-[11px] text-stone-500 font-semibold mb-1">Languages Spoken:</div>
                <div className="flex flex-wrap gap-1">
                  {member.languages.map((lang, lIdx) => (
                    <span
                      key={lIdx}
                      className="bg-[#FAF5ED] text-[#1F3D2B] text-[10px] font-medium px-2 py-0.5 rounded border border-stone-200"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Sustainability & Community Section */}
      <section className="py-20 bg-[#FAF5ED] border-t border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-widest text-[#1F3D2B] font-bold flex items-center justify-center gap-1.5">
              <Leaf className="w-4 h-4 text-emerald-700" />
              <span>Responsible Tourism</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1F3D2B]">
              {about.sustainability.headline}
            </h2>
            <p className="text-sm sm:text-base text-stone-600">
              {about.sustainability.lead}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {about.sustainability.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-stone-200 shadow-sm space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center font-bold text-sm">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-xl font-bold text-[#1F3D2B]">
                  {pillar.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
