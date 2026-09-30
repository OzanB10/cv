import React from 'react';
import { PortfolioContent } from '../data/portfolioData';
import { CheckCircle2, Sparkles, Smartphone, Code2 } from 'lucide-react';
import { ThemeConfig } from '../types/theme';

interface AboutSectionProps {
  content: PortfolioContent;
  lang: 'en' | 'tr';
  theme: ThemeConfig;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ content, lang, theme }) => {
  const { profile } = content;

  const coreStrengths = lang === 'en' ? [
    { label: "Mobile App Development", detail: "Fast, modern iOS & Android apps using Flutter & Dart" },
    { label: "Backend & API Integration", detail: "Reliable data communication with Laravel, PHP & MySQL" },
    { label: "Store Delivery & Releases", detail: "App Store Connect & Google Play Console distribution" },
    { label: "Cloud & Push Notifications", detail: "Firebase messaging and offline data support" }
  ] : [
    { label: "Mobil Uygulama Geliştirme", detail: "Flutter ve Dart ile iOS ve Android için modern uygulamalar" },
    { label: "Backend & API Entegrasyonu", detail: "Laravel, PHP ve MySQL ile güvenilir veri iletişimi" },
    { label: "Mağaza & Yayın Süreçleri", detail: "App Store Connect ve Google Play ile mağaza yayınları" },
    { label: "Bulut & Anlık Bildirimler", detail: "Firebase bildirimleri ve yerel veri saklama desteği" }
  ];

  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-950/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {lang === 'en' ? 'About' : 'Hakkımda'}
        </h2>
      </div>

      <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
        {profile.aboutParagraphs.map((paragraph, idx) => (
          <p key={idx} className="text-slate-300">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Highlights Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {coreStrengths.map((item, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-teal-500/40 transition-all hover:bg-slate-900/90"
          >
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-xs sm:text-sm font-semibold text-slate-100">
                  {item.label}
                </h4>
                <p className="text-xs text-slate-400 mt-0.5">
                  {item.detail}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
