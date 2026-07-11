import type { Testimonial } from '../types'

export const testimonialsConfig: { enabled: boolean; items: Testimonial[] } = {
  enabled: false,
  items: [
    {
      id: '1',
      name: 'Client Name',
      role: 'Role at Company',
      quote: 'Clear communication, strong execution, and a polished final product.',
      avatar: '',
    },
  ],
}
