
import React from 'react';
import DateConverter from '../components/DateConverter.tsx';
import { useTranslation } from '../hooks/useTranslation.ts';
import MetaTags from '../components/MetaTags.tsx';

const DateConverterPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags 
        title={t('meta.dateConverter.title')} 
        description={t('meta.dateConverter.description')} 
      />
      <div className="space-y-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {t('dateConverterPage.mainTitle')}
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            {t('dateConverterPage.subtitle')}
          </p>
        </section>

        <section>
          <DateConverter />
        </section>
      </div>
    </>
  );
};

export default DateConverterPage;