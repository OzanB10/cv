import React from 'react';
import { 
  Linkedin, 
  Mail, 
  Phone, 
  FileText, 
  MapPin, 
  Layers
} from 'lucide-react';
import { PortfolioContent } from '../data/portfolioData';
import { ThemeConfig } from '../types/theme';

interface SidebarProps {
  content: PortfolioContent;
  activeSection: string;
  lang: 'en' | 'tr';
  theme: ThemeConfig;
  onSelectTheme?: (t: any) => void;
  onToggleLang: () => void;
  onOpenResume: () => void;
  onOpenArchive: () => void;
  onOpenContact: () => void;
  onSelectSection?: (id: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  content,
  activeSection,
  lang,
  theme,
  onToggleLang,
  onOpenResume,
  onOpenArchive,
  onOpenContact,
  onSelectSection,
}) => {
  const { profile, navigation } = content;

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (onSelectSection) {
      onSelectSection(id);
    }
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 30;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <aside className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 py-12">
      <div>
        {/* Top Controls: Availability & Language Switch */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium text-teal-300 bg-teal-950/70 border border-teal-800/40 rounded-full shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400"></span>
            </span>
            <span className="truncate max-w-[200px] sm:max-w-none">
              {lang === 'en' ? 'Open to New Opportunities' : 'Yeni Fırsatlara Açık'}
            </span>
          </div>

          {/* Language Switch */}
          <button
            onClick={onToggleLang}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-mono text-slate-300 hover:text-teal-300 bg-slate-900/90 hover:bg-slate-800 border border-slate-800 rounded-md transition-colors shadow-sm"
            title={lang === 'en' ? 'Türkçe versiyona geç' : 'Switch to English'}
          >
            <span className={lang === 'en' ? 'font-bold text-teal-300' : 'text-slate-500'}>EN</span>
            <span className="text-slate-600">/</span>
            <span className={lang === 'tr' ? 'font-bold text-teal-300' : 'text-slate-500'}>TR</span>
          </button>
        </div>

        {/* Name & Headline */}
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-100 font-display">
          <a href="/" className="hover:text-teal-200 transition-colors">{profile.name}</a>
        </h1>
        
        <h2 className="mt-3 text-lg sm:text-xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-400">
          {profile.title}
        </h2>
        
        <p className="mt-4 max-w-xs leading-normal text-slate-400 text-sm sm:text-base">
          {profile.subtitle}
        </p>

        {/* Quick Meta Location & Status */}
        <div className="mt-4 flex items-center gap-2 text-xs text-slate-400 font-mono">
          <MapPin className="w-3.5 h-3.5 text-teal-400 shrink-0" />
          <span>{profile.location}</span>
        </div>

        {/* Action Buttons Row */}
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-lg shadow-teal-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <FileText className="w-4 h-4" />
            <span>{lang === 'en' ? 'View PDF CV / Résumé' : 'Orijinal CV (PDF) İncele'}</span>
          </button>

          <button
            onClick={onOpenContact}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-teal-300" />
            <span>{lang === 'en' ? 'Get In Touch' : 'İletişime Geç'}</span>
          </button>

          <button
            onClick={onOpenArchive}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-teal-300 bg-slate-900/60 hover:bg-slate-850 border border-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5 text-slate-400" />
            <span>{lang === 'en' ? 'Archive' : 'Arşiv'}</span>
          </button>
        </div>

        {/* Brittany Chiang Navigation Menu */}
        <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
          <ul className="w-max space-y-3">
            {navigation.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => scrollToSection(e, item.id)}
                    className={`group flex items-center py-2 transition-all ${
                      isActive ? 'active' : ''
                    }`}
                  >
                    <span
                      className={`nav-indicator mr-4 h-px transition-all motion-reduce:transition-none ${
                        isActive
                          ? 'w-16 bg-teal-300'
                          : 'w-8 bg-slate-600 group-hover:w-16 group-hover:bg-slate-200'
                      }`}
                    />
                    <span
                      className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors ${
                        isActive
                          ? 'text-slate-100 font-bold'
                          : 'text-slate-400 group-hover:text-slate-200'
                      }`}
                    >
                      {item.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Social & Contact Links */}
      <div className="mt-12 lg:mt-0 pt-6 border-t border-slate-800/60 lg:border-none">
        <ul className="flex items-center gap-5 text-slate-400" aria-label="Social media">
          <li>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="block hover:text-teal-300 transition-colors p-1"
              aria-label="LinkedIn Profile"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="block hover:text-teal-300 transition-colors p-1"
              aria-label="Email Address"
              title={profile.email}
            >
              <Mail className="w-5 h-5" />
            </a>
          </li>
          <li>
            <a
              href={`tel:${profile.phone.replace(/\s+/g, '')}`}
              className="block hover:text-teal-300 transition-colors p-1"
              aria-label="Phone Number"
              title={profile.phone}
            >
              <Phone className="w-5 h-5" />
            </a>
          </li>
        </ul>
        <div className="mt-3 text-xs text-slate-400 font-mono">
          <span>{profile.email}</span>
          <span className="mx-2 text-slate-700">·</span>
          <span>{profile.phone}</span>
        </div>
      </div>
    </aside>
  );
};
