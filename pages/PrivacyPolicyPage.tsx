
import React from 'react';
import { useTranslation } from '../hooks/useTranslation.ts';
import MetaTags from '../components/MetaTags.tsx';

const PrivacyPolicyPage: React.FC = () => {
  const { t, language } = useTranslation();
  const textDirectionClass = language === 'ar' ? 'text-right' : 'text-left';

  return (
    <>
      <MetaTags 
        title={t('meta.privacy.title')} 
        description={t('meta.privacy.description')} 
      />
      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-slate-700">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">{t('privacy.title')}</h1>
        <div className={`prose prose-lg max-w-none text-gray-700 dark:text-gray-300 dark:prose-invert leading-relaxed ${textDirectionClass}`}>
          <p>{t('privacy.effectiveDate')}</p>
          <p>{t('privacy.intro')}</p>
          <h2 className="text-xl font-bold mt-6">{t('privacy.section1.title')}</h2>
          <p>{t('privacy.section1.content')}</p>
          <h2 className="text-xl font-bold mt-6">{t('privacy.section2.title')}</h2>
          <p>{t('privacy.section2.content')}</p>
          <h2 className="text-xl font-bold mt-6">{t('privacy.section3.title')}</h2>
          <p>{t('privacy.section3.content')}</p>
          <h2 className="text-xl font-bold mt-6">{t('privacy.section4.title')}</h2>
          <p>{t('privacy.section4.content')}</p>
          <p>{t('privacy.contact')}</p>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;