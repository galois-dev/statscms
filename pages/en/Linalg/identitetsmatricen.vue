<template>
  <div>
    <Blog>
      <template v-slot:header>Identitetsmatricen</template>
      <template v-slot:body>
        <nuxt-link :to="{ path: 'dimension' }" exact-active-class="is-active"
          >Dimensionen
        </nuxt-link>
        <p class="inline" ref="MD_Flex">
          af den kvadratiske matrix kaldet 'identitetsmatricen' er givet ud fra
          kontekst. Men det gælder altid at identitetsmatricen er
          $M_{n,n\space\space n\in\mathbb{N}}$ matricen $I$ hvor
        </p>
        <p class="formel" ref="MD_Flex1">
          $I = \begin{pmatrix} i_0 & 0 & 0 & 0 & \cdots & 0 \\ 0 & i_1 & 0 & 0 &
          \cdots & 0 \\ 0 & 0 & i_2 & 0 & \cdots & 0 \\ \vdots & \vdots & \vdots
          & \ddots & \ & \vdots \\ \vdots & \vdots & \vdots & \ & \ddots &
          \vdots \\ 0 & 0 & 0 & 0 & \cdots & i_n \end{pmatrix} = \begin{pmatrix}
          1 & 0 & 0 & 0 & \cdots & 0 \\ 0 & 1 & 0 & 0 & \cdots & 0 \\ 0 & 0 & 1
          & 0 & \cdots & 0 \\ \vdots & \vdots & \vdots & \ddots & \ & \vdots \\
          \vdots & \vdots & \vdots & \ & \ddots & \vdots \\ 0 & 0 & 0 & 0 &
          \cdots & 1 \end{pmatrix}$
        </p>
        <p class="formel" ref="MD_fex3">
          ...nogle gange beskrives $I$ med en parameter $n\in\mathbb{N}$: $I_n$
          hvis forfatteren har været ordrig nok.
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
