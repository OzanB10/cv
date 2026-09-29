import React from 'react';
import { PortfolioContent } from '../data/portfolioData';
import { Code2, Cpu, Wrench, Sparkles } from 'lucide-react';
import { ThemeConfig } from '../types/theme';

interface SkillsSectionProps {
  content: PortfolioContent;
  lang: 'en' | 'tr';
  theme: ThemeConfig;
  selectedTech?: string | null;
  onSelectTech?: (tech: string) => void;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  content,
  lang,
  theme,
  selectedTech,
  onSelectTech,
}) => {
  const { skills } = content;

  const getCategoryIcon = (category: string) => {
    if (category.toLowerCase().includes('programming') || category.toLowerCase().includes('dilleri')) {
      return <Code2 className="w-4 h-4 text-violet-400" />;
    }
    if (category.toLowerCase().includes('framework') || category.toLowerCase().includes('teknoloji')) {
      return <Cpu className="w-4 h-4 text-sky-400" />;
    }
    if (category.toLowerCase().includes('tool') || category.toLowerCase().includes('araç')) {
      return <Wrench className="w-4 h-4 text-amber-400" />;
    }
    return <Sparkles className="w-4 h-4 text-purple-400" />;
  };

  return (
    <section
      id="skills"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Technical Proficiencies"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-950/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {lang === 'en' ? 'Skills & Proficiencies' : 'Teknik Yetkinlikler'}
        </h2>
      </div>

      <div className="space-y-6">
        {skills.map((group, idx) => (
          <div
            key={idx}
            className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-violet-500/30 transition-all hover:bg-slate-900/70"
          >
            <div className="flex items-center gap-2 mb-3.5">
              {getCategoryIcon(group.category)}
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 font-mono">
                {group.category}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((s) => {
                const isSelected = selectedTech === s.name;
                return (
                  <button
                    key={s.name}
                    type="button"
                    onClick={() => onSelectTech && onSelectTech(s.name)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                      isSelected
                        ? `${theme.buttonBg} ${theme.buttonText} shadow-md`
                        : 'bg-slate-800/80 text-slate-200 hover:bg-violet-500/10 hover:text-violet-300 border border-slate-700/50 hover:border-violet-500/30'
                    }`}
                  >
                    <span>{s.name}</span>
                    {s.level && (
                      <span
                        className={`text-[10px] font-mono ${
                          isSelected ? 'opacity-80 font-bold' : 'text-slate-400'
                        }`}
                      >
                        · {s.level}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
