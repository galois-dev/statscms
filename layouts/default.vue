<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <h1>Stats CMS</h1>

        <!-- <div class="navbar-burger">
          <span />
          <span />
          <span />
        </div> -->
      </div>
    </nav>

    <section class="main-content columns">
      <aside class="column is-2 section">
        <p class="menu-label is-hidden-touch">General</p>
        <ul class="menu-list">
          <li v-for="(item, key) of items" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </aside>

      <div class="container column is-10">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import katex from 'katex'
import texmath from 'markdown-it-texmath'
export default {
  data() {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' },
        },
        {
          title: 'Test',
          icon: 'lightbulb',
          to: { name: 'Test' },
        },
        {
          title: 'dk-LinAlg',
          icon: 'lightbulb',
          to: { name: 'LinAlg' },
        },
        {
          title: 'dk-SandStat',
          icon: 'lightbulb',
          to: { name: 'SandStat' },
        },
        {
          title: 'en-LinAlg',
          icon: 'lightbulb',
          to: { name: 'LinAlg' },
        },
        {
          title: 'en-SandStat',
          icon: 'lightbulb',
          to: { name: 'SandStat' },
        },
      ],
    }
  },
}
</script>
<style lang="scss">
@import '../styles';
.BlogPostContainerStyle1 {
  h1 {
    font-size: 24px;
  }
}
</style>
