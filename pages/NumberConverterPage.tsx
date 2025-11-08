import React from 'react';
import Converter from '../components/Converter.tsx';
import { useTranslation } from '../hooks/useTranslation.ts';
import MetaTags from '../components/MetaTags.tsx';

const NumberConverterPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <MetaTags 
        title={t('meta.numberConverter.title')} 
        description={t('meta.numberConverter.description')} 
      />
      <div className="space-y-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {t('numberConverterPage.mainTitle')}
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            {t('numberConverterPage.subtitle')}
          </p>
        </section>

        <section>
          <Converter />
        </section>
      </div>
    </>
  );
};

export default NumberConverterPage;
