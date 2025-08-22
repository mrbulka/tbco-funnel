import { createApp } from 'vue';
import type { RouteLocationNormalized } from 'vue-router';
import App from './App.vue';
import router from './router/index';
import './style.css';

const app = createApp(App);

// Update document title and description from route meta
router.afterEach((to: RouteLocationNormalized) => {
  const title = (to.meta?.title as string) || 'TBCO Investment Group';
  const desc =
    (to.meta?.description as string) ||
    'A community of expert traders navigating global markets with precision and insight.';
  document.title = title;

  const descTag =
    document.querySelector('meta[name="description"]') ||
    (() => {
      const el = document.createElement('meta');
      el.setAttribute('name', 'description');
      document.head.appendChild(el);
      return el;
    })();
  descTag.setAttribute('content', desc);
});

app.use(router).mount('#app');
