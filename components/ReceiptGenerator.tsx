import React, { useState, useMemo, useRef } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { CURRENCIES } from '../constants';
import { numberToText } from '../services/numberToTextService';
import SearchableSelect from './SearchableSelect';
import ReceiptTemplate from './ReceiptTemplate';

const RadioOption: React.FC<{ name: string; value: string; label: string; checked: boolean; onChange: (value: string) => void; }> = ({ name, value, label, checked, onChange }) => (
    <label className="flex items-center space-x-2 space-x-reverse cursor-pointer p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700/50">
        <input type="radio" name={name} value={value} checked={checked} onChange={(e) => onChange(e.target.value)} className="form-radio h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 dark:border-slate-600 dark:bg-slate-700 dark:checked:bg-teal-600" />
        <span className="text-sm">{label}</span>
    </label>
);

const ReceiptGenerator: React.FC = () => {
  const { t, language } = useTranslation();
  const receiptTemplateRef = useRef<HTMLDivElement>(null);

  const [receiptType, setReceiptType] = useState<'receipt' | 'payment'>('receipt');
  const [recipientName, setRecipientName] = useState('');
  const [logo, setLogo] = useState<string | null>(null);
  const [receiptNo, setReceiptNo] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [payerName, setPayerName] = useState('');
  const [amount, setAmount] = useState('');
  const [purpose, setPurpose] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'cash' | 'check' | 'bankTransfer' | 'creditCard'>('cash');
  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState<string>(CURRENCIES.find(c => c.code === 'SAR')?.code || CURRENCIES[0].code);

  const selectedCurrency = useMemo(() => CURRENCIES.find(c => c.code === selectedCurrencyCode) || CURRENCIES[0], [selectedCurrencyCode]);

  const currencyOptions = useMemo(() => CURRENCIES.map(c => ({
    value: c.code,
    label: language === 'ar' ? `${c.nameAr} (${c.code})` : `${c.name} (${c.code})`
  })), [language]);

  const amountInWords = useMemo(() => {
    const numericAmount = parseFloat(amount);
    if (numericAmount > 0) {
      return numberToText(numericAmount.toFixed(selectedCurrency.decimals), selectedCurrency, language);
    }
    return '';
  }, [amount, selectedCurrency, language]);
  
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onloadend = () => {
            setLogo(reader.result as string);
        };
        reader.readAsDataURL(file);
    } else {
        setLogo(null);
    }
    e.target.value = '';
  };

  const handleNumericInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value)) {
      setter(value);
    }
  };
  
  const handleDownloadPdf = async () => {
    const input = receiptTemplateRef.current;
    if (!input) return;

    const originalTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    document.documentElement.classList.remove('dark');
    
    await new Promise(resolve => setTimeout(resolve, 100));

    const { jsPDF } = (window as any).jspdf;
    const html2canvas = (window as any).html2canvas;

    html2canvas(input, { scale: 2, useCORS: true }).then((canvas: HTMLCanvasElement) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({ orientation: 'landscape', unit: 'pt', format: 'a5' });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      
      pdf.addImage(imgData, 'PNG', 20, 20, pdfWidth - 40, pdfHeight - 40);
      pdf.save(`receipt-${receiptNo || 'download'}.pdf`);

      if (originalTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    });
  };

  const receiptData = {
    receiptType, recipientName, logo, receiptNo, date, payerName, amount,
    purpose, paymentMethod, selectedCurrency, amountInWords
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Form Section */}
      <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">{t('receiptGenerator.receiptType')}</label>
          <div className="flex gap-4 p-2 bg-gray-100 dark:bg-slate-900/50 rounded-lg">
            <RadioOption name="receiptType" value="receipt" label={t('receiptGenerator.receiptVoucher')} checked={receiptType === 'receipt'} onChange={setReceiptType as (val: string) => void} />
            <RadioOption name="receiptType" value="payment" label={t('receiptGenerator.paymentVoucher')} checked={receiptType === 'payment'} onChange={setReceiptType as (val: string) => void} />
          </div>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">{t('receiptGenerator.recipientInfo')}</label>
            <input type="text" placeholder={t('receiptGenerator.yourName')} value={recipientName} onChange={e => setRecipientName(e.target.value)} className="w-full input-style" />
             <div className="mt-2">
              {!logo ? (
                <label className="text-sm text-teal-600 dark:text-teal-400 font-semibold cursor-pointer hover:text-teal-700 dark:hover:text-teal-300">
                  + {t('receiptGenerator.uploadLogo')}
                  <input type="file" accept="image/*" className="hidden" onChange={handleLogoChange} />
                </label>
              ) : (
                <div className="flex items-center gap-2">
                  <img src={logo} alt="Recipient Logo" className="h-12 border rounded p-1 bg-white" />
                  <button onClick={() => setLogo(null)} className="text-xs text-red-500 hover:text-red-700">{t('receiptGenerator.removeLogo')}</button>
                </div>
              )}
            </div>
          </div>
           <div>
            <label className="block text-sm font-medium mb-1">{t('receiptGenerator.payerInfo')}</label>
            <input 
              type="text" 
              placeholder={receiptType === 'receipt' ? t('receiptGenerator.payerName') : t('receiptGenerator.recipientNameForForm')} 
              value={payerName} onChange={e => setPayerName(e.target.value)} 
              className="w-full input-style" 
            />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">{t('receiptGenerator.receiptNo')}</label>
            <input type="text" placeholder="001" value={receiptNo} onChange={e => setReceiptNo(e.target.value)} className="w-full input-style" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t('receiptGenerator.date')}</label>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full input-style" style={{ colorScheme: 'dark' }} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div>
            <label className="block text-sm font-medium mb-1">{t('receiptGenerator.amount')}</label>
            <input type="text" inputMode="decimal" placeholder="100.00" value={amount} onChange={handleNumericInputChange(setAmount)} className="w-full input-style" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t('converter.selectCurrency')}</label>
            <SearchableSelect options={currencyOptions} value={selectedCurrencyCode} onChange={setSelectedCurrencyCode} placeholder={t('converter.selectCurrency')} />
          </div>
        </div>
        
         <div>
            <label className="block text-sm font-medium mb-1">{t('receiptGenerator.purposeOfPayment')}</label>
            <input type="text" value={purpose} onChange={e => setPurpose(e.target.value)} className="w-full input-style" />
        </div>
        
         <div>
            <label className="block text-sm font-medium mb-1">{t('receiptGenerator.paymentMethod')}</label>
            <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value as any)} className="w-full input-style">
              <option value="cash">{t('receiptGenerator.cash')}</option>
              <option value="check">{t('receiptGenerator.check')}</option>
              <option value="bankTransfer">{t('receiptGenerator.bankTransfer')}</option>
              <option value="creditCard">{t('receiptGenerator.creditCard')}</option>
            </select>
        </div>

        <button onClick={handleDownloadPdf} className="w-full bg-teal-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors">
          {t('receiptGenerator.downloadPdf')}
        </button>
      </div>

      {/* Preview Section */}
      <div className="bg-white dark:bg-slate-800 p-2 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700">
        <div className="overflow-auto max-h-[500px]">
           <ReceiptTemplate ref={receiptTemplateRef} {...receiptData} />
        </div>
      </div>
       <InputStyle />
    </div>
  );
};

// Helper for input styles
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
     select.input-style {
      -webkit-appearance: none; -moz-appearance: none; appearance: none;
      background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="%236b7280" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 8 4 4 4-4"/></svg>');
      background-repeat: no-repeat; background-position: right 0.5rem center;
      background-size: 1.25em 1.25em; padding-right: 2.5rem;
    }
    .dark select.input-style {
       background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="%2394a3b8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 8 4 4 4-4"/></svg>');
    }
  `}</style>
);


export default ReceiptGenerator;