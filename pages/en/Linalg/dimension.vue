<template>
  <div>
    <Blog>
      <template v-slot:header>Matrix Dimension</template>
      <template v-slot:body
        ><p class="inline">
          A matrix dimension is given by its 'horizontal' rowspace also called
          its
          <nuxt-link class="inline" :to="{ path: 'rang' }"> rank </nuxt-link>
        </p>

        <p class="inline">
          and its 'vertical' columnspace also called its
          <nuxt-link class="inline" :to="{ path: 'orden' }"> order </nuxt-link>.
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
