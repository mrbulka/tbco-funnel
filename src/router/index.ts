import { createRouter, createWebHistory, RouteRecordRaw, RouteLocationNormalized } from 'vue-router';

// Lazy-loaded pages
const Home = () => import('../pages/Home.vue');
const Community = () => import('../pages/Community.vue');
const Resources = () => import('../pages/Resources.vue');
const Contact = () => import('../pages/Contact.vue');
const Privacy = () => import('../pages/Privacy.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'TBCO — Empowering Traders. Building Wealth.',
      description:
        'Join 1,000+ traders at TBCO Investment Group. Real-time signals, collaborative discussions, financial education, and premium tools.',
    },
  },
  {
    path: '/community',
    name: 'Community',
    component: Community,
    meta: {
      title: 'TBCO Community — Signals, Strategies, Q&A, Networking',
      description:
        'Explore TBCO’s community spaces: signals, strategies, Q&A, and networking. Join our Discord to collaborate with expert traders.',
    },
  },
  {
    path: '/upgrade',
    redirect: '/community',
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy,
    meta: {
      title: 'Privacy Policy — TBCO Investment Group',
      description:
        'Learn how TBCO collects, uses, and protects your information across our website, newsletter, and Discord community.',
    },
  },
  {
    path: '/resources',
    name: 'Resources',
    component: Resources,
    meta: {
      title: 'TBCO Resources — Guides and Newsletter',
      description:
        'Self-study guides for beginner to advanced traders plus newsletter signup and archive placeholders to keep you informed.',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact TBCO',
      description:
        'Get in touch with TBCO Investment Group. Contact form and social links to connect with our team.',
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to: RouteLocationNormalized, _from: RouteLocationNormalized, saved) {
    if (saved) return saved;
    return { top: 0 };
  },
});

export default router;
