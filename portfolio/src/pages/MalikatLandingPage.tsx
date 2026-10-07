import { type FormEvent, useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Boxes,
  Building2,
  CalendarCheck,
  Check,
  Clock,
  FileText,
  Fingerprint,
  Gift,
  Headphones,
  Layers,
  Lock,
  Menu,
  MonitorSmartphone,
  Package,
  Receipt,
  ShieldCheck,
  ShoppingCart,
  Sparkles,
  Store,
  Users,
  Wallet,
  Workflow,
  X,
} from 'lucide-react'
import './MalikatLandingPage.css'

const whatsappNumber = '966546535404'

const platformStats = [
  { value: 'نظام واحد', label: 'يربط العميلة والتشغيل والإدارة والموارد البشرية والمخزون' },
  { value: '24/7', label: 'واجهة رقمية وحجز إلكتروني متاح للعميلات' },
  { value: 'صلاحيات دقيقة', label: 'كل مستخدم يرى وينفذ ما يناسب دوره فقط' },
  { value: 'قابل للتخصيص', label: 'الوحدات والسياسات تُهيأ حسب طريقة عمل المنشأة' },
]

const painPoints = [
  {
    title: 'الحجوزات موزعة بين الرسائل والذاكرة',
    description: 'ينتقل الحجز إلى جدول مركزي مرتبط بالعميلة والخدمة والموظفة والسعر وحالة التنفيذ بدل الاعتماد على المحادثات المتفرقة.',
  },
  {
    title: 'ملفات الموظفات والدوام والرواتب منفصلة',
    description: 'يجمع النظام الملف الوظيفي والشفتات والحضور والإجازات والطلبات والرواتب في دورة موارد بشرية واحدة.',
  },
  {
    title: 'المخزون رقم فقط بلا تفسير للحركة',
    description: 'يتحول المخزون إلى دورة تشغيل: مواد وأرصدة واستهلاك خدمات وصرف موظفات وهدر وجرد وموردون وأوامر شراء.',
  },
  {
    title: 'صاحبة المنشأة تحتاج تسأل حتى تعرف ماذا حدث',
    description: 'التقارير وسجل العمليات والصلاحيات تجعل النظام نفسه مرجعًا للتشغيل بدل الاعتماد على نقل المعلومة شفهيًا.',
  },
]

const featureGroups = [
  {
    icon: CalendarCheck,
    title: 'الحجوزات والاستقبال',
    description: 'إدارة الحجز من لحظة تسجيل العميلة حتى إغلاق العملية، مع الخدمات والموظفات والأوقات والأسعار وحالة كل حجز.',
    items: ['جدول حجوزات مركزي', 'منع التعارض وتنظيم المواعيد', 'تعديل سعر البند بصلاحية وسبب واضح'],
  },
  {
    icon: Users,
    title: 'إدارة العميلات CRM',
    description: 'ملف موحد لكل عميلة بدل أن تكون مجرد رقم في الواتساب، مع تاريخ تعاملها مع المنشأة.',
    items: ['الحجوزات السابقة والقادمة', 'الخدمات وآخر زيارة', 'بيانات موحدة تقلل التكرار والضياع'],
  },
  {
    icon: Store,
    title: 'الخدمات والأسعار والعروض',
    description: 'كتالوج خدمات منظم يربط الخدمة بسعرها ومدتها والموظفات المؤهلات لها، مع أسعار عروض محددة بفترة زمنية.',
    items: ['أقسام وخدمات مرنة', 'ربط الخدمة بالموظفات', 'سعر عرض بتاريخ بداية ونهاية دون تغيير السعر الأساسي'],
  },
  {
    icon: Fingerprint,
    title: 'الموارد البشرية والحضور',
    description: 'منظومة HR داخل نفس نظام التشغيل تشمل ملف الموظفة وجدولها وحضورها وإجازاتها وطلباتها ومستنداتها.',
    items: ['شفتات وحضور وانصراف', 'تأخير وخروج مبكر ونقص ساعات وغياب', 'إجازات وطلبات وملفات وظيفية'],
  },
  {
    icon: Wallet,
    title: 'الرواتب Payroll',
    description: 'دورة رواتب تربط البيانات الوظيفية والحضور مع المكونات المالية بدل بناء الراتب يدويًا كل شهر.',
    items: ['بدلات ومكافآت وعمولات وسلف وتسويات', 'تأثير الحضور والإجازات حسب السياسة', 'مراجعة واعتماد وسجل للفترة'],
  },
  {
    icon: Boxes,
    title: 'المخزون والاستهلاك',
    description: 'مركز رقابة للمواد المستخدمة داخل الخدمات، مع رصيد حقيقي وحركات موثقة بدل تعديل الكمية مباشرة بلا سبب.',
    items: ['أرصدة حسب الموقع وحد إعادة الطلب', 'وصفات استهلاك مرتبطة بالخدمات', 'صرف موظفات وهدر وجرد وسجل حركات'],
  },
  {
    icon: ShoppingCart,
    title: 'الموردون والمشتريات',
    description: 'تنظيم دورة التوريد من المورد وأمر الشراء حتى استلام الكميات ودخولها للمخزون.',
    items: ['سجل موردين', 'أوامر شراء', 'استلام مشتريات مرتبط بالمخزون'],
  },
  {
    icon: Receipt,
    title: 'الإيرادات والمصروفات',
    description: 'متابعة مالية مرتبطة بالتشغيل حتى تعرف الإدارة مصدر المبلغ بدل الاعتماد على إجمالي غير مفسر.',
    items: ['إيرادات مرتبطة بالحجوزات', 'مصروفات منظمة', 'تدقيق يومي وسجل مالي'],
  },
  {
    icon: BarChart3,
    title: 'التقارير والأداء',
    description: 'تحويل البيانات اليومية إلى مؤشرات تساعد الإدارة على قراءة الأداء واتخاذ القرار.',
    items: ['تقارير تشغيلية ومالية', 'أداء الموظفات والأهداف', 'رؤية أوضح للخدمات والعمليات'],
  },
  {
    icon: Lock,
    title: 'الحسابات والصلاحيات',
    description: 'فصل واضح بين المالكة والإدارة والاستقبال والموارد البشرية والموظفة، مع صلاحيات حسب المسؤولية.',
    items: ['أدوار وصلاحيات تفصيلية', 'ربط الحساب بالموظفة', 'سجل للتعديلات والعمليات الحساسة'],
  },
  {
    icon: MonitorSmartphone,
    title: 'تجربة متعددة الأجهزة',
    description: 'واجهة تشغيل عملية على الكمبيوتر والآيباد والجوال، مع تجربة منفصلة للعميلة والإدارة والموظفة.',
    items: ['واجهة عميلة للحجز والمتابعة', 'لوحة إدارة متجاوبة', 'بوابة خاصة للموظفات'],
  },
  {
    icon: Layers,
    title: 'وحدات اختيارية',
    description: 'لا نفرض على المنشأة كل الوحدات. يتم تفعيل ما يناسب نموذج العمل وترك ما لا تحتاجه.',
    items: ['Cashback / Loyalty عند الرغبة فقط', 'باقات وكوبونات حسب السياسة', 'وحدات إضافية حسب احتياج التشغيل'],
  },
]

const hrDetails = [
  {
    title: 'ملف وظيفي موحد',
    description: 'بيانات الموظفة وحالتها الوظيفية وتاريخ البداية والخدمات المرتبطة بها والحساب والصلاحيات في ملف واحد.',
  },
  {
    title: 'الشفتات والحضور',
    description: 'جداول عمل فعلية مع حضور وانصراف، ومعالجة التأخير والخروج المبكر ونقص الساعات والغياب وفق سياسة المنشأة.',
  },
  {
    title: 'الإجازات والطلبات',
    description: 'طلبات الموظفات والإجازات تمر بمراجعة واعتماد حسب الصلاحيات بدل ضياعها بين الرسائل والمحادثات.',
  },
  {
    title: 'الملفات والمستندات',
    description: 'حفظ وتنظيم المستندات والملفات الإدارية المرتبطة بالموظفة لتكون مرجعًا للإدارة عند الحاجة.',
  },
  {
    title: 'بوابة الموظفة',
    description: 'لكل موظفة تجربة منفصلة تشاهد من خلالها معلوماتها ودوامها وطلباتها وإشعاراتها وما تسمح به صلاحيتها.',
  },
  {
    title: 'رواتب مترابطة مع الواقع',
    description: 'الراتب يمكن أن يجمع الأساسي والبدلات والمكافآت والعمولات والسلف والخصومات والتسويات وتأثير الحضور والإجازات.',
  },
]

const inventoryDetails = [
  {
    title: 'تعريف المواد بدقة',
    description: 'اسم المادة، الوحدة، SKU، حد إعادة الطلب، الملاحظات، الحالة والرصيد الافتتاحي مع أرصدة حسب الموقع.',
  },
  {
    title: 'تنبيه المواد المنخفضة',
    description: 'تحديد حد إعادة الطلب لكل مادة حتى تعرف الإدارة ما يحتاج شراءً قبل أن ينتهي أثناء تقديم الخدمة.',
  },
  {
    title: 'وصفة استهلاك لكل خدمة',
    description: 'يمكن ربط الخدمة بمادة محددة أو فئة بدائل وتحديد الكمية القياسية المستخدمة في تنفيذ الخدمة.',
  },
  {
    title: 'لا خصم بمجرد إنشاء الحجز',
    description: 'إنشاء الحجز لا يعني استهلاك المادة؛ الخصم يتم عند تأكيد التنفيذ والاستهلاك الفعلي لتبقى الأرقام أقرب للواقع.',
  },
  {
    title: 'صرف وهدر وجرد',
    description: 'تسجيل صرف المواد للموظفات والهدر وفروقات الجرد بدل تغيير الرصيد بدون تفسير أو أثر تشغيلي.',
  },
  {
    title: 'الموردون وأوامر الشراء',
    description: 'إدارة الموردين وأوامر الشراء واستلام الكميات وربطها بحركة المخزون من دخول المادة حتى استخدامها.',
  },
]

const optionalModules = [
  {
    icon: Gift,
    title: 'Cashback / Loyalty',
    description: 'ميزة اختيارية بالكامل. يمكن تفعيلها بسياسة يحددها الصالون لزيادة عودة العميلة، أو تركها غير مفعلة إذا لم تناسب نموذج العمل.',
  },
  {
    icon: Package,
    title: 'الباقات والجلسات',
    description: 'يمكن تفعيل الباقات أو الجلسات والخدمات المركبة عندما تكون جزءًا من طريقة البيع في المنشأة.',
  },
  {
    icon: Workflow,
    title: 'تخصيص سير العمل',
    description: 'إذا كان لدى المنشأة Workflow مختلف في الاستقبال أو الإدارة أو المخزون، تتم دراسته وتهيئة المنتج بما يخدم التشغيل الصحيح.',
  },
]

const journeySteps = [
  {
    number: '01',
    title: 'نفهم طريقة العمل',
    description: 'نراجع طريقة الحجز والاستقبال والموظفات والدوام والمخزون والعمليات المالية بدل تركيب إعدادات عامة لا تناسب المنشأة.',
  },
  {
    number: '02',
    title: 'نجهز بيئة المنشأة',
    description: 'إضافة الهوية والخدمات والأسعار والموظفات والصلاحيات والجداول والإعدادات المطلوبة للتشغيل.',
  },
  {
    number: '03',
    title: 'نطلق مع الفريق',
    description: 'تدريب الإدارة والاستقبال والموظفات على الجزء الخاص بكل دور حتى يكون الانتقال للنظام واضحًا وعمليًا.',
  },
  {
    number: '04',
    title: 'نراجع ونطور',
    description: 'لأن المنتج يتم تطويره مباشرة، يمكن دراسة الاحتياجات الفعلية التي تظهر أثناء التشغيل بدل إجبار الفريق على حلول غير مناسبة.',
  },
]

const plans = [
  {
    name: 'الأساسي',
    eyebrow: 'لبداية منظمة',
    description: 'الأساس المطلوب للحجوزات والخدمات والعميلات والتشغيل اليومي.',
    features: [
      'الحجز وإدارة الاستقبال',
      'الخدمات والأسعار',
      'ملفات العميلات CRM',
      'لوحة تشغيل اليوم',
      'صلاحيات أساسية',
      'تهيئة وإطلاق',
    ],
  },
  {
    name: 'التشغيل',
    eyebrow: 'لإدارة أوسع',
    description: 'توسعة النظام ليشمل الإدارة المالية والتقارير والوحدات التشغيلية المطلوبة.',
    popular: true,
    features: [
      'كل مميزات الأساسي',
      'العروض والأسعار الموسمية',
      'الإيرادات والمصروفات',
      'تقارير وتدقيق',
      'صلاحيات متقدمة',
      'وحدات اختيارية حسب الحاجة',
    ],
  },
  {
    name: 'المتكامل',
    eyebrow: 'للـ HR والمخزون',
    description: 'تشغيل أعمق يربط الموظفات والرواتب والمخزون مع العمليات اليومية للصالون.',
    features: [
      'كل مميزات التشغيل',
      'HR وبوابة الموظفات',
      'الحضور والشفتات والإجازات',
      'الرواتب Payroll',
      'المخزون والاستهلاك',
      'الموردون والمشتريات',
    ],
  },
  {
    name: 'المؤسسات',
    eyebrow: 'للتوسع والفروع',
    description: 'نطاق مخصص للمنشآت ذات الفروع أو العمليات الأكثر تعقيدًا.',
    features: [
      'تهيئة للفروع المتعددة',
      'سياسات وصلاحيات مخصصة',
      'تقارير ونماذج تشغيل خاصة',
      'تكاملات أو وحدات إضافية حسب النطاق',
      'أولوية في الدعم والتطوير',
      'خطة انتقال وتدريب للفريق',
    ],
  },
]

export function MalikatLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('التشغيل')

  useEffect(() => {
    const previousTitle = document.title
    const previousDirection = document.documentElement.dir
    const previousLanguage = document.documentElement.lang

    document.title = 'MIHVARA Salon | نظام إدارة وتشغيل الصالونات'
    document.documentElement.dir = 'rtl'
    document.documentElement.lang = 'ar'
    document.body.classList.add('malikat-landing-open')

    return () => {
      document.title = previousTitle
      document.documentElement.dir = previousDirection
      document.documentElement.lang = previousLanguage
      document.body.classList.remove('malikat-landing-open')
    }
  }, [])

  const selectPlan = (planName: string) => {
    setSelectedPlan(planName)
    window.requestAnimationFrame(() => {
      document.getElementById('request-demo')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  const submitRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const salon = String(formData.get('salon') ?? '').trim()
    const city = String(formData.get('city') ?? '').trim()
    const branches = String(formData.get('branches') ?? '').trim()
    const phone = String(formData.get('phone') ?? '').trim()

    const message = [
      'السلام عليكم، أرغب في معرفة تفاصيل MIHVARA Salon.',
      `الاسم: ${name}`,
      `اسم الصالون / المشغل: ${salon}`,
      `المدينة: ${city}`,
      `عدد الفروع: ${branches}`,
      `رقم التواصل: ${phone}`,
      `النطاق المهتم به: ${selectedPlan}`,
    ].join('\n')

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="malikat-page" dir="rtl">
      <header className="malikat-header">
        <div className="malikat-container malikat-header__inner">
          <a href="#top" className="malikat-brand" aria-label="MIHVARA Salon - الصفحة الرئيسية">
            <span className="malikat-brand__mark"><Layers aria-hidden="true" size={24} /></span>
            <span>
              <strong>MIHVARA Salon</strong>
              <small>منتج من منظومة MIHVARA</small>
            </span>
          </a>

          <nav className={`malikat-nav ${menuOpen ? 'is-open' : ''}`} aria-label="التنقل الرئيسي">
            <a href="#features" onClick={() => setMenuOpen(false)}>المميزات</a>
            <a href="#hr" onClick={() => setMenuOpen(false)}>الموارد البشرية</a>
            <a href="#inventory" onClick={() => setMenuOpen(false)}>المخزون</a>
            <a href="#packages" onClick={() => setMenuOpen(false)}>النطاقات</a>
            <a href="#request-demo" onClick={() => setMenuOpen(false)}>اطلب عرضًا</a>
            <a href="/" className="malikat-nav__portfolio" onClick={() => setMenuOpen(false)}>
              عن MIHVARA ونواف <ArrowLeft aria-hidden="true" size={16} />
            </a>
          </nav>

          <a href="#request-demo" className="malikat-button malikat-button--small malikat-header__cta">
            اطلب عرضًا تجريبيًا
          </a>

          <button
            type="button"
            className="malikat-menu-button"
            aria-label={menuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </div>
      </header>

      <main id="top">
        <section className="malikat-hero">
          <div className="malikat-hero__glow" aria-hidden="true" />
          <div className="malikat-container malikat-hero__grid">
            <div className="malikat-hero__content">
              <div className="malikat-eyebrow">
                <Sparkles aria-hidden="true" size={17} />
                منتج تقني لإدارة وتشغيل الصالونات والمشاغل
              </div>
              <h1>
                لا تديري الصالون من عدة أماكن.
                <span>اجمعي التشغيل في نظام واحد.</span>
              </h1>
              <p>
                <strong>MIHVARA Salon</strong> هو أحد منتجات منظومة MIHVARA، ومصمم ليربط الحجز والعميلة والخدمة والموظفة
                والـHR والرواتب والمخزون والإيرادات والمصروفات والتقارير في بيئة تشغيل واحدة قابلة للتخصيص.
              </p>

              <div className="malikat-hero__actions">
                <a href="#request-demo" className="malikat-button malikat-button--primary">
                  اطلب عرضًا للنظام
                  <ArrowUpRight aria-hidden="true" size={18} />
                </a>
                <a href="#features" className="malikat-button malikat-button--ghost">
                  استعرض التفاصيل
                </a>
              </div>

              <div className="malikat-trust-row">
                <span><ShieldCheck aria-hidden="true" size={17} /> صلاحيات وأدوار منظمة</span>
                <span><MonitorSmartphone aria-hidden="true" size={17} /> جوال وآيباد وكمبيوتر</span>
                <span><Headphones aria-hidden="true" size={17} /> تهيئة وتدريب عند الإطلاق</span>
              </div>
            </div>

            <div className="malikat-hero__visual" aria-label="معاينة تطبيق فعلي لـ MIHVARA Salon">
              <div className="malikat-browser">
                <div className="malikat-browser__bar">
                  <span className="malikat-browser__dots"><i /><i /><i /></span>
                  <span className="malikat-browser__address">MIHVARA Salon / Dashboard</span>
                  <span className="malikat-browser__secure"><Lock aria-hidden="true" size={13} /></span>
                </div>
                <img src="/media/queens-salon-desktop.png" alt="مثال من تطبيق MIHVARA Salon في صالون ملكات" />
              </div>

              <div className="malikat-floating-card malikat-floating-card--bookings">
                <span className="malikat-floating-card__icon"><CalendarCheck aria-hidden="true" size={19} /></span>
                <span><small>تشغيل اليوم</small><strong>الحجوزات والخدمات تحت السيطرة</strong></span>
              </div>

              <div className="malikat-floating-card malikat-floating-card--reports">
                <span className="malikat-floating-card__icon"><BarChart3 aria-hidden="true" size={19} /></span>
                <span><small>قرار أوضح</small><strong>تقارير مبنية على التشغيل الفعلي</strong></span>
              </div>
            </div>
          </div>

          <div className="malikat-container malikat-stats">
            {platformStats.map((stat) => (
              <article key={stat.value}>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="malikat-problem-section">
          <div className="malikat-container">
            <div className="malikat-section-heading malikat-section-heading--center">
              <span>الفكرة الأساسية</span>
              <h2>MIHVARA هي المنظومة.<br />MIHVARA Salon هو منتج الصالونات. وملكات عميل فعلي.</h2>
              <p>
                «ملكات» ليس اسم البرنامج. هو صالون يستخدم النظام فعليًا. المنتج مصمم ليتم تجهيز بيئة مستقلة لكل صالون
                بهويته وخدماته وموظفاته وسياساته، مع تطوير مستمر من نفس الفريق الذي يبني المنتج.
              </p>
            </div>

            <div className="malikat-pain-grid">
              <article>
                <span className="malikat-pain-grid__number">01</span>
                <h3>MIHVARA</h3>
                <p>المظلة التقنية الأوسع التي نبني تحتها منتجات تشغيل وإدارة لقطاعات مختلفة.</p>
              </article>
              <article>
                <span className="malikat-pain-grid__number">02</span>
                <h3>MIHVARA Salon</h3>
                <p>المنتج المتخصص في إدارة وتشغيل الصالونات والمشاغل وربط العمليات اليومية في نظام واحد.</p>
              </article>
              <article>
                <span className="malikat-pain-grid__number">03</span>
                <h3>صالون ملكات</h3>
                <p>أحد التطبيقات التشغيلية الفعلية للمنتج، وتظهر بعض شاشاته في هذه الصفحة كمثال واقعي.</p>
              </article>
              <article>
                <span className="malikat-pain-grid__number">04</span>
                <h3>صالونك</h3>
                <p>يحصل على بيئته الخاصة وهويته وخدماته وموظفاته وصلاحياته وإعداداته، وليس نسخة باسم ملكات.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="malikat-problem-section">
          <div className="malikat-container">
            <div className="malikat-section-heading malikat-section-heading--center">
              <span>لماذا النظام؟</span>
              <h2>المشكلة ليست نقص البرامج.<br />المشكلة أن التشغيل متفرق.</h2>
              <p>كلما كانت البيانات موزعة بين واتساب ودفاتر وExcel وذاكرة الموظفات، زادت الأخطاء وصعبت الرقابة والتوسع.</p>
            </div>

            <div className="malikat-pain-grid">
              {painPoints.map((point, index) => (
                <article key={point.title}>
                  <span className="malikat-pain-grid__number">{String(index + 1).padStart(2, '0')}</span>
                  <h3>{point.title}</h3>
                  <p>{point.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="malikat-features-section">
          <div className="malikat-container">
            <div className="malikat-section-heading">
              <span>منظومة تشغيل متكاملة</span>
              <h2>من الحجز إلى الإدارة والـHR والمخزون.</h2>
              <p>الوحدات تُهيأ حسب احتياج المنشأة. وجود ميزة في المنتج لا يعني أنها مفروضة على كل صالون.</p>
            </div>

            <div className="malikat-feature-grid">
              {featureGroups.map((feature) => {
                const Icon = feature.icon
                return (
                  <article key={feature.title} className="malikat-feature-card">
                    <div className="malikat-feature-card__icon"><Icon aria-hidden="true" size={23} /></div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                    <ul>
                      {feature.items.map((item) => (
                        <li key={item}><Check aria-hidden="true" size={15} /> {item}</li>
                      ))}
                    </ul>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="hr" className="malikat-features-section">
          <div className="malikat-container">
            <div className="malikat-section-heading">
              <span>HR داخل نفس نظام الصالون</span>
              <h2>الموظفة ليست اسمًا في جدول الحجوزات فقط.</h2>
              <p>
                MIHVARA Salon يتعامل مع الموظفة كملف تشغيلي وإداري متكامل؛ من الشفت والحضور إلى الإجازات والطلبات
                والمستندات والرواتب، مع فصل صلاحيات الإدارة عن بوابة الموظفة.
              </p>
            </div>

            <div className="malikat-feature-grid">
              {hrDetails.map((item) => (
                <article key={item.title} className="malikat-feature-card">
                  <div className="malikat-feature-card__icon"><Users aria-hidden="true" size={23} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="inventory" className="malikat-features-section">
          <div className="malikat-container">
            <div className="malikat-section-heading">
              <span>مركز رقابة المخزون</span>
              <h2>نعرف كم بقي، ولماذا نقص، وأين استُخدم.</h2>
              <p>
                المخزون مرتبط بالتشغيل الحقيقي: المواد والمواقع وحد إعادة الطلب ووصفات استهلاك الخدمات والصرف والهدر والجرد
                والموردون وأوامر الشراء، مع سجل حركة بدل التعديل الصامت للأرقام.
              </p>
            </div>

            <div className="malikat-feature-grid">
              {inventoryDetails.map((item) => (
                <article key={item.title} className="malikat-feature-card">
                  <div className="malikat-feature-card__icon"><Boxes aria-hidden="true" size={23} /></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="malikat-showcase-section">
          <div className="malikat-container malikat-showcase-grid">
            <div className="malikat-showcase-copy">
              <span className="malikat-section-label">تطبيق فعلي، وليس Mockup فقط</span>
              <h2>صالون ملكات يستخدم المنتج كبيئة تشغيل حقيقية.</h2>
              <p>
                بعض الصور هنا من التطبيق الفعلي للنظام في صالون ملكات. هذه التجربة التشغيلية هي التي تكشف المشاكل الحقيقية
                في الاستقبال والحجوزات والأسعار والموظفات والدوام والمخزون، وتدفع تطوير المنتج على أساس استخدام يومي حقيقي.
              </p>
              <div className="malikat-showcase-points">
                <span><Workflow aria-hidden="true" size={19} /> تدفق موحد من الحجز حتى إغلاق العملية</span>
                <span><MonitorSmartphone aria-hidden="true" size={19} /> تجربة متجاوبة على الأجهزة المستخدمة داخل الصالون</span>
                <span><ShieldCheck aria-hidden="true" size={19} /> بيانات وصلاحيات منفصلة لكل دور</span>
              </div>
            </div>

            <div className="malikat-device-stage">
              <div className="malikat-device-stage__tablet">
                <img src="/media/queens-salon-tablet.png" alt="تطبيق MIHVARA Salon في بيئة صالون ملكات على الآيباد" loading="lazy" />
              </div>
              <div className="malikat-device-stage__phone">
                <span />
                <img src="/media/queens-salon-mobile.png" alt="تطبيق MIHVARA Salon في بيئة صالون ملكات على الجوال" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="malikat-features-section">
          <div className="malikat-container">
            <div className="malikat-section-heading">
              <span>اختياري، وليس إجباريًا</span>
              <h2>النظام يتكيف مع نموذج عمل الصالون.</h2>
              <p>لا نربط الاشتراك بسياسة تسويقية أو تشغيلية لا تريدها المنشأة. الوحدات الإضافية تُفعّل فقط عند الحاجة.</p>
            </div>

            <div className="malikat-feature-grid">
              {optionalModules.map((module) => {
                const Icon = module.icon
                return (
                  <article key={module.title} className="malikat-feature-card">
                    <div className="malikat-feature-card__icon"><Icon aria-hidden="true" size={23} /></div>
                    <h3>{module.title}</h3>
                    <p>{module.description}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="how-it-works" className="malikat-journey-section">
          <div className="malikat-container">
            <div className="malikat-section-heading malikat-section-heading--center">
              <span>الإطلاق مع الصالون</span>
              <h2>لا تحصلين على رابط وتُتركين لتجهزيه بنفسك.</h2>
              <p>نبدأ بفهم التشغيل ثم تهيئة النظام وتدريب الفريق، وبعدها نراجع ما يظهر من احتياجات فعلية.</p>
            </div>

            <div className="malikat-journey-grid">
              {journeySteps.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="malikat-packages-section">
          <div className="malikat-container">
            <div className="malikat-section-heading malikat-section-heading--center">
              <span>نطاقات مرنة</span>
              <h2>ابدئي بما تحتاجينه فعليًا، ثم توسعي.</h2>
              <p>التسعير النهائي يعتمد على عدد الفروع والموظفات والوحدات المطلوبة ومستوى التهيئة والتخصيص والدعم.</p>
            </div>

            <div className="malikat-plans-grid">
              {plans.map((plan) => (
                <article key={plan.name} className={`malikat-plan-card ${plan.popular ? 'is-popular' : ''}`}>
                  {plan.popular ? <div className="malikat-plan-card__badge">مناسب لمعظم الصالونات</div> : null}
                  <div className="malikat-plan-card__top">
                    <span>{plan.eyebrow}</span>
                    <h3>{plan.name}</h3>
                    <p>{plan.description}</p>
                  </div>
                  <div className="malikat-plan-card__price">
                    <strong>تسعير مخصص</strong>
                    <small>بحسب حجم ونطاق التشغيل</small>
                  </div>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}><Check aria-hidden="true" size={16} /> {feature}</li>
                    ))}
                  </ul>
                  <button type="button" onClick={() => selectPlan(plan.name)}>
                    اطلب تفاصيل النطاق
                    <ArrowUpRight aria-hidden="true" size={17} />
                  </button>
                </article>
              ))}
            </div>

            <div className="malikat-package-note">
              <ShieldCheck aria-hidden="true" size={22} />
              <div>
                <strong>لا يتم فرض كل الوحدات على كل منشأة.</strong>
                <p>نراجع طريقة العمل أولًا، ثم نحدد الوحدات والإعدادات المناسبة. الـCashback والولاء مثال واضح على وحدة اختيارية يمكن تفعيلها أو تركها.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="malikat-value-section">
          <div className="malikat-container malikat-value-grid">
            <div>
              <span className="malikat-section-label">قيمة تشغيلية للإدارة</span>
              <h2>الهدف أن يصبح النظام هو المرجع، بدل أن تسألي كل مرة: ماذا حدث؟</h2>
            </div>
            <div className="malikat-value-list">
              <article><Clock aria-hidden="true" size={21} /><span><strong>وقت أقل في المتابعة اليدوية</strong><small>تقليل التنقل بين واتساب والجداول والدفاتر والسجلات المنفصلة.</small></span></article>
              <article><BarChart3 aria-hidden="true" size={21} /><span><strong>قرار مبني على بيانات</strong><small>معرفة التشغيل والإيرادات والمصروفات والأداء من مصدر واحد.</small></span></article>
              <article><Building2 aria-hidden="true" size={21} /><span><strong>جاهزية أعلى للتوسع</strong><small>توحيد الإجراءات قبل زيادة الفريق أو إضافة فروع جديدة.</small></span></article>
              <article><ShieldCheck aria-hidden="true" size={21} /><span><strong>حوكمة ومساءلة أوضح</strong><small>صلاحيات وسجل عمليات بدل التعديل غير الموثق أو الاعتماد على الذاكرة.</small></span></article>
            </div>
          </div>
        </section>

        <section id="request-demo" className="malikat-request-section">
          <div className="malikat-container malikat-request-grid">
            <div className="malikat-request-copy">
              <span className="malikat-section-label">الخطوة التالية</span>
              <h2>شاهدي النظام عمليًا على سيناريو صالون حقيقي.</h2>
              <p>
                بدل شرح طويل بالرسائل، نعرض رحلة حقيقية: حجز عميلة، اختيار الخدمة والموظفة، متابعة العملية، ثم الإدارة والـHR
                والرواتب والمخزون والتقارير. بعدها نحدد هل المنتج مناسب للصالون وما النطاق المطلوب.
              </p>

              <div className="malikat-request-summary">
                <span><FileText aria-hidden="true" size={19} /> تحليل احتياج الصالون</span>
                <span><Package aria-hidden="true" size={19} /> تحديد الوحدات المناسبة</span>
                <span><Headphones aria-hidden="true" size={19} /> عرض مباشر وخطة تهيئة</span>
              </div>
            </div>

            <form className="malikat-request-form" onSubmit={submitRequest}>
              <div className="malikat-form-row">
                <label>
                  <span>الاسم</span>
                  <input name="name" type="text" placeholder="اكتب اسمك" required />
                </label>
                <label>
                  <span>اسم الصالون / المشغل</span>
                  <input name="salon" type="text" placeholder="اسم النشاط" required />
                </label>
              </div>
              <div className="malikat-form-row">
                <label>
                  <span>المدينة</span>
                  <input name="city" type="text" placeholder="مثال: المدينة المنورة" required />
                </label>
                <label>
                  <span>عدد الفروع</span>
                  <select name="branches" defaultValue="1">
                    <option value="1">فرع واحد</option>
                    <option value="2">فرعان</option>
                    <option value="3-5">من 3 إلى 5 فروع</option>
                    <option value="6+">6 فروع أو أكثر</option>
                  </select>
                </label>
              </div>
              <label>
                <span>رقم التواصل</span>
                <input name="phone" type="tel" inputMode="tel" placeholder="05xxxxxxxx" required />
              </label>
              <label>
                <span>النطاق المهتم به</span>
                <select value={selectedPlan} onChange={(event) => setSelectedPlan(event.target.value)}>
                  {plans.map((plan) => <option key={plan.name} value={plan.name}>{plan.name}</option>)}
                </select>
              </label>
              <button type="submit" className="malikat-button malikat-button--primary malikat-request-form__submit">
                إرسال الطلب عبر واتساب
                <ArrowUpRight aria-hidden="true" size={18} />
              </button>
              <small>لن يتم تخزين البيانات في الموقع؛ ستُستخدم فقط لإنشاء رسالة واتساب جاهزة.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="malikat-footer">
        <div className="malikat-container malikat-footer__inner">
          <div className="malikat-brand">
            <span className="malikat-brand__mark"><Layers aria-hidden="true" size={22} /></span>
            <span><strong>MIHVARA Salon</strong><small>منتج من منظومة MIHVARA</small></span>
          </div>
          <p>تطوير وإدارة نواف أحمد العليان</p>
          <div className="malikat-footer__links">
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">واتساب</a>
            <a href="mailto:nawafaaa0@gmail.com">البريد الإلكتروني</a>
            <a href="/">عن المطور والمنظومة</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
