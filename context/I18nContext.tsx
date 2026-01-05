
import React, { createContext, useState, useEffect, useCallback } from 'react';

// Define the shape of the context data
interface I18nContextType {
  language: 'ar' | 'en';
  setLanguage: (lang: 'ar' | 'en') => void;
  t: (key: string) => any; // Return 'any' to support arrays and objects
}

// Create the context with a default value
export const I18nContext = createContext<I18nContextType | undefined>(undefined);

import { ar, en } from './locales';

// Translations object
const translations = { ar, en };

// Define the provider component props
interface I18nProviderProps {
  children: React.ReactNode;
}

// Create the provider component
export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<'ar' | 'en'>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language');
      if (savedLang === 'ar' || savedLang === 'en') {
        return savedLang;
      }
      // Check browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'ar') {
        return 'ar';
      }
    }
    // Default to 'en' if not Arabic
    return 'en';
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: 'ar' | 'en') => {
    setLanguageState(lang);
  };

  const t = useCallback((key: string): any => {
    const keys = key.split('.');
    let result: any = translations[language];
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return key; // Return the key if translation is not found
      }
    }
    return result;
  }, [language]);

  const value = { language, setLanguage, t };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};
