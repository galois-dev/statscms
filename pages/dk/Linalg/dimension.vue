<template>
  <div>
    <Blog>
      <template v-slot:header>Matrix Dimension</template>
      <template v-slot:body
        ><p>
          En Matrices dimension er givet ved dens 'horizontale' søjleplads også
          kladet rang
        </p>
        <p>og dens 'vertikale' rækkeplads også kaldet orden</p>
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
