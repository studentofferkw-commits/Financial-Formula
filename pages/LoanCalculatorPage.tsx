import React from 'react';
import LoanCalculator from '../components/LoanCalculator';
import { useTranslation } from '../hooks/useTranslation';
import MetaTags from '../components/MetaTags';

const LoanCalculatorPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <MetaTags 
        title={t('meta.loanCalculator.title')} 
        description={t('meta.loanCalculator.description')} 
      />
      <div className="space-y-12">
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            {t('loanCalculatorPage.mainTitle')}
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            {t('loanCalculatorPage.subtitle')}
          </p>
        </section>

        <section>
          <LoanCalculator />
        </section>
      </div>
    </>
  );
};

export default LoanCalculatorPage;
