<template>
  <div>
    <Blog>
      <template v-slot:header> </template>
      <template v-slot:body>
        <p class="formel" ref="MD_2">
          $\begin{Bmatrix} A & 0 \end{Bmatrix}$ ~ $\begin{Bmatrix} 1 & -2 & 0 &
          -1 & 3 & 0\\ 0 & 0 ~& 1 & 2 & -2 & 0\\ 0 & 0 & 0 & 0 & 0 & 0
          \end{Bmatrix}$ , $x_1 - 2x_2 - x_4 + 3x_5 = 0\\ x_3 + 2x_4 - 2x_5 =
          0\\ 0= 0\\ $
        </p>
      </template>
      <template v-slot:footer> </template>
    </Blog>
  </div>
</template>
<script>
import { Blog } from '../components/Blog'
import { addMarkdown } from '../utils.js'
export default {
  mounted() {
    addMarkdown(this)
  },
}
</script>
<style lang="scss" scoped></style>
