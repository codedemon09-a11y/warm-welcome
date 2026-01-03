export type Language = 'en' | 'hi' | 'mr';

export const LANGUAGE_ORDER: Language[] = ['en', 'mr', 'hi'];

export const LANGUAGE_LABELS: Record<Language, { name: string; nativeName: string }> = {
  en: { name: 'English', nativeName: 'English' },
  mr: { name: 'Marathi', nativeName: 'मराठी' },
  hi: { name: 'Hindi', nativeName: 'हिंदी' }
};
