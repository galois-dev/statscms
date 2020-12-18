<template>
  <div>
    <Blog>
      <template v-slot:header>Rank</template>
      <template v-slot:body>
        <p class="inline">
          The rank of a matrix is given by the maximum number of
          <nuxt-link class="inline" :to="{ path: 'lineært_uafhængige' }">
            linearly independent
          </nuxt-link>
          column vectors, or the row vectors, in the matrix. When all the
          vectors in a matrix are
          <nuxt-link class="inline" :to="{ path: 'lineært_uafhængige' }">
            linearly independent
          </nuxt-link>
          it is said to be full rank.
        </p>
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
