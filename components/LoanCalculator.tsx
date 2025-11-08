import React, { useState, useMemo } from 'react';
import { useTranslation } from '../hooks/useTranslation';

interface CalculationResult {
  monthlyPayment: number;
  totalPayment: number;
  totalInterest: number;
  principal: number;
  schedule: AmortizationData[];
}

interface AmortizationData {
  month: number;
  interest: number;
  principal: number;
  remainingBalance: number;
}

const LoanCalculator: React.FC = () => {
  const { t } = useTranslation();
  const [amount, setAmount] = useState('100000');
  const [rate, setRate] = useState('1');
  const [term, setTerm] = useState('3');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [showSchedule, setShowSchedule] = useState(false);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const principal = parseFloat(amount);
    const annualInterestRate = parseFloat(rate);
    const years = parseInt(term);

    if (isNaN(principal) || isNaN(annualInterestRate) || isNaN(years) || principal <= 0 || annualInterestRate < 0 || years <= 0) {
      setResult(null);
      return;
    }

    // Handle 0% interest rate case
    if (annualInterestRate === 0) {
        const monthlyPayment = principal / (years * 12);
        const totalPayment = principal;
        const totalInterest = 0;
        
        const schedule: AmortizationData[] = [];
        let remainingBalance = principal;
        for (let i = 1; i <= years * 12; i++) {
            remainingBalance -= monthlyPayment;
            schedule.push({
                month: i,
                interest: 0,
                principal: monthlyPayment,
                remainingBalance: Math.abs(remainingBalance) < 0.01 ? 0 : remainingBalance,
            });
        }
        setResult({ monthlyPayment, totalPayment, totalInterest, principal, schedule });
        return;
    }


    const monthlyInterestRate = annualInterestRate / 100 / 12;
    const numberOfPayments = years * 12;

    const monthlyPayment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
    
    if (!isFinite(monthlyPayment)) {
        setResult(null);
        return;
    }

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - principal;

    const schedule: AmortizationData[] = [];
    let remainingBalance = principal;
    for (let i = 1; i <= numberOfPayments; i++) {
        const interestForMonth = remainingBalance * monthlyInterestRate;
        const principalForMonth = monthlyPayment - interestForMonth;
        remainingBalance -= principalForMonth;
        schedule.push({
            month: i,
            interest: interestForMonth,
            principal: principalForMonth,
            remainingBalance: Math.abs(remainingBalance) < 0.01 ? 0 : remainingBalance, // handle floating point inaccuracies
        });
    }

    setResult({ monthlyPayment, totalPayment, totalInterest, principal, schedule });
  };
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat(undefined, {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(value);
  };
  
  const handleNumericInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setter(value);
    }
  };

  const pieChartData = useMemo(() => {
    if (!result) return null;
    const { principal, totalInterest } = result;
    const total = principal + totalInterest;
    if (total === 0) {
       return {
         principalPercent: 100,
         interestPercent: 0,
       };
    }
    const principalPercent = (principal / total) * 100;
    const interestPercent = 100 - principalPercent;

    return {
      principalPercent,
      interestPercent,
    };
  }, [result]);

  return (
    <div className="bg-white dark:bg-slate-800/50 p-6 sm:p-8 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 w-full max-w-4xl mx-auto">
      <form onSubmit={handleCalculate} className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end mb-8">
        <div>
          <label htmlFor="loan-amount" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('loanCalculator.loanAmount')}</label>
          <input id="loan-amount" type="text" inputMode="decimal" value={amount} onChange={handleNumericInputChange(setAmount)} className="w-full input-style" required />
        </div>
        <div>
          <label htmlFor="interest-rate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('loanCalculator.interestRate')}</label>
          <input id="interest-rate" type="text" inputMode="decimal" value={rate} onChange={handleNumericInputChange(setRate)} className="w-full input-style" required />
        </div>
        <div>
          <label htmlFor="loan-term" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{t('loanCalculator.loanTerm')}</label>
          <input id="loan-term" type="number" value={term} onChange={e => setTerm(e.target.value.replace(/[^0-9]/g, ''))} className="w-full input-style" required />
        </div>
        <button type="submit" className="w-full bg-teal-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">{t('loanCalculator.calculate')}</button>
      </form>

      {result && (
        <div className="space-y-8">
          <div className="bg-gray-50 dark:bg-slate-900/50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-center mb-6">{t('loanCalculator.results')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <ResultRow label={t('loanCalculator.monthlyPayment')} value={formatCurrency(result.monthlyPayment)} isLarge />
                <ResultRow label={t('loanCalculator.principal')} value={formatCurrency(result.principal)} />
                <ResultRow label={t('loanCalculator.totalInterest')} value={formatCurrency(result.totalInterest)} />
                <ResultRow label={t('loanCalculator.totalPayment')} value={formatCurrency(result.totalPayment)} />
              </div>
              <div className="flex flex-col items-center">
                {pieChartData && (
                  <div className="relative w-40 h-40">
                    <svg viewBox="0 0 36 36" className="transform -rotate-90">
                      <circle cx="18" cy="18" r="15.915" className="stroke-current text-teal-200 dark:text-teal-800" strokeWidth="3.8" fill="transparent" />
                      <circle cx="18" cy="18" r="15.915" className="stroke-current text-teal-500" strokeWidth="3.8" fill="transparent"
                        strokeDasharray={`${pieChartData.principalPercent}, 100`} />
                    </svg>
                     <div className="absolute inset-0 flex items-center justify-center text-center text-xs font-bold">
                       {pieChartData.principalPercent.toFixed(1)}%<br/>{t('loanCalculator.principal')}
                     </div>
                  </div>
                )}
                <div className="flex gap-4 mt-4 text-xs">
                    <div className="flex items-center gap-1"><span className="w-3 h-3 bg-teal-500 rounded-full"></span>{t('loanCalculator.principal')}</div>
                    <div className="flex items-center gap-1"><span className="w-3 h-3 bg-teal-200 dark:bg-teal-800 rounded-full"></span>{t('loanCalculator.interest')}</div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="text-center">
              <button onClick={() => setShowSchedule(!showSchedule)} className="text-teal-600 dark:text-teal-400 font-semibold hover:underline" aria-expanded={showSchedule} aria-controls="amortization-table">
                {showSchedule ? t('loanCalculator.hideSchedule') : t('loanCalculator.showSchedule')}
              </button>
            </div>
            {showSchedule && (
              <div id="amortization-table" className="mt-4 max-h-96 overflow-auto rounded-lg dark:bg-slate-800">
                <table className="w-full text-sm text-left rtl:text-right">
                  <thead className="text-xs uppercase sticky top-0 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-slate-200">
                    <tr>
                      <th scope="col" className="px-6 py-3 font-medium">{t('loanCalculator.month')}</th>
                      <th scope="col" className="px-6 py-3 font-medium">{t('loanCalculator.payment')}</th>
                      <th scope="col" className="px-6 py-3 font-medium">{t('loanCalculator.principal')}</th>
                      <th scope="col" className="px-6 py-3 font-medium">{t('loanCalculator.interest')}</th>
                      <th scope="col" className="px-6 py-3 font-medium">{t('loanCalculator.remainingBalance')}</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-transparent text-gray-800 dark:text-slate-300">
                    {result.schedule.map(row => (
                      <tr key={row.month} className="border-b dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-700/50">
                        <td className="px-6 py-2">{row.month}</td>
                        <td className="px-6 py-2">{formatCurrency(result.monthlyPayment)}</td>
                        <td className="px-6 py-2">{formatCurrency(row.principal)}</td>
                        <td className="px-6 py-2">{formatCurrency(row.interest)}</td>
                        <td className="px-6 py-2">{formatCurrency(row.remainingBalance)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      )}
      <InputStyle />
    </div>
  );
};

const ResultRow: React.FC<{label: string; value: string; isLarge?: boolean}> = ({ label, value, isLarge }) => (
  <div className={`flex justify-between items-baseline ${isLarge ? 'text-xl font-bold' : 'text-base'}`}>
    <span className="text-gray-600 dark:text-gray-400">{label}:</span>
    <span className="text-gray-800 dark:text-white">{value}</span>
  </div>
);

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

    /* Custom Scrollbar for Amortization Table */
    #amortization-table::-webkit-scrollbar {
      width: 10px;
    }
    #amortization-table::-webkit-scrollbar-track {
      background-color: transparent;
    }
    .dark #amortization-table::-webkit-scrollbar-track {
      background-color: #1e293b; /* slate-800 */
    }
    #amortization-table::-webkit-scrollbar-thumb {
      background-color: #e2e8f0; /* slate-200 */
      border-radius: 5px;
    }
    .dark #amortization-table::-webkit-scrollbar-thumb {
      background-color: #475569; /* slate-600 */
      border-radius: 5px;
    }
    #amortization-table::-webkit-scrollbar-thumb:hover {
      background-color: #cbd5e1; /* slate-300 */
    }
    .dark #amortization-table::-webkit-scrollbar-thumb:hover {
      background-color: #64748b; /* slate-500 */
    }
  `}</style>
);

export default LoanCalculator;