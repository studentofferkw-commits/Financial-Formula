import React from 'react';
import ReceiptGenerator from '../components/ReceiptGenerator';
import { useTranslation } from '../hooks/useTranslation';
import MetaTags from '../components/MetaTags';

const ReceiptGeneratorPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags 
        title={t('meta.receiptGenerator.title')} 
        description={t('meta.receiptGenerator.description')} 
      />
      <div className="space-y-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {t('receiptGeneratorPage.mainTitle')}
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            {t('receiptGeneratorPage.subtitle')}
          </p>
        </section>

        <section>
          <ReceiptGenerator />
        </section>
      </div>
    </>
  );
};

export default ReceiptGeneratorPage;