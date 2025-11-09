import React from 'react';
import Glossary from '../components/Glossary';
import { useTranslation } from '../hooks/useTranslation';
import MetaTags from '../components/MetaTags';
import SchemaInjector from '../components/SchemaInjector';
import { GLOSSARY_TERMS } from '../constants';

const GlossaryPage: React.FC = () => {
  const { t, language } = useTranslation();

  const schema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    "name": t('meta.glossary.title'),
    "description": t('meta.glossary.description'),
    "mainEntity": GLOSSARY_TERMS.map(term => ({
        "@type": "DefinedTerm",
        "name": language === 'ar' ? term.termAr : term.termEn,
        "description": language === 'ar' ? term.definitionAr : term.definitionEn,
    }))
  };

  return (
    <>
      <MetaTags 
        title={t('meta.glossary.title')} 
        description={t('meta.glossary.description')} 
      />
      <SchemaInjector schema={schema} id="glossary-page-schema" />
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