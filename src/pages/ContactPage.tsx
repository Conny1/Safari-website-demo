import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  AlertCircle,
  Sparkles,
  CreditCard,
  Copy,
  ExternalLink
} from 'lucide-react';
import { siteConfig } from '../siteConfig';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const prefilledPackage = searchParams.get('package') || '';
  const prefilledMonth = searchParams.get('month') || '';

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [travelDates, setTravelDates] = useState(
    prefilledMonth ? `${prefilledMonth} 2026/2027` : ''
  );
  const [duration, setDuration] = useState('3-5 Days');
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const [budgetStyle, setBudgetStyle] = useState('Comfort Tented (Mid-range)');
  const [destinations, setDestinations] = useState<string[]>(
    prefilledPackage ? [prefilledPackage] : ['Maasai Mara']
  );
  const [message, setMessage] = useState(
    prefilledPackage
      ? `I am interested in customizing the ${prefilledPackage}. Please let me know available dates and lodge options.`
      : ''
  );

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedText, setCopiedText] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const destinationOptions = [
    'Maasai Mara National Reserve',
    'Amboseli National Park (Kilimanjaro)',
    'Lake Nakuru & Great Rift Valley',
    'Samburu & Ol Pejeta Chimpanzees',
    'Lake Naivasha & Hell’s Gate',
    'Diani Beach Coastal Extension',
  ];

  const handleToggleDestination = (dest: string) => {
    if (destinations.includes(dest)) {
      setDestinations(destinations.filter((d) => d !== dest));
    } else {
      setDestinations([...destinations, dest]);
    }
  };

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email))
      errs.email = 'Please provide a valid email address';
    if (!phone.trim())
      errs.phone = 'Please provide a contact phone or WhatsApp number';
    if (destinations.length === 0)
      errs.destinations = 'Please select at least one destination';
    return errs;
  };

  const generateWhatsappMessage = () => {
    return `*🦁 KIFARU TRAILS SAFARI ENQUIRY*
----------------------------
*Name:* ${fullName}
*Email:* ${email}
*Phone / WhatsApp:* ${phone}
*Proposed Travel Dates:* ${travelDates || 'Flexible'}
*Duration:* ${duration}
*Travelers:* ${adults} Adults, ${children} Children
*Destinations:* ${destinations.join(', ')}
*Comfort Level:* ${budgetStyle}
*Special Wishes / Message:*
${message || 'Standard wildlife itinerary requested.'}
----------------------------
(Sent via Kifaru Trails Safaris Website)`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitted(true);

    const formattedMessage = generateWhatsappMessage();
    const waUrl = `https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(
      formattedMessage
    )}`;

    // Open WhatsApp in a new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const copySummaryToClipboard = () => {
    const text = generateWhatsappMessage();
    navigator.clipboard.writeText(text);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 3000);
  };

  return (
    <div className="bg-[#FAF5ED] min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-[#14281C] text-white py-16 sm:py-20 border-b border-[#C8963E]/30 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C8963E] font-bold">
              <MessageCircle className="w-4 h-4" />
              <span>Karen, Nairobi Operations Desk</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              Let's Craft Your Kenyan Safari
            </h1>

            <p className="text-sm sm:text-lg text-[#F5EDE0]/85 leading-relaxed font-light">
              Submit your dates and wishlist below. Our senior safari planners will review your request and send a tailored day-by-day proposal directly to your WhatsApp or email within 12 hours.
            </p>

            {/* Above the fold instant contact pills */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold">
              <a
                href={`tel:${siteConfig.brand.phoneRaw}`}
                className="flex items-center gap-2 bg-[#1F3D2B] px-4 py-2.5 rounded-lg border border-[#C8963E]/40 hover:bg-[#C8963E] hover:text-[#14281C] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C8963E]" />
                <span>Call Us: {siteConfig.brand.phone}</span>
              </a>
              <a
                href={`https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(
                  siteConfig.hero.whatsappPrefill
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] px-4 py-2.5 rounded-lg text-white hover:bg-[#20ba59] transition-colors shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Desk: {siteConfig.brand.whatsappDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Main Form & Contact Info Grid */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl border border-stone-200">
              
              <div className="mb-8">
                <span className="text-xs font-bold text-[#B5532F] uppercase tracking-wider">
                  Safari Enquiry Form
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1F3D2B] mt-1">
                  Tell Us About Your Dream Trip
                </h2>
                <p className="text-xs sm:text-sm text-stone-500 mt-1">
                  Submitting this form connects you directly with our guide on WhatsApp with all details pre-filled.
                </p>
              </div>

              {isSubmitted ? (
                <div className="bg-[#1F3D2B] text-white p-6 sm:p-8 rounded-2xl border border-[#C8963E]/40 space-y-5 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center">
                    <CheckCircle className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-white">
                      Enquiry Generated Successfully!
                    </h3>
                    <p className="text-sm text-[#F5EDE0]/80 mt-1 leading-relaxed">
                      We have prepared your customized safari request. A WhatsApp chat with our Nairobi office has been launched.
                    </p>
                  </div>

                  <div className="bg-[#14281C] p-4 rounded-xl border border-[#C8963E]/20 text-xs text-stone-300 space-y-2">
                    <div className="font-bold text-[#C8963E]">Summary for: {fullName}</div>
                    <div>Travel Dates: {travelDates || 'Flexible'} ({duration})</div>
                    <div>Travelers: {adults} Adults, {children} Children</div>
                    <div>Destinations: {destinations.join(', ')}</div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={`https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(
                        generateWhatsappMessage()
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold flex items-center gap-2 shadow-md"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Re-open WhatsApp Chat</span>
                    </a>
                    <button
                      type="button"
                      onClick={copySummaryToClipboard}
                      className="px-4 py-2.5 rounded-lg bg-[#FAF5ED] text-[#14281C] text-xs font-semibold hover:bg-white flex items-center gap-2"
                    >
                      <Copy className="w-4 h-4" />
                      <span>{copiedText ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs text-[#C8963E] hover:underline"
                    >
                      Edit Details
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-900 focus:ring-2 focus:ring-[#C8963E] outline-none transition-all ${
                          errors.fullName ? 'border-rose-500 bg-rose-50/20' : 'border-stone-300 bg-stone-50/50'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. sarah@example.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-900 focus:ring-2 focus:ring-[#C8963E] outline-none transition-all ${
                          errors.email ? 'border-rose-500 bg-rose-50/20' : 'border-stone-300 bg-stone-50/50'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Phone & Travel Dates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp Number *
                      </label>
                      <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +1 555 123 4567 or +254 7..."
                        className={`w-full px-4 py-3 rounded-xl border text-sm text-stone-900 focus:ring-2 focus:ring-[#C8963E] outline-none transition-all ${
                          errors.phone ? 'border-rose-500 bg-rose-50/20' : 'border-stone-300 bg-stone-50/50'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Estimated Travel Dates
                      </label>
                      <input
                        type="text"
                        value={travelDates}
                        onChange={(e) => setTravelDates(e.target.value)}
                        placeholder="e.g. July 2026 or 15–22 August"
                        className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-stone-50/50 text-sm text-stone-900 focus:ring-2 focus:ring-[#C8963E] outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Duration, Adults & Children */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Duration
                      </label>
                      <select
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                        className="w-full px-3 py-3 rounded-xl border border-stone-300 bg-stone-50/50 text-sm text-stone-900 focus:ring-2 focus:ring-[#C8963E] outline-none"
                      >
                        <option value="1-2 Days (Quick Escape)">1-2 Days (Quick Escape)</option>
                        <option value="3-5 Days (Classic)">3-5 Days (Classic)</option>
                        <option value="6-8 Days (Circuit)">6-8 Days (Circuit)</option>
                        <option value="9+ Days (Grand Circuit + Coast)">9+ Days (Grand Safari)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Adult Travelers
                      </label>
                      <select
                        value={adults}
                        onChange={(e) => setAdults(e.target.value)}
                        className="w-full px-3 py-3 rounded-xl border border-stone-300 bg-stone-50/50 text-sm text-stone-900 focus:ring-2 focus:ring-[#C8963E] outline-none"
                      >
                        <option value="1">1 Adult (Solo)</option>
                        <option value="2">2 Adults (Couple)</option>
                        <option value="3">3 Adults</option>
                        <option value="4">4 Adults</option>
                        <option value="5">5 Adults</option>
                        <option value="6+">6+ Adults (Group)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                        Children (Under 12)
                      </label>
                      <select
                        value={children}
                        onChange={(e) => setChildren(e.target.value)}
                        className="w-full px-3 py-3 rounded-xl border border-stone-300 bg-stone-50/50 text-sm text-stone-900 focus:ring-2 focus:ring-[#C8963E] outline-none"
                      >
                        <option value="0">0 Children</option>
                        <option value="1">1 Child</option>
                        <option value="2">2 Children</option>
                        <option value="3+">3+ Children</option>
                      </select>
                    </div>
                  </div>

                  {/* Destinations Checklist */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                      Destinations of Interest *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {destinationOptions.map((dest) => {
                        const checked = destinations.includes(dest);
                        return (
                          <button
                            type="button"
                            key={dest}
                            onClick={() => handleToggleDestination(dest)}
                            className={`p-3 rounded-xl text-left text-xs font-semibold flex items-center justify-between border transition-all ${
                              checked
                                ? 'bg-[#1F3D2B] text-white border-[#C8963E] shadow-xs'
                                : 'bg-stone-50 text-stone-700 border-stone-200 hover:bg-stone-100'
                            }`}
                          >
                            <span>{dest}</span>
                            <span
                              className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${
                                checked ? 'bg-[#C8963E] text-[#14281C] font-bold' : 'border border-stone-300'
                              }`}
                            >
                              {checked ? '✓' : ''}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    {errors.destinations && (
                      <p className="text-xs text-rose-600 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.destinations}</span>
                      </p>
                    )}
                  </div>

                  {/* Budget / Accommodation style */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Accommodation Style & Comfort Preference
                    </label>
                    <select
                      value={budgetStyle}
                      onChange={(e) => setBudgetStyle(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-stone-50/50 text-sm text-stone-900 focus:ring-2 focus:ring-[#C8963E] outline-none"
                    >
                      <option value="Comfort Tented (Mid-range, authentic bush camps)">
                        Comfort Tented (Mid-range, authentic bush camps)
                      </option>
                      <option value="Luxury Eco-Lodge (4-5 Star luxury tented suites)">
                        Luxury Eco-Lodge (4-5 Star luxury tented suites)
                      </option>
                      <option value="Premier Ultra-Luxe (Private plunge pools, vintage colonial grandeur)">
                        Premier Ultra-Luxe (Private plunge pools, high-end lodges)
                      </option>
                      <option value="Resident / Family Package (Best value for Kenya & EA residents)">
                        Resident / Family Package (Best value for EA residents)
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                      Special Wishes, Target Animals or Questions
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="e.g. We love birdwatching, want to witness Mara river crossings, or need vegetarian meals..."
                      className="w-full px-4 py-3 rounded-xl border border-stone-300 bg-stone-50/50 text-sm text-stone-900 focus:ring-2 focus:ring-[#C8963E] outline-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#C8963E] hover:bg-[#d6a54f] text-[#14281C] font-bold text-base transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 focus-visible:ring-4 focus-visible:ring-[#C8963E]"
                    >
                      <Send className="w-4 h-4 stroke-[2.5]" />
                      <span>Send Enquiry & Open WhatsApp Chat</span>
                    </button>
                    <p className="text-center text-xs text-stone-500 mt-2.5">
                      Direct connection to senior guide. No obligation, 100% free consultation.
                    </p>
                  </div>

                </form>
              )}

            </div>
          </div>

          {/* Right Column: Office Contacts, Address & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Nairobi Headquarters Card */}
            <div className="bg-[#14281C] text-white p-7 rounded-2xl border border-[#C8963E]/30 shadow-xl space-y-5">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#C8963E] font-bold">
                  Nairobi Headquarters
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mt-1">
                  Kifaru Trails Safaris Ltd
                </h3>
              </div>

              <div className="space-y-4 text-sm text-[#F5EDE0]/85">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C8963E] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Physical Address:</div>
                    <address className="not-italic text-stone-300 text-xs sm:text-sm mt-0.5">
                      {siteConfig.brand.address.building}<br />
                      {siteConfig.brand.address.street}<br />
                      {siteConfig.brand.address.area}, {siteConfig.brand.address.city}, {siteConfig.brand.address.country}<br />
                      <span className="text-stone-400">{siteConfig.brand.address.poBox}</span>
                    </address>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <Phone className="w-5 h-5 text-[#C8963E] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Direct Phone Lines:</div>
                    <a
                      href={`tel:${siteConfig.brand.phoneRaw}`}
                      className="block text-xs sm:text-sm text-[#C8963E] hover:underline font-medium"
                    >
                      {siteConfig.brand.phone} (Office Hours)
                    </a>
                    <div className="text-xs text-stone-400 mt-0.5">
                      24/7 Duty Emergency: {siteConfig.brand.emergencyContact}
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <Mail className="w-5 h-5 text-[#C8963E] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Email Communications:</div>
                    <a
                      href={`mailto:${siteConfig.brand.email}`}
                      className="block text-xs sm:text-sm text-stone-300 hover:text-white"
                    >
                      {siteConfig.brand.email}
                    </a>
                    <a
                      href={`mailto:${siteConfig.brand.bookingEmail}`}
                      className="block text-xs text-stone-400 hover:text-white"
                    >
                      {siteConfig.brand.bookingEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-1 border-t border-[#F5EDE0]/10">
                  <Clock className="w-5 h-5 text-[#C8963E] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-white">Office Hours (East Africa Time):</div>
                    <div className="text-xs text-stone-300 mt-1 space-y-1">
                      {siteConfig.brand.hours.map((h, i) => (
                        <div key={i}>
                          <span className="text-stone-400">{h.days}:</span> {h.time}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action in card */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(
                    siteConfig.hero.whatsappPrefill
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat Immediately on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map Placeholder */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-stone-200">
              <div className="p-4 bg-stone-50 border-b border-stone-200 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1F3D2B]">
                  <MapPin className="w-4 h-4 text-[#B5532F]" />
                  <span>Karen, Nairobi Office Map</span>
                </div>
                <span className="text-[11px] text-stone-500">The Hub Annex, Nairobi</span>
              </div>
              <div className="relative h-64 w-full bg-stone-100">
                <iframe
                  title="Kifaru Trails Safaris Nairobi Office Location"
                  src={siteConfig.brand.address.googleMapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Comprehensive FAQ Accordion Section */}
      <section className="py-16 bg-white border-t border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#B5532F] font-bold">
              Frequently Asked Questions
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#1F3D2B]">
              Everything You Need to Know Before You Fly
            </h2>
            <p className="text-sm text-stone-600">
              Clear answers regarding payments in KES & card, packing tips, medical cover, and cancellations.
            </p>
          </div>

          <div className="space-y-3">
            {siteConfig.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-stone-200 rounded-xl overflow-hidden shadow-xs bg-[#FAF5ED]"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-5 flex items-center justify-between bg-white hover:bg-[#FAF5ED]/50 transition-colors"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 pr-4">
                      <HelpCircle className="w-5 h-5 text-[#C8963E] shrink-0" />
                      <span className="font-serif font-bold text-stone-900 text-sm sm:text-base">
                        {faq.question}
                      </span>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-stone-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-stone-500 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="p-5 text-sm text-stone-700 leading-relaxed border-t border-stone-100 bg-[#FAF5ED]">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="bg-[#1F3D2B]/5 p-6 rounded-2xl border border-[#1F3D2B]/15 text-center space-y-3">
            <h4 className="font-serif text-lg font-bold text-[#1F3D2B]">
              Have a question not listed here?
            </h4>
            <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto">
              Our Nairobi team answers all WhatsApp inquiries within minutes during East Africa business hours.
            </p>
            <a
              href={`https://wa.me/${siteConfig.brand.whatsappNumber}?text=${encodeURIComponent(
                "Hello Kifaru Trails! I have a question about planning my Kenya safari."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold shadow-md"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Ask Our Team on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
