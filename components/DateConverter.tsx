import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { dateToText } from '../services/dateToTextService';

const DateConverter: React.FC = () => {
  const { t, language } = useTranslation();
  const [selectedDate, setSelectedDate] = useState('');
  const [outputText, setOutputText] = useState('');
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'fail'>('idle');

  useEffect(() => {
    if (selectedDate) {
      const text = dateToText(selectedDate, language);
      setOutputText(text);
    } else {
      setOutputText('');
    }
  }, [selectedDate, language]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
  };

  const handleCopy = () => {
    if (!outputText) return;
    navigator.clipboard.writeText(outputText).then(() => {
      setCopyStatus('success');
      setTimeout(() => setCopyStatus('idle'), 2000);
    }).catch(() => {
      setCopyStatus('fail');
      setTimeout(() => setCopyStatus('idle'), 2000);
    });
  };

  const getCopyButtonText = () => {
    if (copyStatus === 'success') return t('converter.copySuccess');
    if (copyStatus === 'fail') return t('converter.copyFail');
    return t('converter.copy');
  };
  
  const getCopyButtonClasses = () => {
    switch (copyStatus) {
      case 'success':
        return 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300';
      case 'fail':
        return 'bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-300';
      default:
        return 'bg-teal-100 text-teal-700 hover:bg-teal-200 dark:bg-teal-900/50 dark:text-teal-300 dark:hover:bg-teal-900 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed dark:disabled:bg-slate-700 dark:disabled:text-gray-500';
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800/50 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 w-full max-w-xl mx-auto">
      <div className="mb-6">
        <label htmlFor="date-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {t('dateConverter.selectDate')}
        </label>
        <input
          type="date"
          id="date-input"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm bg-white dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:placeholder-gray-400"
          value={selectedDate}
          onChange={handleDateChange}
          style={{ colorScheme: 'dark' }} 
        />
      </div>
      <div>
        <div className="flex justify-between items-center mb-1">
          <label htmlFor="text-output" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {t('dateConverter.result')}
          </label>
           <button
            onClick={handleCopy}
            disabled={!outputText}
            className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${getCopyButtonClasses()}`}
          >
            {getCopyButtonText()}
          </button>
        </div>
        <textarea
          id="text-output"
          readOnly
          rows={3}
          className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-800 sm:text-sm resize-none dark:bg-slate-700 dark:border-slate-600 dark:text-gray-200"
          placeholder={t('dateConverter.outputPlaceholder')}
          value={outputText}
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        />
      </div>
    </div>
  );
};

export default DateConverter;
