// FIX: Implemented the main Converter component for the home page.
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../hooks/useTranslation';
import { CURRENCIES } from '../constants';
import { numberToText } from '../services/numberToTextService';
import SearchableSelect from './SearchableSelect';

interface ConverterProps {
  initialCurrency?: string;
  onCurrencyChange?: (currencyCode: string) => void;
}

const Converter: React.FC<ConverterProps> = ({ initialCurrency, onCurrencyChange }) => {
  const navigate = useNavigate();
  const { t, language } = useTranslation();
  const [inputNumber, setInputNumber] = useState('');
  const [outputText, setOutputText] = useState('');
  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState<string>(
    initialCurrency || CURRENCIES.find(c => c.code === 'SAR')?.code || CURRENCIES[0].code
  );
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'fail'>('idle');

  const selectedCurrency = CURRENCIES.find(c => c.code === selectedCurrencyCode) || CURRENCIES[0];

  const currencyOptions = CURRENCIES.map(c => ({
    value: c.code,
    label: language === 'ar' ? c.nameAr : c.name
  }));

  useEffect(() => {
    if (inputNumber && selectedCurrency) {
      const text = numberToText(inputNumber, selectedCurrency, language);
      setOutputText(text);
    } else {
      setOutputText('');
    }
  }, [inputNumber, selectedCurrency, language]);

  useEffect(() => {
    if (initialCurrency && initialCurrency !== selectedCurrencyCode) {
      setSelectedCurrencyCode(initialCurrency);
    }
  }, [initialCurrency]);

  const handleCurrencyChange = (code: string) => {
    setSelectedCurrencyCode(code);
    if (onCurrencyChange) onCurrencyChange(code);
    // Optionally update URL if we are on a /tafqit page
    if (window.location.pathname.startsWith('/tafqit')) {
      navigate(`/tafqit/${code.toLowerCase()}`);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and a single decimal point
    if (/^\d*\.?\d*$/.test(value)) {
      setInputNumber(value);
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
    <div className="bg-white dark:bg-slate-800/50 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 w-full max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="number-input" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t('converter.enterNumber')}
          </label>
          <input
            type="text"
            id="number-input"
            inputMode="decimal"
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm bg-white dark:bg-slate-700 dark:border-slate-600 dark:text-white dark:placeholder-gray-400"
            placeholder={t('converter.placeholder')}
            value={inputNumber}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="currency-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {t('converter.selectCurrency')}
          </label>
          <SearchableSelect
            options={currencyOptions}
            value={selectedCurrencyCode}
            onChange={handleCurrencyChange}
            placeholder={t('converter.selectCurrency')}
          />
        </div>
      </div>
      <div>
        <div className="flex justify-between items-center mb-1">
          <label htmlFor="text-output" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            {t('converter.result')}
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
          rows={4}
          className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-800 sm:text-sm resize-none dark:bg-slate-700 dark:border-slate-600 dark:text-gray-200"
          placeholder={t('converter.outputPlaceholder')}
          value={outputText}
          dir={language === 'ar' ? 'rtl' : 'ltr'}
        />
      </div>
    </div>
  );
};

export default Converter;