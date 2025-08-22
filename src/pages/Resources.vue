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
        <div v-for="g in guides" :key="g.title" class="card">
          <h3>{{ g.title }}</h3>
          <ul class="mt2 dim">
            <li v-for="it in g.items" :key="it">• {{ it }}</li>
          </ul>
          <a href="#" class="btn btn-outline mt2">View Outline</a>
        </div>
      </div>

      <!-- Newsletter -->
      <div class="card mt4">
        <h2 class="m0">Newsletter</h2>
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

        <!-- Archive placeholder -->
        <div class="grid mt4" style="grid-template-columns: repeat(3, minmax(0, 1fr));">
          <div class="card"><strong>Newsletter #1</strong><p class="mt1 dim">Coming soon — archive item placeholder.</p></div>
          <div class="card"><strong>Newsletter #2</strong><p class="mt1 dim">Coming soon — archive item placeholder.</p></div>
          <div class="card"><strong>Newsletter #3</strong><p class="mt1 dim">Coming soon — archive item placeholder.</p></div>
        </div>
      </div>
    </div>
  </section>
</template>
