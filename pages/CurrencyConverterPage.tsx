import React from 'react';
import CurrencyConverter from '../components/CurrencyConverter';
import { useTranslation } from '../hooks/useTranslation';
import MetaTags from '../components/MetaTags';

const CurrencyConverterPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags 
        title={t('meta.currencyConverter.title')} 
        description={t('meta.currencyConverter.description')} 
      />
      <div className="space-y-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {t('currencyConverterPage.mainTitle')}
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            {t('currencyConverterPage.subtitle')}
          </p>
        </section>

        <section>
          <CurrencyConverter />
        </section>
      </div>
    </>
  );
};

export default CurrencyConverterPage;
