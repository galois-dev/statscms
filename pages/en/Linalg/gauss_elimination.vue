<template>
  <div>
    <Blog>
      <template v-slot:header>Gauss Elimination</template>
      <template v-slot:body>
        <h2>Example:</h2>
        <p class="inline" ref="MD_flex1">
          Example of gauss elimination $\begin{bmatrix} x &+ &y &= &0 \\ x &- &y
          &= &1 \end{bmatrix}$ $\xrightarrow{\rho_2 := -\rho_1+\rho_2}$
        </p>
        <p class="inline" ref="MD_2">
          $\begin{bmatrix} x &+ &y &= &0 \\ & &-2y&= &1 \end{bmatrix}$
          $\xrightarrow{\rho_2 := -2^{-1}\rho_2}$
        </p>
        <p class="inline" ref="MD_3">
          $\begin{bmatrix} x &+ &y &= &0 \\ & &y&= & -1/2 \end{bmatrix}$
          $\xrightarrow{\rho_1 := \rho_1 - \rho_2}$
        </p>
        <p class="inline" ref="MD_4">
          $\begin{bmatrix} x & & &= &1/2 \\ & &y&= & -1/2 \end{bmatrix}$
        </p>
        <br />
        <br />
        <h2>The three basic operations</h2>
        <ol>
          <li>
            <p class="inline" ref="MD_5">
              Type M: Multiplication from left side of equation/row with
              non-zero
            </p>
            <nuxt-link class="inline" :to="{ path: 'scalar' }"
              >Scalar</nuxt-link
            >
            <p class="inline" ref="MD_8">
              $c ≠ 0 \space\space for \space\space c\in\mathbb{F}$
            </p>
          </li>
          <li>
            <p class="inline">
              Type S: Addition of a row scaled with any
              <nuxt-link class="inline" :to="{ path: 'scalar' }"
                >scalar</nuxt-link
              >
              nxt onto a different row from the left
            </p>
          </li>
          <li><p class="inline" ref="MD_7">Type T: Swap two rows</p></li>
        </ol>
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
