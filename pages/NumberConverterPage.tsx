import React from 'react';
import { Link } from 'react-router-dom';
import Converter from '../components/Converter';
import { useTranslation } from '../hooks/useTranslation';
import MetaTags from '../components/MetaTags';
import { ARTICLES } from '../constants';
import SchemaInjector from '../components/SchemaInjector';

const NumberConverterPage: React.FC = () => {
  const { t, language } = useTranslation();

  const relatedTools = [
    { path: '/invoice-generator', key: 'invoiceGenerator' },
    { path: '/receipt-generator', key: 'receiptGenerator' },
    { path: '/contract-clause', key: 'contractClause' },
  ];

  const relatedArticleIds = ['1', '2', '3', '4', '5'];
  const relatedArticles = ARTICLES.filter(a => relatedArticleIds.includes(a.id));

  const primaryArticle = ARTICLES.find(a => a.id === '5');
  const content = language === 'ar' ? primaryArticle?.content : primaryArticle?.contentEn;

  const toolSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": t('meta.numberConverter.title'),
    "description": t('meta.numberConverter.description'),
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Any",
    "url": "https://financial-formula.com/number-converter",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <>
      <MetaTags
        title={t('meta.numberConverter.title')}
        description={t('meta.numberConverter.description')}
      />
      <SchemaInjector schema={toolSchema} id="number-converter-schema" />
      <div className="space-y-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {t('numberConverterPage.mainTitle')}
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            {t('numberConverterPage.subtitle')}
          </p>
        </section>

        <section>
          <Converter />
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

export default NumberConverterPage;