
import React, { useState, useMemo } from 'react';
import { useTranslation } from '../hooks/useTranslation.ts';
import { GLOSSARY_TERMS } from '../constants.ts';

const Glossary: React.FC = () => {
  const { t, language } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [openItemId, setOpenItemId] = useState<string | null>(null);

  const groupedAndFilteredTerms = useMemo(() => {
    const filtered = searchTerm
      ? GLOSSARY_TERMS.filter(term =>
          term.termAr.toLowerCase().includes(searchTerm.toLowerCase()) ||
          term.termEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
          term.abbreviationEn?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          term.abbreviationAr?.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : GLOSSARY_TERMS;

    return filtered.reduce((acc, term) => {
      const firstLetter = term.termEn.charAt(0).toUpperCase();
      if (!acc[firstLetter]) {
        acc[firstLetter] = [];
      }
      acc[firstLetter].push(term);
      return acc;
    }, {} as Record<string, typeof GLOSSARY_TERMS>);
  }, [searchTerm]);
  
  const sortedGroupKeys = Object.keys(groupedAndFilteredTerms).sort();

  const toggleItem = (id: string) => {
    setOpenItemId(prevId => (prevId === id ? null : id));
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mb-8 sticky top-20 z-10">
        <input
          type="search"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 text-lg bg-white dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:placeholder-gray-400"
          placeholder={t('glossary.searchPlaceholder')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-6">
        {sortedGroupKeys.length > 0 ? (
          sortedGroupKeys.map(letter => (
            <div key={letter}>
              <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-400 mb-3 pb-2 border-b-2 border-teal-500/50">{letter}</h2>
              <div className="space-y-2">
                {groupedAndFilteredTerms[letter].map(term => {
                  const isOpen = openItemId === term.id;
                  const termText = language === 'ar' ? term.termAr : term.termEn;
                  const abbreviation = language === 'ar' ? term.abbreviationAr : term.abbreviationEn;
                  
                  return (
                    <div key={term.id} className="border border-gray-200 dark:border-slate-700 rounded-lg overflow-hidden">
                      <button
                        onClick={() => toggleItem(term.id)}
                        className="w-full flex justify-between items-center p-4 text-start bg-gray-50 dark:bg-slate-800/50 hover:bg-gray-100 dark:hover:bg-slate-700/50 focus:outline-none"
                        aria-expanded={isOpen}
                        aria-controls={`content-${term.id}`}
                      >
                        <div className="flex items-baseline gap-2">
                            <span className="font-bold text-lg text-teal-700 dark:text-teal-400">
                               {termText}
                            </span>
                             {abbreviation && (
                                <span className="text-sm font-mono text-gray-500 dark:text-gray-400">({abbreviation})</span>
                            )}
                        </div>
                        <svg
                          className={`w-6 h-6 transform transition-transform text-gray-500 ${isOpen ? 'rotate-180' : ''}`}
                          fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </button>
                      <div
                        id={`content-${term.id}`}
                        className={`px-4 pt-2 pb-4 bg-white dark:bg-slate-800/20 text-gray-700 dark:text-gray-300 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 visible' : 'max-h-0 opacity-0 invisible'} overflow-hidden`}
                      >
                          <p className="prose dark:prose-invert max-w-none">
                              {language === 'ar' ? term.definitionAr : term.definitionEn}
                          </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))
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