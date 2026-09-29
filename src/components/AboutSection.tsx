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
    { label: "Cross-Platform Mobile", detail: "Flutter, Dart, Riverpod State Management" },
    { label: "Backend & API Integration", detail: "Laravel, PHP, MySQL, RESTful Endpoints" },
    { label: "App Store & Play Delivery", detail: "App Store Connect & Google Play Console" },
    { label: "Cloud & Real-time Messaging", detail: "Firebase Auth, FCM Push Services, Hive Caching" }
  ] : [
    { label: "Çapraz Platform Mobil", detail: "Flutter, Dart, Riverpod Durum Yönetimi" },
    { label: "Backend & API Entegrasyonu", detail: "Laravel, PHP, MySQL, RESTful Uç Noktalar" },
    { label: "Mağaza Yayın & Dağıtım", detail: "App Store Connect & Google Play Console" },
    { label: "Bulut & Bildirim Mimarisi", detail: "Firebase Auth, FCM Anlık Bildirim, Hive Önbellek" }
  ];

  return (
    <section
      id="about"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {lang === 'en' ? 'About' : 'Hakkımda'}
        </h2>
      </div>

      <div className="space-y-4 text-slate-400 text-sm sm:text-base leading-relaxed">
        {profile.aboutParagraphs.map((paragraph, idx) => (
          <p key={idx} className="text-slate-400">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Highlights Grid */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {coreStrengths.map((item, idx) => (
          <div
            key={idx}
            className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-violet-500/40 transition-all hover:bg-slate-900/80"
          >
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-violet-400 mt-0.5 shrink-0" />
              <div>
                <h4 className="text-xs font-semibold text-slate-200">
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
