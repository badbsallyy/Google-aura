
import { Template } from './types';

export const NAV_LINKS = [
  { label: 'Create', href: '/create' },
  { label: 'Templates', href: '/templates' },
  { label: 'Components', href: '/components' },
  { label: 'Assets', href: '/assets' },
  { label: 'Learn', href: '/learn' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Changelog', href: '/changelog' },
];

export const MOCK_TEMPLATES: Template[] = [
  {
    id: '1',
    title: 'Social Media Agency Landing Page Template',
    author: { name: 'François Savard', initials: 'FS' },
    remixes: '1.7k',
    likes: '420',
    thumbnail: 'https://picsum.photos/seed/agency/800/600',
  },
  {
    id: '2',
    title: 'Spectra AR Hardware Landing Page Template',
    author: { name: 'Meng To', initials: 'MT' },
    remixes: '1.0k',
    likes: '310',
    price: '$39',
    thumbnail: 'https://picsum.photos/seed/hardware/800/600',
  },
  {
    id: '3',
    title: 'Interstellar Logistics Landing Page Template',
    author: { name: 'Sourany Phomhome', initials: 'SP' },
    remixes: '872',
    likes: '190',
    isPro: true,
    thumbnail: 'https://picsum.photos/seed/space/800/600',
  },
  {
    id: '4',
    title: 'Photography Portfolio Landing Page Template',
    author: { name: 'Aksonvady Phomh...', initials: 'AP' },
    remixes: '469',
    likes: '150',
    isPro: true,
    thumbnail: 'https://picsum.photos/seed/photo/800/600',
  },
  {
    id: '5',
    title: 'Luxury Spa Landing Page Template',
    author: { name: 'Dara To', initials: 'DT' },
    remixes: '499',
    likes: '120',
    thumbnail: 'https://picsum.photos/seed/spa/800/600',
  },
  {
    id: '6',
    title: 'Design Agency Multi Pages Template',
    author: { name: 'François Savard', initials: 'FS' },
    remixes: '2.9k',
    likes: '800',
    thumbnail: 'https://picsum.photos/seed/design/800/600',
  }
];

export const COMPONENT_CATEGORIES = [
  'Hero Section', 'Button', 'Card', 'Background', 'Header', 'Logo', 'Feature', 'Pricing', 'Testimonial', 'Footer', 'Form', 'Heading'
];
