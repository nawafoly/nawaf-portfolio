import { type FormEvent, useEffect, useState } from 'react'
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Building2,
  CalendarCheck,
  Check,
  Clock,
  Crown,
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
  { value: 'منصة واحدة', label: 'لإدارة رحلة العميلة والتشغيل والإدارة' },
  { value: '24/7', label: 'حجز إلكتروني متاح للعميلات طوال اليوم' },
  { value: '4 واجهات', label: 'العميلة والإدارة والموظفة والشريكة' },
  { value: 'صلاحيات دقيقة', label: 'وصول منظم لكل دور داخل المشغل' },
]

const painPoints = [
  {
    title: 'تضارب المواعيد وضياع الحجوزات',
    description: 'تتحول المواعيد من رسائل ومكالمات متفرقة إلى جدول واضح ومركزي يمكن متابعته لحظة بلحظة.',
  },
  {
    title: 'غياب الصورة المالية الحقيقية',
    description: 'تتبع الإيرادات والمصروفات والمدفوعات والتقارير بدل الاعتماد على التقدير والدفاتر المتفرقة.',
  },
  {
    title: 'صعوبة متابعة الموظفات',
    description: 'ملفات وظيفية وحضور وانصراف ورواتب وعمولات وصلاحيات في منظومة تشغيل واحدة.',
  },
  {
    title: 'تجربة عميلة غير مترابطة',
    description: 'من اكتشاف الخدمة والعرض إلى الحجز والدفع ومتابعة الباقات والجلسات في تجربة رقمية متسقة.',
  },
]

const featureGroups = [
  {
    icon: CalendarCheck,
    title: 'الحجوزات والاستقبال',
    description: 'إدارة حجوزات اليوم، اختيار الخدمات والموظفات، منع التعارض، إعادة الجدولة ومتابعة حالة كل حجز.',
    items: ['جدول حجوزات مركزي', 'توزيع الخدمات على الموظفات', 'طابور وانتظار وتشغيل يومي'],
  },
  {
    icon: Users,
    title: 'إدارة العميلات CRM',
    description: 'ملف موحد لكل عميلة يجمع بياناتها وحجوزاتها ومدفوعاتها وباقاتها وملاحظات فريق العمل.',
    items: ['سجل كامل للعميلة', 'تاريخ الخدمات والمدفوعات', 'بيانات منظمة دون تكرار'],
  },
  {
    icon: Store,
    title: 'الخدمات والأسعار',
    description: 'بناء كتالوج الخدمات والأقسام والأسعار والمدد والموظفات المؤهلات لتقديم كل خدمة.',
    items: ['أقسام وخدمات مرنة', 'أسعار ومدد وخيارات', 'تحكم في الظهور والتوفر'],
  },
  {
    icon: Gift,
    title: 'العروض والباقات والولاء',
    description: 'إنشاء عروض وكوبونات وباقات جلسات تساعد المشغل على زيادة التكرار والاحتفاظ بالعميلات.',
    items: ['خصم ثابت أو نسبي', 'أكواد كوبونات وشروط', 'باقات وجلسات متبقية'],
  },
  {
    icon: Fingerprint,
    title: 'الموظفات والحضور',
    description: 'ملفات وظيفية وجداول عمل وحضور وانصراف مرتبط بالموقع الجغرافي وسجل تشغيلي واضح.',
    items: ['تطبيق خاص بالموظفات', 'بصمة جغرافية', 'تأخير وغياب وإجازات'],
  },
  {
    icon: Wallet,
    title: 'الرواتب والعمولات',
    description: 'احتساب دورة الراتب وفق الفترة المعتمدة مع الخصومات والبدلات والسلف والعمولات والتقارير.',
    items: ['فترات رواتب مرنة', 'خصومات وبدلات منفصلة', 'تقارير Excel وPDF'],
  },
  {
    icon: Receipt,
    title: 'المدفوعات والتقارير',
    description: 'ربط المدفوعات بالحجوزات ومتابعة الإيرادات والمصروفات والتدقيق اليومي من لوحة واحدة.',
    items: ['دفع نقدي وإلكتروني', 'فواتير وسجل مالي', 'تقارير تشغيلية وإدارية'],
  },
  {
    icon: Lock,
    title: 'الحسابات والصلاحيات',
    description: 'تحديد ما يستطيع المالك والمدير والموارد البشرية والمحاسب والموظفة الوصول إليه وتنفيذه.',
    items: ['أدوار إدارية متعددة', 'ربط الحساب بالموظفة', 'سجل للتعديلات والعمليات'],
  },
  {
    icon: MonitorSmartphone,
    title: 'موقع وتطبيقات متكاملة',
    description: 'واجهة للعميلات وموقع متجاوب وتطبيقات تشغيلية تجعل تجربة المشغل متصلة على الجوال والكمبيوتر.',
    items: ['حجز من الجوال والموقع', 'واجهة عميلة احترافية', 'لوحات إدارة متجاوبة'],
  },
]

const journeySteps = [
  {
    number: '01',
    title: 'نهيئ هوية المشغل',
    description: 'إضافة الشعار والألوان والخدمات والأسعار والفروع وبيانات التواصل ضمن تجربة تحمل هوية النشاط.',
  },
  {
    number: '02',
    title: 'ننظم التشغيل',
    description: 'تهيئة الموظفات والجداول والصلاحيات والحجوزات والمدفوعات بما يناسب آلية العمل الفعلية.',
  },
  {
    number: '03',
    title: 'نطلق تجربة العميلة',
    description: 'تبدأ العميلة في استعراض الخدمات والعروض والحجز والمتابعة من واجهة واضحة وسريعة.',
  },
  {
    number: '04',
    title: 'نقيس ونطور',
    description: 'تساعد التقارير وسجلات التشغيل على اكتشاف فرص النمو وتقليل الأخطاء وتحسين القرارات.',
  },
]

const plans = [
  {
    name: 'البداية',
    eyebrow: 'للمشغل الصغير',
    description: 'الأساس الرقمي المطلوب للانتقال من الإدارة اليدوية إلى نظام منظم.',
    features: [
      'موقع خدمات وحجز إلكتروني',
      'إدارة الخدمات والأسعار',
      'إدارة العميلات والحجوزات',
      'لوحة حجوزات اليوم',
      'فرع واحد',
      'دعم وتهيئة أساسية',
    ],
  },
  {
    name: 'النمو',
    eyebrow: 'للمشغل المتوسع',
    description: 'أدوات البيع والاحتفاظ بالعميلات والتقارير اللازمة لرفع الأداء.',
    popular: true,
    features: [
      'كل مميزات باقة البداية',
      'العروض والكوبونات',
      'الباقات والجلسات',
      'الفواتير والمدفوعات',
      'المصروفات والتقارير',
      'صلاحيات إدارية متقدمة',
    ],
  },
  {
    name: 'الاحتراف',
    eyebrow: 'للتشغيل المتكامل',
    description: 'إدارة أعمق للموظفات والموارد البشرية والرواتب وتجربة التشغيل اليومية.',
    features: [
      'كل مميزات باقة النمو',
      'تطبيق الموظفات',
      'الحضور والانصراف الجغرافي',
      'الرواتب والعمولات',
      'الطابور وشاشة الانتظار',
      'التدقيق وسجل العمليات',
    ],
  },
  {
    name: 'المؤسسات',
    eyebrow: 'للفروع والمجموعات',
    description: 'حل مخصص للمشاغل متعددة الفروع أو النماذج التشغيلية الأكثر تعقيدًا.',
    features: [
      'تهيئة الفروع المتعددة',
      'إدارة الشركاء وتأجير الكراسي',
      'هوية وتطبيقات مخصصة',
      'تقارير وصلاحيات مخصصة',
      'أولوية في الدعم والتطوير',
      'خطة إطلاق وتدريب للفريق',
    ],
  },
]

export function MalikatLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState('النمو')

  useEffect(() => {
    const previousTitle = document.title
    const previousDirection = document.documentElement.dir
    const previousLanguage = document.documentElement.lang

    document.title = 'مَلِكات | منصة إدارة وتشغيل المشاغل والصالونات'
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
      'السلام عليكم، أرغب في معرفة تفاصيل منصة مَلِكات.',
      `الاسم: ${name}`,
      `اسم المشغل: ${salon}`,
      `المدينة: ${city}`,
      `عدد الفروع: ${branches}`,
      `رقم التواصل: ${phone}`,
      `الباقة المهتم بها: ${selectedPlan}`,
    ].join('\n')

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="malikat-page" dir="rtl">
      <header className="malikat-header">
        <div className="malikat-container malikat-header__inner">
          <a href="#top" className="malikat-brand" aria-label="مَلِكات - الصفحة الرئيسية">
            <span className="malikat-brand__mark"><Crown aria-hidden="true" size={24} /></span>
            <span>
              <strong>مَلِكات</strong>
              <small>إدارة وتشغيل المشاغل</small>
            </span>
          </a>

          <nav className={`malikat-nav ${menuOpen ? 'is-open' : ''}`} aria-label="التنقل الرئيسي">
            <a href="#features" onClick={() => setMenuOpen(false)}>المميزات</a>
            <a href="#how-it-works" onClick={() => setMenuOpen(false)}>كيف نبدأ</a>
            <a href="#packages" onClick={() => setMenuOpen(false)}>الباقات</a>
            <a href="#request-demo" onClick={() => setMenuOpen(false)}>اطلب عرضًا</a>
            <a href="/" className="malikat-nav__portfolio" onClick={() => setMenuOpen(false)}>
              ملف نواف <ArrowLeft aria-hidden="true" size={16} />
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
                منصة سعودية لإدارة قطاع الجمال
              </div>
              <h1>
                أديري مشغلك بالكامل
                <span>من منصة واحدة.</span>
              </h1>
              <p>
                مَلِكات تربط الحجوزات والعميلات والخدمات والموظفات والحضور والرواتب والعروض
                والمدفوعات والتقارير في منظومة تشغيل متكاملة لأصحاب المشاغل والمستثمرين في قطاع الجمال.
              </p>

              <div className="malikat-hero__actions">
                <a href="#request-demo" className="malikat-button malikat-button--primary">
                  اطلب عرضًا تجريبيًا
                  <ArrowUpRight aria-hidden="true" size={18} />
                </a>
                <a href="#features" className="malikat-button malikat-button--ghost">
                  استعرض المميزات
                </a>
              </div>

              <div className="malikat-trust-row">
                <span><ShieldCheck aria-hidden="true" size={17} /> صلاحيات وأدوار منظمة</span>
                <span><MonitorSmartphone aria-hidden="true" size={17} /> يعمل على الجوال والكمبيوتر</span>
                <span><Headphones aria-hidden="true" size={17} /> تهيئة ودعم عند الإطلاق</span>
              </div>
            </div>

            <div className="malikat-hero__visual" aria-label="معاينة منصة مَلِكات">
              <div className="malikat-browser">
                <div className="malikat-browser__bar">
                  <span className="malikat-browser__dots"><i /><i /><i /></span>
                  <span className="malikat-browser__address">malikat.com/dashboard</span>
                  <span className="malikat-browser__secure"><Lock aria-hidden="true" size={13} /></span>
                </div>
                <img src="/media/queens-salon-desktop.png" alt="واجهة موقع مَلِكات على الكمبيوتر" />
              </div>

              <div className="malikat-floating-card malikat-floating-card--bookings">
                <span className="malikat-floating-card__icon"><CalendarCheck aria-hidden="true" size={19} /></span>
                <span><small>تشغيل اليوم</small><strong>الحجوزات تحت السيطرة</strong></span>
              </div>

              <div className="malikat-floating-card malikat-floating-card--reports">
                <span className="malikat-floating-card__icon"><BarChart3 aria-hidden="true" size={19} /></span>
                <span><small>قرار أوضح</small><strong>تقارير تشغيلية ومالية</strong></span>
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
              <span>من الفوضى إلى نظام واضح</span>
              <h2>المشغل لا يحتاج برنامجًا إضافيًا.<br />يحتاج نظام تشغيل يجمع كل شيء.</h2>
              <p>كلما كانت البيانات موزعة بين المحادثات والجداول والدفاتر، زادت الأخطاء وضاعت فرص النمو.</p>
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
              <span>منظومة متكاملة</span>
              <h2>كل ما يحتاجه المشغل، في مكان واحد.</h2>
              <p>المميزات تتوزع على الباقات حسب حجم المشغل واحتياجاته التشغيلية، مع إمكانية التهيئة والتخصيص.</p>
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

        <section className="malikat-showcase-section">
          <div className="malikat-container malikat-showcase-grid">
            <div className="malikat-showcase-copy">
              <span className="malikat-section-label">تجربة متصلة</span>
              <h2>واجهة للعميلة، وتحكم كامل للإدارة.</h2>
              <p>
                تبدأ الرحلة من استعراض الخدمة والعرض والحجز، ثم تنتقل مباشرة إلى فريق الاستقبال والموظفة
                والمدفوعات والتقارير؛ دون إعادة إدخال البيانات أو فقدان السياق.
              </p>
              <div className="malikat-showcase-points">
                <span><MonitorSmartphone aria-hidden="true" size={19} /> تجربة متجاوبة على جميع الأجهزة</span>
                <span><Workflow aria-hidden="true" size={19} /> تدفق موحد من الحجز حتى إغلاق العملية</span>
                <span><Layers aria-hidden="true" size={19} /> وحدات يمكن تفعيلها حسب الباقة</span>
              </div>
            </div>

            <div className="malikat-device-stage">
              <div className="malikat-device-stage__tablet">
                <img src="/media/queens-salon-tablet.png" alt="واجهة مَلِكات على الجهاز اللوحي" loading="lazy" />
              </div>
              <div className="malikat-device-stage__phone">
                <span />
                <img src="/media/queens-salon-mobile.png" alt="واجهة مَلِكات على الجوال" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="malikat-journey-section">
          <div className="malikat-container">
            <div className="malikat-section-heading malikat-section-heading--center">
              <span>إطلاق منظم</span>
              <h2>من التعرف على المشغل إلى التشغيل الفعلي.</h2>
              <p>لا نبيع اشتراكًا ونتركك. نبدأ بفهم طريقة العمل، ثم نهيئ النظام ونطلقه مع الفريق.</p>
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
              <span>باقات مرنة</span>
              <h2>ابدئي بما تحتاجينه، وتوسعي عندما يكبر المشغل.</h2>
              <p>يُحدد السعر النهائي حسب عدد الفروع والموظفات والوحدات المطلوبة ومستوى التخصيص والدعم.</p>
            </div>

            <div className="malikat-plans-grid">
              {plans.map((plan) => (
                <article key={plan.name} className={`malikat-plan-card ${plan.popular ? 'is-popular' : ''}`}>
                  {plan.popular ? <div className="malikat-plan-card__badge">الأكثر مناسبة للنمو</div> : null}
                  <div className="malikat-plan-card__top">
                    <span>{plan.eyebrow}</span>
                    <h3>{plan.name}</h3>
                    <p>{plan.description}</p>
                  </div>
                  <div className="malikat-plan-card__price">
                    <strong>تسعير مخصص</strong>
                    <small>بحسب حجم التشغيل</small>
                  </div>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}><Check aria-hidden="true" size={16} /> {feature}</li>
                    ))}
                  </ul>
                  <button type="button" onClick={() => selectPlan(plan.name)}>
                    اطلب تفاصيل الباقة
                    <ArrowUpRight aria-hidden="true" size={17} />
                  </button>
                </article>
              ))}
            </div>

            <div className="malikat-package-note">
              <ShieldCheck aria-hidden="true" size={22} />
              <div>
                <strong>توزيع المميزات النهائي يتم بعد مراجعة التشغيل.</strong>
                <p>بعض المميزات تحتاج تهيئة أو ربطًا خاصًا بحسب نظام المشغل، لذلك لا ننشر وعودًا عامة قبل تحديد النطاق.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="malikat-value-section">
          <div className="malikat-container malikat-value-grid">
            <div>
              <span className="malikat-section-label">قيمة حقيقية للمستثمر</span>
              <h2>النظام ليس تكلفة تقنية؛ بل أصل تشغيلي يرفع قابلية التوسع.</h2>
            </div>
            <div className="malikat-value-list">
              <article><Clock aria-hidden="true" size={21} /><span><strong>وقت أقل في المتابعة اليدوية</strong><small>تقليل التنقل بين المحادثات والجداول والدفاتر.</small></span></article>
              <article><BarChart3 aria-hidden="true" size={21} /><span><strong>قرارات مبنية على بيانات</strong><small>رؤية أوضح للحجوزات والإيرادات والمصروفات والأداء.</small></span></article>
              <article><Building2 aria-hidden="true" size={21} /><span><strong>جاهزية أعلى للتوسع</strong><small>توحيد الإجراءات قبل إضافة موظفات أو فروع جديدة.</small></span></article>
              <article><ShieldCheck aria-hidden="true" size={21} /><span><strong>حوكمة وصلاحيات أفضل</strong><small>كل مستخدم يرى وينفذ ما يناسب دوره فقط.</small></span></article>
            </div>
          </div>
        </section>

        <section id="request-demo" className="malikat-request-section">
          <div className="malikat-container malikat-request-grid">
            <div className="malikat-request-copy">
              <span className="malikat-section-label">ابدأ الخطوة الأولى</span>
              <h2>خلّنا نفهم مشغلك ونبني لك العرض المناسب.</h2>
              <p>أرسل بيانات بسيطة، وستفتح لك رسالة واتساب جاهزة تحتوي على طلبك والباقة التي اخترتها.</p>

              <div className="malikat-request-summary">
                <span><FileText aria-hidden="true" size={19} /> تحليل احتياج المشغل</span>
                <span><Package aria-hidden="true" size={19} /> اقتراح الباقة المناسبة</span>
                <span><Headphones aria-hidden="true" size={19} /> شرح مباشر وخطة إطلاق</span>
              </div>
            </div>

            <form className="malikat-request-form" onSubmit={submitRequest}>
              <div className="malikat-form-row">
                <label>
                  <span>الاسم</span>
                  <input name="name" type="text" placeholder="اكتب اسمك" required />
                </label>
                <label>
                  <span>اسم المشغل</span>
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
                <span>الباقة المهتم بها</span>
                <select value={selectedPlan} onChange={(event) => setSelectedPlan(event.target.value)}>
                  {plans.map((plan) => <option key={plan.name} value={plan.name}>{plan.name}</option>)}
                </select>
              </label>
              <button type="submit" className="malikat-button malikat-button--primary malikat-request-form__submit">
                إرسال الطلب عبر واتساب
                <ArrowUpRight aria-hidden="true" size={18} />
              </button>
              <small>لن يتم تخزين البيانات في الموقع؛ ستُستخدم فقط لإنشاء رسالة واتساب.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="malikat-footer">
        <div className="malikat-container malikat-footer__inner">
          <div className="malikat-brand">
            <span className="malikat-brand__mark"><Crown aria-hidden="true" size={22} /></span>
            <span><strong>مَلِكات</strong><small>نظام تشغيل متكامل لقطاع الجمال</small></span>
          </div>
          <p>تطوير وإدارة نواف أحمد العليان</p>
          <div className="malikat-footer__links">
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">واتساب</a>
            <a href="mailto:nawafaaa0@gmail.com">البريد الإلكتروني</a>
            <a href="/">الملف الشخصي</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
