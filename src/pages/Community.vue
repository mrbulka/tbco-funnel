<script setup lang="ts">
import { computed } from 'vue';
import { useDiscordWidget } from '@/composables/useDiscordWidget';
import discordIconUrl from '@/assets/discord.svg';

const discordUrl = 'https://discord.gg/nhPwQN8g';

// Live online presence for social proof (requires Discord Server Widget enabled)
const { presenceCount } = useDiscordWidget();
const onlineNow = computed(() => {
  const n = presenceCount.value;
  return typeof n === 'number' && n > 0 ? `${n.toLocaleString()} online now` : null;
});

type Row = { feature: string; free: boolean; premium: boolean };
const rows: Row[] = [
  { feature: 'General chat and newcomer help', free: true, premium: true },
  { feature: 'Market news and daily watchlists', free: true, premium: true },
  { feature: 'Beginner education and FAQs', free: true, premium: true },
  { feature: 'Community guidelines and announcements', free: true, premium: true },
  { feature: 'Real-time trading signals and setups', free: false, premium: true },
  { feature: 'Strategy rooms: futures, equities, crypto', free: false, premium: true },
  { feature: 'Q&A with mentors and member highlights', free: false, premium: true },
  { feature: 'Recorded reviews, weekly recaps, webinars', free: false, premium: true },
];
</script>

<template>
  <section class="section community-hero">
    <div class="container">
      <div class="card center">
        <h1 class="m0">Community</h1>
        <p class="mt1 dim">
          Upgrade anytime to unlock premium tools and stay ahead of the market.
        </p>
        <div class="mt2 btn-with-discord">
          <a :href="discordUrl" target="_blank" rel="noopener" class="btn btn-primary">
            <span>Join the Community</span>
          </a>
          <img :src="discordIconUrl" alt="Discord" class="discord-outside" />
        </div>
        <p v-if="onlineNow" class="helper mt1">{{ onlineNow }}</p>
      </div>

      <!-- Free vs Premium comparison -->
      <div class="comparison card mt4">
        <div class="grid-head">
          <div class="col feature-col"><strong>Feature</strong></div>
          <div class="col"><strong>Free</strong></div>
          <div class="col"><strong>Premium</strong></div>
        </div>
        <div class="grid-body">
          <div v-for="r in rows" :key="r.feature" class="grid-row">
            <div class="col feature-col">{{ r.feature }}</div>
            <div class="col check-col" :aria-label="r.free ? 'Included' : 'Not included'">
              <span v-if="r.free" class="check">✓</span>
              <span v-else class="dash">—</span>
            </div>
            <div class="col check-col" :aria-label="r.premium ? 'Included' : 'Not included'">
              <span v-if="r.premium" class="check">✓</span>
              <span v-else class="dash">—</span>
            </div>
          </div>
        </div>
        <div class="center mt3">
          <div class="btn-with-discord">
            <a :href="discordUrl" target="_blank" rel="noopener" class="btn btn-primary">
              <span>Join the Community</span>
            </a>
            <img :src="discordIconUrl" alt="Discord" class="discord-outside" />
          </div>
        </div>
      </div>

      <!-- Newsletter opt-in -->
      <div class="card mt4">
        <h2 class="m0">Newsletter Signup</h2>
        <p class="mt1 dim">Get market insights, strategy notes, and community updates.</p>

        <form class="mt2" @submit.prevent>
          <div class="form-grid two">
            <div>
              <label for="c-email" class="label">Email</label>
              <input id="c-email" type="email" class="input" placeholder="you@example.com" />
            </div>
            <div>
              <label for="c-name" class="label">Name (optional)</label>
              <input id="c-name" type="text" class="input" placeholder="Your name" />
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
            <button type="submit" class="btn btn-primary">
              <img :src="discordIconUrl" alt="" width="18" height="18" style="display:none" />
              Subscribe
            </button>
          </div>

          <p class="helper mt2">By subscribing you agree to our Privacy Policy. Placeholder link.</p>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Encouraging backdrop */
.community-hero {
  position: relative;
  overflow: hidden;
}
.community-hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(900px 300px at 15% -10%, rgba(16,185,129,0.18), transparent 60%),
    radial-gradient(900px 300px at 85% -6%, rgba(16,185,129,0.10), transparent 60%);
  pointer-events: none;
}

/* Comparison table */
.comparison {
  padding: 0; /* use inner rows to space */
}

.grid-head, .grid-row {
  display: grid;
  grid-template-columns: minmax(200px, 1.2fr) 0.5fr 0.5fr;
  gap: 0.5rem;
  align-items: center;
}

.grid-head {
  padding: 0.9rem 1rem;
  border-bottom: 1px solid var(--border);
  background: rgba(255,255,255,0.02);
  border-top-left-radius: var(--radius);
  border-top-right-radius: var(--radius);
}

.grid-body .grid-row {
  padding: 0.8rem 1rem;
  border-bottom: 1px solid var(--border);
}

.grid-body .grid-row:last-child {
  border-bottom-left-radius: var(--radius);
  border-bottom-right-radius: var(--radius);
  border-bottom: none;
}

.col {
  display: flex;
  align-items: center;
}

.feature-col {
  color: var(--text);
}

.check-col {
  justify-content: center;
}

.check {
  color: var(--accent);
  font-weight: 700;
}
.dash {
  color: var(--muted);
}

@media (max-width: 800px) {
  .grid-head, .grid-row {
    grid-template-columns: 1fr auto auto;
  }
}
/* Button + Discord icon outside-right */
.btn-with-discord {
  display: inline-flex;
  align-items: center;
}
.discord-outside {
  margin-left: 0.5rem; /* space to the right of the button */
  transform: translateX(2px); /* slightly further right */
  pointer-events: none; /* decorative; don't capture clicks */
  opacity: 0.95;
  width: 32px; /* larger mascot */
  height: auto; /* preserve aspect ratio */
  filter: invert(1) brightness(2); /* tint image to white */
}

</style>
