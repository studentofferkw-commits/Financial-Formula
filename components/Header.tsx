import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { useTranslation } from '../hooks/useTranslation';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
  };

  const activeLinkClass = 'text-teal-500 dark:text-teal-400 font-bold';
  const defaultLinkClass = 'text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors';

  return (
    <header className="bg-white/80 dark:bg-slate-900/80 shadow-md backdrop-blur-sm sticky top-0 z-10 border-b border-gray-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="text-2xl font-bold text-teal-600 dark:text-teal-400">
              {t('header.title')}
            </NavLink>
          </div>
          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-4 space-x-reverse">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => `${isActive ? activeLinkClass : defaultLinkClass} px-3 py-2 rounded-md text-sm font-medium`}
                >
                  {t(`header.nav.${link.key}`)}
                </NavLink>
              ))}
            </nav>
            <div className="flex items-center ms-4 space-x-2">
              <button
                onClick={toggleLanguage}
                className="px-3 py-2 border border-transparent text-sm font-medium rounded-md text-teal-700 bg-teal-100 hover:bg-teal-200 dark:bg-teal-900/50 dark:text-teal-300 dark:hover:bg-teal-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                {language === 'ar' ? 'EN' : 'العربية'}
              </button>
              <ThemeToggle />
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <ThemeToggle />
             <button
              onClick={toggleLanguage}
              className="mx-2 p-2 border border-transparent text-sm font-medium rounded-md text-teal-700 bg-teal-100 hover:bg-teal-200 dark:bg-teal-900/50 dark:text-teal-300 dark:hover:bg-teal-900"
            >
              {language === 'ar' ? 'EN' : 'AR'}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 dark:text-gray-500 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{t('header.openMenu')}</span>
              {isOpen ? (
                <svg className="h-6 w-6" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-teal-50 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-teal-600'}`}
              >
                {t(`header.nav.${link.key}`)}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;