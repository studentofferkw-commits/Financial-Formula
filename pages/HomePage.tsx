import React, { useEffect } from 'react';
import Converter from '../components/Converter';
import { useTranslation } from '../hooks/useTranslation';
import MetaTags from '../components/MetaTags';

const HomePage: React.FC = () => {
  const { t, language } = useTranslation();
  
  const textDirectionClass = language === 'ar' ? 'text-justify' : 'text-left';

  useEffect(() => {
    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Financial Formula",
        "url": window.location.origin,
      },
      {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Financial Formula - Number to Text Converter",
        "applicationCategory": "FinancialApplication",
        "operatingSystem": "WebPlatform",
        "description": "An interactive web tool that converts numbers into written Arabic and English text for financial documents, checks, and contracts.",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        }
      }
    ];

    const scriptElements = schemas.map(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(schema);
      document.head.appendChild(script);
      return script;
    });
    
    // Cleanup function to remove the scripts when the component unmounts
    return () => {
      scriptElements.forEach(script => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      });
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <>
      <MetaTags 
        title={t('meta.home.title')} 
        description={t('meta.home.description')} 
      />
      <div className="space-y-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {t('home.mainTitle')}
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            {t('home.subtitle')}
          </p>
        </section>

        <section>
          <Converter />
        </section>

        <section className="bg-white dark:bg-slate-800/50 p-8 rounded-xl shadow-md border border-gray-200 dark:border-slate-700">
          <h2 className="text-3xl font-bold text-teal-700 dark:text-teal-400 mb-6 text-center">{t('home.whyUse.title')}</h2>
          <div className={`prose prose-lg max-w-none text-gray-700 dark:text-gray-300 dark:prose-invert leading-relaxed ${textDirectionClass}`}>
              <p>
                {t('home.whyUse.p1')}
              </p>
              <p>
                {t('home.whyUse.p2')}
              </p>
              <h3 className="font-bold text-xl mt-6">{t('home.whyUse.beneficiariesTitle')}</h3>
              <ul className="list-disc ps-5">
                  <li><strong>{t('home.whyUse.b1_strong')}</strong> {t('home.whyUse.b1_text')}</li>
                  <li><strong>{t('home.whyUse.b2_strong')}</strong> {t('home.whyUse.b2_text')}</li>
                  <li><strong>{t('home.whyUse.b3_strong')}</strong> {t('home.whyUse.b3_text')}</li>
                  <li><strong>{t('home.whyUse.b4_strong')}</strong> {t('home.whyUse.b4_text')}</li>
              </ul>
              <p>
                  {t('home.whyUse.p3')}
              </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;