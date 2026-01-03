import React, { useState, useMemo, useRef, useEffect } from 'react';
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
  // Date logic
  const [date, setDate] = useState(''); // Empty initial state
  const [displayDate, setDisplayDate] = useState(''); // Empty initial display state
  const hiddenDateInputRef = useRef<HTMLInputElement>(null);

  // Sync displayDate if date changes externally
  useEffect(() => {
    if (date) {
      const [y, m, d] = date.split('-');
      setDisplayDate(`${d}/${m}/${y}`);
    } else {
      setDisplayDate('');
    }
  }, [date]);

  // Update date from the hidden native picker
  const handleNativeDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value; // YYYY-MM-DD
    if (val) {
      setDate(val);
    }
  };

  const openDatePicker = () => {
    if (hiddenDateInputRef.current) {
      hiddenDateInputRef.current.showPicker ? hiddenDateInputRef.current.showPicker() : hiddenDateInputRef.current.click();
    }
  };
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
            <div className="relative">
              <input
                type="text"
                inputMode="numeric"
                placeholder={language === 'ar' ? 'يوم/شهر/سنة' : 'dd/mm/yyyy'}
                value={displayDate}
                onChange={(e) => {
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

                  // If valid length, try to parse and set date
                  if (value.length === 10) {
                    const parts = value.split('/');
                    const d = parseInt(parts[0], 10);
                    const m = parseInt(parts[1], 10);
                    const y = parseInt(parts[2], 10);

                    // Basic validation
                    if (d > 0 && d <= 31 && m > 0 && m <= 12 && y > 1900) {
                      const isoDate = `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
                      setDate(isoDate);
                    }
                  } else if (value === '') {
                    setDate('');
                  }
                }}
                className={`w-full input-style ${language === 'ar' ? 'text-right' : 'text-left'} bg-white text-gray-900 dark:bg-white dark:text-gray-900 pr-10 rtl:pr-3 rtl:pl-10`}
                dir="ltr"
              />
              <button
                type="button"
                onClick={openDatePicker}
                className={`absolute top-1/2 -translate-y-1/2 text-gray-400 hover:text-teal-600 ${language === 'ar' ? 'left-3' : 'right-3'}`}
                aria-label={t('dateConverter.selectDate')}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>
              <input
                type="date"
                ref={hiddenDateInputRef}
                onChange={handleNativeDateChange}
                className="absolute opacity-0 pointer-events-none top-0 left-0 w-full h-full"
                style={{ visibility: 'hidden', position: 'absolute' }}
                tabIndex={-1}
                lang="ar"
              />
            </div>
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