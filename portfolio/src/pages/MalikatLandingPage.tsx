import { type FormEvent, useEffect, useMemo, useState } from 'react'
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

const chapters = [
  { id: 'idea', number: '01', label: 'الفكرة' },
  { id: 'bookings', number: '02', label: 'الحجز والعميلة' },
  { id: 'team', number: '03', label: 'الفريق و HR' },
  { id: 'inventory', number: '04', label: 'المخزون' },
  { id: 'numbers', number: '05', label: 'الفلوس والتقارير' },
  { id: 'experience', number: '06', label: 'التجربة' },
]

const quickWins = [
  { icon: CalendarCheck, title: 'الحجز واضح', text: 'مين حجز؟ مع مين؟ أي خدمة؟ وبكم؟ كلها قدامك.' },
  { icon: Fingerprint, title: 'الفريق منظم', text: 'دوام، شفتات، إجازات، طلبات ورواتب داخل نفس الدورة.' },
  { icon: Boxes, title: 'المخزون مفهوم', text: 'تعرفي وش دخل، وش انصرف، وش نقص، وليه.' },
  { icon: BarChart3, title: 'الأرقام تتكلم', text: 'إيرادات، مصاريف وأداء بدون تجميع يدوي آخر اليوم.' },
]

const bookingFlow = [
  { number: '1', title: 'العميلة تختار', text: 'الخدمة والوقت المناسب لها.' },
  { number: '2', title: 'النظام يرتب', text: 'الموظفة المتاحة والسعر والمدة بدون تضارب.' },
  { number: '3', title: 'الاستقبال يكمل', text: 'أي تعديل أو إضافة تكون واضحة ومربوطة بالحجز.' },
  { number: '4', title: 'العملية تتقفل', text: 'الزيارة تدخل السجل والتقارير بدل ما تختفي بعد الدفع.' },
]

const hrCards = [
  { icon: Users, title: 'ملف لكل موظفة', text: 'بياناتها، حالتها الوظيفية، تاريخ بدايتها، خدماتها وصلاحياتها في مكان واحد.' },
  { icon: Clock, title: 'شفتات وحضور', text: 'تأخير، خروج مبكر، نقص ساعات وغياب بشكل مفهوم، مو أرقام متفرقة.' },
  { icon: FileText, title: 'إجازات وطلبات', text: 'الطلب يمشي بمراجعة واعتماد بدل ما يضيع بين رسائل الواتساب.' },
  { icon: Wallet, title: 'رواتب مرتبطة بالواقع', text: 'بدلات، مكافآت، عمولات، سلف وتسويات مرتبطة بفترة الراتب.' },
]

const inventoryCards = [
  { icon: Package, title: 'رصيد حقيقي', text: 'مواد، وحدات، SKU، رصيد افتتاحي وحد إعادة طلب.' },
  { icon: Workflow, title: 'استهلاك حسب الخدمة', text: 'تقدري تربطي كل خدمة بوصفة استهلاك بدل الخصم العشوائي.' },
  { icon: ShoppingCart, title: 'موردون ومشتريات', text: 'أوامر شراء واستلام كميات مرتبطة مباشرة بالمخزون.' },
  { icon: ShieldCheck, title: 'حركة لها سبب', text: 'صرف موظفة، هدر، جرد أو استهلاك؛ كل حركة واضحة ومفهومة.' },
]

const optionalModules = [
  'Cashback / Loyalty',
  'الباقات والجلسات',
  'الكوبونات والعروض',
  'صلاحيات وأدوار إضافية',
]

export function MalikatLandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeChapter, setActiveChapter] = useState('idea')
  const [focusArea, setFocusArea] = useState('تشغيل الصالون والسبا بالكامل')

  const chapterIds = useMemo(() => chapters.map((chapter) => chapter.id), [])

  useEffect(() => {
    const previousTitle = document.title
    const previousDirection = document.documentElement.dir
    const previousLanguage = document.documentElement.lang

    document.title = 'MIHVARA Salon & Spa | إدارة وتشغيل الصالونات والسبا'
    document.documentElement.dir = 'rtl'
    document.documentElement.lang = 'ar'
    document.body.classList.add('malikat-landing-open')

    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.14 },
    )
    revealNodes.forEach((node) => revealObserver.observe(node))

    const chapterObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible?.target.id) setActiveChapter(visible.target.id)
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.35, 0.6] },
    )

    chapterIds.forEach((id) => {
      const section = document.getElementById(id)
      if (section) chapterObserver.observe(section)
    })

    return () => {
      document.title = previousTitle
      document.documentElement.dir = previousDirection
      document.documentElement.lang = previousLanguage
      document.body.classList.remove('malikat-landing-open')
      revealObserver.disconnect()
      chapterObserver.disconnect()
    }
  }, [chapterIds])

  const submitRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '').trim()
    const salon = String(formData.get('salon') ?? '').trim()
    const city = String(formData.get('city') ?? '').trim()
    const phone = String(formData.get('phone') ?? '').trim()

    const message = [
      'السلام عليكم، شفت تفاصيل MIHVARA Salon & Spa وحاب أعرف أكثر.',
      `الاسم: ${name}`,
      `اسم الصالون / السبا: ${salon}`,
      `المدينة / الدولة: ${city}`,
      `رقم التواصل: ${phone}`,
      `أكثر شيء يهمني: ${focusArea}`,
    ].join('\n')

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="malikat-page" dir="rtl">
      <header className="malikat-header">
        <div className="malikat-container malikat-header__inner">
          <a href="#top" className="malikat-brand" aria-label="MIHVARA Salon & Spa - الصفحة الرئيسية">
            <span className="malikat-brand__mark">M</span>
            <span className="malikat-brand__copy">
              <strong><bdi dir="ltr">MIHVARA</bdi></strong>
              <small><bdi dir="ltr">Salon & Spa</bdi></small>
            </span>
          </a>

          <nav className={`malikat-nav ${menuOpen ? 'is-open' : ''}`} aria-label="التنقل الرئيسي">
            <a href="#bookings" onClick={() => setMenuOpen(false)}>الحجوزات</a>
            <a href="#team" onClick={() => setMenuOpen(false)}>HR</a>
            <a href="#inventory" onClick={() => setMenuOpen(false)}>المخزون</a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>التجربة</a>
            <a href="#request-demo" onClick={() => setMenuOpen(false)}>تواصل</a>
            <a href="/" className="malikat-nav__portfolio" onClick={() => setMenuOpen(false)}>
              عن نواف <ArrowLeft aria-hidden="true" size={15} />
            </a>
          </nav>

          <a href="#request-demo" className="malikat-button malikat-button--small malikat-header__cta">
            أبغى أشوفه
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

      <div className="malikat-chapter-nav" aria-label="فصول الصفحة">
        <div className="malikat-container malikat-chapter-nav__inner">
          {chapters.map((chapter) => (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              className={activeChapter === chapter.id ? 'is-active' : ''}
            >
              <span>{chapter.number}</span>
              {chapter.label}
            </a>
          ))}
        </div>
      </div>

      <main id="top">
        <section className="malikat-hero" id="idea">
          <div className="malikat-paper-noise" aria-hidden="true" />
          <div className="malikat-container malikat-hero__grid">
            <div className="malikat-hero__content" data-reveal>
              <div className="malikat-eyebrow">
                <Sparkles aria-hidden="true" size={16} />
                <bdi dir="ltr">MIHVARA Salon & Spa</bdi>
              </div>

              <p className="malikat-hand-note malikat-hand-note--hero">مو برنامج زيادة على شغلك</p>

              <h1>
                كل شغلك.
                <span className="malikat-marker">قدامك.</span>
              </h1>

              <p className="malikat-hero__lead">
                الحجوزات، العملاء، الفريق، الرواتب، المخزون، المصاريف والتقارير —
                بدل ما تكون موزعة في أكثر من مكان، كلها تمشي مع بعض داخل نظام واحد.
              </p>

              <div className="malikat-hero__actions">
                <a href="#experience" className="malikat-button malikat-button--primary">
                  شوفيه وهو شغال
                  <ArrowUpRight aria-hidden="true" size={18} />
                </a>
                <a href="#request-demo" className="malikat-button malikat-button--ghost">خلّنا نتكلم</a>
              </div>

              <div className="malikat-trust-row">
                <span><ShieldCheck aria-hidden="true" size={16} /> كل منشأة ببيئتها الخاصة</span>
                <span><MonitorSmartphone aria-hidden="true" size={16} /> جوال، آيباد وكمبيوتر</span>
                <span><Building2 aria-hidden="true" size={16} /> قابل للتجهيز حسب الدولة والعملة</span>
              </div>
            </div>

            <div className="malikat-hero__visual" data-reveal>
              <div className="malikat-browser malikat-browser--hero">
                <div className="malikat-browser__bar">
                  <span className="malikat-browser__dots"><i /><i /><i /></span>
                  <span className="malikat-browser__address" dir="ltr">mihvara / salon / dashboard</span>
                  <Lock aria-hidden="true" size={13} />
                </div>
                <img src="/media/queens-salon-desktop.png" alt="واجهة تشغيل MIHVARA Salon & Spa" />
              </div>
              <div className="malikat-scribble malikat-scribble--one">الحجز هنا</div>
              <div className="malikat-scribble malikat-scribble--two">والإدارة هنا</div>
            </div>
          </div>

          <div className="malikat-container malikat-quick-grid" data-reveal>
            {quickWins.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title}>
                  <Icon aria-hidden="true" size={22} />
                  <div><strong>{item.title}</strong><p>{item.text}</p></div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="malikat-story-section malikat-story-section--soft" id="bookings">
          <div className="malikat-container">
            <div className="malikat-chapter-heading" data-reveal>
              <span className="malikat-chapter-number">02</span>
              <div>
                <p className="malikat-section-label">الحجز والعميلة</p>
                <h2>من أول «أبغى موعد»… لين تقفل الزيارة.</h2>
                <p>بدون إعادة كتابة، وبدون ما تضيع التفاصيل بين الاستقبال والموظفة والحساب.</p>
              </div>
            </div>

            <div className="malikat-flow-grid" data-reveal>
              {bookingFlow.map((step) => (
                <article key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </article>
              ))}
            </div>

            <div className="malikat-callout" data-reveal>
              <div className="malikat-callout__icon"><Store aria-hidden="true" size={26} /></div>
              <div>
                <p className="malikat-hand-note">تفصيلة تفرق</p>
                <h3>الخدمة مربوطة بسعرها، مدتها، والموظفات اللي يقدموها.</h3>
                <p>والعروض لها بداية ونهاية، عشان ما تحتاجي تغيري السعر الأساسي كل مرة.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="malikat-story-section" id="team">
          <div className="malikat-container">
            <div className="malikat-chapter-heading" data-reveal>
              <span className="malikat-chapter-number">03</span>
              <div>
                <p className="malikat-section-label">الفريق و HR</p>
                <h2>مو بس «حضور وانصراف».</h2>
                <p>الفكرة إن ملف الموظفة، دوامها، طلباتها وراتبها يكونوا مربوطين ببعض.</p>
              </div>
            </div>

            <div className="malikat-card-grid malikat-card-grid--four" data-reveal>
              {hrCards.map((card) => {
                const Icon = card.icon
                return (
                  <article key={card.title} className="malikat-editorial-card">
                    <Icon aria-hidden="true" size={23} />
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                )
              })}
            </div>

            <div className="malikat-wide-note" data-reveal>
              <Fingerprint aria-hidden="true" size={30} />
              <div>
                <strong>النتيجة؟</strong>
                <p>بدل ما نهاية الشهر تبدأي تجمعي الحضور والإجازات والتعديلات يدويًا، البيانات أصلًا موجودة ومترابطة.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="malikat-story-section malikat-story-section--olive" id="inventory">
          <div className="malikat-container">
            <div className="malikat-chapter-heading" data-reveal>
              <span className="malikat-chapter-number">04</span>
              <div>
                <p className="malikat-section-label">المخزون</p>
                <h2>مو مهم تعرفي «كم باقي» بس.</h2>
                <p>الأهم تعرفي: ليه نقص؟ انصرف لمين؟ دخل من أي شراء؟ وأي خدمة استهلكته؟</p>
              </div>
            </div>

            <div className="malikat-card-grid malikat-card-grid--four" data-reveal>
              {inventoryCards.map((card) => {
                const Icon = card.icon
                return (
                  <article key={card.title} className="malikat-editorial-card malikat-editorial-card--light">
                    <Icon aria-hidden="true" size={23} />
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </article>
                )
              })}
            </div>

            <div className="malikat-callout malikat-callout--paper" data-reveal>
              <div className="malikat-callout__icon"><Boxes aria-hidden="true" size={26} /></div>
              <div>
                <p className="malikat-hand-note">وهذي مهمة</p>
                <h3>الحجز لحاله ما يخصم من المخزون.</h3>
                <p>الاستهلاك يتأكد عند التنفيذ الفعلي، عشان إلغاء الموعد أو عدم حضور العميلة ما يعطيك أرقام مخزون وهمية.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="malikat-story-section" id="numbers">
          <div className="malikat-container malikat-numbers-layout">
            <div className="malikat-chapter-heading" data-reveal>
              <span className="malikat-chapter-number">05</span>
              <div>
                <p className="malikat-section-label">الفلوس والتقارير</p>
                <h2>بدل «أحس اليوم كان ممتاز»… شوفي الرقم.</h2>
                <p>الإيرادات والمصروفات والتشغيل وأداء الفريق تكون أقرب لبعض، فتقدري تقرئي يومك بشكل أسرع.</p>
              </div>
            </div>

            <div className="malikat-number-stack" data-reveal>
              <article><Receipt aria-hidden="true" size={24} /><div><strong>الإيرادات والمصروفات</strong><p>سجل أوضح للحركة المالية بدل الإجماليات بدون سياق.</p></div></article>
              <article><BarChart3 aria-hidden="true" size={24} /><div><strong>تقارير وأداء</strong><p>الخدمات، الموظفات والتشغيل تتحول لمؤشرات تساعدك تقرري.</p></div></article>
              <article><Lock aria-hidden="true" size={24} /><div><strong>صلاحيات وسجل عمليات</strong><p>مو كل أحد يشوف أو يعدل كل شيء، والتغييرات المهمة لها أثر واضح.</p></div></article>
            </div>
          </div>
        </section>

        <section className="malikat-story-section malikat-story-section--dark" id="experience">
          <div className="malikat-container">
            <div className="malikat-chapter-heading malikat-chapter-heading--light" data-reveal>
              <span className="malikat-chapter-number">06</span>
              <div>
                <p className="malikat-section-label">التجربة</p>
                <h2>العميلة تشوف شيء بسيط.<br />الإدارة تشوف الصورة كاملة.</h2>
                <p>كل طرف يأخذ الواجهة اللي يحتاجها، بدون ما نحشر الجميع في نفس الشاشة.</p>
              </div>
            </div>

            <div className="malikat-device-story" data-reveal>
              <div className="malikat-device-story__copy">
                <span><MonitorSmartphone aria-hidden="true" size={20} /> حجز من الجوال</span>
                <span><Workflow aria-hidden="true" size={20} /> تشغيل على الآيباد</span>
                <span><BarChart3 aria-hidden="true" size={20} /> إدارة من الكمبيوتر</span>
                <span><Users aria-hidden="true" size={20} /> بوابة منفصلة للموظفات</span>
                <p className="malikat-hand-note malikat-hand-note--light">نفس البيانات، واجهات مختلفة.</p>
              </div>
              <div className="malikat-device-stage">
                <div className="malikat-device-stage__desktop">
                  <img src="/media/queens-salon-desktop.png" alt="لوحة الإدارة على الكمبيوتر" loading="lazy" />
                </div>
                <div className="malikat-device-stage__tablet">
                  <img src="/media/queens-salon-tablet.png" alt="واجهة التشغيل على الآيباد" loading="lazy" />
                </div>
                <div className="malikat-device-stage__phone">
                  <img src="/media/queens-salon-mobile.png" alt="واجهة العميلة على الجوال" loading="lazy" />
                </div>
              </div>
            </div>

            <div className="malikat-live-proof" data-reveal>
              <div>
                <span>تطبيق فعلي</span>
                <h3>النظام مو فكرة على ورق.</h3>
                <p>يُستخدم كنظام تشغيل حقيقي في صالون ملكات، ويتم تطويره من واقع التشغيل والملاحظات اليومية.</p>
              </div>
              <div className="malikat-live-proof__badge"><Check aria-hidden="true" size={18} /> تشغيل فعلي</div>
            </div>
          </div>
        </section>

        <section className="malikat-story-section malikat-story-section--paper">
          <div className="malikat-container malikat-flexible-layout" data-reveal>
            <div>
              <p className="malikat-section-label">مو قالب ثابت</p>
              <h2>نركّبه على طريقة شغلكم، مو العكس.</h2>
              <p>الدولة، العملة، الخدمات، الصلاحيات والوحدات اللي تحتاجوها تختلف من مكان لمكان. لذلك ما نفرض كل شيء على الجميع.</p>
            </div>
            <div className="malikat-optional-box">
              <span className="malikat-hand-note">مثلاً</span>
              {optionalModules.map((module) => (
                <div key={module}><Check aria-hidden="true" size={16} /><bdi dir={module.includes('/') ? 'ltr' : 'rtl'}>{module}</bdi><small>اختياري</small></div>
              ))}
            </div>
          </div>
        </section>

        <section id="request-demo" className="malikat-request-section">
          <div className="malikat-container malikat-request-grid">
            <div className="malikat-request-copy" data-reveal>
              <p className="malikat-hand-note">وصلتي هنا؟ خلّينا نختصر.</p>
              <h2>قولي لي وش أهم شيء عندكم، وأنا أوريك كيف يدخل في التشغيل.</h2>
              <p>مو لازم تقرري باقة من الآن. أول خطوة نفهم الصالون أو السبا عندكم، وبعدها نجهز الصورة المناسبة.</p>
              <div className="malikat-request-summary">
                <span><FileText aria-hidden="true" size={18} /> نفهم احتياجكم</span>
                <span><Layers aria-hidden="true" size={18} /> نحدد الوحدات المناسبة</span>
                <span><Headphones aria-hidden="true" size={18} /> نشرح التشغيل مباشرة</span>
              </div>
            </div>

            <form className="malikat-request-form" onSubmit={submitRequest} data-reveal>
              <div className="malikat-form-row">
                <label><span>الاسم</span><input name="name" type="text" placeholder="اسمك" required /></label>
                <label><span>اسم الصالون / السبا</span><input name="salon" type="text" placeholder="اسم النشاط" required /></label>
              </div>
              <div className="malikat-form-row">
                <label><span>المدينة / الدولة</span><input name="city" type="text" placeholder="مثال: الدار البيضاء - المغرب" required /></label>
                <label><span>رقم التواصل</span><input name="phone" type="tel" inputMode="tel" dir="ltr" placeholder="+212 ..." required /></label>
              </div>
              <label>
                <span>وش أكثر شيء يهمك؟</span>
                <select value={focusArea} onChange={(event) => setFocusArea(event.target.value)}>
                  <option>تشغيل الصالون والسبا بالكامل</option>
                  <option>الحجوزات وتجربة العميلة</option>
                  <option>الموظفات و HR والرواتب</option>
                  <option>المخزون والمشتريات</option>
                  <option>التقارير والإيرادات والمصروفات</option>
                </select>
              </label>
              <button type="submit" className="malikat-button malikat-button--primary malikat-request-form__submit">
                افتح واتساب
                <ArrowUpRight aria-hidden="true" size={18} />
              </button>
              <small>البيانات ما تنحفظ في الموقع؛ فقط نجهز منها رسالة واتساب.</small>
            </form>
          </div>
        </section>
      </main>

      <footer className="malikat-footer">
        <div className="malikat-container malikat-footer__inner">
          <div className="malikat-brand">
            <span className="malikat-brand__mark">M</span>
            <span className="malikat-brand__copy"><strong><bdi dir="ltr">MIHVARA</bdi></strong><small><bdi dir="ltr">Salon & Spa</bdi></small></span>
          </div>
          <p>تطوير وإدارة نواف أحمد العليان</p>
          <div className="malikat-footer__links">
            <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noreferrer">واتساب</a>
            <a href="mailto:nawafaaa0@gmail.com">البريد</a>
            <a href="/">عن نواف</a>
          </div>
        </div>
      </footer>

      <a href="#request-demo" className="malikat-mobile-cta">أبغى أشوفه <ArrowUpRight aria-hidden="true" size={17} /></a>
    </div>
  )
}
