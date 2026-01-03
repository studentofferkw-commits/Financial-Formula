import React from 'react';
import { Link } from 'react-router-dom';
import ContractClauseGenerator from '../components/ContractClauseGenerator';
import { useTranslation } from '../hooks/useTranslation';
import MetaTags from '../components/MetaTags';
import SchemaInjector from '../components/SchemaInjector'; // Added SchemaInjector import
import { ARTICLES } from '../constants';

const ContractClausePage: React.FC = () => {
  const { t, language } = useTranslation();

  const primaryArticle = ARTICLES.find(a => a.id === '7');
  const content = language === 'ar' ? primaryArticle?.content : primaryArticle?.contentEn;

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": t('meta.contractClause.title'),
    "description": t('meta.contractClause.description'),
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Any",
    "url": "https://financial-formula.com/contract-clause",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  const relatedTools = [
    { path: '/number-converter', key: 'numberConverter' },
    { path: '/date-converter', key: 'dateConverter' },
    { path: '/invoice-generator', key: 'invoiceGenerator' },
  ];

  const relatedArticleIds = ['7'];
  const relatedArticles = ARTICLES.filter(a => relatedArticleIds.includes(a.id));

  return (
    <>
      <MetaTags
        title={t('meta.contractClause.title')}
        description={t('meta.contractClause.description')}
      />
      <SchemaInjector schema={toolSchema} id="webapp-schema" />
      <div className="space-y-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {t('contractClausePage.mainTitle')}
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            {t('contractClausePage.subtitle')}
          </p>
        </section>

        <section>
          <ContractClauseGenerator />
        </section>

        {/* Rich Content Section */}
        {content && (
          <section className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-slate-700 prose prose-lg max-w-none dark:prose-invert">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </section>
        )}

        <section className="bg-white dark:bg-slate-800/50 p-6 sm:p-8 rounded-xl shadow-md border border-gray-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">{t('relatedContent.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-teal-600 dark:text-teal-400">{t('relatedContent.tools')}</h3>
              <div className="space-y-3">
                {relatedTools.map(tool => (
                  <Link key={tool.key} to={tool.path} className="block p-4 rounded-lg bg-gray-50 dark:bg-slate-900/50 hover:bg-teal-50 dark:hover:bg-slate-700/50 border border-gray-200 dark:border-slate-700 transition-colors transform hover:scale-105">
                    <span className="font-semibold text-teal-700 dark:text-teal-400">{t(`header.nav.${tool.key}`)}</span>
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-teal-600 dark:text-teal-400">{t('relatedContent.articles')}</h3>
              <div className="space-y-3">
                {relatedArticles.map(article => (
                  <Link key={article.id} to={`/articles/${article.id}`} className="block p-4 rounded-lg bg-gray-50 dark:bg-slate-900/50 hover:bg-teal-50 dark:hover:bg-slate-700/50 border border-gray-200 dark:border-slate-700 transition-colors transform hover:scale-105">
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{language === 'ar' ? article.title : article.titleEn}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default ContractClausePage;