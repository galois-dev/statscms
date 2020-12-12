<template>
  <div>
    <Blog>
      <template v-slot:header>Matrix Dimension</template>
      <template v-slot:body
        ><p>
          A matrix dimension is given by its 'horizontal' rowspace også called
          its rank
        </p>
        <p>and its 'vertical' columnspace also called order</p>
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
