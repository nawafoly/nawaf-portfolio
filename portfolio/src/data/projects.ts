import type { Project } from '../types'

export const projects: Project[] = [
  {
    slug: 'madan-app',
    name: 'Madan App',
    category: 'Real Estate Platform',
    year: '2026',
    liveUrl: 'https://madan-app.vercel.app/',
    shortDescription:
      'A polished Arabic real estate investment platform with strong RTL presentation, project discovery, and investor-facing flows.',
    tags: ['React', 'RTL UI', 'Vercel', 'Real Estate'],
    featured: true,
    coverImage: '/media/madan-app-desktop.png',
    media: {
      video: '/media/madan-app-demo.webm',
      poster: '/media/madan-app-desktop.png',
      desktop: '/media/madan-app-desktop.png',
      tablet: '/media/madan-app-tablet.png',
      mobile: '/media/madan-app-mobile.png',
    },
    caseStudy: {
      overview:
        'Madan App presents real estate investment opportunities through a premium Arabic interface built for trust, clarity, and quick scanning.',
      problem:
        'Real estate platforms need to communicate credibility quickly while giving visitors enough context to understand projects, investment value, and next steps.',
      goals: [
        'Create a strong first impression for investment discovery.',
        'Support Arabic RTL content with clean hierarchy and spacing.',
        'Make project exploration feel polished across desktop and mobile.',
      ],
      role: 'Built the responsive front end, shaped the RTL interface details, refined section hierarchy, and prepared the deployment flow.',
      stack: ['React', 'TypeScript', 'Vite', 'Vercel', 'RTL CSS'],
      architecture:
        'The platform is structured as a client-rendered React site with reusable sections, route-ready content blocks, responsive media, and Vercel deployment.',
      features: [
        'Premium Arabic landing experience.',
        'Responsive navigation and project presentation.',
        'Clear investment-focused content hierarchy.',
        'Desktop, tablet, and mobile optimized layouts.',
      ],
      designProcess:
        'The interface direction focused on trust signals, strong hero composition, high contrast Arabic typography, and simple routes from interest to action.',
      challenges: [
        'Keeping Arabic content readable over rich imagery.',
        'Balancing visual impact with fast scanning.',
        'Maintaining layout quality across device sizes.',
      ],
      solutions: [
        'Used strong overlays and restrained accent color.',
        'Built sections around one clear message per viewport.',
        'Tested screenshots across desktop, tablet, and mobile breakpoints.',
      ],
      gallery: ['Desktop investment landing', 'Tablet project view', 'Mobile navigation'],
      results: [
        'Delivered a live investment-facing platform.',
        'Created a premium RTL visual direction.',
        'Made the project ready for public portfolio presentation.',
      ],
      lessons: [
        'Arabic typography needs generous spacing and decisive contrast.',
        'Real estate pages benefit from focused trust-building sections.',
        'Responsive previews catch polish issues faster than code review alone.',
      ],
      nextProjectSlug: 'nooha',
    },
  },
  {
    slug: 'nooha',
    name: 'Nooha',
    category: 'Company Website',
    year: '2026',
    liveUrl: 'https://nooha.sa/',
    shortDescription:
      'A bilingual company website for catering and hospitality services with service discovery, brand presentation, and direct contact paths.',
    tags: ['React', 'Bilingual', 'Company Site', 'Responsive UI'],
    coverImage: '/media/nooha-desktop.png',
    media: {
      video: '/media/nooha-demo.webm',
      poster: '/media/nooha-desktop.png',
      desktop: '/media/nooha-desktop.png',
      tablet: '/media/nooha-tablet.png',
      mobile: '/media/nooha-mobile.png',
    },
    caseStudy: {
      overview:
        'Nooha is a hospitality and catering company website designed to present services, brand credibility, and contact options clearly.',
      problem:
        'Service businesses need a website that looks credible, explains offerings quickly, and makes direct inquiry easy from any device.',
      goals: [
        'Present the company clearly in Arabic and English contexts.',
        'Make services and brand identity easy to browse.',
        'Keep contact actions visible without overwhelming the page.',
      ],
      role: 'Implemented the responsive website, refined content sections, supported language-aware layout details, and deployed the live site.',
      stack: ['React', 'TypeScript', 'Responsive CSS', 'Vercel'],
      architecture:
        'The site uses reusable marketing sections, responsive media areas, language-ready navigation, and direct outbound contact actions.',
      features: [
        'Company hero and service sections.',
        'Responsive desktop and mobile navigation.',
        'Direct WhatsApp/contact entry points.',
        'Arabic-first visual hierarchy with bilingual affordances.',
      ],
      designProcess:
        'The design work prioritized strong brand presence, food-service imagery, clear navigation, and fast routes to inquiry.',
      challenges: [
        'Keeping the visual identity premium while content-heavy.',
        'Balancing bilingual navigation labels.',
        'Making contact options visible but not distracting.',
      ],
      solutions: [
        'Used a restrained dark visual foundation with gold accents.',
        'Grouped navigation items by visitor intent.',
        'Kept contact actions persistent and easy to find.',
      ],
      gallery: ['Desktop company homepage', 'Tablet service sections', 'Mobile contact path'],
      results: [
        'Delivered a live company website.',
        'Improved service presentation across devices.',
        'Created portfolio-ready media for desktop, tablet, and mobile.',
      ],
      lessons: [
        'Service sites need immediate contact clarity.',
        'Bilingual navigation should stay compact.',
        'Strong imagery works best when text contrast is controlled.',
      ],
      nextProjectSlug: 'queens-salon',
    },
  },
  {
    slug: 'queens-salon',
    name: 'Queens Salon',
    category: 'Salon Web Experience',
    year: '2026',
    liveUrl: 'https://queens-salon-web.vercel.app/',
    shortDescription:
      'A salon web experience focused on brand feel, service discovery, responsive browsing, and a direct path to customer action.',
    tags: ['React', 'Vercel', 'Beauty Brand', 'Responsive UI'],
    coverImage: '/media/queens-salon-desktop.png',
    media: {
      video: '/media/queens-salon-demo.webm',
      poster: '/media/queens-salon-desktop.png',
      desktop: '/media/queens-salon-desktop.png',
      tablet: '/media/queens-salon-tablet.png',
      mobile: '/media/queens-salon-mobile.png',
    },
    caseStudy: {
      overview:
        'Queens Salon is a brand-focused website for presenting salon services in a polished, accessible, and mobile-friendly way.',
      problem:
        'Beauty service websites need to communicate style and trust while making service browsing and booking intent feel effortless.',
      goals: [
        'Create a visual identity appropriate for a salon brand.',
        'Make services easy to scan on mobile.',
        'Keep the interface lightweight and fast.',
      ],
      role: 'Built the front-end experience, responsive layouts, media sections, and production deployment.',
      stack: ['React', 'TypeScript', 'Vite', 'Vercel'],
      architecture:
        'The project uses a React landing architecture with brand sections, responsive image areas, service blocks, and deployment through Vercel.',
      features: [
        'Brand-led salon homepage.',
        'Responsive service presentation.',
        'Mobile-friendly browsing flow.',
        'Live hosted deployment.',
      ],
      designProcess:
        'The design process focused on premium beauty presentation, soft content hierarchy, and clear service discovery without making the site feel crowded.',
      challenges: [
        'Keeping brand visuals polished across narrow screens.',
        'Making service content readable without losing atmosphere.',
        'Avoiding heavy page structure for a lean site.',
      ],
      solutions: [
        'Used responsive media crops and stable section spacing.',
        'Kept service summaries concise.',
        'Built the site as focused reusable sections.',
      ],
      gallery: ['Desktop salon landing', 'Tablet brand section', 'Mobile service preview'],
      results: [
        'Delivered a live salon website.',
        'Created a polished visual surface for the brand.',
        'Prepared multi-device portfolio previews.',
      ],
      lessons: [
        'Beauty websites need visual polish and simple flows.',
        'Mobile service scanning matters more than dense content.',
        'Brand feel depends heavily on spacing and image treatment.',
      ],
      nextProjectSlug: 'maedin-decor',
    },
  },
  {
    slug: 'maedin-decor',
    name: 'Maedin Decor',
    category: 'Interior Design Website',
    year: '2026',
    liveUrl: 'https://maedin-decor.vercel.app/',
    shortDescription:
      'A decor and fit-out website with a portfolio-style presentation for interior work, service credibility, and project inquiry.',
    tags: ['React', 'Interior Design', 'Portfolio Site', 'Vercel'],
    coverImage: '/media/maedin-decor-desktop.png',
    media: {
      video: '/media/maedin-decor-demo.webm',
      poster: '/media/maedin-decor-desktop.png',
      desktop: '/media/maedin-decor-desktop.png',
      tablet: '/media/maedin-decor-tablet.png',
      mobile: '/media/maedin-decor-mobile.png',
    },
    caseStudy: {
      overview:
        'Maedin Decor presents interior design and fit-out services through a visual portfolio website built for credibility and inquiry.',
      problem:
        'Interior design websites need to show quality quickly, organize services clearly, and make it easy for visitors to take the next step.',
      goals: [
        'Show visual work with a premium first impression.',
        'Structure service content for fast evaluation.',
        'Keep portfolio media responsive across devices.',
      ],
      role: 'Implemented responsive pages, media presentation, layout polish, and live deployment.',
      stack: ['React', 'TypeScript', 'Vite', 'Vercel'],
      architecture:
        'The site is built as a responsive React experience with portfolio media, service-oriented sections, and a static deployment pipeline.',
      features: [
        'Interior design landing page.',
        'Responsive portfolio presentation.',
        'Service and inquiry-oriented content structure.',
        'Multi-device optimized previews.',
      ],
      designProcess:
        'The design approach emphasized strong imagery, calm spacing, and clear service framing so visitors can evaluate the brand quickly.',
      challenges: [
        'Making large visuals work on small screens.',
        'Maintaining a premium feel without overdecorating.',
        'Keeping project content scannable.',
      ],
      solutions: [
        'Used stable image ratios and responsive crops.',
        'Reduced UI decoration around the actual work.',
        'Organized content into clear service sections.',
      ],
      gallery: ['Desktop decor landing', 'Tablet portfolio section', 'Mobile service view'],
      results: [
        'Delivered a live interior design website.',
        'Created clean project media for the portfolio.',
        'Improved presentation across desktop, tablet, and mobile.',
      ],
      lessons: [
        'Portfolio websites should let the work carry the page.',
        'Interior design content benefits from quiet UI.',
        'Device previews reveal composition issues early.',
      ],
      nextProjectSlug: 'madan-app',
    },
  },
]

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug)

export const featuredProject = projects.find((project) => project.featured) ?? projects[0]
