export type ColorTheme = 'teal';

export interface ThemeConfig {
  id: ColorTheme;
  name: string;
  buttonBg: string;
  buttonHover: string;
  buttonText: string;
  indicatorActive: string;
  spotlightRgba: string;
  accentText: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
}

export const defaultTheme: ThemeConfig = {
  id: 'teal',
  name: 'Neon Teal & Cyan',
  buttonBg: 'bg-teal-500',
  buttonHover: 'hover:bg-teal-400 hover:shadow-teal-500/25',
  buttonText: 'text-slate-950 font-bold',
  indicatorActive: 'bg-teal-300',
  spotlightRgba: 'rgba(45, 212, 191, 0.13)',
  accentText: 'text-teal-300',
  badgeBg: 'bg-teal-950/70',
  badgeText: 'text-teal-300',
  badgeBorder: 'border-teal-800/40',
};

export const themes: Record<string, ThemeConfig> = {
  teal: defaultTheme,
  violet: defaultTheme,
  cyan: defaultTheme,
  emerald: defaultTheme,
  amber: defaultTheme,
};
