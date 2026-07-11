// oxlint-disable react/only-export-components
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import type { Certificate, Project } from '../types'

export type Language = 'ar' | 'en'

interface ProjectText {
  category: string
  shortDescription: string
  tags: string[]
}

interface CertificateText {
  title: string
  issuer: string
  date: string
  summary: string
}

interface ExperienceText {
  title: string
  company: string
  date: string
  description: string
  technologies: string[]
}

interface EducationText {
  degree: string
  school: string
  date: string
  details: string[]
}

interface ServiceText {
  title: string
  summary: string
  deliverables: string[]
}

interface FAQText {
  question: string
  answer: string
}

interface LanguageContent {
  nav: Record<string, string>
  common: {
    liveSite: string
    caseStudy: string
    readCaseStudy: string
    viewWork: string
    contact: string
    downloadCv: string
    location: string
    currentFocus: string
    openMenu: string
    closeMenu: string
    menu: string
    languageToggle: string
    previousProject: string
    nextProject: string
    desktop: string
    tablet: string
    mobile: string
    viewCertificate: string
  }
  hero: {
    availability: string
    title: string
    tags: string[]
    shortBio: string
    location: string
    currentFocus: string
  }
  stats: Array<{ value: string; label: string; description: string }>
  showcase: {
    eyebrow: string
    title: string
    description: string
    tabsLabel: string
    deviceControls: string
  }
  credentials: {
    eyebrow: string
    title: string
    description: string
    additional: string
    additionalTitle: string
    training: string[]
  }
  featured: {
    eyebrow: string
    titleSuffix: string
    description: string
  }
  about: {
    eyebrow: string
    title: string
    description: string
    cards: Array<{ title: string; text: string }>
  }
  experience: {
    eyebrow: string
    title: string
    description: string
    items: ExperienceText[]
  }
  education: {
    eyebrow: string
    title: string
    description: string
    items: EducationText[]
  }
  services: {
    eyebrow: string
    title: string
    description: string
    items: Record<string, ServiceText>
  }
  faq: {
    eyebrow: string
    title: string
    description: string
    items: FAQText[]
  }
  contactCta: {
    eyebrow: string
    title: string
    description: string
    email: string
    call: string
    reviewWork: string
    cursor: string
  }
  caseStudyPage: {
    back: string
    demoEyebrow: string
    demoTitle: string
    overviewEyebrow: string
    overviewTitle: string
    problemEyebrow: string
    problemTitle: string
    goalsEyebrow: string
    goalsTitle: string
    roleEyebrow: string
    roleTitle: string
    stackEyebrow: string
    stackTitle: string
    architectureEyebrow: string
    architectureTitle: string
    featuresEyebrow: string
    featuresTitle: string
    designEyebrow: string
    designTitle: string
    challengesEyebrow: string
    challengesTitle: string
    solutionsEyebrow: string
    solutionsTitle: string
    galleryEyebrow: string
    galleryTitle: string
    resultsEyebrow: string
    resultsTitle: string
    lessonsEyebrow: string
    lessonsTitle: string
    nextProject: string
    openNext: string
  }
  footer: string
  projects: Record<string, ProjectText>
  certificates: Record<string, CertificateText>
}

const content: Record<Language, LanguageContent> = {
  ar: {
    nav: {
      home: 'الرئيسية',
      'work-showcase': 'الأعمال',
      credentials: 'الشهادات',
      about: 'نبذة',
      projects: 'المشاريع',
      experience: 'الخبرات',
      services: 'الخدمات',
      contact: 'التواصل',
    },
    common: {
      liveSite: 'الموقع المباشر',
      caseStudy: 'دراسة الحالة',
      readCaseStudy: 'قراءة دراسة الحالة',
      viewWork: 'عرض الأعمال',
      contact: 'تواصل',
      downloadCv: 'تحميل السيرة',
      location: 'الموقع',
      currentFocus: 'التركيز الحالي',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
      menu: 'القائمة',
      languageToggle: 'English',
      previousProject: 'المشروع السابق',
      nextProject: 'المشروع التالي',
      desktop: 'سطح المكتب',
      tablet: 'تابلت',
      mobile: 'جوال',
      viewCertificate: 'عرض الشهادة',
    },
    hero: {
      availability: 'متاح لمشاريع مختارة',
      title: 'مطوّر Full-Stack',
      tags: ['React', 'TypeScript', 'Firebase', 'خدمة العملاء', 'إدارة وتشغيل'],
      shortBio:
        'طالب تقنية معلومات ومطوّر ويب بخبرة تجمع بين البرمجة وخدمة العملاء والمحاسبة والاستقبال وإدخال البيانات.',
      location: 'الرياض والمدينة المنورة، السعودية',
      currentFocus: 'React و TypeScript و Firebase ومواقع الأعمال العملية',
    },
    stats: [
      {
        value: '8',
        label: 'منصات مباشرة',
        description: 'Madan App و Nooha و Queens Salon و Maedin Decor.',
      },
      {
        value: '+10',
        label: 'سنوات خبرة',
        description: 'خدمة عملاء، استقبال، إدخال بيانات، ومحاسبة.',
      },
      {
        value: '3',
        label: 'شهادات بارزة',
        description: 'Microsoft و Interparfums والجامعة العربية المفتوحة.',
      },
      {
        value: '120',
        label: 'ساعة معتمدة',
        description: 'إتمام دورة اللغة الإنجليزية المكثفة في الجامعة العربية المفتوحة.',
      },
    ],
    showcase: {
      eyebrow: 'عرض الأعمال',
      title: 'أربع منصات مباشرة داخل عرض تفاعلي بسيط.',
      description:
        'اختر المشروع والجهاز، وشاهد النسخة الحية مباشرة بدون صور ثابتة أو فيديو داخل هذا التحكم.',
      tabsLabel: 'تبويبات المشاريع',
      deviceControls: 'أجهزة العرض',
    },
    credentials: {
      eyebrow: 'الشهادات',
      title: 'ثلاث شهادات بارزة مع تدريب داعم.',
      description: 'الشهادات الرئيسية تظهر بصريًا أولًا، ثم تظهر الدورات الإضافية بشكل مختصر.',
      additional: 'تدريب إضافي',
      additionalTitle: 'دورات وتطوير مهني',
      training: [
        'وكيل تذاكر طيران - دروب - 2018',
        'سلسلة السكرتير التنفيذي - دروب - 2018',
        'الابتكار في العمل الحكومي - إدراك',
        'إدارة المشاريع - إدراك',
        'الإسعافات الأولية الأساسية - إدراك',
        'ريادة الأعمال - إدراك',
        'من فكرة إلى شركة: مقدمة في ريادة الأعمال - إدراك',
        'إدارة المشاريع كمهارة احترافية - إدراك',
        'المهارات الأساسية للإسعافات الأولية - إدراك',
      ],
    },
    featured: {
      eyebrow: 'المشروع النشط',
      titleSuffix: 'كدراسة حالة نشطة.',
      description: 'المشروع المحدد من الأعلى يظهر هنا كرابط سريع لدراسة الحالة والموقع المباشر.',
    },
    about: {
      eyebrow: 'نبذة',
      title: 'مطور عملي يجمع بين التقنية والخبرة التشغيلية.',
      description:
        'أجمع بين تطوير الواجهات وتجارب المستخدم وبين خلفية عملية في خدمة العملاء، الاستقبال، المحاسبة، وإدخال البيانات. هذا يساعدني على بناء مواقع ومنصات واقعية وسهلة الاستخدام.',
      cards: [
        {
          title: 'هندسة الواجهة',
          text: 'React و TypeScript وواجهات متجاوبة وربط عملي مع Firebase وواجهات الأعمال.',
        },
        {
          title: 'خبرة تشغيلية',
          text: 'خدمة عملاء، استقبال، محاسبة، وإدخال بيانات في بيئات ضيافة وشركات.',
        },
        {
          title: 'السياق',
          text: 'مقيم بين الرياض والمدينة المنورة ومتاح لمشاريع مختارة عن بعد أو محليًا.',
        },
      ],
    },
    experience: {
      eyebrow: 'الخبرات',
      title: 'خبرة تقنية مدعومة بخبرة تشغيلية طويلة.',
      description: 'مسار عملي يشمل تطوير الويب، المحاسبة، الاستقبال، إدخال البيانات، وخدمة العملاء.',
      items: [
        {
          title: 'مطوّر ويب',
          company: 'شركة برمجيات',
          date: '2022 - 2023',
          description:
            'طوّرت مواقع وتطبيقات ويب باستخدام React وHTML وCSS، مع تحسين تجربة المستخدم ومعالجة المشكلات التقنية.',
          technologies: ['React', 'HTML', 'CSS', 'تجربة المستخدم'],
        },
        {
          title: 'محاسب',
          company: 'شركة ورقة للأغذية',
          date: '2020 - 2021',
          description:
            'عملت على مهام محاسبية داخل بيئة شركة أغذية مع تركيز على التنظيم والدقة والدعم التشغيلي.',
          technologies: ['محاسبة', 'إدارة', 'دقة'],
        },
        {
          title: 'استقبال ومحاسبة',
          company: 'فندق رويال إن نزل',
          date: '2017 - 2019',
          description:
            'دعمت أعمال الاستقبال والمحاسبة في الفندق، بين خدمة النزلاء والعمليات اليومية والإدارة المالية.',
          technologies: ['استقبال', 'محاسبة', 'خدمة العملاء'],
        },
        {
          title: 'مدخل بيانات',
          company: 'الخطوط الجوية التركية',
          date: '2014 - 2015',
          description:
            'عملت على مهام إدخال بيانات تتطلب الدقة والسرعة والتعامل المنظم مع معلومات تشغيلية.',
          technologies: ['إدخال بيانات', 'عمليات', 'دقة'],
        },
        {
          title: 'خدمة عملاء',
          company: 'بنده',
          date: '2012 - 2013',
          description:
            'تعاملت مع مسؤوليات خدمة العملاء في بيئة بيع بالتجزئة تتطلب التواصل المباشر وحل المشكلات.',
          technologies: ['خدمة العملاء', 'تواصل', 'تجزئة'],
        },
        {
          title: 'موظف استقبال',
          company: 'فندق منار المدينة',
          date: '2009 - 2011',
          description:
            'أدرت مهام الاستقبال والتواصل مع النزلاء ودعم مكتب الاستقبال في بيئة ضيافة.',
          technologies: ['استقبال', 'ضيافة', 'علاقات النزلاء'],
        },
      ],
    },
    education: {
      eyebrow: 'التعليم',
      title: 'تعلم مستمر وشهادات مرتبطة بالمسار العملي.',
      description: 'تعليم أكاديمي في تقنية المعلومات مع تدريب مهني يدعم العمل التقني والإداري.',
      items: [
        {
          degree: 'بكالوريوس تقنية المعلومات',
          school: 'الجامعة العربية المفتوحة',
          date: 'مستمر - سنة متبقية',
          details: [
            'متابعة الدراسة الجامعية في تقنية المعلومات.',
            'إتمام دورة لغة إنجليزية مكثفة بواقع 120 ساعة معتمدة من الجامعة العربية المفتوحة.',
            'مجالات التركيز تشمل البرمجة وتطوير الويب والمهارات التقنية العملية.',
          ],
        },
        {
          degree: 'دبلوم موارد بشرية',
          school: 'برنامج الموارد البشرية',
          date: '2023',
          details: [
            'بناء أساس في مفاهيم الموارد البشرية وإدارة بيئة العمل.',
            'يدعم خبرات خدمة العملاء والاستقبال والعمليات.',
          ],
        },
        {
          degree: 'درجة تأسيسية في علم المكتبات',
          school: 'جامعة طيبة',
          date: '2015',
          details: [
            'دراسة أساسيات تنظيم المعلومات وعلم المكتبات.',
            'يدعم التعامل المنظم مع البيانات والتوثيق والعمل الإداري.',
          ],
        },
      ],
    },
    services: {
      eyebrow: 'الخدمات',
      title: 'مساعدة مركزة في بناء المواقع والتجارب العملية.',
      description: 'كل خدمة مرتبطة بنتيجة واضحة: موقع مباشر، واجهة أفضل، أو نظام أبسط للعمل.',
      items: {
        'web-apps': {
          title: 'تطبيقات ويب',
          summary:
            'تطبيقات React مركزة مع توجيه واضح ومكوّنات قابلة لإعادة الاستخدام وتدفقات بيانات قابلة للصيانة.',
          deliverables: ['شاشات منتج', 'لوحات تحكم', 'واجهة متجاوبة', 'هيكلة الواجهة'],
        },
        'mobile-apps': {
          title: 'تدفقات الجوال',
          summary:
            'تجارب جوال أولًا لعمليات الإدخال والمراجعة والعمل الميداني مع إدارة حالة عملية.',
          deliverables: ['شاشات جوال', 'نماذج إدخال', 'حالات رفع', 'سلوك مزامنة'],
        },
        systems: {
          title: 'الأنظمة والخلفية',
          summary:
            'تصميم واجهات API ونماذج بيانات وتدفقات مصادقة وقواعد جاهزة للنشر.',
          deliverables: ['عقود API', 'هيكلة قاعدة البيانات', 'تدفق دخول', 'إعداد النشر'],
        },
        'ui-engineering': {
          title: 'هندسة الواجهات',
          summary:
            'أنظمة واجهات تحول الاتجاه البصري إلى مكوّنات موثوقة وقابلة للوصول وجاهزة للإنتاج.',
          deliverables: ['رموز تصميم', 'نظام مكوّنات', 'قواعد حركة', 'مراجعة وصول'],
        },
      },
    },
    faq: {
      eyebrow: 'الأسئلة',
      title: 'إجابات مختصرة قبل بداية المشروع.',
      description: 'مرجع سريع لنوع المشاريع، نطاق العمل، وطريقة التعاون.',
      items: [
        {
          question: 'ما نوع المشاريع التي تعمل عليها؟',
          answer:
            'أركز على تطبيقات الويب، لوحات التحكم، تدفقات الجوال، أنظمة الواجهات، وبناء المنتجات العملية.',
        },
        {
          question: 'هل يمكن البدء من فكرة أو تصميم موجود؟',
          answer:
            'نعم. أستطيع البدء من وصف مختصر، wireframes، ملف Figma، أو كود موجود يحتاج تنظيمًا وتحسينًا.',
        },
        {
          question: 'هل تعمل على الواجهة والخلفية؟',
          answer:
            'نعم. يمكنني تنفيذ الواجهة وربطها مع API والمصادقة وتخزين البيانات وتدفقات النشر.',
        },
        {
          question: 'ماذا تحتاج لتقدير المشروع؟',
          answer:
            'هدف واضح، المستخدمون الأساسيون، التدفقات المطلوبة، الأصول المتوفرة، القيود التقنية، وموعد الإطلاق المستهدف.',
        },
        {
          question: 'هل أنت متاح لتعاون طويل؟',
          answer:
            'نعم، متاح لأعمال طويلة مختارة عندما يكون نطاق المشروع واضحًا واتجاه المنتج مفيدًا وفيه مساحة للجودة.',
        },
      ],
    },
    contactCta: {
      eyebrow: 'التواصل',
      title: 'عندك موقع، منصة، أو فكرة تحتاج تنفيذ واضح؟',
      description: 'أرسل الهدف والمدة وأهم الصفحات أو التدفقات المطلوبة، وسأرد عليك بالخطوة المناسبة.',
      email: 'راسلني',
      call: 'اتصال',
      reviewWork: 'عرض الأعمال',
      cursor: 'Cursor',
    },
    caseStudyPage: {
      back: 'العودة للأعمال',
      demoEyebrow: 'لقطة',
      demoTitle: 'عرض مسجل',
      overviewEyebrow: 'نظرة عامة',
      overviewTitle: 'نظرة على المشروع',
      problemEyebrow: 'التحدي',
      problemTitle: 'المشكلة',
      goalsEyebrow: 'الأهداف',
      goalsTitle: 'ما الذي كان يجب تحقيقه',
      roleEyebrow: 'الدور',
      roleTitle: 'دوري في المشروع',
      stackEyebrow: 'التقنيات',
      stackTitle: 'الأدوات المستخدمة',
      architectureEyebrow: 'البنية',
      architectureTitle: 'بنية النظام',
      featuresEyebrow: 'المزايا',
      featuresTitle: 'أهم المزايا',
      designEyebrow: 'التصميم',
      designTitle: 'مسار التصميم',
      challengesEyebrow: 'التحديات',
      challengesTitle: 'تحديات التطوير',
      solutionsEyebrow: 'الحلول',
      solutionsTitle: 'الحلول',
      galleryEyebrow: 'المعرض',
      galleryTitle: 'معرض المشروع',
      resultsEyebrow: 'النتائج',
      resultsTitle: 'النتائج',
      lessonsEyebrow: 'الدروس',
      lessonsTitle: 'الدروس المستفادة',
      nextProject: 'المشروع التالي',
      openNext: 'فتح دراسة الحالة التالية',
    },
    footer: 'تم البناء باستخدام React و TypeScript.',
    projects: {
      'madan-app': {
        category: 'منصة استثمار عقاري',
        shortDescription:
          'منصة عربية للاستثمار العقاري بتصميم موثوق، واجهة RTL، وتجربة استكشاف مشاريع واضحة.',
        tags: ['React', 'RTL UI', 'Vercel', 'عقار'],
      },
      nooha: {
        category: 'موقع شركة',
        shortDescription:
          'موقع شركة للإعاشة والضيافة يعرض الخدمات والهوية وطرق التواصل بشكل واضح ومتجاوب.',
        tags: ['React', 'ثنائي اللغة', 'موقع شركة', 'Responsive UI'],
      },
      'queens-salon': {
        category: 'تجربة موقع صالون',
        shortDescription:
          'موقع صالون يركز على هوية العلامة، عرض الخدمات، وتجربة تصفح ناعمة على الجوال.',
        tags: ['React', 'Vercel', 'Beauty Brand', 'Responsive UI'],
      },
      'maedin-decor': {
        category: 'موقع تصميم داخلي',
        shortDescription:
          'موقع ديكور وتنفيذ داخلي يعرض الأعمال والخدمات بصورة هادئة ومناسبة للاستفسارات.',
        tags: ['React', 'تصميم داخلي', 'Portfolio Site', 'Vercel'],
      },
    },
    certificates: {
      interparfums: {
        title: 'أخصائي معتمد في علامات Interparfums',
        issuer: 'Interparfums / Creation Alexandre Miya Paris',
        date: 'يوليو 2024',
        summary: 'شهادة حضور وإتمام تدريب Interparfums في مجال العلامات والعطور.',
      },
      'microsoft-excel': {
        title: 'Microsoft Office Specialist - Excel 2019 Associate',
        issuer: 'Microsoft',
        date: '24 فبراير 2026',
        summary: 'شهادة Microsoft Office Specialist في Excel 2019 Associate صالحة لخمس سنوات من تاريخ الإصدار.',
      },
      'arab-open-university': {
        title: 'دورة اللغة الإنجليزية المكثفة - EL097',
        issuer: 'الجامعة العربية المفتوحة',
        date: '12 يناير 2020 - 15 مارس 2020',
        summary: 'شهادة إتمام دورة مكثفة في اللغة الإنجليزية بواقع 120 ساعة معتمدة.',
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      'work-showcase': 'Work',
      credentials: 'Credentials',
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      services: 'Services',
      contact: 'Contact',
    },
    common: {
      liveSite: 'Live Site',
      caseStudy: 'Case Study',
      readCaseStudy: 'Read case study',
      viewWork: 'View Work',
      contact: 'Contact',
      downloadCv: 'Download CV',
      location: 'Location',
      currentFocus: 'Current focus',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      menu: 'Menu',
      languageToggle: 'العربية',
      previousProject: 'Previous project',
      nextProject: 'Next project',
      desktop: 'Desktop',
      tablet: 'Tablet',
      mobile: 'Mobile',
      viewCertificate: 'View certificate',
    },
    hero: {
      availability: 'Open to selected projects',
      title: 'Full-Stack Developer',
      tags: ['React', 'TypeScript', 'Firebase', 'Customer Service', 'Administration'],
      shortBio:
        'IT undergraduate and full-stack developer with experience across web development, customer service, accounting, reception, and data entry.',
      location: 'Riyadh and Al-Madinah, Saudi Arabia',
      currentFocus: 'React, TypeScript, Firebase, and practical business websites',
    },
    stats: [
      { value: '4', label: 'Live Platforms', description: 'Madan App, Nooha, Queens Salon, and Maedin Decor.' },
      { value: '10+', label: 'Years of Experience', description: 'Customer service, reception, data entry, and accounting.' },
      { value: '3', label: 'Featured Certificates', description: 'Microsoft, Interparfums, and Arab Open University.' },
      { value: '120', label: 'AOU Credit Hours', description: 'Completed intensive English language course.' },
    ],
    showcase: {
      eyebrow: 'Work Showcase',
      title: 'Four live platforms inside a clean interactive preview.',
      description: 'Choose the project and device. This area stays live-only with no static preview or video mode.',
      tabsLabel: 'Project showcase tabs',
      deviceControls: 'Device controls',
    },
    credentials: {
      eyebrow: 'Credentials',
      title: 'Three highlighted certificates with supporting training.',
      description: 'The main certificates are presented visually first, then additional training is listed for quick review.',
      additional: 'Additional Training',
      additionalTitle: 'Courses and professional development',
      training: [
        'Airline Ticketing Agent - Droob - 2018',
        'Executive Secretary Series - Droob - 2018',
        'Innovation in Government - Edraak',
        'Project Management - Edraak',
        'Basic First Aid - Edraak',
        'Entrepreneurship - Edraak',
        'From Idea to Company: Introduction to Entrepreneurship - Edraak',
        'Marine Project Management - Edraak',
        'Primary Skills for First Aid - Edraak',
      ],
    },
    featured: {
      eyebrow: 'Featured',
      titleSuffix: 'as the active case study.',
      description: 'The selected platform expands into a detailed project page with problem, role, stack, media, results, and lessons learned.',
    },
    about: {
      eyebrow: 'About',
      title: 'A practical builder with technical and operational experience.',
      description:
        'I combine frontend development and user experience work with a long operational background in customer service, reception, accounting, and data entry.',
      cards: [
        { title: 'Engineering', text: 'React, TypeScript, responsive interfaces, Firebase-backed flows, and business websites.' },
        { title: 'Operations', text: 'Customer service, reception, accounting, and data entry across hospitality and company environments.' },
        { title: 'Context', text: 'Based between Riyadh and Al-Madinah and open to selected local or remote projects.' },
      ],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Technical work backed by operational experience.',
      description: 'A timeline covering web development, accounting, hospitality reception, data entry, and customer service.',
      items: [
        {
          title: 'Web Developer',
          company: 'Software Company',
          date: '2022 - 2023',
          description:
            'Developed websites and web applications using React, HTML, and CSS while improving user experience and resolving technical issues.',
          technologies: ['React', 'HTML', 'CSS', 'User Experience'],
        },
        {
          title: 'Accountant',
          company: 'Waraqa Food Company',
          date: '2020 - 2021',
          description:
            'Handled accounting-related work in a food company environment with attention to organization, accuracy, and operational support.',
          technologies: ['Accounting', 'Administration', 'Accuracy'],
        },
        {
          title: 'Receptionist and Accountant',
          company: 'Royal In Nozl Hotel',
          date: '2017 - 2019',
          description:
            'Supported hotel reception and accounting work, combining guest service, daily operations, and financial administration.',
          technologies: ['Reception', 'Accounting', 'Customer Service'],
        },
        {
          title: 'Data Entry Clerk',
          company: 'Turkish Airlines',
          date: '2014 - 2015',
          description:
            'Worked on data entry tasks requiring accuracy, speed, and careful handling of operational information.',
          technologies: ['Data Entry', 'Operations', 'Accuracy'],
        },
        {
          title: 'Customer Service',
          company: 'Panda',
          date: '2012 - 2013',
          description:
            'Handled customer-facing service responsibilities in a retail environment with direct communication and issue resolution.',
          technologies: ['Customer Service', 'Communication', 'Retail'],
        },
        {
          title: 'Receptionist',
          company: 'Manar Al-Madinah Hotel',
          date: '2009 - 2011',
          description:
            'Managed reception duties, guest communication, and front-desk support in a hospitality environment.',
          technologies: ['Reception', 'Hospitality', 'Guest Relations'],
        },
      ],
    },
    education: {
      eyebrow: 'Education',
      title: 'Continuous learning connected to practical work.',
      description: 'Academic IT study with professional training that supports technical and administrative work.',
      items: [
        {
          degree: "Bachelor's in Information Technology",
          school: 'Arab Open University',
          date: 'Ongoing - 1 year remaining',
          details: [
            'Continuing undergraduate studies in IT.',
            'Completed a 120-credit-hour intensive English language course through Arab Open University.',
            'Focus areas include programming, web development, and practical technology skills.',
          ],
        },
        {
          degree: 'Diploma in Human Resources',
          school: 'Human Resources Program',
          date: '2023',
          details: [
            'Built a foundation in HR concepts and workplace administration.',
            'Complements customer service, reception, and operations experience.',
          ],
        },
        {
          degree: 'Foundation Degree in Library Science',
          school: 'Taibah University',
          date: '2015',
          details: [
            'Studied information organization and library science foundations.',
            'Supports structured data handling, documentation, and administrative work.',
          ],
        },
      ],
    },
    services: {
      eyebrow: 'Services',
      title: 'Focused help across websites and practical interfaces.',
      description: 'Each service is tied to a clear outcome: a live website, cleaner UI, or a simpler workflow.',
      items: {
        'web-apps': {
          title: 'Web Applications',
          summary:
            'Focused React applications with clean routing, reusable components, and maintainable data flows.',
          deliverables: ['Product screens', 'Admin dashboards', 'Responsive UI', 'Frontend architecture'],
        },
        'mobile-apps': {
          title: 'Mobile Workflows',
          summary:
            'Mobile-first flows for capture, review, and field operations with practical state handling.',
          deliverables: ['Mobile screens', 'Form flows', 'Upload states', 'Sync behavior'],
        },
        systems: {
          title: 'Backend and Systems',
          summary:
            'API design, data models, authentication flows, and deployment-ready system foundations.',
          deliverables: ['API contracts', 'Database structure', 'Auth flow', 'Deployment setup'],
        },
        'ui-engineering': {
          title: 'UI Engineering',
          summary:
            'Interface systems that translate visual direction into reliable, accessible, production-ready components.',
          deliverables: ['Design tokens', 'Component systems', 'Motion rules', 'Accessibility pass'],
        },
      },
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Answers before the first call.',
      description: 'A concise reference for project fit, scope, and collaboration details.',
      items: [
        {
          question: 'What kind of projects do you take on?',
          answer:
            'I focus on web applications, admin tools, mobile workflows, interface systems, and practical product builds.',
        },
        {
          question: 'Can you work from an existing idea or design?',
          answer:
            'Yes. I can start from a rough brief, wireframes, a Figma file, or an existing codebase that needs structure and polish.',
        },
        {
          question: 'Do you handle both frontend and backend?',
          answer:
            'Yes. I can own the interface and connect it to APIs, authentication, data storage, and deployment workflows.',
        },
        {
          question: 'What do you need to estimate a project?',
          answer:
            'A clear goal, the primary users, must-have workflows, current assets, technical constraints, and target launch timing.',
        },
        {
          question: 'Are you available for long-term collaboration?',
          answer:
            'Yes. I am open to selected long-term work when the project has a clear scope, useful product direction, and room for quality.',
        },
      ],
    },
    contactCta: {
      eyebrow: 'Contact',
      title: 'Have a website, platform, or idea that needs a clear build?',
      description: 'Send the goal, timeline, and key pages or flows. I will respond with the clearest next step.',
      email: 'Email Me',
      call: 'Call',
      reviewWork: 'Review Work',
      cursor: 'Cursor',
    },
    caseStudyPage: {
      back: 'Back to portfolio',
      demoEyebrow: 'Demo',
      demoTitle: 'Recorded walkthrough',
      overviewEyebrow: 'Overview',
      overviewTitle: 'Project overview',
      problemEyebrow: 'Problem',
      problemTitle: 'The problem',
      goalsEyebrow: 'Goals',
      goalsTitle: 'What the project needed to achieve',
      roleEyebrow: 'Role',
      roleTitle: 'My role',
      stackEyebrow: 'Stack',
      stackTitle: 'Technology stack',
      architectureEyebrow: 'Architecture',
      architectureTitle: 'System architecture',
      featuresEyebrow: 'Features',
      featuresTitle: 'Main features',
      designEyebrow: 'Design',
      designTitle: 'Design process',
      challengesEyebrow: 'Challenges',
      challengesTitle: 'Development challenges',
      solutionsEyebrow: 'Solutions',
      solutionsTitle: 'Solutions',
      galleryEyebrow: 'Gallery',
      galleryTitle: 'Project gallery',
      resultsEyebrow: 'Results',
      resultsTitle: 'Results',
      lessonsEyebrow: 'Lessons',
      lessonsTitle: 'Lessons learned',
      nextProject: 'Next project',
      openNext: 'Open next case study',
    },
    footer: 'Built with React and TypeScript.',
    projects: {
      'madan-app': {
        category: 'Real Estate Platform',
        shortDescription:
          'A polished Arabic real estate investment platform with strong RTL presentation, project discovery, and investor-facing flows.',
        tags: ['React', 'RTL UI', 'Vercel', 'Real Estate'],
      },
      nooha: {
        category: 'Company Website',
        shortDescription:
          'A bilingual company website for catering and hospitality services with service discovery, brand presentation, and direct contact paths.',
        tags: ['React', 'Bilingual', 'Company Site', 'Responsive UI'],
      },
      'queens-salon': {
        category: 'Salon Web Experience',
        shortDescription:
          'A salon web experience focused on brand feel, service discovery, responsive browsing, and a direct path to customer action.',
        tags: ['React', 'Vercel', 'Beauty Brand', 'Responsive UI'],
      },
      'maedin-decor': {
        category: 'Interior Design Website',
        shortDescription:
          'A decor and fit-out website with a portfolio-style presentation for interior work, service credibility, and project inquiry.',
        tags: ['React', 'Interior Design', 'Portfolio Site', 'Vercel'],
      },
    },
    certificates: {
      interparfums: {
        title: 'Certified Specialist in Interparfums Brands',
        issuer: 'Interparfums / Creation Alexandre Miya Paris',
        date: 'July 2024',
        summary: 'Certificate of attendance recognizing successful completion of the Interparfums training program.',
      },
      'microsoft-excel': {
        title: 'Microsoft Office Specialist - Excel 2019 Associate',
        issuer: 'Microsoft',
        date: 'February 24, 2026',
        summary: 'Microsoft Office Specialist certification for Excel 2019 Associate, valid for five years from issue date.',
      },
      'arab-open-university': {
        title: 'Intensive English Language Course - EL097',
        issuer: 'Arab Open University',
        date: 'January 12, 2020 - March 15, 2020',
        summary: 'Certificate of completion for a 120-credit-hour intensive English language course.',
      },
    },
  },
}

interface LanguageContextValue {
  language: Language
  dir: 'rtl' | 'ltr'
  content: LanguageContent
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
  projectText: (project: Project) => ProjectText
  certificateText: (certificate: Certificate) => CertificateText
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() =>
    window.localStorage.getItem('portfolio-language') === 'en' ? 'en' : 'ar',
  )
  const dir = language === 'ar' ? 'rtl' : 'ltr'
  const activeContent = content[language]

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage)
    window.localStorage.setItem('portfolio-language', nextLanguage)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = dir
  }, [dir, language])

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      dir,
      content: activeContent,
      setLanguage,
      toggleLanguage: () => setLanguage(language === 'ar' ? 'en' : 'ar'),
      projectText: (project) => activeContent.projects[project.slug] ?? {
        category: project.category,
        shortDescription: project.shortDescription,
        tags: project.tags,
      },
      certificateText: (certificate) => activeContent.certificates[certificate.id] ?? {
        title: certificate.title,
        issuer: certificate.issuer,
        date: certificate.date,
        summary: certificate.summary,
      },
    }),
    [activeContent, dir, language, setLanguage],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const value = useContext(LanguageContext)

  if (!value) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return value
}
