<script setup lang="ts">
const discordUrl = 'https://discord.gg/nhPwQN8g';
</script>

<template>
  <!-- Hero -->
  <section class="hero">
    <div class="inner">
      <div class="panel">
        <h1>Empowering Traders. <br />Building Wealth.</h1>
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
    <p id="about" class="banner">
      Join <strong>1,000+ Traders</strong> Generating <strong>$1M+ Daily Volume</strong>
    </p>
  </div>

  <!-- Who we are / Mission -->
  <section class="section">
    <div class="container grid" style="grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem;">
      <div class="card">
        <h2>Who we Are</h2>
        <p class="mt2">
          TBCO Investment Group is a community of expert traders who specialize in day trading across diverse asset
          classes, including equities, derivatives, and cryptocurrencies. Our mission is to foster a collaborative
          environment where traders of all experience levels can thrive and achieve financial success together.
        </p>
      </div>
      <div class="card">
        <h2>Our Mission</h2>
        <p class="mt2">
          At TBCO Investment Group, we empower traders with the resources they need to make confident decisions in
          dynamic markets. By utilizing advanced algorithms and AI-driven insights, we help optimize investment
          strategies to empower traders to meet their goals.
        </p>
      </div>
    </div>
  </section>

  <!-- Benefits -->
  <section class="section">
    <div class="container grid grid-3">
      <div class="card">
        <h3>Real Time Signals</h3>
        <p class="mt2">
          Stay ahead of the market with real-time trading signals from seasoned experts. Get instant updates on market
          opportunities, buy/sell recommendations, and actionable strategies delivered directly to your fingertips.
        </p>
      </div>
      <div class="card">
        <h3>Collaborative Discussions</h3>
        <p class="mt2">
          Engage in meaningful conversations with expert traders and fellow community members. Share insights, ask
          questions, and refine your strategies in an interactive and supportive environment.
        </p>
      </div>
      <div class="card">
        <h3>Financial Education</h3>
        <p class="mt2">
          Expand your knowledge with exclusive tutorials, webinars, and market analysis reports. Whether you're a
          beginner or an experienced trader, our resources are designed to help you grow your financial expertise.
        </p>
      </div>
    </div>
  </section>

  <!-- Community Preview / Social Proof -->
  <section class="section">
    <div class="container">
      <div class="card center">
        <h2 class="m0">Join 1000+ Profitable Traders</h2>
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

      <!-- Placeholder screenshot grid -->
      <div class="grid" style="grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 0.75rem; margin-top: 1rem;">
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile"></div>
        <div class="tile" style="grid-column: span 2;"></div>
        <div class="tile"></div>
      </div>

      <!-- Xcel promo -->
      <div class="grid grid-3 mt4">
        <div class="card center" style="grid-column: 1 / -1;">
          <p class="m0">Want to see how members find these trades? Learn about our Xcel Algo Upgrade.</p>
          <a href="/upgrade" class="btn btn-outline mt2">Discover Now</a>
        </div>
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
/* Subtle backdrop for hero (no external image; replace later if needed) */
.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(1200px 400px at 50% -10%, rgba(16, 185, 129, 0.15), transparent 60%),
    linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(11, 11, 11, 1));
  pointer-events: none;
}
</style>
