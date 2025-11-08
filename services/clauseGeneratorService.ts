import { Currency } from '../types';
import { numberToText } from './numberToTextService';

interface ClauseOptions {
    amountStr: string;
    currency: Currency;
    lang: 'ar' | 'en';
    paymentType: 'oneTime' | 'installments';
    taxOption: 'inclusive' | 'exclusive';
    taxRateStr: string;
    payerName: string;
    payeeName: string;
    installmentsCount: string;
    downPaymentStr: string;
    frequency: 'monthly' | 'quarterly' | 'annually';
}

interface GeneratedClauses {
    standard: string;
    detailed: string;
    schedule: string;
}

const formatNumber = (num: number, currency: Currency, lang: 'ar' | 'en'): string => {
    return new Intl.NumberFormat(lang === 'ar' ? 'ar-SA' : 'en-US', {
        style: 'decimal',
        minimumFractionDigits: currency.decimals,
        maximumFractionDigits: currency.decimals,
    }).format(num);
};

export function generateContractClauses(options: ClauseOptions): GeneratedClauses {
    const { 
        amountStr, currency, lang, paymentType, taxOption, taxRateStr,
        payerName, payeeName, installmentsCount, downPaymentStr, frequency 
    } = options;

    const baseAmount = parseFloat(amountStr) || 0;
    const downPayment = parseFloat(downPaymentStr) || 0;

    if (baseAmount <= 0) {
        return { standard: '', detailed: '', schedule: '' };
    }
    
    // --- Calculations ---
    const taxRate = (parseFloat(taxRateStr) || 0) / 100;
    let totalAmount = baseAmount;
    let taxAmount = 0;
    let amountBeforeTax = baseAmount;

    if (taxOption === 'exclusive' && taxRate > 0) {
        taxAmount = baseAmount * taxRate;
        totalAmount = baseAmount + taxAmount;
    } else if (taxOption === 'inclusive' && taxRate > 0) {
        amountBeforeTax = baseAmount / (1 + taxRate);
        taxAmount = baseAmount - amountBeforeTax;
    }
    
    const totalAmountText = numberToText(totalAmount.toFixed(currency.decimals), currency, lang);
    if (!totalAmountText || totalAmountText.includes('المبلغ كبير جدًا') || totalAmountText.includes('Amount is too large')) {
        return { standard: totalAmountText, detailed: totalAmountText, schedule: '' };
    }

    const coreText = (text: string) => text.replace(/^فقط\s/i, '').replace(/\sلا غير\.$/i, '').replace(/ only\.$/i, '').trim();
    const totalAmountInWords = coreText(totalAmountText);
    const formattedTotalAmount = formatNumber(totalAmount, currency, lang);
    
    const Payer = payerName.trim() || (lang === 'ar' ? 'الطرف الأول' : 'the First Party');
    const Payee = payeeName.trim() || (lang === 'ar' ? 'الطرف الثاني' : 'the Second Party');

    let standard = '', detailed = '', schedule = '';

    // --- Clause Generation ---
    if (lang === 'en') {
        standard = `It is agreed that ${Payer} shall pay ${Payee} a total sum of ${currency.code} ${formattedTotalAmount} (${totalAmountInWords} only).`;

        let detailedParts = [`a total sum of ${currency.code} ${formattedTotalAmount} (${totalAmountInWords} only)`];
        
        if (taxOption === 'inclusive' && taxRate > 0) {
            detailedParts.push(`inclusive of VAT at ${taxRateStr}%`);
        } else if (taxOption === 'exclusive' && taxRate > 0) {
            detailedParts.push(`which consists of a base amount of ${currency.code} ${formatNumber(baseAmount, currency, lang)} plus VAT at ${taxRateStr}%`);
        }

        if (paymentType === 'installments') {
            const count = parseInt(installmentsCount) || 1;
            detailedParts.push(`payable in ${count} ${frequency} installments`);
            if (downPayment > 0) {
                detailedParts.push(`following a down payment of ${currency.code} ${formatNumber(downPayment, currency, lang)}`);
            }
        } else {
            detailedParts.push('payable as a single lump sum');
        }

        detailed = `It is agreed that ${Payer} shall pay ${Payee} ${detailedParts.join(', ')}.`;

    } else { // Arabic
        standard = `تم الاتفاق على أن يدفع ${Payer} إلى ${Payee} مبلغًا إجماليًا وقدره ${formattedTotalAmount} ${currency.nameAr} (فقط ${totalAmountInWords} لا غير).`;

        let detailedParts = [`مبلغًا إجماليًا وقدره ${formattedTotalAmount} ${currency.nameAr} (فقط ${totalAmountInWords} لا غير)`];
        
        if (taxOption === 'inclusive' && taxRate > 0) {
            detailedParts.push(`وهو مبلغ شامل لضريبة القيمة المضافة بنسبة ${taxRateStr}%`);
        } else if (taxOption === 'exclusive' && taxRate > 0) {
            detailedParts.push(`وذلك عن مبلغ أساسي قدره ${formatNumber(baseAmount, currency, lang)} ${currency.nameAr} مضافاً إليه ضريبة القيمة المضافة بنسبة ${taxRateStr}%`);
        }

        if (paymentType === 'installments') {
            const count = parseInt(installmentsCount) || 1;
            const freqText = frequency === 'monthly' ? 'شهرية' : (frequency === 'quarterly' ? 'ربع سنوية' : 'سنوية');
            if (downPayment > 0) {
                 detailedParts.push(`وذلك بعد سداد دفعة مقدمة قدرها ${formatNumber(downPayment, currency, lang)} ${currency.nameAr}، على أن يتم سداد المبلغ المتبقي على ${count} أقساط ${freqText}`);
            } else {
                 detailedParts.push(`على ${count} أقساط ${freqText}`);
            }
        } else {
            detailedParts.push('دفعة واحدة');
        }

        detailed = `تم الاتفاق على أن يدفع ${Payer} إلى ${Payee} ${detailedParts.join('، ')}.`;
    }

    // --- Schedule Generation ---
    if (paymentType === 'installments') {
        const count = parseInt(installmentsCount) || 1;
        const remainingAmount = totalAmount - downPayment;
        if (count > 0 && remainingAmount >= 0) {
            const installmentAmount = remainingAmount / count;
            let scheduleLines = [];
            if (lang === 'en') {
                if (downPayment > 0) {
                    scheduleLines.push(`- Down Payment: ${formatNumber(downPayment, currency, lang)} ${currency.code}`);
                }
                for (let i = 1; i <= count; i++) {
                    scheduleLines.push(`- Installment ${i}: ${formatNumber(installmentAmount, currency, lang)} ${currency.code}`);
                }
                scheduleLines.push(`\nTotal Amount: ${formatNumber(totalAmount, currency, lang)} ${currency.code}`);
            } else {
                if (downPayment > 0) {
                    scheduleLines.push(`- الدفعة المقدمة: ${formatNumber(downPayment, currency, lang)} ${currency.code}`);
                }
                for (let i = 1; i <= count; i++) {
                    scheduleLines.push(`- القسط رقم ${i}: ${formatNumber(installmentAmount, currency, lang)} ${currency.code}`);
                }
                scheduleLines.push(`\nالمبلغ الإجمالي: ${formatNumber(totalAmount, currency, lang)} ${currency.code}`);
            }
            schedule = scheduleLines.join('\n');
        }
    }


    return { standard, detailed, schedule };
}
