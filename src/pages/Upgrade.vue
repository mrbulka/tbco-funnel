<script setup lang="ts">
const whopUrl = 'https://whop.com/discover/prop-additional-account/xcelalgo/';
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="card center">
        <img
          src="@/assets/xcel_logo_placeholder.svg"
          alt="XcelAlgo logo placeholder"
          style="height: 56px; opacity: 0.95; margin-bottom: 0.5rem"
        />
        <h1 class="m0">Enhance Your Trading with XcelAlgo</h1>
        <p class="mt1 dim">95% Accurate Top/Bottom Levels</p>
        <div class="mt2">
          <a :href="whopUrl" target="_blank" rel="noopener" class="btn btn-primary">Upgrade Now</a>
        </div>
      </div>

      <div class="grid grid-3 mt4">
        <div class="card">
          <h3>Precision Trading Signals</h3>
          <p class="mt2">
            Get accurate entry and exit points based on real‑time data with clearly defined invalidation levels.
          </p>
        </div>
        <div class="card">
          <h3>Trading Overlays</h3>
          <p class="mt2">
            Draw actionable trend lines and zones directly on your charts to plan high‑probability trades.
          </p>
        </div>
        <div class="card">
          <h3>Targeted Forecasts</h3>
          <p class="mt2">
            Pinpoint entries, targets, and multi‑target forecasts designed to support disciplined execution.
          </p>
        </div>
      </div>

      <div class="card center mt4">
        <h2 class="m0">$67.99 Per Month</h2>
        <ul class="mt2 dim" style="list-style: none; padding-left: 0;">
          <li>• XcelAlgo TradingView Indicator Access</li>
          <li>• Daily & Weekly 95% accurate top/bottom levels</li>
          <li>• 24/7 support and active indicator updates</li>
        </ul>
        <a :href="whopUrl" target="_blank" rel="noopener" class="btn btn-primary mt2">Get XcelAlgo</a>
      </div>

      <p class="helper mt2">
        Disclaimer: TBCO provides educational content and tools. Nothing herein constitutes financial, investment,
        or trading advice. Past performance is not indicative of future results.
      </p>
    </div>
  </section>
</template>
