import type { LandingCopy } from './copyTypes'

export const enCopy: LandingCopy = {
  content: {
    brand: 'Zimam',
    brandMark: 'Zi',
    brandSuffix: 'mam',
    eyebrow: 'Build. Ship. Scale.',
    headlineLine1: 'Software that grows',
    headlineLine2: 'with your business.',
    support:
      'Zimam builds SaaS platforms, desktop and mobile apps, and upgrades existing websites with the features your customers need.',
    primaryCta: 'Start a project',
    secondaryCta: 'Explore offerings',
    languageLabel: 'English',
    scrollHint: 'Scroll to explore',
    navLinks: [
      { label: 'Home', href: '#top' },
      { label: 'Offerings', href: '#offerings' },
      { label: 'Projects', href: '#projects' },
      { label: 'Why Zimam', href: '#why-zimam' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact', href: '#contact' },
    ],
    navOutlineLink: { label: 'Contact', href: '#contact' },
    heroFeatures: [
      'SaaS platforms',
      'Desktop apps',
      'Mobile apps',
      'Website upgrades',
    ],
    offeringsTitle: 'What we build',
    offeringsOutlineTitle: 'Built for scale',
    offeringsSupport:
      'End-to-end product delivery across SaaS, desktop, mobile, and website enhancement.',
    whyZimamTitle: 'Why Zimam',
    whyZimamSupport:
      'A focused partner for shipping software that is clear, durable, and ready to grow with your business.',
    caseStudiesTitle: 'Case studies / Projects',
    caseStudiesSupport:
      'Selected work across SaaS, desktop, mobile, and website upgrades — from concept to shipped product.',
    faqTitle: 'Frequently asked questions',
    faqSupport: 'Quick answers about how we build, deliver, and support your product.',
    contactTitle: 'Let’s build together',
    contactSupport:
      'Tell us about your product, app, or website — we’ll help turn it into a shipped experience.',
    contactEmail: 'mailto:hello@zimam.com',
    contactFormTitle: 'Send a message',
    contactFormSubmit: 'Send message',
    contactFormSending: 'Sending…',
    contactFormSuccess:
      'Thanks — your email client should open with the message ready to send.',
    contactFormError: 'Something went wrong. Please try again or email us directly.',
    contactFieldName: 'Name',
    contactFieldEmail: 'Email',
    contactFieldPhone: 'Phone',
    contactFieldService: 'Service',
    contactFieldMessage: 'Project details',
    footerDescription:
      'Zimam builds SaaS platforms, desktop and mobile apps, and upgrades existing websites with the features your customers need.',
    footerFollowLabel: 'Follow us',
    footerWatermark: 'zimam',
    footerSocial: [
      { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/' },
      { id: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/' },
      { id: 'tiktok', label: 'TikTok', href: 'https://www.tiktok.com/' },
      { id: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/' },
    ],
    footerCopyright: 'All rights reserved.',
  },
  faqItems: [
    {
      id: 'what-you-build',
      question: 'What does Zimam build?',
      answer:
        'We build SaaS platforms, desktop applications, mobile apps, and we enhance existing websites with new features, better UX, and performance upgrades.',
    },
    {
      id: 'start-project',
      question: 'How do we start a project together?',
      answer:
        'Share your idea or current product challenges with us. We clarify goals, scope, and timeline, then propose a clear delivery plan before development begins.',
    },
    {
      id: 'timeline',
      question: 'How long does a typical project take?',
      answer:
        'Timelines depend on scope. A focused website enhancement can take a few weeks, while a full SaaS or mobile product usually needs a phased roadmap over several months.',
    },
    {
      id: 'ownership',
      question: 'Who owns the code and product?',
      answer:
        'You do. After delivery, you own the product, source code, and assets we produce for your project, unless a different arrangement is agreed in writing.',
    },
    {
      id: 'existing-website',
      question: 'Can you improve an existing website or app?',
      answer:
        'Yes. We can audit what you already have, then add features, redesign key flows, improve performance, and integrate tools your business already uses.',
    },
    {
      id: 'support',
      question: 'Do you offer support after launch?',
      answer:
        'Yes. We can provide ongoing maintenance, feature iterations, and technical support so your product keeps improving after it goes live.',
    },
  ],
  offeringKindLabels: {
    saas: 'SaaS',
    desktop: 'Desktop',
    mobile: 'Mobile',
    website: 'Website',
  },
  offerings: [
    {
      id: 'saas',
      kind: 'saas',
      title: 'SaaS Products',
      summary:
        'We design and build scalable software-as-a-service platforms from idea to production.',
      highlights: [
        'Multi-tenant architecture',
        'Subscription-ready product foundations',
        'Secure, cloud-native delivery',
      ],
    },
    {
      id: 'desktop',
      kind: 'desktop',
      title: 'Desktop Applications',
      summary:
        'We craft reliable desktop applications with polished UX for Windows, macOS, and cross-platform needs.',
      highlights: [
        'Native-feel experiences',
        'Offline-capable workflows',
        'Performance-focused engineering',
      ],
    },
    {
      id: 'mobile',
      kind: 'mobile',
      title: 'Mobile Applications',
      summary:
        'We build mobile apps that feel fast, clear, and ready for App Store and Google Play.',
      highlights: [
        'iOS and Android delivery',
        'Smooth, intuitive interfaces',
        'Secure APIs and push-ready foundations',
      ],
    },
    {
      id: 'website',
      kind: 'website',
      title: 'Website Enhancement',
      summary:
        'We improve existing customer websites — performance, UX, and new features that drive results.',
      highlights: [
        'Feature additions and redesigns',
        'Performance and conversion upgrades',
        'Integrations with your tools and workflows',
      ],
    },
  ],
  whyZimamReasons: [
    {
      id: 'product-first',
      title: 'Product-first mindset',
      description:
        'We start from the outcome your users need — then shape architecture, UX, and delivery around it.',
    },
    {
      id: 'end-to-end',
      title: 'End-to-end ownership',
      description:
        'From discovery to launch and iteration, one team stays accountable so nothing falls between handoffs.',
    },
    {
      id: 'built-to-scale',
      title: 'Built to scale',
      description:
        'Clean foundations, modern stacks, and performance-minded engineering so your product grows without rewrites.',
    },
    {
      id: 'clear-collaboration',
      title: 'Clear collaboration',
      description:
        'Tight feedback loops, transparent progress, and decisions you can follow — no black-box delivery.',
    },
  ],
  caseStudies: [
    {
      id: 'saas-ops',
      category: 'SaaS',
      title: 'Operations platform for growing teams',
      summary:
        'Designed and shipped a multi-tenant SaaS product with role-based access, billing-ready foundations, and a clear admin experience.',
      outcome: 'MVP to production in one release cycle',
    },
    {
      id: 'desktop-tools',
      category: 'Desktop',
      title: 'Cross-platform desktop workflow tool',
      summary:
        'Built a desktop application focused on speed and offline reliability for daily operational workflows.',
      outcome: 'Faster day-to-day task completion',
    },
    {
      id: 'mobile-commerce',
      category: 'Mobile',
      title: 'Customer mobile app with live updates',
      summary:
        'Delivered an iOS and Android app with polished UX, secure APIs, and push-ready product foundations.',
      outcome: 'Higher engagement after launch',
    },
    {
      id: 'website-upgrade',
      category: 'Website',
      title: 'Website modernization and feature upgrades',
      summary:
        'Enhanced an existing customer website with performance work, UX improvements, and new conversion-focused features.',
      outcome: 'Stronger conversion and page speed',
    },
  ],
  contactServiceOptions: [
    { value: 'saas', label: 'SaaS platform' },
    { value: 'desktop', label: 'Desktop application' },
    { value: 'mobile', label: 'Mobile application' },
    { value: 'website', label: 'Website enhancement' },
    { value: 'other', label: 'Something else' },
  ],
  contactFormMessages: {
    name: 'Please enter your name',
    email: 'Please enter a valid email',
    phone: 'Please enter a valid phone number',
    service: 'Please select a service',
    message: 'Tell us a bit more (at least 10 characters)',
  },
}
