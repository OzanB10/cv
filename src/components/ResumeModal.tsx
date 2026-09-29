import React, { useEffect, useRef } from 'react';
import { PortfolioContent } from '../data/portfolioData';
import { 
  X, 
  Printer, 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Copy, 
  Check, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Sparkles, 
  ExternalLink,
  Layers,
  Award
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: PortfolioContent;
  lang: 'en' | 'tr';
  onShowToast: (msg: string) => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  content,
  lang,
  onShowToast,
}) => {
  const { profile, experiences, projects, skills, education } = content;
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handlePrint = () => {
    window.print();
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    onShowToast(`${label} ${lang === 'en' ? 'copied to clipboard!' : 'panoya kopyalandı!'}`);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto print:p-0 print:m-0">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity print:hidden"
        onClick={onClose}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl z-10 my-6 flex flex-col max-h-[92vh] overflow-hidden print:max-h-none print:overflow-visible print:border-none print:shadow-none print:bg-white print:text-black print:p-0">
        
        {/* Modal Toolbar Header */}
        <div className="shrink-0 flex items-center justify-between bg-slate-900/95 backdrop-blur border-b border-slate-800 px-6 py-4 print:hidden">
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-white font-display">
              {profile.name} — {lang === 'en' ? 'Curriculum Vitae / Résumé' : 'Resmi Özgeçmiş (CV)'}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-sm shadow-teal-500/20 transition-all cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-4 h-4" />
              <span>{lang === 'en' ? 'Print / PDF' : 'Yazdır / PDF İndir'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Resume Document */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-12 print:p-0 print:overflow-visible bg-slate-900/60 print:bg-white">
          <div ref={printRef} className="max-w-4xl mx-auto space-y-10 font-sans print:text-black">
            
            {/* 1. Header Section */}
            <div className="border-b border-slate-800/90 pb-8 print:border-black">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <h1 className="text-3xl sm:text-5xl font-extrabold text-white print:text-black font-display tracking-tight">
                    {profile.name}
                  </h1>
                  <p className="text-xl sm:text-2xl font-bold text-teal-300 print:text-gray-800 mt-2">
                    {profile.title}
                  </p>
                  <p className="text-sm sm:text-base text-slate-300 print:text-gray-600 mt-1">
                    {profile.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2 font-mono text-xs sm:text-sm print:hidden">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-950/80 border border-teal-800/50 text-teal-300 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping inline-block" />
                    {lang === 'en' ? 'Available for Full-time / Projects' : 'Aktif İş & Proje Fırsatlarına Açık'}
                  </span>
                </div>
              </div>

              {/* Contact Meta Info Cards */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 print:grid-cols-2">
                <button
                  onClick={() => copyToClipboard(profile.email, 'Email')}
                  className="p-3 rounded-xl bg-slate-950/80 hover:bg-slate-950 border border-slate-800/80 text-left transition-colors flex items-center gap-3 group cursor-pointer print:border-none print:p-0 print:bg-transparent"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-teal-500/50 print:hidden">
                    <Mail className="w-4 h-4 text-teal-400" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider print:text-black">Email</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-teal-300 truncate print:text-black">
                      {profile.email}
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => copyToClipboard(profile.phone, 'Telefon')}
                  className="p-3 rounded-xl bg-slate-950/80 hover:bg-slate-950 border border-slate-800/80 text-left transition-colors flex items-center gap-3 group cursor-pointer print:border-none print:p-0 print:bg-transparent"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-teal-500/50 print:hidden">
                    <Phone className="w-4 h-4 text-teal-400" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider print:text-black">Telefon</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-teal-300 truncate print:text-black">
                      {profile.phone}
                    </div>
                  </div>
                </button>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center gap-3 print:border-none print:p-0 print:bg-transparent">
                  <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 print:hidden">
                    <MapPin className="w-4 h-4 text-teal-400" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider print:text-black">Konum</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200 truncate print:text-black">
                      {profile.location}
                    </div>
                  </div>
                </div>

                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="p-3 rounded-xl bg-slate-950/80 hover:bg-slate-950 border border-slate-800/80 transition-colors flex items-center gap-3 group print:border-none print:p-0 print:bg-transparent"
                >
                  <div className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0 group-hover:border-teal-500/50 print:hidden">
                    <Linkedin className="w-4 h-4 text-teal-400" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider print:text-black">LinkedIn</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-teal-300 truncate print:text-black">
                      ozan-bolel
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* 2. Professional Summary / Career Statement */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-teal-300 print:text-black font-mono mb-3 flex items-center gap-2 border-b border-teal-500/20 pb-2">
                <Sparkles className="w-4 h-4 text-teal-400" />
                <span>{lang === 'en' ? 'Professional Summary' : 'Kariyer Özeti'}</span>
              </h2>
              <div className="p-5 sm:p-6 rounded-xl bg-slate-950/70 border border-slate-800/80 print:bg-transparent print:p-0 print:border-none">
                <p className="text-base sm:text-[17px] text-slate-100 print:text-gray-900 leading-relaxed font-normal">
                  {profile.summary}
                </p>
              </div>
            </div>

            {/* 3. Professional Experience Section */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-teal-300 print:text-black font-mono mb-4 flex items-center gap-2 border-b border-teal-500/20 pb-2">
                <Briefcase className="w-4 h-4 text-teal-400" />
                <span>{lang === 'en' ? 'Professional Work Experience' : 'Mesleki Deneyim'}</span>
              </h2>

              <div className="space-y-6">
                {experiences.map((exp) => (
                  <div 
                    key={exp.id} 
                    className="p-6 rounded-xl bg-slate-950/70 border border-slate-800/80 print:bg-transparent print:p-0 print:border-none space-y-4"
                  >
                    {/* Role Header */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-800/60 pb-3 print:border-black">
                      <div>
                        <h3 className="text-xl font-bold text-white print:text-black">
                          {exp.role}
                        </h3>
                        <div className="text-base font-semibold text-teal-300 print:text-gray-800 mt-0.5">
                          {exp.company}
                        </div>
                      </div>

                      <div className="flex sm:flex-col sm:items-end justify-between text-xs sm:text-sm font-mono text-slate-300 print:text-gray-700">
                        <span className="px-3 py-1 rounded bg-slate-800/90 font-medium text-slate-200 border border-slate-700/60 print:border-none print:p-0 print:bg-transparent">
                          {exp.period}
                        </span>
                        <span className="text-slate-400 print:text-gray-600 sm:mt-1">
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Bullet Points with strong readability */}
                    <ul className="space-y-2.5 text-sm sm:text-base text-slate-200 print:text-gray-800 leading-relaxed">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-teal-400 font-bold print:text-black mt-1 text-base leading-none">▹</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies for this position */}
                    <div className="pt-2 flex flex-wrap items-center gap-1.5 print:hidden">
                      <span className="text-xs font-mono text-slate-400 mr-1">
                        {lang === 'en' ? 'Core Stack:' : 'Kullanılan Teknolojiler:'}
                      </span>
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded bg-slate-900 border border-slate-800 text-xs font-medium text-teal-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Flagship Projects Showcase */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-teal-300 print:text-black font-mono mb-4 flex items-center gap-2 border-b border-teal-500/20 pb-2">
                <Layers className="w-4 h-4 text-teal-400" />
                <span>{lang === 'en' ? 'Key Mobile & Web Projects' : 'Öne Çıkan Mobil & Web Projeleri'}</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.map((proj) => (
                  <div 
                    key={proj.id} 
                    className="p-5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex flex-col justify-between print:bg-transparent print:border-gray-300"
                  >
                    <div>
                      <div className="flex items-baseline justify-between mb-1.5">
                        <h3 className="text-lg font-bold text-white print:text-black">
                          {proj.title}
                        </h3>
                        <span className="text-xs font-mono text-teal-400 print:text-gray-600 font-semibold">
                          {proj.year}
                        </span>
                      </div>
                      <div className="text-xs font-semibold text-teal-300/90 mb-2 font-mono">
                        {proj.tagline}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 print:text-gray-800 leading-relaxed mb-4">
                        {proj.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-800/60 print:border-gray-300">
                      {proj.technologies.slice(0, 5).map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-slate-900 text-slate-300 border border-slate-800 print:text-black print:bg-gray-100"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 5. Technical Proficiencies (Categorized Grid) */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-teal-300 print:text-black font-mono mb-4 flex items-center gap-2 border-b border-teal-500/20 pb-2">
                <Code2 className="w-4 h-4 text-teal-400" />
                <span>{lang === 'en' ? 'Technical Competencies' : 'Teknik Yetkinlikler'}</span>
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((cat, idx) => (
                  <div 
                    key={idx} 
                    className="p-5 rounded-xl bg-slate-950/70 border border-slate-800/80 print:bg-transparent print:border-gray-300"
                  >
                    <h4 className="text-sm font-bold text-white print:text-black mb-3 pb-2 border-b border-slate-800/60 font-mono">
                      {cat.category}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((s) => (
                        <span 
                          key={s.name}
                          className="px-3 py-1 rounded-lg bg-teal-950/70 border border-teal-800/50 text-xs sm:text-sm font-medium text-teal-300 print:text-black print:bg-gray-100"
                        >
                          {s.name}
                          {s.level && (
                            <span className="ml-1.5 text-[10px] text-slate-400 font-normal">
                              ({s.level})
                            </span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 6. Education Section */}
            <div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-teal-300 print:text-black font-mono mb-4 flex items-center gap-2 border-b border-teal-500/20 pb-2">
                <GraduationCap className="w-4 h-4 text-teal-400" />
                <span>{lang === 'en' ? 'Education' : 'Eğitim'}</span>
              </h2>

              {education.map((edu, idx) => (
                <div 
                  key={idx} 
                  className="p-6 rounded-xl bg-slate-950/70 border border-slate-800/80 print:bg-transparent print:p-0 print:border-none space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-slate-800/60 pb-3 print:border-black">
                    <div>
                      <h3 className="text-xl font-bold text-white print:text-black">
                        {edu.degree}
                      </h3>
                      <div className="text-base font-semibold text-teal-300 print:text-gray-800 mt-0.5">
                        {edu.institution} · <span className="text-slate-400 font-normal">{edu.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-3 py-1 rounded bg-teal-950 text-teal-300 border border-teal-800/60 text-xs font-mono font-bold">
                        GPA: {edu.gpa}
                      </span>
                      <span className="text-xs sm:text-sm font-mono text-slate-400 print:text-gray-700">
                        {edu.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-sm sm:text-base text-slate-300 print:text-gray-800 leading-relaxed">
                    {edu.details.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-start gap-2.5">
                        <span className="text-teal-400 font-bold print:text-black mt-1 text-sm leading-none">▹</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Modal Bottom Sticky Controls */}
        <div className="shrink-0 flex items-center justify-between bg-slate-900 border-t border-slate-800 px-6 py-4 print:hidden">
          <span className="text-xs text-slate-400 font-mono">
            {lang === 'en' ? 'High-contrast executive layout · Ready for printing / PDF export' : 'Yüksek kontrastlı kurumsal düzen · Yazdırma ve PDF için optimize edildi'}
          </span>
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 text-xs sm:text-sm font-bold text-slate-950 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'Print / Save PDF' : 'PDF Olarak Kaydet'}
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs sm:text-sm font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'Close' : 'Kapat'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
