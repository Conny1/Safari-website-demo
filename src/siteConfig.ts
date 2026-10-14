export interface PackageItineraryDay {
  day: number;
  title: string;
  description: string;
  accommodation: string;
  meals: string;
}

export interface SafariPackage {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  durationDays: number;
  durationCategory: '1-3 Days' | '4-5 Days' | '6+ Days';
  destination: 'Maasai Mara' | 'Amboseli' | 'Rift Valley' | 'Circuit' | 'Coast';
  destinationLabel: string;
  priceUSD: number;
  priceKES: number;
  featured: boolean;
  heroImage: string;
  overview: string;
  highlights: string[];
  dayByDayItinerary: PackageItineraryDay[];
  inclusions: string[];
  exclusions: string[];
  bestTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  countryCode: string;
  flag: string;
  trip: string;
  date: string;
  rating: number;
  quote: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Wildlife' | 'Landscapes' | 'Camps' | 'Guests';
  location: string;
  imageUrl: string;
  caption: string;
}

export interface TeamMember {
  name: string;
  role: string;
  badge: string;
  origin: string;
  languages: string[];
  experience: string;
  image: string;
  bio: string;
}

export interface SeasonalMonth {
  month: string;
  short: string;
  season: 'Peak' | 'High' | 'Green / Emerald';
  highlights: string;
  weather: string;
  rating: 1 | 2 | 3; // 3 = Top, 2 = Great, 1 = Good
}

export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    subTagline: string;
    foundedYear: number;
    phone: string;
    phoneRaw: string;
    whatsappNumber: string;
    whatsappDisplay: string;
    email: string;
    bookingEmail: string;
    emergencyContact: string;
    address: {
      building: string;
      street: string;
      area: string;
      city: string;
      country: string;
      poBox: string;
      googleMapsEmbedUrl: string;
      coordinates: { lat: number; lng: number };
    };
    hours: Array<{ days: string; time: string }>;
    licenses: Array<{ name: string; code: string; label: string }>;
    trustStats: Array<{ value: string; label: string; subtext: string }>;
    currency: {
      usdToKesRate: number;
      defaultCurrency: 'USD' | 'KES';
    };
    socialLinks: Array<{ name: string; url: string; handle: string }>;
    credit: {
      text: string;
      author: string;
      url: string;
    };
    themeColors: {
      forestGreen: string;
      savannaGold: string;
      warmSand: string;
      charcoal: string;
      terracotta: string;
    };
  };
  navigation: Array<{ name: string; path: string }>;
  hero: {
    badge: string;
    heading: string;
    headingAccent: string;
    description: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    whatsappPrefill: string;
    backgroundImage: string;
  };
  whyChooseUs: Array<{
    title: string;
    subtitle: string;
    description: string;
    icon: string;
  }>;
  bookingSteps: Array<{
    step: string;
    title: string;
    description: string;
  }>;
  packages: SafariPackage[];
  testimonials: Testimonial[];
  galleryItems: GalleryItem[];
  about: {
    founderTitle: string;
    founderHeadline: string;
    founderStory: string[];
    founderQuote: string;
    founderName: string;
    founderRole: string;
    founderImage: string;
    fleetTitle: string;
    fleetSubtitle: string;
    fleetDescription: string;
    fleetFeatures: Array<{ title: string; desc: string }>;
    fleetImage: string;
    team: TeamMember[];
    sustainability: {
      headline: string;
      lead: string;
      pillars: Array<{ title: string; description: string }>;
    };
  };
  faqs: Array<{ question: string; answer: string; category: string }>;
  seasonalCalendar: SeasonalMonth[];
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "Kifaru Trails Safaris",
    tagline: "Wild Kenya, Done Properly.",
    subTagline: "Family-run, bespoke Kenyan wildlife journeys led by senior KPSGA guides. Unhurried game drives, handpicked eco-camps, and guaranteed window seats in private 4x4 Land Cruisers.",
    foundedYear: 2014,
    phone: "+254 722 894 510",
    phoneRaw: "+254722894510",
    whatsappNumber: "+254722894510",
    whatsappDisplay: "+254 722 894 510",
    email: "info@kifarutrails.co.ke",
    bookingEmail: "reservations@kifarutrails.co.ke",
    emergencyContact: "+254 733 410 920 (24/7 Operations Room, Nairobi)",
    address: {
      building: "The Hub Annex, Suite 4B",
      street: "Karen Plains Road, off Dagoretti Road",
      area: "Karen",
      city: "Nairobi",
      country: "Kenya",
      poBox: "P.O. Box 48210 - 00502 Karen, Nairobi",
      googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7533816694087!2d36.70425837583685!3d-1.323863435948316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1b4737d2f347%3A0xe543e24483ee18a7!2sKaren%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1700000000000!5m2!1sen!2ske",
      coordinates: { lat: -1.3197, lng: 36.7065 },
    },
    hours: [
      { days: "Monday – Friday", time: "8:00 AM – 6:00 PM EAT" },
      { days: "Saturday", time: "9:00 AM – 2:00 PM EAT" },
      { days: "Sunday & Out of Office", time: "24/7 On-Call Support for En-Route Guests" },
    ],
    licenses: [
      { name: "KATO Bonded", code: "Member No. FE/489", label: "Kenya Association of Tour Operators - Bonded Tier A" },
      { name: "TRA Licensed", code: "TRA/TO/2026/0411", label: "Tourism Regulatory Authority of Kenya" },
      { name: "Eco-Tourism Kenya", code: "Gold Eco-Rating", label: "Certified Sustainable Safari Operator" },
      { name: "KPSGA Certified", code: "Senior Level Guides", label: "Kenya Professional Safari Guides Association" },
    ],
    trustStats: [
      { value: "10+ Years", label: "Wilderness Mastery", subtext: "Family-owned & based in Nairobi" },
      { value: "1,200+", label: "Happy Travelers", subtext: "Across 42 international countries" },
      { value: "100%", label: "Private 4x4 Fleet", subtext: "Custom safari Land Cruisers only" },
      { value: "4.9 / 5", label: "Guest Satisfaction", subtext: "Verified independent reviews" },
    ],
    currency: {
      usdToKesRate: 130, // 1 USD = 130 KES
      defaultCurrency: "USD",
    },
    socialLinks: [
      { name: "Instagram", url: "https://instagram.com", handle: "@kifarutrails" },
      { name: "Facebook", url: "https://facebook.com", handle: "Kifaru Trails Safaris" },
      { name: "TripAdvisor", url: "https://tripadvisor.com", handle: "Kifaru Trails Safaris Nairobi" },
      { name: "WhatsApp", url: "https://wa.me/254722894510", handle: "+254 722 894 510" },
    ],
    credit: {
      text: "Website by Darnoc",
      author: "Darnoc",
      url: "https://darnoc.agency",
    },
    themeColors: {
      forestGreen: "#1F3D2B",
      savannaGold: "#C8963E",
      warmSand: "#F5EDE0",
      charcoal: "#1E1E1C",
      terracotta: "#B5532F",
    },
  },

  navigation: [
    { name: "Home", path: "/" },
    { name: "Safaris & Packages", path: "/packages" },
    { name: "Gallery", path: "/gallery" },
    { name: "About Us", path: "/about" },
    { name: "Contact & Enquiry", path: "/contact" },
  ],

  hero: {
    badge: "Official KATO Member · Nairobi, Kenya",
    heading: "Wild Kenya,",
    headingAccent: "Done Properly.",
    description: "Forget rushed tourist vans and cookie-cutter circuits. We hand-craft immersive, private 4x4 safaris through Kenya's wildest landscapes — led by master local naturalists.",
    primaryCtaText: "Plan My Safari",
    secondaryCtaText: "WhatsApp Our Guides",
    whatsappPrefill: "Hello Kifaru Trails! I would like to plan a bespoke safari in Kenya. Could you provide advice on dates and routes?",
    backgroundImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=2000&q=85",
  },

  whyChooseUs: [
    {
      title: "Silver & Gold KPSGA Guides",
      subtitle: "Lifelong naturalists, not just drivers",
      description: "Our guides grew up tracking wildlife in the Mara and Amboseli. They read animal behaviour, anticipate crossings, and position vehicles for optimal light.",
      icon: "Compass",
    },
    {
      title: "100% Private 4x4 Land Cruisers",
      subtitle: "Never shared with strangers",
      description: "Custom-modified Toyota Land Cruisers with full pop-up photographic roofs, 220V camera inverter chargers, iced refreshment boxes, and guaranteed window seats.",
      icon: "ShieldCheck",
    },
    {
      title: "Transparent Pricing in KES & USD",
      subtitle: "Direct local operator rates",
      description: "No hidden middleman markup, no surprise park entrance surcharges, and direct local M-Pesa or secure card checkout options for resident and international guests.",
      icon: "Coins",
    },
    {
      title: "24/7 Ground Ops & Flying Doctors",
      subtitle: "Round-the-clock safety net",
      description: "Every passenger is automatically enrolled in AMREF Flying Doctor Emergency Evacuation Cover, with 24/7 logistical dispatch tracking from our Karen operations desk.",
      icon: "HeartPulse",
    },
  ],

  bookingSteps: [
    {
      step: "01",
      title: "Share Your Vision",
      description: "Tell us your travel dates, target wildlife (e.g. Mara river crossings or Kilimanjaro tuskers), travelling style, and preferred pace.",
    },
    {
      step: "02",
      title: "Tailor Your Itinerary",
      description: "Within 24 hours, our safari planner crafts a detailed day-by-day proposal with hand-selected eco-lodges, private 4x4 logistics, and transparent costs.",
    },
    {
      step: "03",
      title: "Arrive in Nairobi & Explore",
      description: "Your private guide greets you at Jomo Kenyatta International Airport (NBO) or your hotel. Step into your Land Cruiser and begin your wilderness chapter.",
    },
  ],

  packages: [
    {
      id: "mara-classic-3d",
      slug: "3-day-maasai-mara-classic",
      title: "3-Day Maasai Mara Classic Safari",
      subtitle: "The world's premier big cat kingdom in intimate, unhurried detail",
      duration: "3 Days / 2 Nights",
      durationDays: 3,
      durationCategory: "1-3 Days",
      destination: "Maasai Mara",
      destinationLabel: "Maasai Mara National Reserve",
      priceUSD: 890,
      priceKES: 115700,
      featured: true,
      heroImage: "https://images.unsplash.com/photo-1547970810-dc1eac8161a7?auto=format&fit=crop&w=1200&q=80",
      overview: "Ideal for short getaways, photographers, or weekend bush escapes. Experience concentrated predator action across the open Mara savannahs, Mara River pods, and sweeping acacia landscapes with luxury tented accommodation.",
      highlights: [
        "High-density lion prides and cheetah coalitions on the Talek Plains",
        "Hippos and giant Nile crocodiles basking along the Mara River",
        "Sunset sundowners overlooking the golden escarpment",
        "Stay at eco-certified intimate tented camp inside or bordering the reserve",
      ],
      dayByDayItinerary: [
        {
          day: 1,
          title: "Nairobi to Maasai Mara via the Great Rift Valley",
          description: "Depart early from Nairobi, descending through the Great Rift Valley viewpoint with dramatic vistas. Arrive at your tented camp in time for lunch. Embark on your maiden afternoon game drive across the Mara grasslands tracking lions, elephants, and plains game as the sun sets.",
          accommodation: "Enkorok Mara Camp / Mara Bush Camp (Luxury Tented)",
          meals: "Lunch, Bush Sundowner, Dinner",
        },
        {
          day: 2,
          title: "Full Day Unrestricted Game Tracking in Maasai Mara",
          description: "Full day in the reserve with picnic lunch under an acacia shade tree. Track the Big Five, explore the Mara Riverbanks, observe zebra and wildebeest herds, and witness dramatic predator-prey dynamics with your seasoned guide.",
          accommodation: "Enkorok Mara Camp / Mara Bush Camp",
          meals: "Breakfast, Bush Picnic Lunch, Dinner",
        },
        {
          day: 3,
          title: "Sunrise Bush Drive & Return to Nairobi",
          description: "Early morning game drive to catch active leopards and hyenas at dawn. Return for a warm hot breakfast, pack up, and journey comfortably back to Nairobi, arriving late afternoon with airport or hotel drop-off.",
          accommodation: "Drop-off in Nairobi (Hotel or NBO Airport)",
          meals: "Breakfast",
        },
      ],
      inclusions: [
        "Exclusive use of private custom 4x4 Land Cruiser with pop-up roof",
        "Full board accommodation in high-comfort tented safari camps",
        "All Maasai Mara reserve entry fees and community conservation charges",
        "Services of a certified English-speaking KPSGA silver safari guide",
        "Unlimited bottled mineral drinking water in the vehicle",
        "AMREF Flying Doctors 24/7 medical evacuation coverage",
      ],
      exclusions: [
        "International airfare and Kenya electronic travel authorisations (eTA)",
        "Optional hot air balloon safari over the Mara with champagne breakfast ($450/person)",
        "Maasai cultural village visit fee ($25/person paid directly to the village)",
        "Premium alcoholic beverages and personal gratuities for guide and camp staff",
      ],
      bestTime: "Year-round; July to October for Great Migration; Jan–March for big cats & calving",
    },
    {
      id: "mara-nakuru-5d",
      slug: "5-day-mara-and-nakuru-odyssey",
      title: "5-Day Mara & Lake Nakuru Wildlife Odyssey",
      subtitle: "Rhino sanctuaries, flamingo shores, and endless lion territory",
      duration: "5 Days / 4 Nights",
      durationDays: 5,
      durationCategory: "4-5 Days",
      destination: "Circuit",
      destinationLabel: "Maasai Mara & Lake Nakuru",
      priceUSD: 1450,
      priceKES: 188500,
      featured: true,
      heroImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=80",
      overview: "Our most requested classic itinerary combining the rhino-rich sanctuary and birding paradise of Lake Nakuru with the world-renowned predator plains of the Maasai Mara.",
      highlights: [
        "Guaranteed black and white rhino sightings at Lake Nakuru National Park",
        "Endangered Rothschild's giraffes browsing along the fever-tree forest",
        "Three glorious nights in the Maasai Mara for exhaustive game tracking",
        "Scenic transit across the floor of the Great Rift Valley",
      ],
      dayByDayItinerary: [
        {
          day: 1,
          title: "Nairobi to Lake Nakuru National Park",
          description: "Drive northwest from Nairobi descending into the Rift Valley. Arrive at Lake Nakuru in time for lunch. Afternoon game drive skirting the alkaline lake, observing pelicans, cormorants, and tracking both endangered white and elusive black rhinos.",
          accommodation: "Sarova Lion Hill Game Lodge / Lake Nakuru Sopa",
          meals: "Lunch, Dinner",
        },
        {
          day: 2,
          title: "Lake Nakuru to Maasai Mara National Reserve",
          description: "Morning game drive past Baboon Cliff and Makalia Falls before continuing south toward Narok and into the rolling hills of the Maasai Mara. Sunset arrival at camp with fireside briefing.",
          accommodation: "Basecamp Explorer Mara / PrideInn Mara Camp",
          meals: "Breakfast, Lunch, Dinner",
        },
        {
          day: 3,
          title: "Maasai Mara - Plains Game & Predator Search",
          description: "Early morning and late afternoon game drives focusing on cheetah coalitions and lion prides. Optional mid-day lodge relaxation or visit to a community Maasai Manyatta.",
          accommodation: "Basecamp Explorer Mara / PrideInn Mara Camp",
          meals: "Breakfast, Lunch, Dinner",
        },
        {
          day: 4,
          title: "Maasai Mara - Mara River & Escarpment Safari",
          description: "Full day expedition to the Mara River bordering Tanzania's Serengeti. Observe dramatic hippo pods, sunbathing crocodiles, and vast herds of zebras and topis.",
          accommodation: "Basecamp Explorer Mara / PrideInn Mara Camp",
          meals: "Breakfast, Bush Lunch, Dinner",
        },
        {
          day: 5,
          title: "Dawn Safari & Return to Nairobi",
          description: "Farewell morning drive through the acacia woodlands. Depart after a hearty breakfast for Nairobi, pausing for scenic panoramas over Mt. Longonot.",
          accommodation: "Drop-off in Nairobi",
          meals: "Breakfast, Lunch en route",
        },
      ],
      inclusions: [
        "All park and conservancy conservation fees (Nakuru & Mara)",
        "Private 4x4 Land Cruiser with pop-up roof and dedicated guide",
        "4 nights full board accommodation in premier wildlife lodges/camps",
        "All game drives as indicated in the itinerary",
        "AMREF Flying Doctor emergency rescue cover",
      ],
      exclusions: [
        "Personal travel insurance",
        "Alcoholic drinks and sodas at lodges",
        "Tips for driver-guide and hotel personnel",
      ],
      bestTime: "June through October & December through March",
    },
    {
      id: "amboseli-4d",
      slug: "4-day-amboseli-kilimanjaro-views",
      title: "4-Day Amboseli Kilimanjaro Views & Big Tuskers",
      subtitle: "Iconic elephant herds set against Africa’s highest snow-capped peak",
      duration: "4 Days / 3 Nights",
      durationDays: 4,
      durationCategory: "4-5 Days",
      destination: "Amboseli",
      destinationLabel: "Amboseli National Park",
      priceUSD: 1180,
      priceKES: 153400,
      featured: true,
      heroImage: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80",
      overview: "Amboseli is famous for having the best views of Mount Kilimanjaro and being the sanctuary of the world's most documented elephant families. A photographer's absolute dream.",
      highlights: [
        "Unobstructed views of Mount Kilimanjaro at sunrise and golden hour",
        "Some of the largest free-ranging tusker elephant herds in East Africa",
        "Observation Hill viewpoint overlooking the Enkongo Narok marshlands",
        "Rich birdlife including saddle-billed storks, crowned cranes, and flamingos",
      ],
      dayByDayItinerary: [
        {
          day: 1,
          title: "Nairobi to Amboseli National Park",
          description: "Depart Nairobi via the Mombasa highway, turning through the acacia bushland of Emali. Arrive at Amboseli with towering Kilimanjaro dominating the southern horizon. Afternoon game drive in the dusty volcanic plains.",
          accommodation: "Kibo Safari Camp / Ol Tukai Lodge",
          meals: "Lunch, Dinner",
        },
        {
          day: 2,
          title: "Full Day with Amboseli's Giant Tuskers",
          description: "Dawn departure when Kilimanjaro's snowy peak is clearest before cloud cover gathers. Follow elephant herds entering the emerald marshlands, then ascend Observation Hill for panoramic picnic lunch.",
          accommodation: "Kibo Safari Camp / Ol Tukai Lodge",
          meals: "Breakfast, Picnic Lunch, Dinner",
        },
        {
          day: 3,
          title: "Lake Amboseli Bed & Marshes Exploration",
          description: "Explore the dry lake bed of Lake Amboseli with mirages and dust devils, moving towards the permanent springs where buffalo, hippos, and waterbucks graze in abundance.",
          accommodation: "Kibo Safari Camp / Ol Tukai Lodge",
          meals: "Breakfast, Lunch, Dinner",
        },
        {
          day: 4,
          title: "Sunrise Bush Drive & Return to Nairobi",
          description: "Final sunrise photoshoot with giraffes against the mountain silhouette. Check out and drive back to Nairobi, arriving in early afternoon.",
          accommodation: "Drop-off in Nairobi",
          meals: "Breakfast",
        },
      ],
      inclusions: [
        "Private 4x4 Land Cruiser with professional driver-guide",
        "3 nights accommodation with three meals daily",
        "Amboseli National Park entry permits",
        "Unlimited game drives within park hours",
        "Chilled drinking water and AMREF medical coverage",
      ],
      exclusions: [
        "Tips, laundry, and telephone calls",
        "Beverages not included in the standard meal plan",
      ],
      bestTime: "June to October and January to February (clearest Kilimanjaro views)",
    },
    {
      id: "grand-circuit-7d",
      slug: "7-day-grand-kenya-circuit",
      title: "7-Day Grand Kenya Circuit",
      subtitle: "The ultimate journey: Samburu, Ol Pejeta Chimpanzees & Maasai Mara",
      duration: "7 Days / 6 Nights",
      durationDays: 7,
      durationCategory: "6+ Days",
      destination: "Circuit",
      destinationLabel: "Samburu · Ol Pejeta · Maasai Mara",
      priceUSD: 2390,
      priceKES: 310700,
      featured: false,
      heroImage: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=1200&q=80",
      overview: "An expansive circuit traversing Kenya's rugged northern wilderness, the high-altitude wildlife haven of Ol Pejeta Conservancy (home to the last northern white rhinos), and culminating in the Maasai Mara.",
      highlights: [
        "The Samburu 'Special Five': Grevy's zebra, reticulated giraffe, Beisa oryx, Somali ostrich, and gerenuk",
        "Visit the world's last two remaining Northern White Rhinos at Ol Pejeta",
        "Sweetwaters Chimpanzee Sanctuary walk",
        "Three nights in the Maasai Mara covering both northern conservancies and the reserve",
      ],
      dayByDayItinerary: [
        {
          day: 1,
          title: "Nairobi to Samburu National Reserve",
          description: "Journey north across the equator past Mount Kenya into the arid beauty of Samburu. Afternoon game drive along the Ewaso Nyiro River.",
          accommodation: "Samburu Intrepids / Ashnil Samburu Camp",
          meals: "Lunch, Dinner",
        },
        {
          day: 2,
          title: "Full Day in Samburu - Tracking the Special 5",
          description: "Track the unique northern wildlife species adapted to arid terrain, including long-necked gerenuks standing on hind legs to browse thorns.",
          accommodation: "Samburu Intrepids / Ashnil Samburu Camp",
          meals: "Breakfast, Lunch, Dinner",
        },
        {
          day: 3,
          title: "Samburu to Ol Pejeta Conservancy",
          description: "Drive south to the Laikipia plateau and Ol Pejeta Conservancy. Afternoon visit to the protected rhino enclosure and chimpanzee sanctuary.",
          accommodation: "Sweetwaters Serena Camp",
          meals: "Breakfast, Lunch, Dinner",
        },
        {
          day: 4,
          title: "Ol Pejeta to Maasai Mara via Rift Valley",
          description: "Scenic overland journey to the legendary Maasai Mara. Evening fireside welcome at your luxury safari lodge.",
          accommodation: "Ashnil Mara Camp / Mara Serena Safari Lodge",
          meals: "Breakfast, Packed Lunch, Dinner",
        },
        {
          day: 5,
          title: "Maasai Mara - Central Plains & Big Cats",
          description: "Intensive tracking of lion prides and cheetahs. Optional sunrise hot air balloon flight.",
          accommodation: "Ashnil Mara Camp / Mara Serena Safari Lodge",
          meals: "Breakfast, Lunch, Dinner",
        },
        {
          day: 6,
          title: "Maasai Mara - River Crossings & Mara Triangle",
          description: "Explore the Mara Triangle and river crossing points with picnic lunch under wild acacia branches.",
          accommodation: "Ashnil Mara Camp / Mara Serena Safari Lodge",
          meals: "Breakfast, Picnic Lunch, Dinner",
        },
        {
          day: 7,
          title: "Morning Safari & Transfer to Nairobi",
          description: "Final early morning safari drive, followed by relaxed breakfast and return transfer to Nairobi.",
          accommodation: "Drop-off in Nairobi",
          meals: "Breakfast",
        },
      ],
      inclusions: [
        "All park and private conservancy fees across Samburu, Ol Pejeta, and Mara",
        "Private 4x4 safari cruiser with WiFi hotspot and experienced naturalist guide",
        "6 nights full-board accommodation in luxury safari camps",
        "Rhino sanctuary and chimpanzee project visits",
        "Flying Doctor evacuation insurance",
      ],
      exclusions: [
        "Balloon safari",
        "Beverages and tips",
        "Visa and personal insurance",
      ],
      bestTime: "Year-round; June through October is peak game season",
    },
    {
      id: "naivasha-hellsgate-2d",
      slug: "2-day-naivasha-and-hells-gate",
      title: "2-Day Lake Naivasha & Hell's Gate Walking Adventure",
      subtitle: "Boat safaris, walking among zebras, and dramatic geothermal gorges",
      duration: "2 Days / 1 Night",
      durationDays: 2,
      durationCategory: "1-3 Days",
      destination: "Rift Valley",
      destinationLabel: "Lake Naivasha & Hell's Gate",
      priceUSD: 420,
      priceKES: 54600,
      featured: false,
      heroImage: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80",
      overview: "The perfect weekend bush trip just 2 hours from Nairobi. Cycle or walk freely beside zebras and giraffes in Hell's Gate, followed by an evening motorized boat safari among Naivasha's hippo pods.",
      highlights: [
        "Cycle or hike through Hell's Gate National Park (the real-life inspiration for Pride Rock)",
        "Motorboat cruise on freshwater Lake Naivasha spotting fish eagles hunting",
        "Walking safari on Crescent Island Sanctuary amongst tame wild herbivores",
        "Geothermal hot springs and spectacular volcanic canyon walks",
      ],
      dayByDayItinerary: [
        {
          day: 1,
          title: "Nairobi to Hell's Gate & Lake Naivasha",
          description: "Morning pickup in Nairobi, descend the Rift Valley with stops at the scenic viewpoint. Arrive at Hell's Gate National Park for a guided cycling safari through towering rock towers and Fischer's Tower. Afternoon boat cruise on Lake Naivasha amongst hippos.",
          accommodation: "Lake Naivasha Sopa Resort / Enashipai Resort",
          meals: "Lunch, Dinner",
        },
        {
          day: 2,
          title: "Crescent Island Walking Safari & Return to Nairobi",
          description: "Morning boat transfer to Crescent Island for an unhurried walking safari surrounded by wandering giraffes, wildebeests, and waterbucks without predator danger. Return to Nairobi by mid-afternoon.",
          accommodation: "Drop-off in Nairobi",
          meals: "Breakfast, Lunch",
        },
      ],
      inclusions: [
        "Private roundtrip 4x4 Land Cruiser transport from Nairobi",
        "Hell's Gate National Park fees and bicycle rental",
        "Motorized Lake Naivasha boat ride and Crescent Island entry",
        "1 night full board luxury resort accommodation",
        "Licensed English-speaking driver-guide",
      ],
      exclusions: [
        "Alcoholic beverages",
        "Gratuities for boat captains and guides",
      ],
      bestTime: "Excellent year-round; perfect for families and photographers",
    },
    {
      id: "diani-extension-4d",
      slug: "4-day-diani-beach-extension",
      title: "4-Day Diani Beach Tropical Coastal Extension",
      subtitle: "Powder-white sand, turquoise Indian Ocean, and Swahili coastal dining",
      duration: "4 Days / 3 Nights",
      durationDays: 4,
      durationCategory: "4-5 Days",
      destination: "Coast",
      destinationLabel: "Diani Beach, South Coast",
      priceUSD: 760,
      priceKES: 98800,
      featured: false,
      heroImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      overview: "The quintessential finish to any dusty safari. Fly directly from the Maasai Mara or Nairobi into Diani Beach (Ukunda airstrip) to relax in boutique beachfront cabanas, snorkel coral reefs, and savor fresh coastal seafood.",
      highlights: [
        "Voted Africa's leading beach destination for 6 consecutive years",
        "Traditional wooden dhow excursion to Kisite-Mpunguti Marine Park with wild dolphin pods",
        "Kite surfing, deep-sea snorkeling, and beachfront massages",
        "Sunset dining in coral-cave restaurants and fresh coconut drinks",
      ],
      dayByDayItinerary: [
        {
          day: 1,
          title: "Bush to Beach: Nairobi / Mara to Diani",
          description: "Morning flight into Ukunda/Diani Airstrip. Private chauffeur transfer to your boutique beachfront resort. Afternoon spent sipping fresh madafu (coconut water) under swaying palms.",
          accommodation: "WaterLovers Beach Resort / Nomad Beach Resort",
          meals: "Dinner",
        },
        {
          day: 2,
          title: "Kisite Mpunguti Marine Park & Dolphin Safari",
          description: "Day excursion on an Arabian-style dhow to Wasini Island and Kisite Mpunguti Marine Park. Snorkel crystal waters among sea turtles and colourful reef fish, followed by a Swahili seafood feast.",
          accommodation: "WaterLovers Beach Resort / Nomad Beach Resort",
          meals: "Breakfast, Seafood Lunch, Dinner",
        },
        {
          day: 3,
          title: "Leisure on Diani's White Sands",
          description: "Full day at your leisure. Optional camel ride on the beach, deep-sea fishing, or spa pampering overlooking the turquoise surf.",
          accommodation: "WaterLovers Beach Resort / Nomad Beach Resort",
          meals: "Breakfast, Dinner",
        },
        {
          day: 4,
          title: "Departure & Transfer to Airport",
          description: "Morning swim in the warm Indian Ocean. Transfer to Ukunda airstrip for your flight to Nairobi to connect with your international departure.",
          accommodation: "Transfer to Ukunda or Mombasa Airport",
          meals: "Breakfast",
        },
      ],
      inclusions: [
        "Return private airport/airstrip transfers in Diani",
        "3 nights half-board boutique beach resort accommodation",
        "Wasini Island and Kisite Mpunguti marine dhow safari with lunch",
        "All marine park entry fees",
      ],
      exclusions: [
        "Domestic scheduled bush flights (NBO/Mara to Ukunda) - bookable upon request ($180–$250)",
        "Water sports equipment hire",
        "Tips and personal bar bills",
      ],
      bestTime: "July through March (clear calm sea conditions)",
    },
  ],

  testimonials: [
    {
      id: "1",
      name: "Dr. Alistair & Claire Vance",
      location: "Edinburgh, United Kingdom",
      countryCode: "GB",
      flag: "🇬🇧",
      trip: "5-Day Mara & Lake Nakuru Odyssey",
      date: "September 2025",
      rating: 5,
      quote: "Travelling with Kifaru Trails felt like travelling with trusted old friends who happen to be world-class wildlife biologists. Our guide, Joseph, anticipated animal movement 10 minutes before other minibuses arrived. We watched a cheetah hunt in total peace. Flawless from start to finish.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "2",
      name: "Michael & Sarah Tanaka",
      location: "Seattle, United States",
      countryCode: "US",
      flag: "🇺🇸",
      trip: "7-Day Grand Kenya Circuit",
      date: "August 2025",
      rating: 5,
      quote: "The private Land Cruiser made all the difference. Our camera batteries stayed charged via the 220V inverter, the beanbags for long lenses were already set up, and the pop-up roof gave us 360-degree photography angles without anyone jostling for space. Best holiday of our lives.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "3",
      name: "Wanjiku Njoroge & Family",
      location: "Nairobi, Kenya",
      countryCode: "KE",
      flag: "🇰🇪",
      trip: "4-Day Amboseli Kilimanjaro Views",
      date: "December 2025",
      rating: 5,
      quote: "As Nairobi residents, we are very picky about local operators. Kifaru Trails provided transparent resident rates in KES, zero hassle M-Pesa payments, and treated us with five-star respect. Seeing my daughters' faces when Kilimanjaro cleared at dawn was priceless.",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80",
    },
    {
      id: "4",
      name: "Henrik & Mia Lindqvist",
      location: "Stockholm, Sweden",
      countryCode: "SE",
      flag: "🇸🇪",
      trip: "3-Day Maasai Mara Classic",
      date: "February 2026",
      rating: 5,
      quote: "We were initially hesitant to book via WhatsApp, but within 10 minutes David had answered all our questions with genuine patience and transparent pricing. The tented camp felt secluded, eco-conscious, and authentic. Kifaru Trails is the real deal.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
  ],

  galleryItems: [
    {
      id: "g1",
      title: "Majestic Male Lion in Morning Mist",
      category: "Wildlife",
      location: "Maasai Mara National Reserve",
      imageUrl: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=1200&q=80",
      caption: "A magnificent black-maned lion surveys his pride territory near Lookout Hill at sunrise.",
    },
    {
      id: "g2",
      title: "Kilimanjaro Tusker Procession",
      category: "Wildlife",
      location: "Amboseli National Park",
      imageUrl: "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?auto=format&fit=crop&w=1200&q=80",
      caption: "A matriarch leads her family across the dry Amboseli salt pan under Mount Kilimanjaro.",
    },
    {
      id: "g3",
      title: "Custom 4x4 Land Cruiser in Savannah",
      category: "Camps",
      location: "Mara Triangle, Kenya",
      imageUrl: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",
      caption: "Our custom extended 4x4 Land Cruiser with elevated roof hatches positioned for evening light.",
    },
    {
      id: "g4",
      title: "Cheetah on Termite Mound",
      category: "Wildlife",
      location: "Olare Motorogi Conservancy",
      imageUrl: "https://images.unsplash.com/photo-1547970810-dc1eac8161a7?auto=format&fit=crop&w=1200&q=80",
      caption: "A female cheetah scanning the horizon for Thomson gazelles in low golden light.",
    },
    {
      id: "g5",
      title: "Eco-Lodge Fireside Sundowner",
      category: "Camps",
      location: "Sekenani Valley, Maasai Mara",
      imageUrl: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=1200&q=80",
      caption: "Guests gathering around the open safari boma fire for Gin & Tonic sundowners and star gazing.",
    },
    {
      id: "g6",
      title: "Great Rift Valley Escarpment",
      category: "Landscapes",
      location: "Mai Mahiu Viewpoint, Great Rift Valley",
      imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      caption: "Dramatic cloud formations spilling over the eastern arm of the African Rift Valley.",
    },
    {
      id: "g7",
      title: "Guests & Guide at Mara River",
      category: "Guests",
      location: "Mara River Hippo Pods",
      imageUrl: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      caption: "Our guests with head guide Peter observing pod activity during the mid-day river break.",
    },
    {
      id: "g8",
      title: "Turquoise Indian Ocean at Diani",
      category: "Landscapes",
      location: "Galu Beach, Diani",
      imageUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
      caption: "Post-safari paradise on Kenya's south coast with soft coral sands and warm ocean breeze.",
    },
    {
      id: "g9",
      title: "Leopard in Acacia Tree",
      category: "Wildlife",
      location: "Lake Nakuru National Park",
      imageUrl: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=1200&q=80",
      caption: "A shy female leopard resting with her kill in the yellow-fever tree canopy.",
    },
  ],

  about: {
    founderTitle: "Our Kenyan Heritage",
    founderHeadline: "Born on the dusty trails of the Mara, guided by native wilderness wisdom.",
    founderStory: [
      "Kifaru Trails Safaris was founded in 2014 by David Kimani, a Kenyan-born Maasai Mara naturalist whose family traces their wilderness roots to Narok County, where his grandfather first walked alongside visiting naturalists along the Talek River in the 1960s. After 15 years as a senior head lodge naturalist witnessing international conglomerates pack tourists into cramped minivans with rushed corporate schedules, David set out to establish a genuinely Kenyan alternative.",
      "The philosophy was simple: wild Kenya should never feel like a commercial theme park. Safaris must be quiet, deeply respectful of animal behavior, environmentally regenerative, and led by native Kenyan guides whose heritage is woven into this earth.",
      "Today, Kifaru Trails is 100% Kenyan-owned and proudly operated from our Nairobi headquarters in Karen. Every vehicle in our fleet is custom built in Kenya, every guide on our crew is a native Kenyan certified by the Kenya Professional Safari Guides Association (KPSGA), and every booking directly supports local Maasai and Samburu community conservancies and pastoralist school bursaries.",
    ],
    founderQuote: "“When you sit quietly in the Mara with the engine switched off and only the wind moving the golden oat grass, Kenya speaks to your soul. As Kenyans, that is the sacred wilderness we protect.”",
    founderName: "David Kimani",
    founderRole: "Founder & Lead Expedition Naturalist",
    founderImage: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?auto=format&fit=crop&w=800&q=80",

    fleetTitle: "Our 4x4 Expedition Fleet",
    fleetSubtitle: "Engineered in Kenya specifically for rough savanna terrain",
    fleetDescription: "We do not use ordinary minivans. Every Kifaru Trails safari operates exclusively in heavy-duty, long-wheelbase Toyota Land Cruisers modified right here in Nairobi with custom bush expedition specifications.",
    fleetFeatures: [
      {
        title: "Extended Pop-Up Roof",
        desc: "High-clearance canvas pop-top giving 360-degree standing visibility for wildlife photography and predator spotting.",
      },
      {
        title: "Guaranteed Window Seats",
        desc: "We cap our vehicles at 6 guests maximum, guaranteeing every traveler their own window seat and personal open hatch space.",
      },
      {
        title: "220V Inverter & USB Charging",
        desc: "Heavy-duty dual battery inverters allow seamless charging of camera batteries, drones, and phones throughout the game drive.",
      },
      {
        title: "Integrated Chilled Coolbox",
        desc: "Onboard insulated fridge keeping drinking water, sodas, and sundowner beverages crisp in the afternoon heat.",
      },
      {
        title: "Photographer Beanbags & Monopods",
        desc: "Vehicle-mounted beanbags and clamp mounts provided complimentary for stabilizing heavy telephoto camera lenses.",
      },
      {
        title: "High-Lift Jacks & HF Radio",
        desc: "Twin spare wheels, sand ladders, and long-range HF radios linked directly to park ranger posts for absolute safety.",
      },
    ],
    fleetImage: "https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&w=1200&q=80",

    team: [
      {
        name: "David Kimani",
        role: "Founder & Master Naturalist",
        badge: "KPSGA Silver Guide #412",
        origin: "Narok & Nakuru County, Kenya",
        languages: ["English", "Swahili", "Kikuyu", "Maa", "German"],
        experience: "21 Years in the African Bush",
        image: "https://images.unsplash.com/photo-1507152832244-10d45c7eda57?auto=format&fit=crop&w=600&q=80",
        bio: "Born near the Talek River in the Mara ecosystem. With over two decades tracking big cats and raptors, David has advised BBC Natural History and National Geographic film crews filming the Great Migration across Kenya.",
      },
      {
        name: "Faith Chebet",
        role: "Head of Safari Planning & Operations",
        badge: "KPSGA Certified Tour Planner",
        origin: "Eldoret & Nairobi, Kenya",
        languages: ["English", "Swahili", "Kalenjin", "French"],
        experience: "12 Years in Kenyan Safari Logistics",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
        bio: "A tourism graduate from Kenyatta University, Faith coordinates luxury eco-lodge reservations, bespoke Wilson Airport bush charter flights, and custom multi-generational family safari circuits.",
      },
      {
        name: "Joseph Ole Sankale",
        role: "Senior Field Guide & Cultural Naturalist",
        badge: "KPSGA Silver Guide #687",
        origin: "Sekenani, Maasai Mara, Kenya",
        languages: ["English", "Swahili", "Maa"],
        experience: "16 Years Guiding Mara & Amboseli",
        image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&w=600&q=80",
        bio: "A proud Maasai native born and raised along the eastern border of the reserve. Joseph possesses legendary tracking acumen for elusive leopards and black rhinos, while sharing genuine pastoralist wisdom.",
      },
      {
        name: "Eunice Wanjiku Mwangi",
        role: "Guest Experience & Coast Operations Lead",
        badge: "Hospitality & Marine Specialist",
        origin: "Mombasa & Nairobi, Kenya",
        languages: ["English", "Swahili", "Kikuyu", "Italian"],
        experience: "9 Years Coastal & Safari Hospitality",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=600&q=80",
        bio: "Born on the Kenyan Indian Ocean coast, Eunice oversees seamless bush-to-beach transitions, Diani luxury boutique resort partnerships, Wasini dhow excursions, and guest welfare across all expeditions.",
      },
    ],

    sustainability: {
      headline: "Wilderness Stewardship in Action",
      lead: "We believe tourism should regenerate wildlife habitats, not deplete them. Our footprint is guided by strict ethical guidelines.",
      pillars: [
        {
          title: "Direct Conservancy Support",
          description: "Over 20% of your safari booking fee directly funds Maasai landowner conservancies, ensuring pastoralist families receive monthly dividends for preserving wildlife corridors.",
        },
        {
          title: "100% Single-Use Plastic Free",
          description: "Every guest receives a stainless steel thermal flask upon arrival. We carry purified spring water dispensers onboard our Land Cruisers, eliminating disposable bottles.",
        },
        {
          title: "Sekenani Primary School Bursaries",
          description: "Through our Kifaru Education Fund, we sponsor tuition, solar learning kits, and school meal programmes for 45 pupils bordering the Maasai Mara reserve.",
        },
        {
          title: "Off-Road Driving Restrictions",
          description: "We strictly observe ethical game viewing distances, never harass nesting cheetahs, and keep to designated conservancy tracks to prevent fragile soil erosion.",
        },
      ],
    },
  },

  faqs: [
    {
      category: "Planning",
      question: "When is the absolute best time to visit Kenya for a safari?",
      answer: "Kenya is a phenomenal year-round destination! For the world-famous Great Migration river crossings in the Maasai Mara, the peak season is July through October. If you prefer fewer crowds and clear views of Mount Kilimanjaro in Amboseli, January to March is exceptional. The 'Emerald' or Green Season (November and April-May) brings dramatic emerald landscapes, newborn animals, and lower camp rates.",
    },
    {
      category: "Payment",
      question: "What payment methods do you accept, and are prices available in KES?",
      answer: "We accept secure credit/debit card payments (Visa, Mastercard, Amex), direct international SWIFT bank wire transfers, and Kenya M-Pesa (Buy Goods Till / Paybill) for East African residents and local travelers. You can toggle between USD ($) and Kenyan Shillings (KES) on our website at any time. A 30% deposit secures your camp reservations, with the balance due 30 days prior to departure.",
    },
    {
      category: "Vehicles",
      question: "Will our safari vehicle be private or shared with strangers?",
      answer: "All Kifaru Trails safaris are 100% private. You and your travel companions have exclusive use of the custom 4x4 Land Cruiser and your dedicated driver-guide. You set the morning departure time, how long you stay at wildlife sightings, and your preferred pace.",
    },
    {
      category: "Medical & Safety",
      question: "Is emergency medical evacuation included?",
      answer: "Yes. Every single guest traveling with Kifaru Trails is automatically registered with AMREF Flying Doctors Tourist Evacuation Cover. In the unlikely event of a medical emergency in remote wilderness areas, an air ambulance aircraft with emergency physicians will evacuate you directly to a premier Nairobi hospital.",
    },
    {
      category: "Packing",
      question: "What should I pack for a Kenya safari?",
      answer: "Pack lightweight, breathable clothing in neutral bush colors (khaki, beige, olive green - avoid dark blue and black which attract tsetse flies). Early morning and evening game drives can be chilly (12°C / 54°F), so bring a warm fleece or lightweight down jacket. A wide-brimmed sun hat, high-SPF sunscreen, binoculars (8x42 recommended), sunglasses, and your camera gear with extra memory cards are essential.",
    },
    {
      category: "Booking",
      question: "What is your cancellation and date amendment policy?",
      answer: "We understand that international travel plans can change. Cancellations made more than 45 days prior to arrival receive a full refund minus a 10% administrative lodge reservation fee. Cancellations between 30–44 days receive 50% refund. You may also postpone your safari dates up to 12 months ahead without forfeiture subject to seasonal camp rate differences.",
    },
  ],

  seasonalCalendar: [
    {
      month: "January",
      short: "JAN",
      season: "High",
      highlights: "Calving season begins; clear mornings; superb birding",
      weather: "Warm & Dry (28°C / 82°F)",
      rating: 2,
    },
    {
      month: "February",
      short: "FEB",
      season: "High",
      highlights: "Peak predator activity on Mara plains; baby gazelles & zebras",
      weather: "Warm & Dry (29°C / 84°F)",
      rating: 3,
    },
    {
      month: "March",
      short: "MAR",
      season: "High",
      highlights: "Lush vegetation; warm nights; excellent elephant viewing in Amboseli",
      weather: "Warm with occasional afternoon showers",
      rating: 2,
    },
    {
      month: "April",
      short: "APR",
      season: "Green / Emerald",
      highlights: "Low tourist volumes; best photography lighting; discounted luxury camps",
      weather: "Long rains; green savannah (24°C / 75°F)",
      rating: 1,
    },
    {
      month: "May",
      short: "MAY",
      season: "Green / Emerald",
      highlights: "Vibrant wildflowers; incredible bird plumage; dramatic stormy skies",
      weather: "Intermittent rain clearing by month-end",
      rating: 1,
    },
    {
      month: "June",
      short: "JUN",
      season: "High",
      highlights: "Early migration herds start entering Mara from Serengeti",
      weather: "Cool & Crisp; dry weather resumes (23°C / 73°F)",
      rating: 2,
    },
    {
      month: "July",
      short: "JUL",
      season: "Peak",
      highlights: "Great Migration in full swing; dramatic Mara River crossings begin",
      weather: "Cool dry mornings (12°C); sunny days (24°C)",
      rating: 3,
    },
    {
      month: "August",
      short: "AUG",
      season: "Peak",
      highlights: "Apex predator action; river crossing spectacles; prime season",
      weather: "Dry, clear skies; peak safari conditions",
      rating: 3,
    },
    {
      month: "September",
      short: "SEP",
      season: "Peak",
      highlights: "Enormous wildebeest concentrations in Mara; pleasant weather",
      weather: "Dry, warm, and sunny (26°C / 78°F)",
      rating: 3,
    },
    {
      month: "October",
      short: "OCT",
      season: "Peak",
      highlights: "Late migration herds; golden grass; superb cheetah sightings",
      weather: "Warm days; short rains arrive late Oct",
      rating: 3,
    },
    {
      month: "November",
      short: "NOV",
      season: "Green / Emerald",
      highlights: "Migratory birds arrive from Europe; emerald grasslands; low crowds",
      weather: "Short refreshing afternoon showers",
      rating: 2,
    },
    {
      month: "December",
      short: "DEC",
      season: "High",
      highlights: "Holiday safari season; festive bush dinners; clear Mount Kenya vistas",
      weather: "Warm and pleasant (27°C / 80°F)",
      rating: 3,
    },
  ],
};
