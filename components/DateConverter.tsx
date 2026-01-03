import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { dateToText } from '../services/dateToTextService';

const DateConverter: React.FC = () => {
  const { t, language } = useTranslation();
  const [displayDate, setDisplayDate] = useState('');
  const [outputText, setOutputText] = useState('');
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'fail'>('idle');

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, ''); // Remove non-digits

    // Auto-insert slashes
    if (value.length > 2) {
      value = value.substring(0, 2) + '/' + value.substring(2);
    }
    if (value.length > 5) {
      value = value.substring(0, 5) + '/' + value.substring(5, 9); // Limit year to 4 chars
    }

    // Limit total length to 10 (DD/MM/YYYY)
    if (value.length > 10) {
      value = value.substring(0, 10);
    }

    setDisplayDate(value);

    // Validate and Convert
    if (value.length === 10) {
      const parts = value.split('/');
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10);
      const year = parseInt(parts[2], 10);

      // Check for valid calendar date
      const dateObj = new Date(year, month - 1, day);
      if (
        dateObj.getFullYear() === year &&
        dateObj.getMonth() === month - 1 &&
        dateObj.getDate() === day
      ) {
        // Construct YYYY-MM-DD for the service
        const isoDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        const text = dateToText(isoDate, language);
        setOutputText(text);
      } else {
        setOutputText(''); // Invalid date
      }
    } else {
      setOutputText(''); // Incomplete date
    }
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
          type="text"
          id="date-input"
          inputMode="numeric"
          placeholder={t('dateConverter.placeholder')}
          className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm bg-white dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:placeholder-gray-400 text-lg tracking-wider ${language === 'ar' ? 'text-right' : 'text-left'}`}
          value={displayDate}
          onChange={handleDateChange}
          dir="ltr"
        />
        {/* Force LTR for the date input even in Arabic so DD/MM/YYYY aligns correctly */}
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
