<template>
  <div>
    <ul>
      <li v-for="(item, key) of items" :key="key">
        <nuxt-link :to="item.to" exact-active-class="is-active">
          {{ item.title }}
        </nuxt-link>
      </li>
    </ul>
    <div ref="MD_eulers">
      Euler's identity $e^{i\pi}+1=0$ is a beautiful formula.
    </div>
  </div>
</template>

<script>
import { addMarkdown } from '../utils.js'
export default {
  mounted() {
    addMarkdown(this)
  },
  data() {
    return {
      items: [
        {
          title: 'Matrice operationer',
          to: { path: 'Linalg/matriceoperationer' },
        },
        {
          title: 'Rang',
          to: { path: 'Linalg/rang' },
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
#out {
  height: 100px;
  width: 100px;
  background-color: red;
}
</style>
