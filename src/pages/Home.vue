<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import CandlesLite from '@/components/CandlesLite.vue';
import { useDiscordWidget } from '@/composables/useDiscordWidget';

const discordUrl = 'https://discord.gg/nhPwQN8g';

// Discord live counts (widget must be enabled on the server)
const { presenceCount, approxMemberCount } = useDiscordWidget();
const displayMemberCount = computed(() => {
  const n = approxMemberCount.value ?? presenceCount.value;
  if (typeof n === 'number' && n > 0) return n.toLocaleString() + '+';
  return '1,000+';
});

// Daily PnL strip (manual JSON updated in public/daily.json)
type Daily = { date: string; totalPnl: string; topSymbols?: string[]; notes?: string };
const daily = ref<Daily | null>(null);

onMounted(async () => {
  try {
    const res = await fetch('/daily.json', { cache: 'no-store' });
    if (res.ok) daily.value = (await res.json()) as Daily;
  } catch {
    // ignore; keep null
  }
});

// Import all testimonial images from src/assets (eagerly) and map to URLs
const modules = import.meta.glob('/src/assets/testimonial_*.png', { eager: true, import: 'default' });
const testimonialImages = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }))
  .map(([, url]) => url as string);
</script>

<template>
  <!-- Hero -->
  <section class="hero">
    <div class="inner">
      <div class="panel">
        <h1>Empowering Traders. <br />Building Wealth.</h1>
        <p class="hero-subtitle">
          AI-driven signals, insights, and education to help you trade with confidence.
        </p>
        <div class="cta">
          <a href="#about" class="btn btn-outline">Learn More</a>
          <a :href="discordUrl" target="_blank" rel="noopener" class="btn btn-primary">
            Join the Community
          </a>
        </div>
      </div>
    </div>
  </section>

  <div class="container section-tight">
    <p id="about" class="banner banner-lg">
      Join <strong>1000+</strong> Traders Generating <strong>$1M+ Daily Volume</strong>
    </p>
  </div>

  <!-- Who we are / Mission -->
  <section class="section">
    <div class="container">
      <!-- Row 1 (text left, graphic right) -->
      <div class="feature-row">
        <div class="feature-text card">
          <h2>Who We Are</h2>
          <p class="mt2">
            TBCO Investment Group is a community of active traders across equities, options, futures, and crypto.
            We bring together beginners and seasoned professionals in a collaborative space built to share strategies,
            refine skills, and win in the markets together.
          </p>
        </div>
        <div class="feature-graphic card" aria-hidden="true">
          <CandlesLite :height="200" />
        </div>
      </div>

      <!-- Row 2 (graphic left, text right) -->
      <div class="feature-row right mt2">
        <div class="feature-text card">
          <h2>Our Mission</h2>
          <p class="mt2">
            We empower traders to act with confidence in fast-moving markets. Through advanced tools, expert insights,
            and AI-driven strategies, we give our members the edge they need to adapt, optimize, and grow.
          </p>
        </div>
        <div class="feature-graphic card" aria-hidden="true">
          <CandlesLite :height="200" />
        </div>
      </div>
    </div>
  </section>

  <!-- Benefits -->
  <section class="section">
    <div class="container grid grid-3">
      <div class="card">
        <div class="icon-clipart" aria-hidden="true">
          <!-- Bell / signal -->
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M12 2a6 6 0 0 0-6 6v3.1c0 .6-.24 1.18-.66 1.6L4 14h16l-1.34-1.3a2.25 2.25 0 0 1-.66-1.6V8a6 6 0 0 0-6-6Zm0 20a3 3 0 0 0 3-3H9a3 3 0 0 0 3 3Z"/>
          </svg>
        </div>
        <h3>Real Time Signals</h3>
        <p class="mt2">
          Get instant market alerts: buy/sell calls, key levels, and strategies—delivered live.
        </p>
      </div>
      <div class="card">
        <div class="icon-clipart" aria-hidden="true">
          <!-- Chat bubble -->
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M20 2H4a2 2 0 0 0-2 2v14l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z"/>
          </svg>
        </div>
        <h3>Collaborative Discussions</h3>
        <p class="mt2">
          Trade smarter with expert insights, Q&A, and strategy talk inside a supportive community.
        </p>
      </div>
      <div class="card">
        <div class="icon-clipart" aria-hidden="true">
          <!-- Graduation cap -->
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
            <path d="M12 3 1 8l11 5 9-4.09V17h2V8L12 3Zm0 14L5 13.18V17l7 4 7-4v-3.82L12 17Z"/>
          </svg>
        </div>
        <h3>Financial Education</h3>
        <p class="mt2">
          Access tutorials, webinars, and reports—structured for beginners and advanced traders alike.
        </p>
      </div>
    </div>
  </section>

  <!-- Community Preview / Social Proof -->
  <section class="section">
    <div class="container">
      <div class="card center">
        <h2 class="m0">Join 1000+ Traders</h2>
        <p class="mt2 dim">
          Step into a dynamic trading community where real-time signals, expert guidance, and collaborative learning
          come together. Whether you’re a seasoned trader or just starting, our community empowers you to trade smarter
          and grow faster.
        </p>
        <div class="mt3">
          <a :href="discordUrl" target="_blank" rel="noopener" class="btn btn-primary">
            Join Now — See Today’s Winning Trades
          </a>
        </div>
      </div>

      <!-- Testimonials -->
      <div class="testimonial-gallery mt3">
        <img
          v-for="(src, i) in testimonialImages"
          :key="i"
          :src="src"
          class="testimonial-img"
          alt="Community testimonial"
          loading="lazy"
        />
      </div>
    </div>
  </section>

  <!-- Newsletter -->
  <section class="section">
    <div class="container">
      <div class="card">
        <h2 class="m0">Newsletter Signup</h2>
        <p class="mt1 dim">Get market insights, strategy notes, and community updates.</p>

        <form class="mt2" @submit.prevent>
          <div class="form-grid two">
            <div>
              <label for="email" class="label">Email</label>
              <input id="email" type="email" class="input" placeholder="you@example.com" />
            </div>
            <div>
              <label for="name" class="label">Name (optional)</label>
              <input id="name" type="text" class="input" placeholder="Your name" />
            </div>
          </div>

          <div class="mt2">
            <label style="display: flex; gap: 0.5rem; align-items: flex-start;">
              <input type="checkbox" />
              <span class="helper">
                I agree to receive periodic emails from TBCO Investment Group. I understand I can unsubscribe at any
                time. Content is for educational purposes only and does not constitute financial advice.
              </span>
            </label>
          </div>

          <div class="mt3">
            <button type="submit" class="btn btn-primary">Subscribe</button>
          </div>

          <p class="helper mt2">By subscribing you agree to our Privacy Policy. Placeholder link.</p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Subtle backdrop for hero (banner-like depth) */
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(1200px 380px at 12% -10%, rgba(16, 185, 129, 0.20), transparent 60%),
    radial-gradient(1000px 340px at 88% -6%, rgba(16, 185, 129, 0.12), transparent 60%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(11, 11, 11, 1));
  pointer-events: none;
}

/* Hero subtitle */
.hero .hero-subtitle {
  margin-top: 0.5rem;
  font-size: clamp(1rem, 2.2vw, 1.25rem);
  color: var(--muted);
}

/* Alternating feature rows */
.feature-row {
  display: grid;
  gap: 1rem;
}

/* desktop layout */
@media (min-width: 900px) {
  .feature-row {
    grid-template-columns: 1.2fr 1fr;
    align-items: center;
  }
  .feature-row.right .feature-text {
    order: 2;
  }
  .feature-row.right .feature-graphic {
    order: 1;
  }
}

/* Graphic panel */
.feature-graphic {
  position: relative;
  overflow: hidden;
  background:
    radial-gradient(360px 220px at 70% 30%, rgba(16, 185, 129, 0.15), transparent 70%),
    linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.0));
}

/* SVG sizing */
.candles {
  display: block;
  width: 100%;
  height: auto;
  filter: drop-shadow(0 6px 18px rgba(16, 185, 129, 0.12));
}

/* Soft inner vignette */
.feature-graphic::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: inherit;
  box-shadow: inset 0 0 60px rgba(0, 0, 0, 0.35);
  pointer-events: none;
}

/* Remove borders on feature cards */
.feature-text.card,
.feature-graphic.card {
  border: none;
  box-shadow: none;
}

/* Larger banner emphasis */
.banner.banner-lg {
  font-size: clamp(1rem, 2vw, 1.15rem);
  padding: 1.25rem 1.5rem;
}

/* Benefit clipart styling */
.icon-clipart {
  color: var(--accent);
  display: inline-flex;
  width: 32px;
  height: 32px;
  align-items: center;
  justify-content: center;
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid var(--border);
  border-radius: 8px;
  margin-bottom: 0.5rem;
}

/* Testimonials spacing */
.testimonials .card p {
  color: var(--text);
}
/* Hero background image and bottom blend */
.hero {
  background: url('@/assets/stocks-background.jpeg') center/cover no-repeat;
  background-color: var(--bg);
}

.hero::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(11, 11, 11, 0) 60%, var(--bg) 100%);
  pointer-events: none;
}
/* Responsive testimonial gallery */
.testimonial-gallery {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

@media (min-width: 600px) {
  .testimonial-gallery {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
@media (min-width: 900px) {
  .testimonial-gallery {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
}

.testimonial-img {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
}
</style>
