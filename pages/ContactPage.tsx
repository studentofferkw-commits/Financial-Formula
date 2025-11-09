import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import MetaTags from '../components/MetaTags';
import SchemaInjector from '../components/SchemaInjector';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": t('meta.contact.title'),
    "description": t('meta.contact.description'),
    "url": "https://financialformula.app/#/contact",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://financialformula.app/",
      "name": t('header.title')
    }
  };

  return (
    <>
      <MetaTags 
        title={t('meta.contact.title')} 
        description={t('meta.contact.description')} 
      />
      <SchemaInjector schema={schema} id="contact-page-schema" />
      <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-slate-700 text-center">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">{t('contact.title')}</h1>
        <div className="prose prose-lg max-w-none mx-auto text-gray-700 dark:text-gray-300 dark:prose-invert leading-relaxed">
          <p>{t('contact.p1')}</p>
          <p>{t('contact.p2')}</p>
          <a 
            href="mailto:support@financial-formula.com" 
            className="text-xl font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 transition-colors"
          >
            support@financial-formula.com
          </a>
          <p className="mt-6">{t('contact.p3')}</p>
        </div>
      </div>
    </>
  );
};

export default ContactPage;