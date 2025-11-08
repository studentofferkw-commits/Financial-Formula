import React, { useState, useEffect, useMemo } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { CURRENCIES } from '../constants';
import SearchableSelect from './SearchableSelect';

const CurrencyConverter: React.FC = () => {
  const { t, language } = useTranslation();

  const [amount, setAmount] = useState('1');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EGP');
  const [rates, setRates] = useState<{ [key: string]: number } | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [conversionError, setConversionError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState('');

  useEffect(() => {
    const fetchRates = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(`https://open.er-api.com/v6/latest/USD`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        if (data.result !== 'success') {
          throw new Error('API returned an error');
        }
        setRates(data.rates);
        const updateDate = new Date(data.time_last_update_utc).toLocaleDateString(language === 'ar' ? 'ar-EG' : 'en-CA', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        });
        setLastUpdated(updateDate);
      } catch (err) {
        setError(t('currencyConverter.error'));
        console.error("Failed to fetch rates:", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchRates();
  }, [t, language]);

  const currencyOptions = useMemo(() => {
    return CURRENCIES
      .map(c => ({
        value: c.code,
        label: language === 'ar' ? `${c.nameAr} (${c.code})` : `${c.name} (${c.code})`
      }))
      .sort((a, b) => a.label.localeCompare(b.label));
  }, [language]);
  
  const convertedAmount = useMemo(() => {
    setConversionError(null);
    if (!rates || !amount) return null;
    
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount)) return null;

    const fromRate = rates[fromCurrency];
    const toRate = rates[toCurrency];

    if (fromRate === undefined) {
      setConversionError(`${t('currencyConverter.rateUnavailable')} ${fromCurrency}`);
      return null;
    }
    if (toRate === undefined) {
      setConversionError(`${t('currencyConverter.rateUnavailable')} ${toCurrency}`);
      return null;
    }
    
    // API base is USD.
    const amountInUSD = numericAmount / fromRate;
    return amountInUSD * toRate;
  }, [amount, fromCurrency, toCurrency, rates, t]);
  
  const toCurrencyObject = useMemo(() => CURRENCIES.find(c => c.code === toCurrency), [toCurrency]);


  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };
  
  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  const exchangeRateText = useMemo(() => {
    if (!rates || isLoading || conversionError) return '...';

    const fromRate = rates[fromCurrency];
    const toRate = rates[toCurrency];

    if (fromRate === undefined || toRate === undefined) return '...';

    const rate = toRate / fromRate;
    return `1 ${fromCurrency} = ${rate.toFixed(4)} ${toCurrency}`;
  }, [rates, fromCurrency, toCurrency, isLoading, conversionError]);

  return (
    <div className="bg-slate-800/50 p-6 sm:p-8 rounded-xl shadow-lg border border-slate-700 w-full max-w-3xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 items-center">
        {/* Left Column for selectors and swap */}
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">{t('currencyConverter.from')}</label>
                <SearchableSelect options={currencyOptions} value={fromCurrency} onChange={setFromCurrency} />
            </div>

            <div className="text-center">
                <button onClick={handleSwap} className="p-2 rounded-full hover:bg-slate-700" aria-label={t('currencyConverter.swap')}>
                    <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                    </svg>
                </button>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">{t('currencyConverter.to')}</label>
                <SearchableSelect options={currencyOptions} value={toCurrency} onChange={setToCurrency} />
            </div>
        </div>

        {/* Right Column for amount */}
        <div>
            <label className="block text-sm font-medium text-gray-300 mb-1">{t('currencyConverter.amount')}</label>
            <input
                type="text"
                inputMode="decimal"
                value={amount}
                onChange={handleAmountChange}
                className="w-full input-style text-lg"
            />
        </div>
      </div>
      
      <div className="pt-6 mt-6 border-t border-slate-700">
        {isLoading ? (
          <div className="text-center text-gray-400">{t('currencyConverter.loading')}</div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : conversionError ? (
          <div className="text-center text-red-500 font-semibold">{conversionError}</div>
        ) : (
          <div className="text-center">
             <p className="text-4xl font-bold text-white">
                {convertedAmount !== null ? (
                    <>
                        <span className="text-3xl font-light text-gray-400 align-baseline me-2">{toCurrencyObject?.symbol}</span>
                        {convertedAmount.toLocaleString(undefined, { maximumFractionDigits: 4, minimumFractionDigits: 2 })}
                    </>
                ) : '...'}
            </p>
            <div className="text-sm text-gray-400 mt-2 font-mono space-y-1">
                <p>{exchangeRateText}</p>
                {lastUpdated && 
                    <p className="text-xs text-gray-500">
                        {t('currencyConverter.lastUpdated')}: {lastUpdated}
                    </p>
                }
            </div>
          </div>
        )}
      </div>
       <InputStyle />
    </div>
  );
};


const InputStyle: React.FC = () => (
  <style>{`
    .input-style {
      padding: 0.5rem 0.75rem; border: 1px solid; border-radius: 0.375rem;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); transition: all 0.2s;
    }
    .input-style:focus {
      --tw-ring-color: #14b8a6; border-color: #14b8a6;
      box-shadow: 0 0 0 1px #14b8a6; outline: none;
    }
    .dark .input-style {
      background-color: #334155; border-color: #475569; color: white;
    }
    .dark .input-style::placeholder { color: #94a3b8; }
  `}</style>
);

export default CurrencyConverter;