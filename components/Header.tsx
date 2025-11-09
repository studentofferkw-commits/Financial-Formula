import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { useTranslation } from '../hooks/useTranslation';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isToolsDropdownOpen, setIsToolsDropdownOpen] = useState(false);
  const { t, language, setLanguage } = useTranslation();
  const toolsDropdownRef = useRef<HTMLDivElement>(null);

  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (toolsDropdownRef.current && !toolsDropdownRef.current.contains(event.target as Node)) {
        setIsToolsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const activeLinkClass = 'text-teal-500 dark:text-teal-400 font-bold';
  const defaultLinkClass = 'text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors';

  return (
    <header className="bg-white/80 dark:bg-slate-900/80 shadow-md backdrop-blur-sm sticky top-0 z-20 border-b border-gray-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center gap-2 text-2xl font-bold text-teal-600 dark:text-teal-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
                <path d="M4 4H8V20H4V4ZM10 10H14V20H10V10ZM16 16H20V20H16V16Z" />
              </svg>
              <span>{t('header.title')}</span>
            </NavLink>
          </div>
          <div className="hidden md:flex items-center">
            <nav className="flex items-center space-x-4 space-x-reverse">
              {NAV_LINKS.map((link) => 
                link.children ? (
                  <div key={link.key} className="relative" ref={toolsDropdownRef}>
                    <button
                      onClick={() => setIsToolsDropdownOpen(prev => !prev)}
                      className={`${defaultLinkClass} px-3 py-2 rounded-md text-sm font-medium inline-flex items-center`}
                    >
                      <span>{t(`header.nav.${link.key}`)}</span>
                      <svg className="h-4 w-4 ms-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </button>
                    {isToolsDropdownOpen && (
                      <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 focus:outline-none py-1">
                        {link.children.map(child => (
                           <NavLink
                            key={child.path}
                            to={child.path}
                            onClick={() => setIsToolsDropdownOpen(false)}
                            className={({ isActive }) => `block px-4 py-2 text-sm ${isActive ? 'bg-teal-50 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'}`}
                           >
                             {t(`header.nav.${child.key}`)}
                           </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) => `${isActive ? activeLinkClass : defaultLinkClass} px-3 py-2 rounded-md text-sm font-medium`}
                  >
                    {t(`header.nav.${link.key}`)}
                  </NavLink>
                )
              )}
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
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
              <React.Fragment key={link.key}>
                {link.children ? (
                  <>
                    <span className="block px-3 py-2 rounded-md text-base font-medium text-gray-500 dark:text-gray-400">{t(`header.nav.${link.key}`)}</span>
                    {link.children.map(child => (
                       <NavLink
                        key={child.path}
                        to={child.path}
                        onClick={() => setIsOpen(false)}
                        className={({ isActive }) => `block ps-8 pe-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-teal-50 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-teal-600'}`}
                      >
                        {t(`header.nav.${child.key}`)}
                      </NavLink>
                    ))}
                  </>
                ) : (
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) => `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-teal-50 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300' : 'text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 hover:text-teal-600'}`}
                  >
                    {t(`header.nav.${link.key}`)}
                  </NavLink>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;