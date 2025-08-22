<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref, onMounted, onBeforeUnmount } from 'vue';
import tbcoLogo from './assets/tbco_logo.jpeg';

const mobileMenuOpen = ref(false);
function toggleMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value;
}

const headerRef = ref<HTMLElement | null>(null);

function updateHeaderHeight() {
  const h = headerRef.value?.offsetHeight ?? 0;
  document.documentElement.style.setProperty('--mobile-header-h', `${h}px`);
}

onMounted(() => {
  updateHeaderHeight();
  window.addEventListener('resize', updateHeaderHeight);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateHeaderHeight);
});
</script>

<template>
  <div class="site">
    <header class="site-header" ref="headerRef">
      <div class="container header-inner">
        <div class="brand">
          <img :src="tbcoLogo" alt="TBCO Investment Group logo" class="brand-logo" />
        </div>

        <button
          class="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          :aria-expanded="mobileMenuOpen ? 'true' : 'false'"
          aria-controls="main-menu"
          @click="toggleMenu"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>

        <nav id="main-menu" :class="['main-nav', { open: mobileMenuOpen }]" aria-label="Main">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/community">Community</RouterLink>
          <RouterLink to="/upgrade">Xcel Algo Upgrade</RouterLink>
          <RouterLink to="/resources">Resources</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </nav>
      </div>
    </header>

    <main class="site-main">
      <RouterView />
    </main>

    <footer class="site-footer">
      <div class="container footer-inner">
        <nav class="footer-nav" aria-label="Footer">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/community">Community</RouterLink>
          <RouterLink to="/upgrade">Xcel Algo Upgrade</RouterLink>
          <RouterLink to="/resources">Resources</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
        </nav>
        <p class="copyright">© 2025 The Big Cloud Organization.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.site {
  min-height: 100vh;
  display: grid;
  grid-template-rows: auto 1fr auto;
}

/* Header */
.site-header {
  background: #00040c;
  border-bottom: 1px solid #262626;
  position: relative;
  z-index: 10;
}
.container {
  margin: 0 auto;
  max-width: 1120px;
  padding: 0 1rem;
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.brand-logo {
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
}
.brand-text {
  display: grid;
  gap: 0.25rem;
}
.brand-title {
  margin: 0;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  letter-spacing: 0.2px;
  font-size: 1.4rem;
  line-height: 1.1;
}
.brand-tagline {
  margin: 0;
  color: #b8b8b8;
  font-size: 0.9rem;
}

/* Nav */
.main-nav, .footer-nav {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}
.main-nav a, .footer-nav a {
  color: #eaeaea;
  text-decoration: none;
  padding: 0.4rem 0.5rem;
  border-radius: 6px;
}
.main-nav a.router-link-active {
  color: #0fd16a;
}

/* Main */
.site-main {
  background: #0b0b0b;
  color: #f2f2f2;
}

/* Footer */
.site-footer {
  background: #0b0b0b;
  border-top: 1px solid #262626;
}
.footer-inner {
  display: grid;
  gap: 0.75rem;
  padding: 1.25rem 0;
  justify-items: center;
}
.copyright {
  margin: 0;
  color: #9e9e9e;
  font-size: 0.9rem;
}

/* Mobile menu toggle (hidden on desktop) */
.menu-toggle {
  display: none;
  background: transparent;
  border: none;
  padding: 0.5rem;
  margin-left: auto;
  cursor: pointer;
}
.menu-toggle .bar {
  display: block;
  width: 22px;
  height: 2px;
  background: #eaeaea;
  border-radius: 2px;
}
.menu-toggle .bar + .bar {
  margin-top: 5px;
}

@media (max-width: 720px) {
  .header-inner {
    align-items: center;
    flex-direction: row;
  }
  .brand-logo {
    height: 56px;
  }
  .brand-title {
    font-size: 1.2rem;
  }
  .menu-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 4px;
  }
  .menu-toggle .bar + .bar {
    margin-top: 0;
  }
  .main-nav {
    display: none;
    position: fixed;
    top: var(--mobile-header-h, 64px);
    left: 0;
    right: 0;
    width: 100%;
    background: #00040c;
    border-bottom: 1px solid #262626;
    box-shadow: 0 8px 16px rgba(0,0,0,0.4);
    z-index: 20;
  }
  .main-nav.open {
    display: grid;
    gap: 0.5rem;
    padding: 0.5rem 0;
  }
  .main-nav a {
    display: block;
    padding: 0.75rem 1rem;
  }
}
</style>
