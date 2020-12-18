<template>
  <div>
    <Blog>
      <template v-slot:header>Span</template>
      <template v-slot:body><p class="inline" ref="MD_Flex1"></p></template>
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
