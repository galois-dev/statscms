<template>
  <div>
    <Blog>
      <template v-slot:header>Scalar</template>
      <template v-slot:body
        ><p class="formel" ref="MD_2">
          Fanciest word to date given for a plain number $x\in\mathbb{F^1}$
        </p></template
      >
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
