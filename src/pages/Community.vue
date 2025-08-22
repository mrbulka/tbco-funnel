<script setup lang="ts">
const discordUrl = 'https://discord.gg/nhPwQN8g';
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="card center">
        <h1 class="m0">Community</h1>
        <p class="mt1 dim">
          Explore TBCO’s discussion spaces. Join free channels to learn and connect, and upgrade later for premium access.
        </p>
        <div class="mt2">
          <a :href="discordUrl" target="_blank" rel="noopener" class="btn btn-primary">Join Discord</a>
        </div>
      </div>

      <div class="grid mt4" style="grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1rem;">
        <div class="card">
          <h2>Free Access</h2>
          <ul class="mt2 dim">
            <li>• General chat and newcomer help</li>
            <li>• Market news and daily watchlists</li>
            <li>• Beginner education and FAQs</li>
            <li>• Community guidelines and announcements</li>
          </ul>
        </div>
        <div class="card">
          <h2>Premium Access</h2>
          <ul class="mt2 dim">
            <li>• Real-time trading signals and setups</li>
            <li>• Strategy rooms: futures, equities, crypto</li>
            <li>• Q&A with mentors and member highlights</li>
            <li>• Recorded reviews, weekly recaps, webinars</li>
          </ul>
        </div>
      </div>

      <div class="grid grid-3 mt4">
        <div class="card">
          <h3>Signals</h3>
          <p class="mt2">
            Get live alerts with entries, targets, and invalidation levels to stay ahead of key moves.
          </p>
        </div>
        <div class="card">
          <h3>Strategies</h3>
          <p class="mt2">
            Deep dives into setups and overlays, shared by experienced traders and mentors.
          </p>
        </div>
        <div class="card">
          <h3>Networking</h3>
          <p class="mt2">
            Connect with like‑minded traders, collaborate on plans, and grow faster together.
          </p>
        </div>
      </div>

      <div class="center mt4">
        <a :href="discordUrl" target="_blank" rel="noopener" class="btn btn-primary">Join the Community</a>
      </div>
    </div>
  </section>
</template>
