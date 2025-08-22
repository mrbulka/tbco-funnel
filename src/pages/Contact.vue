<script setup lang="ts">
const links = {
  linkedin: 'https://www.linkedin.com/company/tbco-investment-group/?viewAsMember=true',
  discord: 'https://discord.gg/nhPwQN8g'
};
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="card center">
        <h1 class="m0">Contact</h1>
        <p class="mt1 dim">Questions, feedback, or partnership ideas? Send us a note.</p>
      </div>

      <div class="grid mt4" style="grid-template-columns: 2fr 1fr; gap: 1rem;">
        <!-- Contact form (front-end stub) -->
        <div class="card">
          <form @submit.prevent>
            <div class="form-grid two">
              <div>
                <label for="c-name" class="label">Name</label>
                <input id="c-name" type="text" class="input" placeholder="Your name" />
              </div>
              <div>
                <label for="c-email" class="label">Email</label>
                <input id="c-email" type="email" class="input" placeholder="you@example.com" />
              </div>
            </div>

            <div class="mt2">
              <label for="c-message" class="label">Message</label>
              <textarea id="c-message" class="textarea" placeholder="How can we help?"></textarea>
            </div>

            <div class="mt2">
              <label style="display: flex; gap: 0.5rem; align-items: flex-start;">
                <input type="checkbox" />
                <span class="helper">
                  I agree to be contacted by TBCO Investment Group regarding my inquiry and related updates.
                  I understand this site provides educational content and does not offer financial advice.
                </span>
              </label>
            </div>

            <button class="btn btn-primary mt3" type="submit">Send</button>
            <p class="helper mt2">Form is a placeholder. Submissions are not stored yet.</p>
          </form>
        </div>

        <!-- Social links -->
        <aside class="card">
          <h3>Connect</h3>
          <p class="mt2"><a :href="links.linkedin" target="_blank" rel="noopener" class="link">LinkedIn</a></p>
          <p><a :href="links.discord" target="_blank" rel="noopener" class="link">Discord</a></p>

          <div class="mt3">
            <p class="helper">
              For press or partnership inquiries, mention your organization and scope. We aim to reply within 2–3 business days.
            </p>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>
