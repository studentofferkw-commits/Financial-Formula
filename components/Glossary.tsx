import React, { useState, useMemo } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { GLOSSARY_TERMS } from '../constants';

const Glossary: React.FC = () => {
  const { t, language } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const filteredTerms = useMemo(() => {
    if (!searchTerm) {
      return GLOSSARY_TERMS;
    }
    return GLOSSARY_TERMS.filter(term =>
      term.termAr.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.termEn.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const toggleItem = (id: string) => {
    setOpenItemId(prevId => (prevId === id ? null : id));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8">
        <input
          type="search"
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm bg-white dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:placeholder-gray-400"
          placeholder={t('glossary.searchPlaceholder')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-4">
        {filteredTerms.length > 0 ? (
          filteredTerms.map(term => {
            const isOpen = openItemId === term.id;
            return (
              <div key={term.id} className="border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleItem(term.id)}
                  className="w-full flex justify-between items-center p-4 text-start bg-gray-50 dark:bg-slate-800/50 hover:bg-gray-100 dark:hover:bg-slate-700/50 focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`content-${term.id}`}
                >
                  <span className="font-bold text-lg text-teal-700 dark:text-teal-400">
                    {language === 'ar' ? term.termAr : term.termEn}
                  </span>
                  <svg
                    className={`w-6 h-6 transform transition-transform text-gray-500 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <div
                  id={`content-${term.id}`}
                  className={`px-4 pt-2 pb-4 bg-white dark:bg-slate-800/20 text-gray-700 dark:text-gray-300 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
                >
                    <p className="prose dark:prose-invert max-w-none">
                        {language === 'ar' ? term.definitionAr : term.definitionEn}
                    </p>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-10 px-6 bg-white dark:bg-slate-800/50 rounded-lg shadow-md border border-gray-200 dark:border-slate-700">
            <p className="text-gray-600 dark:text-gray-400 text-lg">{t('glossary.noResults')}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Glossary;
