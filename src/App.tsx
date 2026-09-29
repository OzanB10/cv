import React, { useState, useEffect } from 'react';
import { portfolioDataEN, portfolioDataTR, Project } from './data/portfolioData';
import { SpotlightCursor } from './components/SpotlightCursor';
import { Sidebar } from './components/Sidebar';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { EducationSection } from './components/EducationSection';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import { ArchiveModal } from './components/ArchiveModal';
import { ContactDrawer } from './components/ContactDrawer';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { ColorTheme, themes, defaultTheme } from './types/theme';

export default function App() {
  const [lang, setLang] = useState<'en' | 'tr'>('en');
  const [activeSection, setActiveSection] = useState<string>('about');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [isArchiveOpen, setIsArchiveOpen] = useState<boolean>(false);
  const [isContactOpen, setIsContactOpen] = useState<boolean>(false);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const theme = defaultTheme;
  const content = lang === 'en' ? portfolioDataEN : portfolioDataTR;

  // Track active section on scroll with bottom-of-page awareness
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // If user is near or at the bottom of the page, automatically activate the last section (education)
      if (windowHeight + scrollPosition >= docHeight - 80) {
        setActiveSection('education');
        return;
      }

      const sectionIds = ['about', 'experience', 'projects', 'skills', 'education'];
      const targetThreshold = scrollPosition + 220;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          if (targetThreshold >= top) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleSelectTech = (tech: string) => {
    setSelectedTech(tech);
    const skillsElement = document.getElementById('skills');
    if (skillsElement) {
      skillsElement.scrollIntoView({ behavior: 'smooth' });
    }
    setToastMessage(lang === 'en' ? `Filtered by ${tech}` : `${tech} seçildi`);
  };

  return (
    <div className="relative min-h-screen bg-slate-950 font-sans text-slate-400 selection:bg-teal-400 selection:text-slate-950">
      {/* Brittany Chiang style radiant cursor spotlight with rich ambient glows */}
      <SpotlightCursor theme={theme} />

      {/* Main Container Layout */}
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          
          {/* Left Column: Sticky Header & Navigation */}
          <Sidebar
            content={content}
            activeSection={activeSection}
            lang={lang}
            theme={theme}
            onToggleLang={() => setLang(lang === 'en' ? 'tr' : 'en')}
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenArchive={() => setIsArchiveOpen(true)}
            onOpenContact={() => setIsContactOpen(true)}
            onSelectSection={(id) => setActiveSection(id)}
          />

          {/* Right Column: Content Sections */}
          <main id="content" className="pt-12 lg:w-1/2 lg:py-24">
            <AboutSection content={content} lang={lang} theme={theme} />
            
            <ExperienceSection
              content={content}
              lang={lang}
              theme={theme}
              onOpenResume={() => setIsResumeOpen(true)}
              onSelectTech={handleSelectTech}
            />

            <ProjectsSection
              content={content}
              lang={lang}
              theme={theme}
              onSelectProject={(project) => setSelectedProject(project)}
              onOpenArchive={() => setIsArchiveOpen(true)}
              onSelectTech={handleSelectTech}
            />

            <SkillsSection
              content={content}
              lang={lang}
              theme={theme}
              selectedTech={selectedTech}
              onSelectTech={(tech) => setSelectedTech(tech === selectedTech ? null : tech)}
            />

            <EducationSection content={content} lang={lang} theme={theme} />

            <Footer lang={lang} />
          </main>

        </div>
      </div>

      {/* Modals & Drawers */}
      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
        lang={lang}
        theme={theme}
      />

      {/* Authentic 2-Page CV / PDF Document Viewer */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        content={content}
        lang={lang}
        onShowToast={(msg) => setToastMessage(msg)}
      />

      <ArchiveModal
        isOpen={isArchiveOpen}
        onClose={() => setIsArchiveOpen(false)}
        projects={content.projects}
        lang={lang}
        theme={theme}
        onSelectProject={(p) => setSelectedProject(p)}
      />

      <ContactDrawer
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        content={content}
        lang={lang}
        theme={theme}
        onShowToast={(msg) => setToastMessage(msg)}
      />

      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
