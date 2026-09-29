import React, { useState, useEffect } from 'react';
import { Project } from '../data/portfolioData';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Cpu, 
  Smartphone, 
  Layers, 
  Calendar, 
  Briefcase, 
  Code2, 
  Globe,
  ExternalLink,
  Sparkles
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

  const isWebProject = project.id === 'dugunmaster';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-5xl rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl p-6 sm:p-10 z-10 my-6 max-h-[92vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer z-20"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Top Header Section */}
        <div className="pr-14 border-b border-slate-800/80 pb-6">
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-mono text-teal-400 mb-2">
            <span className="px-2.5 py-0.5 rounded-full bg-teal-950/80 border border-teal-800/50 font-semibold text-teal-300">
              {project.year}
            </span>
            <span>·</span>
            <span className="text-slate-300 font-medium">{project.role}</span>
            <span>·</span>
            <span className="text-slate-400">{project.date}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display">
            {project.title}
          </h2>

          <p className="text-base sm:text-lg font-medium text-teal-300 mt-2 leading-snug">
            {project.tagline}
          </p>
        </div>

        {/* Quick Specs Highlight Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 flex flex-col justify-center">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-teal-400" />
              {lang === 'en' ? 'Role' : 'Rol'}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-100 truncate" title={project.role}>
              {project.role}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 flex flex-col justify-center">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-teal-400" />
              {lang === 'en' ? 'Timeline' : 'Dönem'}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-100 truncate" title={project.date}>
              {project.date}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 flex flex-col justify-center">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
              {isWebProject ? <Globe className="w-3.5 h-3.5 text-teal-400" /> : <Smartphone className="w-3.5 h-3.5 text-teal-400" />}
              {lang === 'en' ? 'Platform' : 'Platform'}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-100">
              {isWebProject ? 'Web & Mobile' : 'Flutter Mobile'}
            </span>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/90 flex flex-col justify-center">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1 flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5 text-teal-400" />
              {lang === 'en' ? 'Gallery' : 'Ekran Sayısı'}
            </span>
            <span className="text-xs sm:text-sm font-semibold text-slate-100">
              {imagesList.length} {lang === 'en' ? 'Screenshots' : 'Ekran Görüntüsü'}
            </span>
          </div>
        </div>

        {/* Main Showcase Layout: Device Mockup + Rich Details */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Left Column: Device Mockup with Carousel Controls */}
          <div className={`flex flex-col items-center shrink-0 w-full ${
            isWebProject ? 'lg:w-[420px]' : 'lg:w-[320px]'
          } mx-auto lg:mx-0`}>
            
            {isWebProject ? (
              /* Sleek Web Browser Mockup for Web Projects */
              <div 
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="relative w-full overflow-hidden rounded-xl border-2 border-slate-700/90 shadow-2xl bg-slate-950 group select-none touch-pan-y flex flex-col"
              >
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between px-3 py-2.5 bg-slate-900 border-b border-slate-800 text-[11px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="px-3 py-0.5 rounded bg-slate-950/90 border border-slate-800 text-xs font-mono text-slate-300">
                    dugunmaster.com
                  </div>
                  <div className="w-12" />
                </div>

                {/* Active Image Container */}
                <div className="relative w-full overflow-hidden bg-black aspect-[16/10]">
                  <img
                    src={imagesList[currentImageIndex]}
                    alt={`${project.title} screen ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover transition duration-300"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />

                  {/* Slider Navigation Controls for Multiple Images */}
                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/85 hover:bg-slate-900 text-white hover:text-teal-300 border border-slate-700/80 shadow-lg backdrop-blur transition-all cursor-pointer z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>

                      <button
                        onClick={nextImage}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/85 hover:bg-slate-900 text-white hover:text-teal-300 border border-slate-700/80 shadow-lg backdrop-blur transition-all cursor-pointer z-10"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>

                      {/* Image Counter Badge */}
                      <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-slate-950/90 text-xs font-mono text-teal-300 border border-slate-700/80 backdrop-blur z-10 font-bold">
                        {currentImageIndex + 1} / {imagesList.length}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ) : (
              /* Phone Device Mockup for Mobile Apps */
              <div 
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="relative w-64 sm:w-72 overflow-hidden rounded-[2.4rem] border-[4px] border-slate-700 shadow-2xl bg-slate-950 group select-none touch-pan-y p-2.5 flex flex-col items-center"
              >
                {/* Speaker / Sensor Top Bar */}
                <div className="w-16 h-1.5 bg-slate-700/90 rounded-full mb-2 shrink-0" />
                
                {/* Active Image Container */}
                <div className="relative w-full overflow-hidden rounded-2xl bg-black">
                  <img
                    src={imagesList[currentImageIndex]}
                    alt={`${project.title} screen ${currentImageIndex + 1}`}
                    className="w-full h-auto object-contain rounded-xl transition duration-300"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />

                  {/* Slider Navigation Controls for Multiple Images */}
                  {hasMultipleImages && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/85 hover:bg-slate-900 text-white hover:text-teal-300 border border-slate-700/80 shadow-lg backdrop-blur transition-all cursor-pointer z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>

                      <button
                        onClick={nextImage}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-slate-950/85 hover:bg-slate-900 text-white hover:text-teal-300 border border-slate-700/80 shadow-lg backdrop-blur transition-all cursor-pointer z-10"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      {/* Image Counter Badge */}
                      <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-full bg-slate-950/90 text-xs font-mono text-teal-300 border border-slate-700/80 backdrop-blur z-10 font-bold">
                        {currentImageIndex + 1} / {imagesList.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Bottom Home Indicator Bar */}
                <div className="w-24 h-1 bg-slate-700/70 rounded-full mt-2.5 shrink-0" />
              </div>
            )}

            {/* Pagination Dots & Thumbnails for Gallery */}
            {hasMultipleImages && (
              <div className="mt-4 flex flex-col items-center gap-2.5 w-full">
                <div className="flex items-center gap-2">
                  {imagesList.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        idx === currentImageIndex
                          ? 'w-7 bg-teal-400 shadow-sm shadow-teal-400/50'
                          : 'w-2.5 bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Micro Thumbnails Strip */}
                <div className="flex items-center gap-2 overflow-x-auto max-w-full py-1">
                  {imagesList.map((imgSrc, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`${
                        isWebProject ? 'w-16 h-10' : 'w-10 h-16'
                      } shrink-0 rounded-lg overflow-hidden border-2 transition-all cursor-pointer ${
                        idx === currentImageIndex
                          ? 'border-teal-400 ring-2 ring-teal-400/40 scale-105'
                          : 'border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={imgSrc}
                        alt="thumbnail"
                        className="w-full h-full object-cover object-top"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Case Study Narrative, Key Capabilities & Architecture */}
          <div className="flex-1 space-y-6 w-full">
            
            {/* Project Overview Paragraph */}
            <div className="p-5 sm:p-6 rounded-xl bg-slate-950/70 border border-slate-800/90">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-300 font-mono mb-2.5 flex items-center gap-2">
                <Layers className="w-4 h-4 text-teal-400" />
                <span>{lang === 'en' ? 'Executive Project Overview' : 'Proje Tanımı & Mimari Vizyon'}</span>
              </h3>
              <p className="text-slate-200 text-base sm:text-[17px] leading-relaxed font-normal">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Key Capabilities Section */}
            {project.keyFeatures && project.keyFeatures.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300 font-mono flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  <span>{lang === 'en' ? 'Core Capabilities & User Flow' : 'Öne Çıkan Yetenekler & Modüller'}</span>
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {project.keyFeatures.map((feature, idx) => (
                    <div 
                      key={idx} 
                      className="p-3.5 rounded-lg bg-slate-950/50 border border-slate-800/70 hover:border-slate-700/80 transition-colors flex items-start gap-3"
                    >
                      <span className="w-5 h-5 rounded-full bg-teal-950 text-teal-300 border border-teal-800/60 flex items-center justify-center shrink-0 text-xs font-bold font-mono mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="text-sm sm:text-base text-slate-200 leading-normal font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Highlights */}
            {project.architectureHighlights && project.architectureHighlights.length > 0 && (
              <div className="p-5 rounded-xl bg-gradient-to-br from-slate-950 to-slate-900 border border-teal-900/30">
                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-teal-300 font-mono mb-3 flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-teal-400" />
                  <span>{lang === 'en' ? 'Engineering & Architectural Highlights' : 'Mimari & Mühendislik Kararları'}</span>
                </h3>
                <ul className="space-y-2 text-sm sm:text-[15px] text-slate-300">
                  {project.architectureHighlights.map((arch, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span className="text-teal-400 font-mono text-base leading-tight">▹</span>
                      <span className="leading-relaxed">{arch}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies Pill Badges */}
            <div className="pt-2">
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300 font-mono mb-3">
                {lang === 'en' ? 'Technology Stack' : 'Kullanılan Teknolojiler'}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 rounded-lg bg-teal-950/80 text-teal-300 text-xs sm:text-sm font-medium border border-teal-800/50 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800/80">
          <div className="text-xs sm:text-sm text-slate-400 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-teal-400 inline-block animate-pulse" />
            <span>
              {hasMultipleImages
                ? (lang === 'en' ? `Swipe or press arrow keys (← / →) to navigate ${imagesList.length} screens` : `Ok tuşları (← / →) veya parmağınızla ${imagesList.length} ekran arasında gezinebilirsiniz`)
                : (lang === 'en' ? 'Interactive Project View' : 'İnteraktif Proje İnceleme')}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 text-sm font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
          >
            {lang === 'en' ? 'Close Case Study' : 'Kapat'}
          </button>
        </div>
      </div>
    </div>
  );
};
