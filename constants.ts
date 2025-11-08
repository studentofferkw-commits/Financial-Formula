
// FIX: Implemented missing constants for navigation, articles, and currencies.
import { NavLinkInfo, Article, Currency, GlossaryTerm } from './types.ts';

export const NAV_LINKS: NavLinkInfo[] = [
  { path: '/', key: 'home' },
  { path: '/number-converter', key: 'numberConverter' },
  { path: '/date-converter', key: 'dateConverter' },
  { path: '/invoice-generator', key: 'invoiceGenerator' },
  { path: '/receipt-generator', key: 'receiptGenerator' },
  { path: '/contract-clause', key: 'contractClause' },
  { path: '/loan-calculator', key: 'loanCalculator' },
  { path: '/currency-converter', key: 'currencyConverter' },
];

export const FOOTER_LINKS: NavLinkInfo[] = [
  { path: '/glossary', key: 'glossary' },
  { path: '/articles', key: 'articles' },
  { path: '/about', key: 'about' },
  { path: '/contact', key: 'contact' },
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
  },
  {
    id: '6',
    title: 'دليلك لإنشاء فواتير احترافية',
    titleEn: 'Your Guide to Creating Professional Invoices',
    summary: 'تعلم كيفية استخدام مولد الفواتير لإنشاء مستندات مالية واضحة واحترافية تعكس جودة عملك.',
    summaryEn: 'Learn how to use the invoice generator to create clear, professional financial documents that reflect the quality of your work.',
    content: `
      <p>الفاتورة ليست مجرد طلب للدفع؛ إنها وثيقة تمثل علامتك التجارية واحترافيتك. فاتورة جيدة التنظيم وواضحة تترك انطباعًا إيجابيًا لدى العملاء وتسهل عملية الدفع. إليك كيف يساعدك مولد الفواتير الخاص بنا على تحقيق ذلك.</p>
      <h3 class="font-bold text-xl mt-4">عناصر الفاتورة المثالية:</h3>
      <ul class="list-disc ps-5">
        <li><strong>بيانات واضحة:</strong> تأكد من أن اسمك وعنوانك واسم العميل وعنوانه مكتوبة بوضوح. أداة رفع الشعار تضيف لمسة احترافية إضافية.</li>
        <li><strong>تفاصيل دقيقة:</strong> يجب أن تحتوي الفاتورة على رقم فريد وتاريخ إصدار. هذا ضروري للتتبع والأغراض المحاسبية.</li>
        <li><strong>بنود مفصلة:</strong> بدلاً من مبلغ إجمالي واحد، قم بتقسيم الخدمات أو المنتجات إلى بنود منفصلة مع الكمية والسعر لكل منها. هذا يزيد من الشفافية.</li>
        <li><strong>المبلغ الإجمالي كتابةً:</strong> هذه ميزة فريدة في أداتنا، حيث يتم تحويل المبلغ الإجمالي إلى نص تلقائيًا، مما يضيف طبقة من الحماية القانونية ويمنع الأخطاء.</li>
      </ul>
      <p class="mt-4">باستخدام مولد الفواتير، يمكنك إنشاء مستندات تفي بكل هذه المعايير في دقائق، وتنزيلها كملف PDF جاهز للإرسال. ابدأ في ترك انطباع رائع لدى عملائك اليوم!</p>
    `,
    contentEn: `
      <p>An invoice is not just a request for payment; it's a document that represents your brand and professionalism. A well-organized, clear invoice leaves a positive impression on clients and facilitates the payment process. Here’s how our invoice generator helps you achieve that.</p>
      <h3 class="font-bold text-xl mt-4">Elements of a Perfect Invoice:</h3>
      <ul class="list-disc ps-5">
        <li><strong>Clear Information:</strong> Ensure your name, address, and the client's name and address are clearly stated. The logo upload feature adds an extra professional touch.</li>
        <li><strong>Accurate Details:</strong> The invoice must have a unique number and an issue date. This is crucial for tracking and accounting purposes.</li>
        <li><strong>Itemized List:</strong> Instead of a single total amount, break down services or products into separate line items with quantity and rate for each. This increases transparency.</li>
        <li><strong>Total Amount in Words:</strong> This is a unique feature of our tool, where the total amount is automatically converted to text, adding a layer of legal protection and preventing errors.</li>
      </ul>
      <p class="mt-4">Using the invoice generator, you can create documents that meet all these criteria in minutes and download them as a ready-to-send PDF. Start making a great impression on your clients today!</p>
    `,
  },
  {
    id: '7',
    title: 'صياغة بنود مالية محكمة في عقودك',
    titleEn: 'Crafting Airtight Financial Clauses in Your Contracts',
    summary: 'اكتشف كيف يمكن لمساعد صياغة البنود المالية أن يحول الطريقة التي تكتب بها العقود، مما يضيف الدقة والحماية القانونية.',
    summaryEn: 'Discover how the contract clause helper can transform the way you write contracts, adding precision and legal protection.',
    content: `
      <p>البند المالي هو قلب أي عقد تجاري. أي غموض في هذا البند يمكن أن يؤدي إلى نزاعات طويلة ومكلفة. تم تصميم "مساعد صياغة البنود المالية" لتزويدك بصياغات قوية ومفصلة تقلل من المخاطر وتزيد من الوضوح.</p>
      <h3 class="font-bold text-xl mt-4">لماذا الصياغة المفصلة مهمة؟</h3>
      <ul class="list-disc ps-5">
        <li><strong>تجنب الغموض:</strong> صياغة مثل "المبلغ شامل للضريبة" لا تترك مجالاً للشك حول من يتحمل تكلفة الضريبة.</li>
        <li><strong>تحديد هيكل الدفع:</strong> تحديد ما إذا كان المبلغ سيُدفع كدفعة واحدة أو على أقساط يمنع أي خلافات مستقبلية حول مواعيد السداد.</li>
        <li><strong>الاحترافية:</strong> استخدام صياغات قانونية دقيقة يعكس احترافيتك ويظهر للطرف الآخر أنك تأخذ العقد على محمل الجد.</li>
        <li><strong>الحماية القانونية:</strong> في حالة النزاع، سيعتمد القاضي على النص المكتوب. كلما كان النص أكثر تفصيلاً ووضوحًا، كان موقفك أقوى.</li>
      </ul>
      <p class="mt-4">أداتنا المتقدمة تأخذ في الاعتبار متغيرات مثل الضرائب وهيكل الدفع لتزويدك ببنود جاهزة للنسخ. لا تترك أهم جزء في عقدك للصدفة؛ استخدم أداتنا لضمان صياغة محكمة ودقيقة.</p>
    `,
    contentEn: `
      <p>The financial clause is the heart of any commercial contract. Any ambiguity in this clause can lead to long and costly disputes. The "Contract Clause Helper" is designed to provide you with robust and detailed phrasing that minimizes risk and increases clarity.</p>
      <h3 class="font-bold text-xl mt-4">Why is Detailed Phrasing Important?</h3>
      <ul class="list-disc ps-5">
        <li><strong>Avoid Ambiguity:</strong> Phrasing like "the amount is tax-inclusive" leaves no room for doubt about who bears the cost of the tax.</li>
        <li><strong>Define Payment Structure:</strong> Specifying whether the amount will be paid as a lump sum or in installments prevents future disagreements about payment schedules.</li>
        <li><strong>Professionalism:</strong> Using precise legal phrasing reflects your professionalism and shows the other party that you take the contract seriously.</li>
        <li><strong>Legal Protection:</strong> In case of a dispute, a judge will rely on the written text. The more detailed and clear the text, the stronger your position.</li>
      </ul>
      <p class="mt-4">Our advanced tool considers variables like taxes and payment structure to provide you with ready-to-copy clauses. Don't leave the most important part of your contract to chance; use our tool to ensure airtight and accurate phrasing.</p>
    `,
  },
  {
    id: '8',
    title: 'دليلك الشامل لاستخدام حاسبة الأقساط والتمويل',
    titleEn: 'Your Comprehensive Guide to Using the Loan & Installment Calculator',
    summary: 'خطط لتمويلك بثقة. تعلم كيف تساعدك حاسبتنا الجديدة على فهم دفعاتك الشهرية، إجمالي الفائدة، وجدول السداد الكامل.',
    summaryEn: 'Plan your finances with confidence. Learn how our new calculator helps you understand your monthly payments, total interest, and the full amortization schedule.',
    content: `
      <p>يعد التخطيط المالي السليم حجر الزاوية في اتخاذ القرارات الهامة، سواء كنت تفكر في شراء سيارة، أو منزل، أو الحصول على تمويل شخصي. حاسبة الأقساط والتمويل الجديدة لدينا هي أداة قوية مصممة لإزالة الغموض عن القروض ومساعدتك على فهم التزاماتك المالية بوضوح تام.</p>
      <h3 class="font-bold text-xl mt-4">كيف تعمل الحاسبة؟</h3>
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
      <h3 class="font-bold text-xl mt-4">فهم جدول السداد (Amortization Schedule)</h3>
      <p>الميزة الأكثر احترافية في أداتنا هي "جدول السداد". يوضح هذا الجدول بالتفصيل كيف يتم تقسيم كل دفعة شهرية بين سداد أصل القرض (المبلغ الأساسي) ودفع الفائدة. في بداية القرض، يذهب جزء أكبر من دفعتك نحو الفائدة، وبمرور الوقت، يتناقص هذا الجزء ويزداد الجزء الذي يذهب لسداد الأصل. يوفر لك هذا الجدول رؤية شفافة ومفصلة لرحلة سداد قرضك شهرًا بشهر.</p>
      <p class="mt-4">استخدم حاسبتنا اليوم لاتخاذ قرارات مالية مستنيرة وتخطيط مستقبلك بثقة!</p>
    `,
    contentEn: `
      <p>Sound financial planning is the cornerstone of making important decisions, whether you're considering buying a car, a house, or taking out a personal loan. Our new Loan & Installment Calculator is a powerful tool designed to demystify loans and help you understand your financial commitments with complete clarity.</p>
      <h3 class="font-bold text-xl mt-4">How Does the Calculator Work?</h3>
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
      <h3 class="font-bold text-xl mt-4">Understanding the Amortization Schedule</h3>
      <p>The most professional feature of our tool is the "Amortization Schedule." This table details how each monthly payment is broken down between paying down the principal (the original loan amount) and paying the interest. At the beginning of the loan, a larger portion of your payment goes toward interest. Over time, this portion decreases, and the portion going to the principal increases. This schedule provides you with a transparent, detailed view of your loan repayment journey, month by month.</p>
      <p class="mt-4">Use our calculator today to make informed financial decisions and plan your future with confidence!</p>
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
      <h3 class="font-bold text-xl mt-4">لماذا تعتبر إيصالات الدفع مهمة؟</h3>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>إثبات الدفع:</strong> هو الدليل القاطع على أن الدين قد تم سداده، مما يمنع أي نزاعات مستقبلية حول المدفوعات.</li>
        <li><strong>التوثيق المحاسبي:</strong> تعتبر الإيصالات ضرورية لتسجيل المعاملات بدقة في الدفاتر المحاسبية، مما يسهل تتبع الإيرادات والنفقات.</li>
        <li><strong>المتطلبات الضريبية:</strong> في العديد من البلدان، تكون الإيصالات مطلوبة كدليل على النفقات التجارية للمطالبة بالخصومات الضريبية.</li>
        <li><strong>بناء الثقة:</strong> إصدار إيصال احترافي يعكس مصداقيتك ويترك انطباعًا إيجابيًا لدى العملاء.</li>
      </ul>
      <h3 class="font-bold text-xl mt-4">العناصر الأساسية في أي إيصال دفع:</h3>
      <p>لضمان أن يكون إيصالك كاملاً ورسمياً، يجب أن يتضمن:</p>
      <ol class="list-decimal ps-5 space-y-2">
        <li><strong>عنوان واضح:</strong> "إيصال استلام" أو "Payment Receipt".</li>
        <li><strong>بيانات المستلم:</strong> اسم الشخص أو الشركة التي استلمت المبلغ.</li>
        <li><strong>بيانات الدافع:</strong> اسم الشخص أو الشركة التي قامت بالدفع.</li>
        <li><strong>المبلغ:</strong> يجب كتابته بالأرقام والحروف لزيادة الوضوح ومنع التلاعب.</li>
        <li><strong>تاريخ الدفع:</strong> اليوم الذي تم فيه استلام المبلغ.</li>
        <li><strong>الغرض من الدفع:</strong> وصف موجز للخدمة أو المنتج الذي تم الدفع مقابله.</li>
        <li><strong>طريقة الدفع:</strong> (نقداً، شيك، تحويل بنكي، إلخ).</li>
        <li><strong>توقيع المستلم:</strong> لإضفاء الطابع الرسمي على الوثيقة.</li>
      </ol>
      <p class="mt-4">تم تصميم "مولد إيصالات الدفع" الجديد لدينا ليجعل هذه العملية سهلة وسريعة. يمكنك إدخال جميع التفاصيل اللازمة، وسيقوم النظام بإنشاء إيصال احترافي جاهز للطباعة أو التنزيل كملف PDF. ابدأ في توثيق معاملاتك المالية باحترافية اليوم!</p>
    `,
    contentEn: `
      <p>A payment receipt is a crucial document that proves a financial transaction has been completed. It's not just a piece of paper; it's legal protection for both the payer and the recipient, and an essential record for accurate accounting. Whether you're running a small business, working as a freelancer, or even in your personal dealings, issuing and receiving a clear receipt is a sound business practice.</p>
      <h3 class="font-bold text-xl mt-4">Why Are Payment Receipts Important?</h3>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>Proof of Payment:</strong> It is the definitive proof that a debt has been settled, preventing future disputes over payments.</li>
        <li><strong>Accounting Records:</strong> Receipts are essential for accurately recording transactions in accounting books, making it easier to track revenue and expenses.</li>
        <li><strong>Tax Requirements:</strong> In many countries, receipts are required as proof of business expenses to claim tax deductions.</li>
        <li><strong>Building Trust:</strong> Issuing a professional receipt reflects your credibility and leaves a positive impression on clients.</li>
      </ul>
      <h3 class="font-bold text-xl mt-4">Essential Elements of a Payment Receipt:</h3>
      <p>To ensure your receipt is complete and official, it must include:</p>
      <ol class="list-decimal ps-5 space-y-2">
        <li><strong>A Clear Title:</strong> "Payment Receipt".</li>
        <li><strong>Recipient's Information:</strong> The name of the person or company that received the money.</li>
        <li><strong>Payer's Information:</strong> The name of the person or company that made the payment.</li>
        <li><strong>The Amount:</strong> It should be written in both figures and words to increase clarity and prevent tampering.</li>
        <li><strong>Date of Payment:</strong> The day the payment was received.</li>
        <li><strong>Purpose of Payment:</strong> A brief description of the service or product for which the payment was made.</li>
        <li><strong>Payment Method:</strong> (Cash, Check, Bank Transfer, etc.).</li>
        <li><strong>Recipient's Signature:</strong> To formalize the document.</li>
      </ol>
      <p class="mt-4">Our new "Payment Receipt Generator" is designed to make this process quick and easy. You can enter all the necessary details, and the system will generate a professional receipt ready for printing or downloading as a PDF. Start documenting your financial transactions professionally today!</p>
    `,
  },
  {
    id: '10',
    title: 'كيف تعمل أدوات تحويل العملات المباشرة؟',
    titleEn: 'How Do Live Currency Converters Work?',
    summary: 'اكتشف التقنية وراء أسعار الصرف اللحظية وكيف يمكنك استخدام أداتنا الجديدة لاتخاذ قرارات مالية مستنيرة عند التعامل مع عملات متعددة.',
    summaryEn: 'Discover the technology behind real-time exchange rates and how you can use our new tool to make informed financial decisions when dealing with multiple currencies.',
    content: `
      <p>في عالم مترابط ماليًا، أصبحت القدرة على تحويل العملات بسرعة ودقة أمرًا ضروريًا للمسافرين والمستثمرين والشركات على حد سواء. أداة تحويل العملات المباشرة الجديدة لدينا مصممة لتوفير هذه الخدمة لك، معتمدة على بيانات أسعار الصرف اللحظية.</p>
      <h3 class="font-bold text-xl mt-4">من أين تأتي البيانات؟</h3>
      <p>تعتمد أداتنا على واجهة برمجة تطبيقات (API) موثوقة تقوم بجمع أسعار الصرف من مصادر مالية عالمية، مثل البنوك المركزية وأسواق الصرف الأجنبي. يتم تحديث هذه البيانات بانتظام (عادة يوميًا) لتعكس أحدث التغيرات في السوق. هذا يضمن أنك تحصل على سعر قريب جدًا من السعر الفعلي الذي ستتعامل به في معاملة حقيقية.</p>
      <h3 class="font-bold text-xl mt-4">فهم سعر الصرف</h3>
      <p>سعر الصرف هو ببساطة سعر عملة واحدة معبرًا عنه بعملة أخرى. على سبيل المثال، إذا كان سعر صرف الدولار الأمريكي مقابل الريال السعودي هو 3.75، فهذا يعني أن دولارًا واحدًا يساوي 3.75 ريال سعودي. هذه الأسعار متقلبة وتتغير باستمرار بناءً على عوامل اقتصادية وسياسية متعددة.</p>
      <h3 class="font-bold text-xl mt-4">نصائح لاستخدام الأداة:</h3>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>تحقق دائمًا من تاريخ آخر تحديث:</strong> توفر أداتنا تاريخ آخر تحديث للبيانات لتكون على دراية بمدى حداثة السعر.</li>
        <li><strong>استخدمها للتخطيط:</strong> الأداة مثالية لتقدير التكاليف عند التخطيط للسفر، أو حساب قيمة الاستثمارات الأجنبية، أو تحديد أسعار المنتجات للأسواق الدولية.</li>
        <li><strong>ملاحظة هامة:</strong> الأسعار المعروضة هي أسعار "ما بين البنوك" وهي للأغراض المعلوماتية. قد تختلف الأسعار التي تحصل عليها من البنك أو شركة الصرافة قليلاً بسبب هوامش الربح ورسوم المعاملات.</li>
      </ul>
      <p class="mt-4">استخدم أداة تحويل العملات المباشرة لتبقى على اطلاع دائم بأسواق الصرف العالمية وتتخذ قراراتك المالية بثقة أكبر.</p>
    `,
    contentEn: `
      <p>In a financially interconnected world, the ability to convert currencies quickly and accurately has become essential for travelers, investors, and businesses alike. Our new live currency converter tool is designed to provide you with this service, relying on real-time exchange rate data.</p>
      <h3 class="font-bold text-xl mt-4">Where Does the Data Come From?</h3>
      <p>Our tool relies on a trusted Application Programming Interface (API) that aggregates exchange rates from global financial sources, such as central banks and foreign exchange markets. This data is updated regularly (usually daily) to reflect the latest market changes. This ensures you get a rate that is very close to the actual rate you would encounter in a real transaction.</p>
      <h3 class="font-bold text-xl mt-4">Understanding the Exchange Rate</h3>
      <p>An exchange rate is simply the price of one currency expressed in terms of another currency. For example, if the exchange rate for USD to SAR is 3.75, it means that one US dollar equals 3.75 Saudi riyals. These rates are volatile and constantly change based on various economic and political factors.</p>
      <h3 class="font-bold text-xl mt-4">Tips for Using the Tool:</h3>
      <ul class="list-disc ps-5 space-y-2">
        <li><strong>Always check the last updated date:</strong> Our tool provides the date of the last data update so you are aware of how current the rate is.</li>
        <li><strong>Use it for planning:</strong> The tool is perfect for estimating costs when planning travel, calculating the value of foreign investments, or setting product prices for international markets.</li>
        <li><strong>Important Note:</strong> The displayed rates are "interbank" rates and are for informational purposes. The rates you get from your bank or a currency exchange service may differ slightly due to their profit margins and transaction fees.</li>
      </ul>
      <p class="mt-4">Use the live currency converter to stay informed about global exchange markets and make your financial decisions with greater confidence.</p>
    `,
  },
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  // A
  { id: 'accrual', termAr: 'محاسبة الاستحقاق', termEn: 'Accrual Accounting', definitionAr: 'طريقة محاسبية تسجل الإيرادات والمصروفات عند تحققها، وليس عند استلام النقد أو دفعه.', definitionEn: 'An accounting method that records revenues and expenses when they are earned, regardless of when cash is exchanged.' },
  { id: 'amortization', termAr: 'الإطفاء', termEn: 'Amortization', definitionAr: 'عملية توزيع تكلفة أصل غير ملموس على مدى عمره الإنتاجي.', definitionEn: 'The process of spreading the cost of an intangible asset over its useful life.' },
  { id: 'annuity', termAr: 'القسط السنوي', termEn: 'Annuity', definitionAr: 'سلسلة من الدفعات المتساوية تتم على فترات زمنية متساوية.', definitionEn: 'A series of equal payments made at equal intervals.' },
  { id: 'appreciation', termAr: 'ارتفاع القيمة', termEn: 'Appreciation', definitionAr: 'زيادة في قيمة الأصل مع مرور الوقت.', definitionEn: 'An increase in the value of an asset over time.' },
  { id: 'arbitrage', termAr: 'المراجحة', termEn: 'Arbitrage', definitionAr: 'الشراء والبيع المتزامن لأصل في أسواق مختلفة للاستفادة من فروق الأسعار.', definitionEn: 'The simultaneous purchase and sale of an asset in different markets to profit from a price difference.' },
  { id: 'asset', termAr: 'الأصل', termEn: 'Asset', definitionAr: 'مورد اقتصادي تمتلكه الشركة ويتوقع أن يوفر فائدة اقتصادية مستقبلية.', definitionEn: 'An economic resource owned by a company that is expected to provide future economic benefit.' },
  { id: 'audit', termAr: 'التدقيق (المراجعة)', termEn: 'Audit', definitionAr: 'فحص مستقل للبيانات المالية للمنظمة للتأكد من أنها تمثل وجهة نظر حقيقية وعادلة لوضعها المالي.', definitionEn: 'An independent examination of an organization\'s financial statements to ensure they present a true and fair view.' },
  // B
  { id: 'balance-sheet', termAr: 'الميزانية العمومية', termEn: 'Balance Sheet', definitionAr: 'بيان مالي يوضح أصول الشركة والتزاماتها وحقوق الملكية في نقطة زمنية محددة. المعادلة الأساسية هي: الأصول = الالتزامات + حقوق الملكية.', definitionEn: 'A financial statement that reports a company\'s assets, liabilities, and equity at a specific point in time. The basic equation is: Assets = Liabilities + Equity.' },
  { id: 'bear-market', termAr: 'السوق الهابطة', termEn: 'Bear Market', definitionAr: 'سوق تتميز بانخفاض أسعار الأوراق المالية.', definitionEn: 'A market characterized by falling prices of securities.' },
  { id: 'beta', termAr: 'بيتا', termEn: 'Beta', definitionAr: 'مقياس لتقلب السهم أو المحفظة مقارنة بالسوق ككل.', definitionEn: 'A measure of a stock\'s or portfolio\'s volatility in relation to the overall market.' },
  { id: 'bond', termAr: 'سند', termEn: 'Bond', definitionAr: 'أداة دين تصدرها الشركات أو الحكومات لجمع الأموال، مع وعد بسداد المبلغ الأصلي مع الفائدة.', definitionEn: 'A debt instrument issued by corporations or governments to raise capital, promising to repay the principal with interest.' },
  { id: 'book-value', termAr: 'القيمة الدفترية', termEn: 'Book Value', definitionAr: 'قيمة الأصل كما تظهر في الميزانية العمومية، وتساوي تكلفة الأصل ناقصاً الإهلاك المتراكم.', definitionEn: 'The value of an asset as it appears on the balance sheet, equal to its cost minus accumulated depreciation.' },
  { id: 'break-even-point', termAr: 'نقطة التعادل', termEn: 'Break-Even Point', abbreviationEn: 'BEP', definitionAr: 'النقطة التي تتساوى فيها الإيرادات الإجمالية مع التكاليف الإجمالية، مما يعني عدم وجود ربح أو خسارة.', definitionEn: 'The point at which total revenue equals total costs, resulting in no profit or loss.' },
  { id: 'budget', termAr: 'الميزانية', termEn: 'Budget', definitionAr: 'خطة مالية تقدر الإيرادات والمصروفات على مدى فترة زمنية محددة.', definitionEn: 'A financial plan that estimates revenue and expenses over a specified period.' },
  { id: 'bull-market', termAr: 'السوق الصاعدة', termEn: 'Bull Market', definitionAr: 'سوق تتميز بارتفاع أسعار الأوراق المالية.', definitionEn: 'A market characterized by rising prices of securities.' },
  // C
  { id: 'capital', termAr: 'رأس المال', termEn: 'Capital', definitionAr: 'الأموال أو الأصول المالية الأخرى التي تستخدم لبدء أو تشغيل عمل تجاري.', definitionEn: 'Money or other financial assets used to start or operate a business.' },
  { id: 'capital-expenditure', termAr: 'النفقات الرأسمالية', termEn: 'Capital Expenditure', abbreviationEn: 'CapEx', definitionAr: 'الأموال التي تستخدمها الشركة لشراء أو ترقية أو صيانة الأصول المادية مثل الممتلكات والمباني والتكنولوجيا.', definitionEn: 'Funds used by a company to acquire, upgrade, and maintain physical assets such as property, buildings, and technology.' },
  { id: 'capital-gain', termAr: 'ربح رأسمالي', termEn: 'Capital Gain', definitionAr: 'الربح الناتج عن بيع أصل بسعر أعلى من سعر شرائه.', definitionEn: 'The profit resulting from the sale of an asset at a higher price than its purchase price.' },
  { id: 'cash-flow', termAr: 'التدفق النقدي', termEn: 'Cash Flow', abbreviationEn: 'CF', definitionAr: 'صافي حركة النقد وما يعادله الذي يتم تحويله إلى ومن الشركة.', definitionEn: 'The net movement of cash and cash equivalents being transferred into and out of a business.' },
  { id: 'collateral', termAr: 'ضمان', termEn: 'Collateral', definitionAr: 'أصل يقدمه المقترض كضمان للحصول على قرض.', definitionEn: 'An asset that a borrower offers as security for a loan.' },
  { id: 'compound-interest', termAr: 'الفائدة المركبة', termEn: 'Compound Interest', definitionAr: 'الفائدة المحسوبة على المبلغ الأصلي بالإضافة إلى الفائدة المتراكمة من الفترات السابقة.', definitionEn: 'Interest calculated on the initial principal and also on the accumulated interest of previous periods.' },
  { id: 'cogs', termAr: 'تكلفة البضاعة المباعة', termEn: 'Cost of Goods Sold', abbreviationEn: 'COGS', definitionAr: 'التكاليف المباشرة المنسوبة إلى إنتاج السلع التي تبيعها الشركة.', definitionEn: 'The direct costs attributable to the production of the goods sold by a company.' },
  { id: 'credit', termAr: 'دائن', termEn: 'Credit', abbreviationEn: 'Cr.', definitionAr: 'قيد محاسبي يؤدي إلى زيادة في حسابات الالتزامات أو حقوق الملكية أو الإيرادات، أو نقصان في حسابات الأصول أو المصروفات.', definitionEn: 'An accounting entry that results in either an increase in liabilities, equity, or revenue, or a decrease in assets or expenses.' },
  // D
  { id: 'debit', termAr: 'مدين', termEn: 'Debit', abbreviationEn: 'Dr.', definitionAr: 'قيد محاسبي يؤدي إلى زيادة في الأصول أو المصروفات، أو نقصان في الالتزامات أو حقوق الملكية أو الإيرادات.', definitionEn: 'An accounting entry that results in either an increase in assets or expenses, or a decrease in liabilities, equity, or revenue.' },
  { id: 'debt', termAr: 'دين', termEn: 'Debt', definitionAr: 'مبلغ من المال مقترض من طرف لآخر.', definitionEn: 'An amount of money borrowed by one party from another.' },
  { id: 'debt-to-equity', termAr: 'نسبة الدين إلى حقوق الملكية', termEn: 'Debt-to-Equity Ratio', abbreviationEn: 'D/E', definitionAr: 'نسبة مالية تقارن إجمالي ديون الشركة بحقوق المساهمين، وتستخدم لتقييم الرافعة المالية للشركة.', definitionEn: 'A financial ratio comparing a company\'s total debt to its total shareholders\' equity, used to evaluate a company\'s financial leverage.' },
  { id: 'default', termAr: 'تخلف عن السداد', termEn: 'Default', definitionAr: 'الفشل في سداد قرض أو التزام مالي آخر في الوقت المحدد.', definitionEn: 'The failure to repay a loan or other financial obligation on time.' },
  { id: 'deficit', termAr: 'عجز', termEn: 'Deficit', definitionAr: 'المبلغ الذي تتجاوز به النفقات الإيرادات.', definitionEn: 'The amount by which expenses exceed revenues.' },
  { id: 'deflation', termAr: 'انكماش', termEn: 'Deflation', definitionAr: 'انخفاض عام في مستوى الأسعار، مما يؤدي إلى زيادة القوة الشرائية للنقود.', definitionEn: 'A general decline in the price level, resulting in an increase in the purchasing power of money.' },
  { id: 'depreciation', termAr: 'الإهلاك', termEn: 'Depreciation', definitionAr: 'النقص المنهجي في القيمة المسجلة للأصل الملموس على مدى عمره الإنتاجي.', definitionEn: 'The systematic decrease in the recorded value of a tangible asset over its useful life.' },
  { id: 'diversification', termAr: 'تنويع', termEn: 'Diversification', definitionAr: 'استراتيجية استثمارية لخلط مجموعة متنوعة من الاستثمارات داخل محفظة لتقليل المخاطر.', definitionEn: 'An investment strategy of mixing a wide variety of investments within a portfolio to reduce risk.' },
  { id: 'dividend', termAr: 'توزيعات الأرباح', termEn: 'Dividend', definitionAr: 'توزيع جزء من أرباح الشركة على مساهميها.', definitionEn: 'A distribution of a portion of a company\'s earnings to its shareholders.' },
  // E
  { id: 'ebitda', termAr: 'الأرباح قبل الفوائد والضرائب والإهلاك والإطفاء', termEn: 'Earnings Before Interest, Taxes, Depreciation, and Amortization', abbreviationEn: 'EBITDA', definitionAr: 'مقياس للأداء المالي العام للشركة، ويستخدم كبديل لصافي الدخل في بعض الظروف.', definitionEn: 'A measure of a company\'s overall financial performance, used as an alternative to net income in some circumstances.' },
  { id: 'eps', termAr: 'ربحية السهم', termEn: 'Earnings Per Share', abbreviationEn: 'EPS', definitionAr: 'جزء من ربح الشركة المخصص لكل سهم من الأسهم العادية القائمة.', definitionEn: 'The portion of a company\'s profit allocated to each outstanding share of common stock.' },
  { id: 'equity', termAr: 'حقوق الملكية', termEn: 'Equity', definitionAr: 'القيمة المتبقية في أصول الشركة بعد خصم جميع التزاماتها.', definitionEn: 'The residual interest in the assets of an entity after deducting all its liabilities.' },
  { id: 'escrow', termAr: 'حساب ضمان', termEn: 'Escrow', definitionAr: 'حساب يحتفظ به طرف ثالث نيابة عن طرفين آخرين في معاملة.', definitionEn: 'An account held by a third party on behalf of two other parties in a transaction.' },
  { id: 'expense', termAr: 'مصروف', termEn: 'Expense', definitionAr: 'تكاليف العمليات التي تتكبدها الشركة في سبيل تحقيق الإيرادات.', definitionEn: 'The costs of operations that a company incurs to generate revenue.' },
  // F
  { id: 'fair-value', termAr: 'القيمة العادلة', termEn: 'Fair Value', definitionAr: 'السعر الذي يمكن به تبادل أصل أو تسوية التزام بين أطراف مطلعة وراغبة في معاملة حرة.', definitionEn: 'The price at which an asset could be exchanged or a liability settled between knowledgeable, willing parties in an arm\'s length transaction.' },
  { id: 'fiduciary', termAr: 'ائتماني', termEn: 'Fiduciary', definitionAr: 'شخص أو منظمة تعمل نيابة عن شخص آخر، وتلتزم بالعمل لمصلحة ذلك الشخص.', definitionEn: 'A person or organization that acts on behalf of another person, and is obligated to act in that person\'s best interests.' },
  { id: 'fiscal-year', termAr: 'سنة مالية', termEn: 'Fiscal Year', abbreviationEn: 'FY', definitionAr: 'فترة محاسبية مدتها عام واحد لا تبدأ بالضرورة في الأول من يناير.', definitionEn: 'A one-year accounting period that does not necessarily start on January 1st.' },
  { id: 'fixed-asset', termAr: 'أصل ثابت', termEn: 'Fixed Asset', definitionAr: 'أصل طويل الأجل تستخدمه الشركة لإنتاج السلع أو الخدمات، وليس من المتوقع تحويله إلى نقد في غضون عام.', definitionEn: 'A long-term tangible piece of property that a firm owns and uses in the production of its income and is not expected to be consumed or converted into cash within a year.' },
  { id: 'forex', termAr: 'صرف أجنبي', termEn: 'Foreign Exchange', abbreviationEn: 'Forex/FX', definitionAr: 'سوق عالمية لامركزية لتداول العملات.', definitionEn: 'A global decentralized market for the trading of currencies.' },
  // G
  { id: 'gaap', termAr: 'المبادئ المحاسبية المقبولة عموماً', termEn: 'Generally Accepted Accounting Principles', abbreviationEn: 'GAAP', definitionAr: 'مجموعة مشتركة من المعايير والمبادئ المحاسبية التي تتبعها الشركات عند إعداد بياناتها المالية.', definitionEn: 'A common set of accounting principles, standards, and procedures that companies must follow when they compile their financial statements.' },
  { id: 'gdp', termAr: 'الناتج المحلي الإجمالي', termEn: 'Gross Domestic Product', abbreviationEn: 'GDP', definitionAr: 'القيمة السوقية الإجمالية لجميع السلع والخدمات النهائية المنتجة في بلد ما خلال فترة زمنية محددة.', definitionEn: 'The total market value of all final goods and services produced within a country in a specific time period.' },
  { id: 'gross-profit', termAr: 'إجمالي الربح', termEn: 'Gross Profit', definitionAr: 'الربح الذي تحققه الشركة بعد خصم التكاليف المرتبطة بصنع وبيع منتجاتها.', definitionEn: 'The profit a company makes after deducting the costs associated with making and selling its products.' },
  // H
  { id: 'hedge', termAr: 'تحوط', termEn: 'Hedge', definitionAr: 'استثمار يتم إجراؤه لتقليل مخاطر تحركات الأسعار المعاكسة في أصل ما.', definitionEn: 'An investment made to reduce the risk of adverse price movements in an asset.' },
  // I
  { id: 'ifrs', termAr: 'المعايير الدولية لإعداد التقارير المالية', termEn: 'International Financial Reporting Standards', abbreviationEn: 'IFRS', definitionAr: 'مجموعة من المعايير المحاسبية التي تحدد كيفية الإبلاغ عن أنواع معينة من المعاملات والأحداث في البيانات المالية.', definitionEn: 'A set of accounting standards that dictate how particular types of transactions and events should be reported in financial statements.' },
  { id: 'income-statement', termAr: 'قائمة الدخل', termEn: 'Income Statement', definitionAr: 'بيان مالي يوضح أداء الشركة المالي (الإيرادات، المصروفات، وصافي الربح أو الخسارة) خلال فترة زمنية معينة.', definitionEn: 'A financial statement that reports a company\'s financial performance over a specific accounting period.' },
  { id: 'inflation', termAr: 'تضخم', termEn: 'Inflation', definitionAr: 'معدل زيادة مستوى الأسعار العام للسلع والخدمات، وبالتالي انخفاض القوة الشرائية للنقود.', definitionEn: 'The rate at which the general level of prices for goods and services is rising, and subsequently, purchasing power is falling.' },
  { id: 'intangible-asset', termAr: 'أصل غير ملموس', termEn: 'Intangible Asset', definitionAr: 'أصل ليس له وجود مادي، مثل براءات الاختراع والعلامات التجارية وحقوق النشر.', definitionEn: 'An asset that is not physical in nature, such as patents, trademarks, and copyrights.' },
  { id: 'interest', termAr: 'فائدة', termEn: 'Interest', definitionAr: 'تكلفة اقتراض المال، أو العائد من إقراض المال.', definitionEn: 'The cost of borrowing money, or the return from lending money.' },
  { id: 'inventory', termAr: 'المخزون', termEn: 'Inventory', definitionAr: 'السلع والمواد التي تحتفظ بها الشركة للبيع في نهاية المطاف.', definitionEn: 'The goods and materials that a business holds for the ultimate goal of resale.' },
  // J
  { id: 'joint-venture', termAr: 'مشروع مشترك', termEn: 'Joint Venture', abbreviationEn: 'JV', definitionAr: 'ترتيب تجاري يوافق فيه طرفان أو أكثر على تجميع مواردهم لغرض إنجاز مهمة محددة.', definitionEn: 'A business arrangement in which two or more parties agree to pool their resources for the purpose of accomplishing a specific task.' },
  // K
  { id: 'kpi', termAr: 'مؤشر أداء رئيسي', termEn: 'Key Performance Indicator', abbreviationEn: 'KPI', definitionAr: 'قيمة قابلة للقياس توضح مدى فعالية الشركة في تحقيق أهداف العمل الرئيسية.', definitionEn: 'A measurable value that demonstrates how effectively a company is achieving key business objectives.' },
  // L
  { id: 'leverage', termAr: 'الرافعة المالية', termEn: 'Leverage', definitionAr: 'استخدام الأموال المقترضة لزيادة العائد المحتمل للاستثمار.', definitionEn: 'The use of borrowed funds to increase the potential return of an investment.' },
  { id: 'liability', termAr: 'التزام', termEn: 'Liability', definitionAr: 'تعهد أو دين حالي على الشركة ينشأ من أحداث سابقة، ويتطلب تسويته تدفقاً خارجاً للموارد.', definitionEn: 'A company\'s financial debt or obligations that arise during the course of its business operations.' },
  { id: 'liquidity', termAr: 'السيولة', termEn: 'Liquidity', definitionAr: 'سهولة تحويل الأصل إلى نقد دون التأثير على سعره في السوق.', definitionEn: 'The ease with which an asset can be converted into cash without affecting its market price.' },
  // M
  { id: 'market-capitalization', termAr: 'القيمة السوقية', termEn: 'Market Capitalization', abbreviationEn: 'Market Cap', definitionAr: 'القيمة الإجمالية لأسهم الشركة القائمة في السوق.', definitionEn: 'The total market value of a company\'s outstanding shares of stock.' },
  { id: 'merger', termAr: 'اندماج', termEn: 'Merger', definitionAr: 'اتفاق يوحد شركتين منفصلتين في كيان واحد جديد.', definitionEn: 'An agreement that unites two separate companies into a single new entity.' },
  // N
  { id: 'net-income', termAr: 'صافي الدخل', termEn: 'Net Income', definitionAr: 'إجمالي أرباح الشركة بعد خصم جميع التكاليف والمصروفات والضرائب.', definitionEn: 'A company\'s total earnings or profit after subtracting all costs, expenses, and taxes.' },
  // O
  { id: 'opex', termAr: 'المصروفات التشغيلية', termEn: 'Operating Expense', abbreviationEn: 'OpEx', definitionAr: 'المصروفات التي تتكبدها الشركة من خلال عملياتها التجارية العادية.', definitionEn: 'Expenses a business incurs through its normal business operations.' },
  // P
  { id: 'p-e-ratio', termAr: 'نسبة السعر إلى الربحية', termEn: 'Price-to-Earnings Ratio', abbreviationEn: 'P/E', definitionAr: 'نسبة لتقييم الشركة تقيس سعر سهمها الحالي بالنسبة لربحية السهم.', definitionEn: 'A ratio for valuing a company that measures its current share price relative to its per-share earnings.' },
  { id: 'portfolio', termAr: 'محفظة استثمارية', termEn: 'Portfolio', definitionAr: 'مجموعة من الأصول المالية مثل الأسهم والسندات والسلع.', definitionEn: 'A collection of financial assets such as stocks, bonds, and commodities.' },
  { id: 'principal', termAr: 'أصل المبلغ', termEn: 'Principal', definitionAr: 'المبلغ الأولي للقرض، أو المبلغ الأصلي للاستثمار.', definitionEn: 'The initial amount of a loan, or the original amount of an investment.' },
  { id: 'p-l', termAr: 'بيان الأرباح والخسائر', termEn: 'Profit and Loss Statement', abbreviationEn: 'P&L', definitionAr: 'مرادف لقائمة الدخل.', definitionEn: 'Synonymous with the income statement.' },
  // Q
  { id: 'quarter', termAr: 'ربع سنة', termEn: 'Quarter', abbreviationEn: 'Q', definitionAr: 'فترة ثلاثة أشهر في السنة المالية للشركة، مثل Q1، Q2، Q3، Q4.', definitionEn: 'A three-month period on a company\'s financial calendar, such as Q1, Q2, Q3, Q4.' },
  // R
  { id: 'recession', termAr: 'ركود اقتصادي', termEn: 'Recession', definitionAr: 'فترة من التراجع الاقتصادي المؤقت تنخفض خلالها التجارة والنشاط الصناعي.', definitionEn: 'A period of temporary economic decline during which trade and industrial activity are reduced.' },
  { id: 'retained-earnings', termAr: 'الأرباح المحتجزة', termEn: 'Retained Earnings', definitionAr: 'جزء من صافي أرباح الشركة الذي يتم إعادة استثماره في الشركة.', definitionEn: 'The portion of a company\'s net income that is reinvested in the business.' },
  { id: 'revenue', termAr: 'الإيرادات', termEn: 'Revenue', definitionAr: 'إجمالي تدفق المنافع الاقتصادية خلال فترة ما، والتي تنشأ عن الأنشطة العادية للشركة.', definitionEn: 'The total amount of income generated by the sale of goods or services related to the company\'s primary operations.' },
  { id: 'roi', termAr: 'العائد على الاستثمار', termEn: 'Return on Investment', abbreviationEn: 'ROI', definitionAr: 'مقياس أداء يستخدم لتقييم كفاءة أو ربحية استثمار ما.', definitionEn: 'A performance measure used to evaluate the efficiency or profitability of an investment.' },
  // S
  { id: 'securities', termAr: 'أوراق مالية', termEn: 'Securities', definitionAr: 'أدوات مالية قابلة للتداول تمثل مركز ملكية في شركة (سهم) أو علاقة دائن مع هيئة حكومية أو شركة (سند).', definitionEn: 'Fungible, negotiable financial instruments that hold some type of monetary value, representing an ownership position in a publicly-traded corporation (stock) or a creditor relationship with a governmental body or a corporation (bond).' },
  { id: 'shareholder', termAr: 'مساهم', termEn: 'Shareholder', definitionAr: 'فرد أو مؤسسة تمتلك سهمًا واحدًا على الأقل في شركة.', definitionEn: 'An individual or institution that legally owns one or more shares of stock in a public or private corporation.' },
  { id: 'stock', termAr: 'سهم', termEn: 'Stock', definitionAr: 'ورقة مالية تمثل ملكية جزئية في شركة.', definitionEn: 'A security that represents a fractional ownership in a corporation.' },
  // T
  { id: 'trial-balance', termAr: 'ميزان المراجعة', termEn: 'Trial Balance', definitionAr: 'ورقة عمل محاسبية يتم فيها تجميع أرصدة جميع دفاتر الأستاذ في أعمدة الخصم والائتمان.', definitionEn: 'An accounting worksheet in which the balances of all ledgers are compiled into debit and credit columns.' },
  // U
  { id: 'underwriting', termAr: 'الاكتتاب (التعهد بالتغطية)', termEn: 'Underwriting', definitionAr: 'العملية التي من خلالها يتحمل فرد أو مؤسسة مخاطر مالية مقابل رسوم.', definitionEn: 'The process through which an individual or institution takes on financial risk for a fee.' },
  // V
  { id: 'valuation', termAr: 'تقييم', termEn: 'Valuation', definitionAr: 'العملية التحليلية لتحديد القيمة الحالية لأصل أو شركة.', definitionEn: 'The analytical process of determining the current worth of an asset or a company.' },
  { id: 'variable-cost', termAr: 'تكلفة متغيرة', termEn: 'Variable Cost', definitionAr: 'مصروف شركة يتغير بما يتناسب مع حجم إنتاجها.', definitionEn: 'A corporate expense that changes in proportion to production output.' },
  { id: 'vat', termAr: 'ضريبة القيمة المضافة', termEn: 'Value-Added Tax', abbreviationEn: 'VAT', abbreviationAr: 'ض.ق.م.', definitionAr: 'ضريبة استهلاك تفرض على المنتج في كل مرحلة من مراحل سلسلة التوريد حيث تضاف قيمة.', definitionEn: 'A consumption tax placed on a product whenever value is added at each stage of the supply chain.' },
  { id: 'volatility', termAr: 'تقلب', termEn: 'Volatility', definitionAr: 'مقياس إحصائي لتشتت العوائد لأصل مالي معين. كلما زاد التقلب، زادت المخاطرة.', definitionEn: 'A statistical measure of the dispersion of returns for a given security. Higher volatility means that a security\'s value can potentially be spread out over a larger range of values.' },
  // W
  { id: 'working-capital', termAr: 'رأس المال العامل', termEn: 'Working Capital', definitionAr: 'الفرق بين الأصول المتداولة والالتزامات المتداولة، وهو مقياس للسيولة قصيرة الأجل.', definitionEn: 'The difference between current assets and current liabilities; a measure of short-term liquidity.' },
  // Y
  { id: 'yield', termAr: 'العائد', termEn: 'Yield', definitionAr: 'الدخل العائد من استثمار ما، وعادة ما يتم التعبير عنه كنسبة مئوية سنوية.', definitionEn: 'The income returned on an investment, usually expressed as an annual percentage.' },
  // Z
  { id: 'zero-based-budgeting', termAr: 'الموازنة الصفرية', termEn: 'Zero-Based Budgeting', abbreviationEn: 'ZBB', definitionAr: 'طريقة لوضع الميزانية حيث يجب تبرير جميع النفقات لكل فترة جديدة.', definitionEn: 'A method of budgeting in which all expenses must be justified for each new period.' },
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