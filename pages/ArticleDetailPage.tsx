import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ARTICLES } from '../constants';
import { useTranslation } from '../hooks/useTranslation';
import MetaTags from '../components/MetaTags';
import SchemaInjector from '../components/SchemaInjector';
import ShareButtons from '../components/ShareButtons';

const ArticleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useTranslation();
  const article = useMemo(() => ARTICLES.find((a) => a.id === id), [id]);

  const articleSchema = useMemo(() => {
    if (!article) return null;
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": language === 'ar' ? article.title : article.titleEn,
      "description": language === 'ar' ? article.summary : article.summaryEn,
      "author": {
        "@type": "Organization",
        "name": "Financial Formula"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Financial Formula",
        "url": "https://financialformula.app/"
      },
      "datePublished": "2024-01-01", // Static date as articles are static
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://financialformula.app/#/articles/${id}`
      }
    };
  }, [article, language, id]);


  if (!article) {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold mb-4 dark:text-white">{t('articleDetail.notFound.title')}</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{t('articleDetail.notFound.message')}</p>
        <Link to="/articles" className="text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 font-semibold">
          {language === 'ar' ? '←' : '→'} {t('articleDetail.backLink')}
        </Link>
      </div>
    );
  }

  const articleTitle = language === 'ar' ? article.title : article.titleEn;
  const articleSummary = language === 'ar' ? article.summary : article.summaryEn;
  const content = language === 'ar' ? article.content : article.contentEn;
  const textDirectionClass = language === 'ar' ? 'text-right' : 'text-left';
  
  const metaTitle = t('meta.articleDetail.title').replace('%s', articleTitle);
  const metaDescription = t('meta.articleDetail.description').replace('%s', articleSummary);
  const shareUrl = `https://financialformula.app/#/articles/${id}`;

  return (
    <>
      <MetaTags title={metaTitle} description={metaDescription} />
      {articleSchema && <SchemaInjector schema={articleSchema} id="article-schema" />}
      <div className="bg-white dark:bg-slate-800 p-8 md:p-12 rounded-xl shadow-md border border-gray-200 dark:border-slate-700">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">{articleTitle}</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-8">{articleSummary}</p>
        <div
          className={`prose prose-lg max-w-none text-gray-700 dark:text-gray-300 dark:prose-invert leading-relaxed ${textDirectionClass}`}
          dangerouslySetInnerHTML={{ __html: content }}
        />

        <div className="mt-10 pt-6 border-t border-gray-200 dark:border-slate-700 space-y-6">
          <ShareButtons title={articleTitle} url={shareUrl} />
          <Link to="/articles" className="inline-block text-teal-600 dark:text-teal-400 hover:text-teal-800 dark:hover:text-teal-300 font-semibold">
            {language === 'ar' ? '←' : '→'} {t('articleDetail.backLink')}
          </Link>
        </div>
      </div>
    </>
  );
};

export default ArticleDetailPage;