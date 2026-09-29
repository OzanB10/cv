import React, { useState, useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { X, ArrowUpRight, Search, Filter, Smartphone, Star } from 'lucide-react';
import { ThemeConfig } from '../types/theme';

interface ArchiveModalProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  lang: 'en' | 'tr';
  theme: ThemeConfig;
  onSelectProject: (p: Project) => void;
}

export const ArchiveModal: React.FC<ArchiveModalProps> = ({
  isOpen,
  onClose,
  projects,
  lang,
  theme,
  onSelectProject,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState<string>('All');

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

  if (!isOpen) return null;

  const allTech = ['All', ...Array.from(new Set(projects.flatMap((p) => p.technologies)))];

  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesTech =
      selectedTech === 'All' || p.technologies.includes(selectedTech);

    return matchesSearch && matchesTech;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-5xl rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-6 sm:p-10 z-10 my-6 max-h-[92vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-6">
          <div>
            <div className="text-xs font-mono text-violet-400 mb-1">
              {lang === 'en' ? 'ARCHIVE' : 'ARŞİV'}
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 font-display tracking-tight">
              {lang === 'en' ? 'All Projects & Mobile Apps' : 'Tüm Projeler & Uygulamalar'}
            </h2>
            <p className="text-sm text-slate-400 mt-1">
              {lang === 'en'
                ? 'A comprehensive archive of mobile applications and platforms built with Flutter, Riverpod, and Firebase.'
                : 'Flutter, Riverpod ve Firebase ile geliştirilen mobil uygulamaların kapsamlı arşivi.'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-slate-100 hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search & Filter Controls */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
            <input
              type="text"
              placeholder={lang === 'en' ? 'Search by title, keyword, tech...' : 'Başlık, kelime veya teknoloji ile ara...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-slate-950/80 border border-slate-800 rounded-lg text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-violet-400"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <Filter className="w-3.5 h-3.5 text-slate-500 shrink-0 hidden sm:block" />
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="px-3 py-2 bg-slate-950/80 border border-slate-800 rounded-lg text-xs text-slate-300 focus:outline-none focus:border-violet-400 cursor-pointer"
            >
              {allTech.map((t) => (
                <option key={t} value={t}>
                  {t === 'All' ? (lang === 'en' ? 'All Tech' : 'Tüm Teknolojiler') : t}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Table View */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-800 text-xs font-semibold text-slate-400 font-mono">
                <th className="py-4 pr-6">{lang === 'en' ? 'Year' : 'Yıl'}</th>
                <th className="py-4 pr-6">{lang === 'en' ? 'Project' : 'Proje'}</th>
                <th className="py-4 pr-6 hidden md:table-cell">{lang === 'en' ? 'Store Status' : 'Mağaza'}</th>
                <th className="py-4 pr-6 hidden lg:table-cell">{lang === 'en' ? 'Built with' : 'Teknolojiler'}</th>
                <th className="py-4 text-right">{lang === 'en' ? 'Details' : 'Detay'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 font-sans">
              {filteredProjects.map((p) => (
                <tr
                  key={p.id}
                  onClick={() => {
                    onClose();
                    onSelectProject(p);
                  }}
                  className="group hover:bg-slate-800/40 transition-colors cursor-pointer"
                >
                  <td className="py-4 pr-6 font-mono text-xs text-teal-400 whitespace-nowrap">
                    {p.year}
                  </td>
                  <td className="py-4 pr-6 font-semibold text-slate-200 group-hover:text-teal-300">
                    <div className="flex items-center gap-2">
                      <span>{p.title}</span>
                    </div>
                    <div className="text-xs text-slate-400 font-normal lg:hidden mt-0.5 line-clamp-1">
                      {p.tagline}
                    </div>
                  </td>
                  <td className="py-4 pr-6 text-xs text-slate-400 hidden md:table-cell">
                    <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-teal-950/60 border border-teal-800/40 text-teal-300 font-mono text-[11px]">
                      <Smartphone className="w-3 h-3 text-teal-400" />
                      <span>{p.id === 'dugunmaster' ? 'Web & Mobile' : 'Flutter App'}</span>
                    </span>
                  </td>
                  <td className="py-4 pr-6 hidden lg:table-cell">
                    <div className="flex flex-wrap gap-1.5">
                      {p.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 text-right whitespace-nowrap">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-teal-300 hover:text-teal-200"
                    >
                      <span>{lang === 'en' ? 'Inspect' : 'İncele'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {filteredProjects.length === 0 && (
            <div className="py-12 text-center text-slate-500 text-sm">
              {lang === 'en' ? 'No projects match your search.' : 'Aramanızla eşleşen proje bulunamadı.'}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};
