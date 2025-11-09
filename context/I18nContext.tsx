import React, { createContext, useState, useEffect, useCallback } from 'react';

// Define the shape of the context data
interface I18nContextType {
  language: 'ar' | 'en';
  setLanguage: (lang: 'ar' | 'en') => void;
  t: (key: string) => any; // Return 'any' to support arrays and objects
}

// Create the context with a default value
export const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Translations object
const translations = {
  ar: {
    header: {
      title: 'صيغة مالية',
      nav: {
        home: 'الرئيسية',
        tools: 'الأدوات',
        numberConverter: 'تحويل الأرقام',
        dateConverter: 'تحويل التاريخ',
        invoiceGenerator: 'مولد الفواتير',
        receiptGenerator: 'مولد الإيصالات',
        contractClause: 'صياغة البنود',
        loanCalculator: 'حاسبة الأقساط',
        currencyConverter: 'محول العملات',
        documentChecker: 'مدقق المستندات',
        articles: 'مقالات',
        glossary: 'مصطلحات مالية',
      },
      openMenu: 'افتح القائمة',
    },
    footer: {
      copyright: 'صيغة مالية. جميع الحقوق محفوظة.',
      nav: {
        about: 'عن الموقع',
        contact: 'اتصل بنا',
        faq: 'الأسئلة الشائعة',
        privacy: 'سياسة الخصوصية',
        terms: 'شروط الخدمة',
      }
    },
    relatedContent: {
      title: 'محتوى ذو صلة',
      tools: 'أدوات أخرى قد تهمك',
      articles: 'مقالات ذات صلة'
    },
    converter: {
        enterNumber: 'أدخل المبلغ بالأرقام',
        selectCurrency: 'اختر العملة',
        placeholder: 'مثال: 1234.56',
        result: 'المبلغ بالحروف',
        copy: 'نسخ',
        copySuccess: 'تم النسخ!',
        copyFail: 'فشل النسخ',
        outputPlaceholder: 'النتيجة ستظهر هنا...',
    },
    dateConverterPage: {
        mainTitle: 'تحويل التاريخ إلى نص',
        subtitle: 'أداة لتحويل التواريخ من صيغة رقمية إلى نص مكتوب بالكامل، مثالية للمستندات الرسمية والعقود.',
    },
    dateConverter: {
        selectDate: 'اختر التاريخ',
        result: 'التاريخ نصًا',
        outputPlaceholder: 'النتيجة ستظهر هنا...',
    },
    invoiceGeneratorPage: {
      mainTitle: 'مولد الفواتير السريع',
      subtitle: 'أنشئ فواتير احترافية بسهولة وحملها بصيغة PDF. مثالي للمستقلين والشركات الصغيرة.',
    },
    invoiceGenerator: {
      invoice: 'فاتورة',
      from: 'من',
      billTo: 'فاتورة إلى',
      yourName: 'اسمك / اسم شركتك',
      yourAddress: 'عنوانك',
      clientName: 'اسم العميل / الشركة',
      clientAddress: 'عنوان العميل',
      invoiceNumber: 'رقم الفاتورة',
      date: 'التاريخ',
      item: 'البند',
      quantity: 'الكمية',
      rate: 'السعر',
      amount: 'المبلغ',
      subtotal: 'المجموع الفرعي',
      total: 'المجموع الإجمالي',
      amountInWords: 'المبلغ كتابةً',
      addItem: 'إضافة بند',
      downloadPdf: 'تحميل PDF',
      notes: 'ملاحظات',
      notesPlaceholder: 'اكتب ملاحظاتك هنا (اختياري)',
      uploadLogo: 'رفع الشعار',
      removeLogo: 'إزالة الشعار',
    },
    receiptGeneratorPage: {
      mainTitle: 'مولد إيصالات الدفع الاحترافي',
      subtitle: 'أداة سهلة لإنشاء وتخصيص إيصالات الدفع، مع إمكانية تحميلها بصيغة PDF.',
    },
    receiptGenerator: {
      receiptVoucher: 'إيصال استلام',
      paymentVoucher: 'إيصال دفع',
      receiptType: 'نوع الإيصال',
      receiptNo: 'رقم الإيصال',
      amount: 'المبلغ',
      receivedFrom: 'استلمنا من السيد/السادة',
      paidTo: 'دفعنا إلى السيد/السادة',
      amountInWords: 'مبلغ وقدره',
      paymentFor: 'وذلك مقابل',
      paymentMethod: 'طريقة الدفع',
      cash: 'نقداً',
      check: 'شيك',
      bankTransfer: 'تحويل بنكي',
      creditCard: 'بطاقة ائتمان',
      date: 'التاريخ',
      signature: 'توقيع المستلم',
      stamp: 'الختم أو التوقيع',
      recipientInfo: 'بياناتك (مُصدر الإيصال)',
      yourName: 'اسمك / اسم شركتك',
      payerInfo: 'بيانات الطرف الآخر',
      payerName: 'اسم الدافع',
      recipientNameForForm: 'اسم المستلم',
      purposeOfPayment: 'الغرض من الدفع',
      downloadPdf: 'تحميل PDF',
      uploadLogo: 'رفع الشعار',
      removeLogo: 'إزالة الشعار',
    },
    contractClausePage: {
      mainTitle: 'مساعد صياغة البنود المالية للعقود',
      subtitle: 'أداة متقدمة لإنشاء بنود مالية دقيقة ومفصلة للعقود والاتفاقيات الرسمية بسهولة واحترافية.',
    },
    contractClause: {
      enterAmount: 'أدخل المبلغ الأساسي',
      result: 'البند المالي جاهز للنسخ',
      outputPlaceholder: 'الفقرة القانونية ستظهر هنا...',
      configuration: 'إعدادات البند',
      generatedClauses: 'البنود المُنشأة',
      paymentStructure: 'هيكل الدفع',
      oneTime: 'دفعة واحدة',
      installments: 'أقساط',
      taxInfo: 'معلومات الضريبة',
      inclusive: 'المبلغ شامل الضريبة',
      exclusive: 'المبلغ غير شامل الضريبة',
      taxRate: 'نسبة الضريبة (%)',
      taxRatePlaceholder: 'مثال: 15',
      standardClause: 'صياغة قياسية',
      detailedClause: 'صياغة مفصلة',
      parties: 'الأطراف (اختياري)',
      payer: 'الطرف الأول (الدافع)',
      payee: 'الطرف الثاني (المستفيد)',
      payerPlaceholder: 'مثال: شركة المقاولات الحديثة',
      payeePlaceholder: 'مثال: مؤسسة خالد للتجارة',
      installmentDetails: 'تفاصيل الأقساط',
      numberOfInstallments: 'عدد الأقساط',
      downPayment: 'دفعة مقدمة (إن وجدت)',
      paymentFrequency: 'تكرار الدفع',
      monthly: 'شهرياً',
      quarterly: 'ربع سنوياً',
      annually: 'سنوياً',
      paymentSchedule: 'جدول الدفعات (مثال توضيحي)',
    },
    loanCalculatorPage: {
      mainTitle: 'حاسبة الأقساط والتمويل',
      subtitle: 'أداة احترافية لحساب أقساط القروض الشهرية، إجمالي الفوائد، وعرض جدول السداد الكامل لمساعدتك على التخطيط المالي.',
    },
    loanCalculator: {
      loanAmount: 'مبلغ التمويل',
      interestRate: 'نسبة الفائدة السنوية (%)',
      loanTerm: 'مدة التمويل (سنوات)',
      calculate: 'احسب',
      results: 'النتائج',
      monthlyPayment: 'القسط الشهري',
      totalPayment: 'إجمالي المبلغ المدفوع',
      totalInterest: 'إجمالي الفوائد',
      principal: 'أصل المبلغ',
      interest: 'الفوائد',
      amortizationSchedule: 'جدول السداد',
      showSchedule: 'إظهار الجدول',
      hideSchedule: 'إخفاء الجدول',
      month: 'الشهر',
      payment: 'القسط',
      remainingBalance: 'الرصيد المتبقي',
    },
    currencyConverterPage: {
      mainTitle: 'محول العملات المباشر',
      subtitle: 'أداة احترافية لتحويل العملات بناءً على أحدث أسعار الصرف العالمية.',
    },
    currencyConverter: {
      amount: 'المبلغ',
      from: 'من',
      to: 'إلى',
      result: 'النتيجة',
      rate: 'سعر الصرف',
      lastUpdated: 'آخر تحديث',
      swap: 'تبديل العملات',
      loading: 'جاري جلب أحدث الأسعار...',
      error: 'حدث خطأ أثناء جلب أسعار الصرف. يرجى المحاولة مرة أخرى.',
      rateUnavailable: 'سعر الصرف المباشر غير متوفر للعملة'
    },
    documentCheckerPage: {
      mainTitle: "مدقق المستندات بالذكاء الاصطناعي",
      subtitle: "استخدم قوة الذكاء الاصطناعي لتحليل مستنداتك المالية، واكتشاف الأخطاء، وتحديد المخاطر المحتملة."
    },
    documentChecker: {
      pasteText: "ألصق نص المستند هنا",
      or: "أو",
      uploadPrompt: "ارفع ملف لتحليله",
      supportedFiles: "الملفات المدعومة: PDF, DOCX, XLSX",
      unsupportedFile: "نوع الملف غير مدعوم.",
      fileParseError: "حدث خطأ أثناء قراءة الملف.",
      fileSelected: "الملف المحدد:",
      removeFile: "إزالة الملف",
      analyze: "تحليل الآن",
      loading: "جاري التحليل...",
      analyzingFile: "جاري قراءة الملف...",
      analysisReport: "تقرير التحليل",
      error: "حدث خطأ أثناء التحليل. يرجى المحاولة مرة أخرى.",
      disclaimer: "إخلاء مسؤولية: هذه الأداة تستخدم الذكاء الاصطناعي وهي للمساعدة فقط. النتائج قد لا تكون دقيقة 100%. يرجى استشارة خبير متخصص قبل اتخاذ أي قرارات."
    },
    glossaryPage: {
      mainTitle: 'مصطلحات مالية',
      subtitle: 'دليلك لفهم أهم المصطلحات المالية والمحاسبية المستخدمة في عالم الأعمال.',
    },
    glossary: {
      searchPlaceholder: 'ابحث عن مصطلح...',
      noResults: 'لم يتم العثور على نتائج.',
      example: 'مثال'
    },
    home: {
      mainTitle: 'لوحة أدوات صيغة مالية',
      subtitle: 'مجموعة متكاملة من الأدوات المالية لمساعدتك على إنجاز أعمالك بدقة واحترافية.',
      cards: {
        numberConverter: {
          title: 'تحويل الأرقام إلى كلمات',
          description: 'تحويل دقيق للمبالغ المالية من أرقام إلى نصوص للعقود والشيكات.'
        },
        dateConverter: {
          title: 'تحويل التاريخ إلى نص',
          description: 'صياغة التواريخ بشكل نصي كامل للمستندات والوثائق الرسمية.'
        },
        invoiceGenerator: {
          title: 'مولد الفواتير السريع',
          description: 'أنشئ فواتير احترافية وحملها كملف PDF في دقائق.'
        },
        receiptGenerator: {
          title: 'مولد إيصالات الدفع',
          description: 'أنشئ إيصالات دفع رسمية وسريعة لإثبات المعاملات المالية.'
        },
        contractClause: {
          title: 'مساعد صياغة البنود المالية',
          description: 'إنشاء بنود مالية قانونية ومفصلة لعقودك واتفاقياتك.'
        },
        loanCalculator: {
          title: 'حاسبة الأقساط والتمويل',
          description: 'خطط لقروضك وتمويلك الشخصي بفهم واضح للأقساط والفوائد.'
        },
        currencyConverter: {
            title: 'محول العملات المباشر',
            description: 'احصل على أسعار الصرف اللحظية وقم بتحويل العملات العالمية بدقة وسرعة.'
        },
        documentChecker: {
          title: "مدقق المستندات بالذكاء الاصطناعي",
          description: "حلل العقود والفواتير لاكتشاف الأخطاء والمخاطر المحتملة."
        }
      },
      whyUse: {
          title: 'لماذا تستخدم صيغة مالية؟',
          p1: 'في عالم الأعمال والمال، الدقة هي كل شيء. خطأ صغير في كتابة مبلغ مالي يمكن أن يؤدي إلى سوء فهم، نزاعات قانونية، أو خسائر مالية. تم تصميم "صيغة مالية" لتوفير حل سريع، دقيق، وموثوق لتحويل الأرقام إلى نصوص، مما يضمن أن مستنداتك المالية واضحة وخالية من الأخطاء.',
          p2: 'سواء كنت تقوم بإعداد فاتورة، تحرير شيك، أو صياغة عقد قانوني، فإن أداتنا تضمن تطابق النص المكتوب مع الأرقام بدقة متناهية، مع مراعاة القواعد النحوية المعقدة للغة العربية.',
          beneficiariesTitle: 'من يستفيد من خدماتنا؟',
          b1_strong: 'المحاسبون والمهنيون الماليون:',
          b1_text: 'لضمان دقة الفواتير والتقارير المالية.',
          b2_strong: 'المحامون والمستشارون القانونيون:',
          b2_text: 'لصياغة عقود ووثائق قانونية لا لبس فيها.',
          b3_strong: 'أصحاب الأعمال والمديرون:',
          b3_text: 'لتحرير الشيكات والأوامر المالية بثقة.',
          b4_strong: 'أي شخص يتعامل مع المستندات المالية:',
          b4_text: 'لتجنب الأخطاء الشائعة وضمان الوضوح.',
          p3: 'استخدم "صيغة مالية" اليوم وانعم براحة البال التي تأتي مع الدقة المطلقة.'
      },
    },
    numberConverterPage: {
        mainTitle: 'تحويل الأرقام إلى كلمات بسهولة',
        subtitle: 'أداة دقيقة لتحويل المبالغ المالية من أرقام إلى نصوص باللغتين العربية والإنجليزية، مثالية للعقود والفواتير والشيكات.',
    },
    about: {
      heroTitle: 'عن صيغة مالية',
      heroSubtitle: 'ردم الفجوة بين الأرقام والكلمات بدقة لا تضاهى.',
      storyTitle: 'قصتنا: من فكرة إلى أداة أساسية',
      storyP1: 'وُلد مشروع "صيغة مالية" من رحم التحديات العملية التي يواجهها المهنيون يوميًا. لاحظنا وجود فجوة حرجة في عالم المال والأعمال: التعقيد الكامن في تحويل المبالغ الرقمية إلى نصوص مكتوبة بشكل صحيح، خاصة مع القواعد النحوية الدقيقة للغة العربية التي لا تترك مجالاً للخطأ في المستندات الرسمية.',
      storyP2: 'لم تكن المشكلة مجرد إزعاج بسيط، بل كانت مصدرًا محتملاً للمخاطر القانونية والمالية. خطأ واحد في كلمة أو حرف يمكن أن يغير معنى بند في عقد أو قيمة شيك. من هنا، انطلقنا في مهمة لإنشاء حل ليس مجرد محول، بل حرفي رقمي يصوغ النصوص المالية بدقة متناهية.',
      storyP3: 'هدفنا كان واضحًا: تطوير أداة ذكية، بديهية، وآمنة تمامًا، تمكّن المستخدمين من التركيز على أعمالهم الأساسية، تاركين لنا مهمة ضمان الدقة اللغوية والمالية. اليوم، تطورت "صيغة مالية" من أداة واحدة إلى مجموعة متكاملة من الأدوات، وكلها مصممة لخدمة هذا الهدف الأساسي.',
      missionVisionTitle: 'مهمتنا ورؤيتنا',
      missionTitle: 'مهمتنا',
      missionText: 'تمكين المهنيين والأفراد من خلال توفير أدوات مالية هي الأكثر دقة وأمانًا وسهولة في الاستخدام، مما يزيل الغموض ويعزز الثقة في كل معاملة.',
      visionTitle: 'رؤيتنا',
      visionText: 'أن نصبح المعيار العالمي في إعداد المستندات المالية والتحقق منها، من خلال دمج التكنولوجيا الذكية لتبسيط التعقيدات وتعزيز الكفاءة المهنية.',
      principlesTitle: 'مبادئنا الأساسية',
      principle1Title: 'الدقة التي لا هوادة فيها',
      principle1Text: 'كل خوارزمية نطورها تخضع لاختبارات صارمة لضمان توافقها التام مع المعايير المحاسبية واللغوية. الدقة ليست ميزة، بل هي أساس وجودنا.',
      principle2Title: 'الأمان المطلق',
      principle2Text: 'نحن نؤمن بأن الخصوصية حق أساسي. تعمل جميع أدواتنا بالكامل على جهازك. لا يتم إرسال أو تخزين أي بيانات تدخلها على خوادمنا على الإطلاق.',
      principle3Title: 'البساطة الأنيقة',
      principle3Text: 'نترجم العمليات المعقدة إلى واجهات مستخدم نظيفة وبديهية. هدفنا هو توفير تجربة سلسة تتيح لك إنجاز مهامك بسرعة وكفاءة.',
      principle4Title: 'الابتكار المستمر',
      principle4Text: 'نحن نستمع بإنصات لملاحظات مستخدمينا ونسعى باستمرار لتوسيع مجموعة أدواتنا وتطوير ميزات جديدة تلبي الاحتياجات المتغيرة لعالم الأعمال.',
      whoWeServeTitle: 'من نخدم؟',
      whoWeServeIntro: 'تم تصميم أدواتنا لتلبية احتياجات مجموعة واسعة من المستخدمين الذين يتعاملون مع الدقة المالية:',
      serve1Title: 'المحاسبون والمهنيون الماليون',
      serve1Text: 'لضمان دقة الفواتير والتقارير المالية وإيصالات الدفع.',
      serve2Title: 'المحامون والمستشارون القانونيون',
      serve2Text: 'لصياغة بنود مالية محكمة في العقود والاتفاقيات.',
      serve3Title: 'أصحاب الأعمال والمديرون',
      serve3Text: 'لتحرير الشيكات والأوامر المالية والتخطيط للقروض بثقة.',
      serve4Title: 'أي شخص يتعامل مع المستندات المالية',
      serve4Text: 'لتجنب الأخطاء الشائعة وضمان الوضوح في المعاملات الشخصية.',
      commitmentTitle: 'التزامنا تجاهك',
      commitmentText: 'نحن في "صيغة مالية" لسنا مجرد مزود للأدوات؛ نحن شركاؤك في الدقة. نحن ملتزمون بتقديم دعم استثنائي وتطوير مستمر لمنصتنا. ملاحظاتك هي المحرك الذي يدفعنا للابتكار. شكرًا لثقتك بنا.'
    },
    contact: {
        title: 'اتصل بنا',
        p1: 'نحن نقدر ملاحظاتك واستفساراتك.',
        p2: 'لأي أسئلة أو اقتراحات أو دعم فني، يرجى التواصل معنا عبر البريد الإلكتروني:',
        p3: 'سنبذل قصارى جهدنا للرد عليك في أقرب وقت ممكن.',
    },
    privacy: {
        title: 'سياسة الخصوصية',
        effectiveDate: 'تاريخ السريان: 1 يناير 2023',
        intro: 'نحن في "صيغة مالية" نحترم خصوصيتك ونلتزم بحمايتها. توضح سياسة الخصوصية هذه كيفية تعاملنا مع معلوماتك.',
        section1: {
            title: 'المعلومات التي نجمعها',
            content: 'نحن لا نجمع أي معلومات شخصية منك. الأرقام التي تدخلها لتحويلها تتم معالجتها في متصفحك ولا يتم إرسالها أو تخزينها على خوادمنا.',
        },
        section2: {
            title: 'استخدام المعلومات',
            content: 'بما أننا لا نجمع أي معلومات، فلا نستخدمها لأي غرض.',
        },
        section3: {
            title: 'ملفات تعريف الارتباط (Cookies)',
            content: 'نحن لا نستخدم ملفات تعريف الارتباط لتتبع المستخدمين.',
        },
        section4: {
            title: 'التغييرات على سياسة الخصوصية',
            content: 'قد نقوم بتحديث سياسة الخصوصية هذه من وقت لآخر. سنقوم بنشر أي تغييرات على هذه الصفحة.',
        },
        contact: 'إذا كانت لديك أي أسئلة حول سياسة الخصوصية هذه، يرجى الاتصال بنا.',
    },
    terms: {
        title: 'شروط الخدمة',
        intro: 'يرجى قراءة شروط الخدمة هذه بعناية قبل استخدام موقعنا.',
        section1: {
            title: 'قبول الشروط',
            content: 'باستخدامك لموقع "صيغة مالية"، فإنك توافق على الالتزام بهذه الشروط.',
        },
        section2: {
            title: 'وصف الخدمة',
            content: 'توفر "صيغة مالية" أداة لتحويل الأرقام إلى نصوص. يتم توفير الخدمة "كما هي" دون أي ضمانات.',
        },
        section3: {
            title: 'إخلاء المسؤولية',
            content: 'على الرغم من أننا نسعى جاهدين لتحقيق الدقة، إلا أننا لا نضمن أن تكون التحويلات خالية من الأخطاء بنسبة 100%. تقع على عاتق المستخدم مسؤولية التحقق من صحة النتائج قبل استخدامها في أي مستند رسمي.',
        },
        section4: {
            title: 'تحديد المسؤولية',
            content: 'لن نكون مسؤولين عن أي أضرار مباشرة أو غير مباشرة تنشأ عن استخدام أو عدم القدرة على استخدام خدمتنا.',
        },
        section5: {
            title: 'التغييرات على الشروط',
            content: 'نحتفظ بالحق في تعديل هذه الشروط في أي وقت. استمرارك في استخدام الموقع بعد أي تغييرات يعني موافقتك على الشروط الجديدة.',
        },
    },
    articles: {
      title: 'مقالات مفيدة',
      subtitle: 'تعمق في عالم الأرقام والكلمات مع مقالاتنا المتخصصة.',
      readMore: 'اقرأ المزيد',
    },
    articleDetail: {
        notFound: {
            title: 'المقالة غير موجودة',
            message: 'عذراً، لم نتمكن من العثور على المقالة التي تبحث عنها.',
        },
        backLink: 'العودة إلى المقالات',
        shareTitle: 'شارك هذا المقال',
        copyLink: 'نسخ الرابط',
        copyLinkSuccess: 'تم نسخ الرابط!',
    },
    faqPage: {
      title: "الأسئلة الشائعة",
      subtitle: "إجابات على أكثر الاستفسارات شيوعًا حول أدواتنا وخدماتنا.",
      questions: [
        {
          q: "هل استخدام أدوات 'صيغة مالية' آمن؟",
          a: "نعم، آمن تمامًا. جميع أدواتنا تعمل بالكامل داخل متصفحك (Client-Side). هذا يعني أن أي بيانات تدخلها لا تغادر جهازك أبدًا ولا يتم إرسالها أو تخزينها على خوادمنا. خصوصيتك وأمان بياناتك هما أولويتنا القصوى."
        },
        {
          q: "هل الأدوات مجانية؟",
          a: "نعم، جميع أدواتنا الحالية متاحة للاستخدام مجانًا بشكل كامل. هدفنا هو توفير أدوات دقيقة وموثوقة لمساعدة أكبر عدد ممكن من المهنيين والأفراد."
        },
        {
          q: "ما مدى دقة أداة تحويل الأرقام؟",
          a: "الأداة دقيقة للغاية. تم تصميم الخوارزمية الخاصة بنا بعناية فائقة لتتوافق مع القواعد النحوية المعقدة للغة العربية والإنجليزية، مع مراعاة صيغ المفرد والمثنى والجمع، وتذكير وتأنيث العدد والمعدود. ومع ذلك، نوصي دائمًا بمراجعة النتائج قبل استخدامها في المستندات الرسمية النهائية."
        },
        {
          q: "هل يمكنني استخدام مولد الفواتير لعملي التجاري؟",
          a: "بالتأكيد. تم تصميم مولد الفواتير ليكون أداة عملية للمستقلين والشركات الصغيرة. يمكنك إنشاء فواتير احترافية وتنزيلها كملف PDF. ننصح دائمًا بالتحقق من المتطلبات القانونية للفواتير في بلدك."
        },
        {
          q: "ما هي العملات التي تدعمها الأداة؟",
          a: "تدعم أداة تحويل الأرقام مجموعة واسعة من العملات العربية والعالمية. يمكنك العثور على قائمة كاملة في القائمة المنسدلة لاختيار العملة. إذا كانت هناك عملة تود إضافتها، فلا تتردد في <a href=\"#/contact\" class=\"text-teal-600 dark:text-teal-400 font-semibold hover:underline\">الاتصال بنا</a>."
        },
        {
          q: "كيف يعمل مدقق المستندات بالذكاء الاصطناعي؟",
          a: "تستخدم هذه الأداة نماذج لغوية متقدمة (من خلال Gemini API) لتحليل النص الذي تقدمه. يقوم النموذج بمراجعة النص بناءً على تعليمات مخصصة للتدقيق المالي والقانوني، ثم يقدم تقريرًا بالمشاكل المحتملة والتوصيات. تذكر أن هذه الأداة هي للمساعدة فقط ولا تحل محل استشارة خبير بشري."
        }
      ]
    },
    meta: {
      home: {
        title: "صيغة مالية | لوحة الأدوات المالية المتكاملة",
        description: "مجموعة أدوات مالية: محول أرقام، محول تاريخ، مولد فواتير، ومساعد صياغة بنود العقود."
      },
      numberConverter: {
        title: "محول الأرقام إلى نصوص | صيغة مالية",
        description: "أداة دقيقة لتحويل المبالغ المالية من أرقام إلى نصوص باللغة العربية والإنجليزية، مثالية للعقود والفواتير والشيكات."
      },
      dateConverter: {
        title: "محول التاريخ إلى نص | صيغة مالية",
        description: "حوّل التواريخ بسهولة إلى نص مكتوب بالكامل باللغتين العربية والإنجليزية للمستندات الرسمية والعقود."
      },
      invoiceGenerator: {
        title: "مولد الفواتير | صيغة مالية",
        description: "أنشئ فواتير احترافية بسهولة وحملها بصيغة PDF. أداة مثالية للمستقلين والشركات الصغيرة."
      },
      receiptGenerator: {
        title: "مولد إيصالات الدفع | صيغة مالية",
        description: "أنشئ إيصالات دفع احترافية وقابلة للتخصيص بسهولة. أدخل التفاصيل وحمل الإيصال بصيغة PDF."
      },
      contractClause: {
        title: "مساعد صياغة البنود المالية | صيغة مالية",
        description: "أنشئ بنودًا مالية دقيقة وقانونية لعقودك واتفاقياتك بسهولة. أدخل المبلغ واحصل على فقرة جاهزة للنسخ."
      },
      loanCalculator: {
        title: "حاسبة الأقساط والتمويل | صيغة مالية",
        description: "أداة احترافية لحساب أقساط القروض الشهرية، إجمالي الفوائد، وعرض جدول السداد الكامل لمساعدتك على التخطيط المالي."
      },
      currencyConverter: {
        title: "محول العملات المباشر | صيغة مالية",
        description: "أداة احترافية لتحويل العملات بناءً على أحدث أسعار الصرف العالمية. سريعة ودقيقة ومجانية."
      },
      documentChecker: {
        title: "مدقق المستندات بالذكاء الاصطناعي | صيغة مالية",
        description: "استخدم الذكاء الاصطناعي لمراجعة العقود والفواتير والمستندات المالية لاكتشاف الأخطاء والمخاطر المحتملة."
      },
      glossary: {
        title: "مصطلحات مالية | صيغة مالية",
        description: "ابحث وتصفح قاموس شامل للمصطلحات المالية والمحاسبية باللغتين العربية والإنجليزية لفهم أعمق لعالم المال."
      },
      articles: {
        title: "مقالات | صيغة مالية",
        description: "مقالات متخصصة حول كتابة المبالغ المالية، الأخطاء الشائعة، والمتطلبات القانونية لضمان دقة مستنداتك."
      },
      articleDetail: {
        title: "%s | صيغة مالية",
        description: "%s"
      },
      about: {
        title: "عن الموقع | صيغة مالية",
        description: "تعرف على هدف ورؤية 'صيغة مالية'، الأداة الموثوقة لتحويل الأرقام إلى نصوص مالية بدقة وأمان."
      },
      contact: {
        title: "اتصل بنا | صيغة مالية",
        description: "تواصل مع فريق 'صيغة مالية'. نرحب بملاحظاتك، استفساراتك، واقتراحاتك لتحسين خدماتنا."
      },
      faq: {
        title: "الأسئلة الشائعة | صيغة مالية",
        description: "ابحث عن إجابات للأسئلة الشائعة حول أدواتنا، الخصوصية، دقة البيانات، وكيفية تحقيق أقصى استفادة من 'صيغة مالية'."
      },
      privacy: {
        title: "سياسة الخصوصية | صيغة مالية",
        description: "اقرأ سياسة الخصوصية الخاصة بنا لفهم كيف نلتزم بحماية بياناتك. أداتنا لا تجمع أو تخزن أي معلومات شخصية."
      },
      terms: {
        title: "شروط الخدمة | صيغة مالية",
        description: "اطلع على شروط وأحكام استخدام أداة 'صيغة مالية'. استخدامك للموقع يعني موافقتك على هذه الشروط."
      }
    }
  },
  en: {
    header: {
      title: 'Financial Formula',
      nav: {
        home: 'Home',
        tools: 'Tools',
        numberConverter: 'Number Converter',
        dateConverter: 'Date Converter',
        invoiceGenerator: 'Invoice Generator',
        receiptGenerator: 'Receipt Generator',
        contractClause: 'Contract Clause',
        loanCalculator: 'Loan Calculator',
        currencyConverter: 'Currency Converter',
        documentChecker: 'Document Checker',
        articles: 'Articles',
        glossary: 'Glossary',
      },
      openMenu: 'Open menu',
    },
    footer: {
      copyright: 'Financial Formula. All rights reserved.',
      nav: {
        about: 'About',
        contact: 'Contact',
        faq: 'FAQ',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
      }
    },
    relatedContent: {
      title: 'Related Content',
      tools: 'Other Useful Tools',
      articles: 'Related Articles'
    },
    converter: {
        enterNumber: 'Enter amount in numbers',
        selectCurrency: 'Select currency',
        placeholder: 'e.g., 1234.56',
        result: 'Amount in words',
        copy: 'Copy',
        copySuccess: 'Copied!',
        copyFail: 'Copy failed',
        outputPlaceholder: 'Result will appear here...',
    },
    dateConverterPage: {
        mainTitle: 'Date to Text Converter',
        subtitle: 'A tool to convert dates from a numerical format to fully written text, perfect for official documents and contracts.',
    },
    dateConverter: {
        selectDate: 'Select a Date',
        result: 'Date in Words',
        outputPlaceholder: 'Result will appear here...',
    },
    invoiceGeneratorPage: {
      mainTitle: 'Simple Invoice Generator',
      subtitle: 'Create professional invoices with ease and download them as a PDF. Perfect for freelancers and small businesses.',
    },
    invoiceGenerator: {
      invoice: 'INVOICE',
      from: 'From',
      billTo: 'Bill To',
      yourName: 'Your Name / Company',
      yourAddress: 'Your Address',
      clientName: 'Client\'s Name / Company',
      clientAddress: 'Client\'s Address',
      invoiceNumber: 'Invoice #',
      date: 'Date',
      item: 'Item',
      quantity: 'Quantity',
      rate: 'Rate',
      amount: 'Amount',
      subtotal: 'Subtotal',
      total: 'Total',
      amountInWords: 'Amount in Words',
      addItem: 'Add Item',
      downloadPdf: 'Download PDF',
      notes: 'Notes',
      notesPlaceholder: 'Add any notes here (optional)',
      uploadLogo: 'Upload Logo',
      removeLogo: 'Remove Logo',
    },
    receiptGeneratorPage: {
      mainTitle: 'Professional Payment Receipt Generator',
      subtitle: 'An easy tool to create and customize payment receipts, with the ability to download as a PDF.',
    },
    receiptGenerator: {
      receiptVoucher: 'Receipt Voucher',
      paymentVoucher: 'Payment Voucher',
      receiptType: 'Receipt Type',
      receiptNo: 'Receipt No.',
      amount: 'Amount',
      receivedFrom: 'Received from',
      paidTo: 'Paid to',
      amountInWords: 'The sum of',
      paymentFor: 'For',
      paymentMethod: 'Payment Method',
      cash: 'Cash',
      check: 'Check',
      bankTransfer: 'Bank Transfer',
      creditCard: 'Credit Card',
      date: 'Date',
      signature: 'Recipient\'s Signature',
      stamp: 'Stamp or Signature',
      recipientInfo: 'Your Info (Issuer)',
      yourName: 'Your Name / Company',
      payerInfo: 'Other Party Info',
      payerName: 'Payer Name',
      recipientNameForForm: 'Recipient Name',
      purposeOfPayment: 'Purpose of Payment',
      downloadPdf: 'Download PDF',
      uploadLogo: 'Upload Logo',
      removeLogo: 'Remove Logo',
    },
    contractClausePage: {
      mainTitle: 'Advanced Contract Clause Generator',
      subtitle: 'An advanced tool to create accurate and detailed financial clauses for official contracts and agreements with ease and professionalism.',
    },
    contractClause: {
      enterAmount: 'Enter Base Amount',
      result: 'Ready-to-Copy Clause',
      outputPlaceholder: 'The legal clause will appear here...',
      configuration: 'Clause Settings',
      generatedClauses: 'Generated Clauses',
      paymentStructure: 'Payment Structure',
      oneTime: 'One-time payment',
      installments: 'Installments',
      taxInfo: 'Tax Information',
      inclusive: 'Amount is tax inclusive',
      exclusive: 'Amount is tax exclusive',
      taxRate: 'Tax Rate (%)',
      taxRatePlaceholder: 'e.g., 15',
      standardClause: 'Standard Clause',
      detailedClause: 'Detailed Clause',
      parties: 'Parties (Optional)',
      payer: 'First Party (Payer)',
      payee: 'Second Party (Payee)',
      payerPlaceholder: 'e.g., Modern Contracting Co.',
      payeePlaceholder: 'e.g., Khalid Trading Est.',
      installmentDetails: 'Installment Details',
      numberOfInstallments: 'Number of Installments',
      downPayment: 'Down Payment (if any)',
      paymentFrequency: 'Payment Frequency',
      monthly: 'Monthly',
      quarterly: 'Quarterly',
      annually: 'Annually',
      paymentSchedule: 'Payment Schedule (Example)',
    },
    loanCalculatorPage: {
      mainTitle: 'Loan & Installment Calculator',
      subtitle: 'A professional tool to calculate monthly loan installments, total interest, and view the full amortization schedule to help you with financial planning.',
    },
    loanCalculator: {
      loanAmount: 'Loan Amount',
      interestRate: 'Annual Interest Rate (%)',
      loanTerm: 'Loan Term (Years)',
      calculate: 'Calculate',
      results: 'Results',
      monthlyPayment: 'Monthly Payment',
      totalPayment: 'Total Payment',
      totalInterest: 'Total Interest',
      principal: 'Principal',
      interest: 'Interest',
      amortizationSchedule: 'Amortization Schedule',
      showSchedule: 'Show Schedule',
      hideSchedule: 'Hide Schedule',
      month: 'Month',
      payment: 'Payment',
      remainingBalance: 'Remaining Balance',
    },
    currencyConverterPage: {
      mainTitle: 'Live Currency Converter',
      subtitle: 'A professional tool for converting currencies based on the latest global exchange rates.',
    },
    currencyConverter: {
      amount: 'Amount',
      from: 'From',
      to: 'To',
      result: 'Result',
      rate: 'Exchange Rate',
      lastUpdated: 'Last updated',
      swap: 'Swap currencies',
      loading: 'Fetching latest rates...',
      error: 'An error occurred while fetching exchange rates. Please try again.',
      rateUnavailable: 'Live rate not available for'
    },
    documentCheckerPage: {
      mainTitle: "AI Document Checker",
      subtitle: "Use the power of AI to analyze your financial documents, spot errors, and identify potential risks."
    },
    documentChecker: {
      pasteText: "Paste your document text here",
      or: "OR",
      uploadPrompt: "Upload a file to analyze",
      supportedFiles: "Supported files: PDF, DOCX, XLSX",
      unsupportedFile: "Unsupported file type.",
      fileParseError: "An error occurred while parsing the file.",
      fileSelected: "File selected:",
      removeFile: "Remove file",
      analyze: "Analyze Now",
      loading: "Analyzing...",
      analyzingFile: "Reading file...",
      analysisReport: "Analysis Report",
      error: "An error occurred during analysis. Please try again.",
      disclaimer: "Disclaimer: This tool uses AI and is for assistance only. Results may not be 100% accurate. Please consult a professional expert before making any decisions."
    },
    glossaryPage: {
      mainTitle: 'Financial Glossary',
      subtitle: 'Your guide to understanding the most important financial and accounting terms used in the business world.',
    },
    glossary: {
      searchPlaceholder: 'Search for a term...',
      noResults: 'No results found.',
      example: 'Example'
    },
    home: {
      mainTitle: 'Financial Formula Toolkit',
      subtitle: 'An integrated suite of financial tools to help you get your work done with precision and professionalism.',
      cards: {
        numberConverter: {
          title: 'Number to Words Converter',
          description: 'Accurately convert financial amounts from numbers to text for contracts and checks.'
        },
        dateConverter: {
          title: 'Date to Text Converter',
          description: 'Format dates into full text for official documents and records.'
        },
        invoiceGenerator: {
          title: 'Simple Invoice Generator',
          description: 'Create professional invoices and download them as a PDF in minutes.'
        },
        receiptGenerator: {
          title: 'Payment Receipt Generator',
          description: 'Create official and quick payment receipts to prove financial transactions.'
        },
        contractClause: {
          title: 'Contract Clause Helper',
          description: 'Generate legally sound and detailed financial clauses for your contracts and agreements.'
        },
        loanCalculator: {
          title: 'Loan & Installment Calculator',
          description: 'Plan your personal loans and financing with a clear understanding of installments and interest.'
        },
        currencyConverter: {
            title: 'Live Currency Converter',
            description: 'Get real-time exchange rates and convert global currencies accurately and quickly.'
        },
        documentChecker: {
          title: "AI Document Checker",
          description: "Analyze contracts and invoices to spot errors and potential risks."
        }
      },
      whyUse: {
          title: 'Why Use Financial Formula?',
          p1: 'In the world of business and finance, precision is everything. A small mistake in writing a financial amount can lead to misunderstandings, legal disputes, or financial losses. "Financial Formula" is designed to provide a fast, accurate, and reliable solution for converting numbers to text, ensuring your financial documents are clear and error-free.',
          p2: 'Whether you are preparing an invoice, writing a check, or drafting a legal contract, our tool ensures that the written text perfectly matches the numbers, taking into account the complex grammatical rules of both English and Arabic.',
          beneficiariesTitle: 'Who Benefits from Our Services?',
          b1_strong: 'Accountants and Financial Professionals:',
          b1_text: 'To ensure the accuracy of invoices and financial reports.',
          b2_strong: 'Lawyers and Legal Advisors:',
          b2_text: 'To draft unambiguous contracts and legal documents.',
          b3_strong: 'Business Owners and Managers:',
          b3_text: 'To issue checks and financial orders with confidence.',
          b4_strong: 'Anyone Dealing with Financial Documents:',
          b4_text: 'To avoid common errors and ensure clarity.',
          p3: 'Use "Financial Formula" today and enjoy the peace of mind that comes with absolute accuracy.'
      },
    },
    numberConverterPage: {
        mainTitle: 'Easily Convert Numbers to Words',
        subtitle: 'An accurate tool for converting financial amounts from numbers to text in both English and Arabic, perfect for contracts, invoices, and checks.',
    },
    about: {
      heroTitle: 'About Financial Formula',
      heroSubtitle: 'Bridging the gap between numbers and words with unparalleled accuracy.',
      storyTitle: 'Our Story: From an Idea to an Essential Tool',
      storyP1: '"Financial Formula" was born from the practical challenges professionals face daily. We noticed a critical gap in the world of finance and business: the inherent complexity of converting numerical amounts into correctly written text, especially with the precise grammatical rules of the Arabic language that leave no room for error in official documents.',
      storyP2: 'The problem was not just a minor inconvenience; it was a potential source of legal and financial risk. A single mistake in a word or letter could alter the meaning of a contract clause or the value of a check. From here, we embarked on a mission to create a solution that is not just a converter, but a digital artisan that crafts financial texts with meticulous precision.',
      storyP3: 'Our goal was clear: to develop a tool that is smart, intuitive, and completely secure, enabling users to focus on their core business, leaving the task of ensuring linguistic and financial accuracy to us. Today, "Financial Formula" has evolved from a single tool to an integrated suite of tools, all designed to serve this primary objective.',
      missionVisionTitle: 'Our Mission & Vision',
      missionTitle: 'Our Mission',
      missionText: 'To empower professionals and individuals by providing the most accurate, secure, and user-friendly financial tools, eliminating ambiguity and fostering confidence in every transaction.',
      visionTitle: 'Our Vision',
      visionText: 'To become the global standard for financial document preparation and verification, integrating smart technology to simplify complexities and enhance professional efficiency.',
      principlesTitle: 'Our Core Principles',
      principle1Title: 'Uncompromising Accuracy',
      principle1Text: 'Every algorithm we develop undergoes rigorous testing to ensure full compliance with accounting and linguistic standards. Accuracy is not a feature; it is the foundation of our existence.',
      principle2Title: 'Absolute Security',
      principle2Text: 'We believe that privacy is a fundamental right. All our tools operate entirely on your device. No data you enter is ever sent to or stored on our servers.',
      principle3Title: 'Elegant Simplicity',
      principle3Text: 'We translate complex processes into clean, intuitive user interfaces. Our goal is to provide a seamless experience that allows you to complete your tasks quickly and efficiently.',
      principle4Title: 'Continuous Innovation',
      principle4Text: 'We listen intently to our users\' feedback and continuously strive to expand our toolkit and develop new features that meet the evolving needs of the business world.',
      whoWeServeTitle: 'Who We Serve',
      whoWeServeIntro: 'Our tools are designed to meet the needs of a wide range of users who deal with financial precision:',
      serve1Title: 'Accountants and Financial Professionals',
      serve1Text: 'To ensure the accuracy of invoices, financial reports, and payment receipts.',
      serve2Title: 'Lawyers and Legal Advisors',
      serve2Text: 'To draft airtight financial clauses in contracts and agreements.',
      serve3Title: 'Business Owners and Managers',
      serve3Text: 'To issue checks, financial orders, and plan for loans with confidence.',
      serve4Title: 'Anyone Dealing with Financial Documents',
      serve4Text: 'To avoid common errors and ensure clarity in personal transactions.',
      commitmentTitle: 'Our Commitment to You',
      commitmentText: 'At "Financial Formula," we are not just a tool provider; we are your partners in precision. We are committed to providing exceptional support and continuous development of our platform. Your feedback is the engine that drives our innovation. Thank you for trusting us.'
    },
    contact: {
        title: 'Contact Us',
        p1: 'We value your feedback and inquiries.',
        p2: 'For any questions, suggestions, or technical support, please contact us via email:',
        p3: 'We will do our best to respond to you as soon as possible.',
    },
    privacy: {
        title: 'Privacy Policy',
        effectiveDate: 'Effective Date: January 1, 2023',
        intro: 'At "Financial Formula", we respect your privacy and are committed to protecting it. This Privacy Policy explains how we handle your information.',
        section1: {
            title: 'Information We Collect',
            content: 'We do not collect any personal information from you. The numbers you enter for conversion are processed in your browser and are not sent to or stored on our servers.',
        },
        section2: {
            title: 'Use of Information',
            content: 'Since we do not collect any information, we do not use it for any purpose.',
        },
        section3: {
            title: 'Cookies',
            content: 'We do not use cookies to track users.',
        },
        section4: {
            title: 'Changes to This Privacy Policy',
            content: 'We may update this Privacy Policy from time to time. We will post any changes on this page.',
        },
        contact: 'If you have any questions about this Privacy Policy, please contact us.',
    },
    terms: {
        title: 'Terms of Service',
        intro: 'Please read these Terms of Service carefully before using our website.',
        section1: {
            title: 'Acceptance of Terms',
            content: 'By using "Financial Formula", you agree to be bound by these Terms.',
        },
        section2: {
            title: 'Description of Service',
            content: '"Financial Formula" provides a tool to convert numbers to text. The service is provided "as is" without any warranties.',
        },
        section3: {
            title: 'Disclaimer',
            content: 'While we strive for accuracy, we do not guarantee that the conversions will be 100% error-free. It is the user\'s responsibility to verify the correctness of the results before using them in any official document.',
        },
        section4: {
            title: 'Limitation of Liability',
            content: 'We shall not be liable for any direct or indirect damages arising out of the use or inability to use our service.',
        },
        section5: {
            title: 'Changes to Terms',
            content: 'We reserve the right to modify these terms at any time. Your continued use of the site after any changes constitutes your acceptance of the new Terms.',
        },
    },
    articles: {
      title: 'Helpful Articles',
      subtitle: 'Delve into the world of numbers and words with our expert articles.',
      readMore: 'Read More',
    },
    articleDetail: {
        notFound: {
            title: 'Article Not Found',
            message: 'Sorry, we couldn\'t find the article you are looking for.',
        },
        backLink: 'Back to Articles',
        shareTitle: 'Share this article',
        copyLink: 'Copy link',
        copyLinkSuccess: 'Link copied!',
    },
    faqPage: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to the most common inquiries about our tools and services.",
      questions: [
        {
          q: "Is it safe to use 'Financial Formula' tools?",
          a: "Yes, completely safe. All our tools operate entirely within your browser (Client-Side). This means that any data you enter never leaves your device and is not sent to or stored on our servers. Your privacy and data security are our top priority."
        },
        {
          q: "Are the tools free?",
          a: "Yes, all our current tools are available for use completely free of charge. Our goal is to provide accurate and reliable tools to help as many professionals and individuals as possible."
        },
        {
          q: "How accurate is the number conversion tool?",
          a: "The tool is highly accurate. Our algorithm has been meticulously designed to comply with the complex grammatical rules of both Arabic and English, considering singular, dual, and plural forms, as well as the gender agreement between numbers and nouns. However, we always recommend reviewing the results before using them in final official documents."
        },
        {
          q: "Can I use the invoice generator for my business?",
          a: "Absolutely. The invoice generator is designed to be a practical tool for freelancers and small businesses. You can create professional invoices and download them as a PDF. We always advise checking the legal requirements for invoices in your country."
        },
        {
          q: "Which currencies does the tool support?",
          a: "The number converter tool supports a wide range of Arab and international currencies. You can find a full list in the currency selection dropdown. If there is a currency you would like us to add, please feel free to <a href=\"#/contact\" class=\"text-teal-600 dark:text-teal-400 font-semibold hover:underline\">contact us</a>."
        },
        {
          q: "How does the AI Document Checker work?",
          a: "This tool uses advanced language models (via the Gemini API) to analyze the text you provide. The model reviews the text based on custom instructions for financial and legal auditing, then provides a report of potential issues and recommendations. Remember that this tool is for assistance only and does not replace consultation with a human expert."
        }
      ]
    },
    meta: {
      home: {
        title: "Financial Formula | The Complete Financial Toolkit",
        description: "A suite of financial tools: number converter, date converter, invoice generator, and contract clause helper."
      },
      numberConverter: {
        title: "Number to Text Converter | Financial Formula",
        description: "An accurate tool to convert financial amounts from numbers to text in English and Arabic, perfect for contracts, invoices, and checks."
      },
      dateConverter: {
        title: "Date to Text Converter | Financial Formula",
        description: "Easily convert dates to fully written text in English and Arabic for official documents and contracts."
      },
      invoiceGenerator: {
        title: "Invoice Generator | Financial Formula",
        description: "Create professional invoices with ease and download them as a PDF. The perfect tool for freelancers and small businesses."
      },
      receiptGenerator: {
        title: "Payment Receipt Generator | Financial Formula",
        description: "Create professional and customizable payment receipts with ease. Enter details and download the receipt as a PDF."
      },
      contractClause: {
        title: "Contract Clause Helper | Financial Formula",
        description: "Generate accurate and legally sound financial clauses for your contracts and agreements with ease. Enter the amount and get a ready-to-copy paragraph."
      },
      loanCalculator: {
        title: "Loan & Installment Calculator | Financial Formula",
        description: "A professional tool to calculate monthly loan installments, total interest, and view the full amortization schedule to help you with financial planning."
      },
      currencyConverter: {
        title: "Live Currency Converter | Financial Formula",
        description: "A professional tool for converting currencies based on the latest global exchange rates. Fast, accurate, and free."
      },
      documentChecker: {
        title: "AI Document Checker | Financial Formula",
        description: "Use AI to review your contracts, invoices, and financial documents to find errors and potential risks."
      },
      glossary: {
        title: "Financial Glossary | Financial Formula",
        description: "Search and browse a comprehensive dictionary of financial and accounting terms in English and Arabic for a deeper understanding of the world of finance."
      },
      articles: {
        title: "Articles | Financial Formula",
        description: "Expert articles on writing financial amounts, common mistakes, and legal requirements to ensure the accuracy of your documents."
      },
      articleDetail: {
        title: "%s | Financial Formula",
        description: "%s"
      },
      about: {
        title: "About | Financial Formula",
        description: "Learn about the mission and vision of 'Financial Formula', the trusted tool for converting numbers into financial text with accuracy and security."
      },
      contact: {
        title: "Contact Us | Financial Formula",
        description: "Get in touch with the 'Financial Formula' team. We welcome your feedback, inquiries, and suggestions to improve our services."
      },
      faq: {
        title: "FAQ | Financial Formula",
        description: "Find answers to frequently asked questions about our tools, privacy, data accuracy, and how to get the most out of 'Financial Formula'."
      },
      privacy: {
        title: "Privacy Policy | Financial Formula",
        description: "Read our privacy policy to understand how we are committed to protecting your data. Our tool does not collect or store any personal information."
      },
      terms: {
        title: "Terms of Service | Financial Formula",
        description: "Review the terms and conditions for using the 'Financial Formula' tool. Your use of the site constitutes your agreement to these terms."
      }
    }
  }
};

// Define the provider component props
interface I18nProviderProps {
  children: React.ReactNode;
}

// Create the provider component
export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<'ar' | 'en'>(() => {
    if (typeof window !== 'undefined') {
      const savedLang = localStorage.getItem('language');
      if (savedLang === 'ar' || savedLang === 'en') {
        return savedLang;
      }
      // Check browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'ar') {
        return 'ar';
      }
    }
    // Default to 'ar'
    return 'ar';
  });

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('language', language);
  }, [language]);

  const setLanguage = (lang: 'ar' | 'en') => {
    setLanguageState(lang);
  };

  const t = useCallback((key: string): any => {
    const keys = key.split('.');
    let result: any = translations[language];
    for (const k of keys) {
      result = result?.[k];
    }
    return result || key;
  }, [language]);

  const value = { language, setLanguage, t };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
};
