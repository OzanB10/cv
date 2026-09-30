import React from 'react';
import { PortfolioContent } from '../data/portfolioData';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';
import { ThemeConfig } from '../types/theme';

interface EducationSectionProps {
  content: PortfolioContent;
  lang: 'en' | 'tr';
  theme: ThemeConfig;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ content, lang, theme }) => {
  const { education } = content;

  return (
    <section
      id="education"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Education"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-950/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {lang === 'en' ? 'Education' : 'Eğitim'}
        </h2>
      </div>

      <div className="space-y-6">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="p-6 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-teal-500/30 transition-all hover:bg-slate-900/70"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
              <h3 className="text-base font-semibold text-slate-100 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-teal-400 shrink-0" />
                <span>{edu.degree}</span>
              </h3>
              <span className="text-xs font-mono text-slate-400 shrink-0 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {edu.period}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-teal-300 font-medium mb-4">
              <span>{edu.institution}</span>
              <span className="text-slate-600">·</span>
              <span className="text-xs text-slate-400 flex items-center gap-1 font-mono">
                <MapPin className="w-3 h-3 text-slate-400" />
                {edu.location}
              </span>
              <span className="text-slate-600">·</span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-teal-950/60 border border-teal-800/40 text-teal-300 text-xs font-mono">
                <Award className="w-3 h-3 text-teal-400" />
                GPA: {edu.gpa}
              </span>
            </div>

            <ul className="space-y-2 text-sm text-slate-400 leading-normal">
              {edu.details.map((item, dIdx) => (
                <li key={dIdx} className="flex items-start gap-2">
                  <span className="text-teal-400 text-xs leading-none mt-1">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
