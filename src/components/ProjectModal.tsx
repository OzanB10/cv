import React, { useState, useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  Calendar, 
  Briefcase, 
  Globe
} from 'lucide-react';
import { ThemeConfig } from '../types/theme';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'tr';
  theme?: ThemeConfig;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
  lang,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  // Reset image index when project changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, project, currentImageIndex]);

  if (!isOpen || !project) return null;

  const imagesList = project.images && project.images.length > 0 ? project.images : [project.image];
  const hasMultipleImages = imagesList.length > 1;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imagesList.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + imagesList.length) % imagesList.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextImage();
      } else {
        prevImage();
      }
    }
    setTouchStartX(null);
  };

  const isLandscapeScreen = project.id === 'dugunmaster' && currentImageIndex < 2;
  const isWebProject = project.id === 'dugunmaster';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-5xl rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl p-4 sm:p-8 md:p-10 z-10 my-4 max-h-[94vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Top Header Section */}
        <div className="pr-12 border-b border-slate-800/80 pb-5 sm:pb-6">
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-teal-400 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-teal-950/80 border border-teal-800/50 font-semibold text-teal-300">
              {project.year}
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-300 font-medium">{project.role}</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-400">{project.date}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight font-display">
            {project.title}
          </h2>

          <p className="text-base sm:text-lg font-medium text-teal-300 mt-2 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Quick Specs Highlight Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 my-5 sm:my-6">
          <div className="p-3 sm:p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 flex flex-col justify-center">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-teal-400" />
              {lang === 'en' ? 'Role' : 'Rol'}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-100 truncate" title={project.role}>
              {project.role}
            </span>
          </div>

          <div className="p-3 sm:p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 flex flex-col justify-center">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-teal-400" />
              {lang === 'en' ? 'Timeline' : 'Dönem'}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-100 truncate" title={project.date}>
              {project.date}
            </span>
          </div>

          <div className="p-3 sm:p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 flex flex-col justify-center">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-teal-400" />
              {lang === 'en' ? 'Platform' : 'Platform'}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-100">
              {isWebProject ? 'Web & Mobile' : 'iOS & Android'}
            </span>
          </div>

          <div className="p-3 sm:p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 flex flex-col justify-center">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
              <Globe className="w-3.5 h-3.5 text-teal-400" />
              {lang === 'en' ? 'Screens' : 'Ekran'}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-teal-300">
              {imagesList.length} {lang === 'en' ? 'Visuals' : 'Görsel'}
            </span>
          </div>
        </div>

        {/* Interactive Device Mockup & Overview Section */}
        <div className="mt-6 flex flex-col md:flex-row gap-6 items-center md:items-start p-4 sm:p-6 rounded-xl border border-slate-800/80 bg-slate-950/70">
          
          {/* Device Mockup Container */}
          <div className="shrink-0 flex flex-col items-center w-full md:w-auto">
            {isLandscapeScreen ? (
              /* Clean Scaled-Down Desktop/Web View for Landscape Screens */
              <div 
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="relative w-full max-w-[340px] sm:max-w-[380px] overflow-hidden rounded-xl border border-slate-700/80 shadow-2xl bg-slate-950 group select-none touch-pan-y flex flex-col"
              >
                {/* Browser top-bar */}
                <div className="flex items-center justify-between px-3 py-1.5 bg-slate-900 border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="px-2 py-0.5 rounded bg-slate-950/80 text-[10px] font-mono text-slate-400 border border-slate-800">
                    dugunmaster.com
                  </div>
                  <div className="text-[10px] font-mono text-teal-400 font-bold">
                    Web
                  </div>
                </div>

                {/* Active Image Container */}
                <div className="relative w-full aspect-[16/10] bg-black flex items-center justify-center p-1">
                  <img
                    src={imagesList[currentImageIndex]}
                    alt={`${project.title} screen ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain rounded transition duration-200"
                    loading="eager"
                  />

                  {/* Slider Navigation Controls */}
                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-slate-950/85 hover:bg-slate-900 text-white hover:text-teal-300 border border-slate-700/80 shadow-lg backdrop-blur transition-all cursor-pointer z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 sm:p-2 rounded-full bg-slate-950/85 hover:bg-slate-900 text-white hover:text-teal-300 border border-slate-700/80 shadow-lg backdrop-blur transition-all cursor-pointer z-10"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-slate-950/90 text-[10px] font-mono text-teal-300 border border-slate-700/80 backdrop-blur z-10 font-bold">
                        {currentImageIndex + 1} / {imagesList.length}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ) : (
              /* Phone Device Mockup for Mobile Apps & Portrait Screens */
              <div 
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="relative w-48 sm:w-52 md:w-56 overflow-hidden rounded-[2rem] border-[3px] border-slate-700 shadow-2xl bg-slate-950 group select-none touch-pan-y p-1.5 flex flex-col items-center"
              >
                {/* Speaker Bar */}
                <div className="w-12 h-1 bg-slate-700/90 rounded-full mb-1 shrink-0" />
                
                {/* Active Image Container */}
                <div className="relative w-full aspect-[9/19.5] overflow-hidden rounded-xl bg-black flex items-center justify-center">
                  <img
                    src={imagesList[currentImageIndex]}
                    alt={`${project.title} screen ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain rounded-lg transition duration-300"
                    loading="eager"
                  />

                  {/* Slider Navigation Controls */}
                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/85 hover:bg-slate-900 text-white hover:text-teal-300 border border-slate-700/80 shadow-lg backdrop-blur transition-all cursor-pointer z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={nextImage}
                        className="absolute right-1.5 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-slate-950/85 hover:bg-slate-900 text-white hover:text-teal-300 border border-slate-700/80 shadow-lg backdrop-blur transition-all cursor-pointer z-10"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>

                      <div className="absolute top-2 right-2 px-1.5 py-0.5 rounded bg-slate-950/90 text-[10px] font-mono text-teal-300 border border-slate-700/80 backdrop-blur z-10 font-bold">
                        {currentImageIndex + 1} / {imagesList.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Bottom Home Indicator */}
                <div className="w-16 h-1 bg-slate-700/70 rounded-full mt-1.5 shrink-0" />
              </div>
            )}

            {/* Pagination Thumbnails */}
            {hasMultipleImages && (
              <div className="mt-3 flex flex-col items-center gap-2 w-full">
                <div className="flex items-center gap-1.5">
                  {imagesList.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-1.5 rounded-full transition-all cursor-pointer ${
                        idx === currentImageIndex
                          ? 'w-5 bg-teal-400 shadow-sm shadow-teal-400/50'
                          : 'w-1.5 bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Thumbnail Strip */}
                <div className="flex items-center justify-center gap-1.5 overflow-x-auto max-w-full py-1 px-1">
                  {imagesList.map((imgSrc, idx) => {
                    const isThumbLandscape = project.id === 'dugunmaster' && idx < 2;
                    return (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        title={
                          project.id === 'dugunmaster' 
                            ? (idx < 2 ? (lang === 'en' ? `Web Screen ${idx + 1}` : `Web Ekranı ${idx + 1}`) : (lang === 'en' ? `Mobile Screen ${idx - 1}` : `Mobil Ekran ${idx - 1}`))
                            : `${project.title} ${idx + 1}`
                        }
                        className={`${
                          isThumbLandscape ? 'w-10 h-7' : 'w-6 h-10'
                        } shrink-0 rounded-md overflow-hidden border transition-all cursor-pointer relative ${
                          idx === currentImageIndex
                            ? 'border-teal-400 ring-2 ring-teal-400/40 scale-105 shadow-md shadow-teal-500/20'
                            : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                        }`}
                      >
                        <img
                          src={imgSrc}
                          alt="thumbnail"
                          className="w-full h-full object-cover object-top"
                        />
                        {project.id === 'dugunmaster' && (
                          <span className="absolute bottom-0 inset-x-0 bg-slate-950/85 text-[8px] font-mono text-center text-slate-300 leading-tight py-px">
                            {idx < 2 ? 'Web' : 'App'}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Case Study Narrative, Key Capabilities & Architecture */}
          <div className="flex-1 space-y-5 w-full">
            
            {/* Project Overview Paragraph */}
            <div className="p-4 sm:p-5 rounded-xl bg-slate-950/70 border border-slate-800/90">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-300 font-mono mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-teal-400" />
                <span>{lang === 'en' ? 'Project Overview' : 'Proje Tanımı & Kapsam'}</span>
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Key Capabilities Section */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="space-y-2.5">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>{lang === 'en' ? 'Key Features & Modules' : 'Öne Çıkan Özellikler & Modüller'}</span>
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {project.keyFeatures.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="p-3 rounded-lg bg-slate-950/60 border border-slate-800/70 hover:border-slate-700/80 transition-colors flex items-start gap-2.5"
                    >
                      <span className="w-5 h-5 rounded-full bg-teal-950 text-teal-300 border border-teal-800/60 flex items-center justify-center shrink-0 text-xs font-bold font-mono mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-xs sm:text-sm text-slate-200 leading-normal font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Highlights */}
            {project.architectureHighlights && project.architectureHighlights.length > 0 && (
              <div className="p-4 sm:p-5 rounded-xl bg-slate-950/80 border border-teal-900/40">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-300 font-mono mb-2.5 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-teal-400" />
                  <span>{lang === 'en' ? 'Technical Highlights' : 'Teknik & Mimari Detaylar'}</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                  {project.architectureHighlights.map((arch, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-teal-400 font-mono text-sm leading-tight">▹</span>
                      <span className="leading-relaxed">{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            <div className="pt-1">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300 font-mono mb-2.5">
                {lang === 'en' ? 'Technologies Used' : 'Kullanılan Teknolojiler'}
              </h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg bg-teal-950/80 text-teal-300 text-xs sm:text-sm font-medium border border-teal-800/50 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-3 pt-5 border-t border-slate-800/80">
          <div className="text-xs text-slate-400 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400 inline-block" />
            <span>
              {hasMultipleImages
                ? (lang === 'en' ? `Use arrows or swipe to browse ${imagesList.length} screens` : `Ok tuşları veya kaydırarak ${imagesList.length} ekranı inceleyebilirsiniz`)
                : (lang === 'en' ? 'Interactive Project View' : 'İnteraktif Proje Görünümü')}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-2 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            {lang === 'en' ? 'Close' : 'Kapat'}
          </button>
        </div>
      </div>
    </div>
  );
};
