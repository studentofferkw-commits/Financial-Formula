
import React from 'react';
import { useTranslation } from '../hooks/useTranslation.ts';
import MetaTags from '../components/MetaTags.tsx';

const TermsOfServicePage: React.FC = () => {
  const { t, language } = useTranslation();
  const textDirectionClass = language === 'ar' ? 'text-right' : 'text-left';

  return (
    <>
      <MetaTags 
        title={t('meta.terms.title')} 
        description={t('meta.terms.description')} 
      />
      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-slate-700">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">{t('terms.title')}</h1>
        <div className={`prose prose-lg max-w-none text-gray-700 dark:text-gray-300 dark:prose-invert leading-relaxed ${textDirectionClass}`}>
          <p>{t('terms.intro')}</p>
          <h2 className="text-xl font-bold mt-6">{t('terms.section1.title')}</h2>
          <p>{t('terms.section1.content')}</p>
          <h2 className="text-xl font-bold mt-6">{t('terms.section2.title')}</h2>
          <p>{t('terms.section2.content')}</p>
          <h2 className="text-xl font-bold mt-6">{t('terms.section3.title')}</h2>
          <p>{t('terms.section3.content')}</p>
          <h2 className="text-xl font-bold mt-6">{t('terms.section4.title')}</h2>
          <p>{t('terms.section4.content')}</p>
          <h2 className="text-xl font-bold mt-6">{t('terms.section5.title')}</h2>
          <p>{t('terms.section5.content')}</p>
        </div>
      </div>
    </>
  );
};

export default TermsOfServicePage;