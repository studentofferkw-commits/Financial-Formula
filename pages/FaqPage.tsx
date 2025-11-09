import React, { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import MetaTags from '../components/MetaTags';
import SchemaInjector from '../components/SchemaInjector';

const FaqPage: React.FC = () => {
  const { t, language } = useTranslation();
  const [openItemId, setOpenItemId] = useState<number | null>(null);

  const questions = t('faqPage.questions') as any as { q: string; a: string }[];

  const toggleItem = (id: number) => {
    setOpenItemId(prevId => (prevId === id ? null : id));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(item => ({
      "@type": "Question",
      "name": item.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.a.replace(/<[^>]*>?/gm, '') // Remove HTML tags for schema
      }
    }))
  };

  return (
    <>
      <MetaTags 
        title={t('meta.faq.title')} 
        description={t('meta.faq.description')} 
      />
      <SchemaInjector schema={faqSchema} id="faq-page-schema" />
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {t('faqPage.title')}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('faqPage.subtitle')}
          </p>
        </div>

        <div className="space-y-4">
          {questions.map((item, index) => {
            const isOpen = openItemId === index;
            return (
              <div key={index} className="border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex justify-between items-center p-5 text-start bg-gray-50 dark:bg-slate-800/50 hover:bg-gray-100 dark:hover:bg-slate-700/50 focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-content-${index}`}
                >
                  <span className="font-bold text-lg text-teal-700 dark:text-teal-400">{item.q}</span>
                  <svg
                    className={`w-6 h-6 transform transition-transform text-gray-500 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div
                  id={`faq-content-${index}`}
                  className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
                >
                  <div 
                    className="p-5 bg-white dark:bg-slate-800/20 text-gray-700 dark:text-gray-300 prose prose-lg max-w-none dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: item.a }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FaqPage;