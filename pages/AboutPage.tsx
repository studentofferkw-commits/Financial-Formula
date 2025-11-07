import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

const AboutPage: React.FC = () => {
  const { t, language } = useTranslation();
  const textDirectionClass = language === 'ar' ? 'text-justify' : 'text-left';

  return (
    <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-slate-700">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">{t('about.title')}</h1>
      <div className={`prose prose-lg max-w-none text-gray-700 dark:text-gray-300 dark:prose-invert leading-relaxed ${textDirectionClass}`}>
        <p>{t('about.p1')}</p>
        <p>{t('about.p2')}</p>
        <p>{t('about.p3')}</p>
        <p>{t('about.p4')}</p>
        <p>{t('about.p5')}</p>
      </div>
    </div>
  );
};

export default AboutPage;