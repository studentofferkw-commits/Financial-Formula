// FIX: Implemented the number to text conversion logic.
import { Currency } from '../types';

// --- English Conversion Logic ---

const unitsEn = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teensEn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tensEn = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const scalesEn = ['', 'thousand', 'million', 'billion', 'trillion'];

function convertThreeDigitEn(num: number): string {
  let str = '';
  if (num >= 100) {
    str += unitsEn[Math.floor(num / 100)] + ' hundred';
    num %= 100;
    if (num > 0) str += ' ';
  }
  if (num >= 20) {
    str += tensEn[Math.floor(num / 10)];
    num %= 10;
    if (num > 0) str += '-' + unitsEn[num];
  } else if (num >= 10) {
    str += teensEn[num - 10];
  } else if (num > 0) {
    str += unitsEn[num];
  }
  return str;
}

function toWordsEn(num: number): string {
  if (num === 0) return 'zero';
  const words = [];
  let scaleIndex = 0;
  while (num > 0) {
    if (num % 1000 !== 0) {
      const chunkWords = convertThreeDigitEn(num % 1000);
      words.unshift(chunkWords + (scaleIndex > 0 ? ' ' + scalesEn[scaleIndex] : ''));
    }
    num = Math.floor(num / 1000);
    scaleIndex++;
  }
  return words.join(' ');
}


// --- Arabic Conversion Logic ---

const arOnes = ['', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة', 'عشرة'];
const arFeminineOnes = ['', 'واحدة', 'اثنتان', 'ثلاث', 'أربع', 'خمس', 'ست', 'سبع', 'ثمان', 'تسع', 'عشر'];
const arTens = ['', 'عشرة', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'];
const arHundreds = ['', 'مائة', 'مئتان', 'ثلاثمائة', 'أربعمائة', 'خمسمائة', 'ستمائة', 'سبعمائة', 'ثمانمائة', 'تسعمائة'];

// Converts a number from 1 to 999 into Arabic words
// Assumes the counted noun is masculine (like riyal, dinar, dollar)
function convertArabicChunk(num: number): string {
    if (num === 0) return '';
    const words = [];

    const hundreds = Math.floor(num / 100);
    if (hundreds > 0) {
        words.push(arHundreds[hundreds]);
    }

    const tensAndOnes = num % 100;
    if (tensAndOnes > 0) {
        if (hundreds > 0) words.push('و');

        if (tensAndOnes < 11) {
            // For masculine noun: 1, 2 are masculine. 3-10 are feminine.
            words.push(tensAndOnes > 2 ? arFeminineOnes[tensAndOnes] : arOnes[tensAndOnes]);
        } else if (tensAndOnes < 20) {
            if (tensAndOnes === 11) words.push('أحد عشر');
            else if (tensAndOnes === 12) words.push('اثنا عشر');
            else words.push(arFeminineOnes[tensAndOnes % 10] + ' عشر');
        } else {
            const unit = tensAndOnes % 10;
            const ten = Math.floor(tensAndOnes / 10);
            if (unit > 0) {
                // Same logic as < 11 for units part of a compound number
                words.push(unit > 2 ? arFeminineOnes[unit] : arOnes[unit]);
                words.push('و');
            }
            words.push(arTens[ten]);
        }
    }
    return words.join(' ');
};

function toWordsArWithCurrency(num: number, currency: Currency, isFraction: boolean): string {
    if (num === 0) return '';

    const names = isFraction ? 
        { singular: currency.fractionSingularAr, dual: currency.fractionDualAr, plural: currency.fractionPluralAr } :
        { singular: currency.singularAr, dual: currency.dualAr, plural: currency.pluralAr };

    const scales = [
        { s: '', p: '', d: '' }, // for units chunk
        { s: 'ألف', p: 'آلاف', d: 'ألفان' },
        { s: 'مليون', p: 'ملايين', d: 'مليونان' },
        { s: 'مليار', p: 'مليارات', d: 'ملياران' },
    ];

    const words = [];
    let tempNum = num;
    let scaleIndex = 0;

    while (tempNum > 0) {
        const chunk = tempNum % 1000;
        if (chunk > 0) {
            const currentNames = scaleIndex === 0 ? names : { singular: scales[scaleIndex].s, dual: scales[scaleIndex].d, plural: scales[scaleIndex].p };
            
            let chunkWords;
            if (chunk === 1) {
                chunkWords = currentNames.singular;
            } else if (chunk === 2) {
                chunkWords = currentNames.dual;
            } else {
                chunkWords = convertArabicChunk(chunk) + ' ' + (chunk >= 3 && chunk <= 10 ? currentNames.plural : currentNames.singular);
            }
            words.unshift(chunkWords);
        }
        tempNum = Math.floor(tempNum / 1000);
        scaleIndex++;
    }
    return words.join(' و');
}


// --- Main Exported Function ---

export function numberToText(numStr: string, currency: Currency, lang: 'ar' | 'en'): string {
    if (!numStr || isNaN(parseFloat(numStr)) || parseFloat(numStr) < 0) {
        return '';
    }

    // Cap at a reasonable number to avoid issues with floating point and massive numbers
    const numberValue = parseFloat(numStr);
    if (numberValue >= 1_000_000_000_000_000) { // Quadrillion
        return lang === 'ar' ? 'المبلغ كبير جدًا' : 'Amount is too large';
    }
    
    const [integerPartStr, fractionalPartStr] = numStr.split('.');
    const integerPart = parseInt(integerPartStr, 10) || 0;
    
    const decimalPlaces = currency.decimals;
    let fractionalPart = 0;
    if (fractionalPartStr && decimalPlaces > 0) {
        const paddedFractional = (fractionalPartStr || '').padEnd(decimalPlaces, '0').slice(0, decimalPlaces);
        fractionalPart = parseInt(paddedFractional, 10) || 0;
    }

    if (integerPart === 0 && fractionalPart === 0) {
        return lang === 'ar' ? `صفر ${currency.pluralAr}` : `Zero ${currency.plural}`;
    }
    
    if (lang === 'en') {
        const result = [];
        if (integerPart > 0) {
            const integerText = toWordsEn(integerPart);
            const currencyName = integerPart === 1 ? currency.singular : currency.plural;
            result.push(`${integerText} ${currencyName}`);
        }

        if (fractionalPart > 0) {
            const fractionalText = toWordsEn(fractionalPart);
            const fractionalName = fractionalPart === 1 ? currency.fraction : currency.fractionPlural;
            result.push(`${fractionalText} ${fractionalName}`);
        }
        
        let finalEnText = result.join(' and ');
        if (finalEnText) {
            finalEnText += ' only.';
        }
        return finalEnText.charAt(0).toUpperCase() + finalEnText.slice(1);
    }
    
    if (lang === 'ar') {
        const result = [];
        if (integerPart > 0) {
            result.push(toWordsArWithCurrency(integerPart, currency, false));
        }

        if (fractionalPart > 0) {
            result.push(toWordsArWithCurrency(fractionalPart, currency, true));
        }
        
        const prefix = "فقط ";
        const suffix = " لا غير.";
        const finalArText = result.join(' و');
        return prefix + finalArText + suffix;
    }

    return '';
}