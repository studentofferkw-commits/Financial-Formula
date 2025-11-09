import React from 'react';
import { Link } from 'react-router-dom';
import ContractClauseGenerator from '../components/ContractClauseGenerator';
import { useTranslation } from '../hooks/useTranslation';
import MetaTags from '../components/MetaTags';
import { ARTICLES } from '../constants';

const ContractClausePage: React.FC = () => {
  const { t, language } = useTranslation();
  
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

        <section className="bg-white dark:bg-slate-800/50 p-6 sm:p-8 rounded-xl shadow-md border border-gray-200 dark:border-slate-700">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-white">{t('relatedContent.title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-teal-600 dark:text-teal-400">{t('relatedContent.tools')}</h3>
              <ul className="space-y-2 list-disc ps-5">
                {relatedTools.map(tool => (
                  <li key={tool.key}>
                    <Link to={tool.path} className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:underline">
                      {t(`header.nav.${tool.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-teal-600 dark:text-teal-400">{t('relatedContent.articles')}</h3>
              <ul className="space-y-2 list-disc ps-5">
                {relatedArticles.map(article => (
                  <li key={article.id}>
                    <Link to={`/articles/${article.id}`} className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 hover:underline">
                      {language === 'ar' ? article.title : article.titleEn}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default ContractClausePage;