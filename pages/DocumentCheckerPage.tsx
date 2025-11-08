import React from 'react';
import DocumentChecker from '../components/DocumentChecker';
import { useTranslation } from '../hooks/useTranslation';
import MetaTags from '../components/MetaTags';

const DocumentCheckerPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags 
        title={t('meta.documentChecker.title')} 
        description={t('meta.documentChecker.description')} 
      />
      <div className="space-y-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {t('documentCheckerPage.mainTitle')}
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            {t('documentCheckerPage.subtitle')}
          </p>
        </section>

        <section>
          <DocumentChecker />
        </section>
      </div>
    </>
  );
};

export default DocumentCheckerPage;