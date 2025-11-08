import React from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../constants';
import { useTranslation } from '../hooks/useTranslation';
import MetaTags from '../components/MetaTags';

const ArticlesPage: React.FC = () => {
  const { t, language } = useTranslation();
  return (
    <>
      <MetaTags 
        title={t('meta.articles.title')} 
        description={t('meta.articles.description')} 
      />
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">{t('articles.title')}</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">{t('articles.subtitle')}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ARTICLES.map((article) => (
            <Link
              key={article.id}
              to={`/articles/${article.id}`}
              className="block bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-slate-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 dark:hover:shadow-teal-900/50"
            >
              <h2 className="text-2xl font-bold text-teal-700 dark:text-teal-400 mb-3">{language === 'ar' ? article.title : article.titleEn}</h2>
              <p className="text-gray-600 dark:text-gray-400">{language === 'ar' ? article.summary : article.summaryEn}</p>
              <span className="inline-block mt-4 text-teal-600 dark:text-teal-500 font-semibold hover:text-teal-800 dark:hover:text-teal-300">
                {t('articles.readMore')} {language === 'ar' ? '→' : '←'}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticlesPage;