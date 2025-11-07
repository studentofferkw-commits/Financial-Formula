import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-white dark:bg-slate-800 border-t border-gray-200 dark:border-slate-700">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500 dark:text-gray-400">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {t('footer.copyright')}
        </p>
        <div className="mt-4 flex justify-center gap-6">
          <Link to="/privacy-policy" className="text-sm text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400">
            {t('footer.privacy')}
          </Link>
          <Link to="/terms-of-service" className="text-sm text-gray-500 hover:text-teal-600 dark:text-gray-400 dark:hover:text-teal-400">
            {t('footer.terms')}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;