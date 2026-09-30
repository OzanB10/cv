export interface Project {
  id: string;
  title: string;
  date: string;
  year: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  images?: string[];
  role: string;
  technologies: string[];
  keyFeatures: string[];
  architectureHighlights: string[];
  links?: {
    github?: string;
    live?: string;
    appStore?: string;
    playStore?: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  period: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  technologies: string[];
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  details: string[];
}

export interface SkillCategory {
  category: string;
  skills: { name: string; level?: string; icon?: string }[];
}

export interface PortfolioContent {
  profile: {
    name: string;
    title: string;
    subtitle: string;
    summary: string;
    aboutParagraphs: string[];
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    status: string;
  };
  navigation: { id: string; label: string }[];
  experiences: Experience[];
  projects: Project[];
  skills: SkillCategory[];
  education: Education[];
}

export const portfolioDataEN: PortfolioContent = {
  profile: {
    name: "Ozan Bolel",
    title: "Mobile Developer",
    subtitle: "I build high-performance, responsive, and user-friendly mobile applications using Flutter & Dart.",
    summary: "Mobile Developer with 2+ years of hands-on experience building high-performance, responsive, and user-friendly cross-platform mobile apps with Flutter & Dart. My engineering approach centers on Clean Architecture, centralized state management with Riverpod, and robust REST API integrations with Laravel/PHP.",
    aboutParagraphs: [
      "Mobile Developer with 2+ years of experience building high-performance, responsive, and user-friendly cross-platform mobile applications using Flutter and Dart. My engineering approach is built on Clean Architecture, centralized state management with Riverpod, and robust REST API integrations with Laravel/PHP.",
      "At Anatolia System, advancing from an intern to a Full Stack Junior Developer, I took end-to-end ownership of mobile features—from UI design and backend API integration to App Store and Google Play releases. I also built real-time notification pipelines using Firebase Cloud Messaging (FCM) and custom PHP/Laravel backend services.",
      "Alongside core mobile engineering, I actively leverage AI-assisted development tools like Cursor and Claude Code to accelerate prototyping, elevate code standards, and deliver maintainable software solutions."
    ],
    email: "ozanbolel@gmail.com",
    phone: "+90 541 809 30 07",
    location: "İstanbul, Turkey",
    linkedin: "https://www.linkedin.com/in/ozan-bolel-541760310/",
    status: "Available for full-time & high-impact mobile projects"
  },
  navigation: [
    { id: "about", label: "ABOUT" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
    { id: "skills", label: "SKILLS & TECH" },
    { id: "education", label: "EDUCATION" }
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Junior Full Stack Developer",
      company: "Anatolia System",
      location: "İstanbul, Turkey",
      period: "06/2025 — Present",
      startDate: "06/2025",
      endDate: "Present",
      bullets: [
        "Delivered end-to-end mobile features in Flutter from UI design to backend API integration.",
        "Designed database structures and collaborated on backend API endpoints using Laravel and PHP.",
        "Implemented real-time push notifications using Firebase Cloud Messaging (FCM) and custom backend handlers.",
        "Managed App Store Connect & Google Play Console release processes from testing to production."
      ],
      technologies: ["Flutter", "Dart", "Laravel", "PHP", "MySQL", "Firebase FCM", "App Store Connect", "Google Play Console", "REST APIs", "Git"]
    },
    {
      id: "exp-2",
      role: "Flutter Developer Intern",
      company: "Anatolia System",
      location: "İstanbul, Turkey",
      period: "02/2025 — 06/2025",
      startDate: "02/2025",
      endDate: "06/2025",
      bullets: [
        "Built clean, modular, and reusable UI components in Flutter.",
        "Integrated REST APIs and implemented responsive app data flows.",
        "Contributed to bug fixing, UI polish, and performance enhancements across active apps."
      ],
      technologies: ["Flutter", "Dart", "REST APIs", "State Management", "UI/UX", "Git", "Postman", "Xcode", "Android Studio"]
    }
  ],
  projects: [
    {
      id: "sadefatura",
      title: "SadeFatura",
      date: "05/2026 — 06/2026",
      year: "2026",
      tagline: "Fast e-Invoicing & Accounting Mobile App",
      description: "A clean mobile invoicing platform enabling businesses to create, manage, and share official e-Invoices and PDF documents directly from their phones.",
      longDescription: "SadeFatura streamlines digital invoicing for Turkish businesses and freelancers. It provides automated e-Invoice and e-Archive creation, instant vector PDF exports, one-click sharing via WhatsApp and Email, real-time revenue tracking, and secure cloud synchronization.",
      image: "/images/sade1.png?v=2",
      images: [
        "/images/sade1.png?v=2",
        "/images/sade2.png?v=2",
        "/images/sade3.png?v=2",
        "/images/sade4.png?v=2"
      ],
      role: "Lead Mobile Developer & UI Architect",
      technologies: ["Flutter", "Dart", "REST APIs", "PDF Generation", "Cloud Sync", "Secure Storage", "State Management", "e-Invoice API"],
      keyFeatures: [
        "Official e-Invoice and e-Archive generation with Turkish tax compliance",
        "Instant vector PDF creation with QR codes for fast sharing via WhatsApp and Email",
        "Organized client and company address book with balance summaries",
        "Visual revenue and expense tracking with credit balance alerts",
        "Multi-user secure login with token-based session protection"
      ],
      architectureHighlights: [
        "Clean architecture separating data fetching, state logic, and visual components",
        "Fast local caching for instant invoice list display",
        "Lightweight vector PDF rendering engine optimized for mobile devices"
      ]
    },
    {
      id: "anamedsis",
      title: "Anamedsis",
      date: "11/2025 — 01/2026",
      year: "2025",
      tagline: "Clinic & Business Appointment CRM Suite",
      description: "An all-in-one mobile operations app for clinics and service businesses featuring appointment scheduling, customer CRM, and inventory tracking.",
      longDescription: "Anamedsis brings calendar scheduling, patient profiles, inventory control, and financial summaries together into an intuitive mobile workspace. With robust offline support, staff can view and manage appointments smoothly even without an active internet connection.",
      image: "/images/anamedsis1.png",
      images: [
        "/images/anamedsis1.png",
        "/images/anamedsis2.png",
        "/images/anamedsis3.png",
        "/images/anamedsis4.png"
      ],
      role: "Mobile Architect & Frontend Engineer",
      technologies: ["Flutter", "Riverpod", "REST APIs", "CRM", "Offline Caching", "Financial Analytics", "Push Notifications", "Hive"],
      keyFeatures: [
        "Color-coded interactive appointment calendar with day and week views",
        "Complete customer profiles with treatment history and visit logs",
        "Automated inventory level alerts for low-stock clinic supplies",
        "Daily and monthly revenue summaries with visual charts",
        "Offline-ready data sync so staff can work without interruption"
      ],
      architectureHighlights: [
        "Reactive state management powered by Riverpod providers",
        "Local Hive database caching with automatic background synchronization",
        "Reusable Material design component library tailored for clinic workflows"
      ]
    },
    {
      id: "mekanbook",
      title: "MekanBook",
      date: "04/2025 — 06/2025",
      year: "2025",
      tagline: "Curated Venue Discovery & Table Booking App",
      description: "Discover top-rated restaurants, cafes, and bistros, explore full menus and atmospheres, and book tables with real-time confirmation.",
      longDescription: "MekanBook makes finding great dining spots effortless. Users can browse nearby places on an interactive map, filter by cuisine and neighborhood, read authentic reviews, view menus with pricing, and reserve tables directly from their phones.",
      image: "/images/mekan1.png?v=2",
      images: [
        "/images/mekan1.png?v=2",
        "/images/mekan2.png?v=2",
        "/images/mekan3.png?v=2"
      ],
      role: "Flutter Developer",
      technologies: ["Flutter", "Riverpod", "Location Services", "Map Integration", "REST APIs", "Filter Engine", "Local DB"],
      keyFeatures: [
        "Dynamic neighborhood, city, and culinary category filtering engine",
        "Instant search with autocomplete and location-based distance calculations",
        "Detailed venue profiles with interior photos, menus, and customer reviews",
        "Personal favorites collection with offline bookmarking",
        "Quick table reservation flow with instant confirmation"
      ],
      architectureHighlights: [
        "Efficient asynchronous API client with built-in response caching",
        "Fast and smooth image caching and thumbnail loading for photo feeds",
        "Battery-friendly geolocation queries and map markers"
      ]
    },
    {
      id: "internetin-gazetesi",
      title: "İnternetin Gazetesi",
      date: "02/2025 — 03/2025",
      year: "2025",
      tagline: "Lightweight & High-Speed Mobile News Reader",
      description: "A modern news app built for speed, delivering real-time breaking alerts and clean offline reading without intrusive clutter.",
      longDescription: "Delivers instant news loading and seamless offline reading. Features customized push notifications by topic, deep link navigation into trending stories, dark mode, and readable typography.",
      image: "/images/internet1.png",
      images: [
        "/images/internet1.png",
        "/images/internet2.png"
      ],
      role: "Mobile Developer",
      technologies: ["Flutter", "Firebase Auth", "Firebase FCM", "Hive Local DB", "Deep Linking", "REST APIs"],
      keyFeatures: [
        "Segmented push notifications based on personal reading interests",
        "Deep links opening notifications directly to full story views",
        "Offline article reading powered by local Hive storage",
        "Comfortable reading settings with adjustable font sizes and dark mode",
        "Fast social sharing links with custom preview metadata"
      ],
      architectureHighlights: [
        "Firebase Cloud Messaging setup with targeted topic subscriptions",
        "Smart image pre-caching reducing cellular data usage",
        "Lightweight router with deep-link handling across app states"
      ]
    },
    {
      id: "iko-haber",
      title: "İko Haber",
      date: "03/2026 — 03/2026",
      year: "2026",
      tagline: "White-Labeled Industry News & Publication App",
      description: "A tailored mobile news platform built for industry professionals with dedicated alerts, sectoral articles, and offline access.",
      longDescription: "Designed as a specialized white-label variant of the news reading engine. Powered by flexible Flutter build configurations, it offers custom branding, targeted notification channels, and offline storage.",
      image: "/images/0x0ss.png",
      images: [
        "/images/0x0ss.png",
        "/images/iko2.png",
        "/images/iko3.png",
        "/images/iko4.png",
        "/images/iko5.png"
      ],
      role: "Mobile Architect",
      technologies: ["Flutter Flavors", "Firebase", "FCM", "Deep Links", "White-Labeling", "Hive", "CI/CD Setup"],
      keyFeatures: [
        "Multi-flavor architecture allowing distinct branding from a single codebase",
        "Sector-specific push notifications tailored for industry members",
        "Fast offline article caching with automatic background refresh",
        "Automated release bundles for iOS and Android app stores"
      ],
      architectureHighlights: [
        "Single codebase architecture using Flutter build flavors",
        "Targeted push routing based on user industry segments",
        "Shared business logic core with isolated brand theme tokens"
      ]
    },
    {
      id: "dugunmaster",
      title: "DüğünMaster",
      date: "06/2026 — Present",
      year: "2026 — Present",
      tagline: "Wedding Marketplace & Digital Planning Suite",
      description: "A comprehensive web & mobile platform connecting couples with wedding venues and vendors while providing digital tools for seating charts, budgets, and RSVP.",
      longDescription: "DüğünMaster simplifies wedding planning through a modern vendor marketplace and organization dashboard. Couples can filter venues by location and price, request custom quotes, design interactive guest seating charts, monitor their wedding budget, and manage RSVPs online.",
      image: "/images/dugun1.png",
      images: [
        "/images/dugun1.png",
        "/images/dugun2.png",
        "/images/dugun3.png",
        "/images/dugun4.png",
        "/images/dugun5.png",
        "/images/dugun6.png",
        "/images/dugun7.png"
      ],
      role: "Flutter / Full-Stack Developer",
      technologies: ["Flutter", "Dart", "Laravel", "REST API", "MySQL", "Firebase", "Riverpod", "Authentication", "State Management", "Responsive UI", "SEO", "Dynamic Filtering", "Marketplace Architecture"],
      keyFeatures: [
        "Curated vendor directory with multi-tier category and city filters",
        "Direct quote request pipelines connecting couples directly to venue managers",
        "Interactive planning suite: drag-and-drop seating charts, budget tracking, and RSVP",
        "Custom digital wedding invitation generator with unique links",
        "SEO-friendly landing pages designed for high search engine visibility"
      ],
      architectureHighlights: [
        "Modular Laravel REST backend architecture with structured MySQL relations",
        "Responsive frontend layouts optimized for mobile devices and desktop screens",
        "Optimized query indexing for fast marketplace search and category filtering"
      ]
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      skills: [
        { name: "Dart", level: "Advanced" },
        { name: "PHP", level: "Proficient" }
      ]
    },
    {
      category: "Frameworks & Technologies",
      skills: [
        { name: "Flutter", level: "Advanced" },
        { name: "Riverpod", level: "Advanced" },
        { name: "Firebase (Auth, FCM, Firestore)", level: "Proficient" },
        { name: "REST APIs", level: "Advanced" },
        { name: "Laravel", level: "Proficient" },
        { name: "Git & GitHub", level: "Advanced" }
      ]
    },
    {
      category: "Tools & Environments",
      skills: [
        { name: "Postman", level: "Proficient" },
        { name: "GitHub", level: "Advanced" },
        { name: "MySQL", level: "Proficient" },
        { name: "Android Studio", level: "Proficient" },
        { name: "Xcode", level: "Proficient" },
        { name: "App Store Connect", level: "Proficient" },
        { name: "Google Play Console", level: "Proficient" }
      ]
    },
    {
      category: "AI-Assisted Engineering",
      skills: [
        { name: "Cursor", level: "Advanced" },
        { name: "Claude Code", level: "Advanced" },
        { name: "Prompt Engineering & Code Auditing", level: "Advanced" }
      ]
    }
  ],
  education: [
    {
      degree: "Associate Degree in Computer Programming",
      institution: "Trakya University",
      location: "Edirne, Türkiye",
      period: "09/2023 — 08/2025",
      gpa: "3.12 / 4.00",
      details: [
        "Graduated with a GPA of 3.12/4.00.",
        "Core Coursework: Object-Oriented Programming (OOP), Data Structures & Algorithms, Mobile Application Development, Relational Databases (MySQL/SQL), Web Application Architecture, Software Engineering Principles."
      ]
    }
  ]
};

export const portfolioDataTR: PortfolioContent = {
  profile: {
    name: "Ozan Bolel",
    title: "Mobil Geliştirici",
    subtitle: "Flutter ve Dart ile yüksek performanslı, duyarlı ve kullanıcı dostu mobil uygulamalar geliştiriyorum.",
    summary: "Flutter ve Dart ile yüksek performanslı, duyarlı ve kullanıcı dostu çapraz platform mobil uygulamalar geliştiren 2 yılı aşkın deneyime sahip bir Mobil Geliştiriciyim. Temiz mimari (Clean Architecture), Riverpod ile merkezi state yönetimi ve Laravel/PHP ile sağlam REST API entegrasyonlarına odaklanıyorum.",
    aboutParagraphs: [
      "Flutter ve Dart ile yüksek performanslı, duyarlı ve kullanıcı dostu çapraz platform mobil uygulamalar geliştiren 2 yılı aşkın deneyime sahip bir Mobil Geliştiriciyim. Mühendislik yaklaşımım; temiz mimari (Clean Architecture), Riverpod ile merkezi state yönetimi ve Laravel/PHP ile sağlam REST API entegrasyonlarına dayanır.",
      "Anatolia System bünyesinde stajyerlikten Full Stack Junior Developer rolüne geçerek; kullanıcı arayüzü tasarımından backend API entegrasyonuna, App Store ve Google Play yayın süreçlerine kadar uçtan uca mobil özelliklerin sorumluluğunu üstlendim. Ayrıca Firebase Cloud Messaging (FCM) ve özel PHP/Laravel sunucuları ile gerçek zamanlı bildirim sistemleri kurdum.",
      "Standart mobil geliştirmenin yanı sıra Cursor ve Claude Code gibi AI destekli geliştirme araçlarını aktif olarak kullanarak prototiplemeyi hızlandırıyor, kod standartlarını yükseltiyor ve sürdürülebilir yazılım çözümleri üretiyorum."
    ],
    email: "ozanbolel@gmail.com",
    phone: "+90 541 809 30 07",
    location: "İstanbul, Türkiye",
    linkedin: "https://www.linkedin.com/in/ozan-bolel-541760310/",
    status: "Tam zamanlı ve yüksek etkili mobil projeler için hazır"
  },
  navigation: [
    { id: "about", label: "HAKKIMDA" },
    { id: "experience", label: "DENEYİM" },
    { id: "projects", label: "PROJELER" },
    { id: "skills", label: "YETKİNLİKLER" },
    { id: "education", label: "EĞİTİM" }
  ],
  experiences: [
    {
      id: "exp-1",
      role: "Junior Full Stack Developer",
      company: "Anatolia System",
      location: "İstanbul, Türkiye",
      period: "06/2025 — Günümüz",
      startDate: "06/2025",
      endDate: "Günümüz",
      bullets: [
        "Flutter ile modüler ve hızlı çalışan mobil arayüzler ve özellikler geliştirdi.",
        "Laravel ve PHP ile veritabanı yapısını tasarladı ve mobil uygulamalar için REST API servisleri hazırladı.",
        "Firebase Cloud Messaging (FCM) ile anlık bildirim altyapısını ve arka plan servislerini kurdu.",
        "App Store Connect ve Google Play Console mağaza yükleme ve sürüm yayınlama süreçlerini yönetti."
      ],
      technologies: ["Flutter", "Dart", "Laravel", "PHP", "MySQL", "Firebase FCM", "App Store Connect", "Google Play Console", "REST APIs", "Git"]
    },
    {
      id: "exp-2",
      role: "Flutter Developer Stajyeri",
      company: "Anatolia System",
      location: "İstanbul, Türkiye",
      period: "02/2025 — 06/2025",
      startDate: "02/2025",
      endDate: "06/2025",
      bullets: [
        "Flutter ve Dart ile temiz, yeniden kullanılabilir arayüz bileşenleri geliştirdi.",
        "REST API servislerini entegre ederek verilerin mobil ekranda dinamik gösterilmesini sağladı.",
        "Hata ayıklama, performans iyileştirmeleri ve kullanıcı arayüzü geliştirmelerine katkı sundu."
      ],
      technologies: ["Flutter", "Dart", "REST APIs", "Git", "Postman", "Xcode", "Android Studio"]
    }
  ],
  projects: [
    {
      id: "sadefatura",
      title: "SadeFatura",
      date: "05/2026 — 06/2026",
      year: "2026",
      tagline: "Kurumsal Mobil e-Fatura & Ön Muhasebe Platformu",
      description: "GİB mevzuatına tam uyumlu e-Fatura ve e-Arşiv süreçlerini cepten yöneten, anında karekodlu vektörel PDF üreten ve çoklu kullanıcı destekleyen profesyonel mobil ön muhasebe uygulaması.",
      longDescription: "SadeFatura, işletmelerin faturalama ve cari takip süreçlerini mobile taşıyan kapsamlı bir ön muhasebe platformudur. GİB mevzuatına uygun e-Fatura ve e-Arşiv düzenleme, anında karekodlu vektörel PDF oluşturma, tek tıkla WhatsApp ve e-posta ile paylaşım, gerçek zamanlı gelir-gider takibi ve güvenli bulut senkronizasyonu sunar.",
      image: "/images/sade1.png?v=2",
      images: [
        "/images/sade1.png?v=2",
        "/images/sade2.png?v=2",
        "/images/sade3.png?v=2",
        "/images/sade4.png?v=2"
      ],
      role: "Lead Mobil Geliştirici & UI Mimarı",
      technologies: ["Flutter", "Dart", "Clean Architecture", "REST APIs", "PDF Generation", "Cloud Sync", "Secure Storage", "State Management", "e-Fatura API"],
      keyFeatures: [
        "GİB mevzuatına tam uyumlu hızlı e-Fatura ve e-Arşiv oluşturma",
        "Karekodlu vektörel PDF çıktısı alma ve tek tıkla WhatsApp / E-posta ile paylaşma",
        "Müşteri ve firma adres rehberi ile bakiye durumu takibi",
        "Gelir-gider istatistikleri ve anlık kontör bakiye bildirimleri",
        "Token tabanlı güvenli oturum açma ve biyometrik giriş desteği"
      ],
      architectureHighlights: [
        "Clean Architecture prensipleriyle ayrıştırılmış veri, domain ve arayüz katmanları",
        "Mobil cihaz üzerinde çalışan yüksek performanslı vektörel PDF render motoru",
        "Hızlı yerel önbellekleme ve token tabanlı güvenli oturum yönetimi"
      ]
    },
    {
      id: "anamedsis",
      title: "Anamedsis",
      date: "11/2025 — 01/2026",
      year: "2025",
      tagline: "Klinik & Randevu Yönetimi Mobil Platformu",
      description: "Güzellik merkezleri ve klinikler için interaktif randevu takvimi, müşteri CRM, otomatik sarf malzeme stok takibi ve çevrimdışı çalışma desteği sunan hepsi bir arada mobil işletme uygulaması.",
      longDescription: "Anamedsis, yoğun randevu ve müşteri trafiğine sahip sağlık ve güzellik işletmeleri için geliştirilmiş kurumsal bir mobil yönetim asistanıdır. Renk kodlu interaktif randevu takvimi, kapsamlı müşteri işlem geçmişi, sarf malzeme kritik stok uyarıları ve internet bağlantısı kopsa dahi kesintisiz çalışan offline-first veri mimarisi sunar.",
      image: "/images/anamedsis1.png",
      images: [
        "/images/anamedsis1.png",
        "/images/anamedsis2.png",
        "/images/anamedsis3.png",
        "/images/anamedsis4.png"
      ],
      role: "Mobil Mimar & Frontend Mühendisi",
      technologies: ["Flutter", "Riverpod", "REST APIs", "CRM", "Offline-First Mimari", "Finansal Raporlama", "Push Notifications", "Hive"],
      keyFeatures: [
        "Günlük ve haftalık görünümlü, renk kodlu interaktif randevu takvimi",
        "Geçmiş işlem detayları ve notları içeren müşteri profilleri (CRM)",
        "Tükenmek üzere olan sarf malzemeleri için otomatik stok uyarıları",
        "Günlük ve aylık gelir-gider grafiksel analiz paneli",
        "İnternet kesintilerinde bile randevuları görüntüleme ve işlem yapma imkanı"
      ],
      architectureHighlights: [
        "Riverpod ile yönetilen modüler, reaktif ve kararlı state mimarisi",
        "Hive NoSQL veritabanı ile otomatik arka plan senkronizasyonu ve offline-first yapı",
        "Klinik çalışanlarının kolayca kullanabileceği ergonomik Material tasarım bileşenleri"
      ]
    },
    {
      id: "mekanbook",
      title: "MekanBook",
      date: "04/2025 — 06/2025",
      year: "2025",
      tagline: "Restoran Keşfi & Masa Rezervasyon Uygulaması",
      description: "Kullanıcıların çevrelerindeki popüler kafe ve restoranları fotoğrafları ve menüleriyle keşfedip kolayca masa ayırtabildiği sosyal mekan rehberi.",
      longDescription: "MekanBook, şehirdeki en popüler kafe, restoran ve bistroları kullanıcılarla buluşturan iki yönlü bir keşif ve rezervasyon platformudur. Harita üzerinden en yakın mekanları listeleme, mutfak ve bütçe türüne göre filtreleme, yüksek çözünürlüklü mekan fotoğraflarını inceleme ve saniyeler içinde online masa rezervasyonu oluşturma imkanı sunar.",
      image: "/images/mekan1.png?v=2",
      images: [
        "/images/mekan1.png?v=2",
        "/images/mekan2.png?v=2",
        "/images/mekan3.png?v=2"
      ],
      role: "Flutter Geliştirici",
      technologies: ["Flutter", "Riverpod", "Konum Servisleri", "Harita Entegrasyonu", "REST APIs", "Filtreleme Motoru", "Local DB"],
      keyFeatures: [
        "İl, ilçe ve mutfak türü bazlı akıllı mekan filtreleme motoru",
        "Arama yaparken anında tamamlanan mekan önerileri ve mesafe hesabı",
        "İç mekan fotoğrafları, menü, fiyatlandırma ve gerçek yorumları içeren detay sayfaları",
        "İnternetsiz de erişilebilen favori mekanlar listesi",
        "Anında onaylanan pratik masa rezervasyon akışı"
      ],
      architectureHighlights: [
        "Yanıtları önbelleğe alan akıllı ve hızlı API iletişim katmanı",
        "Fotoğraf galerilerinde hızlı ve akıcı görsel kaydırma optimizasyonu",
        "Pil dostu konum servisleri ve harita pin entegrasyonu"
      ]
    },
    {
      id: "internetin-gazetesi",
      title: "İnternetin Gazetesi",
      date: "02/2025 — 03/2025",
      year: "2025",
      tagline: "Yüksek Hızlı & Kişiselleştirilebilir Mobil Haber Platformu",
      description: "Son dakika haberlerini anlık bildirim kanallarıyla ileten, internet olmadan da kesintisiz çevrimdışı haber okuma olanağı sunan yüksek performanslı haber uygulaması.",
      longDescription: "İnternetin Gazetesi, yüksek performanslı ve akıcı bir mobil haber okuma deneyimi sunmak üzere tasarlanmıştır. FCM konu bazlı (topic-based) bildirim kanalları, Hive ile kesintisiz çevrimdışı okuma modu, karanlık/aydınlık tema seçeneği ve dinamik yazı boyutu ayarlama özellikleriyle donatılmıştır.",
      image: "/images/internet1.png",
      images: [
        "/images/internet1.png",
        "/images/internet2.png"
      ],
      role: "Mobil Geliştirici",
      technologies: ["Flutter", "Firebase Auth", "Firebase FCM", "Hive Local DB", "Deep Linking", "REST APIs"],
      keyFeatures: [
        "Gündem, ekonomi ve teknoloji gibi kategorilere özel bildirim abonelikleri",
        "Bildirime tıklandığında doğrudan ilgili haberin detayına giden derin bağlantılar",
        "Hive veritabanı sayesinde metroda veya çekmeyen yerlerde çevrimdışı haber okuma",
        "Karanlık ve aydınlık tema ile kişiselleştirilebilir yazı boyutu ayarı",
        "Haberleri sosyal medyada ve mesajlaşma uygulamalarında kolay paylaşma"
      ],
      architectureHighlights: [
        "Firebase Cloud Messaging (FCM) konu bazlı (topic-based) anlık bildirim mimarisi",
        "Hive NoSQL veritabanıyla çevrimdışı önbellekleme ve veri tüketim optimizasyonu",
        "Uygulama genelinde kararlı derin bağlantı (deep link) yönlendirme mimarisi"
      ]
    },
    {
      id: "iko-haber",
      title: "İko Haber",
      date: "03/2026 — 03/2026",
      year: "2026",
      tagline: "Sektörel Haber & Yayın Platformu (White-Label)",
      description: "Kuyumculuk ve sektör profesyonellerine özel haberler, analizler ve canlı piyasa gelişmelerini aktaran kurumsal mobil yayın platformu.",
      longDescription: "İkoHaber, sektörel yayıncılık ihtiyaçları için Flutter'ın çoklu derleme (white-label / flavor) altyapısıyla geliştirilmiştir. Sektöre özel anlık bildirim kanalları, analizler, piyasa verileri ve kesintisiz çevrimdışı okuma deneyimi sunar.",
      image: "/images/0x0ss.png",
      images: [
        "/images/0x0ss.png",
        "/images/iko2.png",
        "/images/iko3.png",
        "/images/iko4.png",
        "/images/iko5.png"
      ],
      role: "Mobil Mimar",
      technologies: ["Flutter Flavors", "Firebase", "FCM", "Deep Links", "White-Labeling", "Hive", "CI/CD"],
      keyFeatures: [
        "Tek bir kod tabanından farklı marka ve tasarımlar üreten multi-flavor altyapısı",
        "Sektör profesyonellerine özel son dakika bildirim kanalları",
        "Otomatik yenilenen çevrimdışı haber ve dergi önbelleği",
        "iOS ve Android uygulama mağazaları için otomatik derleme ve dağıtım"
      ],
      architectureHighlights: [
        "Flutter Flavors ile tek kod tabanından çoklu marka ve kurumsal tema derleme mimarisi",
        "Kullanıcı segmentlerine göre hedeflenmiş sektörel bildirim yönlendirmesi",
        "Temel iş mantığını korurken görsel temaları izole eden modüler mimari"
      ]
    },
    {
      id: "dugunmaster",
      title: "DüğünMaster",
      date: "06/2026 — Günümüz",
      year: "2026 — Günümüz",
      tagline: "Düğün Mekanları & Dijital Planlama Pazaryeri",
      description: "Evlenecek çiftlerin düğün salonu, fotoğrafçı ve organizasyon firmalarından kolayca fiyat teklifi alabildiği ve masa planından bütçeye tüm düğünlerini planlayabildiği web ve mobil platform.",
      longDescription: "DüğünMaster, düğün hazırlığındaki çiftler ile düğün sektöründeki işletmeleri bir araya getiren iki yönlü bir pazaryeridir. Mekan arama ve filtreleme, anında fiyat teklifi isteme, interaktif masa ve oturma planı hazırlama, düğün bütçesi hesaplayıcı ve dijital davetiye ile LCV takibi gibi birçok aracı bir arada sunar.",
      image: "/images/dugun1.png",
      images: [
        "/images/dugun1.png",
        "/images/dugun2.png",
        "/images/dugun3.png",
        "/images/dugun4.png",
        "/images/dugun5.png",
        "/images/dugun6.png",
        "/images/dugun7.png"
      ],
      role: "Flutter / Full-Stack Geliştirici",
      technologies: ["Flutter", "Dart", "Laravel", "REST API", "MySQL", "Firebase", "Riverpod", "Authentication", "State Management", "Responsive UI", "SEO", "Dynamic Filtering", "Marketplace Architecture"],
      keyFeatures: [
        "Şehir, ilçe ve bütçe aralıklarına göre gelişmiş mekan ve işletme filtreleme",
        "Çiftlerin işletmelerle doğrudan iletişim kurup fiyat teklifi alabildiği talep sistemi",
        "İnteraktif masa ve oturma planı, misafir listesi ve bütçe takip araçları",
        "Kişiye özel bağlantılarla paylaşılabilen şık dijital düğün davetiyeleri ve online LCV",
        "Arama motorlarında üst sıralara çıkmak için optimize edilmiş lokasyon sayfaları"
      ],
      architectureHighlights: [
        "Laravel RESTful API backend ve ilişkisel MySQL veritabanı altyapısı",
        "Riverpod ile reaktif state yönetimi ve mobil/web için optimize edilmiş responsive UI",
        "Gelişmiş şehir/ilçe/bütçe filtreleme motoru ve dinamik SEO sayfaları"
      ]
    }
  ],
  skills: [
    {
      category: "Programlama Dilleri",
      skills: [
        { name: "Dart", level: "İleri Seviye" },
        { name: "PHP", level: "Yetkin" }
      ]
    },
    {
      category: "Framework & Teknolojiler",
      skills: [
        { name: "Flutter", level: "İleri Seviye" },
        { name: "Riverpod", level: "İleri Seviye" },
        { name: "Firebase (Auth, FCM, Firestore)", level: "Yetkin" },
        { name: "REST APIs", level: "İleri Seviye" },
        { name: "Laravel", level: "Yetkin" },
        { name: "Git & GitHub", level: "İleri Seviye" }
      ]
    },
    {
      category: "Araçlar & Ortamlar",
      skills: [
        { name: "Postman", level: "Yetkin" },
        { name: "GitHub", level: "İleri Seviye" },
        { name: "MySQL", level: "Yetkin" },
        { name: "Android Studio", level: "Yetkin" },
        { name: "Xcode", level: "Yetkin" },
        { name: "App Store Connect", level: "Yetkin" },
        { name: "Google Play Console", level: "Yetkin" }
      ]
    },
    {
      category: "Yapay Zeka Destekli Geliştirme",
      skills: [
        { name: "Cursor", level: "İleri Seviye" },
        { name: "Claude Code", level: "İleri Seviye" },
        { name: "Prompt Mühendisliği & Kod Denetimi", level: "İleri Seviye" }
      ]
    }
  ],
  education: [
    {
      degree: "Bilgisayar Programcılığı Ön Lisans",
      institution: "Trakya Üniversitesi",
      location: "Edirne, Türkiye",
      period: "09/2023 — 08/2025",
      gpa: "3.12 / 4.00",
      details: [
        "3.12 / 4.00 genel not ortalaması ile mezun oldu.",
        "Temel Dersler: Nesne Yönelimli Programlama (OOP), Veri Yapıları ve Algoritmalar, Mobil Uygulama Geliştirme, İlişkisel Veritabanları (MySQL/SQL), Web Uygulama Mimarisi, Yazılım Mühendisliği Temelleri."
      ]
    }
  ]
};
