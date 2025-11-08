
import React from 'react';
import ContractClauseGenerator from '../components/ContractClauseGenerator.tsx';
import { useTranslation } from '../hooks/useTranslation.ts';
import MetaTags from '../components/MetaTags.tsx';

const ContractClausePage: React.FC = () => {
  const { t } = useTranslation();

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
      </div>
    </>
  );
};

export default ContractClausePage;