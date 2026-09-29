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
    subtitle: "I build scalable, user-focused cross-platform mobile experiences with Flutter, Riverpod, and clean backend APIs.",
    summary: "Mobile Developer with 2 years of experience building cross-platform applications using Flutter. Skilled in Flutter, Riverpod, Firebase, REST APIs, and Laravel, with hands-on experience publishing applications to the App Store and Google Play. Passionate about building scalable, user-focused products and leveraging AI-assisted development tools to improve productivity, code quality, and software delivery.",
    aboutParagraphs: [
      "I am a passionate Mobile Developer with over 2 years of hands-on experience crafting high-performance, responsive cross-platform applications with Flutter and Dart. My engineering approach combines clean architecture, predictable state management using Riverpod, and robust backend integration with Laravel and REST APIs.",
      "At Anatolia System, I transitioned from an enthusiastic intern to a Full Stack Junior Developer, taking end-to-end ownership of critical mobile features from initial UI/UX conception to store publishing on both the Apple App Store and Google Play Store. I have also designed and deployed custom real-time push notification pipelines using Firebase Cloud Messaging (FCM) and custom PHP/Laravel microservices.",
      "Beyond standard mobile development, I actively embrace AI-assisted workflows using tools like Cursor and Claude Code to accelerate prototyping, maintain stringent code quality, and architect resilient software solutions."
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
        "Independently delivered end-to-end mobile features in Flutter, from UI design to backend API integration, ensuring smooth release cycles.",
        "Designed database structures and collaborated on backend endpoints using Laravel and PHP.",
        "Implemented Firebase Cloud Messaging (FCM) push notifications with a custom PHP server, enabling real-time user engagement without relying on third-party notification services.",
        "Managed App Store & Google Play release processes (build uploads, store listing, production deployment)."
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
        "Developed clean and reusable UI components using Flutter.",
        "Integrated REST APIs and implemented basic state management.",
        "Supported debugging, performance improvements, and feature enhancements across multiple active mobile repositories."
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
      tagline: "Flutter e-Invoicing & Cloud Accounting Mobile Platform",
      description: "Designed and developed SadeFatura, a Flutter e-Invoicing platform featuring e-Invoice/e-Archive management, invoice generation, document storage, authentication, cloud synchronization, API integration, and secure digital invoicing workflows.",
      longDescription: "SadeFatura is a digital invoicing and accounting assistant built for Turkish businesses, freelancers, and enterprises. It facilitates automated e-Invoice (e-Fatura) and e-Archive (e-Arşiv) creation, instant PDF export, cloud syncing, and secure authentication pipelines connecting directly with national financial integration providers.",
      image: "/src/assets/images/sade1.png",
      images: [
        "/src/assets/images/sade1.png",
        "/src/assets/images/sade2.png",
        "/src/assets/images/sade3.png",
        "/src/assets/images/sade4.png"
      ],
      role: "Lead Mobile Developer & UI Architect",
      technologies: ["Flutter", "Dart", "REST APIs", "PDF Generation", "Cloud Sync", "Secure Storage", "State Management", "e-Invoice API"],
      keyFeatures: [
        "End-to-end e-Invoice and e-Archive generation with Turkish tax compliance",
        "Encrypted local & cloud document storage with instant search",
        "Seamless PDF rendering and direct WhatsApp/Email sharing pipelines",
        "Real-time revenue & expense tracking visual summaries",
        "Multi-tenant authentication with role-based permissions"
      ],
      architectureHighlights: [
        "Repository pattern with clean separation between data layer and UI",
        "Optimized vector PDF renderer for lightning-fast invoice generation",
        "Biometric & token-based session security for financial records"
      ]
    },
    {
      id: "anamedsis",
      title: "Anamedsis",
      date: "11/2025 — 01/2026",
      year: "2025",
      tagline: "SaaS Business Management & CRM Platform",
      description: "Designed and developed Anamedsis, a Flutter + Riverpod SaaS business management platform featuring appointment scheduling, CRM, customer management, inventory tracking, financial reporting, authentication, notifications, offline caching, and API-driven workflows.",
      longDescription: "Anamedsis is an all-in-one mobile SaaS suite tailored for service businesses and clinics. Built with Flutter and Riverpod, it combines real-time calendar appointments, customer relationship management (CRM), stock inventory alerts, and offline caching with automatic server synchronization.",
      image: "/src/assets/images/anamedsis1.png",
      images: [
        "/src/assets/images/anamedsis1.png",
        "/src/assets/images/anamedsis2.png",
        "/src/assets/images/anamedsis3.png",
        "/src/assets/images/anamedsis4.png"
      ],
      role: "Mobile Architect & Frontend Engineer",
      technologies: ["Flutter", "Riverpod", "REST APIs", "CRM", "Offline Caching", "Financial Analytics", "Push Notifications", "Hive"],
      keyFeatures: [
        "Interactive schedule & appointment calendar with color-coded slots",
        "Complete customer relationship pipeline (CRM) with history logs",
        "Inventory level monitoring with low-stock push alerts",
        "Financial overview with daily/monthly revenue analytics graphs",
        "Offline-first capability allowing field operations without internet"
      ],
      architectureHighlights: [
        "Reactive state orchestration using Riverpod StateNotifier and Providers",
        "Local caching with Hive database and background sync resolver",
        "Modular UI design system matching modern material ergonomics"
      ]
    },
    {
      id: "mekanbook",
      title: "MekanBook",
      date: "04/2025 — 06/2025",
      year: "2025",
      tagline: "Venue Discovery & Table Reservation App",
      description: "Designed and developed MekanBook, a Flutter + Riverpod venue discovery app featuring API-driven place data, real-time search, city/district/category filters, authentication, offline caching, favorites, and reservation workflows for seamless venue discovery and booking.",
      longDescription: "MekanBook connects users with top-rated cafes, bistros, and restaurants across Turkey. Users can explore curated spots on an interactive map, filter by cuisine and neighborhood, read verified reviews, save favorites offline, and book tables with real-time slot verification.",
      image: "/src/assets/images/mekan1.png",
      images: [
        "/src/assets/images/mekan1.png",
        "/src/assets/images/mekan2.png",
        "/src/assets/images/mekan3.png"
      ],
      role: "Flutter Developer",
      technologies: ["Flutter", "Riverpod", "Location Services", "Map Integration", "REST APIs", "Filter Engine", "Local DB"],
      keyFeatures: [
        "Dynamic city, district, and culinary category filtering engine",
        "Live search with debounced autocomplete and geolocated distance calculation",
        "Interactive venue detail pages with menus, pricing, and photo galleries",
        "Bookmark & favorites system with offline availability",
        "Instant table booking and reservation confirmation flows"
      ],
      architectureHighlights: [
        "Riverpod-driven asynchronous data fetching with caching mechanisms",
        "Optimized image caching and lazy loading for smooth 60fps list scrolling",
        "Location-aware distance calculations with battery-efficient sensors"
      ]
    },
    {
      id: "internetin-gazetesi",
      title: "İnternetin Gazetesi",
      date: "02/2025 — 03/2025",
      year: "2025",
      tagline: "High-Speed News Reader with Firebase & FCM",
      description: "Designed and developed İnternetin Gazetesi, a Flutter news application featuring Firebase Authentication, Firebase Cloud Messaging, deep links, category-based push notifications, offline Hive caching, optimized image loading, and API-driven news delivery.",
      longDescription: "A high-performance news reading application engineered for instant loading and high readership engagement. Features segmented category push alerts via FCM, custom bookmarking, and offline article caching.",
      image: "/src/assets/images/internet1.png",
      images: [
        "/src/assets/images/internet1.png",
        "/src/assets/images/internet2.png"
      ],
      role: "Mobile Developer",
      technologies: ["Flutter", "Firebase Auth", "Firebase FCM", "Hive Local DB", "Deep Linking", "REST APIs"],
      keyFeatures: [
        "Breaking news push notifications categorized by topic interests",
        "Instant deep linking directly into articles from push notifications",
        "Offline reading mode with background caching via Hive",
        "Dark/Light theme switching and customizable font size controls",
        "Social sharing with custom branded links"
      ],
      architectureHighlights: [
        "Firebase Cloud Messaging setup with customized topic subscription filters",
        "Efficient media caching architecture reducing network payload by 40%",
        "Deep link router integration for instant navigation"
      ]
    },
    {
      id: "iko-haber",
      title: "İko Haber",
      date: "03/2026 — 03/2026",
      year: "2026",
      tagline: "White-Labeled Multi-Flavor Mobile News Platform",
      description: "Designed and developed İkoHaber, a Flutter news application built as a white-labeled variant of İnternetin Gazetesi using Flutter flavors, featuring Firebase Authentication, Firebase Cloud Messaging, deep links, category-based push notifications, offline Hive caching, optimized image loading, and API-driven news delivery.",
      longDescription: "İkoHaber is a specialized industry news publication developed using an enterprise white-label architecture. Utilizing Flutter build flavors and distinct configuration bundles, it allows continuous multi-tenant deployments from a unified single codebase.",
      image: "/src/assets/images/0x0ss.png",
      images: [
        "/src/assets/images/0x0ss.png",
        "/src/assets/images/iko2.png",
        "/src/assets/images/iko3.png",
        "/src/assets/images/iko4.png",
        "/src/assets/images/iko5.png"
      ],
      role: "Mobile Architect",
      technologies: ["Flutter Flavors", "Firebase", "FCM", "Deep Links", "White-Labeling", "Hive", "CI/CD Setup"],
      keyFeatures: [
        "Multi-flavor architecture with customized branding, assets, and bundle IDs",
        "Dedicated category-based push notification topics",
        "High-efficiency offline cache with automatic synchronization",
        "Streamlined App Store and Play Store release automation"
      ],
      architectureHighlights: [
        "Single-codebase white-label setup with runtime flavor configuration",
        "Targeted push notification routing tailored for sectoral subscribers",
        "Shared business logic core with isolated UI theme tokens"
      ]
    },
    {
      id: "dugunmaster",
      title: "DüğünMaster",
      date: "2025 — 2026",
      year: "2026",
      tagline: "Marketplace & Digital Wedding Planning Platform (Web / Full-Stack)",
      description: "Marketplace & wedding planning platform connecting couples with wedding vendors. Developed business listings, dynamic filtering, search, favorites, quote requests, user/business management, and digital invitations using Flutter & Laravel REST API. Integrated planning tools including budget tracking, guest lists, seating charts, and RSVP. Built SEO-optimized category, location, and vendor landing pages.",
      longDescription: "DüğünMaster is a comprehensive two-sided marketplace and wedding organization ecosystem. It connects couples with wedding venues, photographers, bridal shops, and catering services while providing digital planning tools including interactive seating charts, budget calculators, guest RSVP management, and dynamic quote request pipelines.",
      image: "/src/assets/images/dugunmaster_web_preview_1790689268369.jpg",
      images: [
        "/src/assets/images/dugunmaster_web_preview_1790689268369.jpg",
        "/src/assets/images/dugunmaster_planner_tools_1790689286081.jpg"
      ],
      role: "Flutter / Full-Stack Developer",
      technologies: ["Flutter", "Dart", "Laravel", "REST API", "MySQL", "Firebase", "Riverpod", "Authentication", "State Management", "Responsive UI", "SEO", "Dynamic Filtering", "Marketplace Architecture"],
      keyFeatures: [
        "Dynamic vendor marketplace with multi-tier category and geolocation filtering",
        "Direct quote request (teklif alma) and vendor inquiry communication pipelines",
        "Interactive digital wedding planner: seating charts, budget breakdowns & guest RSVP",
        "Digital wedding invitation generator with customized sharing links",
        "SEO-optimized responsive landing pages for cities, districts, and vendor categories"
      ],
      architectureHighlights: [
        "Modular Laravel REST backend architecture with optimized MySQL relational schemas",
        "State management and reactive UI layers with Riverpod & GetX patterns",
        "High-performance caching and SEO-friendly dynamic routing structures"
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
    subtitle: "Flutter, Riverpod ve güçlü backend API'leri ile ölçeklenebilir, kullanıcı odaklı çapraz platform mobil uygulamalar geliştiriyorum.",
    summary: "Flutter ile çapraz platform uygulamalar geliştirme konusunda 2 yıllık deneyime sahip Mobil Geliştirici. Flutter, Riverpod, Firebase, REST API'ler ve Laravel konularında yetkin; App Store ve Google Play'e uygulama yayınlama deneyimine sahip. Ölçeklenebilir, kullanıcı odaklı ürünler geliştirmeye ve AI destekli geliştirme araçlarıyla üretkenliği ve kod kalitesini artırmaya tutkulu.",
    aboutParagraphs: [
      "Flutter ve Dart ile yüksek performanslı, duyarlı ve kullanıcı dostu çapraz platform mobil uygulamalar geliştiren 2 yılı aşkın deneyime sahip bir Mobil Geliştiriciyim. Mühendislik yaklaşımım; temiz mimari (Clean Architecture), Riverpod ile öngörülebilir durum yönetimi ve Laravel/PHP ile sağlam REST API entegrasyonlarına dayanır.",
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
        "Flutter ile UI tasarımından backend API entegrasyonuna kadar uçtan uca mobil özellikleri bağımsız olarak teslim ederek sorunsuz sürüm döngüleri sağladı.",
        "Laravel ve PHP kullanarak veritabanı yapılarını tasarladı ve backend uç noktalarında iş birliği yaptı.",
        "Üçüncü taraf bildirim servislerine bağımlı kalmadan gerçek zamanlı kullanıcı etkileşimi sağlayan özel bir PHP sunucusuyla Firebase Cloud Messaging (FCM) anlık bildirimlerini uyguladı.",
        "App Store & Google Play sürüm süreçlerini (derleme yüklemeleri, mağaza listelemesi, canlıya alma) yönetti."
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
        "Flutter kullanarak temiz ve yeniden kullanılabilir UI bileşenleri geliştirdi.",
        "REST API'leri entegre etti ve temel durum yönetimini uyguladı.",
        "Hata ayıklama (debugging), performans iyileştirmeleri ve özellik geliştirmelerine destek verdi."
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
      tagline: "Flutter e-Fatura & Bulut Ön Muhasebe Mobil Platformu",
      description: "e-Fatura/e-Arşiv yönetimi, fatura oluşturma, belge saklama, kimlik doğrulama, bulut senkronizasyonu, API entegrasyonu ve güvenli dijital faturalama iş akışlarını içeren bir Flutter e-Faturalandırma platformu olan SadeFatura'yı tasarladı ve geliştirdi.",
      longDescription: "SadeFatura, işletmeler ve serbest meslek sahipleri için tasarlanmış modern bir dijital e-dönüşüm platformudur. e-Fatura ve e-Arşiv oluşturma, anında PDF çıktısı alma, bulut depolama ve güvenli entegratör API bağlantılarını içerir.",
      image: "/src/assets/images/sade1.png",
      images: [
        "/src/assets/images/sade1.png",
        "/src/assets/images/sade2.png",
        "/src/assets/images/sade3.png",
        "/src/assets/images/sade4.png"
      ],
      role: "Lead Mobil Geliştirici & UI Mimarı",
      technologies: ["Flutter", "Dart", "REST APIs", "PDF Generation", "Cloud Sync", "Secure Storage", "State Management", "e-Fatura API"],
      keyFeatures: [
        "GİB uyumlu e-Fatura ve e-Arşiv oluşturma ve yönetimi",
        "Şifrelenmiş yerel ve bulut belge depolama",
        "Tek tıkla PDF üretimi ve WhatsApp/E-posta ile paylaşım",
        "Gelir/gider istatistikleri ve görsel özet panelleri",
        "Çok kullanıcılı güvenli kimlik doğrulama"
      ],
      architectureHighlights: [
        "Repository mimarisi ile veri ve UI katmanının net ayrımı",
        "Hızlı ve optimize vektörel PDF oluşturma motoru",
        "Finansal veriler için biyometrik ve token tabanlı güvenlik"
      ]
    },
    {
      id: "anamedsis",
      title: "Anamedsis",
      date: "11/2025 — 01/2026",
      year: "2025",
      tagline: "SaaS İşletme Yönetimi & Randevu CRM Platformu",
      description: "Randevu planlama, CRM, müşteri yönetimi, stok takibi, finansal raporlama, kimlik doğrulama, bildirimler, çevrimdışı önbellekleme ve API odaklı iş akışlarını içeren Flutter + Riverpod SaaS işletme yönetim platformu Anamedsis'i tasarladı ve geliştirdi.",
      longDescription: "Hizmet sektöründeki işletmeler ve klinikler için geliştirilmiş hepsi-bir-arada mobil SaaS çözümü. Randevu takvimi, müşteri geçmişi, stok seviyeleri ve çevrimdışı çalışma desteği sunar.",
      image: "/src/assets/images/anamedsis1.png",
      images: [
        "/src/assets/images/anamedsis1.png",
        "/src/assets/images/anamedsis2.png",
        "/src/assets/images/anamedsis3.png",
        "/src/assets/images/anamedsis4.png"
      ],
      role: "Mobil Mimar & Frontend Mühendisi",
      technologies: ["Flutter", "Riverpod", "REST APIs", "CRM", "Çevrimdışı Önbellek", "Finansal Raporlama", "Push Notifications", "Hive"],
      keyFeatures: [
        "Görsel renk kodlu interaktif randevu takvimi",
        "Detaylı müşteri yönetim ve geçmiş takip (CRM) altyapısı",
        "Kritik stok seviyeleri için anlık bildirim uyarıları",
        "Günlük/aylık gelir-gider grafiksel analizleri",
        "İnternet kesintilerinde kesintisiz çevrimdışı çalışma"
      ],
      architectureHighlights: [
        "Riverpod StateNotifier ve Provider mimarisi",
        "Hive veritabanı ile yerel önbellek ve otomatik arka plan senkronizasyonu",
        "Modern Material ergonomisine uygun modüler UI sistemi"
      ]
    },
    {
      id: "mekanbook",
      title: "MekanBook",
      date: "04/2025 — 06/2025",
      year: "2025",
      tagline: "Mekan Keşfi & Masa Rezervasyon Uygulaması",
      description: "API odaklı mekan verileri, gerçek zamanlı arama, şehir/ilçe/kategori filtreleri, kimlik doğrulama, çevrimdışı önbellekleme, favoriler ve rezervasyon iş akışlarını içeren Flutter + Riverpod mekan keşif uygulaması MekanBook'u tasarladı ve geliştirdi.",
      longDescription: "Kullanıcıların en popüler kafe, restoran ve sosyal mekanları keşfetmesini, filtrelemesini ve doğrudan masa rezervasyonu yapmasını sağlayan kapsamlı bir mobil uygulama.",
      image: "/src/assets/images/mekan1.png",
      images: [
        "/src/assets/images/mekan1.png",
        "/src/assets/images/mekan2.png",
        "/src/assets/images/mekan3.png"
      ],
      role: "Flutter Geliştirici",
      technologies: ["Flutter", "Riverpod", "Konum Servisleri", "Harita Entegrasyonu", "REST APIs", "Filtreleme Motoru", "Local DB"],
      keyFeatures: [
        "İl, ilçe ve mekan kategorisi bazlı gelişmiş filtreleme",
        "Canlı anlık arama ve mesafeye göre sıralama",
        "Menü, fiyat ve fotoğraf galerisi içeren mekan detay sayfaları",
        "Çevrimdışı erişilebilir favori listesi",
        "Anında masa rezervasyonu ve onay akışı"
      ],
      architectureHighlights: [
        "Riverpod ile asenkron veri yönetimi ve önbellekleme",
        "Akıcı 60fps kaydırma için optimize edilmiş görsel önbellekleme",
        "Pil dostu konum servisleri entegrasyonu"
      ]
    },
    {
      id: "internetin-gazetesi",
      title: "İnternetin Gazetesi",
      date: "02/2025 — 03/2025",
      year: "2025",
      tagline: "Firebase & FCM Destekli Hızlı Haber Okuyucu",
      description: "Firebase Kimlik Doğrulama, Firebase Cloud Messaging, derin bağlantılar (deep links), kategori bazlı anlık bildirimler, çevrimdışı Hive önbellekleme, optimize görsel yükleme ve API odaklı haber sunumu içeren bir Flutter haber uygulaması olan İnternetin Gazetesi'ni tasarladı ve geliştirdi.",
      longDescription: "Hızlı yükleme ve yüksek kullanıcı etkileşimi hedefleyen modern bir haber uygulaması. FCM ile ilgi alanına özel anlık bildirimler ve Hive ile çevrimdışı haber okuma olanağı sunar.",
      image: "/src/assets/images/internet1.png",
      images: [
        "/src/assets/images/internet1.png",
        "/src/assets/images/internet2.png"
      ],
      role: "Mobil Geliştirici",
      technologies: ["Flutter", "Firebase Auth", "Firebase FCM", "Hive Local DB", "Deep Linking", "REST APIs"],
      keyFeatures: [
        "Kategori ve ilgi alanına göre özelleştirilmiş son dakika bildirimleri",
        "Bildirimden doğrudan ilgili habere yönlendiren derin bağlantılar (deep link)",
        "Hive veritabanı ile internet olmadan haber okuma modu",
        "Karanlık / Aydınlık tema ve yazı boyutu özelleştirme",
        "Sosyal medya haber paylaşım altyapısı"
      ],
      architectureHighlights: [
        "FCM özel konu (topic) abonelik mimarisi",
        "Ağ trafiğini %40 azaltan akıllı görsel önbellek katmanı",
        "Derin bağlantı yönlendirici entegrasyonu"
      ]
    },
    {
      id: "iko-haber",
      title: "İko Haber",
      date: "03/2026 — 03/2026",
      year: "2026",
      tagline: "Flutter Flavors ile White-Label Mobil Haber Platformu",
      description: "Flutter flavors kullanılarak İnternetin Gazetesi'nin white-label varyantı olarak geliştirilen; Firebase Kimlik Doğrulama, Firebase Cloud Messaging, derin bağlantılar, kategori bazlı anlık bildirimler, çevrimdışı Hive önbellekleme ve optimize görsel yükleme içeren İkoHaber uygulamasını tasarladı ve geliştirdi.",
      longDescription: "İkoHaber, sektörel haber yayını için Flutter build flavors mimarisiyle tek bir kod tabanından üretilen white-label bir mobil haber platformudur.",
      image: "/src/assets/images/0x0ss.png",
      images: [
        "/src/assets/images/0x0ss.png",
        "/src/assets/images/iko2.png",
        "/src/assets/images/iko3.png",
        "/src/assets/images/iko4.png",
        "/src/assets/images/iko5.png"
      ],
      role: "Mobil Mimar",
      technologies: ["Flutter Flavors", "Firebase", "FCM", "Deep Links", "White-Labeling", "Hive", "CI/CD"],
      keyFeatures: [
        "Özelleştirilmiş marka kimliği ve tema paketleriyle multi-flavor mimari",
        "Sektörel haberlere özel anlık bildirim kanalları",
        "Otomatik senkronizasyonlu çevrimdışı önbellek",
        "App Store ve Play Store sürüm otomasyonu"
      ],
      architectureHighlights: [
        "Tek kod tabanında çoklu varyant (white-label) altyapısı",
        "Hedefli sektörel FCM bildirim kanalları",
        "İzole edilmiş UI tema belirteçleri (theme tokens)"
      ]
    },
    {
      id: "dugunmaster",
      title: "DüğünMaster",
      date: "2025 — 2026",
      year: "2026",
      tagline: "Pazaryeri & Dijital Düğün Planlama Platformu (Web / Full-Stack)",
      description: "Düğün sektöründeki işletmeleri çiftlerle buluşturan marketplace ve düğün planlama platformunun geliştirilmesi. Flutter ve Laravel REST API kullanarak işletme listeleme, dinamik filtreleme, arama, favoriler, teklif alma, kullanıcı/işletme yönetimi ve dijital düğün davetiyesi gibi modüllerin geliştirilmesi. Bütçe planlama, misafir listesi, oturma planı ve RSVP gibi düğün planlama araçlarının API ve mobil/web entegrasyonlarının gerçekleştirilmesi. SEO odaklı kategori, lokasyon ve işletme sayfalarının geliştirilmesi.",
      longDescription: "DüğünMaster, evlenecek çiftler ile düğün salonları, fotoğrafçılar, organizasyon firmaları ve gelinlikçileri bir araya getiren iki taraflı bir pazaryeri ve planlama ekosistemidir. İnteraktif oturma planı, bütçe takipçisi, dijital davetiye, LCV (RSVP) ve anlık fiyat teklifi alma modülleri içerir.",
      image: "/src/assets/images/dugunmaster_web_preview_1790689268369.jpg",
      images: [
        "/src/assets/images/dugunmaster_web_preview_1790689268369.jpg",
        "/src/assets/images/dugunmaster_planner_tools_1790689286081.jpg"
      ],
      role: "Flutter / Full-Stack Geliştirici",
      technologies: ["Flutter", "Dart", "Laravel", "REST API", "MySQL", "Firebase", "Riverpod", "Authentication", "State Management", "Responsive UI", "SEO", "Dynamic Filtering", "Marketplace Architecture"],
      keyFeatures: [
        "Kategori, ilçe ve bütçe bazlı dinamik işletme listeleme ve filtreleme motoru",
        "İşletmelerden anında fiyat teklifi alma ve rezervasyon talep altyapısı",
        "İnteraktif düğün planlama araçları: masa oturma planı, bütçe yönetimi ve misafir listesi",
        "Kişiselleştirilebilir dijital düğün davetiyesi ve online LCV (RSVP) takibi",
        "Arama motorları için SEO ve lokasyon odaklı optimize edilmiş responsive sayfalar"
      ],
      architectureHighlights: [
        "Laravel REST API ile optimize edilmiş MySQL ilişkisel veritabanı mimarisi",
        "Riverpod ve reaktif durum yönetimi ile akıcı mobil/web kullanıcı deneyimi",
        "Yüksek performanslı arama ve dinamik filtreleme sorguları"
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
