
import React from 'react';
import Glossary from '../components/Glossary.tsx';
import { useTranslation } from '../hooks/useTranslation.ts';
import MetaTags from '../components/MetaTags.tsx';

const GlossaryPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags 
        title={t('meta.glossary.title')} 
        description={t('meta.glossary.description')} 
      />
      <div className="space-y-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {t('glossaryPage.mainTitle')}
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            {t('glossaryPage.subtitle')}
          </p>
        </section>

        <section>
          <Glossary />
        </section>
      </div>
    </>
  );
};

export default GlossaryPage;