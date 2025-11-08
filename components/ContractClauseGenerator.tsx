
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation.ts';
import { CURRENCIES } from '../constants.ts';
import { generateContractClauses } from '../services/clauseGeneratorService.ts';
import SearchableSelect from './SearchableSelect.tsx';

const ClauseOutput: React.FC<{ title: string; content: string; rows?: number }> = ({ title, content, rows = 6 }) => {
  const { t } = useTranslation();
  const [copyStatus, setCopyStatus] = useState<'idle' | 'success' | 'fail'>('idle');

  const handleCopy = () => {
    if (!content) return;
    navigator.clipboard.writeText(content).then(() => {
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
    <div className="bg-white dark:bg-slate-800/50 p-4 rounded-lg border border-gray-200 dark:border-slate-700">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-bold text-teal-700 dark:text-teal-400">{title}</h3>
        <button
          onClick={handleCopy}
          disabled={!content}
          className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${getCopyButtonClasses()}`}
        >
          {getCopyButtonText()}
        </button>
      </div>
      <textarea
        readOnly
        rows={rows}
        className="w-full px-3 py-2 border border-gray-200 rounded-md bg-gray-50 text-gray-800 sm:text-sm resize-y dark:bg-slate-700 dark:border-slate-600 dark:text-gray-200"
        value={content}
        placeholder={t('contractClause.outputPlaceholder')}
      />
    </div>
  );
};

const ContractClauseGenerator: React.FC = () => {
  const { t, language } = useTranslation();
  
  // State variables
  const [inputNumber, setInputNumber] = useState('10000');
  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState<string>(CURRENCIES.find(c => c.code === 'SAR')?.code || CURRENCIES[0].code);
  const [payerName, setPayerName] = useState('');
  const [payeeName, setPayeeName] = useState('');
  const [paymentType, setPaymentType] = useState<'oneTime' | 'installments'>('oneTime');
  const [installmentsCount, setInstallmentsCount] = useState('12');
  const [downPayment, setDownPayment] = useState('');
  const [frequency, setFrequency] = useState<'monthly' | 'quarterly' | 'annually'>('monthly');
  const [taxOption, setTaxOption] = useState<'inclusive' | 'exclusive'>('inclusive');
  const [taxRate, setTaxRate] = useState('15');
  
  const [generatedClauses, setGeneratedClauses] = useState({ standard: '', detailed: '', schedule: '' });

  const selectedCurrency = CURRENCIES.find(c => c.code === selectedCurrencyCode) || CURRENCIES[0];

  const currencyOptions = CURRENCIES.map(c => ({
    value: c.code,
    label: language === 'ar' ? c.nameAr : c.name
  }));

  const frequencyOptions = [
    { value: 'monthly', label: t('contractClause.monthly') },
    { value: 'quarterly', label: t('contractClause.quarterly') },
    { value: 'annually', label: t('contractClause.annually') },
  ];

  // Effect to regenerate clauses on any input change
  useEffect(() => {
    const clauses = generateContractClauses({
      amountStr: inputNumber || '0',
      currency: selectedCurrency,
      lang: language,
      paymentType,
      taxOption,
      taxRateStr: taxRate,
      payerName,
      payeeName,
      installmentsCount,
      downPaymentStr: downPayment,
      frequency
    });
    setGeneratedClauses(clauses);
  }, [inputNumber, selectedCurrency, language, paymentType, taxOption, taxRate, payerName, payeeName, installmentsCount, downPayment, frequency]);

  const handleNumericInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setter(value);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Configuration Section */}
      <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 space-y-6">
        <h2 className="text-xl font-bold border-b pb-2 dark:border-slate-600">{t('contractClause.configuration')}</h2>

        {/* Parties */}
        <ConfigSection title={t('contractClause.parties')}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label={t('contractClause.payer')} placeholder={t('contractClause.payerPlaceholder')} value={payerName} onChange={e => setPayerName(e.target.value)} />
                <Input label={t('contractClause.payee')} placeholder={t('contractClause.payeePlaceholder')} value={payeeName} onChange={e => setPayeeName(e.target.value)} />
            </div>
        </ConfigSection>

        {/* Amount and Currency */}
        <ConfigSection title={t('converter.enterNumber')}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label={t('contractClause.enterAmount')} type="text" inputMode="decimal" placeholder={t('converter.placeholder')} value={inputNumber} onChange={handleNumericInputChange(setInputNumber)} />
                <div>
                    <label className="block text-sm font-medium mb-1">{t('converter.selectCurrency')}</label>
                    <SearchableSelect options={currencyOptions} value={selectedCurrencyCode} onChange={setSelectedCurrencyCode} placeholder={t('converter.selectCurrency')} />
                </div>
            </div>
        </ConfigSection>

        {/* Payment Structure */}
        <ConfigSection title={t('contractClause.paymentStructure')}>
          <div className="flex gap-4 mb-4">
            <RadioOption name="paymentType" value="oneTime" label={t('contractClause.oneTime')} checked={paymentType === 'oneTime'} onChange={setPaymentType as (val: string) => void} />
            <RadioOption name="paymentType" value="installments" label={t('contractClause.installments')} checked={paymentType === 'installments'} onChange={setPaymentType as (val: string) => void} />
          </div>
          {paymentType === 'installments' && (
              <div className="space-y-4 p-4 bg-gray-50 dark:bg-slate-900/50 rounded-lg">
                <h4 className="font-semibold">{t('contractClause.installmentDetails')}</h4>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input label={t('contractClause.numberOfInstallments')} type="number" value={installmentsCount} onChange={e => setInstallmentsCount(e.target.value.replace(/[^0-9]/g, ''))} />
                    <Input label={t('contractClause.downPayment')} type="text" inputMode="decimal" value={downPayment} onChange={handleNumericInputChange(setDownPayment)} />
                 </div>
                 <div>
                    <label className="block text-sm font-medium mb-1">{t('contractClause.paymentFrequency')}</label>
                    <select value={frequency} onChange={e => setFrequency(e.target.value as any)} className="w-full input-style">
                        {frequencyOptions.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
                    </select>
                 </div>
              </div>
          )}
        </ConfigSection>

        {/* Tax Information */}
        <ConfigSection title={t('contractClause.taxInfo')}>
          <div className="flex flex-col gap-2">
            <RadioOption name="taxOption" value="inclusive" label={t('contractClause.inclusive')} checked={taxOption === 'inclusive'} onChange={setTaxOption as (val: string) => void} />
            <RadioOption name="taxOption" value="exclusive" label={t('contractClause.exclusive')} checked={taxOption === 'exclusive'} onChange={setTaxOption as (val: string) => void} />
             <div className="ps-8 mt-2">
                <label className="block text-xs font-medium mb-1">{t('contractClause.taxRate')}</label>
                <input type="text" inputMode="decimal" className="w-full max-w-xs input-style" placeholder={t('contractClause.taxRatePlaceholder')} value={taxRate} onChange={handleNumericInputChange(setTaxRate)} />
              </div>
          </div>
        </ConfigSection>
      </div>

      {/* Generated Clauses Section */}
      <div className="space-y-6">
        <h2 className="text-xl font-bold">{t('contractClause.generatedClauses')}</h2>
        <ClauseOutput title={t('contractClause.standardClause')} content={generatedClauses.standard} rows={4} />
        <ClauseOutput title={t('contractClause.detailedClause')} content={generatedClauses.detailed} rows={7} />
        {paymentType === 'installments' && generatedClauses.schedule && (
            <ClauseOutput title={t('contractClause.paymentSchedule')} content={generatedClauses.schedule} rows={7} />
        )}
      </div>
    </div>
  );
};

// Sub-components for better structure
const ConfigSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <fieldset className="border-t pt-4 dark:border-slate-700">
        <legend className="text-sm font-semibold mb-2">{title}</legend>
        {children}
    </fieldset>
);

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string }> = ({ label, ...props }) => (
    <div>
        <label className="block text-sm font-medium mb-1">{label}</label>
        <input {...props} className="w-full input-style" />
    </div>
);

const RadioOption: React.FC<{ name: string; value: string; label: string; checked: boolean; onChange: (value: string) => void; }> = ({ name, value, label, checked, onChange }) => (
    <label className="flex items-center space-x-2 space-x-reverse cursor-pointer p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700/50">
        <input type="radio" name={name} value={value} checked={checked} onChange={(e) => onChange(e.target.value)} className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:checked:bg-teal-600" />
        <span className="text-sm">{label}</span>
    </label>
);

// Helper for input styles (to avoid creating a new file)
const InputStyle: React.FC = () => (
  <style>{`
    .input-style {
      padding: 0.5rem 0.75rem;
      border: 1px solid;
      border-radius: 0.375rem;
      box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
      transition: all 0.2s;
    }
    .input-style:focus {
      --tw-ring-color: #14b8a6; /* teal-500 */
      border-color: #14b8a6;
      box-shadow: 0 0 0 1px #14b8a6;
      outline: none;
    }
    .dark .input-style {
      background-color: #334155; /* slate-700 */
      border-color: #475569; /* slate-600 */
      color: white;
    }
    .dark .input-style::placeholder {
      color: #94a3b8; /* slate-400 */
    }
    select.input-style {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="%236b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 8 4 4 4-4"/></svg>');
      background-repeat: no-repeat;
      background-position: right 0.5rem center;
      background-size: 1.25em 1.25em;
      padding-right: 2.5rem;
    }
    .dark select.input-style {
       background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="%2394a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 8 4 4 4-4"/></svg>');
    }
  `}</style>
);

const ContractClauseGeneratorWithStyles: React.FC = () => (
  <>
    <InputStyle />
    <ContractClauseGenerator />
  </>
);

export default ContractClauseGeneratorWithStyles;