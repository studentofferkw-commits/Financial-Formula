
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation.ts';
import { FOOTER_LINKS } from '../constants.ts';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400">
        <div className="flex justify-center flex-wrap gap-x-6 gap-y-2 mb-6">
          {FOOTER_LINKS.map(link => (
             <Link key={link.path} to={link.path} className="text-sm text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400">
                {t(`footer.nav.${link.key}`)}
             </Link>
          ))}
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {t('footer.copyright')}
        </p>
      </div>
    </footer>
  );
};

export default Footer;