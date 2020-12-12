<template>
  <div>
    <Blog>
      <template v-slot:header> </template>
      <template v-slot:body>
        <span class="inline" ref="MD_FLEX7">
          Definition(2.4.8): En kvadratisk matrix $A$ er invertibel, hvis der
          finden en kvadratisk matrix $B$ sådan at $AB = I = BA$, hvor $I$ er
        </span>
        <span class="inline"
          ><nuxt-link
            :to="{ path: 'identitetsmatricen' }"
            exact-active-class="is-active"
            >identitetsmatricen
          </nuxt-link></span
        >
      </template>
      <template v-slot:footer> </template>
    </Blog>
  </div>
</template>
<script>
import { Blog } from '../../../components/Blog'
import { addMarkdown } from '../../../utils.js'
export default {
  mounted() {
    addMarkdown(this)
  },
}
</script>
<style lang="scss" scoped></style>
