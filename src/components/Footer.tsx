import React from 'react';

interface FooterProps {
  lang: 'en' | 'tr';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  return (
    <footer className="max-w-md pb-16 text-xs text-slate-500 sm:pb-0">
      <p className="leading-relaxed">
        {lang === 'en' ? (
          <>
            Designed and engineered with attention to mobile ergonomics and clean code. Inspired by{' '}
            <a
              href="https://brittanychiang.com"
              target="_blank"
              rel="noreferrer noopener"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
            >
              Brittany Chiang
            </a>
            's portfolio design. Built with{' '}
            <span className="text-slate-400 font-medium">React</span>,{' '}
            <span className="text-slate-400 font-medium">TypeScript</span>, and{' '}
            <span className="text-slate-400 font-medium">Tailwind CSS</span>.
          </>
        ) : (
          <>
            Mobil ergonomi ve temiz kod prensipleriyle tasarlandı.{' '}
            <a
              href="https://brittanychiang.com"
              target="_blank"
              rel="noreferrer noopener"
              className="font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300 transition-colors"
            >
              Brittany Chiang
            </a>
            'in ikonik portfolyo tasarımından esinlenilmiştir.{' '}
            <span className="text-slate-400 font-medium">React</span>,{' '}
            <span className="text-slate-400 font-medium">TypeScript</span> ve{' '}
            <span className="text-slate-400 font-medium">Tailwind CSS</span> ile geliştirildi.
          </>
        )}
      </p>
      <div className="mt-2 text-[11px] text-slate-600 font-mono">
        © {new Date().getFullYear()} Ozan Bolel. All rights reserved.
      </div>
    </footer>
  );
};
