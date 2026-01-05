// FIX: Implemented missing constants for navigation, articles, and currencies.
import { NavLinkInfo, Article, Currency, GlossaryTerm } from './types';

export const TOOLS_LINKS: NavLinkInfo[] = [
  { path: '/number-converter', key: 'numberConverter' },
  { path: '/date-converter', key: 'dateConverter' },
  { path: '/invoice-generator', key: 'invoiceGenerator' },
  { path: '/receipt-generator', key: 'receiptGenerator' },
  { path: '/contract-clause', key: 'contractClause' },
  { path: '/loan-calculator', key: 'loanCalculator' },
  { path: '/currency-converter', key: 'currencyConverter' },
];

export const NAV_LINKS: NavLinkInfo[] = [
  { path: '/', key: 'home' },
  { path: '#', key: 'tools', children: TOOLS_LINKS },
  { path: '/articles', key: 'articles' },
  { path: '/glossary', key: 'glossary' },
];

export const FOOTER_LINKS: NavLinkInfo[] = [
  { path: '/about', key: 'about' },
  { path: '/contact', key: 'contact' },
  { path: '/faq', key: 'faq' },
  { path: '/privacy-policy', key: 'privacy' },
  { path: '/terms-of-service', key: 'terms' },
];

export const ARTICLES: Article[] = [
  {
    id: '1',
    title: 'أهمية الدقة في كتابة المبالغ المالية',
    titleEn: 'The Importance of Accuracy in Writing Financial Amounts',
    summary: 'اكتشف لماذا يمكن أن يكون خطأ بسيط في كتابة الأرقام مكلفًا وكيفية تجنبه.',
    summaryEn: 'Discover why a simple mistake in writing numbers can be costly and how to avoid it.',
    content: `
      <p>في عالم المال والأعمال الذي يتسم بالدقة العالية، تُعدُّ الدقة حجر الزاوية. بينما نركز غالبًا على القرارات الاستراتيجية والمفاوضات، يمكن لزلة قلم بسيطة—أو خطأ في الطباعة—عند كتابة مبلغ مالي أن تقوض أكثر الاتفاقيات إحكامًا. تستكشف هذه المقالة لماذا لا تُعد الدقة المتناهية في المستندات المالية مجرد ممارسة جيدة، بل هي حماية أساسية ضد الأخطاء المكلفة والنزاعات القانونية.</p>

      <h3 class="font-bold text-xl mt-6">تكلفة خطأ مطبعي واحد: سيناريو من الواقع</h3>
      <p>تخيل أن شركة صغيرة توقع عقدًا لتقديم خدمات بقيمة إجمالية "عشرة آلاف ريال (10,000.00 ريال)". في لحظة استعجال، كُتب المبلغ بالحروف عن طريق الخطأ "مائة ألف ريال". من الناحية القانونية، غالبًا ما يكون للمبلغ المكتوب بالحروف الأسبقية على الأرقام. هذا الخطأ البسيط يمكن أن يعرض العميل لمطالبة بعشرة أضعاف السعر المتفق عليه، مما يؤدي إلى معركة قانونية طويلة ومكلفة كان من الممكن تجنبها بسهولة.</p>
      <blockquote class="border-s-4 border-teal-500 ps-4 py-2 my-4 bg-gray-50 dark:bg-slate-800">
        <p class="italic">هذا ليس سيناريو بعيد المنال. شهدت المحاكم في جميع أنحاء العالم عددًا لا يحصى من القضايا التي أدت فيها مثل هذه التناقضات إلى خسائر مالية فادحة، وتضرر العلاقات التجارية، وحتى انهيار الشركات.</p>
      </blockquote>

      <h3 class="font-bold text-xl mt-6">الأثر المتسلسل لعدم الدقة</h3>
      <p>يمكن أن يتسبب خطأ في مستند مالي في سلسلة من المشاكل:</p>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>النزاعات القانونية:</strong> كما رأينا في السيناريو أعلاه، يعد الغموض أو الخطأ في البنود المالية سببًا رئيسيًا لنزاعات العقود.</li>
        <li><strong>الخسائر المالية:</strong> يمكن أن تؤثر المدفوعات الزائدة أو الناقصة بسبب الأخطاء بشكل مباشر على التدفق النقدي للشركة وربحيتها.</li>
        <li><strong>الإضرار بالسمعة:</strong> الأخطاء المتكررة في مستندات مثل الفواتير والشيكات يمكن أن تجعل الشركة تبدو غير احترافية وغير جديرة بالثقة للعملاء والشركاء.</li>
        <li><strong>مشاكل المراجعة والامتثال:</strong> يمكن أن تؤدي السجلات غير الدقيقة إلى مشاكل خطيرة أثناء عمليات المراجعة المالية وقد تؤدي إلى فرض عقوبات لعدم الامتثال للولائح.</li>
      </ul>

      <h3 class="font-bold text-xl mt-6">أفضل الممارسات لضمان الدقة المالية</h3>
      <p>لحماية معاملاتك، اتبع هذه الممارسات الأساسية:</p>
      <ol class="list-decimal ps-5 space-y-2">
        <li><strong>مبدأ المراجعة المزدوجة:</strong> اطلب دائمًا من شخص ثانٍ مراجعة أي مستند مالي مهم قبل إصداره. غالبًا ما تكتشف عين جديدة الأخطاء التي أغفلتها.</li>
        <li><strong>استخدام التكنولوجيا:</strong> كتابة المبالغ يدويًا بالحروف عرضة للخطأ. استخدم أداة رقمية موثوقة مثل <a href="/number-converter" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">أداة تحويل الأرقام</a> لإنشاء نص دقيق وموحد لأي رقم، مما يضمن التطابق التام بين الأرقام والكلمات.</li>
        <li><strong>كن واضحًا بشأن العملة:</strong> حدد العملة دائمًا بوضوح (على سبيل المثال، "دولار أمريكي"، "ريال سعودي") لتجنب الغموض في المعاملات الدولية.</li>
        <li><strong>حافظ على الوضوح:</strong> عند الكتابة اليدوية، تأكد من أن كل رقم وكلمة مقروءة تمامًا. تجنب الاختصارات أو المصطلحات التي يمكن إساءة تفسيرها.</li>
        <li><strong>تأمين المبلغ:</strong> اختتم المبلغ المكتوب بعبارة "فقط لا غير" لمنع أي إضافات أو تعديلات احتيالية.</li>
      </ol>

      <p class="mt-6">في النهاية، إن قضاء بضع لحظات إضافية لضمان الدقة هو استثمار يؤتي ثماره في الأمان والاحترافية وراحة البال. من خلال دمج هذه الممارسات والاستفادة من الأدوات الحديثة، يمكنك تحصين عملياتك المالية ضد المخاطر المكلفة للأخطاء البشرية البسيطة.</p>
    `,
    contentEn: `
      <p>In the high-stakes world of finance and business, precision is paramount. While we often focus on strategic decisions and negotiations, a simple slip of the pen—or a keyboard—when writing a financial amount can undermine the most carefully crafted agreement. This article explores why meticulous accuracy in financial documentation is not just good practice, but an essential safeguard against costly errors and legal disputes.</p>
      
      <h3 class="font-bold text-xl mt-6">The Cost of a Single Typo: A Real-World Scenario</h3>
      <p>Imagine a small business signing a contract to provide services for a total of "Ten Thousand Dollars ($10,000.00)". In a moment of haste, the amount in words is mistakenly written as "One Hundred Thousand Dollars". Legally, the amount written in words often holds precedence over the numerals. This single error could expose the client to a claim for ten times the agreed-upon price, leading to a protracted and expensive legal battle that could have been easily avoided.</p>
      <blockquote class="border-s-4 border-teal-500 ps-4 py-2 my-4 bg-gray-50 dark:bg-slate-800">
        <p class="italic">This is not a far-fetched scenario. Courts worldwide have seen countless cases where such discrepancies have led to significant financial losses, damaged business relationships, and even company failures.</p>
      </blockquote>

      <h3 class="font-bold text-xl mt-6">The Ripple Effect of Inaccuracy</h3>
      <p>An error in a financial document can cause a cascade of problems:</p>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>Legal Disputes:</strong> As seen in the scenario above, ambiguity or error in financial terms is a primary cause of contract disputes.</li>
        <li><strong>Financial Loss:</strong> Overpayments or underpayments due to errors can directly impact a company's cash flow and profitability.</li>
        <li><strong>Reputational Damage:</strong> Frequent errors in documents like invoices and checks can make a business appear unprofessional and untrustworthy to clients and partners.</li>
        <li><strong>Audit and Compliance Issues:</strong> Inaccurate records can lead to serious problems during financial audits and may result in penalties for non-compliance with regulations.</li>
      </ul>
      
      <h3 class="font-bold text-xl mt-6">Best Practices for Financial Accuracy</h3>
      <p>To safeguard your transactions, adopt these fundamental practices:</p>
      <ol class="list-decimal ps-5 space-y-2">
        <li><strong>The Four-Eyes Principle:</strong> Always have a second person review any important financial document before it is finalized or sent. A fresh pair of eyes can often catch mistakes you've overlooked.</li>
        <li><strong>Leverage Technology:</strong> Manually writing amounts in words is prone to error. Use a reliable digital tool like our <a href="/number-converter" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">Number Converter</a> to generate accurate, standardized text for any number, ensuring perfect consistency between numerals and words.</li>
        <li><strong>Be Explicit with Currency:</strong> Always specify the currency clearly (e.g., "US Dollars," "Saudi Riyals") to avoid ambiguity in international transactions.</li>
        <li><strong>Maintain Clarity:</strong> When writing by hand, ensure every number and word is perfectly legible. Avoid abbreviations or jargon that could be misinterpreted.</li>
        <li><strong>Secure the Amount:</strong> End the written amount with the word "Only" (or its equivalent, "فقط لا غير" in Arabic) to prevent fraudulent additions or alterations.</li>
      </ol>

      <p class="mt-6">Ultimately, taking a few extra moments to ensure accuracy is an investment that pays dividends in security, professionalism, and peace of mind. By integrating these practices and leveraging modern tools, you can fortify your financial operations against the costly risk of simple human error.</p>
    `,
  },
  {
    id: '2',
    title: 'الفروق بين كتابة الأرقام بالعربية والإنجليزية',
    titleEn: 'Differences Between Writing Numbers in Arabic and English',
    summary: 'نظرة على القواعد النحوية التي تحكم كتابة الأرقام في كلتا اللغتين.',
    summaryEn: 'A look at the grammatical rules that govern writing numbers in both languages.',
    content: `
      <p>تختلف قواعد كتابة الأرقام بشكل كبير بين اللغات، وتعتبر الفروق بين العربية والإنجليزية مثالاً ممتازاً على هذا التعقيد. فبينما تتبع الإنجليزية نظامًا مباشرًا نسبيًا، تتميز العربية بنظام غني بالقواعد النحوية التي تعتمد على العدد والمعدود وجنسه.</p>

      <h3 class="font-bold text-xl mt-6">القواعد في اللغة الإنجليزية: البساطة والوضوح</h3>
      <p>يعتمد النظام الإنجليزي بشكل أساسي على صيغ المفرد والجمع البسيطة. القاعدة الأساسية هي:</p>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>الرقم 1:</strong> يتبعه اسم مفرد (e.g., "One dollar").</li>
        <li><strong>أي رقم آخر:</strong> يتبعه اسم جمع (e.g., "Two dollars," "One hundred dollars").</li>
        <li><strong>الأعداد المركبة:</strong> يتم ربط العشرات والآحاد بواصلة (e.g., "twenty-five").</li>
      </ul>
      <p>هذه البساطة تجعل كتابة الأرقام بالإنجليزية أقل عرضة للخطأ، ولكنها لا تزال تتطلب الدقة في التهجئة.</p>

      <h3 class="font-bold text-xl mt-6">القواعد في اللغة العربية: الدقة النحوية</h3>
      <p>اللغة العربية أكثر تعقيدًا وتتطلب مراعاة عدة عوامل:</p>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>1 و 2:</strong> يطابق العدد المعدود في الجنس (ذكر أو أنثى). نقول "ريال واحد" و "ليرة واحدة"، و "ريالان اثنان" و "ليرتان اثنتان".</li>
        <li><strong>3 إلى 10:</strong> يخالف العدد المعدود في الجنس. يكون المعدود بصيغة الجمع المجرور. نقول "ثلاثة ريالات" (ريال مذكر، ثلاثة مؤنث) و "ثلاث ليرات" (ليرة مؤنث، ثلاث مذكر).</li>
        <li><strong>11 و 12:</strong> يطابق العدد بجزأيه المعدود في الجنس. نقول "أحد عشر ريالاً" و "إحدى عشرة ليرة".</li>
        <li><strong>13 إلى 19:</strong> الجزء الأول يخالف المعدود والجزء الثاني يطابق. نقول "ثلاثة عشر ريالاً" و "ثلاث عشرة ليرة".</li>
        <li><strong>ألفاظ العقود (20-90):</strong> تظل بصيغة واحدة بغض النظر عن جنس المعدود، ويكون المعدود مفردًا منصوبًا. نقول "عشرون ريالاً" و "عشرون ليرة".</li>
      </ul>

      <h3 class="font-bold text-xl mt-6">جدول مقارنة سريع</h3>
      <table class="w-full text-left border-collapse mt-4">
        <thead class="bg-gray-100 dark:bg-slate-700">
          <tr>
            <th class="border p-3 dark:border-slate-600 text-gray-700 dark:text-gray-200 font-bold">القاعدة</th>
            <th class="border p-3 dark:border-slate-600 text-gray-700 dark:text-gray-200 font-bold">مثال بالعربية (ريال)</th>
            <th class="border p-3 dark:border-slate-600 text-gray-700 dark:text-gray-200 font-bold">مثال بالإنجليزية (Dollar)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border p-3 dark:border-slate-600 text-gray-800 dark:text-gray-300">2</td>
            <td class="border p-3 dark:border-slate-600 text-gray-800 dark:text-gray-300">ريالان اثنان</td>
            <td class="border p-3 dark:border-slate-600 text-gray-800 dark:text-gray-300">Two dollars</td>
          </tr>
          <tr>
            <td class="border p-3 dark:border-slate-600 text-gray-800 dark:text-gray-300">7</td>
            <td class="border p-3 dark:border-slate-600 text-gray-800 dark:text-gray-300">سبعة ريالات</td>
            <td class="border p-3 dark:border-slate-600 text-gray-800 dark:text-gray-300">Seven dollars</td>
          </tr>
           <tr>
            <td class="border p-3 dark:border-slate-600 text-gray-800 dark:text-gray-300">25</td>
            <td class="border p-3 dark:border-slate-600 text-gray-800 dark:text-gray-300">خمسة وعشرون ريالاً</td>
            <td class="border p-3 dark:border-slate-600 text-gray-800 dark:text-gray-300">Twenty-five dollars</td>
          </tr>
        </tbody>
      </table>

      <p class="mt-6">هذه الفروق الدقيقة هي السبب في أن التحويل اليدوي للأرقام باللغة العربية يمكن أن يكون تحديًا كبيرًا. أدوات مثل <a href="/number-converter" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">صيغة مالية</a> مصممة خصيصًا للتعامل مع هذه التعقيدات النحوية تلقائيًا، مما يضمن الدقة والموثوقية في جميع مستنداتك المالية.</p>
    `,
    contentEn: `
      <p>The rules for writing numbers vary significantly between languages, and the differences between English and Arabic are a prime example of this complexity. While English follows a relatively straightforward system, Arabic boasts a rich grammatical structure that depends on the number, the item being counted, and its gender.</p>

      <h3 class="font-bold text-xl mt-6">The Rules in English: Simplicity and Clarity</h3>
      <p>The English system primarily relies on simple singular and plural forms. The basic rule is:</p>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>Number 1:</strong> Followed by a singular noun (e.g., "One dollar").</li>
        <li><strong>Any other number:</strong> Followed by a plural noun (e.g., "Two dollars," "One hundred dollars").</li>
        <li><strong>Compound numbers:</strong> Tens and units are connected with a hyphen (e.g., "twenty-five").</li>
      </ul>
      <p>This simplicity makes writing numbers in English less prone to error, but still requires precision in spelling.</p>

      <h3 class="font-bold text-xl mt-6">The Rules in Arabic: Grammatical Precision</h3>
      <p>The Arabic language is more complex and requires consideration of several factors:</p>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>1 and 2:</strong> The number agrees with the gender of the noun. We say "riyal wahid" (masculine) and "lira wahida" (feminine).</li>
        <li><strong>3 to 10:</strong> The number has the opposite gender of the noun. The noun is in the plural form. We say "thalathatu riyalin" (riyal is masculine, thalatha is feminine) and "thalathu liratin" (lira is feminine, thalath is masculine).</li>
        <li><strong>11 and 12:</strong> Both parts of the number agree with the gender of the noun. We say "ahada 'ashara riyalan".</li>
        <li><strong>13 to 19:</strong> The first part has the opposite gender, and the second part agrees. We say "thalathata 'ashara riyalan".</li>
        <li><strong>Tens (20-90):</strong> These have a fixed form regardless of the noun's gender, and the noun is singular. We say "'ishruna riyalan" and "'ishruna liratan".</li>
      </ul>

      <h3 class="font-bold text-xl mt-6">Quick Comparison Table</h3>
      <table class="w-full text-left border-collapse mt-4">
        <thead class="bg-gray-100 dark:bg-slate-700">
          <tr>
            <th class="border p-3 dark:border-slate-600 text-gray-700 dark:text-gray-200 font-bold">Rule</th>
            <th class="border p-3 dark:border-slate-600 text-gray-700 dark:text-gray-200 font-bold">Example in Arabic (Riyal)</th>
            <th class="border p-3 dark:border-slate-600 text-gray-700 dark:text-gray-200 font-bold">Example in English (Dollar)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="border p-3 dark:border-slate-600 text-gray-800 dark:text-gray-300">2</td>
            <td class="border p-3 dark:border-slate-600 text-gray-800 dark:text-gray-300">ريالان اثنان (Riyalan ithnan)</td>
            <td class="border p-3 dark:border-slate-600 text-gray-800 dark:text-gray-300">Two dollars</td>
          </tr>
          <tr>
            <td class="border p-3 dark:border-slate-600 text-gray-800 dark:text-gray-300">7</td>
            <td class="border p-3 dark:border-slate-600 text-gray-800 dark:text-gray-300">سبعة ريالات (Sab'atu riyalin)</td>
            <td class="border p-3 dark:border-slate-600 text-gray-800 dark:text-gray-300">Seven dollars</td>
          </tr>
          <tr>
            <td class="border p-3 dark:border-slate-600 text-gray-800 dark:text-gray-300">25</td>
            <td class="border p-3 dark:border-slate-600 text-gray-800 dark:text-gray-300">خمسة وعشرون ريالاً (Khamsatun wa 'ishruna riyalan)</td>
            <td class="border p-3 dark:border-slate-600 text-gray-800 dark:text-gray-300">Twenty-five dollars</td>
          </tr>
        </tbody>
      </table>

      <p class="mt-6">These nuances are why manually converting numbers in Arabic can be a significant challenge. Tools like <a href="/number-converter" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">Financial Formula</a> are specifically designed to handle these grammatical complexities automatically, ensuring accuracy and reliability in all your financial documents.</p>
    `,
  },
  {
    id: '3',
    title: 'الأخطاء الشائعة عند كتابة المبالغ المالية',
    titleEn: 'Common Mistakes When Writing Financial Amounts',
    summary: 'تعرف على أكثر الأخطاء شيوعًا عند كتابة الأرقام في المستندات المالية وكيف يمكن لأداتنا مساعدتك على تجنبها.',
    summaryEn: 'Learn about the most common errors when writing numbers in financial documents and how our tool can help you avoid them.',
    content: `
      <p>حتى أكثر المهنيين خبرة يمكن أن يقعوا في أخطاء بسيطة عند كتابة المبالغ المالية، ولكن هذه الأخطاء قد تكون مكلفة. الوعي بها هو الخطوة الأولى نحو تجنبها، واستخدام الأدوات المناسبة هو خطوتك التالية لضمان الدقة الكاملة.</p>
      
      <h3 class="font-bold text-xl mt-6">أشهر 5 أخطاء يجب الانتباه إليها:</h3>
      <div class="space-y-4">
        <div>
          <h4 class="font-semibold">1. عدم تطابق الأرقام مع الكلمات:</h4>
          <p>هذا هو الخطأ الأكثر شيوعًا وخطورة. قد تكتب "1,550" بالأرقام، ولكن "ألف وخمسمائة" بالكلمات. في معظم الأنظمة القانونية، يتم الاعتداد بالمبلغ المكتوب بالكلمات عند وجود تعارض. هذا الخطأ يمكن أن يؤدي إلى خسارة مالية مباشرة.</p>
          <p class="text-sm text-teal-600 dark:text-teal-400 mt-1"><strong>الحل:</strong> استخدم <a href="/number-converter" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">أداة تحويل آلية</a> لضمان التطابق بنسبة 100%.</p>
        </div>
        <div>
          <h4 class="font-semibold">2. إهمال الكسور أو كتابتها بشكل خاطئ:</h4>
          <p>كتابة "مائة ريال و 50 هللة" بدلاً من "مائة ريال وخمسون هللة" قد يخلق التباسًا. الدقة في كتابة الوحدات الفرعية للعملة (مثل الهللات أو القروش أو السنتات) لا تقل أهمية عن الوحدات الأساسية.</p>
           <p class="text-sm text-teal-600 dark:text-teal-400 mt-1"><strong>الحل:</strong> أداتنا تتعامل مع الكسور تلقائيًا وتستخدم الصيغ النحوية الصحيحة لاسم العملة ووحداتها الفرعية.</p>
        </div>
        <div>
          <h4 class="font-semibold">3. عدم تحديد العملة بوضوح:</h4>
          <p>كتابة "ألف ريال" فقط قد لا تكون كافية إذا كانت الصفقة دولية أو بين أطراف تتعامل بعملات متعددة. هل هو "ريال سعودي" أم "ريال قطري" أم "ريال عماني"؟ هذا الغموض يمكن أن يؤدي إلى نزاعات.</p>
           <p class="text-sm text-teal-600 dark:text-teal-400 mt-1"><strong>الحل:</strong> حدد دائمًا اسم العملة بالكامل. تتيح لك أداتنا الاختيار من قائمة شاملة لضمان الوضوح.</p>
        </div>
        <div>
          <h4 class="font-semibold">4. الكتابة اليدوية غير الواضحة:</h4>
          <p>في الشيكات والمستندات المكتوبة بخط اليد، يمكن أن يتم تفسير رقم '7' على أنه '1' أو '5' على أنها '6'، مما يسبب مشاكل كبيرة في المعالجة البنكية أو عند تنفيذ العقد.</p>
           <p class="text-sm text-teal-600 dark:text-teal-400 mt-1"><strong>الحل:</strong> اطبع المستندات كلما أمكن. إذا كان لا بد من الكتابة اليدوية، فاكتب ببطء ووضوح.</p>
        </div>
        <div>
          <h4 class="font-semibold">5. نسيان عبارة "فقط لا غير":</h4>
          <p>هذه العبارة البسيطة في نهاية المبلغ المكتوب بالحروف ليست مجرد شكليات. إنها إجراء أمني مهم يغلق الباب أمام أي محاولة للاحتيال أو التعديل على المبلغ بإضافة كلمات أخرى.</p>
           <p class="text-sm text-teal-600 dark:text-teal-400 mt-1"><strong>الحل:</strong> تقوم أداتنا بإضافة هذه العبارة تلقائيًا في النسخة العربية وكلمة "Only" في النسخة الإنجليزية.</p>
        </div>
      </div>
      <p class="mt-6">تم تصميم أداة "صيغة مالية" لمعالجة هذه المشاكل بشكل مباشر. فهي تضمن تطابقًا تامًا، وتتعامل مع الكسور بدقة، وتضيف عبارات الحماية تلقائيًا، مما يمنحك مستندات مالية موثوقة ومحصنة ضد الأخطاء.</p>
    `,
    contentEn: `
      <p>Even the most experienced professionals can make simple mistakes when writing financial amounts, but these mistakes can be costly. Being aware of them is the first step toward avoidance, and using the right tools is your next step to ensure complete accuracy.</p>
      
      <h3 class="font-bold text-xl mt-6">Top 5 Mistakes to Watch Out For:</h3>
      <div class="space-y-4">
        <div>
          <h4 class="font-semibold">1. Mismatched Numbers and Words:</h4>
          <p>This is the most common and dangerous error. You might write "1,550" in figures but "One thousand five hundred" in words. In most legal systems, the amount written in words prevails in case of a discrepancy. This error can lead to direct financial loss.</p>
          <p class="text-sm text-teal-600 dark:text-teal-400 mt-1"><strong>Solution:</strong> Use an <a href="/number-converter" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">automated conversion tool</a> to ensure 100% consistency.</p>
        </div>
        <div>
          <h4 class="font-semibold">2. Neglecting or Incorrectly Writing Fractions:</h4>
          <p>Writing "one hundred dollars and 50 cent" instead of "one hundred dollars and fifty cents" can create ambiguity. Precision in writing the currency's fractional units (like cents or piasters) is just as important as the main units.</p>
          <p class="text-sm text-teal-600 dark:text-teal-400 mt-1"><strong>Solution:</strong> Our tool automatically handles fractions and uses the correct grammatical forms for the currency name and its subunits.</p>
        </div>
        <div>
          <h4 class="font-semibold">3. Not Specifying the Currency Clearly:</h4>
          <p>Simply writing "one thousand riyals" may not be sufficient if the transaction is international or between parties dealing with multiple currencies. Is it a "Saudi Riyal," "Qatari Riyal," or "Omani Riyal"? This ambiguity can lead to disputes.</p>
          <p class="text-sm text-teal-600 dark:text-teal-400 mt-1"><strong>Solution:</strong> Always state the full currency name. Our tool allows you to choose from a comprehensive list to ensure clarity.</p>
        </div>
        <div>
          <h4 class="font-semibold">4. Illegible Handwriting:</h4>
          <p>In handwritten checks and documents, a '7' can be mistaken for a '1', or a '5' for a '6', causing significant problems in bank processing or contract execution.</p>
          <p class="text-sm text-teal-600 dark:text-teal-400 mt-1"><strong>Solution:</strong> Print documents whenever possible. If you must write by hand, do so slowly and clearly.</p>
        </div>
        <div>
          <h4 class="font-semibold">5. Forgetting the Word "Only":</h4>
          <p>This simple word at the end of the written amount is not just a formality. It's an important security measure that closes the door to fraudulent alterations by adding other words.</p>
          <p class="text-sm text-teal-600 dark:text-teal-400 mt-1"><strong>Solution:</strong> Our tool automatically adds "Only" in the English version and its equivalent "فقط لا غير" in the Arabic version.</p>
        </div>
      </div>
      <p class="mt-6">The "Financial Formula" tool is designed to address these issues directly. It ensures perfect matching, handles fractions with precision, and automatically adds protective phrases, giving you reliable and error-proof financial documents.</p>
    `,
  },
  {
    id: '4',
    title: 'المتطلبات القانونية لكتابة الأرقام في العقود',
    titleEn: 'Legal Requirements for Writing Numbers in Contracts',
    summary: 'فهم لماذا تعتبر كتابة الأرقام بالحروف شرطًا أساسيًا في العقود وكيف يحمي ذلك حقوقك.',
    summaryEn: 'Understand why writing numbers in words is a fundamental requirement in contracts and how it protects your rights.',
    content: `
      <p>في عالم القانون، الوضوح هو الملك. العقود هي وثائق ملزمة قانونًا، وأي غموض فيها يمكن أن يؤدي إلى نزاعات مكلفة. لهذا السبب، تولي الأنظمة القانونية في جميع أنحاء العالم أهمية قصوى للطريقة التي تُكتب بها المبالغ المالية، حيث إنها غالبًا ما تكون جوهر الالتزام التعاقدي.</p>
      
      <h3 class="font-bold text-xl mt-6">مبدأ "الكلمات تسود على الأرقام"</h3>
      <p>أحد المبادئ القانونية الراسخة في العديد من الولايات القضائية هو أنه في حالة وجود تعارض بين المبلغ المكتوب بالأرقام والمبلغ المكتوب بالحروف في مستند قانوني (مثل شيك أو عقد)، فإن المبلغ المكتوب <strong>بالحروف</strong> هو الذي يتم الاعتداد به. السبب بسيط ومنطقي:</p>
      <ul class="list-disc ps-5 space-y-2">
          <li><strong>صعوبة التزوير:</strong> من الأصعب بكثير تغيير أو تزوير مبلغ مكتوب بالحروف مقارنة بتغيير رقم أو إضافة صفر.</li>
          <li><strong>تقليل الخطأ البشري:</strong> كتابة المبلغ بالحروف تجبر الكاتب على التفكير في القيمة بشكل أكثر تركيزًا، مما يقلل من احتمالية الأخطاء المطبعية.</li>
      </ul>

      <h3 class="font-bold text-xl mt-6">دراسة حالة: أهمية الوضوح</h3>
      <p>في قضية افتراضية، حررت شركة مقاولات فاتورة لعميل بمبلغ "1,000,500" ريال. لكن في النص، كُتب المبلغ "مليون وخمسمائة ريال". عندما نشأ نزاع، اعتبرت المحكمة أن المبلغ الملزم هو 1,000,500 ريال لأن النص المكتوب كان غامضًا (هل هو مليون و500 أم خمسمائة ألف؟)، بينما كانت الأرقام واضحة في هذه الحالة الاستثنائية. هذا يوضح أن الهدف النهائي هو الوضوح المطلق، وكتابة المبلغ بالطريقتين هو أفضل وسيلة لتحقيقه.</p>
      
      <h3 class="font-bold text-xl mt-6">أفضل الممارسات القانونية:</h3>
      <p>لتحصين مستنداتك قانونيًا، اتبع هذه الإرشادات:</p>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>اكتب المبلغ دائمًا بالطريقتين:</strong> لا تكتفِ بكتابة المبلغ بالأرقام فقط. قم دائمًا بتضمين الصيغة النصية الكاملة.</li>
        <li><strong>ضمان التطابق التام:</strong> استخدم أداة موثوقة مثل <a href="/number-converter" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">صيغة مالية</a> لضمان عدم وجود أي اختلاف بين الصيغتين الرقمية والنصية.</li>
        <li><strong>كن محددًا بشأن العملة:</strong> حدد اسم العملة ورمزها (على سبيل المثال، "ريال سعودي (SAR)") لتجنب أي التباس حول العملة المقصودة.</li>
        <li><strong>استخدم لغة واضحة:</strong> تجنب الاختصارات أو المصطلحات غير الشائعة التي يمكن أن يساء تفسيرها. الوضوح هو أفضل حماية لك.</li>
        <li><strong>إضافة عبارات الحماية:</strong> استخدم عبارات مثل "فقط لا غير" لإغلاق أي ثغرات محتملة للتلاعب بالنص.</li>
      </ul>
      <p class="mt-4">إن الالتزام بهذه الممارسات لا يجعل عقودك أكثر احترافية فحسب، بل يوفر لك أيضًا حماية قانونية قوية. استخدام <a href="/contract-clause" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">أدوات صياغة البنود</a> يضمن أنك تتبع هذه المعايير بسهولة ودقة.</p>
    `,
    contentEn: `
      <p>In the legal world, clarity is king. Contracts are legally binding documents, and any ambiguity within them can lead to costly disputes. This is why legal systems worldwide place extreme importance on the way financial amounts are written, as they are often the core of a contractual obligation.</p>
      
      <h3 class="font-bold text-xl mt-6">The "Words Over Figures" Rule</h3>
      <p>A well-established legal principle in many jurisdictions is that if there is a discrepancy between an amount written in numerals (figures) and the same amount written in words in a legal document (like a check or contract), the amount written in <strong>words</strong> is considered the binding one. The reasoning is simple and logical:</p>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>Difficulty of Forgery:</strong> It is much harder to alter or forge an amount written out in words compared to changing a numeral or adding a zero.</li>
        <li><strong>Reduced Human Error:</strong> The act of writing the amount in full forces the writer to think about the value more carefully, reducing the likelihood of typos.</li>
      </ul>
      
      <h3 class="font-bold text-xl mt-6">Case Study: The Importance of Clarity</h3>
      <p>In a hypothetical case, a construction company issued an invoice to a client for "1,000,500" dollars. However, in the text, the amount was written as "One million and five hundred dollars". When a dispute arose, the court might rule in favor of the numerals in this exceptional case because the text was ambiguous (is it 1,000,500 or 1,500,000?). This illustrates that the ultimate goal is absolute clarity, and writing the amount both ways is the best method to achieve it.</p>

      <h3 class="font-bold text-xl mt-6">Legal Best Practices:</h3>
      <p>To legally fortify your documents, follow these guidelines:</p>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>Always Write the Amount Both Ways:</strong> Never settle for just writing the amount in figures. Always include the full text version.</li>
        <li><strong>Ensure Perfect Consistency:</strong> Use a reliable tool like our <a href="/number-converter" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">Number Converter</a> to ensure there is zero discrepancy between the numerical and text versions.</li>
        <li><strong>Be Specific About the Currency:</strong> State the currency name and code (e.g., "Saudi Riyal (SAR)") to avoid any confusion about the intended currency.</li>
        <li><strong>Use Clear Language:</strong> Avoid abbreviations or uncommon terms that could be misinterpreted. Clarity is your best defense.</li>
        <li><strong>Add Protective Phrases:</strong> Use phrases like "Only" at the end of the amount to close any potential loopholes for tampering.</li>
      </ul>
      <p class="mt-4">Adhering to these practices not only makes your contracts more professional but also provides you with strong legal protection. Using our <a href="/contract-clause" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">Clause Helper</a> ensures you follow these standards with ease and accuracy.</p>
    `,
  },
  {
    id: '5',
    title: 'كيفية استخدام صيغة مالية لمختلف العملات',
    titleEn: 'How to Use Financial Formula for Different Currencies',
    summary: 'دليل خطوة بخطوة للاستفادة من دعم الأداة متعدد العملات، مع أمثلة توضح الفروق الدقيقة في كل لغة.',
    summaryEn: 'A step-by-step guide to leveraging the tool\'s multi-currency support, with examples showing the nuances for each language.',
    content: `
      <p>تم تصميم <a href="/number-converter" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">أداة تحويل الأرقام</a> لتكون أداة عالمية، قادرة على التعامل مع مجموعة واسعة من العملات وقواعدها النحوية الفريدة باللغة العربية. الاستفادة من هذه الميزة أمر بسيط ومباشر، مما يوفر عليك الوقت والجهد ويضمن الدقة بغض النظر عن العملة التي تتعامل بها.</p>

      <h3 class="font-bold text-xl mt-6">دليل الاستخدام خطوة بخطوة:</h3>
      <ol class="list-decimal ps-5 space-y-2">
        <li><strong>أدخل المبلغ:</strong> اكتب المبلغ الذي تريد تحويله في حقل "أدخل المبلغ بالأرقام". يمكنك تضمين الكسور العشرية (مثل 1500.25).</li>
        <li><strong>اختر العملة:</strong> انقر على القائمة المنسدلة "اختر العملة". ستجد قائمة شاملة بالعملات العالمية.</li>
        <li><strong>استخدم البحث السريع:</strong> لتوفير الوقت، ابدأ في كتابة اسم العملة أو رمزها (مثل "درهم" أو "AED") في حقل البحث داخل القائمة لتصفية النتائج والوصول إلى عملتك بسرعة.</li>
        <li><strong>شاهد النتيجة الفورية:</strong> بمجرد اختيارك للعملة، ستقوم الأداة تلقائيًا بتحديث النص الناتج ليعكس الوحدات الصحيحة (مثل الريالات والهللات، أو الدينارات والفلوس) والقواعد النحوية المناسبة لها.</li>
      </ol>

      <h3 class="font-bold text-xl mt-6">لماذا هذا مهم؟ أمثلة عملية</h3>
      <p>كل عملة لها هيكل فريد. أداتنا تتعامل مع هذه الفروق الدقيقة تلقائيًا:</p>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>الدينار الكويتي (KWD):</strong> يتعامل مع 3 منازل عشرية (فلوس).
          <ul><li><em>الإدخال:</em> 10.125</li><li><em>الناتج:</em> "عشرة دنانير ومائة وخمسة وعشرون فلسًا"</li></ul>
        </li>
        <li><strong>الريال السعودي (SAR):</strong> يتعامل مع منزلتين عشريتين (هللات).
          <ul><li><em>الإدخال:</em> 2.00</li><li><em>الناتج:</em> "ريالان" (لاحظ استخدام صيغة المثنى الصحيحة بدلاً من "اثنان ريال").</li></ul>
        </li>
        <li><strong>الين الياباني (JPY):</strong> لا يحتوي على وحدات فرعية.
          <ul><li><em>الإدخال:</em> 500.75</li><li><em>الناتج:</em> "خمسمائة ين" (تتجاهل الأداة الكسور العشرية تلقائيًا).</li></ul>
        </li>
        <li><strong>الجنيه المصري (EGP):</strong> الوحدات الفرعية هي القروش.
           <ul><li><em>الإدخال:</em> 120.75</li><li><em>الناتج:</em> "مائة وعشرون جنيهًا وخمسة وسبعون قرشًا".</li></ul>
        </li>
      </ul>

      <p class="mt-4">هذه القدرة على التكيف التلقائي هي ما يجعل "صيغة مالية" أداة قوية. لم تعد بحاجة إلى حفظ أسماء الوحدات الفرعية أو القواعد النحوية المعقدة لكل عملة؛ فالأداة تقوم بكل العمل الشاق نيابة عنك، مما يضمن دقة مستنداتك بغض النظر عن السوق الذي تعمل فيه.</p>
    `,
    contentEn: `
      <p>Our <a href="/number-converter" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">Number Converter</a> is designed to be a global tool, capable of handling a wide range of currencies and their unique grammatical rules. Leveraging this feature is simple and straightforward, saving you time and effort while ensuring accuracy regardless of the currency you are dealing with.</p>
      
      <h3 class="font-bold text-xl mt-6">Step-by-Step Guide:</h3>
      <ol class="list-decimal ps-5 space-y-2">
        <li><strong>Enter the Amount:</strong> Type the amount you want to convert into the "Enter amount in numbers" field. You can include decimals (e.g., 1500.25).</li>
        <li><strong>Select the Currency:</strong> Click on the "Select Currency" dropdown. You will find a comprehensive list of world currencies.</li>
        <li><strong>Use Quick Search:</strong> To save time, start typing the currency name or code (e.g., "Dirham" or "AED") in the search box within the list to filter the results and find your currency quickly.</li>
        <li><strong>See the Instant Result:</strong> As soon as you select a currency, the tool will automatically update the output text to reflect the correct units (e.g., Riyals and Halalas, or Dinars and Fils) and their corresponding grammatical rules.</li>
      </ol>

      <h3 class="font-bold text-xl mt-6">Why Does This Matter? Practical Examples</h3>
      <p>Each currency has a unique structure. Our tool handles these nuances automatically:</p>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>Kuwaiti Dinar (KWD):</strong> Handles 3 decimal places (fils).
          <ul><li><em>Input:</em> 10.125</li><li><em>Output:</em> "Ten dinars and one hundred twenty-five fils"</li></ul>
        </li>
        <li><strong>Saudi Riyal (SAR):</strong> Handles 2 decimal places (halalas).
          <ul><li><em>Input:</em> 2.00</li><li><em>Output:</em> "Two riyals" (Note the correct pluralization instead of "Two riyal").</li></ul>
        </li>
        <li><strong>Japanese Yen (JPY):</strong> Has no fractional units.
          <ul><li><em>Input:</em> 500.75</li><li><em>Output:</em> "Five hundred yen" (The tool automatically ignores the decimals).</li></ul>
        </li>
         <li><strong>US Dollar (USD):</strong> Uses cents as fractional units.
           <ul><li><em>Input:</em> 120.75</li><li><em>Output:</em> "One hundred twenty dollars and seventy-five cents".</li></ul>
        </li>
      </ul>
      <p class="mt-4">This ability to adapt automatically is what makes "Financial Formula" so powerful. You no longer need to memorize the names of fractional units or the complex grammatical rules for each currency; the tool does all the heavy lifting for you, ensuring your documents are accurate regardless of the market you operate in.</p>
    `,
  },
  {
    id: '6',
    title: 'دليلك لإنشاء فواتير احترافية',
    titleEn: 'Your Guide to Creating Professional Invoices',
    summary: 'تعلم كيفية استخدام مولد الفواتير لإنشاء مستندات مالية واضحة واحترافية تعكس جودة عملك.',
    summaryEn: 'Learn how to use the invoice generator to create clear, professional financial documents that reflect the quality of your work.',
    content: `
      <p>الفاتورة ليست مجرد طلب للدفع؛ إنها وثيقة تمثل علامتك التجارية واحترافيتك. فاتورة جيدة التنظيم وواضحة تترك انطباعًا إيجابيًا لدى العملاء، وتسهل عملية الدفع، وتعمل كسجل قانوني للمعاملة. إليك كيف يساعدك <a href="/invoice-generator" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">مولد الفواتير</a> الخاص بنا على تحقيق ذلك بفعالية.</p>
      
      <h3 class="font-bold text-xl mt-6">عناصر الفاتورة المثالية:</h3>
      <p>لإنشاء فاتورة لا تترك مجالاً للشك، تأكد من تضمين هذه العناصر الأساسية:</p>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>بيانات واضحة للطرفين:</strong> تأكد من أن اسمك التجاري وعنوانك وبيانات الاتصال الخاصة بك، بالإضافة إلى بيانات العميل، مكتوبة بالكامل وبشكل صحيح. استخدام شعار شركتك يضيف لمسة من المصداقية والاحترافية.</li>
        <li><strong>تحديد فريد:</strong> يجب أن تحتوي كل فاتورة على رقم فريد (مثل INV-001) وتاريخ إصدار واضح. هذا ضروري للتتبع، والمحاسبة، وفي حالة وجود أي نزاعات مستقبلية.</li>
        <li><strong>بنود مفصلة وشفافة:</strong> بدلاً من مبلغ إجمالي واحد، قم بتقسيم الخدمات أو المنتجات إلى بنود منفصلة. لكل بند، حدد الوصف، والكمية، وسعر الوحدة، والمبلغ الإجمالي للبند. هذا يعزز الشفافية ويجيب على أسئلة العميل قبل أن يسألها.</li>
        <li><strong>المبلغ الإجمالي كتابةً:</strong> هذه ميزة فريدة في أداتنا. يتم تحويل المبلغ الإجمالي إلى نص تلقائيًا باستخدام <a href="/number-converter" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">محول الأرقام</a> المدمج ووضعه في الفاتورة. هذا يضيف طبقة من الحماية القانونية ويمنع الأخطاء.</li>
        <li><strong>شروط دفع واضحة:</strong> حدد بوضوح الموعد النهائي للدفع (على سبيل المثال، "يستحق خلال 30 يومًا") وطرق الدفع المقبولة. هذا يمنع التأخير في السداد.</li>
      </ul>
      
      <h3 class="font-bold text-xl mt-6">لماذا استخدام مولد الفواتير؟</h3>
      <p>بدلاً من إنشاء الفواتير يدويًا في كل مرة، يوفر لك المولد الوقت ويضمن الاتساق. يقوم تلقائيًا بحساب المجاميع، وتحويل الأرقام إلى نصوص، وتنسيق المستند بشكل احترافي. كل ما عليك فعله هو ملء الحقول.</p>
      
      <blockquote class="border-s-4 border-teal-500 ps-4 py-2 my-4 bg-gray-50 dark:bg-slate-800">
        <p class="italic"><strong>نصيحة احترافية:</strong> قم بتنزيل الفاتورة بصيغة PDF وأرسلها كمرفق في بريد إلكتروني. هذا يبدو أكثر احترافية من إرسال فاتورة في نص البريد الإلكتروني نفسه ويصعب تعديله.</p>
      </blockquote>
      
      <p class="mt-4">باستخدام <a href="/invoice-generator" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">مولد الفواتير</a>، يمكنك إنشاء مستندات تفي بكل هذه المعايير في دقائق. ابدأ في ترك انطباع رائع لدى عملائك وتبسيط عملياتك المالية اليوم!</p>
    `,
    contentEn: `
      <p>An invoice is more than just a request for payment; it's a document that represents your brand and professionalism. A well-organized, clear invoice leaves a positive impression on clients, facilitates a smooth payment process, and serves as a legal record of the transaction. Here’s how our <a href="/invoice-generator" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">invoice generator</a> helps you achieve that effectively.</p>
      
      <h3 class="font-bold text-xl mt-6">Elements of a Perfect Invoice:</h3>
      <p>To create an invoice that leaves no room for doubt, ensure it includes these essential elements:</p>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>Clear Party Information:</strong> Ensure your business name, address, and contact details, as well as the client's information, are fully and correctly stated. Using your company logo adds a touch of credibility and professionalism.</li>
        <li><strong>Unique Identification:</strong> Every invoice must have a unique number (e.g., INV-001) and a clear issue date. This is crucial for tracking, accounting, and in case of any future disputes.</li>
        <li><strong>Itemized and Transparent List:</strong> Instead of a single total amount, break down services or products into separate line items. For each item, specify the description, quantity, rate per unit, and the total amount for that line. This enhances transparency and answers client questions before they're asked.</li>
        <li><strong>Total Amount in Words:</strong> This is a standout feature of our tool. The total amount is automatically converted to text using the integrated <a href="/number-converter" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">Number Converter</a> and placed on the invoice. This adds a layer of legal protection and prevents errors.</li>
        <li><strong>Clear Payment Terms:</strong> Clearly state the payment due date (e.g., "Due within 30 days") and the accepted payment methods. This prevents payment delays.</li>
      </ul>

      <h3 class="font-bold text-xl mt-6">Why Use an Invoice Generator?</h3>
      <p>Instead of creating invoices manually every time, a generator saves you time and ensures consistency. It automatically calculates totals, converts numbers to words, and formats the document professionally. All you need to do is fill in the fields.</p>
      
      <blockquote class="border-s-4 border-teal-500 ps-4 py-2 my-4 bg-gray-50 dark:bg-slate-800">
        <p class="italic"><strong>Pro Tip:</strong> Download the invoice as a PDF and send it as an email attachment. This looks more professional than sending an invoice in the body of an email and is harder to alter.</p>
      </blockquote>
      
      <p class="mt-4">Using the <a href="/invoice-generator" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">invoice generator</a>, you can create documents that meet all these criteria in minutes. Start making a great impression on your clients and streamlining your financial operations today!</p>
    `,
  },
  {
    id: '7',
    title: 'صياغة بنود مالية محكمة في عقودك',
    titleEn: 'Crafting Airtight Financial Clauses in Your Contracts',
    summary: 'اكتشف كيف يمكن لمساعد صياغة البنود المالية أن يحول الطريقة التي تكتب بها العقود، مما يضيف الدقة والحماية القانونية.',
    summaryEn: 'Discover how the contract clause helper can transform the way you write contracts, adding precision and legal protection.',
    content: `
      <p>البند المالي هو قلب أي عقد تجاري. أي غموض أو نقص في هذا البند يمكن أن يؤدي إلى نزاعات طويلة ومكلفة. تم تصميم <a href="/contract-clause" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">مساعد صياغة البنود المالية</a> لتزويدك بصياغات قوية ومفصلة تقلل من المخاطر وتزيد من الوضوح، وتحول جملة بسيطة إلى فقرة قانونية محكمة.</p>
      
      <h3 class="font-bold text-xl mt-6">من الغموض إلى الوضوح: مثال عملي</h3>
      <p>لنأخذ مثالاً بسيطًا. بدلاً من كتابة بند غامض مثل:</p>
      <blockquote class="border-s-4 border-red-500 ps-4 py-2 my-4 bg-red-50 dark:bg-red-900/20">
        <p class="italic"><strong>بند ضعيف:</strong> "يدفع الطرف الأول 50,000 ريال للطرف الثاني."</p>
      </blockquote>
      <p>هذا البند يترك العديد من الأسئلة مفتوحة: هل المبلغ شامل للضريبة؟ متى يتم الدفع؟ هل هو دفعة واحدة؟ باستخدام أداتنا، يمكنك إنشاء بند محكم مثل:</p>
      <blockquote class="border-s-4 border-green-500 ps-4 py-2 my-4 bg-green-50 dark:bg-green-900/20">
        <p class="italic"><strong>بند محكم:</strong> "تم الاتفاق على أن يدفع الطرف الأول إلى الطرف الثاني مبلغًا إجماليًا وقدره 57,500.00 ريال سعودي (فقط سبعة وخمسون ألفًا وخمسمائة ريال سعودي لا غير)، وذلك عن مبلغ أساسي قدره 50,000.00 ريال سعودي مضافًا إليه ضريبة القيمة المضافة بنسبة 15%، على أن يتم سداد المبلغ دفعة واحدة خلال 15 يومًا من تاريخ توقيع هذا العقد."</p>
      </blockquote>

      <h3 class="font-bold text-xl mt-6">لماذا الصياغة المفصلة مهمة؟</h3>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>تجنب الغموض:</strong> صياغة مثل "المبلغ شامل للضريبة" لا تترك مجالاً للشك حول من يتحمل تكلفة الضريبة.</li>
        <li><strong>تحديد هيكل الدفع:</strong> تحديد ما إذا كان المبلغ سيُدفع كدفعة واحدة أو على أقساط، مع تحديد المواعيد، يمنع أي خلافات مستقبلية.</li>
        <li><strong>الاحترافية:</strong> استخدام صياغات قانونية دقيقة يعكس احترافيتك ويظهر للطرف الآخر أنك تأخذ العقد على محمل الجد.</li>
        <li><strong>الحماية القانونية:</strong> في حالة النزاع، سيعتمد القاضي على النص المكتوب. كلما كان النص أكثر تفصيلاً ووضوحًا، كان موقفك أقوى.</li>
      </ul>
      
      <p class="mt-4">أداتنا المتقدمة تأخذ في الاعتبار متغيرات مثل الضرائب وهيكل الدفع لتزويدك ببنود جاهزة للنسخ. لا تترك أهم جزء في عقدك للصدفة؛ استخدم <a href="/contract-clause" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">أداتنا</a> لضمان صياغة محكمة ودقيقة تحمي حقوقك.</p>
    `,
    contentEn: `
      <p>The financial clause is the heart of any commercial contract. Any ambiguity or omission in this clause can lead to long and costly disputes. The <a href="/contract-clause" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">Contract Clause Helper</a> is designed to provide you with robust, detailed phrasing that minimizes risk, increases clarity, and transforms a simple sentence into an airtight legal paragraph.</p>
      
      <h3 class="font-bold text-xl mt-6">From Ambiguity to Clarity: A Practical Example</h3>
      <p>Let's take a simple example. Instead of writing a vague clause like:</p>
      <blockquote class="border-s-4 border-red-500 ps-4 py-2 my-4 bg-red-50 dark:bg-red-900/20">
        <p class="italic"><strong>Weak Clause:</strong> "The First Party will pay $50,000 to the Second Party."</p>
      </blockquote>
      <p>This clause leaves many questions unanswered: Is the amount tax-inclusive? When is it due? Is it a lump sum? Using our tool, you can generate an airtight clause like:</p>
      <blockquote class="border-s-4 border-green-500 ps-4 py-2 my-4 bg-green-50 dark:bg-green-900/20">
        <p class="italic"><strong>Airtight Clause:</strong> "It is agreed that the First Party shall pay the Second Party a total sum of USD 57,500.00 (Fifty-seven thousand five hundred US dollars only), which consists of a base amount of USD 50,000.00 plus VAT at 15%, payable as a single lump sum within 15 days of the execution of this agreement."</p>
      </blockquote>
      
      <h3 class="font-bold text-xl mt-6">Why is Detailed Phrasing Important?</h3>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>Avoid Ambiguity:</strong> Phrasing like "the amount is tax-inclusive" leaves no room for doubt about who bears the tax cost.</li>
        <li><strong>Define Payment Structure:</strong> Specifying whether the amount will be paid as a lump sum or in installments, including deadlines, prevents future disagreements.</li>
        <li><strong>Professionalism:</strong> Using precise legal phrasing reflects your professionalism and shows the other party that you take the contract seriously.</li>
        <li><strong>Legal Protection:</strong> In case of a dispute, a judge will rely on the written text. The more detailed and clear the text, the stronger your position.</li>
      </ul>
      
      <p class="mt-4">Our advanced tool considers variables like taxes and payment structure to provide you with ready-to-copy clauses. Don't leave the most important part of your contract to chance; use our <a href="/contract-clause" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">tool</a> to ensure airtight and accurate phrasing that protects your rights.</p>
    `,
  },
  {
    id: '8',
    title: 'دليلك الشامل لاستخدام حاسبة الأقساط والتمويل',
    titleEn: 'Your Comprehensive Guide to Using the Loan & Installment Calculator',
    summary: 'خطط لتمويلك بثقة. تعلم كيف تساعدك حاسبتنا الجديدة على فهم دفعاتك الشهرية، إجمالي الفائدة، وجدول السداد الكامل.',
    summaryEn: 'Plan your finances with confidence. Learn how our new calculator helps you understand your monthly payments, total interest, and the full amortization schedule.',
    content: `
      <p>يعد التخطيط المالي السليم حجر الزاوية في اتخاذ القرارات الهامة، سواء كنت تفكر في شراء سيارة، أو منزل، أو الحصول على تمويل شخصي. <a href="/loan-calculator" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">حاسبة الأقساط والتمويل</a> الجديدة لدينا هي أداة قوية مصممة لإزالة الغموض عن القروض ومساعدتك على فهم التزاماتك المالية بوضوح تام.</p>
      
      <h3 class="font-bold text-xl mt-6">كيف تعمل الحاسبة؟</h3>
      <p>تعتمد الحاسبة على معادلة مالية قياسية لحساب القسط الشهري، مع الأخذ في الاعتبار ثلاثة مدخلات رئيسية:</p>
      <ol class="list-decimal ps-5 space-y-2">
        <li><strong>مبلغ التمويل:</strong> هو المبلغ الإجمالي الذي ترغب في اقتراضه.</li>
        <li><strong>نسبة الفائدة السنوية:</strong> هي التكلفة التي يفرضها المُقرض على اقتراض المال، معبرًا عنها كنسبة مئوية سنوية.</li>
        <li><strong>مدة التمويل (بالسنوات):</strong> هي الفترة الزمنية التي ستستغرقها لسداد القرض بالكامل.</li>
      </ol>
      <p class="mt-4">بمجرد إدخال هذه القيم، ستقوم الأداة على الفور بحساب:</p>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>القسط الشهري:</strong> المبلغ الثابت الذي ستدفعه كل شهر.</li>
        <li><strong>إجمالي المبلغ المدفوع:</strong> مجموع كل الأقساط الشهرية على مدى عمر القرض.</li>
        <li><strong>إجمالي الفوائد:</strong> الفرق بين إجمالي المبلغ المدفوع ومبلغ التمويل الأصلي. هذا هو الربح الذي يحققه المُقرض.</li>
      </ul>
      
      <h3 class="font-bold text-xl mt-6">فهم جدول السداد (Amortization Schedule)</h3>
      <p>الميزة الأكثر احترافية في أداتنا هي "جدول السداد". يوضح هذا الجدول بالتفصيل كيف يتم تقسيم كل دفعة شهرية بين سداد أصل القرض (المبلغ الأساسي) ودفع الفائدة. في بداية القرض، يذهب جزء أكبر من دفعتك نحو الفائدة، وبمرور الوقت، يتناقص هذا الجزء ويزداد الجزء الذي يذهب لسداد الأصل. يوفر لك هذا الجدول رؤية شفافة ومفصلة لرحلة سداد قرضك شهرًا بشهر.</p>
      
      <h3 class="font-bold text-xl mt-6">كيف تستخدم النتائج لاتخاذ قرارات أفضل؟</h3>
      <ul class="list-disc ps-5 space-y-2">
          <li><strong>قارن بين عروض التمويل:</strong> أدخل تفاصيل عروض مختلفة من بنوك متعددة. العرض الأفضل ليس دائمًا هو صاحب أقل قسط شهري، بل قد يكون صاحب "إجمالي الفوائد" الأقل.</li>
          <li><strong>جرّب سيناريوهات مختلفة:</strong> ماذا لو قمت بزيادة الدفعة الأولى؟ أو تقليل مدة التمويل؟ تتيح لك الحاسبة رؤية التأثير المباشر لهذه التغييرات على إجمالي ما ستدفعه.</li>
          <li><strong>خطط لميزانيتك:</strong> بمعرفة قسطك الشهري بدقة، يمكنك التخطيط لميزانيتك الشهرية بثقة، مع التأكد من قدرتك على تحمل الالتزام المالي.</li>
      </ul>
      <p class="mt-4">استخدم <a href="/loan-calculator" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">حاسبتنا</a> اليوم لاتخاذ قرارات مالية مستنيرة وتخطيط مستقبلك بثقة!</p>
    `,
    contentEn: `
      <p>Sound financial planning is the cornerstone of making important decisions, whether you're considering buying a car, a house, or taking out a personal loan. Our new <a href="/loan-calculator" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">Loan & Installment Calculator</a> is a powerful tool designed to demystify loans and help you understand your financial commitments with complete clarity.</p>
      
      <h3 class="font-bold text-xl mt-6">How Does the Calculator Work?</h3>
      <p>The calculator uses a standard financial formula to compute the monthly installment, taking into account three key inputs:</p>
      <ol class="list-decimal ps-5 space-y-2">
        <li><strong>Loan Amount:</strong> This is the total principal amount you wish to borrow.</li>
        <li><strong>Annual Interest Rate:</strong> This is the cost the lender charges for borrowing money, expressed as an annual percentage.</li>
        <li><strong>Loan Term (in Years):</strong> This is the period over which you will repay the loan in full.</li>
      </ol>
      <p class="mt-4">Once you enter these values, the tool will instantly calculate:</p>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>Monthly Payment:</strong> The fixed amount you will pay each month.</li>
        <li><strong>Total Payment:</strong> The sum of all monthly payments over the life of the loan.</li>
        <li><strong>Total Interest:</strong> The difference between the total payment and the original loan amount. This is the lender's profit.</li>
      </ul>
      
      <h3 class="font-bold text-xl mt-6">Understanding the Amortization Schedule</h3>
      <p>The most professional feature of our tool is the "Amortization Schedule." This table details how each monthly payment is broken down between paying down the principal (the original loan amount) and paying the interest. At the beginning of the loan, a larger portion of your payment goes toward interest. Over time, this portion decreases, and the portion going to the principal increases. This schedule provides you with a transparent, detailed view of your loan repayment journey, month by month.</p>
      
      <h3 class="font-bold text-xl mt-6">How to Use the Results for Better Decisions</h3>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>Compare Loan Offers:</strong> Enter the details from different offers from multiple banks. The best offer isn't always the one with the lowest monthly payment, but might be the one with the lowest "Total Interest".</li>
        <li><strong>Experiment with Scenarios:</strong> What if you increase the down payment? Or shorten the loan term? The calculator lets you see the direct impact of these changes on the total amount you will pay.</li>
        <li><strong>Plan Your Budget:</strong> By knowing your exact monthly payment, you can plan your monthly budget with confidence, ensuring you can comfortably afford the financial commitment.</li>
      </ul>
      <p class="mt-4">Use our <a href="/loan-calculator" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">calculator</a> today to make informed financial decisions and plan your future with confidence!</p>
    `,
  },
  {
    id: '9',
    title: 'أهمية إيصالات الدفع وكيفية إنشائها باحترافية',
    titleEn: 'The Importance of Payment Receipts and How to Create Them Professionally',
    summary: 'دليل شامل حول لماذا تعتبر إيصالات الدفع ضرورية لعملك، وما هي المعلومات التي يجب أن تتضمنها، وكيفية استخدام أداتنا الجديدة لإنشاء إيصالات واضحة وموثوقة.',
    summaryEn: 'A comprehensive guide on why payment receipts are essential for your business, what information they must include, and how to use our new tool to create clear and reliable receipts.',
    content: `
      <p>إيصال الدفع هو وثيقة حاسمة تثبت إتمام معاملة مالية. إنه ليس مجرد ورقة، بل هو حماية قانونية لكل من الدافع والمستلم، وسجل أساسي للمحاسبة الدقيقة. سواء كنت تدير شركة صغيرة، أو تعمل كمستقل، أو حتى في معاملاتك الشخصية، فإن إصدار واستلام إيصال واضح هو ممارسة تجارية سليمة.</p>
      
      <h3 class="font-bold text-xl mt-6">الفاتورة مقابل الإيصال: ما الفرق؟</h3>
      <p>من المهم التمييز بين الفاتورة والإيصال. يمكنك استخدام <a href="/invoice-generator" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">مولد الفواتير</a> لطلب الدفع، ثم <a href="/receipt-generator" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">مولد الإيصالات</a> لإثباته:</p>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>الفاتورة (Invoice):</strong> هي طلب للدفع. يتم إصدارها <em>قبل</em> الدفع، وتوضح تفاصيل السلع أو الخدمات والمبلغ المستحق.</li>
        <li><strong>الإيصال (Receipt):</strong> هو إثبات للدفع. يتم إصداره <em>بعد</em> استلام الدفع، ويؤكد أن المبلغ قد تم سداده.</li>
      </ul>

      <h3 class="font-bold text-xl mt-6">لماذا تعتبر إيصالات الدفع مهمة؟</h3>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>إثبات الدفع:</strong> هو الدليل القاطع على أن الدين قد تم سداده، مما يمنع أي نزاعات مستقبلية حول المدفوعات.</li>
        <li><strong>التوثيق المحاسبي:</strong> تعتبر الإيصالات ضرورية لتسجيل المعاملات بدقة في الدفاتر المحاسبية، مما يسهل تتبع الإيرادات والنفقات.</li>
        <li><strong>المتطلبات الضريبية:</strong> في العديد من البلدان، تكون الإيصالات مطلوبة كدليل على النفقات التجارية للمطالبة بالخصومات الضريبية.</li>
        <li><strong>بناء الثقة:</strong> إصدار إيصال احترافي يعكس مصداقيتك ويترك انطباعًا إيجابيًا لدى العملاء.</li>
      </ul>
      
      <h3 class="font-bold text-xl mt-6">العناصر الأساسية في أي إيصال دفع:</h3>
      <p>لضمان أن يكون إيصالك كاملاً ورسمياً، يجب أن يتضمن:</p>
      <ol class="list-decimal ps-5 space-y-2">
        <li><strong>عنوان واضح:</strong> "إيصال استلام" أو "إيصال دفع".</li>
        <li><strong>بيانات المستلم:</strong> اسم الشخص أو الشركة التي استلمت المبلغ.</li>
        <li><strong>بيانات الدافع:</strong> اسم الشخص أو الشركة التي قامت بالدفع.</li>
        <li><strong>المبلغ:</strong> يجب كتابته بالأرقام والحروف لزيادة الوضوح ومنع التلاعب. استخدم <a href="/number-converter" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">محول الأرقام</a> لضمان الدقة.</li>
        <li><strong>تاريخ الدفع:</strong> اليوم الذي تم فيه استلام المبلغ.</li>
        <li><strong>الغرض من الدفع:</strong> وصف موجز للخدمة أو المنتج الذي تم الدفع مقابله (مثال: "دفعة أولى من عقد تصميم الموقع").</li>
        <li><strong>طريقة الدفع:</strong> (نقداً، شيك، تحويل بنكي، إلخ).</li>
        <li><strong>توقيع المستلم:</strong> لإضفاء الطابع الرسمي على الوثيقة.</li>
      </ol>
      <p class="mt-4">تم تصميم <a href="/receipt-generator" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">مولد إيصالات الدفع</a> الجديد لدينا ليجعل هذه العملية سهلة وسريعة. يمكنك إدخال جميع التفاصيل اللازمة، وسيقوم النظام بإنشاء إيصال احترافي جاهز للطباعة أو التنزيل كملف PDF. ابدأ في توثيق معاملاتك المالية باحترافية اليوم!</p>
    `,
    contentEn: `
      <p>A payment receipt is a crucial document that proves a financial transaction has been completed. It's not just a piece of paper; it's legal protection for both the payer and the recipient, and an essential record for accurate accounting. Whether you're running a small business, working as a freelancer, or even in your personal dealings, issuing and receiving a clear receipt is a sound business practice.</p>
      
      <h3 class="font-bold text-xl mt-6">Invoice vs. Receipt: What's the Difference?</h3>
      <p>It's important to distinguish between an invoice and a receipt. You can use our <a href="/invoice-generator" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">Invoice Generator</a> to request payment, and our <a href="/receipt-generator" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">Receipt Generator</a> to prove it:</p>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>Invoice:</strong> A request for payment. It is issued <em>before</em> payment, detailing the goods or services and the amount due.</li>
        <li><strong>Receipt:</strong> A proof of payment. It is issued <em>after</em> payment has been received, confirming that the amount has been paid.</li>
      </ul>

      <h3 class="font-bold text-xl mt-6">Why Are Payment Receipts Important?</h3>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>Proof of Payment:</strong> It is the definitive proof that a debt has been settled, preventing future disputes over payments.</li>
        <li><strong>Accounting Records:</strong> Receipts are essential for accurately recording transactions in accounting books, making it easier to track revenue and expenses.</li>
        <li><strong>Tax Requirements:</strong> In many countries, receipts are required as proof of business expenses to claim tax deductions.</li>
        <li><strong>Building Trust:</strong> Issuing a professional receipt reflects your credibility and leaves a positive impression on clients.</li>
      </ul>
      
      <h3 class="font-bold text-xl mt-6">Essential Elements of a Payment Receipt:</h3>
      <p>To ensure your receipt is complete and official, it must include:</p>
      <ol class="list-decimal ps-5 space-y-2">
        <li><strong>A Clear Title:</strong> "Payment Receipt" or "Receipt Voucher".</li>
        <li><strong>Recipient's Information:</strong> The name of the person or company that received the money.</li>
        <li><strong>Payer's Information:</strong> The name of the person or company that made the payment.</li>
        <li><strong>The Amount:</strong> It should be written in both figures and words to increase clarity and prevent tampering. Use our <a href="/number-converter" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">Number Converter</a> for accuracy.</li>
        <li><strong>Date of Payment:</strong> The day the payment was received.</li>
        <li><strong>Purpose of Payment:</strong> A brief description of the service or product for which the payment was made (e.g., "Down payment for website design contract").</li>
        <li><strong>Payment Method:</strong> (Cash, Check, Bank Transfer, etc.).</li>
        <li><strong>Recipient's Signature:</strong> To formalize the document.</li>
      </ol>
      <p class="mt-4">Our new <a href="/receipt-generator" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">Payment Receipt Generator</a> is designed to make this process quick and easy. You can enter all the necessary details, and the system will generate a professional receipt ready for printing or downloading as a PDF. Start documenting your financial transactions professionally today!</p>
    `,
  },
  {
    id: '10',
    title: 'كيف تعمل أدوات تحويل العملات المباشرة؟',
    titleEn: 'How Do Live Currency Converters Work?',
    summary: 'اكتشف التقنية وراء أسعار الصرف اللحظية وكيف يمكنك استخدام أداتنا الجديدة لاتخاذ قرارات مالية مستنيرة عند التعامل مع عملات متعددة.',
    summaryEn: 'Discover the technology behind real-time exchange rates and how you can use our new tool to make informed financial decisions when dealing with multiple currencies.',
    content: `
      <p>في عالم مترابط ماليًا، أصبحت القدرة على تحويل العملات بسرعة ودقة أمرًا ضروريًا للمسافرين والمستثمرين والشركات على حد سواء. <a href="/currency-converter" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">أداة تحويل العملات المباشرة</a> الجديدة لدينا مصممة لتوفير هذه الخدمة لك، معتمدة على بيانات أسعار الصرف اللحظية.</p>
      
      <h3 class="font-bold text-xl mt-6">من أين تأتي البيانات؟</h3>
      <p>تعتمد أداتنا على واجهة برمجة تطبيقات (API) موثوقة تقوم بجمع أسعار الصرف من مصادر مالية عالمية، مثل البنوك المركزية وأسواق الصرف الأجنبي. يتم تحديث هذه البيانات بانتظام (عادة يوميًا) لتعكس أحدث التغيرات في السوق. هذا يضمن أنك تحصل على سعر قريب جدًا من السعر الفعلي الذي ستتعامل به في معاملة حقيقية.</p>
      
      <h3 class="font-bold text-xl mt-6">فهم سعر الصرف</h3>
      <p>سعر الصرف هو ببساطة سعر عملة واحدة معبرًا عنه بعملة أخرى. على سبيل المثال، إذا كان سعر صرف الدولار الأمريكي مقابل الريال السعودي هو 3.75، فهذا يعني أن دولارًا واحدًا يساوي 3.75 ريال سعودي. هذه الأسعار متقلبة وتتغير باستمرار بناءً على عوامل متعددة:</p>
      <ul class="list-disc ps-5 space-y-2">
          <li><strong>أسعار الفائدة:</strong> تميل العملات ذات أسعار الفائدة المرتفعة إلى جذب الاستثمار، مما يزيد من قيمتها.</li>
          <li><strong>التضخم:</strong> يؤدي التضخم المرتفع عادة إلى انخفاض قيمة العملة.</li>
          <li><strong>الاستقرار السياسي والاقتصادي:</strong> يفضل المستثمرون البلدان المستقرة، مما يعزز عملتها.</li>
      </ul>
      
      <h3 class="font-bold text-xl mt-6">ملاحظة هامة: سعر "ما بين البنوك"</h3>
      <blockquote class="border-s-4 border-teal-500 ps-4 py-2 my-4 bg-gray-50 dark:bg-slate-800">
        <p>الأسعار المعروضة في أداتنا هي أسعار "ما بين البنوك" (Interbank Rate). هذا هو السعر الذي تتبادل به البنوك الكبيرة العملات فيما بينها. عندما تقوم بتحويل الأموال من خلال بنك أو شركة صرافة، فإنهم يضيفون هامش ربح. لذلك، قد يختلف السعر الذي تحصل عليه قليلاً. تعتبر أداتنا مثالية للأغراض المعلوماتية والتخطيط.</p>
      </blockquote>

      <h3 class="font-bold text-xl mt-6">نصائح لاستخدام الأداة:</h3>
      <p>بعد التحويل، قد تحتاج إلى استخدام المبلغ في مستند رسمي. يمكنك استخدام <a href="/invoice-generator" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">مولد الفواتير</a> أو <a href="/number-converter" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">محول الأرقام</a> لهذا الغرض.</p>
      <ul class="list-disc ps-5 space-y-2 mt-2">
        <li><strong>تحقق دائمًا من تاريخ آخر تحديث:</strong> توفر أداتنا تاريخ آخر تحديث للبيانات لتكون على دراية بمدى حداثة السعر.</li>
        <li><strong>استخدمها للتخطيط:</strong> الأداة مثالية لتقدير التكاليف عند التخطيط للسفر، أو حساب قيمة الاستثمارات الأجنبية، أو تحديد أسعار المنتجات للأسواق الدولية.</li>
        <li><strong>ضع في اعتبارك الرسوم:</strong> عند إجراء تحويل فعلي، تذكر أن هناك رسوم تحويل وهوامش ربح قد تنطبق.</li>
      </ul>
      <p class="mt-4">استخدم <a href="/currency-converter" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">أداة تحويل العملات المباشرة</a> لتبقى على اطلاع دائم بأسواق الصرف العالمية وتتخذ قراراتك المالية بثقة أكبر.</p>
    `,
    contentEn: `
      <p>In a financially interconnected world, the ability to convert currencies quickly and accurately has become essential for travelers, investors, and businesses alike. Our new <a href="/currency-converter" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">live currency converter tool</a> is designed to provide you with this service, relying on real-time exchange rate data.</p>
      
      <h3 class="font-bold text-xl mt-6">Where Does the Data Come From?</h3>
      <p>Our tool relies on a trusted Application Programming Interface (API) that aggregates exchange rates from global financial sources, such as central banks and foreign exchange markets. This data is updated regularly (usually daily) to reflect the latest market changes. This ensures you get a rate that is very close to the actual rate you would encounter in a real transaction.</p>
      
      <h3 class="font-bold text-xl mt-6">Understanding the Exchange Rate</h3>
      <p>An exchange rate is simply the price of one currency expressed in terms of another currency. For example, if the exchange rate for USD to SAR is 3.75, it means that one US dollar equals 3.75 Saudi riyals. These rates are volatile and constantly change based on various factors:</p>
       <ul class="list-disc ps-5 space-y-2">
          <li><strong>Interest Rates:</strong> Currencies with higher interest rates tend to attract investment, increasing their value.</li>
          <li><strong>Inflation:</strong> High inflation typically leads to a decrease in a currency's value.</li>
          <li><strong>Political and Economic Stability:</strong> Investors prefer stable countries, which boosts their currency.</li>
      </ul>
      
      <h3 class="font-bold text-xl mt-6">Important Note: The "Interbank" Rate</h3>
      <blockquote class="border-s-4 border-teal-500 ps-4 py-2 my-4 bg-gray-50 dark:bg-slate-800">
        <p>The rates displayed in our tool are "interbank rates." This is the rate at which large banks exchange currencies with each other. When you convert money through a bank or an exchange service, they add a profit margin. Therefore, the rate you actually get will differ slightly. Our tool is perfect for informational and planning purposes.</p>
      </blockquote>

      <h3 class="font-bold text-xl mt-6">Tips for Using the Tool:</h3>
      <p>After converting, you may need to use the amount in an official document. You can use our <a href="/invoice-generator" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">Invoice Generator</a> or <a href="/number-converter" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">Number Converter</a> for this purpose.</p>
      <ul class="list-disc ps-5 space-y-2 mt-2">
        <li><strong>Always check the last updated date:</strong> Our tool provides the date of the last data update so you are aware of how current the rate is.</li>
        <li><strong>Use it for planning:</strong> The tool is perfect for estimating costs when planning travel, calculating the value of foreign investments, or setting product prices for international markets.</li>
        <li><strong>Factor in Fees:</strong> When making an actual transaction, remember that conversion fees and profit margins may apply.</li>
      </ul>
      <p class="mt-4">Use the <a href="/currency-converter" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">live currency converter</a> to stay informed about global exchange markets and make your financial decisions with greater confidence.</p>
    `,
  },
  {
    id: '6',
    title: 'ما هو التفقيط؟ وكيف يستخدم في المعاملات المالية؟',
    titleEn: 'What is Tafqit? And how is it used in financial transactions?',
    summary: 'تعرف على مفهوم التفقيط وأهميته في حماية الفواتير والشيكات من التزوير، وكيفية كتابة الأرقام بالكلمات بشكل صحيح.',
    summaryEn: 'Learn about the concept of Tafqit and its importance in protecting invoices and checks from fraud.',
    content: `
      <p>كلمة <strong>"تفقيط"</strong> مشتقة من كلمة "فقط"، وهي عملية كتابة الأرقام والكسور بالكلمات بدلاً من الأرقام. تهدف هذه العملية بشكل أساسي إلى منع التلاعب أو التزوير في المستندات المالية الرسمية مثل الشيكات والعقود والفواتير.</p>
      <h3 class="text-xl font-bold mt-6 mb-3">لماذا نستخدم التفقيط؟</h3>
      <p>يعتبر التفقيط "صمام أمان" في عالم المال. فبينما يمكن تعديل الأرقام بسهولة (مثلاً إضافة صفر لتحويل 100 إلى 1000)، يصعب جداً تعديل الكلمات المكتوبة بخط اليد أو المطبوعة دون أن يظهر ذلك بشكل واضح.</p>
      <ul class="list-disc ps-5 mt-4 space-y-2">
        <li><strong>منع التزوير:</strong> يصعب التعديل على الجمل المكتوبة مقارنة بالأرقام.</li>
        <li><strong>الدقة القانونية:</strong> في حال وجود اختلاف بين الرقم والكلمة في العقود، تعتمد المحاكم غالباً الكلمة المكتوبة (التفقيط).</li>
        <li><strong>الاحترافية:</strong> تعطي المستندات المالية طابعاً رسمياً واحترافياً.</li>
      </ul>
      <h3 class="text-xl font-bold mt-6 mb-3">كيفية التفقيط بشكل صحيح</h3>
      <p>عند استخدام أداة <a href="/number-converter" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">التفقيط</a>، تأكد من اختيار العملة المناسبة. التفقيط لا يقتصر فقط على تحويل الأرقام، بل يشمل أيضاً تعريف الوحدة المالية (مثل ريال، جنيه، دولار) وأجزائها (مثل هللة، قرش، سنت).</p>
      <p class="mt-4">نحن في "صيغة مالية" نوفر أداة تفقيط ذكية تدعم جميع اللغات والعملات، مع مراعاة القواعد اللغوية المعقدة في اللغة العربية مثل التذكير والتأنيث وجمع التكسير.</p>
    `,
    contentEn: `
      <p>The term <strong>"Tafqit"</strong> (Arabic: تفقيط) refers to the process of writing numerical amounts in words instead of figures. It is derived from the Arabic word "Faqat" (meaning "only"), which is often added at the end of written amounts to prevent any further additions.</p>
      <h3 class="text-xl font-bold mt-6 mb-3">Why is Tafqit Essential?</h3>
      <p>Tafqit serves as a primary security measure in official, financial, and legal documents. While numerical digits can be easily altered (e.g., adding a zero to turn 1,000 into 10,000), modifying written words is significantly more difficult and obvious.</p>
      <ul class="list-disc ps-5 mt-4 space-y-2">
        <li><strong>Fraud Prevention:</strong> Written sentences are harder to manipulate than digits.</li>
        <li><strong>Legal Accuracy:</strong> In many jurisdictions, if there is a discrepancy between the numbers and the words on a contract or check, the words take precedence.</li>
        <li><strong>Professionalism:</strong> It provides a standard, official look to financial documents.</li>
      </ul>
      <h3 class="text-xl font-bold mt-6 mb-3">How to Use Our Tafqit Tool</h3>
      <p>Using our <a href="/number-converter" class="text-teal-600 dark:text-teal-400 font-semibold hover:underline">Number to Words tool</a> is simple. Enter the amount, select your currency, and the tool will instantly generate the correct wording in Arabic or English, following proper linguistic rules.</p>
    `,
  },
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  // General Accounting
  { id: 'balance-sheet', termAr: 'الميزانية العمومية', termEn: 'Balance Sheet', category: 'accounting', categoryAr: 'المحاسبة العامة', definitionAr: 'بيان مالي يوضح أصول الشركة والتزاماتها وحقوق الملكية في نقطة زمنية محددة. المعادلة الأساسية هي: الأصول = الالتزامات + حقوق الملكية.', definitionEn: 'A financial statement that reports a company\'s assets, liabilities, and equity at a specific point in time. The basic equation is: Assets = Liabilities + Equity.', exampleAr: 'في نهاية العام، تظهر الميزانية العمومية أن قيمة أصول الشركة تساوي مجموع ديونها وحقوق مساهميها.', exampleEn: 'At year-end, the balance sheet shows that the company\'s assets equal the sum of its debts and its shareholders\' equity.' },
  { id: 'income-statement', termAr: 'قائمة الدخل', termEn: 'Income Statement', category: 'accounting', categoryAr: 'المحاسبة العامة', definitionAr: 'بيان مالي يوضح أداء الشركة المالي (الإيرادات، المصروفات، وصافي الربح أو الخسارة) خلال فترة زمنية معينة.', definitionEn: 'A financial statement that reports a company\'s financial performance over a specific accounting period.', exampleAr: 'أظهرت قائمة الدخل للربع الأول أن إيرادات الشركة تجاوزت مصروفاتها، محققة صافي ربح قدره 50,000 دولار.', exampleEn: 'The first quarter income statement showed that the company\'s revenues exceeded its expenses, resulting in a net profit of $50,000.' },
  { id: 'cash-flow', termAr: 'التدفق النقدي', termEn: 'Cash Flow', abbreviationEn: 'CF', category: 'accounting', categoryAr: 'المحاسبة العامة', definitionAr: 'صافي حركة النقد وما يعادله الذي يتم تحويله إلى ومن الشركة.', definitionEn: 'The net movement of cash and cash equivalents being transferred into and out of a business.', exampleAr: 'على الرغم من تحقيق الشركة لأرباح، إلا أنها واجهت مشكلة في التدفق النقدي بسبب تأخر العملاء في السداد.', exampleEn: 'Although the company was profitable, it faced a cash flow problem because customers were late in making payments.' },
  { id: 'asset', termAr: 'الأصل', termEn: 'Asset', category: 'accounting', categoryAr: 'المحاسبة العامة', definitionAr: 'مورد اقتصادي تمتلكه الشركة ويتوقع أن يوفر فائدة اقتصادية مستقبلية.', definitionEn: 'An economic resource owned by a company that is expected to provide future economic benefit.', exampleAr: 'تعتبر المباني والآلات والنقد في البنك من أصول الشركة.', exampleEn: 'Buildings, machinery, and cash in the bank are considered company assets.' },
  { id: 'liability', termAr: 'التزام', termEn: 'Liability', category: 'accounting', categoryAr: 'المحاسبة العامة', definitionAr: 'تعهّد أو دين حالي على الشركة ينشأ من أحداث سابقة، ويتطلب تسويته تدفقاً خارجاً للموارد.', definitionEn: 'A company\'s financial debt or obligations that arise during the course of its business operations.', exampleAr: 'تشمل التزامات الشركة القروض المستحقة للموردين والرواتب التي لم تدفع بعد.', exampleEn: 'The company\'s liabilities include loans, amounts owed to suppliers, and unpaid salaries.' },
  { id: 'equity', termAr: 'حقوق الملكية', termEn: 'Equity', category: 'accounting', categoryAr: 'المحاسبة العامة', definitionAr: 'القيمة المتبقية في أصول الشركة بعد خصم جميع التزاماتها.', definitionEn: 'The residual interest in the assets of an entity after deducting all its liabilities.', exampleAr: 'إذا بلغت أصول الشركة مليون دولار والتزاماتها 600 ألف دولار، فإن حقوق الملكية تبلغ 400 ألف دولار.', exampleEn: 'If a company\'s assets are $1 million and its liabilities are $600,000, then the equity is $400,000.' },
  { id: 'depreciation', termAr: 'الإهلاك', termEn: 'Depreciation', category: 'accounting', categoryAr: 'المحاسبة العامة', definitionAr: 'النقص المنهجي في القيمة المسجلة للأصل الملموس على مدى عمره الإنتاجي.', definitionEn: 'The systematic decrease in the recorded value of a tangible asset over its useful life.', exampleAr: 'تقوم الشركة بحساب إهلاك لسياراتها بقيمة 20% سنوياً لتوزيع تكلفتها على عمرها الافتراضي.', exampleEn: 'The company calculates depreciation on its cars at 20% annually to spread their cost over their useful life.' },
  { id: 'accrual', termAr: 'محاسبة الاستحقاق', termEn: 'Accrual Accounting', category: 'accounting', categoryAr: 'المحاسبة العامة', definitionAr: 'طريقة محاسبية تسجل الإيرادات والمصروفات عند تحققها، وليس عند استلام النقد أو دفعه.', definitionEn: 'An accounting method that records revenues and expenses when they are earned, regardless of when cash is exchanged.', exampleAr: 'سجلت الشركة إيرادًا بقيمة 10,000 دولار في شهر مارس عند تقديم الخدمة، على الرغم من أن العميل سيدفع في أبريل.', exampleEn: 'The company recorded $10,000 in revenue in March when the service was delivered, even though the client will pay in April.' },
  { id: 'cogs', termAr: 'تكلفة البضاعة المباعة', termEn: 'Cost of Goods Sold', abbreviationEn: 'COGS', category: 'accounting', categoryAr: 'المحاسبة العامة', definitionAr: 'التكاليف المباشرة المنسوبة إلى إنتاج السلع التي تبيعها الشركة.', definitionEn: 'The direct costs attributable to the production of the goods sold by a company.', exampleAr: 'إذا باعت الشركة كتابًا مقابل 20 دولارًا وكانت تكلفة طباعته 5 دولارات، فإن تكلفة البضاعة المباعة هي 5 دولارات.', exampleEn: 'If a company sells a book for $20 and its printing cost was $5, the COGS is $5.' },
  { id: 'gaap', termAr: 'المبادئ المحاسبية المقبولة عموماً', termEn: 'Generally Accepted Accounting Principles', abbreviationEn: 'GAAP', category: 'accounting', categoryAr: 'المحاسبة العامة', definitionAr: 'مجموعة مشتركة من المعايير والمبادئ المحاسبية التي تتبعها الشركات عند إعداد بياناتها المالية.', definitionEn: 'A common set of accounting principles, standards, and procedures that companies must follow when they compile their financial statements.' },

  // Corporate Finance
  { id: 'capital', termAr: 'رأس المال', termEn: 'Capital', category: 'corporate_finance', categoryAr: 'تمويل الشركات', definitionAr: 'الأموال أو الأصول المالية الأخرى التي تستخدم لبدء أو تشغيل عمل تجاري.', definitionEn: 'Money or other financial assets used to start or operate a business.', exampleAr: 'جمع المؤسسون رأس مال بقيمة مليون دولار من المستثمرين لبدء الشركة.', exampleEn: 'The founders raised $1 million in capital from investors to start the company.' },
  { id: 'budget', termAr: 'الميزانية', termEn: 'Budget', category: 'corporate_finance', categoryAr: 'تمويل الشركات', definitionAr: 'خطة مالية تقدر الإيرادات والمصروفات على مدى فترة زمنية محددة.', definitionEn: 'A financial plan that estimates revenue and expenses over a specified period.', exampleAr: 'تحدد ميزانية قسم التسويق السنوية المبلغ المتاح للإنفاق على الإعلانات والحملات.', exampleEn: 'The marketing department\'s annual budget determines the amount available to spend on advertising and campaigns.' },
  { id: 'roi', termAr: 'العائد على الاستثمار', termEn: 'Return on Investment', abbreviationEn: 'ROI', category: 'corporate_finance', categoryAr: 'تمويل الشركات', definitionAr: 'مقياس أداء يستخدم لتقييم كفاءة أو ربحية استثمار ما.', definitionEn: 'A performance measure used to evaluate the efficiency or profitability of an investment.', exampleAr: 'إذا استثمرت 1,000 دولار وحققت ربحًا صافيًا قدره 200 دولار، فإن العائد على الاستثمار هو 20%.', exampleEn: 'If you invest $1,000 and make a net profit of $200, your ROI is 20%.' },
  { id: 'break-even-point', termAr: 'نقطة التعادل', termEn: 'Break-Even Point', abbreviationEn: 'BEP', category: 'corporate_finance', categoryAr: 'تمويل الشركات', definitionAr: 'النقطة التي تتساوى فيها الإيرادات الإجمالية مع التكاليف الإجمالية، مما يعني عدم وجود ربح أو خسارة.', definitionEn: 'The point at which total revenue equals total costs, resulting in no profit or loss.', exampleAr: 'تحتاج الشركة لبيع 500 وحدة من منتجها للوصول إلى نقطة التعادل وتغطية جميع تكاليفها.', exampleEn: 'The company needs to sell 500 units of its product to reach the break-even point and cover all its costs.' },
  { id: 'leverage', termAr: 'الرافعة المالية', termEn: 'Leverage', category: 'corporate_finance', categoryAr: 'تمويل الشركات', definitionAr: 'استخدام الأموال المقترضة لزيادة العائد المحتمل للاستثمار.', definitionEn: 'The use of borrowed funds to increase the potential return of an investment.', exampleAr: 'استخدمت الشركة قرضًا لشراء عقار، وهي تأمل أن يحقق العقار عائدًا أعلى من تكلفة الفائدة على القرض.', exampleEn: 'The company used a loan to buy a property, hoping the property\'s return will be higher than the loan\'s interest cost.' },
  { id: 'working-capital', termAr: 'رأس المال العامل', termEn: 'Working Capital', category: 'corporate_finance', categoryAr: 'تمويل الشركات', definitionAr: 'الفرق بين الأصول المتداولة والالتزامات المتداولة، وهو مقياس للسيولة قصيرة الأجل.', definitionEn: 'The difference between current assets and current liabilities; a measure of short-term liquidity.', exampleAr: 'يشير رأس المال العامل الإيجابي إلى أن الشركة قادرة على الوفاء بالتزاماتها قصيرة الأجل.', exampleEn: 'Positive working capital indicates that a company can meet its short-term obligations.' },

  // Investment & Markets
  { id: 'stock', termAr: 'سهم', termEn: 'Stock', category: 'investment', categoryAr: 'الاستثمار والأسواق', definitionAr: 'ورقة مالية تمثل ملكية جزئية في شركة.', definitionEn: 'A security that represents a fractional ownership in a corporation.', exampleAr: 'شراء سهم واحد في شركة أبل يجعلك مالكًا لجزء صغير جدًا من الشركة.', exampleEn: 'Buying one share of Apple stock makes you a very small part-owner of the company.' },
  { id: 'bond', termAr: 'سند', termEn: 'Bond', category: 'investment', categoryAr: 'الاستثمار والأسواق', definitionAr: 'أداة دين تصدرها الشركات أو الحكومات لجمع الأموال، مع وعد بسداد المبلغ الأصلي مع الفائدة.', definitionEn: 'A debt instrument issued by corporations or governments to raise capital, promising to repay the principal with interest.', exampleAr: 'اشترى المستثمر سندًا حكوميًا لمدة 10 سنوات للحصول على تدفق دخل ثابت من مدفوعات الفائدة.', exampleEn: 'The investor bought a 10-year government bond to receive a steady income stream from interest payments.' },
  { id: 'portfolio', termAr: 'محفظة استثمارية', termEn: 'Portfolio', category: 'investment', categoryAr: 'الاستثمار والأسواق', definitionAr: 'مجموعة من الأصول المالية مثل الأسهم والسندات والسلع.', definitionEn: 'A collection of financial assets such as stocks, bonds, and commodities.', exampleAr: 'تتكون محفظته الاستثمارية من 60% أسهم و 40% سندات لتحقيق التوازن بين النمو والأمان.', exampleEn: 'His investment portfolio consists of 60% stocks and 40% bonds to balance growth and safety.' },
  { id: 'diversification', termAr: 'تنويع', termEn: 'Diversification', category: 'investment', categoryAr: 'الاستثمار والأسواق', definitionAr: 'استراتيجية استثمارية لخلط مجموعة متنوعة من الاستثمارات داخل محفظة لتقليل المخاطر.', definitionEn: 'An investment strategy of mixing a wide variety of investments within a portfolio to reduce risk.', exampleAr: 'يقوم المستثمر بتنويع محفظته من خلال الاستثمار في قطاعات مختلفة مثل التكنولوجيا والرعاية الصحية والطاقة.', exampleEn: 'The investor diversifies his portfolio by investing in different sectors like technology, healthcare, and energy.' },
  { id: 'dividend', termAr: 'توزيعات الأرباح', termEn: 'Dividend', category: 'investment', categoryAr: 'الاستثمار والأسواق', definitionAr: 'توزيع جزء من أرباح الشركة على مساهميها.', definitionEn: 'A distribution of a portion of a company\'s earnings to its shareholders.', exampleAr: 'أعلنت الشركة عن توزيع أرباح نقدية بقيمة 1 دولار لكل سهم.', exampleEn: 'The company announced a cash dividend of $1 per share.' },
  { id: 'bull-market', termAr: 'السوق الصاعدة', termEn: 'Bull Market', category: 'investment', categoryAr: 'الاستثمار والأسواق', definitionAr: 'سوق تتميز بارتفاع أسعار الأوراق المالية.', definitionEn: 'A market characterized by rising prices of securities.', exampleAr: 'خلال السوق الصاعدة، تزداد ثقة المستثمرين وترتفع أسعار الأسهم بشكل عام.', exampleEn: 'During a bull market, investor confidence increases and stock prices generally rise.' },
  { id: 'bear-market', termAr: 'السوق الهابطة', termEn: 'Bear Market', category: 'investment', categoryAr: 'الاستثمار والأسواق', definitionAr: 'سوق تتميز بانخفاض أسعار الأوراق المالية.', definitionEn: 'A market characterized by falling prices of securities.', exampleAr: 'يميل المستثمرون إلى بيع استثماراتهم خلال السوق الهابطة خوفًا من المزيد من الخسائر.', exampleEn: 'Investors tend to sell their investments during a bear market, fearing further losses.' },
  { id: 'yield', termAr: 'العائد', termEn: 'Yield', category: 'investment', categoryAr: 'الاستثمار والأسواق', definitionAr: 'الدخل العائد من استثمار ما، وعادة ما يتم التعبير عنه كنسبة مئوية سنوية.', definitionEn: 'The income returned on an investment, usually expressed as an annual percentage.', exampleAr: 'يبلغ عائد توزيعات الأرباح لهذا السهم 3%، مما يعني أنه يدفع 3% من سعر السهم كأرباح سنوية.', exampleEn: 'The dividend yield on this stock is 3%, meaning it pays out 3% of its share price in annual dividends.' },

  // Economics
  { id: 'gdp', termAr: 'الناتج المحلي الإجمالي', termEn: 'Gross Domestic Product', abbreviationEn: 'GDP', category: 'economics', categoryAr: 'الاقتصاد', definitionAr: 'القيمة السوقية الإجمالية لجميع السلع والخدمات النهائية المنتجة في بلد ما خلال فترة زمنية محددة.', definitionEn: 'The total market value of all final goods and services produced within a country in a specific time period.', exampleAr: 'يعتبر نمو الناتج المحلي الإجمالي مؤشراً رئيسياً على صحة الاقتصاد.', exampleEn: 'GDP growth is a key indicator of an economy\'s health.' },
  { id: 'inflation', termAr: 'تضخم', termEn: 'Inflation', category: 'economics', categoryAr: 'الاقتصاد', definitionAr: 'معدل زيادة مستوى الأسعار العام للسلع والخدمات، وبالتالي انخفاض القوة الشرائية للنقود.', definitionEn: 'The rate at which the general level of prices for goods and services is rising, and subsequently, purchasing power is falling.', exampleAr: 'بسبب التضخم، فإن 100 دولار اليوم تشتري سلعًا أقل مما كانت تشتريه في العام الماضي.', exampleEn: 'Due to inflation, $100 today buys fewer goods than it did last year.' },
  { id: 'deflation', termAr: 'انكماش', termEn: 'Deflation', category: 'economics', categoryAr: 'الاقتصاد', definitionAr: 'انخفاض عام في مستوى الأسعار، مما يؤدي إلى زيادة القوة الشرائية للنقود.', definitionEn: 'A general decline in the price level, resulting in an increase in the purchasing power of money.' },
  { id: 'recession', termAr: 'ركود اقتصادي', termEn: 'Recession', category: 'economics', categoryAr: 'الاقتصاد', definitionAr: 'فترة من التراجع الاقتصادي المؤقت تنخفض خلالها التجارة والنشاط الصناعي.', definitionEn: 'A period of temporary economic decline during which trade and industrial activity are reduced.' },
  { id: 'interest', termAr: 'فائدة', termEn: 'Interest', category: 'economics', categoryAr: 'الاقتصاد', definitionAr: 'تكلفة اقتراض المال، أو العائد من إقراض المال.', definitionEn: 'The cost of borrowing money, or the return from lending money.', exampleAr: 'رفع البنك المركزي سعر الفائدة للتحكم في التضخم.', exampleEn: 'The central bank raised the interest rate to control inflation.' },

  // Banking & Debt
  { id: 'debt', termAr: 'دين', termEn: 'Debt', category: 'banking', categoryAr: 'المصرفية والديون', definitionAr: 'مبلغ من المال مقترض من طرف لآخر.', definitionEn: 'An amount of money borrowed by one party from another.' },
  { id: 'principal', termAr: 'أصل المبلغ', termEn: 'Principal', category: 'banking', categoryAr: 'المصرفية والديون', definitionAr: 'المبلغ الأولي للقرض، أو المبلغ الأصلي للاستثمار.', definitionEn: 'The initial amount of a loan, or the original amount of an investment.', exampleAr: 'عند سداد قرض السيارة الشهري، يذهب جزء من الدفعة لتغطية الفائدة والجزء الآخر لتقليل أصل المبلغ.', exampleEn: 'When making a monthly car loan payment, part of it covers interest and the other part reduces the principal.' },
  { id: 'collateral', termAr: 'ضمان', termEn: 'Collateral', category: 'banking', categoryAr: 'المصرفية والديون', definitionAr: 'أصل يقدمه المقترض كضمان للحصول على قرض.', definitionEn: 'An asset that a borrower offers as security for a loan.', exampleAr: 'عند الحصول على قرض عقاري، يكون المنزل نفسه هو الضمان للقرض.', exampleEn: 'When getting a mortgage, the house itself serves as collateral for the loan.' },
  { id: 'default', termAr: 'تخلف عن السداد', termEn: 'Default', category: 'banking', categoryAr: 'المصرفية والديون', definitionAr: 'الفشل في سداد قرض أو التزام مالي آخر في الوقت المحدد.', definitionEn: 'The failure to repay a loan or other financial obligation on time.' },
  { id: 'compound-interest', termAr: 'الفائدة المركبة', termEn: 'Compound Interest', category: 'banking', categoryAr: 'المصرفية والديون', definitionAr: 'الفائدة المحسوبة على المبلغ الأصلي بالإضافة إلى الفائدة المتراكمة من الفترات السابقة.', definitionEn: 'Interest calculated on the initial principal and also on the accumulated interest of previous periods.', exampleAr: 'تنمو مدخراتك بشكل أسرع مع الفائدة المركبة لأنك تكسب فائدة على فائدتك.', exampleEn: 'Your savings grow faster with compound interest because you earn interest on your interest.' },
];


export const CURRENCIES: Currency[] = [
  { code: 'AED', name: 'UAE Dirham', nameAr: 'درهم إماراتي', symbol: 'د.إ', singular: 'dirham', plural: 'dirhams', singularAr: 'درهم', dualAr: 'درهمان', pluralAr: 'دراهم', fraction: 'fils', fractionPlural: 'fils', fractionSingularAr: 'فلس', fractionDualAr: 'فلسان', fractionPluralAr: 'فلوس', decimals: 2 },
  { code: 'AFN', name: 'Afghan Afghani', nameAr: 'أفغاني أفغانستاني', symbol: '؋', singular: 'afghani', plural: 'afghanis', singularAr: 'أفغاني', dualAr: 'أفغانيان', pluralAr: 'أفغانيات', fraction: 'pul', fractionPlural: 'puls', fractionSingularAr: 'بول', fractionDualAr: 'بولان', fractionPluralAr: 'بولات', decimals: 2 },
  { code: 'ALL', name: 'Albanian Lek', nameAr: 'ليك ألباني', symbol: 'L', singular: 'lek', plural: 'lekë', singularAr: 'ليك', dualAr: 'ليكان', pluralAr: 'ليكات', fraction: 'qindarkë', fractionPlural: 'qindarka', fractionSingularAr: 'قنداركة', fractionDualAr: 'قنداركتان', fractionPluralAr: 'قنداركات', decimals: 2 },
  { code: 'AMD', name: 'Armenian Dram', nameAr: 'درام أرميني', symbol: '֏', singular: 'dram', plural: 'dram', singularAr: 'درام', dualAr: 'درامان', pluralAr: 'درامات', fraction: 'luma', fractionPlural: 'luma', fractionSingularAr: 'لوما', fractionDualAr: 'لومان', fractionPluralAr: 'لومات', decimals: 2 },
  { code: 'AOA', name: 'Angolan Kwanza', nameAr: 'كوانزا أنغولي', symbol: 'Kz', singular: 'kwanza', plural: 'kwanzas', singularAr: 'كوانزا', dualAr: 'كوانزان', pluralAr: 'كوانزات', fraction: 'cêntimo', fractionPlural: 'cêntimos', fractionSingularAr: 'سنتيمو', fractionDualAr: 'سنتيموان', fractionPluralAr: 'سنتيموات', decimals: 2 },
  { code: 'ARS', name: 'Argentine Peso', nameAr: 'بيزو أرجنتيني', symbol: '$', singular: 'peso', plural: 'pesos', singularAr: 'بيزو', dualAr: 'بيزوان', pluralAr: 'بيزوات', fraction: 'centavo', fractionPlural: 'centavos', fractionSingularAr: 'سنتافو', fractionDualAr: 'سنتافوان', fractionPluralAr: 'سنتافوات', decimals: 2 },
  { code: 'AUD', name: 'Australian Dollar', nameAr: 'دولار أسترالي', symbol: '$', singular: 'dollar', plural: 'dollars', singularAr: 'دولار', dualAr: 'دولاران', pluralAr: 'دولارات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'AWG', name: 'Aruban Florin', nameAr: 'فلورن أروبي', symbol: 'ƒ', singular: 'florin', plural: 'florins', singularAr: 'فلورن', dualAr: 'فلورنان', pluralAr: 'فلورنات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'AZN', name: 'Azerbaijani Manat', nameAr: 'مانات أذربيجاني', symbol: '₼', singular: 'manat', plural: 'manat', singularAr: 'مانات', dualAr: 'ماناتان', pluralAr: 'ماناتات', fraction: 'qəpik', fractionPlural: 'qəpik', fractionSingularAr: 'كوبيك', fractionDualAr: 'كوبيكان', fractionPluralAr: 'كوبيكات', decimals: 2 },
  { code: 'BAM', name: 'Bosnia-Herzegovina Convertible Mark', nameAr: 'مارك بوسني قابل للتحويل', symbol: 'KM', singular: 'mark', plural: 'marks', singularAr: 'مارك', dualAr: 'ماركان', pluralAr: 'ماركات', fraction: 'fening', fractionPlural: 'fenings', fractionSingularAr: 'فينينغ', fractionDualAr: 'فينينغان', fractionPluralAr: 'فينينغات', decimals: 2 },
  { code: 'BBD', name: 'Barbadian Dollar', nameAr: 'دولار بربادوسي', symbol: '$', singular: 'dollar', plural: 'dollars', singularAr: 'دولار', dualAr: 'دولاران', pluralAr: 'دولارات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'BDT', name: 'Bangladeshi Taka', nameAr: 'تاكا بنغلاديشي', symbol: '৳', singular: 'taka', plural: 'taka', singularAr: 'تاكا', dualAr: 'تاكان', pluralAr: 'تاكات', fraction: 'poisha', fractionPlural: 'poisha', fractionSingularAr: 'بويشا', fractionDualAr: 'بويشان', fractionPluralAr: 'بويشات', decimals: 2 },
  { code: 'BGN', name: 'Bulgarian Lev', nameAr: 'ليف بلغاري', symbol: 'лв', singular: 'lev', plural: 'leva', singularAr: 'ليف', dualAr: 'ليفان', pluralAr: 'ليفات', fraction: 'stotinka', fractionPlural: 'stotinki', fractionSingularAr: 'ستوتينكا', fractionDualAr: 'ستوتينكتان', fractionPluralAr: 'ستوتينكات', decimals: 2 },
  { code: 'BHD', name: 'Bahraini Dinar', nameAr: 'دينار بحريني', symbol: '.د.ب', singular: 'dinar', plural: 'dinars', singularAr: 'دينار', dualAr: 'ديناران', pluralAr: 'دنانير', fraction: 'fils', fractionPlural: 'fils', fractionSingularAr: 'فلس', fractionDualAr: 'فلسان', fractionPluralAr: 'فلوس', decimals: 3 },
  { code: 'BIF', name: 'Burundian Franc', nameAr: 'فرنك بوروندي', symbol: 'FBu', singular: 'franc', plural: 'francs', singularAr: 'فرنك', dualAr: 'فرانكان', pluralAr: 'فرنكات', fraction: 'centime', fractionPlural: 'centimes', fractionSingularAr: 'سنتيم', fractionDualAr: 'سنتيمان', fractionPluralAr: 'سنتيمات', decimals: 0 },
  { code: 'BMD', name: 'Bermudan Dollar', nameAr: 'دولار برمودي', symbol: '$', singular: 'dollar', plural: 'dollars', singularAr: 'دولار', dualAr: 'دولاران', pluralAr: 'دولارات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'BND', name: 'Brunei Dollar', nameAr: 'دولار بروناي', symbol: '$', singular: 'dollar', plural: 'dollars', singularAr: 'دولار', dualAr: 'دولاران', pluralAr: 'دولارات', fraction: 'sen', fractionPlural: 'sen', fractionSingularAr: 'سن', fractionDualAr: 'سنان', fractionPluralAr: 'سنات', decimals: 2 },
  { code: 'BOB', name: 'Bolivian Boliviano', nameAr: 'بوليفيانو بوليفي', symbol: 'Bs.', singular: 'boliviano', plural: 'bolivianos', singularAr: 'بوليفيانو', dualAr: 'بوليفيانويان', pluralAr: 'بوليفيانويات', fraction: 'centavo', fractionPlural: 'centavos', fractionSingularAr: 'سنتافو', fractionDualAr: 'سنتافوان', fractionPluralAr: 'سنتافوات', decimals: 2 },
  { code: 'BRL', name: 'Brazilian Real', nameAr: 'ريال برازيلي', symbol: 'R$', singular: 'real', plural: 'reais', singularAr: 'ريال', dualAr: 'ريالان', pluralAr: 'ريالات', fraction: 'centavo', fractionPlural: 'centavos', fractionSingularAr: 'سنتافو', fractionDualAr: 'سنتافوان', fractionPluralAr: 'سنتافوات', decimals: 2 },
  { code: 'BSD', name: 'Bahamian Dollar', nameAr: 'دولار باهامي', symbol: '$', singular: 'dollar', plural: 'dollars', singularAr: 'دولار', dualAr: 'دولاران', pluralAr: 'دولارات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'BTN', name: 'Bhutanese Ngultrum', nameAr: 'نغولتروم بوتاني', symbol: 'Nu.', singular: 'ngultrum', plural: 'ngultrums', singularAr: 'نغولتروم', dualAr: 'نغولترومان', pluralAr: 'نغولترومات', fraction: 'chetrum', fractionPlural: 'chetrums', fractionSingularAr: 'شتروم', fractionDualAr: 'شترومان', fractionPluralAr: 'شترومات', decimals: 2 },
  { code: 'BWP', name: 'Botswanan Pula', nameAr: 'بولا بوتسواني', symbol: 'P', singular: 'pula', plural: 'pula', singularAr: 'بولا', dualAr: 'بولان', pluralAr: 'بولات', fraction: 'thebe', fractionPlural: 'thebe', fractionSingularAr: 'ثيبي', fractionDualAr: 'ثيبيان', fractionPluralAr: 'ثيبيات', decimals: 2 },
  { code: 'BYN', name: 'Belarusian Ruble', nameAr: 'روبل بيلاروسي', symbol: 'Br', singular: 'ruble', plural: 'rubles', singularAr: 'روبل', dualAr: 'روبلان', pluralAr: 'روبلات', fraction: 'kopek', fractionPlural: 'kopeks', fractionSingularAr: 'كوبيك', fractionDualAr: 'كوبيكان', fractionPluralAr: 'كوبيكات', decimals: 2 },
  { code: 'BZD', name: 'Belize Dollar', nameAr: 'دولار بليزي', symbol: 'BZ$', singular: 'dollar', plural: 'dollars', singularAr: 'دولار', dualAr: 'دولاران', pluralAr: 'دولارات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'CAD', name: 'Canadian Dollar', nameAr: 'دولار كندي', symbol: '$', singular: 'dollar', plural: 'dollars', singularAr: 'دولار', dualAr: 'دولاران', pluralAr: 'دولارات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'CDF', name: 'Congolese Franc', nameAr: 'فرنك كونغولي', symbol: 'FC', singular: 'franc', plural: 'francs', singularAr: 'فرنك', dualAr: 'فرانكان', pluralAr: 'فرنكات', fraction: 'centime', fractionPlural: 'centimes', fractionSingularAr: 'سنتيم', fractionDualAr: 'سنتيمان', fractionPluralAr: 'سنتيمات', decimals: 2 },
  { code: 'CHF', name: 'Swiss Franc', nameAr: 'فرنك سويسري', symbol: 'CHF', singular: 'franc', plural: 'francs', singularAr: 'فرنك', dualAr: 'فرانكان', pluralAr: 'فرنكات', fraction: 'rappen', fractionPlural: 'rappen', fractionSingularAr: 'رابن', fractionDualAr: 'رابنان', fractionPluralAr: 'رابنات', decimals: 2 },
  { code: 'CLP', name: 'Chilean Peso', nameAr: 'بيزو تشيلي', symbol: '$', singular: 'peso', plural: 'pesos', singularAr: 'بيزو', dualAr: 'بيزوان', pluralAr: 'بيزوات', fraction: 'centavo', fractionPlural: 'centavos', fractionSingularAr: 'سنتافو', fractionDualAr: 'سنتافوان', fractionPluralAr: 'سنتافوات', decimals: 0 },
  { code: 'CNY', name: 'Chinese Yuan', nameAr: 'يوان صيني', symbol: '¥', singular: 'yuan', plural: 'yuan', singularAr: 'يوان', dualAr: 'يوانان', pluralAr: 'يوانات', fraction: 'fen', fractionPlural: 'fen', fractionSingularAr: 'فن', fractionDualAr: 'فنان', fractionPluralAr: 'فنات', decimals: 2 },
  { code: 'COP', name: 'Colombian Peso', nameAr: 'بيزو كولومبي', symbol: '$', singular: 'peso', plural: 'pesos', singularAr: 'بيزو', dualAr: 'بيزوان', pluralAr: 'بيزوات', fraction: 'centavo', fractionPlural: 'centavos', fractionSingularAr: 'سنتافو', fractionDualAr: 'سنتافوان', fractionPluralAr: 'سنتافوات', decimals: 2 },
  { code: 'CRC', name: 'Costa Rican Colón', nameAr: 'كولون كوستاريكي', symbol: '₡', singular: 'colón', plural: 'colones', singularAr: 'كولون', dualAr: 'كولونان', pluralAr: 'كولونات', fraction: 'céntimo', fractionPlural: 'céntimos', fractionSingularAr: 'سنتيمو', fractionDualAr: 'سنتيموان', fractionPluralAr: 'سنتيموات', decimals: 2 },
  { code: 'CUP', name: 'Cuban Peso', nameAr: 'بيزو كوبي', symbol: '₱', singular: 'peso', plural: 'pesos', singularAr: 'بيزو', dualAr: 'بيزوان', pluralAr: 'بيزوات', fraction: 'centavo', fractionPlural: 'centavos', fractionSingularAr: 'سنتافو', fractionDualAr: 'سنتافوان', fractionPluralAr: 'سنتافوات', decimals: 2 },
  { code: 'CVE', name: 'Cape Verdean Escudo', nameAr: 'إيسكودو جزر الرأس الأخضر', symbol: '$', singular: 'escudo', plural: 'escudos', singularAr: 'إيسكودو', dualAr: 'إيسكودوان', pluralAr: 'إيسكودوات', fraction: 'centavo', fractionPlural: 'centavos', fractionSingularAr: 'سنتافو', fractionDualAr: 'سنتافوان', fractionPluralAr: 'سنتافوات', decimals: 2 },
  { code: 'CZK', name: 'Czech Republic Koruna', nameAr: 'كرونة تشيكية', symbol: 'Kč', singular: 'koruna', plural: 'koruny', singularAr: 'كرونة', dualAr: 'كرونتان', pluralAr: 'كرونات', fraction: 'haléř', fractionPlural: 'haléře', fractionSingularAr: 'هلير', fractionDualAr: 'هليران', fractionPluralAr: 'هليرات', decimals: 2 },
  { code: 'DJF', name: 'Djiboutian Franc', nameAr: 'فرنك جيبوتي', symbol: 'Fdj', singular: 'franc', plural: 'francs', singularAr: 'فرنك', dualAr: 'فرانكان', pluralAr: 'فرنكات', fraction: 'centime', fractionPlural: 'centimes', fractionSingularAr: 'سنتيم', fractionDualAr: 'سنتيمان', fractionPluralAr: 'سنتيمات', decimals: 0 },
  { code: 'DKK', name: 'Danish Krone', nameAr: 'كرونة دنماركية', symbol: 'kr', singular: 'krone', plural: 'kroner', singularAr: 'كرونة', dualAr: 'كرونتان', pluralAr: 'كرونات', fraction: 'øre', fractionPlural: 'øre', fractionSingularAr: 'أوره', fractionDualAr: 'أورتان', fractionPluralAr: 'أورات', decimals: 2 },
  { code: 'DOP', name: 'Dominican Peso', nameAr: 'بيزو دومينيكاني', symbol: 'RD$', singular: 'peso', plural: 'pesos', singularAr: 'بيزو', dualAr: 'بيزوان', pluralAr: 'بيزوات', fraction: 'centavo', fractionPlural: 'centavos', fractionSingularAr: 'سنتافو', fractionDualAr: 'سنتافوان', fractionPluralAr: 'سنتافوات', decimals: 2 },
  { code: 'DZD', name: 'Algerian Dinar', nameAr: 'دينار جزائري', symbol: 'د.ج', singular: 'dinar', plural: 'dinars', singularAr: 'دينار', dualAr: 'ديناران', pluralAr: 'دنانير', fraction: 'santeem', fractionPlural: 'santeems', fractionSingularAr: 'سنتيم', fractionDualAr: 'سنتيمان', fractionPluralAr: 'سنتيمات', decimals: 2 },
  { code: 'EGP', name: 'Egyptian Pound', nameAr: 'جنيه مصري', symbol: 'ج.م', singular: 'pound', plural: 'pounds', singularAr: 'جنيه', dualAr: 'جنيهان', pluralAr: 'جنيهات', fraction: 'piastre', fractionPlural: 'piastres', fractionSingularAr: 'قرش', fractionDualAr: 'قرشان', fractionPluralAr: 'قروش', decimals: 2 },
  { code: 'ERN', name: 'Eritrean Nakfa', nameAr: 'ناكفا إريتري', symbol: 'Nfk', singular: 'nakfa', plural: 'nakfa', singularAr: 'ناكفا', dualAr: 'ناكفان', pluralAr: 'ناكفات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'ETB', name: 'Ethiopian Birr', nameAr: 'بير إثيوبي', symbol: 'Br', singular: 'birr', plural: 'birr', singularAr: 'بير', dualAr: 'بيران', pluralAr: 'بيرات', fraction: 'santim', fractionPlural: 'santim', fractionSingularAr: 'سانتيم', fractionDualAr: 'سانتيمان', fractionPluralAr: 'سانتيمات', decimals: 2 },
  { code: 'EUR', name: 'Euro', nameAr: 'يورو', symbol: '€', singular: 'euro', plural: 'euros', singularAr: 'يورو', dualAr: 'يورو', pluralAr: 'يورو', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'FJD', name: 'Fijian Dollar', nameAr: 'دولار فيجي', symbol: '$', singular: 'dollar', plural: 'dollars', singularAr: 'دولار', dualAr: 'دولاران', pluralAr: 'دولارات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'GBP', name: 'British Pound', nameAr: 'جنيه إسترليني', symbol: '£', singular: 'pound', plural: 'pounds', singularAr: 'جنيه', dualAr: 'جنيهان', pluralAr: 'جنيهات', fraction: 'penny', fractionPlural: 'pence', fractionSingularAr: 'بني', fractionDualAr: 'بنيان', fractionPluralAr: 'بنسات', decimals: 2 },
  { code: 'GEL', name: 'Georgian Lari', nameAr: 'لاري جورجي', symbol: '₾', singular: 'lari', plural: 'lari', singularAr: 'لاري', dualAr: 'لاريان', pluralAr: 'لاريات', fraction: 'tetri', fractionPlural: 'tetri', fractionSingularAr: 'تتري', fractionDualAr: 'تتريان', fractionPluralAr: 'تتريات', decimals: 2 },
  { code: 'GHS', name: 'Ghanaian Cedi', nameAr: 'سيدي غاني', symbol: 'GH₵', singular: 'cedi', plural: 'cedis', singularAr: 'سيدي', dualAr: 'سيديان', pluralAr: 'سيديات', fraction: 'pesewa', fractionPlural: 'pesewas', fractionSingularAr: 'بيزيوا', fractionDualAr: 'بيزيوان', fractionPluralAr: 'بيزيوا', decimals: 2 },
  { code: 'GMD', name: 'Gambian Dalasi', nameAr: 'دالاسي غامبي', symbol: 'D', singular: 'dalasi', plural: 'dalasis', singularAr: 'دالاسي', dualAr: 'دالاسيان', pluralAr: 'دالاسيات', fraction: 'butut', fractionPlural: 'bututs', fractionSingularAr: 'بوتوت', fractionDualAr: 'بوتوتان', fractionPluralAr: 'بوتوتات', decimals: 2 },
  { code: 'GNF', name: 'Guinean Franc', nameAr: 'فرنك غيني', symbol: 'FG', singular: 'franc', plural: 'francs', singularAr: 'فرنك', dualAr: 'فرانكان', pluralAr: 'فرنكات', fraction: 'centime', fractionPlural: 'centimes', fractionSingularAr: 'سنتيم', fractionDualAr: 'سنتيمان', fractionPluralAr: 'سنتيمات', decimals: 0 },
  { code: 'GTQ', name: 'Guatemalan Quetzal', nameAr: 'كتزال غواتيمالي', symbol: 'Q', singular: 'quetzal', plural: 'quetzales', singularAr: 'كتزال', dualAr: 'كتزالان', pluralAr: 'كتزالات', fraction: 'centavo', fractionPlural: 'centavos', fractionSingularAr: 'سنتافو', fractionDualAr: 'سنتافوان', fractionPluralAr: 'سنتافوات', decimals: 2 },
  { code: 'GYD', name: 'Guyanaese Dollar', nameAr: 'دولار غياني', symbol: '$', singular: 'dollar', plural: 'dollars', singularAr: 'دولار', dualAr: 'دولاران', pluralAr: 'دولارات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'HKD', name: 'Hong Kong Dollar', nameAr: 'دولار هونج كونج', symbol: '$', singular: 'dollar', plural: 'dollars', singularAr: 'دولار', dualAr: 'دولاران', pluralAr: 'دولارات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'HNL', name: 'Honduran Lempira', nameAr: 'لمبيرة هندوراسية', symbol: 'L', singular: 'lempira', plural: 'lempiras', singularAr: 'لمبيرة', dualAr: 'لمبيرتان', pluralAr: 'لمبيرات', fraction: 'centavo', fractionPlural: 'centavos', fractionSingularAr: 'سنتافو', fractionDualAr: 'سنتافوان', fractionPluralAr: 'سنتافوات', decimals: 2 },
  { code: 'HRK', name: 'Croatian Kuna', nameAr: 'كونا كرواتي', symbol: 'kn', singular: 'kuna', plural: 'kuna', singularAr: 'كونا', dualAr: 'كونان', pluralAr: 'كونات', fraction: 'lipa', fractionPlural: 'lipa', fractionSingularAr: 'ليبا', fractionDualAr: 'ليبان', fractionPluralAr: 'ليبات', decimals: 2 },
  { code: 'HTG', name: 'Haitian Gourde', nameAr: 'غورد هايتي', symbol: 'G', singular: 'gourde', plural: 'gourdes', singularAr: 'غورد', dualAr: 'غوردان', pluralAr: 'غوردات', fraction: 'centime', fractionPlural: 'centimes', fractionSingularAr: 'سنتيم', fractionDualAr: 'سنتيمان', fractionPluralAr: 'سنتيمات', decimals: 2 },
  { code: 'HUF', name: 'Hungarian Forint', nameAr: 'فورنت مجري', symbol: 'Ft', singular: 'forint', plural: 'forint', singularAr: 'فورنت', dualAr: 'فورنتان', pluralAr: 'فورنتات', fraction: 'fillér', fractionPlural: 'fillér', fractionSingularAr: 'فيلير', fractionDualAr: 'فيليران', fractionPluralAr: 'فيليرات', decimals: 2 },
  { code: 'IDR', name: 'Indonesian Rupiah', nameAr: 'روبية إندونيسية', symbol: 'Rp', singular: 'rupiah', plural: 'rupiah', singularAr: 'روبية', dualAr: 'روبيتان', pluralAr: 'روبيات', fraction: 'sen', fractionPlural: 'sen', fractionSingularAr: 'سن', fractionDualAr: 'سنان', fractionPluralAr: 'سنات', decimals: 2 },
  { code: 'ILS', name: 'Israeli New Sheqel', nameAr: 'شيكل إسرائيلي جديد', symbol: '₪', singular: 'sheqel', plural: 'sheqalim', singularAr: 'شيكل', dualAr: 'شيكلان', pluralAr: 'شواقل', fraction: 'agora', fractionPlural: 'agorot', fractionSingularAr: 'أغورة', fractionDualAr: 'أغورتان', fractionPluralAr: 'أغورات', decimals: 2 },
  { code: 'INR', name: 'Indian Rupee', nameAr: 'روبية هندية', symbol: '₹', singular: 'rupee', plural: 'rupees', singularAr: 'روبية', dualAr: 'روبيتان', pluralAr: 'روبيات', fraction: 'paisa', fractionPlural: 'paise', fractionSingularAr: 'بيسة', fractionDualAr: 'بيستان', fractionPluralAr: 'بيسات', decimals: 2 },
  { code: 'IQD', name: 'Iraqi Dinar', nameAr: 'دينار عراقي', symbol: 'ع.د', singular: 'dinar', plural: 'dinars', singularAr: 'دينار', dualAr: 'ديناران', pluralAr: 'دنانير', fraction: 'fils', fractionPlural: 'fils', fractionSingularAr: 'فلس', fractionDualAr: 'فلسان', fractionPluralAr: 'فلوس', decimals: 3 },
  { code: 'IRR', name: 'Iranian Rial', nameAr: 'ريال إيراني', symbol: '﷼', singular: 'rial', plural: 'rials', singularAr: 'ريال', dualAr: 'ريالان', pluralAr: 'ريالات', fraction: 'dinar', fractionPlural: 'dinars', fractionSingularAr: 'دينار', fractionDualAr: 'ديناران', fractionPluralAr: 'دنانير', decimals: 2 },
  { code: 'ISK', name: 'Icelandic Króna', nameAr: 'كرونة آيسلندية', symbol: 'kr', singular: 'króna', plural: 'krónur', singularAr: 'كرونة', dualAr: 'كرونتان', pluralAr: 'كرونات', fraction: 'eyrir', fractionPlural: 'aurar', fractionSingularAr: 'أيير', fractionDualAr: 'أييران', fractionPluralAr: 'أييرات', decimals: 0 },
  { code: 'JMD', name: 'Jamaican Dollar', nameAr: 'دولار جامايكي', symbol: 'J$', singular: 'dollar', plural: 'dollars', singularAr: 'دولار', dualAr: 'دولاران', pluralAr: 'دولارات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'JOD', name: 'Jordanian Dinar', nameAr: 'دينار أردني', symbol: 'د.أ', singular: 'dinar', plural: 'dinars', singularAr: 'دينار', dualAr: 'ديناران', pluralAr: 'دنانير', fraction: 'piastre', fractionPlural: 'piastres', fractionSingularAr: 'قرش', fractionDualAr: 'قرشان', fractionPluralAr: 'قروش', decimals: 2 },
  { code: 'JPY', name: 'Japanese Yen', nameAr: 'ين ياباني', symbol: '¥', singular: 'yen', plural: 'yen', singularAr: 'ين', dualAr: 'ينان', pluralAr: 'ينات', fraction: 'sen', fractionPlural: 'sen', fractionSingularAr: 'سن', fractionDualAr: 'سنان', fractionPluralAr: 'سنات', decimals: 0 },
  { code: 'KES', name: 'Kenyan Shilling', nameAr: 'شلن كيني', symbol: 'KSh', singular: 'shilling', plural: 'shillings', singularAr: 'شلن', dualAr: 'شلان', pluralAr: 'شلنات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'KGS', name: 'Kyrgystani Som', nameAr: 'سوم قيرغيزستاني', symbol: 'лв', singular: 'som', plural: 'som', singularAr: 'سوم', dualAr: 'صومان', pluralAr: 'صومات', fraction: 'tyiyn', fractionPlural: 'tyiyn', fractionSingularAr: 'تيين', fractionDualAr: 'تيينان', fractionPluralAr: 'تيينات', decimals: 2 },
  { code: 'KHR', name: 'Cambodian Riel', nameAr: 'ريال كمبودي', symbol: '៛', singular: 'riel', plural: 'riels', singularAr: 'ريال', dualAr: 'ريالان', pluralAr: 'ريالات', fraction: 'sen', fractionPlural: 'sen', fractionSingularAr: 'سن', fractionDualAr: 'سنان', fractionPluralAr: 'سنات', decimals: 2 },
  { code: 'KMF', name: 'Comorian Franc', nameAr: 'فرنك قمري', symbol: 'CF', singular: 'franc', plural: 'francs', singularAr: 'فرنك', dualAr: 'فرانكان', pluralAr: 'فرنكات', fraction: 'centime', fractionPlural: 'centimes', fractionSingularAr: 'سنتيم', fractionDualAr: 'سنتيمان', fractionPluralAr: 'سنتيمات', decimals: 0 },
  { code: 'KRW', name: 'South Korean Won', nameAr: 'وون كوري جنوبي', symbol: '₩', singular: 'won', plural: 'won', singularAr: 'وون', dualAr: 'وونان', pluralAr: 'وونات', fraction: 'jeon', fractionPlural: 'jeon', fractionSingularAr: 'جون', fractionDualAr: 'جونان', fractionPluralAr: 'جونات', decimals: 0 },
  { code: 'KWD', name: 'Kuwaiti Dinar', nameAr: 'دينار كويتي', symbol: 'د.ك', singular: 'dinar', plural: 'dinars', singularAr: 'دينار', dualAr: 'ديناران', pluralAr: 'دنانير', fraction: 'fils', fractionPlural: 'fils', fractionSingularAr: 'فلس', fractionDualAr: 'فلسان', fractionPluralAr: 'فلوس', decimals: 3 },
  { code: 'KZT', name: 'Kazakhstani Tenge', nameAr: 'تينغ كازاخستاني', symbol: '₸', singular: 'tenge', plural: 'tenge', singularAr: 'تينغ', dualAr: 'تينغان', pluralAr: 'تينغات', fraction: 'tiyn', fractionPlural: 'tiyn', fractionSingularAr: 'تيين', fractionDualAr: 'تيينان', fractionPluralAr: 'تيينات', decimals: 2 },
  { code: 'LAK', name: 'Laotian Kip', nameAr: 'كيب لاوسي', symbol: '₭', singular: 'kip', plural: 'kip', singularAr: 'كيب', dualAr: 'كيبان', pluralAr: 'كيبات', fraction: 'att', fractionPlural: 'att', fractionSingularAr: 'أت', fractionDualAr: 'أتان', fractionPluralAr: 'أتات', decimals: 2 },
  { code: 'LBP', name: 'Lebanese Pound', nameAr: 'ليرة لبنانية', symbol: 'ل.ل', singular: 'pound', plural: 'pounds', singularAr: 'ليرة', dualAr: 'ليرتان', pluralAr: 'ليرات', fraction: 'piastre', fractionPlural: 'piastres', fractionSingularAr: 'قرش', fractionDualAr: 'قرشان', fractionPluralAr: 'قروش', decimals: 2 },
  { code: 'LKR', name: 'Sri Lankan Rupee', nameAr: 'روبية سريلانكية', symbol: 'Rs', singular: 'rupee', plural: 'rupees', singularAr: 'روبية', dualAr: 'روبيتان', pluralAr: 'روبيات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'LRD', name: 'Liberian Dollar', nameAr: 'دولار ليبيري', symbol: '$', singular: 'dollar', plural: 'dollars', singularAr: 'دولار', dualAr: 'دولاران', pluralAr: 'دولارات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'LSL', name: 'Lesotho Loti', nameAr: 'لوتي ليسوتو', symbol: 'L', singular: 'loti', plural: 'maloti', singularAr: 'لوتي', dualAr: 'لوتيان', pluralAr: 'مالوتي', fraction: 'sente', fractionPlural: 'lisente', fractionSingularAr: 'سنتي', fractionDualAr: 'سنتيان', fractionPluralAr: 'ليسنتي', decimals: 2 },
  { code: 'LYD', name: 'Libyan Dinar', nameAr: 'دينار ليبي', symbol: 'ل.د', singular: 'dinar', plural: 'dinars', singularAr: 'دينار', dualAr: 'ديناران', pluralAr: 'دنانير', fraction: 'dirham', fractionPlural: 'dirhams', fractionSingularAr: 'درهم', fractionDualAr: 'درهمان', fractionPluralAr: 'دراهم', decimals: 3 },
  { code: 'MAD', name: 'Moroccan Dirham', nameAr: 'درهم مغربي', symbol: 'د.م.', singular: 'dirham', plural: 'dirhams', singularAr: 'درهم', dualAr: 'درهمان', pluralAr: 'دراهم', fraction: 'centime', fractionPlural: 'centimes', fractionSingularAr: 'سنتيم', fractionDualAr: 'سنتيمان', fractionPluralAr: 'سنتيمات', decimals: 2 },
  { code: 'MDL', name: 'Moldovan Leu', nameAr: 'ليو مولدوفي', symbol: 'L', singular: 'leu', plural: 'lei', singularAr: 'ليو', dualAr: 'ليوان', pluralAr: 'ليوات', fraction: 'ban', fractionPlural: 'bani', fractionSingularAr: 'بان', fractionDualAr: 'بانان', fractionPluralAr: 'بانات', decimals: 2 },
  { code: 'MGA', name: 'Malagasy Ariary', nameAr: 'أرياري مدغشقري', symbol: 'Ar', singular: 'ariary', plural: 'ariary', singularAr: 'أرياري', dualAr: 'أرياريان', pluralAr: 'أرياريات', fraction: 'iraimbilanja', fractionPlural: 'iraimbilanja', fractionSingularAr: 'إريمبيلانيا', fractionDualAr: 'إريمبيلانيان', fractionPluralAr: 'إريمبيلانيات', decimals: 2 },
  { code: 'MKD', name: 'Macedonian Denar', nameAr: 'دينار مقدوني', symbol: 'ден', singular: 'denar', plural: 'denars', singularAr: 'دينار', dualAr: 'ديناران', pluralAr: 'دنانير', fraction: 'deni', fractionPlural: 'deni', fractionSingularAr: 'ديني', fractionDualAr: 'دينيان', fractionPluralAr: 'ديني', decimals: 2 },
  { code: 'MMK', name: 'Myanma Kyat', nameAr: 'كيات ميانماري', symbol: 'K', singular: 'kyat', plural: 'kyats', singularAr: 'كيات', dualAr: 'كياتان', pluralAr: 'كياتات', fraction: 'pya', fractionPlural: 'pyas', fractionSingularAr: 'بيا', fractionDualAr: 'بيان', fractionPluralAr: 'بيات', decimals: 2 },
  { code: 'MNT', name: 'Mongolian Tugrik', nameAr: 'توغروغ منغولي', symbol: '₮', singular: 'tugrik', plural: 'tugriks', singularAr: 'توغروغ', dualAr: 'توغروغان', pluralAr: 'توغروغات', fraction: 'möngö', fractionPlural: 'möngö', fractionSingularAr: 'مونغو', fractionDualAr: 'مونغوان', fractionPluralAr: 'مونغوات', decimals: 2 },
  { code: 'MOP', name: 'Macanese Pataca', nameAr: 'باتاكا ماكاوية', symbol: 'MOP$', singular: 'pataca', plural: 'patacas', singularAr: 'باتاكا', dualAr: 'باتاكان', pluralAr: 'باتاكات', fraction: 'avo', fractionPlural: 'avos', fractionSingularAr: 'أفو', fractionDualAr: 'أفوان', fractionPluralAr: 'أفوات', decimals: 2 },
  { code: 'MRU', name: 'Mauritanian Ouguiya', nameAr: 'أوقية موريتانية', symbol: 'UM', singular: 'ouguiya', plural: 'ouguiyas', singularAr: 'أوقية', dualAr: 'أوقيتان', pluralAr: 'أوقيات', fraction: 'khoums', fractionPlural: 'khoums', fractionSingularAr: 'خمس', fractionDualAr: 'خمسان', fractionPluralAr: 'خماس', decimals: 2 },
  { code: 'MUR', name: 'Mauritian Rupee', nameAr: 'روبية موريشية', symbol: '₨', singular: 'rupee', plural: 'rupees', singularAr: 'روبية', dualAr: 'روبيتان', pluralAr: 'روبيات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'MVR', name: 'Maldivian Rufiyaa', nameAr: 'روفية مالديفية', symbol: 'Rf', singular: 'rufiyaa', plural: 'rufiyaa', singularAr: 'روفية', dualAr: 'روفيتان', pluralAr: 'روفيات', fraction: 'laari', fractionPlural: 'laari', fractionSingularAr: 'لاري', fractionDualAr: 'لاريان', fractionPluralAr: 'لاريات', decimals: 2 },
  { code: 'MWK', name: 'Malawian Kwacha', nameAr: 'كواشا ملاوية', symbol: 'MK', singular: 'kwacha', plural: 'kwacha', singularAr: 'كواشا', dualAr: 'كواشان', pluralAr: 'كواشات', fraction: 'tambala', fractionPlural: 'tambala', fractionSingularAr: 'تامبالا', fractionDualAr: 'تامبالان', fractionPluralAr: 'تامبالات', decimals: 2 },
  { code: 'MXN', name: 'Mexican Peso', nameAr: 'بيزو مكسيكي', symbol: '$', singular: 'peso', plural: 'pesos', singularAr: 'بيزو', dualAr: 'بيزوان', pluralAr: 'بيزوات', fraction: 'centavo', fractionPlural: 'centavos', fractionSingularAr: 'سنتافو', fractionDualAr: 'سنتافوان', fractionPluralAr: 'سنتافوات', decimals: 2 },
  { code: 'MYR', name: 'Malaysian Ringgit', nameAr: 'رينغيت ماليزي', symbol: 'RM', singular: 'ringgit', plural: 'ringgit', singularAr: 'رينغيت', dualAr: 'رينغيتان', pluralAr: 'رينغيتات', fraction: 'sen', fractionPlural: 'sen', fractionSingularAr: 'سن', fractionDualAr: 'سنان', fractionPluralAr: 'سنات', decimals: 2 },
  { code: 'MZN', name: 'Mozambican Metical', nameAr: 'متكال موزمبيقي', symbol: 'MT', singular: 'metical', plural: 'meticais', singularAr: 'متكال', dualAr: 'متكالان', pluralAr: 'متكالات', fraction: 'centavo', fractionPlural: 'centavos', fractionSingularAr: 'سنتافو', fractionDualAr: 'سنتافوان', fractionPluralAr: 'سنتافوات', decimals: 2 },
  { code: 'NAD', name: 'Namibian Dollar', nameAr: 'دولار ناميبي', symbol: '$', singular: 'dollar', plural: 'dollars', singularAr: 'دولار', dualAr: 'دولاران', pluralAr: 'دولارات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'NGN', name: 'Nigerian Naira', nameAr: 'نيرة نيجيرية', symbol: '₦', singular: 'naira', plural: 'naira', singularAr: 'نيرة', dualAr: 'نيرتان', pluralAr: 'نيرات', fraction: 'kobo', fractionPlural: 'kobo', fractionSingularAr: 'كوبو', fractionDualAr: 'كوبوان', fractionPluralAr: 'كوبوات', decimals: 2 },
  { code: 'NIO', name: 'Nicaraguan Córdoba', nameAr: 'كوردبا نيكاراغوا', symbol: 'C$', singular: 'córdoba', plural: 'córdobas', singularAr: 'كوردبا', dualAr: 'كوردبان', pluralAr: 'كوردبات', fraction: 'centavo', fractionPlural: 'centavos', fractionSingularAr: 'سنتافو', fractionDualAr: 'سنتافوان', fractionPluralAr: 'سنتافوات', decimals: 2 },
  { code: 'NOK', name: 'Norwegian Krone', nameAr: 'كرونة نرويجية', symbol: 'kr', singular: 'krone', plural: 'kroner', singularAr: 'كرونة', dualAr: 'كرونتان', pluralAr: 'كرونات', fraction: 'øre', fractionPlural: 'øre', fractionSingularAr: 'أوره', fractionDualAr: 'أورتان', fractionPluralAr: 'أورات', decimals: 2 },
  { code: 'NPR', name: 'Nepalese Rupee', nameAr: 'روبية نيبالية', symbol: '₨', singular: 'rupee', plural: 'rupees', singularAr: 'روبية', dualAr: 'روبيتان', pluralAr: 'روبيات', fraction: 'paisa', fractionPlural: 'paise', fractionSingularAr: 'بيسة', fractionDualAr: 'بيستان', fractionPluralAr: 'بيسات', decimals: 2 },
  { code: 'NZD', name: 'New Zealand Dollar', nameAr: 'دولار نيوزيلندي', symbol: '$', singular: 'dollar', plural: 'dollars', singularAr: 'دولار', dualAr: 'دولاران', pluralAr: 'دولارات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'OMR', name: 'Omani Rial', nameAr: 'ريال عماني', symbol: 'ر.ع.', singular: 'rial', plural: 'rials', singularAr: 'ريال', dualAr: 'ريالان', pluralAr: 'ريالات', fraction: 'baisa', fractionPlural: 'baisa', fractionSingularAr: 'بيسة', fractionDualAr: 'بيستان', fractionPluralAr: 'بيسات', decimals: 3 },
  { code: 'PAB', name: 'Panamanian Balboa', nameAr: 'بالبوا بنمي', symbol: 'B/.', singular: 'balboa', plural: 'balboas', singularAr: 'بالبوا', dualAr: 'بالبوان', pluralAr: 'بالبوات', fraction: 'centésimo', fractionPlural: 'centésimos', fractionSingularAr: 'سنتيسيمو', fractionDualAr: 'سنتيسيموان', fractionPluralAr: 'سنتيسيموات', decimals: 2 },
  { code: 'PEN', name: 'Peruvian Nuevo Sol', nameAr: 'سول بيروفي جديد', symbol: 'S/.', singular: 'sol', plural: 'soles', singularAr: 'سول', dualAr: 'سولان', pluralAr: 'سولات', fraction: 'céntimo', fractionPlural: 'céntimos', fractionSingularAr: 'سنتيمو', fractionDualAr: 'سنتيموان', fractionPluralAr: 'سنتيموات', decimals: 2 },
  { code: 'PGK', name: 'Papua New Guinean Kina', nameAr: 'كينا بابوا غينيا الجديدة', symbol: 'K', singular: 'kina', plural: 'kina', singularAr: 'كينا', dualAr: 'كينان', pluralAr: 'كينات', fraction: 'toea', fractionPlural: 'toea', fractionSingularAr: 'تويا', fractionDualAr: 'تويان', fractionPluralAr: 'تويات', decimals: 2 },
  { code: 'PHP', name: 'Philippine Peso', nameAr: 'بيزو فلبيني', symbol: '₱', singular: 'peso', plural: 'pesos', singularAr: 'بيزو', dualAr: 'بيزوان', pluralAr: 'بيزوات', fraction: 'centavo', fractionPlural: 'centavos', fractionSingularAr: 'سنتافو', fractionDualAr: 'سنتافوان', fractionPluralAr: 'سنتافوات', decimals: 2 },
  { code: 'PKR', name: 'Pakistani Rupee', nameAr: 'روبية باكستانية', symbol: '₨', singular: 'rupee', plural: 'rupees', singularAr: 'روبية', dualAr: 'روبيتان', pluralAr: 'روبيات', fraction: 'paisa', fractionPlural: 'paise', fractionSingularAr: 'بيسة', fractionDualAr: 'بيستان', fractionPluralAr: 'بيسات', decimals: 2 },
  { code: 'PLN', name: 'Polish Zloty', nameAr: 'زلوتي بولندي', symbol: 'zł', singular: 'zloty', plural: 'zlotys', singularAr: 'زلوتي', dualAr: 'زلوتيان', pluralAr: 'زلوتيات', fraction: 'grosz', fractionPlural: 'groszy', fractionSingularAr: 'غروش', fractionDualAr: 'غروشان', fractionPluralAr: 'غروشات', decimals: 2 },
  { code: 'PYG', name: 'Paraguayan Guarani', nameAr: 'غواراني باراغواي', symbol: '₲', singular: 'guarani', plural: 'guaranies', singularAr: 'غواراني', dualAr: 'غوارانيان', pluralAr: 'غوارانيات', fraction: 'céntimo', fractionPlural: 'céntimos', fractionSingularAr: 'سنتيمو', fractionDualAr: 'سنتيموان', fractionPluralAr: 'سنتيموات', decimals: 0 },
  { code: 'QAR', name: 'Qatari Riyal', nameAr: 'ريال قطري', symbol: 'ر.ق', singular: 'riyal', plural: 'riyals', singularAr: 'ريال', dualAr: 'ريالان', pluralAr: 'ريالات', fraction: 'dirham', fractionPlural: 'dirhams', fractionSingularAr: 'درهم', fractionDualAr: 'درهمان', fractionPluralAr: 'دراهم', decimals: 2 },
  { code: 'RON', name: 'Romanian Leu', nameAr: 'ليو روماني', symbol: 'lei', singular: 'leu', plural: 'lei', singularAr: 'ليو', dualAr: 'ليوان', pluralAr: 'ليوات', fraction: 'ban', fractionPlural: 'bani', fractionSingularAr: 'بان', fractionDualAr: 'بانان', fractionPluralAr: 'بانات', decimals: 2 },
  { code: 'RSD', name: 'Serbian Dinar', nameAr: 'دينار صربي', symbol: 'дин.', singular: 'dinar', plural: 'dinars', singularAr: 'دينار', dualAr: 'ديناران', pluralAr: 'دنانير', fraction: 'para', fractionPlural: 'para', fractionSingularAr: 'بارا', fractionDualAr: 'باران', fractionPluralAr: 'بارات', decimals: 2 },
  { code: 'RUB', name: 'Russian Ruble', nameAr: 'روبل روسي', symbol: '₽', singular: 'ruble', plural: 'rubles', singularAr: 'روبل', dualAr: 'روبلان', pluralAr: 'روبلات', fraction: 'kopek', fractionPlural: 'kopeks', fractionSingularAr: 'كوبيك', fractionDualAr: 'كوبيكان', fractionPluralAr: 'كوبيكات', decimals: 2 },
  { code: 'RWF', name: 'Rwandan Franc', nameAr: 'فرنك رواندي', symbol: 'R₣', singular: 'franc', plural: 'francs', singularAr: 'فرنك', dualAr: 'فرانكان', pluralAr: 'فرنكات', fraction: 'centime', fractionPlural: 'centimes', fractionSingularAr: 'سنتيم', fractionDualAr: 'سنتيمان', fractionPluralAr: 'سنتيمات', decimals: 0 },
  { code: 'SAR', name: 'Saudi Riyal', nameAr: 'ريال سعودي', symbol: 'ر.س', singular: 'riyal', plural: 'riyals', singularAr: 'ريال', dualAr: 'ريالان', pluralAr: 'ريالات', fraction: 'halala', fractionPlural: 'halalas', fractionSingularAr: 'هللة', fractionDualAr: 'هللتان', fractionPluralAr: 'هللات', decimals: 2 },
  { code: 'SDG', name: 'Sudanese Pound', nameAr: 'جنيه سوداني', symbol: 'ج.س.', singular: 'pound', plural: 'pounds', singularAr: 'جنيه', dualAr: 'جنيهان', pluralAr: 'جنيهات', fraction: 'piastre', fractionPlural: 'piastres', fractionSingularAr: 'قرش', fractionDualAr: 'قرشان', fractionPluralAr: 'قروش', decimals: 2 },
  { code: 'SEK', name: 'Swedish Krona', nameAr: 'كرونة سويدية', symbol: 'kr', singular: 'krona', plural: 'kronor', singularAr: 'كرونة', dualAr: 'كرونتان', pluralAr: 'كرونات', fraction: 'öre', fractionPlural: 'öre', fractionSingularAr: 'أوره', fractionDualAr: 'أورتان', fractionPluralAr: 'أورات', decimals: 2 },
  { code: 'SGD', name: 'Singapore Dollar', nameAr: 'دولار سنغافوري', symbol: '$', singular: 'dollar', plural: 'dollars', singularAr: 'دولار', dualAr: 'دولاران', pluralAr: 'دولارات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'SOS', name: 'Somali Shilling', nameAr: 'شلن صومالي', symbol: 'S', singular: 'shilling', plural: 'shillings', singularAr: 'شلن', dualAr: 'شلان', pluralAr: 'شلنات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'SYP', name: 'Syrian Pound', nameAr: 'ليرة سورية', symbol: '£', singular: 'pound', plural: 'pounds', singularAr: 'ليرة', dualAr: 'ليرتان', pluralAr: 'ليرات', fraction: 'piastre', fractionPlural: 'piastres', fractionSingularAr: 'قرش', fractionDualAr: 'قرشان', fractionPluralAr: 'قروش', decimals: 2 },
  { code: 'THB', name: 'Thai Baht', nameAr: 'بات تايلاندي', symbol: '฿', singular: 'baht', plural: 'baht', singularAr: 'بات', dualAr: 'باتان', pluralAr: 'باتات', fraction: 'satang', fractionPlural: 'satang', fractionSingularAr: 'ساتانغ', fractionDualAr: 'ساتانغان', fractionPluralAr: 'ساتانغات', decimals: 2 },
  { code: 'TJS', name: 'Tajikistani Somoni', nameAr: 'ساماني طاجيكستاني', symbol: 'SM', singular: 'somoni', plural: 'somoni', singularAr: 'ساماني', dualAr: 'سامانيان', pluralAr: 'سامانيات', fraction: 'diram', fractionPlural: 'dirams', fractionSingularAr: 'درهم', fractionDualAr: 'درهمان', fractionPluralAr: 'دراهم', decimals: 2 },
  { code: 'TMT', name: 'Turkmenistani Manat', nameAr: 'مانات تركمانستاني', symbol: 'm', singular: 'manat', plural: 'manat', singularAr: 'مانات', dualAr: 'ماناتان', pluralAr: 'ماناتات', fraction: 'tenge', fractionPlural: 'tenge', fractionSingularAr: 'تينغ', fractionDualAr: 'تينغان', fractionPluralAr: 'تينغات', decimals: 2 },
  { code: 'TND', name: 'Tunisian Dinar', nameAr: 'دينار تونسي', symbol: 'د.ت', singular: 'dinar', plural: 'dinars', singularAr: 'دينار', dualAr: 'ديناران', pluralAr: 'دنانير', fraction: 'millime', fractionPlural: 'millimes', fractionSingularAr: 'مليم', fractionDualAr: 'مليمان', fractionPluralAr: 'مليمات', decimals: 3 },
  { code: 'TOP', name: 'Tongan Paʻanga', nameAr: 'بانجا تونغي', symbol: 'T$', singular: 'paʻanga', plural: 'paʻanga', singularAr: 'بانجا', dualAr: 'بانجان', pluralAr: 'بانجات', fraction: 'seniti', fractionPlural: 'seniti', fractionSingularAr: 'سينيتي', fractionDualAr: 'سينيتيان', fractionPluralAr: 'سينيتيات', decimals: 2 },
  { code: 'TRY', name: 'Turkish Lira', nameAr: 'ليرة تركية', symbol: '₺', singular: 'lira', plural: 'lira', singularAr: 'ليرة', dualAr: 'ليرتان', pluralAr: 'ليرات', fraction: 'kuruş', fractionPlural: 'kuruş', fractionSingularAr: 'قرش', fractionDualAr: 'قرشان', fractionPluralAr: 'قروش', decimals: 2 },
  { code: 'TTD', name: 'Trinidad and Tobago Dollar', nameAr: 'دولار ترينيداد وتوباغو', symbol: 'TT$', singular: 'dollar', plural: 'dollars', singularAr: 'دولار', dualAr: 'دولاران', pluralAr: 'دولارات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'TWD', name: 'New Taiwan Dollar', nameAr: 'دولار تايواني جديد', symbol: 'NT$', singular: 'dollar', plural: 'dollars', singularAr: 'دولار', dualAr: 'دولاران', pluralAr: 'دولارات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'TZS', name: 'Tanzanian Shilling', nameAr: 'شلن تنزاني', symbol: 'TSh', singular: 'shilling', plural: 'shillings', singularAr: 'شلن', dualAr: 'شلان', pluralAr: 'شلنات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'UAH', name: 'Ukrainian Hryvnia', nameAr: 'هريفنيا أوكرانية', symbol: '₴', singular: 'hryvnia', plural: 'hryvnias', singularAr: 'هريفنيا', dualAr: 'هريفنيان', pluralAr: 'هريفنيات', fraction: 'kopiyka', fractionPlural: 'kopiyky', fractionSingularAr: 'كوبيكا', fractionDualAr: 'كوبيكتان', fractionPluralAr: 'كوبيكات', decimals: 2 },
  { code: 'UGX', name: 'Ugandan Shilling', nameAr: 'شلن أوغندي', symbol: 'USh', singular: 'shilling', plural: 'shillings', singularAr: 'شلن', dualAr: 'شلان', pluralAr: 'شلنات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 0 },
  { code: 'USD', name: 'US Dollar', nameAr: 'دولار أمريكي', symbol: '$', singular: 'dollar', plural: 'dollars', singularAr: 'دولار', dualAr: 'دولاران', pluralAr: 'دولارات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'UYU', name: 'Uruguayan Peso', nameAr: 'بيزو أوروغواي', symbol: '$U', singular: 'peso', plural: 'pesos', singularAr: 'بيزو', dualAr: 'بيزوان', pluralAr: 'بيزوات', fraction: 'centésimo', fractionPlural: 'centésimos', fractionSingularAr: 'سنتيسيمو', fractionDualAr: 'سنتيسيموان', fractionPluralAr: 'سنتيسيموات', decimals: 2 },
  { code: 'UZS', name: 'Uzbekistan Som', nameAr: 'سوم أوزبكستاني', symbol: 'лв', singular: 'som', plural: 'som', singularAr: 'سوم', dualAr: 'صومان', pluralAr: 'صومات', fraction: 'tiyin', fractionPlural: 'tiyin', fractionSingularAr: 'تيين', fractionDualAr: 'تيينان', fractionPluralAr: 'تيينات', decimals: 2 },
  { code: 'VES', name: 'Venezuelan Bolívar', nameAr: 'بوليفار فنزويلي', symbol: 'Bs.', singular: 'bolívar', plural: 'bolívares', singularAr: 'بوليفار', dualAr: 'بوليفاران', pluralAr: 'بوليفارات', fraction: 'céntimo', fractionPlural: 'céntimos', fractionSingularAr: 'سنتيمو', fractionDualAr: 'سنتيموان', fractionPluralAr: 'سنتيموات', decimals: 2 },
  { code: 'VND', name: 'Vietnamese Dong', nameAr: 'دونج فيتنامي', symbol: '₫', singular: 'dong', plural: 'dong', singularAr: 'دونج', dualAr: 'دونجان', pluralAr: 'دونجات', fraction: 'hao', fractionPlural: 'hao', fractionSingularAr: 'هاو', fractionDualAr: 'هاوان', fractionPluralAr: 'هاوات', decimals: 0 },
  { code: 'YER', name: 'Yemeni Rial', nameAr: 'ريال يمني', symbol: '﷼', singular: 'rial', plural: 'rials', singularAr: 'ريال', dualAr: 'ريالان', pluralAr: 'ريالات', fraction: 'fils', fractionPlural: 'fils', fractionSingularAr: 'فلس', fractionDualAr: 'فلسان', fractionPluralAr: 'فلوس', decimals: 2 },
  { code: 'ZAR', name: 'South African Rand', nameAr: 'راند جنوب أفريقي', symbol: 'R', singular: 'rand', plural: 'rand', singularAr: 'راند', dualAr: 'راندان', pluralAr: 'راندات', fraction: 'cent', fractionPlural: 'cents', fractionSingularAr: 'سنت', fractionDualAr: 'سنتان', fractionPluralAr: 'سنتات', decimals: 2 },
  { code: 'ZMW', name: 'Zambian Kwacha', nameAr: 'كواشا زامبي', symbol: 'ZK', singular: 'kwacha', plural: 'kwacha', singularAr: 'كواشا', dualAr: 'كواشان', pluralAr: 'كواشات', fraction: 'ngwee', fractionPlural: 'ngwee', fractionSingularAr: 'نغوي', fractionDualAr: 'نغويان', fractionPluralAr: 'نغويات', decimals: 2 },
].sort((a, b) => a.name.localeCompare(b.name));