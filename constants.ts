// FIX: Implemented missing constants for navigation, articles, and currencies.
import { NavLinkInfo, Article, Currency, GlossaryTerm } from './types';

export const NAV_LINKS: NavLinkInfo[] = [
  { path: '/', key: 'home' },
  { path: '/number-converter', key: 'numberConverter' },
  { path: '/date-converter', key: 'dateConverter' },
  { path: '/invoice-generator', key: 'invoiceGenerator' },
  { path: '/receipt-generator', key: 'receiptGenerator' },
  { path: '/contract-clause', key: 'contractClause' },
  { path: '/loan-calculator', key: 'loanCalculator' },
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
];

export const GLOSSARY_TERMS: GlossaryTerm[] = [
    // A
    { id: '1', termAr: 'حسابات القبض', termEn: 'Accounts Receivable', abbreviationEn: 'AR', definitionAr: 'الأموال المستحقة للشركة من عملائها مقابل سلع أو خدمات تم بيعها على الحساب.', definitionEn: 'Money owed to a company by its customers for goods or services delivered on credit.' },
    { id: '2', termAr: 'حسابات الدفع', termEn: 'Accounts Payable', abbreviationEn: 'AP', definitionAr: 'الأموال التي تدين بها الشركة لمورديها مقابل سلع أو خدمات تم شراؤها على الحساب.', definitionEn: 'Money a company owes to its suppliers for goods or services purchased on credit.' },
    { id: '3', termAr: 'الأصل', termEn: 'Asset', definitionAr: 'مورد اقتصادي تمتلكه الشركة ويتوقع أن يوفر فائدة اقتصادية مستقبلية.', definitionEn: 'An economic resource owned by a company that is expected to provide future economic benefit.' },
    { id: '4', termAr: 'التدقيق (المراجعة)', termEn: 'Audit', definitionAr: 'فحص مستقل للبيانات المالية للمنظمة للتأكد من أنها تمثل وجهة نظر حقيقية وعادلة لوضعها المالي.', definitionEn: 'An independent examination of an organization\'s financial statements to ensure they present a true and fair view.' },
    { id: '5', termAr: 'الاستهلاك', termEn: 'Amortization', definitionAr: 'عملية توزيع تكلفة أصل غير ملموس على مدى عمره الإنتاجي.', definitionEn: 'The process of spreading the cost of an intangible asset over its useful life.' },
    // B
    { id: '6', termAr: 'الميزانية العمومية', termEn: 'Balance Sheet', definitionAr: 'بيان مالي يوضح أصول الشركة والتزاماتها وحقوق الملكية في نقطة زمنية محددة.', definitionEn: 'A financial statement that reports a company\'s assets, liabilities, and equity at a specific point in time.' },
    { id: '7', termAr: 'سند', termEn: 'Bond', definitionAr: 'أداة دين تصدرها الشركات أو الحكومات لجمع الأموال، مع وعد بسداد المبلغ الأصلي مع الفائدة.', definitionEn: 'A debt instrument issued by corporations or governments to raise capital, promising to repay the principal with interest.' },
    { id: '8', termAr: 'نقطة التعادل', termEn: 'Break-Even Point', abbreviationEn: 'BEP', definitionAr: 'النقطة التي تتساوى فيها الإيرادات الإجمالية مع التكاليف الإجمالية، مما يعني عدم وجود ربح أو خسارة.', definitionEn: 'The point at which total revenue equals total costs, resulting in no profit or loss.' },
    { id: '9', termAr: 'الميزانية', termEn: 'Budget', definitionAr: 'خطة مالية تقدر الإيرادات والمصروفات على مدى فترة زمنية محددة.', definitionEn: 'A financial plan that estimates revenue and expenses over a specified period.' },
    // C
    { id: '10', termAr: 'التدفق النقدي', termEn: 'Cash Flow', abbreviationEn: 'CF', definitionAr: 'صافي حركة النقد وما يعادله الذي يتم تحويله إلى ومن الشركة.', definitionEn: 'The net movement of cash and cash equivalents being transferred into and out of a business.' },
    { id: '11', termAr: 'النفقات الرأسمالية', termEn: 'Capital Expenditure', abbreviationEn: 'CapEx', definitionAr: 'الأموال التي تستخدمها الشركة لشراء أو ترقية أو صيانة الأصول المادية مثل الممتلكات والمباني والتكنولوجيا.', definitionEn: 'Funds used by a company to acquire, upgrade, and maintain physical assets such as property, buildings, and technology.' },
    { id: '12', termAr: 'تكلفة البضاعة المباعة', termEn: 'Cost of Goods Sold', abbreviationEn: 'COGS', definitionAr: 'التكاليف المباشرة المنسوبة إلى إنتاج السلع التي تبيعها الشركة.', definitionEn: 'The direct costs attributable to the production of the goods sold by a company.' },
    { id: '13', termAr: 'الدائن', termEn: 'Credit', abbreviationEn: 'Cr.', definitionAr: 'قيد محاسبي يؤدي إلى زيادة في حسابات الالتزامات أو حقوق الملكية أو الإيرادات، أو نقصان في حسابات الأصول أو المصروفات.', definitionEn: 'An accounting entry that results in either an increase in liabilities, equity, or revenue, or a decrease in assets or expenses.' },
    { id: '14', termAr: 'الأصول المتداولة', termEn: 'Current Assets', definitionAr: 'جميع أصول الشركة التي يتوقع تحويلها إلى نقد في غضون عام واحد.', definitionEn: 'All of a company\'s assets that are expected to be converted into cash within one year.' },
    { id: '15', termAr: 'الالتزامات المتداولة', termEn: 'Current Liabilities', definitionAr: 'ديون الشركة أو التزاماتها المستحقة خلال عام واحد.', definitionEn: 'A company\'s debts or obligations that are due within one year.' },
    // D
    { id: '16', termAr: 'المدين', termEn: 'Debit', abbreviationEn: 'Dr.', definitionAr: 'قيد محاسبي يؤدي إلى زيادة في الأصول أو المصروفات، أو نقصان في الالتزامات أو حقوق الملكية أو الإيرادات.', definitionEn: 'An accounting entry that results in either an increase in assets or expenses, or a decrease in liabilities, equity, or revenue.' },
    { id: '17', termAr: 'الدين', termEn: 'Debt', definitionAr: 'مبلغ من المال مقترض من طرف لآخر.', definitionEn: 'An amount of money borrowed by one party from another.' },
    { id: '18', termAr: 'الإهلاك', termEn: 'Depreciation', definitionAr: 'النقص المنهجي في القيمة المسجلة للأصل الملموس على مدى عمره الإنتاجي.', definitionEn: 'The systematic decrease in the recorded value of a tangible asset over its useful life.' },
    { id: '19', termAr: 'توزيعات الأرباح', termEn: 'Dividend', definitionAr: 'توزيع جزء من أرباح الشركة على مساهميها.', definitionEn: 'A distribution of a portion of a company\'s earnings to its shareholders.' },
    // E
    { id: '20', termAr: 'ربحية السهم', termEn: 'Earnings Per Share', abbreviationEn: 'EPS', definitionAr: 'جزء من ربح الشركة المخصص لكل سهم من الأسهم العادية القائمة.', definitionEn: 'The portion of a company\'s profit allocated to each outstanding share of common stock.' },
    { id: '21', termAr: 'حقوق الملكية', termEn: 'Equity', definitionAr: 'القيمة المتبقية في أصول الشركة بعد خصم جميع التزاماتها.', definitionEn: 'The residual interest in the assets of an entity after deducting all its liabilities.' },
    { id: '22', termAr: 'المصروفات', termEn: 'Expenses', definitionAr: 'تكاليف العمليات التي تتكبدها الشركة في سبيل تحقيق الإيرادات.', definitionEn: 'The costs of operations that a company incurs to generate revenue.' },
    // F
    { id: '23', termAr: 'الأصول الثابتة', termEn: 'Fixed Asset', definitionAr: 'أصل طويل الأجل تستخدمه الشركة لإنتاج السلع أو الخدمات، وليس من المتوقع تحويله إلى نقد في غضون عام.', definitionEn: 'A long-term tangible piece of property that a firm owns and uses in the production of its income and is not expected to be consumed or converted into cash within a year.' },
    { id: '24', termAr: 'المبادئ المحاسبية المقبولة عموماً', termEn: 'Generally Accepted Accounting Principles', abbreviationEn: 'GAAP', definitionAr: 'مجموعة مشتركة من المعايير والمبادئ المحاسبية التي تتبعها الشركات عند إعداد بياناتها المالية.', definitionEn: 'A common set of accounting principles, standards, and procedures that companies must follow when they compile their financial statements.' },
    // G
    { id: '25', termAr: 'إجمالي الربح', termEn: 'Gross Profit', definitionAr: 'الربح الذي تحققه الشركة بعد خصم التكاليف المرتبطة بصنع وبيع منتجاتها.', definitionEn: 'The profit a company makes after deducting the costs associated with making and selling its products.' },
    // I
    { id: '26', termAr: 'قائمة الدخل', termEn: 'Income Statement', definitionAr: 'بيان مالي يوضح أداء الشركة المالي (الإيرادات، المصروفات، وصافي الربح أو الخسارة) خلال فترة زمنية معينة.', definitionEn: 'A financial statement that reports a company\'s financial performance over a specific accounting period.' },
    { id: '27', termAr: 'الأصول غير الملموسة', termEn: 'Intangible Asset', definitionAr: 'أصل ليس له وجود مادي، مثل براءات الاختراع والعلامات التجارية وحقوق النشر.', definitionEn: 'An asset that is not physical in nature, such as patents, trademarks, and copyrights.' },
    { id: '28', termAr: 'الفائدة', termEn: 'Interest', definitionAr: 'تكلفة اقتراض المال، أو العائد من إقراض المال.', definitionEn: 'The cost of borrowing money, or the return from lending money.' },
    { id: '29', termAr: 'المخزون', termEn: 'Inventory', definitionAr: 'السلع والمواد التي تحتفظ بها الشركة للبيع في نهاية المطاف.', definitionEn: 'The goods and materials that a business holds for the ultimate goal of resale.' },
    // L
    { id: '30', termAr: 'الالتزام', termEn: 'Liability', definitionAr: 'تعهد أو دين حالي على الشركة ينشأ من أحداث سابقة، ويتطلب تسويته تدفقاً خارجاً للموارد.', definitionEn: 'A company\'s financial debt or obligations that arise during the course of its business operations.' },
    { id: '31', termAr: 'السيولة', termEn: 'Liquidity', definitionAr: 'سهولة تحويل الأصل إلى نقد دون التأثير على سعره في السوق.', definitionEn: 'The ease with which an asset can be converted into cash without affecting its market price.' },
    // N
    { id: '32', termAr: 'صافي الدخل', termEn: 'Net Income', definitionAr: 'إجمالي أرباح الشركة بعد خصم جميع التكاليف والمصروفات والضرائب.', definitionEn: 'A company\'s total earnings or profit after subtracting all costs, expenses, and taxes.' },
    // O
    { id: '33', termAr: 'المصروفات التشغيلية', termEn: 'Operating Expense', abbreviationEn: 'OpEx', definitionAr: 'المصروفات التي تتكبدها الشركة من خلال عملياتها التجارية العادية.', definitionEn: 'Expenses a business incurs through its normal business operations.' },
    // P
    { id: '34', termAr: 'الأرباح والخسائر', termEn: 'Profit and Loss Statement', abbreviationEn: 'P&L', definitionAr: 'مرادف لقائمة الدخل.', definitionEn: 'Synonymous with the income statement.' },
    // R
    { id: '35', termAr: 'الأرباح المحتجزة', termEn: 'Retained Earnings', definitionAr: 'جزء من صافي أرباح الشركة الذي يتم إعادة استثماره في الشركة.', definitionEn: 'The portion of a company\'s net income that is reinvested in the business.' },
    { id: '36', termAr: 'العائد على الاستثمار', termEn: 'Return on Investment', abbreviationEn: 'ROI', definitionAr: 'مقياس أداء يستخدم لتقييم كفاءة أو ربحية استثمار ما.', definitionEn: 'A performance measure used to evaluate the efficiency or profitability of an investment.' },
    { id: '37', termAr: 'الإيرادات', termEn: 'Revenue', definitionAr: 'إجمالي تدفق المنافع الاقتصادية خلال فترة ما، والتي تنشأ عن الأنشطة العادية للشركة.', definitionEn: 'The total amount of income generated by the sale of goods or services related to the company\'s primary operations.' },
    // S
    { id: '38', termAr: 'السهم', termEn: 'Stock', definitionAr: 'ورقة مالية تمثل ملكية جزئية في شركة.', definitionEn: 'A security that represents a fractional ownership in a corporation.' },
    // T
    { id: '39', termAr: 'ميزان المراجعة', termEn: 'Trial Balance', definitionAr: 'ورقة عمل محاسبية يتم فيها تجميع أرصدة جميع دفاتر الأستاذ في أعمدة الخصم والائتمان.', definitionEn: 'An accounting worksheet in which the balances of all ledgers are compiled into debit and credit columns.' },
    // V
    { id: '40', termAr: 'التكلفة المتغيرة', termEn: 'Variable Cost', definitionAr: 'مصروف شركة يتغير بما يتناسب مع حجم إنتاجها.', definitionEn: 'A corporate expense that changes in proportion to production output.' },
    // W
    { id: '41', termAr: 'رأس المال العامل', termEn: 'Working Capital', definitionAr: 'الفرق بين الأصول المتداولة والالتزامات المتداولة، وهو مقياس للسيولة قصيرة الأجل.', definitionEn: 'The difference between current assets and current liabilities; a measure of short-term liquidity.' },
    // Y
    { id: '42', termAr: 'العائد', termEn: 'Yield', definitionAr: 'الدخل العائد من استثمار ما، وعادة ما يتم التعبير عنه كنسبة مئوية سنوية.', definitionEn: 'The income returned on an investment, usually expressed as an annual percentage.' },
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