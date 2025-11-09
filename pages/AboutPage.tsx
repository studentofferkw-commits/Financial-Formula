import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import MetaTags from '../components/MetaTags';
import SchemaInjector from '../components/SchemaInjector';

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <section className="mb-12">
    <h2 className="text-3xl font-bold text-teal-700 dark:text-teal-400 mb-6 text-center">{title}</h2>
    <div className="prose prose-lg max-w-none text-gray-700 dark:text-gray-300 dark:prose-invert leading-relaxed">
      {children}
    </div>
  </section>
);

const PrincipleCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-gray-50 dark:bg-slate-900/50 p-6 rounded-lg border border-gray-200 dark:border-slate-700">
    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
    <p>{children}</p>
  </div>
);

const AboutPage: React.FC = () => {
  const { t, language } = useTranslation();
  const textDirectionClass = language === 'ar' ? 'text-right' : 'text-left';

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": t('meta.about.title'),
    "description": t('meta.about.description'),
    "url": "https://financialformula.app/#/about",
    "isPartOf": {
      "@type": "WebSite",
      "url": "https://financialformula.app/",
      "name": t('header.title')
    }
  };

  return (
    <>
      <MetaTags 
        title={t('meta.about.title')} 
        description={t('meta.about.description')} 
      />
      <SchemaInjector schema={schema} id="about-page-schema" />
      <div className={`bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md border border-gray-200 dark:border-slate-700 ${textDirectionClass}`}>
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-4">{t('about.heroTitle')}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{t('about.heroSubtitle')}</p>
        </div>

        {/* Our Story */}
        <Section title={t('about.storyTitle')}>
          <p>{t('about.storyP1')}</p>
          <p>{t('about.storyP2')}</p>
          <p>{t('about.storyP3')}</p>
        </Section>
        
        {/* Mission & Vision */}
        <Section title={t('about.missionVisionTitle')}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border-l-4 border-teal-500">
              <h3 className="text-2xl font-bold mb-3">{t('about.missionTitle')}</h3>
              <p>{t('about.missionText')}</p>
            </div>
            <div className="bg-teal-50 dark:bg-teal-900/30 p-6 rounded-lg border-l-4 border-teal-500">
              <h3 className="text-2xl font-bold mb-3">{t('about.visionTitle')}</h3>
              <p>{t('about.visionText')}</p>
            </div>
          </div>
        </Section>

        {/* Core Principles */}
        <Section title={t('about.principlesTitle')}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PrincipleCard title={t('about.principle1Title')}>
              {t('about.principle1Text')}
            </PrincipleCard>
            <PrincipleCard title={t('about.principle2Title')}>
              {t('about.principle2Text')}
            </PrincipleCard>
            <PrincipleCard title={t('about.principle3Title')}>
              {t('about.principle3Text')}
            </PrincipleCard>
            <PrincipleCard title={t('about.principle4Title')}>
              {t('about.principle4Text')}
            </PrincipleCard>
          </div>
        </Section>
        
        {/* Who We Serve */}
        <Section title={t('about.whoWeServeTitle')}>
          <p>{t('about.whoWeServeIntro')}</p>
          <ul className="list-disc ps-5 mt-4 space-y-2">
            <li><strong>{t('about.serve1Title')}:</strong> {t('about.serve1Text')}</li>
            <li><strong>{t('about.serve2Title')}:</strong> {t('about.serve2Text')}</li>
            <li><strong>{t('about.serve3Title')}:</strong> {t('about.serve3Text')}</li>
            <li><strong>{t('about.serve4Title')}:</strong> {t('about.serve4Text')}</li>
          </ul>
        </Section>

        {/* Our Commitment */}
        <Section title={t('about.commitmentTitle')}>
          <p className="text-center">{t('about.commitmentText')}</p>
        </Section>
      </div>
    </>
  );
};

export default AboutPage;