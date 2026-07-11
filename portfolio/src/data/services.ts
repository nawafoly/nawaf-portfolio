import type { Service } from '../types'

export const services: Service[] = [
  {
    id: 'web-apps',
    title: 'Web Applications',
    summary:
      'Focused React applications with clean routing, reusable components, and maintainable data flows.',
    deliverables: ['Product screens', 'Admin dashboards', 'Responsive UI', 'Frontend architecture'],
  },
  {
    id: 'mobile-apps',
    title: 'Mobile Workflows',
    summary:
      'Mobile-first flows for capture, review, and field operations with practical state handling.',
    deliverables: ['Mobile screens', 'Form flows', 'Upload states', 'Sync behavior'],
  },
  {
    id: 'systems',
    title: 'Backend and Systems',
    summary:
      'API design, data models, authentication flows, and deployment-ready system foundations.',
    deliverables: ['API contracts', 'Database structure', 'Auth flow', 'Deployment setup'],
  },
  {
    id: 'ui-engineering',
    title: 'UI Engineering',
    summary:
      'Interface systems that translate visual direction into reliable, accessible, production-ready components.',
    deliverables: ['Design tokens', 'Component systems', 'Motion rules', 'Accessibility pass'],
  },
]
