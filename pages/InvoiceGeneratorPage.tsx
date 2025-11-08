
import React from 'react';
import InvoiceGenerator from '../components/InvoiceGenerator.tsx';
import { useTranslation } from '../hooks/useTranslation.ts';
import MetaTags from '../components/MetaTags.tsx';

const InvoiceGeneratorPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags 
        title={t('meta.invoiceGenerator.title')} 
        description={t('meta.invoiceGenerator.description')} 
      />
      <div className="space-y-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {t('invoiceGeneratorPage.mainTitle')}
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            {t('invoiceGeneratorPage.subtitle')}
          </p>
        </section>

        <section>
          <InvoiceGenerator />
        </section>
      </div>
    </>
  );
};

export default InvoiceGeneratorPage;