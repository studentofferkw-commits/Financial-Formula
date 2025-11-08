import React from 'react';
import { useTranslation } from '../hooks/useTranslation';
import MetaTags from '../components/MetaTags';
import { Link } from 'react-router-dom';

// FIX: Replaced `JSX.Element` with `React.ReactNode` to resolve the 'Cannot find namespace JSX' error.
const FeatureCard: React.FC<{ path: string; icon: React.ReactNode; title: string; description: string }> = ({ path, icon, title, description }) => {
  return (
    <Link to={path} className="group block bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 hover:shadow-2xl hover:-translate-y-2 hover:border-teal-500 dark:hover:shadow-teal-900/50 transition-all duration-300">
      <div className="flex items-center justify-center h-16 w-16 bg-teal-100 dark:bg-teal-900/50 rounded-full mb-4 group-hover:bg-teal-200 dark:group-hover:bg-teal-900 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </Link>
  );
};

const HomePage: React.FC = () => {
  const { t, language } = useTranslation();
  const textDirectionClass = language === 'ar' ? 'text-right' : 'text-left';
  
  const cardIcons = {
    numberConverter: (
      <svg className="h-8 w-8 text-teal-600 dark:text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008Zm0 3h.008v.008H8.25v-.008Zm0 3h.008v.008H8.25v-.008Zm3-6h.008v.008H11.25v-.008Zm0 3h.008v.008H11.25v-.008Zm0 3h.008v.008H11.25v-.008Zm3-6h.008v.008H14.25v-.008Zm0 3h.008v.008H14.25v-.008Zm0 3h.008v.008H14.25v-.008ZM6 21v-3.091c0-.34.146-.663.398-.881l1.522-1.299a1.125 1.125 0 0 1 1.282 0l1.522 1.299c.252.218.398.54.398.881V21M6 21h12M6 21H3.75a1.875 1.875 0 0 1-1.875-1.875V4.875C1.875 3.839 2.714 3 3.75 3h16.5c1.036 0 1.875.84 1.875 1.875v14.25A1.875 1.875 0 0 1 20.25 21H18" />
      </svg>
    ),
    dateConverter: (
      <svg className="h-8 w-8 text-teal-600 dark:text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0h18M9.75 12h.008v.008H9.75V12Zm3 0h.008v.008H12.75V12Zm3 0h.008v.008H15.75V12Zm-3 3h.008v.008H12.75V15Zm-3 0h.008v.008H9.75V15Z" />
      </svg>
    ),
    invoiceGenerator: (
      <svg className="h-8 w-8 text-teal-600 dark:text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5.586a1 1 0 0 1 .707.293l5.414 5.414a1 1 0 0 1 .293.707V19a2 2 0 0 1-2 2Z" />
      </svg>
    ),
    receiptGenerator: (
       <svg className="h-8 w-8 text-teal-600 dark:text-teal-400"  fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
        </svg>
    ),
    contractClause: (
      <svg className="h-8 w-8 text-teal-600 dark:text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5h6m-6-3h6m-6-3h6m-6-3h6M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21m-4.062 0h2.125M9 21h-1.553c-1.295 0-2.41-1.01-2.58-2.303L4.5 5.25a2.25 2.25 0 0 1 2.25-2.25h9a2.25 2.25 0 0 1 2.25 2.25L19.5 18.7a2.5 2.5 0 0 1-2.58 2.303H15M9 21h6" />
      </svg>
    ),
    loanCalculator: (
      <svg className="h-8 w-8 text-teal-600 dark:text-teal-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489" />
      </svg>
    ),
  };

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard 
              path="/number-converter"
              icon={cardIcons.numberConverter}
              title={t('home.cards.numberConverter.title')}
              description={t('home.cards.numberConverter.description')}
            />
            <FeatureCard 
              path="/date-converter"
              icon={cardIcons.dateConverter}
              title={t('home.cards.dateConverter.title')}
              description={t('home.cards.dateConverter.description')}
            />
            <FeatureCard 
              path="/invoice-generator"
              icon={cardIcons.invoiceGenerator}
              title={t('home.cards.invoiceGenerator.title')}
              description={t('home.cards.invoiceGenerator.description')}
            />
            <FeatureCard 
              path="/receipt-generator"
              icon={cardIcons.receiptGenerator}
              title={t('home.cards.receiptGenerator.title')}
              description={t('home.cards.receiptGenerator.description')}
            />
            <FeatureCard 
              path="/contract-clause"
              icon={cardIcons.contractClause}
              title={t('home.cards.contractClause.title')}
              description={t('home.cards.contractClause.description')}
            />
             <FeatureCard 
              path="/loan-calculator"
              icon={cardIcons.loanCalculator}
              title={t('home.cards.loanCalculator.title')}
              description={t('home.cards.loanCalculator.description')}
            />
          </div>
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