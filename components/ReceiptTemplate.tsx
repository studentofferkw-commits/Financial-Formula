import React, { forwardRef } from 'react';
import { useTranslation } from '../hooks/useTranslation';
import { Currency } from '../types';

interface ReceiptTemplateProps {
  receiptType: 'receipt' | 'payment';
  recipientName: string;
  logo: string | null;
  receiptNo: string;
  date: string;
  payerName: string;
  amount: string;
  purpose: string;
  paymentMethod: 'cash' | 'check' | 'bankTransfer' | 'creditCard';
  selectedCurrency: Currency;
  amountInWords: string;
}

const ReceiptTemplate = forwardRef<HTMLDivElement, ReceiptTemplateProps>((props, ref) => {
  const { t, language } = useTranslation();
  const {
    receiptType, recipientName, logo, receiptNo, date, payerName, amount,
    purpose, paymentMethod, selectedCurrency, amountInWords
  } = props;
  
  const isRtl = language === 'ar';
  const numericAmount = parseFloat(amount) || 0;
  
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat(language === 'ar' ? 'ar-SA' : 'en-US', {
      style: 'decimal',
      minimumFractionDigits: selectedCurrency.decimals,
      maximumFractionDigits: selectedCurrency.decimals,
    }).format(value);
  };

  const paymentMethodText = {
      cash: t('receiptGenerator.cash'),
      check: t('receiptGenerator.check'),
      bankTransfer: t('receiptGenerator.bankTransfer'),
      creditCard: t('receiptGenerator.creditCard')
  };

  const receiptTitle = receiptType === 'receipt' ? t('receiptGenerator.receiptVoucher') : t('receiptGenerator.paymentVoucher');
  const mainTextAction = receiptType === 'receipt' ? t('receiptGenerator.receivedFrom') : t('receiptGenerator.paidTo');

  return (
    <div ref={ref} id="receipt-template" className="p-8 bg-white text-gray-900 aspect-[1.414/1] w-full" dir={isRtl ? 'rtl' : 'ltr'}>
      <div className="border-2 border-gray-800 p-6 h-full flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-start pb-4 border-b border-gray-400">
          <div className="text-left rtl:text-right">
            <h1 className="text-3xl font-bold uppercase">{receiptTitle}</h1>
            <p className="text-sm">{t('receiptGenerator.receiptNo')}: {receiptNo}</p>
            <p className="text-sm">{t('receiptGenerator.date')}: {date}</p>
          </div>
          <div className="text-center">
            {logo && <img src={logo} alt="Logo" className="max-h-16 max-w-[160px] mb-2 inline-block rounded-lg" />}
            <h2 className="font-bold text-lg">{recipientName || t('receiptGenerator.yourName')}</h2>
          </div>
        </header>

        {/* Body */}
        <main className="flex-grow my-8 text-lg leading-relaxed">
          <div className="flex items-baseline gap-2 mb-4">
            <span>{mainTextAction}:</span>
            <span className="font-semibold border-b border-dotted border-gray-500 flex-grow">{payerName}</span>
          </div>
          <div className="flex items-baseline gap-2 mb-4">
            <span>{t('receiptGenerator.amountInWords')}:</span>
            <span className="font-semibold border-b border-dotted border-gray-500 flex-grow">{amountInWords}</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span>{t('receiptGenerator.paymentFor')}:</span>
            <span className="font-semibold border-b border-dotted border-gray-500 flex-grow">{purpose}</span>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="flex justify-between items-end mt-auto pt-4 border-t border-gray-400">
            <div className="text-center">
                 <div className="font-bold border border-gray-800 rounded-md py-2 px-4 text-xl">
                    <span className="me-2">{t('receiptGenerator.amount')}:</span>
                    <span>{formatCurrency(numericAmount)} {selectedCurrency.code}</span>
                 </div>
                 <p className="text-sm mt-1">{t('receiptGenerator.paymentMethod')}: {paymentMethodText[paymentMethod]}</p>
            </div>
            <div className="flex gap-8">
              {receiptType === 'receipt' ? (
                <div className="text-center">
                  <div className="w-48 border-b-2 border-dotted border-gray-600 mb-2"></div>
                  <p className="font-semibold">{t('receiptGenerator.signature')}</p>
                </div>
              ) : (
                <>
                  <div className="text-center">
                    <div className="w-48 border-b-2 border-dotted border-gray-600 mb-2"></div>
                    <p className="font-semibold">{t('receiptGenerator.signature')}</p>
                  </div>
                  <div className="text-center">
                    <div className="w-48 border-b-2 border-dotted border-gray-600 mb-2"></div>
                    <p className="font-semibold">{t('receiptGenerator.stamp')}</p>
                  </div>
                </>
              )}
            </div>
        </footer>
      </div>
    </div>
  );
});

export default ReceiptTemplate;