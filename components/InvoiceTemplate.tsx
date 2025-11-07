import React, { forwardRef } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Currency } from '../types';

interface LineItem {
  id: number;
  description: string;
  quantity: string;
  rate: string;
}

interface InvoiceTemplateProps {
  fromName: string;
  fromAddress: string;
  toName: string;
  toAddress: string;
  invoiceNumber: string;
  date: string;
  notes: string;
  fromLogo: string | null;
  toLogo: string | null;
  lineItems: LineItem[];
  total: number;
  selectedCurrency: Currency;
  totalInWords: string;
  formatCurrency: (amount: number) => string;
}

const InvoiceTemplate = forwardRef<HTMLDivElement, InvoiceTemplateProps>((props, ref) => {
  const { t, language } = useTranslation();
  const {
    fromName, fromAddress, toName, toAddress, invoiceNumber, date, notes,
    fromLogo, toLogo,
    lineItems, total, selectedCurrency, totalInWords, formatCurrency
  } = props;

  const isRtl = language === 'ar';

  return (
    <div ref={ref} id="invoice-template" className="p-8 bg-white text-gray-800" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold text-teal-600 uppercase mb-2">{t('invoiceGenerator.invoice')}</h1>
          <div className="text-sm text-gray-600">
            <div className="mb-1">
              <span className="font-bold">{t('invoiceGenerator.invoiceNumber')}: </span>
              <span>{invoiceNumber}</span>
            </div>
            <div>
              <span className="font-bold">{t('invoiceGenerator.date')}: </span>
              <span>{date}</span>
            </div>
          </div>
        </div>
        <div className={isRtl ? 'text-left' : 'text-right'}>
          {fromLogo && <img src={fromLogo} alt="From Logo" className="max-h-20 max-w-[180px] mb-2 inline-block rounded-lg" />}
          <h2 className="text-xl font-bold">{fromName || t('invoiceGenerator.yourName')}</h2>
          <p className="text-sm whitespace-pre-line">{fromAddress || t('invoiceGenerator.yourAddress')}</p>
        </div>
      </div>
      
      <div className="mb-8">
        <div>
          <h3 className="font-bold text-gray-600 mb-1">{t('invoiceGenerator.billTo')}</h3>
          {toLogo && <img src={toLogo} alt="To Logo" className="max-h-20 max-w-[180px] mb-2 rounded-lg" />}
          <p className="font-semibold">{toName || t('invoiceGenerator.clientName')}</p>
          <p className="text-sm whitespace-pre-line">{toAddress || t('invoiceGenerator.clientAddress')}</p>
        </div>
      </div>

      <table className="w-full mb-8">
        <thead>
          <tr className="bg-teal-50">
            <th className={`p-2 font-bold text-teal-800 ${isRtl ? 'text-right' : 'text-left'}`}>{t('invoiceGenerator.item')}</th>
            <th className="p-2 font-bold text-teal-800 text-center">{t('invoiceGenerator.quantity')}</th>
            <th className={`p-2 font-bold text-teal-800 ${isRtl ? 'text-left' : 'text-right'}`}>{t('invoiceGenerator.rate')}</th>
            <th className={`p-2 font-bold text-teal-800 ${isRtl ? 'text-left' : 'text-right'}`}>{t('invoiceGenerator.amount')}</th>
          </tr>
        </thead>
        <tbody>
          {lineItems.map(item => {
            const quantity = parseFloat(item.quantity) || 0;
            const rate = parseFloat(item.rate) || 0;
            const amount = quantity * rate;
            return (
              <tr key={item.id} className="border-b">
                <td className={`p-2 ${isRtl ? 'text-right' : 'text-left'}`}>{item.description}</td>
                <td className="p-2 text-center">{item.quantity}</td>
                <td className={`p-2 ${isRtl ? 'text-left' : 'text-right'}`}>{formatCurrency(rate)}</td>
                <td className={`p-2 ${isRtl ? 'text-left' : 'text-right'}`}>{formatCurrency(amount)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="space-y-2">
            {notes && (
                <div>
                    <h4 className="font-bold mb-1">{t('invoiceGenerator.notes')}</h4>
                    <p className="text-xs whitespace-pre-line">{notes}</p>
                </div>
            )}
            <div>
                <h4 className="font-bold mb-1">{t('invoiceGenerator.amountInWords')}</h4>
                <p className="text-xs">{totalInWords}</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className={`flex ${isRtl ? 'justify-start' : 'justify-end'}`}>
                <div>
                    <div className="flex justify-between items-baseline font-bold text-lg border-t pt-1 mt-1 gap-4">
                        <span>{t('invoiceGenerator.total')}:</span>
                        <span className={`whitespace-nowrap ${isRtl ? 'text-left' : 'text-right'}`}>{formatCurrency(total)} {isRtl ? selectedCurrency.nameAr : selectedCurrency.name}</span>
                    </div>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
});

export default InvoiceTemplate;