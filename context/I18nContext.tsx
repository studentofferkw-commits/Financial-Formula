import React, { createContext, useState, useEffect, useCallback } from 'react';

// Define the shape of the context data
interface I18nContextType {
  language: 'ar' | 'en';
  setLanguage: (lang: 'ar' | 'en') => void;
  t: (key: string) => string;
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
        dateConverter: 'تحويل التاريخ',
        invoiceGenerator: 'مولد الفواتير',
        glossary: 'مسرد المصطلحات',
        articles: 'مقالات',
        about: 'عن الموقع',
        contact: 'اتصل بنا',
      },
      openMenu: 'افتح القائمة',
    },
    footer: {
      copyright: 'صيغة مالية. جميع الحقوق محفوظة.',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
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
    glossaryPage: {
      mainTitle: 'مسرد المصطلحات المالية',
      subtitle: 'دليلك لفهم أهم المصطلحات المالية والمحاسبية المستخدمة في عالم الأعمال.',
    },
    glossary: {
      searchPlaceholder: 'ابحث عن مصطلح...',
      noResults: 'لم يتم العثور على نتائج.',
    },
    home: {
        mainTitle: 'تحويل الأرقام إلى كلمات بسهولة',
        subtitle: 'أداة دقيقة لتحويل المبالغ المالية من أرقام إلى نصوص باللغتين العربية والإنجليزية، مثالية للعقود والفواتير والشيكات.',
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
    about: {
        title: 'عن صيغة مالية',
        p1: 'مرحبًا بك في "صيغة مالية"، الأداة الموثوقة لتحويل المبالغ الرقمية إلى نصوص مكتوبة بدقة باللغتين العربية والإنجليزية.',
        p2: 'وُلد هذا المشروع من رحم الحاجة إلى الدقة في المعاملات المالية والمستندات القانونية. لاحظنا أن العديد من المهنيين يواجهون تحديًا في كتابة المبالغ المالية بالحروف بشكل صحيح، خاصة مع تعقيدات القواعد النحوية في اللغة العربية.',
        p3: 'هدفنا هو توفير أداة بسيطة ومباشرة تخدم المحاسبين والمحامين وأصحاب الأعمال وأي شخص يحتاج إلى ضمان تطابق الأرقام مع الكلمات في مستنداته الهامة.',
        p4: 'نحن نؤمن بأن الوضوح والدقة هما أساس الثقة في أي معاملة. لذلك، قمنا بتطوير خوارزمياتنا بعناية فائقة لتغطية مختلف العملات ومراعاة أدق التفاصيل اللغوية.',
        p5: 'نأمل أن تجد أداتنا مفيدة في عملك اليومي. نحن ملتزمون بالتحسين المستمر ونرحب بأي ملاحظات منك.',
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
    },
    meta: {
      home: {
        title: "صيغة مالية | محول الأرقام إلى نصوص مالية",
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
      glossary: {
        title: "مسرد المصطلحات المالية | صيغة مالية",
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
        dateConverter: 'Date Converter',
        invoiceGenerator: 'Invoice Generator',
        glossary: 'Glossary',
        articles: 'Articles',
        about: 'About',
        contact: 'Contact',
      },
      openMenu: 'Open menu',
    },
    footer: {
      copyright: 'Financial Formula. All rights reserved.',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
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
    glossaryPage: {
        mainTitle: 'Glossary of Financial Terms',
        subtitle: 'Your guide to understanding the key financial and accounting terms used in the world of business.',
    },
    glossary: {
        searchPlaceholder: 'Search for a term...',
        noResults: 'No results found.',
    },
    home: {
        mainTitle: 'Convert Numbers to Words with Ease',
        subtitle: 'An accurate tool for converting financial amounts from numbers to text in both Arabic and English, perfect for contracts, invoices, and checks.',
        whyUse: {
            title: 'Why Use Financial Formula?',
            p1: 'In the world of business and finance, precision is everything. A small mistake in writing a financial amount can lead to misunderstandings, legal disputes, or financial losses. "Financial Formula" is designed to provide a fast, accurate, and reliable solution for converting numbers to text, ensuring your financial documents are clear and error-free.',
            p2: 'Whether you are preparing an invoice, writing a check, or drafting a legal contract, our tool ensures that the written text matches the numbers with utmost accuracy, taking into account the complex grammatical rules of the Arabic language.',
            beneficiariesTitle: 'Who Benefits from Our Service?',
            b1_strong: 'Accountants and Financial Professionals:',
            b1_text: 'To ensure the accuracy of invoices and financial reports.',
            b2_strong: 'Lawyers and Legal Advisors:',
            b2_text: 'For drafting unambiguous contracts and legal documents.',
            b3_strong: 'Business Owners and Managers:',
            b3_text: 'For writing checks and financial orders with confidence.',
            b4_strong: 'Anyone Dealing with Financial Documents:',
            b4_text: 'To avoid common errors and ensure clarity.',
            p3: 'Use "Financial Formula" today and enjoy the peace of mind that comes with absolute accuracy.'
        },
    },
    about: {
        title: 'About Financial Formula',
        p1: 'Welcome to "Financial Formula," your reliable tool for accurately converting numerical amounts into written text in both Arabic and English.',
        p2: 'This project was born out of the need for precision in financial transactions and legal documents. We noticed that many professionals face challenges in correctly writing financial amounts in words, especially with the complexities of Arabic grammar.',
        p3: 'Our goal is to provide a simple and straightforward tool that serves accountants, lawyers, business owners, and anyone who needs to ensure that numbers match words in their important documents.',
        p4: 'We believe that clarity and accuracy are the foundation of trust in any transaction. Therefore, we have meticulously developed our algorithms to cover various currencies and consider the finest linguistic details.',
        p5: 'We hope you find our tool useful in your daily work. We are committed to continuous improvement and welcome any feedback from you.',
    },
    contact: {
        title: 'Contact Us',
        p1: 'We value your feedback and inquiries.',
        p2: 'For any questions, suggestions, or technical support, please contact us via email:',
        p3: 'We will do our best to get back to you as soon as possible.',
    },
    privacy: {
        title: 'Privacy Policy',
        effectiveDate: 'Effective Date: January 1, 2023',
        intro: 'At "Financial Formula," we respect your privacy and are committed to protecting it. This Privacy Policy explains how we handle your information.',
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
            content: 'By using the "Financial Formula" website, you agree to be bound by these Terms.',
        },
        section2: {
            title: 'Description of Service',
            content: '"Financial Formula" provides a tool for converting numbers to text. The service is provided "as is" without any warranties.',
        },
        section3: {
            title: 'Disclaimer',
            content: 'Although we strive for accuracy, we do not guarantee that the conversions will be 100% error-free. It is the user\'s responsibility to verify the correctness of the results before using them in any official document.',
        },
        section4: {
            title: 'Limitation of Liability',
            content: 'We will not be liable for any direct or indirect damages arising from the use or inability to use our service.',
        },
        section5: {
            title: 'Changes to Terms',
            content: 'We reserve the right to modify these terms at any time. Your continued use of the site after any changes constitutes your acceptance of the new terms.',
        },
    },
    articles: {
      title: 'Helpful Articles',
      subtitle: 'Delve into the world of numbers and words with our specialized articles.',
      readMore: 'Read More',
    },
    articleDetail: {
        notFound: {
            title: 'Article Not Found',
            message: 'Sorry, we couldn\'t find the article you are looking for.',
        },
        backLink: 'Back to Articles',
    },
    meta: {
      home: {
        title: "Financial Formula | Number to Financial Text Converter",
        description: "An accurate tool for converting financial amounts from numbers to text in both Arabic and English, perfect for contracts, invoices, and checks."
      },
      dateConverter: {
        title: "Date to Text Converter | Financial Formula",
        description: "Easily convert dates into fully written text in Arabic and English for official documents and contracts."
      },
      invoiceGenerator: {
        title: "Invoice Generator | Financial Formula",
        description: "Create professional invoices with ease and download them as a PDF. The perfect tool for freelancers and small businesses."
      },
      glossary: {
        title: "Glossary of Financial Terms | Financial Formula",
        description: "Search and browse a comprehensive dictionary of financial and accounting terms in Arabic and English for a deeper understanding of the world of finance."
      },
      articles: {
        title: "Articles | Financial Formula",
        description: "Specialized articles on writing financial amounts, common mistakes, and legal requirements to ensure the accuracy of your documents."
      },
      articleDetail: {
        title: "%s | Financial Formula",
        description: "%s"
      },
      about: {
        title: "About Us | Financial Formula",
        description: "Learn about the mission and vision of 'Financial Formula', the reliable tool for converting numbers to financial text with accuracy and security."
      },
      contact: {
        title: "Contact Us | Financial Formula",
        description: "Get in touch with the 'Financial Formula' team. We welcome your feedback, inquiries, and suggestions to improve our services."
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

// Provider component
export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<'ar' | 'en'>(() => {
    const savedLang = localStorage.getItem('language');
    if (savedLang === 'ar' || savedLang === 'en') {
      return savedLang;
    }
    // Default to English as per the new requirement
    return 'en';
  });

  const setLanguage = (lang: 'ar' | 'en') => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };
  
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  }, [language]);
  
  const t = useCallback((key: string): string => {
    const keys = key.split('.');
    let result: any = translations[language];
    for (const k of keys) {
      result = result?.[k];
      if (result === undefined) {
        // Fallback to English if translation is missing
        let fallbackResult: any = translations['en'];
        for (const fk of keys) {
            fallbackResult = fallbackResult?.[fk];
        }
        return fallbackResult || key;
      }
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