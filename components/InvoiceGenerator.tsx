
import React, { useState, useMemo, useRef } from 'react';
import { useTranslation } from '../hooks/useTranslation.ts';
import { CURRENCIES } from '../constants.ts';
import { numberToText } from '../services/numberToTextService.ts';
import SearchableSelect from './SearchableSelect.tsx';
import InvoiceTemplate from './InvoiceTemplate.tsx';

interface LineItem {
  id: number;
  description: string;
  quantity: string;
  rate: string;
}

const InvoiceGenerator: React.FC = () => {
  const { t, language } = useTranslation();
  const invoiceTemplateRef = useRef<HTMLDivElement>(null);

  const [fromName, setFromName] = useState('');
  const [fromAddress, setFromAddress] = useState('');
  const [toName, setToName] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [invoiceNumber, setInvoiceNumber] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [notes, setNotes] = useState('');
  const [selectedCurrencyCode, setSelectedCurrencyCode] = useState<string>(CURRENCIES.find(c => c.code === 'SAR')?.code || CURRENCIES[0].code);

  const [fromLogo, setFromLogo] = useState<string | null>(null);
  const [toLogo, setToLogo] = useState<string | null>(null);

  const [lineItems, setLineItems] = useState<LineItem[]>([
    { id: Date.now(), description: '', quantity: '1', rate: '0' },
  ]);

  const selectedCurrency = useMemo(() => CURRENCIES.find(c => c.code === selectedCurrencyCode) || CURRENCIES[0], [selectedCurrencyCode]);

  const currencyOptions = useMemo(() => CURRENCIES.map(c => ({
    value: c.code,
    label: language === 'ar' ? `${c.nameAr} (${c.code})` : `${c.name} (${c.code})`
  })), [language]);
  
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>, setLogo: React.Dispatch<React.SetStateAction<string | null>>) => {
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
    // Reset file input value to allow re-uploading the same file
    e.target.value = '';
  };

  const handleLineItemChange = (id: number, field: keyof Omit<LineItem, 'id'>, value: string) => {
    setLineItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const addLineItem = () => {
    setLineItems(prevItems => [
      ...prevItems,
      { id: Date.now(), description: '', quantity: '1', rate: '0' },
    ]);
  };

  const removeLineItem = (id: number) => {
    setLineItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const subtotal = useMemo(() => {
    return lineItems.reduce((total, item) => {
      const quantity = parseFloat(item.quantity) || 0;
      const rate = parseFloat(item.rate) || 0;
      return total + quantity * rate;
    }, 0);
  }, [lineItems]);
  
  const total = subtotal; // For now, total is same as subtotal. Can add tax later.

  const totalInWords = useMemo(() => {
    if (total > 0) {
      return numberToText(total.toFixed(selectedCurrency.decimals), selectedCurrency, language);
    }
    return '';
  }, [total, selectedCurrency, language]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat(language === 'ar' ? 'ar-SA' : 'en-US', {
      style: 'decimal',
      minimumFractionDigits: selectedCurrency.decimals,
      maximumFractionDigits: selectedCurrency.decimals,
    }).format(amount);
  };

  const handleDownloadPdf = async () => {
    const input = invoiceTemplateRef.current;
    if (!input) return;

    // Temporarily set theme to light for PDF generation to ensure consistent look
    const originalTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    document.documentElement.classList.remove('dark');
    
    // Allow rtl styles to be computed before rendering canvas
    await new Promise(resolve => setTimeout(resolve, 100));

    const { jsPDF } = (window as any).jspdf;
    const html2canvas = (window as any).html2canvas;

    html2canvas(input, {
      scale: 2,
      useCORS: true,
      onclone: (document: Document) => {
        // Force LTR on the cloned document for html2canvas rendering to fix RTL alignment issues in PDF
        if (language === 'ar') {
           document.documentElement.dir = 'ltr';
           // Find the specific element and force its direction
           const element = document.getElementById('invoice-template');
           if(element) {
              element.dir = 'rtl';
           }
        }
      }
    }).then((canvas: HTMLCanvasElement) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'pt',
        format: 'a4',
      });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const canvasWidth = canvas.width;
      const canvasHeight = canvas.height;
      const ratio = canvasWidth / pdfWidth;
      const imgHeight = canvasHeight / ratio;
      
      let height = imgHeight;
      if (height > pdfHeight - 40) { // check if it exceeds page height with some margin
        height = pdfHeight - 40;
      }
      
      pdf.addImage(imgData, 'PNG', 20, 20, pdfWidth - 40, height);
      pdf.save(`invoice-${invoiceNumber || 'download'}.pdf`);

      // Restore original theme
      if (originalTheme === 'dark') {
        document.documentElement.classList.add('dark');
      }
    });
  };

  const invoiceData = {
    fromName, fromAddress, toName, toAddress, invoiceNumber, date, notes,
    fromLogo, toLogo,
    lineItems, total, subtotal, selectedCurrency, totalInWords, formatCurrency
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Form Section */}
      <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">{t('invoiceGenerator.from')}</label>
            <input type="text" placeholder={t('invoiceGenerator.yourName')} value={fromName} onChange={e => setFromName(e.target.value)} className="w-full input-style" />
            <textarea placeholder={t('invoiceGenerator.yourAddress')} value={fromAddress} onChange={e => setFromAddress(e.target.value)} rows={2} className="w-full input-style mt-2"></textarea>
            <div className="mt-2">
              {!fromLogo ? (
                <label className="text-sm text-teal-600 dark:text-teal-400 font-semibold cursor-pointer hover:text-teal-700 dark:hover:text-teal-300">
                  + {t('invoiceGenerator.uploadLogo')}
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => handleLogoChange(e, setFromLogo)} />
                </label>
              ) : (
                <div className="flex items-center gap-2">
                  <img src={fromLogo} alt="Sender Logo" className="h-12 border rounded p-1 bg-white" />
                  <button onClick={() => setFromLogo(null)} className="text-xs text-red-500 hover:text-red-700">{t('invoiceGenerator.removeLogo')}</button>
                </div>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t('invoiceGenerator.billTo')}</label>
            <input type="text" placeholder={t('invoiceGenerator.clientName')} value={toName} onChange={e => setToName(e.target.value)} className="w-full input-style" />
            <textarea placeholder={t('invoiceGenerator.clientAddress')} value={toAddress} onChange={e => setToAddress(e.target.value)} rows={2} className="w-full input-style mt-2"></textarea>
            <div className="mt-2">
              {!toLogo ? (
                <label className="text-sm text-teal-600 dark:text-teal-400 font-semibold cursor-pointer hover:text-teal-700 dark:hover:text-teal-300">
                  + {t('invoiceGenerator.uploadLogo')}
                  <input type="file" accept="image/*" className="hidden" onChange={(e) => handleLogoChange(e, setToLogo)} />
                </label>
              ) : (
                <div className="flex items-center gap-2">
                  <img src={toLogo} alt="Client Logo" className="h-12 border rounded p-1 bg-white" />
                  <button onClick={() => setToLogo(null)} className="text-xs text-red-500 hover:text-red-700">{t('invoiceGenerator.removeLogo')}</button>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">{t('converter.selectCurrency')}</label>
            <SearchableSelect options={currencyOptions} value={selectedCurrencyCode} onChange={setSelectedCurrencyCode} placeholder={t('converter.selectCurrency')} />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t('invoiceGenerator.invoiceNumber')}</label>
            <input type="text" placeholder={t('invoiceGenerator.invoiceNumber')} value={invoiceNumber} onChange={e => setInvoiceNumber(e.target.value)} className="w-full input-style" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t('invoiceGenerator.date')}</label>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} className="w-full input-style" style={{ colorScheme: 'dark' }} />
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-2 border-b pb-1 dark:border-slate-600">{t('invoiceGenerator.item')}s</h3>
          {lineItems.map((item) => (
            <div key={item.id} className="grid grid-cols-12 gap-2 mb-2 items-center">
              <input type="text" placeholder={t('invoiceGenerator.item')} value={item.description} onChange={e => handleLineItemChange(item.id, 'description', e.target.value)} className="col-span-5 input-style" />
              <input type="number" placeholder={t('invoiceGenerator.quantity')} value={item.quantity} onChange={e => handleLineItemChange(item.id, 'quantity', e.target.value)} className="col-span-2 input-style" min="0" />
              <input type="number" placeholder={t('invoiceGenerator.rate')} value={item.rate} onChange={e => handleLineItemChange(item.id, 'rate', e.target.value)} className="col-span-3 input-style" min="0" />
              <button onClick={() => removeLineItem(item.id)} className="col-span-2 text-red-500 hover:text-red-700 disabled:opacity-50" disabled={lineItems.length === 1}>&times;</button>
            </div>
          ))}
          <button onClick={addLineItem} className="mt-2 text-sm text-teal-600 dark:text-teal-400 font-semibold hover:text-teal-700 dark:hover:text-teal-300">+ {t('invoiceGenerator.addItem')}</button>
        </div>
        
        <div>
           <label className="block text-sm font-medium mb-1">{t('invoiceGenerator.notes')}</label>
           <textarea placeholder={t('invoiceGenerator.notesPlaceholder')} value={notes} onChange={e => setNotes(e.target.value)} rows={2} className="w-full input-style"></textarea>
        </div>


        <button onClick={handleDownloadPdf} className="w-full bg-teal-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors">
          {t('invoiceGenerator.downloadPdf')}
        </button>
      </div>

      {/* Preview Section */}
      <div className="bg-white dark:bg-slate-800 p-2 rounded-xl shadow-lg border border-gray-200 dark:border-slate-700">
        <div className="overflow-auto h-[80vh]">
           <InvoiceTemplate ref={invoiceTemplateRef} {...invoiceData} />
        </div>
      </div>
    </div>
  );
};

// Helper for input styles
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
  `}</style>
);

// We need to inject the styles into the main component to avoid creating a new file
const InvoiceGeneratorWithStyles: React.FC = () => (
  <>
    <InputStyle />
    <InvoiceGenerator />
  </>
);

export default InvoiceGeneratorWithStyles;