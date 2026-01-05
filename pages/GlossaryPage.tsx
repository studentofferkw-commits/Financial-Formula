import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Glossary from '../components/Glossary';
import { useTranslation } from '../hooks/useTranslation';
import MetaTags from '../components/MetaTags';
import SchemaInjector from '../components/SchemaInjector';
import { GLOSSARY_TERMS } from '../constants';

const GlossaryPage: React.FC = () => {
  const { t, language } = useTranslation();
  const { termId } = useParams<{ termId?: string }>();

  const selectedTerm = termId ? GLOSSARY_TERMS.find(t => t.id === termId) : null;

  const schema = selectedTerm
    ? {
      "@context": "https://schema.org",
      "@type": "DefinedTerm",
      "name": language === 'ar' ? selectedTerm.termAr : selectedTerm.termEn,
      "description": language === 'ar' ? selectedTerm.definitionAr : selectedTerm.definitionEn,
    }
    : {
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

  const pageTitle = selectedTerm
    ? `${language === 'ar' ? selectedTerm.termAr : selectedTerm.termEn} | ${t('meta.glossary.title')}`
    : t('meta.glossary.title');

  const pageDescription = selectedTerm
    ? (language === 'ar' ? selectedTerm.definitionAr : selectedTerm.definitionEn).substring(0, 160)
    : t('meta.glossary.description');

  return (
    <>
      <MetaTags
        title={pageTitle}
        description={pageDescription}
      />
      <SchemaInjector schema={schema} id="glossary-page-schema" />
      <div className="space-y-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {selectedTerm ? (language === 'ar' ? selectedTerm.termAr : selectedTerm.termEn) : t('glossaryPage.mainTitle')}
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            {selectedTerm ? (language === 'ar' ? selectedTerm.categoryAr : selectedTerm.category) : t('glossaryPage.subtitle')}
          </p>
        </section>

        {selectedTerm ? (
          <section className="max-w-4xl mx-auto space-y-8">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-slate-700">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-teal-100 text-teal-700 dark:bg-teal-900/50 dark:text-teal-300">
                  {language === 'ar' ? selectedTerm.categoryAr : selectedTerm.category}
                </span>
                {selectedTerm.abbreviationEn && (
                  <span className="text-gray-500 dark:text-gray-400 font-mono">({selectedTerm.abbreviationEn})</span>
                )}
              </div>
              <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
                {language === 'ar' ? selectedTerm.definitionAr : selectedTerm.definitionEn}
              </p>
              {((language === 'ar' && selectedTerm.exampleAr) || (language === 'en' && selectedTerm.exampleEn)) && (
                <div className="p-6 border-s-4 border-teal-500 bg-teal-50 dark:bg-teal-900/10 rounded-e-lg">
                  <h3 className="text-lg font-bold text-teal-700 dark:text-teal-400 mb-2">{t('glossary.example')}</h3>
                  <p className="italic text-gray-600 dark:text-gray-400">
                    {language === 'ar' ? selectedTerm.exampleAr : selectedTerm.exampleEn}
                  </p>
                </div>
              )}
            </div>
            <div className="text-center">
              <Link
                to="/glossary"
                className="inline-flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold hover:underline"
              >
                <svg className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                {t('glossaryPage.backToList')}
              </Link>
            </div>
          </section>
        ) : (
          <section>
            <Glossary />
          </section>
        )}
      </div>
    </>
  );
};

export default GlossaryPage;