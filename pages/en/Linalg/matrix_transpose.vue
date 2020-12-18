<template>
  <div>
    <Blog>
      <template v-slot:header>Matrix transpose</template>
      <template v-slot:body>
        <p class="formel" ref="MD_Flex11">
          $A =$ $\begin{bmatrix} 1&2&3\\4&5&6\end{bmatrix}$ $\space\space\space$
          $A^T =$ $\begin{bmatrix}1&4\\2&5\\3&6\end{bmatrix}$
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
