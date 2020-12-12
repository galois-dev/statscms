<template>
  <div>
    <Blog>
      <template v-slot:header>Pauli Matricer</template>
      <template v-slot:body>
        <p ref="MD_Flex">
          Pauli matricerne A er tre komplekse matrix i $\mathbb{C}^2$ hvor
        </p>
        <ol>
          <li>
            <p class="formel" ref="MD_Flex2">
              $\sigma_1=\sigma_x=\begin{bmatrix} 0 & 1 \\ 1 & 0 \end{bmatrix}$
            </p>
          </li>
          <li>
            <p class="formel" ref="MD_Flex3 ">
              $\sigma_2=\sigma_y=\begin{bmatrix} 0 & -i \\ i & 0 \end{bmatrix}$
            </p>
          </li>
          <li>
            <p class="formel" ref="MD_Flex4">
              $\sigma_3=\sigma_z=\begin{bmatrix} 1 & 0 \\ 0 & -1 \end{bmatrix}$
            </p>
          </li>
        </ol>
        <p class="inline" ref="MD_Flex5">
          Selvom de allesammen beskriver rotationsmatricer så har de den
          egenskab at $\sigma_x ^2=\sigma_y ^2=\sigma_z
          ^2=-i\sigma_x\sigma_y\sigma_z=\begin{bmatrix} 1 & 0 \\ 0 &
          1 \end{bmatrix}=I$, hvor I er
        </p>
        <span class="inline"
          ><nuxt-link
            :to="{ path: 'identitetsmatricen' }"
            exact-active-class="is-active"
            >identitetsmatricen
          </nuxt-link></span
        >
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
