<template>
  <div>
    <Blog>
      <template v-slot:header>Matrix order</template>
      <template v-slot:body>
        <p class="inline" ref="MD_1">The</p>
        <nuxt-link class="inline" :to="{ path: 'dimension' }">
          dimension
        </nuxt-link>
        <p class="inline" ref="MD_0">
          of a vector space is the number of coordinates you need to describe a
          point in it. Thus, a plane in $\mathbb{R^3}$ , is of
        </p>
        <nuxt-link class="inline" :to="{ path: 'dimension' }">
          dimension
        </nuxt-link>
        <p class="inline" ref="MD_3">
          2 , since each point in the plane can be described by two parameters,
          even though the actual point will be of the form $(𝑥,𝑦,𝑧)$ . If you
          take the rows of a matrix as the basis of a vector space, the
        </p>
        <nuxt-link class="inline" :to="{ path: 'dimension' }">
          dimension
        </nuxt-link>
        <p class="inline" ref="MD_4">
          of that vector space will give you the number of
        </p>
        <nuxt-link class="inline" :to="{ path: 'lineært_uafhængige' }">
          lineary independent
        </nuxt-link>
        <p class="inline" ref="MD_2">
          rows. For a vector space whose basis elements are themselves matrices,
          the
        </p>
        <nuxt-link class="inline" :to="{ path: 'dimension' }">
          dimension
        </nuxt-link>
        will be less or equal to the number of elements in the matrix, this
        <p class="inline" ref="MD_5">$dim[𝑀_2( \mathbb{R^3} )]=4$</p>
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
