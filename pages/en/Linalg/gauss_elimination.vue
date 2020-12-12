<template>
  <div>
    <Blog>
      <template v-slot:header> </template>
      <template v-slot:body>
        <p ref="MB_flex1">
          $Denote a step of Gauss's Method. \begin{verbatim} \begin{equation*}
          \begin{linsys}{2} x &+ &y &= &0 \\ x &- &y &= &1 \end{linsys}
          \grstep{-\rho_1+\rho_2} \begin{linsys}{2} x &+ &y &= &0 \\ & &-2y&= &1
          \end{linsys} \end{equation*} \end{verbatim} Show more than one row
          operation at a time with \verb|\grstep[2\rho_5]{\rho_1+\rho_3}| for
          two row operations, or \verb|\grstep[2\rho_5 \\
          3\rho_6]{\rho_1+\rho_3}| for three. Swap two rows with
          \verb|\rho_1\swap\rho_2|.$
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
