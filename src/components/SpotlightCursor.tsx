import React, { useEffect, useState } from 'react';
import { ThemeConfig } from '../types/theme';

interface SpotlightCursorProps {
  theme: ThemeConfig;
}

export const SpotlightCursor: React.FC<SpotlightCursorProps> = ({ theme }) => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: -1000,
    y: -1000,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Dynamic Cursor Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 hidden lg:block"
        style={{
          background: `radial-gradient(750px circle at ${mousePosition.x}px ${mousePosition.y}px, ${theme.spotlightRgba}, transparent 80%)`,
        }}
      />
      {/* Subtle secondary ambient glow in corner */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b from-violet-600/5 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="fixed bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-t from-sky-600/5 to-transparent blur-3xl pointer-events-none -z-10" />
    </>
  );
};
