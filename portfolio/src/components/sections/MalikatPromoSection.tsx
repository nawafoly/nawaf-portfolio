import { ArrowUpRight, Layers, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'
import { Reveal } from '../ui/Reveal'

export function MalikatPromoSection() {
  const { language } = useLanguage()
  const isArabic = language === 'ar'

  return (
    <section className="border-b border-border bg-bg py-8 sm:py-12">
      <div className="container-shell">
        <Reveal>
          <div
            dir={isArabic ? 'rtl' : 'ltr'}
            className="relative overflow-hidden rounded-2xl border border-[#b8893e]/35 bg-[linear-gradient(135deg,#35101f,#641a39_58%,#7b3450)] p-6 shadow-[0_26px_70px_rgba(45,8,24,0.3)] sm:p-9 lg:p-11"
          >
            <div className="absolute -left-20 -top-24 size-64 rounded-full bg-[#e3c78d]/10 blur-3xl" aria-hidden="true" />
            <div className="absolute -bottom-32 right-0 size-72 rounded-full bg-[#b8893e]/10 blur-3xl" aria-hidden="true" />

            <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#e3c78d]/25 bg-white/5 px-3 py-1.5 text-xs font-bold text-[#e3c78d]">
                  <Sparkles aria-hidden="true" size={15} />
                  {isArabic ? 'منتج من منظومة MIHVARA' : 'A MIHVARA product'}
                </span>
                <div className="mt-5 flex items-center gap-3">
                  <span className="inline-flex size-12 items-center justify-center rounded-2xl border border-[#e3c78d]/30 bg-white/5 text-[#e3c78d]">
                    <Layers aria-hidden="true" size={25} />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-[#e3c78d]">MIHVARA Salon</p>
                    <h2 className="mt-1 text-2xl font-semibold text-white sm:text-4xl">
                      {isArabic ? 'نظام متكامل لإدارة وتشغيل الصالونات والمشاغل' : 'An integrated salon operations platform'}
                    </h2>
                  </div>
                </div>
                <p className="mt-5 max-w-3xl text-sm leading-8 text-white/70 sm:text-base">
                  {isArabic
                    ? 'الحجوزات والعميلات والخدمات والموظفات والـHR والرواتب والمخزون والمشتريات والإيرادات والمصروفات والتقارير في منظومة واحدة قابلة للتخصيص. صالون ملكات أحد التطبيقات الفعلية للمنتج، وليس اسم النظام.'
                    : 'Bookings, clients, services, HR, payroll, inventory, purchasing, finance, and reporting in one configurable platform. Malikat Salon is one live implementation of the product, not the product name.'}
                </p>
              </div>

              <Link
                to="/salon"
                className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#e3c78d] px-6 py-3 text-sm font-extrabold text-[#35101f] transition hover:-translate-y-0.5 hover:bg-[#efd9aa]"
              >
                {isArabic ? 'استعرض MIHVARA Salon' : 'Explore MIHVARA Salon'}
                <ArrowUpRight aria-hidden="true" size={18} />
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
