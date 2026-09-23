export type WhyZimamReason = {
  id: string
  title: string
  description: string
}

export const whyZimamReasons: readonly WhyZimamReason[] = [
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
]
