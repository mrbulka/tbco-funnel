import { createRouter, createWebHistory, RouteRecordRaw, RouteLocationNormalized } from 'vue-router';

// Lazy-loaded pages
const Home = () => import('../pages/Home.vue');
const Community = () => import('../pages/Community.vue');
const Upgrade = () => import('../pages/Upgrade.vue');
const Resources = () => import('../pages/Resources.vue');
const Contact = () => import('../pages/Contact.vue');

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
    name: 'Upgrade',
    component: Upgrade,
    meta: {
      title: 'XcelAlgo Upgrade — Precision Trading Tools',
      description:
        'Unlock XcelAlgo: precision trading signals, overlays, and forecasts. Designed to help identify high-probability entries and exits.',
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
