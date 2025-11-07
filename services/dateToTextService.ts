// --- English Year Conversion Logic ---
const unitsEn = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const teensEn = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const tensEn = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

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

function yearToWordsEn(num: number): string {
  if (num === 0) return 'zero';
  if (num < 1000) return toWordsEnSimple(num);

  const thousands = Math.floor(num / 1000);
  const remainder = num % 1000;
  
  let words = toWordsEnSimple(thousands) + ' thousand';
  if (remainder > 0) {
    words += ' ' + toWordsEnSimple(remainder);
  }
  return words;
}

function toWordsEnSimple(num: number): string {
  if (num === 0) return '';
  const words = [];
  if (num % 1000 !== 0) {
    words.unshift(convertThreeDigitEn(num % 1000));
  }
  return words.join(' ');
}


// --- Arabic Year Conversion Logic ---
const arOnes = ['', 'واحد', 'اثنان', 'ثلاثة', 'أربعة', 'خمسة', 'ستة', 'سبعة', 'ثمانية', 'تسعة', 'عشرة'];
const arTens = ['', 'عشرة', 'عشرون', 'ثلاثون', 'أربعون', 'خمسون', 'ستون', 'سبعون', 'ثمانون', 'تسعون'];
const arHundreds = ['', 'مائة', 'مئتان', 'ثلاثمائة', 'أربعمائة', 'خمسمائة', 'ستمائة', 'سبعمائة', 'ثمانمائة', 'تسعمائة'];

function convertArabicChunkForYear(num: number): string {
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
            words.push(arOnes[tensAndOnes]);
        } else if (tensAndOnes < 20) {
            if (tensAndOnes === 11) words.push('أحد عشر');
            else if (tensAndOnes === 12) words.push('اثنا عشر');
            else words.push(arOnes[tensAndOnes % 10] + ' عشر');
        } else {
            const unit = tensAndOnes % 10;
            const ten = Math.floor(tensAndOnes / 10);
            if (unit > 0) {
                words.push(arOnes[unit]);
                words.push('و');
            }
            words.push(arTens[ten]);
        }
    }
    return words.join(' ');
};

function yearToWordsAr(num: number): string {
    if (num === 0) return 'صفر';
    const words = [];
    const thousands = Math.floor(num / 1000);
    const remainder = num % 1000;
    if (thousands > 0) {
        if (thousands === 1) words.push('ألف');
        else if (thousands === 2) words.push('ألفين');
        else {
            words.push(convertArabicChunkForYear(thousands) + ' ألف');
        }
    }
    if (remainder > 0) {
        if (thousands > 0) words.push('و');
        words.push(convertArabicChunkForYear(remainder));
    }
    return words.join(' ');
}


// --- Main Exported Function ---
export function dateToText(dateStr: string, lang: 'ar' | 'en'): string {
    if (!dateStr) return '';

    try {
        const [year, month, day] = dateStr.split('-').map(Number);
        const date = new Date(year, month - 1, day);
        
        if (isNaN(date.getTime())) return '';

        if (lang === 'en') {
            const dayWords = [
                '', 'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth',
                'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteenth', 'twentieth',
                'twenty-first', 'twenty-second', 'twenty-third', 'twenty-fourth', 'twenty-fifth', 'twenty-sixth', 'twenty-seventh', 'twenty-eighth', 'twenty-ninth', 'thirtieth',
                'thirty-first'
            ];
            const monthWords = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            
            const dayText = `The ${dayWords[day]}`;
            const monthText = `of ${monthWords[month - 1]}`;
            const yearText = `of the year ${yearToWordsEn(year)}`;

            const result = `${dayText} day ${monthText} ${yearText}.`;
            return result.charAt(0).toUpperCase() + result.slice(1);
        }

        if (lang === 'ar') {
            const dayWords = [
                '', 'الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس', 'السابع', 'الثامن', 'التاسع', 'العاشر',
                'الحادي عشر', 'الثاني عشر', 'الثالث عشر', 'الرابع عشر', 'الخامس عشر', 'السادس عشر', 'السابع عشر', 'الثامن عشر', 'التاسع عشر', 'العشرون',
                'الحادي والعشرون', 'الثاني والعشرون', 'الثالث والعشرون', 'الرابع والعشرون', 'الخامس والعشرون', 'السادس والعشرون', 'السابع والعشرون', 'الثامن والعشرون', 'التاسع والعشرون', 'الثلاثون',
                'الحادي والثلاثون'
            ];
            const monthWords = ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر', 'نوفمبر', 'ديسمبر'];

            const dayText = `اليوم ${dayWords[day]}`;
            const monthText = `من شهر ${monthWords[month - 1]}`;
            const yearText = `لعام ${yearToWordsAr(year)}`;
            
            return `${dayText} ${monthText} ${yearText} ميلادي.`;
        }

    } catch (error) {
        return '';
    }

    return '';
}
