<script setup lang="ts">
const guides = [
  {
    title: 'Beginner',
    items: [
      'Trading Foundations: Risk, Reward, and Position Sizing',
      'Chart Basics: Candlesticks, Trends, Support/Resistance',
      'Discipline and Journaling: Building Good Habits'
    ]
  },
  {
    title: 'Intermediate',
    items: [
      'Trade Planning: Entries, Invalidation, and Targets',
      'Overlays & Confluence: Trendlines, Zones, and Momentum',
      'Managing Trades: Scaling, Break-even, and Partials'
    ]
  },
  {
    title: 'Advanced',
    items: [
      'Systematizing Your Edge: Data and Iteration',
      'Multi-timeframe Forecasting and Scenario Trees',
      'Psychology Under Pressure and Post-Analysis'
    ]
  }
];

const levelDescriptions: Record<string, string> = {
  Beginner: 'Build the fundamentals every trader needs before scaling up.',
  Intermediate: 'Level up your execution and refine your strategies.',
  Advanced: 'Systematize your edge and think like a professional trader.'
};

function levelClass(title: string) {
  switch (title) {
    case 'Beginner':
      return 'level-beginner';
    case 'Intermediate':
      return 'level-intermediate';
    case 'Advanced':
      return 'level-advanced';
    default:
      return '';
  }
}
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="card center">
        <h1 class="m0">Resources</h1>
        <p class="mt1 dim">
          Self‑study guides and the TBCO Newsletter to help you level up with structured, actionable content.
        </p>
      </div>

      <!-- Guides -->
      <div class="grid grid-3 mt4">
        <div
          v-for="g in guides"
          :key="g.title"
          :class="['card', 'level-card', levelClass(g.title)]"
        >
          <h3 class="level-title">{{ g.title }}</h3>
          <p class="level-desc mt1">
            {{ levelDescriptions[g.title] }}
          </p>
          <ul class="mt2 dim">
            <li v-for="it in g.items" :key="it">• {{ it }}</li>
          </ul>
          <a href="#" class="btn btn-outline mt2">View Outline</a>
        </div>
      </div>

      <!-- Newsletter -->
      <div class="card mt4">
        <h2 class="m0">Stay Ahead of the Market — Join Our Free Newsletter (Coming Soon)</h2>
        <p class="mt1 dim">Be the first to receive our launch issues</p>
        <p class="mt1 dim">
          Subscribe for market insights, strategy notes, and community updates. An archive section will appear here as entries are published.
        </p>

        <form class="mt2" @submit.prevent>
          <div class="form-grid two">
            <div>
              <label for="r-email" class="label">Email</label>
              <input id="r-email" type="email" class="input" placeholder="you@example.com" />
            </div>
            <div>
              <label for="r-name" class="label">Name (optional)</label>
              <input id="r-name" type="text" class="input" placeholder="Your name" />
            </div>
          </div>

          <div class="mt2">
            <label style="display: flex; gap: 0.5rem; align-items: flex-start;">
              <input type="checkbox" />
              <span class="helper">
                I agree to receive periodic emails from TBCO Investment Group. I understand I can unsubscribe at any time.
                Content is for educational purposes only and not financial advice.
              </span>
            </label>
          </div>

          <button class="btn btn-primary mt3" type="submit">Subscribe</button>
          <p class="helper mt2">By subscribing you agree to our Privacy Policy. Placeholder link.</p>
        </form>

        <!-- Upcoming issues -->
        <div class="mt3">
          <h3 class="m0">Upcoming Issues</h3>
          <ul class="mt1 dim">
            <li>“5 Mistakes New Traders Make (and How to Avoid Them)” — Coming Soon</li>
            <li>“Macro Moves That Set the Tone for the Week” — Coming Soon</li>
            <li>“The Psychology of Scaling Into Winners” — Coming Soon</li>
          </ul>
        </div>

        <!-- Archive placeholder -->
      </div>
    </div>
  </section>
</template>

<style scoped>
.level-card {
  border-color: var(--border);
  transition: border-color 0.2s, box-shadow 0.2s;
}
.level-card:hover {
  box-shadow: 0 0 0 1px rgba(255,255,255,0.06) inset;
}
.level-title {
  margin: 0;
}
.level-desc {
  color: var(--muted);
}

/* Color hierarchy by level */
.level-beginner {
  border-color: var(--level-beginner);
}
.level-beginner .level-title {
  color: var(--level-beginner);
}

.level-intermediate {
  border-color: var(--level-intermediate);
}
.level-intermediate .level-title {
  color: var(--level-intermediate);
}

.level-advanced {
  border-color: var(--level-advanced);
}
.level-advanced .level-title {
  color: var(--level-advanced);
}
</style>
