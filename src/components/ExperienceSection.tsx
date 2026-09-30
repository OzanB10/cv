import React from 'react';
import { PortfolioContent } from '../data/portfolioData';
import { ArrowUpRight, Calendar, MapPin } from 'lucide-react';
import { ThemeConfig } from '../types/theme';

interface ExperienceSectionProps {
  content: PortfolioContent;
  lang: 'en' | 'tr';
  theme: ThemeConfig;
  onOpenResume: () => void;
  onSelectTech?: (tech: string) => void;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  content,
  lang,
  theme,
  onOpenResume,
  onSelectTech,
}) => {
  const { experiences } = content;

  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-950/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {lang === 'en' ? 'Experience' : 'Deneyim'}
        </h2>
      </div>

      <div className="group/list">
        <ol className="space-y-12">
          {experiences.map((exp) => (
            <li key={exp.id} className="mb-12">
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                {/* Hover card backdrop */}
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-900/70 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(45,212,191,0.15)] lg:group-hover:border lg:group-hover:border-teal-500/20 lg:group-hover:drop-shadow-lg" />

                {/* Timeline Header */}
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400 font-mono sm:col-span-2"
                  aria-label={exp.period}
                >
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-teal-400/80 hidden sm:inline" />
                    {exp.period}
                  </span>
                  <div className="text-[11px] text-slate-400 font-normal normal-case mt-0.5 sm:mt-1 flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-slate-400" />
                    <span>{exp.location}</span>
                  </div>
                </header>

                {/* Content */}
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <div className="inline-flex items-baseline font-medium leading-tight text-slate-200 group-hover:text-teal-300 focus-visible:text-teal-300 text-base">
                        <span>
                          {exp.role} ·{' '}
                          <span className="inline-block text-teal-300 font-semibold">
                            {exp.company}
                          </span>
                        </span>
                      </div>
                    </div>
                  </h3>

                  {/* Bullet points */}
                  <ul className="mt-3 space-y-2 text-sm leading-normal text-slate-400">
                    {exp.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-teal-400 text-sm leading-none mt-1">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technologies Pill Badges */}
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
                    {exp.technologies.map((tech) => (
                      <li key={tech}>
                        <button
                          type="button"
                          onClick={() => onSelectTech && onSelectTech(tech)}
                          className={`flex items-center rounded-full px-3 py-1 text-xs font-medium leading-5 transition-colors cursor-pointer ${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder} hover:brightness-125`}
                        >
                          {tech}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* View Full Resume CTA */}
      <div className="mt-8">
        <button
          onClick={onOpenResume}
          className="inline-flex items-center font-semibold leading-tight text-slate-200 group hover:text-teal-300 focus-visible:text-teal-300 cursor-pointer"
          aria-label="View Full Resume"
        >
          <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none text-sm">
            {lang === 'en' ? 'View Full Résumé / CV Document' : 'Tüm Özgeçmiş / CV Belgesini İncele'}
          </span>
          <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
        </button>
      </div>
    </section>
  );
};
