<template>
  <div>
    <Blog>
      <template v-slot:header>
        <slot name="header">Matrice Operationer</slot>
      </template>
      <template v-slot:body>
        <p>Der er en række af matrice operationer</p>
        <h2>Plus og gange</h2>
        <p class="formel" ref="MD_FLEX2">
          $A+B$ = $\begin{bmatrix} a_{11}&a_{12}&\cdots &a_{1n} \\
          a_{21}&a_{22}&\cdots &a_{2n} \\ \vdots & \vdots & \ddots & \vdots\\
          a_{n1}&a_{n2}&\cdots &a_{nn} \end{bmatrix}$+$\begin{bmatrix}
          b_{11}&b_{12}&\cdots &b_{1n} \\ b_{21}&b_{22}&\cdots &b_{2n} \\ \vdots
          & \vdots & \ddots & \vdots\\ b_{n1}&b_{n2}&\cdots &b_{nn}
          \end{bmatrix}$, to arbitrære kvadratiske lige store matricer
        </p>
        <p class="formel" ref="MD_FLEX3">
          =$\begin{bmatrix} a_{11}+b_{11}&a_{12}+b_{12}&\cdots &a_{1n}+b_{1n} \\
          a_{21}+b_{21}&a_{22}+b_{22}&\cdots &a_{2n}+b_{2n} \\ \vdots & \vdots &
          \ddots & \vdots\\ a_{n1}+b_{n1}&b_{n2}+b_{n2}&\cdots &a_{nn}+b_{nn}
          \end{bmatrix}=C$, simpelt produkt at lægge sammen. Man plejer at sige
          at det er en "elementvis" eller "parvis" -sum
        </p>
        <p class="formel" ref="MD_FLEX4">$A*B=C$</p>
        <p class="formel" ref="MD_FLEX5">
          $\begin{bmatrix} a_{11}&a_{12}&\cdots &a_{1n} \\ a_{21}&a_{22}&\cdots
          &a_{2n} \\ \vdots & \vdots & \ddots & \vdots\\ a_{n1}&a_{n2}&\cdots
          &a_{nn} \end{bmatrix}$+$\begin{bmatrix} b_{11}&b_{12}&\cdots &b_{1n}
          \\ b_{21}&b_{22}&\cdots &b_{2n} \\ \vdots & \vdots & \ddots & \vdots\\
          b_{n1}&b_{n2}&\cdots &b_{nn} \end{bmatrix}$
        </p>
        <p class="formel" ref="MD_FLEX6">
          =$\begin{bmatrix} a_{11}+b_{11}&a_{12}+b_{12}&\cdots &a_{1n}+b_{1n} \\
          a_{21}+b_{21}&a_{22}+b_{22}&\cdots &a_{2n}+b_{2n} \\ \vdots & \vdots &
          \ddots & \vdots\\ a_{n1}+b_{n1}&b_{n2}+b_{n2}&\cdots &a_{nn}+b_{nn}
          \end{bmatrix}$
        </p>
        <h2>
          Gange af matricer med uens
          <nuxt-link :to="{ path: 'dimension' }" exact-active-class="is-active"
            >dimension
          </nuxt-link>
        </h2>
      </template>
      <template v-slot:footer>
        <slot name="header">Matrice Operationer Footer</slot>
      </template>
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
  computed: {
    localhost: function () {
      return localhost
    },
  },
}
</script>

<style></style>
