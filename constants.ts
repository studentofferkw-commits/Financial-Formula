// FIX: Implemented missing constants for navigation, articles, and currencies.
import { NavLinkInfo, Article, Currency } from './types';

export const NAV_LINKS: NavLinkInfo[] = [
  { path: '/', key: 'home' },
  { path: '/articles', key: 'articles' },
  { path: '/about', key: 'about' },
  { path: '/contact', key: 'contact' },
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'أهمية الدقة في كتابة المبالغ المالية',
    titleEn: 'The Importance of Accuracy in Writing Financial Amounts',
    summary: 'اكتشف لماذا يمكن أن يكون خطأ بسيط في كتابة الأرقام مكلفًا وكيفية تجنبه.',
    summaryEn: 'Discover why a simple mistake in writing numbers can be costly and how to avoid it.',
    content: `
      <p>في عالم المال والأعمال، الدقة ليست مجرد رفاهية، بل هي ضرورة قصوى. عند تحرير العقود أو الفواتير أو الشيكات، فإن كتابة المبلغ المالي بشكل صحيح بالحروف والأرقام تعتبر خطوة حاسمة لضمان الوضوح وتجنب أي نزاعات مستقبلية.</p>
      <p>الخطأ في فاصلة عشرية أو رقم واحد يمكن أن يغير قيمة المبلغ بشكل جذري، مما قد يؤدي إلى خسائر مالية فادحة أو تعقيدات قانونية. استخدام أدوات مثل 'صيغة مالية' يساعد على تقليل هذا الخطر من خلال توفير تحويل دقيق وموحد.</p>
      <h3 class="font-bold text-xl mt-4">نصائح لضمان الدقة:</h3>
      <ul class="list-disc ps-5">
        <li>دائماً قم بمراجعة الأرقام مرتين قبل التوقيع.</li>
        <li>استخدم الأدوات الرقمية للتحقق من صحة كتابة المبلغ بالحروف.</li>
        <li>تأكد من وضوح خط اليد عند الكتابة اليدوية.</li>
      </ul>
    `,
    contentEn: `
      <p>In the world of finance and business, accuracy is not just a luxury; it is an absolute necessity. When drafting contracts, invoices, or checks, correctly writing the financial amount in both numerals and words is a crucial step to ensure clarity and avoid future disputes.</p>
      <p>An error in a decimal point or a single digit can drastically change the value of the amount, potentially leading to significant financial losses or legal complications. Using tools like 'Financial Formula' helps to minimize this risk by providing accurate and standardized conversions.</p>
      <h3 class="font-bold text-xl mt-4">Tips for Ensuring Accuracy:</h3>
      <ul class="list-disc ps-5">
        <li>Always double-check the numbers before signing.</li>
        <li>Use digital tools to verify the correctness of the amount written in words.</li>
        <li>Ensure your handwriting is legible when writing manually.</li>
      </ul>
    `,
  },
  {
    id: '2',
    title: 'الفروق بين كتابة الأرقام بالعربية والإنجليزية',
    titleEn: 'Differences Between Writing Numbers in Arabic and English',
    summary: 'نظرة على القواعد النحوية التي تحكم كتابة الأرقام في كلتا اللغتين.',
    summaryEn: 'A look at the grammatical rules that govern writing numbers in both languages.',
    content: `
      <p>تختلف قواعد كتابة الأرقام بين اللغة العربية والإنجليزية بشكل كبير. في الإنجليزية، القاعدة بسيطة نسبيًا وتعتمد على صيغ المفرد والجمع. أما في العربية، فالأمر أكثر تعقيدًا ويتضمن قواعد للمثنى والجمع وتذكير وتأنيث المعدود.</p>
      <p>على سبيل المثال، الرقم '2' يتبعه معدود بصيغة المثنى (مثل 'دولاران')، بينما الأرقام من 3 إلى 10 يتبعها معدود بصيغة الجمع (مثل 'دولارات'). هذه التفاصيل الدقيقة هي ما يجعل التحويل الدقيق تحديًا، وهي ما تعالجه أداتنا بفعالية.</p>
    `,
    contentEn: `
      <p>The rules for writing numbers differ significantly between Arabic and English. In English, the rule is relatively simple and relies on singular and plural forms. In Arabic, however, it is more complex and involves rules for dual, plural, and the gender of the noun being counted.</p>
      <p>For example, the number '2' is followed by a noun in the dual form (like 'dollar-an'), while numbers from 3 to 10 are followed by a noun in the plural form (like 'dollars'). These subtle details are what make accurate conversion a challenge, which our tool handles effectively.</p>
    `,
  },
];


export const CURRENCIES: Currency[] = [
    { code: 'AED', name: 'UAE Dirham', nameAr: 'درهم إماراتي', singular: 'dirham', plural: 'dirhams', singularAr: 'درهم', dualAr: 'درهمان', pluralAr: 'دراهم', fraction: 'fils', fractionPlural: 'fils', fractionSingularAr: 'فلس', fractionDualAr: 'فلسان', fractionPluralAr: 'فلوس', decimals: 2 },
    { code: 'AFN', name: 'Afghan Afghani', nameAr: 'أفغاني أفغانستاني', singular: 'afghani', plural: 'afghanis', singularAr: 'أفغاني', dualAr: 'أفغانيان', pluralAr: 'أفغانيات', fraction: 'pul', fractionPlural: 'puls', fractionSingularAr: 'بول', fractionDualAr: 'بولان', fractionPluralAr: 'بولات', decimals: 2 },
    { code: 'AUD', name: 'Australian Dollar', nameAr: 'دولار أسترالي', singular: 'dollar', plural: 'dollars', singularAr: 'دولار', dualAr: 'دولاران', pluralAr: 'دولارات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
    { code: 'BHD', name: 'Bahraini Dinar', nameAr: 'دينار بحريني', singular: 'dinar', plural: 'dinars', singularAr: 'دينار', dualAr: 'ديناران', pluralAr: 'دنانير', fraction: 'fils', fractionPlural: 'fils', fractionSingularAr: 'فلس', fractionDualAr: 'فلسان', fractionPluralAr: 'فلوس', decimals: 3 },
    { code: 'BRL', name: 'Brazilian Real', nameAr: 'ريال برازيلي', singular: 'real', plural: 'reais', singularAr: 'ريال', dualAr: 'ريالان', pluralAr: 'ريالات', fraction: 'centavo', fractionPlural: 'centavos', fractionSingularAr: 'سنتافو', fractionDualAr: 'سنتافوان', fractionPluralAr: 'سنتافوات', decimals: 2 },
    { code: 'CAD', name: 'Canadian Dollar', nameAr: 'دولار كندي', singular: 'dollar', plural: 'dollars', singularAr: 'دولار', dualAr: 'دولاران', pluralAr: 'دولارات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
    { code: 'CHF', name: 'Swiss Franc', nameAr: 'فرنك سويسري', singular: 'franc', plural: 'francs', singularAr: 'فرنك', dualAr: 'فرانكان', pluralAr: 'فرنكات', fraction: 'rappen', fractionPlural: 'rappen', fractionSingularAr: 'رابن', fractionDualAr: 'رابنان', fractionPluralAr: 'رابنات', decimals: 2 },
    { code: 'CNY', name: 'Chinese Yuan', nameAr: 'يوان صيني', singular: 'yuan', plural: 'yuan', singularAr: 'يوان', dualAr: 'يوانان', pluralAr: 'يوانات', fraction: 'fen', fractionPlural: 'fen', fractionSingularAr: 'فن', fractionDualAr: 'فنان', fractionPluralAr: 'فنات', decimals: 2 },
    { code: 'DZD', name: 'Algerian Dinar', nameAr: 'دينار جزائري', singular: 'dinar', plural: 'dinars', singularAr: 'دينار', dualAr: 'ديناران', pluralAr: 'دنانير', fraction: 'santeem', fractionPlural: 'santeems', fractionSingularAr: 'سنتيم', fractionDualAr: 'سنتيمان', fractionPluralAr: 'سنتيمات', decimals: 2 },
    { code: 'EGP', name: 'Egyptian Pound', nameAr: 'جنيه مصري', singular: 'pound', plural: 'pounds', singularAr: 'جنيه', dualAr: 'جنيهان', pluralAr: 'جنيهات', fraction: 'piastre', fractionPlural: 'piastres', fractionSingularAr: 'قرش', fractionDualAr: 'قرشان', fractionPluralAr: 'قروش', decimals: 2 },
    { code: 'EUR', name: 'Euro', nameAr: 'يورو', singular: 'euro', plural: 'euros', singularAr: 'يورو', dualAr: 'يورو', pluralAr: 'يورو', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
    { code: 'GBP', name: 'British Pound', nameAr: 'جنيه إسترليني', singular: 'pound', plural: 'pounds', singularAr: 'جنيه', dualAr: 'جنيهان', pluralAr: 'جنيهات', fraction: 'penny', fractionPlural: 'pence', fractionSingularAr: 'بني', fractionDualAr: 'بنيان', fractionPluralAr: 'بنسات', decimals: 2 },
    { code: 'HKD', name: 'Hong Kong Dollar', nameAr: 'دولار هونج كونج', singular: 'dollar', plural: 'dollars', singularAr: 'دولار', dualAr: 'دولاران', pluralAr: 'دولارات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
    { code: 'IDR', name: 'Indonesian Rupiah', nameAr: 'روبية إندونيسية', singular: 'rupiah', plural: 'rupiah', singularAr: 'روبية', dualAr: 'روبيتان', pluralAr: 'روبيات', fraction: 'sen', fractionPlural: 'sen', fractionSingularAr: 'سن', fractionDualAr: 'سنان', fractionPluralAr: 'سنات', decimals: 2 },
    { code: 'INR', name: 'Indian Rupee', nameAr: 'روبية هندية', singular: 'rupee', plural: 'rupees', singularAr: 'روبية', dualAr: 'روبيتان', pluralAr: 'روبيات', fraction: 'paisa', fractionPlural: 'paise', fractionSingularAr: 'بيسة', fractionDualAr: 'بيستان', fractionPluralAr: 'بيسات', decimals: 2 },
    { code: 'IQD', name: 'Iraqi Dinar', nameAr: 'دينار عراقي', singular: 'dinar', plural: 'dinars', singularAr: 'دينار', dualAr: 'ديناران', pluralAr: 'دنانير', fraction: 'fils', fractionPlural: 'fils', fractionSingularAr: 'فلس', fractionDualAr: 'فلسان', fractionPluralAr: 'فلوس', decimals: 3 },
    { code: 'JOD', name: 'Jordanian Dinar', nameAr: 'دينار أردني', singular: 'dinar', plural: 'dinars', singularAr: 'دينار', dualAr: 'ديناران', pluralAr: 'دنانير', fraction: 'piastre', fractionPlural: 'piastres', fractionSingularAr: 'قرش', fractionDualAr: 'قرشان', fractionPluralAr: 'قروش', decimals: 2 },
    { code: 'JPY', name: 'Japanese Yen', nameAr: 'ين ياباني', singular: 'yen', plural: 'yen', singularAr: 'ين', dualAr: 'ينان', pluralAr: 'ينات', fraction: 'sen', fractionPlural: 'sen', fractionSingularAr: 'سن', fractionDualAr: 'سنان', fractionPluralAr: 'سنات', decimals: 0 },
    { code: 'KES', name: 'Kenyan Shilling', nameAr: 'شلن كيني', singular: 'shilling', plural: 'shillings', singularAr: 'شلن', dualAr: 'شلان', pluralAr: 'شلنات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
    { code: 'KRW', name: 'South Korean Won', nameAr: 'وون كوري جنوبي', singular: 'won', plural: 'won', singularAr: 'وون', dualAr: 'وونان', pluralAr: 'وونات', fraction: 'jeon', fractionPlural: 'jeon', fractionSingularAr: 'جون', fractionDualAr: 'جونان', fractionPluralAr: 'جونات', decimals: 0 },
    { code: 'KWD', name: 'Kuwaiti Dinar', nameAr: 'دينار كويتي', singular: 'dinar', plural: 'dinars', singularAr: 'دينار', dualAr: 'ديناران', pluralAr: 'دنانير', fraction: 'fils', fractionPlural: 'fils', fractionSingularAr: 'فلس', fractionDualAr: 'فلسان', fractionPluralAr: 'فلوس', decimals: 3 },
    { code: 'LBP', name: 'Lebanese Pound', nameAr: 'ليرة لبنانية', singular: 'pound', plural: 'pounds', singularAr: 'ليرة', dualAr: 'ليرتان', pluralAr: 'ليرات', fraction: 'piastre', fractionPlural: 'piastres', fractionSingularAr: 'قرش', fractionDualAr: 'قرشان', fractionPluralAr: 'قروش', decimals: 2 },
    { code: 'LKR', name: 'Sri Lankan Rupee', nameAr: 'روبية سريلانكية', singular: 'rupee', plural: 'rupees', singularAr: 'روبية', dualAr: 'روبيتان', pluralAr: 'روبيات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
    { code: 'LYD', name: 'Libyan Dinar', nameAr: 'دينار ليبي', singular: 'dinar', plural: 'dinars', singularAr: 'دينار', dualAr: 'ديناران', pluralAr: 'دنانير', fraction: 'dirham', fractionPlural: 'dirhams', fractionSingularAr: 'درهم', fractionDualAr: 'درهمان', fractionPluralAr: 'دراهم', decimals: 3 },
    { code: 'MAD', name: 'Moroccan Dirham', nameAr: 'درهم مغربي', singular: 'dirham', plural: 'dirhams', singularAr: 'درهم', dualAr: 'درهمان', pluralAr: 'دراهم', fraction: 'centime', fractionPlural: 'centimes', fractionSingularAr: 'سنتيم', fractionDualAr: 'سنتيمان', fractionPluralAr: 'سنتيمات', decimals: 2 },
    { code: 'MXN', name: 'Mexican Peso', nameAr: 'بيزو مكسيكي', singular: 'peso', plural: 'pesos', singularAr: 'بيزو', dualAr: 'بيزوان', pluralAr: 'بيزوات', fraction: 'centavo', fractionPlural: 'centavos', fractionSingularAr: 'سنتافو', fractionDualAr: 'سنتافوان', fractionPluralAr: 'سنتافوات', decimals: 2 },
    { code: 'MYR', name: 'Malaysian Ringgit', nameAr: 'رينغيت ماليزي', singular: 'ringgit', plural: 'ringgit', singularAr: 'رينغيت', dualAr: 'رينغيتان', pluralAr: 'رينغيتات', fraction: 'sen', fractionPlural: 'sen', fractionSingularAr: 'سن', fractionDualAr: 'سنان', fractionPluralAr: 'سنات', decimals: 2 },
    { code: 'NGN', name: 'Nigerian Naira', nameAr: 'نيرة نيجيرية', singular: 'naira', plural: 'naira', singularAr: 'نيرة', dualAr: 'نيرتان', pluralAr: 'نيرات', fraction: 'kobo', fractionPlural: 'kobo', fractionSingularAr: 'كوبو', fractionDualAr: 'كوبوان', fractionPluralAr: 'كوبوات', decimals: 2 },
    { code: 'NOK', name: 'Norwegian Krone', nameAr: 'كرونة نرويجية', singular: 'krone', plural: 'kroner', singularAr: 'كرونة', dualAr: 'كرونتان', pluralAr: 'كرونات', fraction: 'øre', fractionPlural: 'øre', fractionSingularAr: 'أوره', fractionDualAr: 'أورتان', fractionPluralAr: 'أورات', decimals: 2 },
    { code: 'NZD', name: 'New Zealand Dollar', nameAr: 'دولار نيوزيلندي', singular: 'dollar', plural: 'dollars', singularAr: 'دولار', dualAr: 'دولاران', pluralAr: 'دولارات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
    { code: 'OMR', name: 'Omani Rial', nameAr: 'ريال عماني', singular: 'rial', plural: 'rials', singularAr: 'ريال', dualAr: 'ريالان', pluralAr: 'ريالات', fraction: 'baisa', fractionPlural: 'baisa', fractionSingularAr: 'بيسة', fractionDualAr: 'بيستان', fractionPluralAr: 'بيسات', decimals: 3 },
    { code: 'PHP', name: 'Philippine Peso', nameAr: 'بيزو فلبيني', singular: 'peso', plural: 'pesos', singularAr: 'بيزو', dualAr: 'بيزوان', pluralAr: 'بيزوات', fraction: 'centavo', fractionPlural: 'centavos', fractionSingularAr: 'سنتافو', fractionDualAr: 'سنتافوان', fractionPluralAr: 'سنتافوات', decimals: 2 },
    { code: 'PKR', name: 'Pakistani Rupee', nameAr: 'روبية باكستانية', singular: 'rupee', plural: 'rupees', singularAr: 'روبية', dualAr: 'روبيتان', pluralAr: 'روبيات', fraction: 'paisa', fractionPlural: 'paise', fractionSingularAr: 'بيسة', fractionDualAr: 'بيستان', fractionPluralAr: 'بيسات', decimals: 2 },
    { code: 'QAR', name: 'Qatari Riyal', nameAr: 'ريال قطري', singular: 'riyal', plural: 'riyals', singularAr: 'ريال', dualAr: 'ريالان', pluralAr: 'ريالات', fraction: 'dirham', fractionPlural: 'dirhams', fractionSingularAr: 'درهم', fractionDualAr: 'درهمان', fractionPluralAr: 'دراهم', decimals: 2 },
    { code: 'RUB', name: 'Russian Ruble', nameAr: 'روبل روسي', singular: 'ruble', plural: 'rubles', singularAr: 'روبل', dualAr: 'روبلان', pluralAr: 'روبلات', fraction: 'kopek', fractionPlural: 'kopeks', fractionSingularAr: 'كوبيك', fractionDualAr: 'كوبيكان', fractionPluralAr: 'كوبيكات', decimals: 2 },
    { code: 'SAR', name: 'Saudi Riyal', nameAr: 'ريال سعودي', singular: 'riyal', plural: 'riyals', singularAr: 'ريال', dualAr: 'ريالان', pluralAr: 'ريالات', fraction: 'halala', fractionPlural: 'halalas', fractionSingularAr: 'هللة', fractionDualAr: 'هللتان', fractionPluralAr: 'هللات', decimals: 2 },
    { code: 'SDG', name: 'Sudanese Pound', nameAr: 'جنيه سوداني', singular: 'pound', plural: 'pounds', singularAr: 'جنيه', dualAr: 'جنيهان', pluralAr: 'جنيهات', fraction: 'piastre', fractionPlural: 'piastres', fractionSingularAr: 'قرش', fractionDualAr: 'قرشان', fractionPluralAr: 'قروش', decimals: 2 },
    { code: 'SEK', name: 'Swedish Krona', nameAr: 'كرونة سويدية', singular: 'krona', plural: 'kronor', singularAr: 'كرونة', dualAr: 'كرونتان', pluralAr: 'كرونات', fraction: 'öre', fractionPlural: 'öre', fractionSingularAr: 'أوره', fractionDualAr: 'أورتان', fractionPluralAr: 'أورات', decimals: 2 },
    { code: 'SGD', name: 'Singapore Dollar', nameAr: 'دولار سنغافوري', singular: 'dollar', plural: 'dollars', singularAr: 'دولار', dualAr: 'دولاران', pluralAr: 'دولارات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
    { code: 'SYP', name: 'Syrian Pound', nameAr: 'ليرة سورية', singular: 'pound', plural: 'pounds', singularAr: 'ليرة', dualAr: 'ليرتان', pluralAr: 'ليرات', fraction: 'piastre', fractionPlural: 'piastres', fractionSingularAr: 'قرش', fractionDualAr: 'قرشان', fractionPluralAr: 'قروش', decimals: 2 },
    { code: 'THB', name: 'Thai Baht', nameAr: 'بات تايلاندي', singular: 'baht', plural: 'baht', singularAr: 'بات', dualAr: 'باتان', pluralAr: 'باتات', fraction: 'satang', fractionPlural: 'satang', fractionSingularAr: 'ساتانغ', fractionDualAr: 'ساتانغان', fractionPluralAr: 'ساتانغات', decimals: 2 },
    { code: 'TND', name: 'Tunisian Dinar', nameAr: 'دينار تونسي', singular: 'dinar', plural: 'dinars', singularAr: 'دينار', dualAr: 'ديناران', pluralAr: 'دنانير', fraction: 'millime', fractionPlural: 'millimes', fractionSingularAr: 'مليم', fractionDualAr: 'مليمان', fractionPluralAr: 'مليمات', decimals: 3 },
    { code: 'TRY', name: 'Turkish Lira', nameAr: 'ليرة تركية', singular: 'lira', plural: 'lira', singularAr: 'ليرة', dualAr: 'ليرتان', pluralAr: 'ليرات', fraction: 'kuruş', fractionPlural: 'kuruş', fractionSingularAr: 'قرش', fractionDualAr: 'قرشان', fractionPluralAr: 'قروش', decimals: 2 },
    { code: 'TWD', name: 'New Taiwan Dollar', nameAr: 'دولار تايواني جديد', singular: 'dollar', plural: 'dollars', singularAr: 'دولار', dualAr: 'دولاران', pluralAr: 'دولارات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
    { code: 'USD', name: 'US Dollar', nameAr: 'دولار أمريكي', singular: 'dollar', plural: 'dollars', singularAr: 'دولار', dualAr: 'دولاران', pluralAr: 'دولارات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
    { code: 'VND', name: 'Vietnamese Dong', nameAr: 'دونج فيتنامي', singular: 'dong', plural: 'dong', singularAr: 'دونج', dualAr: 'دونجان', pluralAr: 'دونجات', fraction: 'hao', fractionPlural: 'hao', fractionSingularAr: 'هاو', fractionDualAr: 'هاوان', fractionPluralAr: 'هاوات', decimals: 0 },
    { code: 'YER', name: 'Yemeni Rial', nameAr: 'ريال يمني', singular: 'rial', plural: 'rials', singularAr: 'ريال', dualAr: 'ريالان', pluralAr: 'ريالات', fraction: 'fils', fractionPlural: 'fils', fractionSingularAr: 'فلس', fractionDualAr: 'فلسان', fractionPluralAr: 'فلوس', decimals: 2 },
    { code: 'ZAR', name: 'South African Rand', nameAr: 'راند جنوب أفريقي', singular: 'rand', plural: 'rand', singularAr: 'راند', dualAr: 'راندان', pluralAr: 'راندات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
].sort((a, b) => a.name.localeCompare(b.name));
