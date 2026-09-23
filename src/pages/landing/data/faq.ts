export type FaqItem = {
  id: string
  question: string
  answer: string
}

export const faqItems: readonly FaqItem[] = [
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
]
