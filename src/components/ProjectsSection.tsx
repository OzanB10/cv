import React from 'react';
import { PortfolioContent, Project } from '../data/portfolioData';
import { ArrowUpRight, Layers, Sparkles, Smartphone, Info } from 'lucide-react';
import { ThemeConfig } from '../types/theme';

interface ProjectsSectionProps {
  content: PortfolioContent;
  lang: 'en' | 'tr';
  theme?: ThemeConfig;
  onSelectProject: (project: Project) => void;
  onOpenArchive: () => void;
  onSelectTech?: (tech: string) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  content,
  lang,
  onSelectProject,
  onOpenArchive,
  onSelectTech,
}) => {
  const { projects } = content;

  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-slate-950/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          {lang === 'en' ? 'Projects' : 'Projeler'}
        </h2>
      </div>

      <div className="group/list">
        <ul className="space-y-12">
          {projects.map((project) => (
            <li key={project.id} className="mb-12">
              <div 
                onClick={() => onSelectProject(project)}
                className="group relative grid gap-4 p-4 sm:p-0 rounded-2xl bg-slate-900/40 sm:bg-transparent border border-slate-800/60 sm:border-none transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 cursor-pointer"
              >
                {/* Background glow on hover */}
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-900/60 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />

                {/* Project Image / Thumbnail */}
                <div className="z-10 sm:order-1 sm:col-span-3 sm:translate-y-1">
                  <div className={`relative ${
                    project.id === 'dugunmaster' 
                      ? 'aspect-[16/10] max-w-[210px] sm:max-w-[220px]' 
                      : 'aspect-[9/16] max-h-52 max-w-[130px] sm:max-w-none'
                  } mx-auto sm:mx-0 overflow-hidden rounded-xl border border-slate-700/80 bg-slate-950 p-1 shadow-lg transition group-hover:border-teal-500/50 group-hover:shadow-teal-500/10`}>
                    <img
                      src={project.image}
                      alt={`${project.title} interface preview`}
                      className="h-full w-full object-contain rounded-lg transition duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.dataset.retried) {
                          target.dataset.retried = 'true';
                          const sep = target.src.includes('?') ? '&' : '?';
                          target.src = `${target.src}${sep}retry=${Date.now()}`;
                        }
                      }}
                    />
                    {project.images && project.images.length > 1 && (
                      <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded bg-slate-950/85 text-[10px] font-mono text-slate-200 border border-slate-700/60 flex items-center gap-1 backdrop-blur z-10">
                        <Layers className="w-3 h-3 text-teal-400" />
                        <span>{project.images.length} {lang === 'en' ? 'Screens' : 'Ekran'}</span>
                      </div>
                    )}
                    <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-slate-950/80 text-[10px] font-mono text-teal-300 border border-slate-700/60 z-10">
                      {project.year}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="z-10 sm:order-2 sm:col-span-5">
                  <h3>
                    <div className="inline-flex items-baseline font-medium leading-tight text-slate-100 group-hover:text-teal-300 focus-visible:text-teal-300 text-base sm:text-lg">
                      <span>{project.title}</span>
                      <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
                    </div>
                  </h3>

                  <p className="mt-1 text-xs sm:text-sm font-medium text-teal-400/90 font-mono">
                    {project.tagline}
                  </p>

                  <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-slate-300">
                    {project.description}
                  </p>

                  {/* Tech stack pill tags */}
                  <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies used">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <li key={tech}>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectTech && onSelectTech(tech);
                          }}
                          className="flex items-center rounded-full bg-teal-400/10 px-2.5 py-0.5 text-xs font-medium leading-5 text-teal-300 hover:bg-teal-400/20 hover:text-teal-200 transition-colors"
                        >
                          {tech}
                        </button>
                      </li>
                    ))}
                    {project.technologies.length > 5 && (
                      <li className="flex items-center rounded-full bg-slate-800/80 px-2.5 py-0.5 text-xs font-medium text-slate-400">
                        +{project.technologies.length - 5}
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* View Full Project Archive link */}
      <div className="mt-12">
        <button
          onClick={onOpenArchive}
          className="inline-flex items-center font-semibold leading-tight text-slate-200 group hover:text-teal-300 focus-visible:text-teal-300 cursor-pointer"
          aria-label="View Full Project Archive"
        >
          <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none text-sm">
            {lang === 'en' ? 'View Full Project Archive' : 'Tüm Proje Arşivini Görüntüle'}
          </span>
          <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none" />
        </button>
      </div>
    </section>
  );
};
