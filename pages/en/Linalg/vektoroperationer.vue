<template>
  <div>
    <Blog>
      <template v-slot:header> Vektor operationer </template>
      <template v-slot:body>
        <ol>
          <li>
            vektor ± vektor
            <p class="formel" ref="MD_flex1">
              $x=\begin{bmatrix} x_1 \\ \vdots \\ x_m \end{bmatrix} \space\space
              \& \space\space\space y=\begin{bmatrix} y_1 \\ \vdots \\ y_m
              \end{bmatrix} \space\space\space x±y = \begin{bmatrix} x_1 ± y_1
              \\ \vdots \\ x_m ± y_m \end{bmatrix}$
            </p>
          </li>
          <li>
            skalar * vektor
            <p class="formel" ref="MD_flex2">
              $x=\begin{bmatrix} x_1 \\ \vdots \\ x_m \end{bmatrix} \space\space
              og \space\space a\in\mathbb{F} \space\space\space medfører
              \space\space\space x*a=\begin{bmatrix} a*x_1 \\ \vdots \\ a*x_m
              \end{bmatrix}$
            </p>
          </li>
          <li>
            vektor * vektor
            <p class="formel" ref="MD_flex4">
              $x=\begin{bmatrix} x_1 \\ \vdots \\ x_m \end{bmatrix} \space\space
              \& \space\space\space y=\begin{bmatrix} y_1 \\ \vdots \\ y_m
              \end{bmatrix} \space\space\space x*y = \begin{bmatrix} x_1 * y_1
              \\ \vdots \\ x_m * y_m \end{bmatrix}$
            </p>
          </li>
          <li>
            Transpose
            <p class="formel" ref="MD_flex5">
              $x=\begin{bmatrix} x_1 \\ \vdots \\ x_m \end{bmatrix} \space\space
              \& \space\space x^T=\begin{bmatrix} x_1 & \cdots & x_m
              \end{bmatrix}$
            </p>
          </li>
          <li>
            Invers
            <p class="formel" ref="MD_flex6">
              $x=\begin{bmatrix} x_1 \\ \vdots \\ x_m \end{bmatrix}
              \space\space\space\space \& \space\space\space\space
              x^{-1}=\begin{bmatrix} x_1^{-1} & \cdots & x_m^{-1} \end{bmatrix}
              \space\space\space\space medfører \space\space\space\space
              x*x^{-1} = I$
            </p>
          </li>
          <li>Baseskift</li>
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
