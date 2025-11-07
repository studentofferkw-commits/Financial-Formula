// FIX: Implemented missing constants for navigation, articles, and currencies.
import { NavLinkInfo, Article, Currency, GlossaryTerm } from './types';

export const NAV_LINKS: NavLinkInfo[] = [
  { path: '/', key: 'home' },
  { path: '/date-converter', key: 'dateConverter' },
  { path: '/invoice-generator', key: 'invoiceGenerator' },
  { path: '/contract-clause', key: 'contractClause' },
  { path: '/glossary', key: 'glossary' },
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
  {
    id: '3',
    title: 'الأخطاء الشائعة عند كتابة المبالغ المالية',
    titleEn: 'Common Mistakes When Writing Financial Amounts',
    summary: 'تعرف على أكثر الأخطاء شيوعًا عند كتابة الأرقام في المستندات المالية وكيف يمكن لأداتنا مساعدتك على تجنبها.',
    summaryEn: 'Learn about the most common errors when writing numbers in financial documents and how our tool can help you avoid them.',
    content: `
      <p>حتى أكثر المهنيين خبرة يمكن أن يقعوا في أخطاء بسيطة عند كتابة المبالغ المالية، ولكن هذه الأخطاء قد تكون مكلفة. الوعي بها هو الخطوة الأولى نحو تجنبها.</p>
      <h3 class="font-bold text-xl mt-4">أشهر 5 أخطاء يجب الانتباه إليها:</h3>
      <ol class="list-decimal ps-5 space-y-2">
        <li><strong>عدم تطابق الأرقام مع الكلمات:</strong> هذا هو الخطأ الأكثر شيوعًا. قد تكتب "1500" بالأرقام، ولكن "ألف وخمسمائة وخمسون" بالكلمات. في معظم الأنظمة القانونية، يتم الاعتداد بالمبلغ المكتوب بالكلمات.</li>
        <li><strong>إهمال الكسور أو كتابتها بشكل خاطئ:</strong> كتابة "مائة ريال و 50 هللة" بدلاً من "مائة ريال وخمسون هللة" قد يخلق التباسًا. الدقة في كتابة الوحدات الفرعية للعملة (مثل الهللات أو القروش) لا تقل أهمية.</li>
        <li><strong>عدم تحديد العملة بوضوح:</strong> كتابة "ألف ريال" فقط قد لا تكون كافية إذا كانت الصفقة دولية. يجب دائمًا تحديد العملة بوضوح (مثل "ريال سعودي" أو "ريال قطري").</li>
        <li><strong>الكتابة اليدوية غير الواضحة:</strong> في الشيكات والمستندات المكتوبة بخط اليد، يمكن أن يتم تفسير رقم '7' على أنه '1' أو '5' على أنها '6'، مما يسبب مشاكل كبيرة.</li>
        <li><strong>نسيان عبارة "فقط لا غير":</strong> هذه العبارة البسيطة في نهاية المبلغ المكتوب بالحروف تغلق الباب أمام أي محاولة للاحتيال أو التعديل على المبلغ.</li>
      </ol>
      <p class="mt-4">تم تصميم أداة "صيغة مالية" لمعالجة هذه المشاكل بشكل مباشر. فهي تضمن تطابقًا تامًا، وتتعامل مع الكسور بدقة، وتضيف عبارات الحماية تلقائيًا، مما يمنحك مستندات مالية موثوقة ومحصنة ضد الأخطاء.</p>
    `,
    contentEn: `
      <p>Even the most experienced professionals can make simple mistakes when writing financial amounts, but these mistakes can be costly. Being aware of them is the first step toward avoidance.</p>
      <h3 class="font-bold text-xl mt-4">Top 5 Mistakes to Watch Out For:</h3>
      <ol class="list-decimal ps-5 space-y-2">
        <li><strong>Mismatched Numbers and Words:</strong> This is the most common error. You might write "1500" in figures but "One thousand five hundred and fifty" in words. In most legal systems, the amount written in words prevails.</li>
        <li><strong>Neglecting or Incorrectly Writing Fractions:</strong> Writing "one hundred dollars and 50 cent" instead of "one hundred dollars and fifty cents" can create ambiguity. Precision in writing the currency's fractional units (like cents or piastres) is equally important.</li>
        <li><strong>Not Specifying the Currency Clearly:</strong> Simply writing "one thousand riyals" may not be sufficient if the transaction is international. The currency should always be clearly specified (e.g., "Saudi Riyal" or "Qatari Riyal").</li>
        <li><strong>Illegible Handwriting:</strong> In handwritten checks and documents, a '7' can be mistaken for a '1', or a '5' for a '6', causing significant problems.</li>
        <li><strong>Forgetting the Word "Only":</strong> This simple word at the end of the written amount closes the door to fraudulent alterations of the amount.</li>
      </ol>
      <p class="mt-4">The "Financial Formula" tool is designed to address these issues directly. It ensures perfect matching, handles fractions with precision, and automatically adds protective phrases, giving you reliable and error-proof financial documents.</p>
    `,
  },
  {
    id: '4',
    title: 'المتطلبات القانونية لكتابة الأرقام في العقود',
    titleEn: 'Legal Requirements for Writing Numbers in Contracts',
    summary: 'فهم لماذا تعتبر كتابة الأرقام بالحروف شرطًا أساسيًا في العقود وكيف يحمي ذلك حقوقك.',
    summaryEn: 'Understand why writing numbers in words is a fundamental requirement in contracts and how it protects your rights.',
    content: `
      <p>في عالم القانون، الوضوح هو الملك. العقود هي وثائق ملزمة قانونًا، وأي غموض فيها يمكن أن يؤدي إلى نزاعات مكلفة. لهذا السبب، تولي الأنظمة القانونية أهمية قصوى للطريقة التي تُكتب بها المبالغ المالية.</p>
      <h3 class="font-bold text-xl mt-4">مبدأ "الكلمات تسود على الأرقام"</h3>
      <p>أحد المبادئ القانونية الراسخة في العديد من الولايات القضائية هو أنه في حالة وجود تعارض بين المبلغ المكتوب بالأرقام والمبلغ المكتوب بالحروف في مستند قانوني (مثل شيك أو عقد)، فإن المبلغ المكتوب <strong>بالحروف</strong> هو الذي يتم الاعتداد به. السبب بسيط: من الأصعب بكثير تغيير أو تزوير مبلغ مكتوب بالحروف مقارنة بتغيير رقم.</p>
      <h3 class="font-bold text-xl mt-4">أفضل الممارسات القانونية:</h3>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>اكتب المبلغ دائمًا بالطريقتين:</strong> لا تكتفِ بكتابة المبلغ بالأرقام فقط. قم دائمًا بتضمين الصيغة النصية الكاملة.</li>
        <li><strong>ضمان التطابق التام:</strong> استخدم أداة موثوقة مثل "صيغة مالية" لضمان عدم وجود أي اختلاف بين الصيغتين الرقمية والنصية.</li>
        <li><strong>كن محددًا بشأن العملة:</strong> حدد اسم العملة ورمزها (على سبيل المثال، "ريال سعودي (SAR)") لتجنب أي التباس.</li>
        <li><strong>استخدم لغة واضحة:</strong> تجنب الاختصارات أو المصطلحات غير الشائعة التي يمكن أن يساء تفسيرها.</li>
      </ul>
      <p class="mt-4">إن الالتزام بهذه الممارسات لا يجعل عقودك أكثر احترافية فحسب، بل يوفر لك أيضًا حماية قانونية قوية. استخدام أداتنا يضمن أنك تتبع هذه المعايير بسهولة ودقة.</p>
    `,
    contentEn: `
      <p>In the legal world, clarity is king. Contracts are legally binding documents, and any ambiguity within them can lead to costly disputes. This is why legal systems place extreme importance on the way financial amounts are written.</p>
      <h3 class="font-bold text-xl mt-4">The "Words Over Figures" Rule</h3>
      <p>A well-established legal principle in many jurisdictions is that if there is a discrepancy between an amount written in numerals and the same amount written in words in a legal document (like a check or contract), the amount written in <strong>words</strong> is considered the binding one. The reason is simple: it is much harder to alter or forge an amount written in words compared to changing a numeral.</p>
      <h3 class="font-bold text-xl mt-4">Legal Best Practices:</h3>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>Always Write the Amount Both Ways:</strong> Never settle for just writing the amount in figures. Always include the full text version.</li>
        <li><strong>Ensure Perfect Consistency:</strong> Use a reliable tool like "Financial Formula" to ensure there is zero discrepancy between the numerical and text versions.</li>
        <li><strong>Be Specific About the Currency:</strong> State the currency name and code (e.g., "Saudi Riyal (SAR)") to avoid any confusion.</li>
        <li><strong>Use Clear Language:</strong> Avoid abbreviations or uncommon terms that could be misinterpreted.</li>
      </ul>
      <p class="mt-4">Adhering to these practices not only makes your contracts more professional but also provides you with strong legal protection. Using our tool ensures you follow these standards with ease and accuracy.</p>
    `,
  },
  {
    id: '5',
    title: 'كيفية استخدام صيغة مالية لمختلف العملات',
    titleEn: 'How to Use Financial Formula for Different Currencies',
    summary: 'دليل خطوة بخطوة للاستفادة من دعم الأداة متعدد العملات، مع أمثلة توضح الفروق الدقيقة في كل لغة.',
    summaryEn: 'A step-by-step guide to leveraging the tool\'s multi-currency support, with examples showing the nuances for each language.',
    content: `
      <p>تم تصميم "صيغة مالية" لتكون أداة عالمية، قادرة على التعامل مع مجموعة واسعة من العملات وقواعدها النحوية الفريدة باللغة العربية. الاستفادة من هذه الميزة أمر بسيط ومباشر.</p>
      <h3 class="font-bold text-xl mt-4">دليل الاستخدام:</h3>
      <ol class="list-decimal ps-5 space-y-2">
        <li><strong>أدخل المبلغ:</strong> اكتب المبلغ الذي تريد تحويله في حقل "أدخل المبلغ بالأرقام". يمكنك تضمين الكسور العشرية.</li>
        <li><strong>اختر العملة:</strong> انقر على القائمة المنسدلة "اختر العملة". ستجد قائمة شاملة بالعملات. يمكنك البحث عن عملتك عن طريق كتابة اسمها لتصفية القائمة.</li>
        <li><strong>شاهد النتيجة الفورية:</strong> بمجرد اختيارك للعملة، ستقوم الأداة تلقائيًا بتحديث النص الناتج ليعكس الوحدات الصحيحة (مثل الريالات والهللات، أو الدينارات والفلوس) والقواعد النحوية المناسبة لها.</li>
      </ol>
      <h3 class="font-bold text-xl mt-4">أمثلة على الفروق التي تعالجها الأداة:</h3>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>الدينار الكويتي (KWD):</strong> يتعامل مع 3 منازل عشرية (فلوس). ستحول الأداة 10.125 إلى "عشرة دنانير ومائة وخمسة وعشرون فلسًا".</li>
        <li><strong>الريال السعودي (SAR):</strong> يتعامل مع منزلتين عشريتين (هللات). ستحول الأداة 2.00 إلى "ريالان". لاحظ استخدام صيغة المثنى الصحيحة.</li>
        <li><strong>الين الياباني (JPY):</strong> لا يحتوي على وحدات فرعية. ستتجاهل الأداة أي كسور عشرية وتتعامل مع العدد الصحيح فقط.</li>
      </ul>
      <p class="mt-4">هذه القدرة على التكيف التلقائي هي ما يجعل "صيغة مالية" أداة قوية. لم تعد بحاجة إلى حفظ أسماء الوحدات الفرعية أو القواعد النحوية المعقدة لكل عملة؛ فالأداة تقوم بكل العمل الشاق نيابة عنك.</p>
    `,
    contentEn: `
      <p>"Financial Formula" is designed to be a global tool, capable of handling a wide range of currencies and their unique grammatical rules. Leveraging this feature is simple and straightforward.</p>
      <h3 class="font-bold text-xl mt-4">How to Use:</h3>
      <ol class="list-decimal ps-5 space-y-2">
        <li><strong>Enter the Amount:</strong> Type the amount you want to convert into the "Enter amount in numbers" field. You can include decimals.</li>
        <li><strong>Select the Currency:</strong> Click on the "Select Currency" dropdown. You will find a comprehensive list of currencies. You can search for your currency by typing its name to filter the list.</li>
        <li><strong>See the Instant Result:</strong> As soon as you select a currency, the tool will automatically update the output text to reflect the correct units (e.g., Riyals and Halalas, or Dinars and Fils) and their corresponding grammatical rules.</li>
      </ol>
      <h3 class="font-bold text-xl mt-4">Examples of Nuances Handled by the Tool:</h3>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>Kuwaiti Dinar (KWD):</strong> Handles 3 decimal places (fils). The tool will convert 10.125 to "Ten dinars and one hundred twenty-five fils".</li>
        <li><strong>Saudi Riyal (SAR):</strong> Handles 2 decimal places (halalas). The tool will convert 2.00 to "Two riyals". Notice the correct pluralization.</li>
        <li><strong>Japanese Yen (JPY):</strong> Has no fractional units. The tool will ignore any decimals and process only the integer part.</li>
      </ul>
      <p class="mt-4">This ability to adapt automatically is what makes "Financial Formula" so powerful. You no longer need to memorize the names of fractional units or the complex grammatical rules for each currency; the tool does all the heavy lifting for you.</p>
    `,
  }
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
    {
        id: '1',
        termAr: 'الأصل',
        termEn: 'Asset',
        definitionAr: 'مورد اقتصادي تمتلكه الشركة وله قيمة ويتوقع أن يوفر فائدة اقتصادية مستقبلية.',
        definitionEn: 'An economic resource controlled by the company as a result of past events and from which future economic benefits are expected to flow to the company.'
    },
    {
        id: '2',
        termAr: 'الالتزام',
        termEn: 'Liability',
        definitionAr: 'تعهد أو دين حالي على الشركة ينشأ من أحداث سابقة، ويتطلب تسويته تدفقاً خارجاً للموارد.',
        definitionEn: 'A present obligation of the company arising from past events, the settlement of which is expected to result in an outflow of resources.'
    },
    {
        id: '3',
        termAr: 'حقوق الملكية',
        termEn: 'Equity',
        definitionAr: 'القيمة المتبقية في أصول الشركة بعد خصم جميع التزاماتها. تمثل حصة المالكين في الشركة.',
        definitionEn: 'The residual interest in the assets of the entity after deducting all its liabilities. It represents the owners\' stake in the company.'
    },
    {
        id: '4',
        termAr: 'الإيرادات',
        termEn: 'Revenue',
        definitionAr: 'إجمالي تدفق المنافع الاقتصادية خلال فترة ما، والتي تنشأ عن الأنشطة العادية للشركة وتؤدي إلى زيادة في حقوق الملكية.',
        definitionEn: 'The gross inflow of economic benefits during a period arising in the course of the ordinary activities of an entity when those inflows result in increases in equity.'
    },
    {
        id: '5',
        termAr: 'المصروفات',
        termEn: 'Expenses',
        definitionAr: 'تكاليف العمليات التي تتكبدها الشركة في سبيل تحقيق الإيرادات.',
        definitionEn: 'The costs of operations that a company incurs to generate revenue.'
    },
    {
        id: '6',
        termAr: 'الميزانية العمومية',
        termEn: 'Balance Sheet',
        definitionAr: 'بيان مالي يوضح أصول الشركة والتزاماتها وحقوق الملكية في نقطة زمنية محددة. (الأصول = الالتزامات + حقوق الملكية).',
        definitionEn: 'A financial statement that reports a company\'s assets, liabilities, and equity at a specific point in time. (Assets = Liabilities + Equity).'
    },
    {
        id: '7',
        termAr: 'قائمة الدخل',
        termEn: 'Income Statement',
        definitionAr: 'بيان مالي يوضح أداء الشركة المالي (الإيرادات، المصروفات، وصافي الربح أو الخسارة) خلال فترة زمنية معينة.',
        definitionEn: 'A financial statement that shows a company\'s financial performance (revenues, expenses, and net profit or loss) over a period of time.'
    },
    {
        id: '8',
        termAr: 'التدفق النقدي',
        termEn: 'Cash Flow',
        definitionAr: 'صافي حركة النقد وما يعادله الذي يتم تحويله إلى ومن الشركة. يقيس قدرة الشركة على توليد النقد.',
        definitionEn: 'The net movement of cash and cash-equivalents being transferred into and out of a business. It measures a company\'s ability to generate cash.'
    },
    {
        id: '9',
        termAr: 'الإهلاك',
        termEn: 'Depreciation',
        definitionAr: 'النقص المنهجي في القيمة المسجلة للأصل الملموس على مدى عمره الإنتاجي.',
        definitionEn: 'The systematic decrease in the recorded value of a tangible asset over its useful life.'
    },
    {
        id: '10',
        termAr: 'حسابات القبض (الذمم المدينة)',
        termEn: 'Accounts Receivable',
        definitionAr: 'المبالغ المستحقة للشركة من عملائها مقابل سلع أو خدمات تم بيعها على الحساب.',
        definitionEn: 'The amounts owed to a company by its customers for goods or services sold on credit.'
    },
    {
        id: '11',
        termAr: 'حسابات الدفع (الذمم الدائنة)',
        termEn: 'Accounts Payable',
        definitionAr: 'المبالغ التي تدين بها الشركة لمورديها مقابل سلع أو خدمات تم شراؤها على الحساب.',
        definitionEn: 'The amounts a company owes to its suppliers for goods or services purchased on credit.'
    },
    {
        id: '12',
        termAr: 'التدقيق (المراجعة)',
        termEn: 'Audit',
        definitionAr: 'فحص مستقل وموضوعي للبيانات المالية للمنظمة للتأكد من أنها تمثل وجهة نظر حقيقية وعادلة لوضعها المالي.',
        definitionEn: 'An independent and objective examination of an organization\'s financial statements to ensure they present a true and fair view of its financial position.'
    },
     {
        id: '13',
        termAr: 'الأرباح المحتجزة',
        termEn: 'Retained Earnings',
        definitionAr: 'جزء من صافي أرباح الشركة الذي يتم إعادة استثماره في الشركة بدلاً من توزيعه على المساهمين كأرباح.',
        definitionEn: 'The portion of a company\'s net income that is reinvested in the business rather than being distributed to shareholders as dividends.'
    },
    {
        id: '14',
        termAr: 'نقطة التعادل',
        termEn: 'Break-Even Point',
        definitionAr: 'النقطة التي تتساوى فيها الإيرادات الإجمالية مع التكاليف الإجمالية، مما يعني عدم وجود ربح أو خسارة.',
        definitionEn: 'The point at which total revenue equals total costs, resulting in no profit or loss.'
    }
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