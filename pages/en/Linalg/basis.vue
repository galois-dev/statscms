<template>
  <div>
    <Blog>
      <template v-slot:header>Basis for a subspace</template>
      <template v-slot:body>
        <p class="inline">
          Because a subspace typically contains an infinite number of vectors,
          some problems involving a subspace are handled best by working with a
          small finite set of vectors that span the subspace. The smaller the
          set, the better. It can be shown that the smallest possible spanning
          set must be linearly independent.
        </p>
        <p class="formel" ref="MD_0">
          A basis for a subspace $H$ $\mathbb{R}^n$ is a linearly independent
          set in $\mathbb{H}$ that spans $\mathbb{H}$
        </p>
        <div class="inline" ref="MD_invertibleMatrix">
          The columns of an invertible $\mathbb{n} \times \mathbb{n}$ form a
          basis for all of $\mathbb{R}^\mathbb{n}$ because they are linearly
          independent and span $\mathbb{R}^\mathbb{n}$, by the
          <nuxt-link :to="{ path: 'matrix_invers' }"
            >Invertible Matrix Theorem.</nuxt-link
          >
          One such matrix is the $\mathbb{n} \times \mathbb{n}$ identity matrix.
          Its columns are denoted by $e_1$, ..., $e_n$:
        </div>
        <p class="formel" ref="MD_identityVectors">
          $e_1 = \begin{bmatrix} 1 \\ 0 \\ . \\. \\. \\ 0 \end{bmatrix}$, $e_2 =
          \begin{bmatrix} 0 \\ 1 \\ . \\. \\. \\ 0 \end{bmatrix}$, $e_n =
          \begin{bmatrix} 0 \\ 0 \\ . \\. \\. \\ n \end{bmatrix}$
        </p>
        <div class="inline" ref="MD_standardBasis">
          The set ${e_1, ..., e_n}$ is called the <b>standard basis</b> for
          $\mathbb{R}^\mathbb{n}$.
        </div>

        <div class="inline">
          <h2>Finding the basis of a null space</h2>
        </div>
        <p class="formel">
          Example: Find a basis for the null space of the matrix
        </p>

        <p class="formel" ref="MD_basisExample">
          $A = \begin{bmatrix} -3 & 6 & -1 & 1 & -7\\ 1 & -2 & 2 & 3 & -1\\ 2 &
          -4 & 5 & 8 & -4 \end{bmatrix}$
        </p>
        <p class="formel" ref="MD_2">
          First, write the solution of $Ax = 0$ in parametric vector form:
        </p>
        <p class="formel" ref="MD_3">
          $\begin{bmatrix} A & 0 \end{bmatrix}$ ~ $\begin{bmatrix} 1 & -2 & 0 &
          -1 & 3 & 0\\ 0 & 0 & 1 & 2 & -2 & 0\\ 0 & 0 & 0 & 0 & 0 & 0
          \end{bmatrix}, \begin{matrix} x_1 - 2x_2 - x_4 + 3x_5 = 0\\ x_3 + 2x_4
          - 2x_5 = 0\\ 0 = 0 \end{matrix}$
        </p>
        <p class="formel" ref="MD_4">
          The general solution is $x_1 = 2x_2 + x_4 - 3x_5, x_3 = -2x_4 + 2x_5,$
          with $x_2, x_4,$ and $x_5$ free.
        </p>
        <p class="formel" ref="MD_exampleBasisSolution">
          $\begin{bmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \\x_5\end{bmatrix} =
          \begin{bmatrix} 2x_2 + x_4 -3x_5 \\ x_2 \\-2x_4 + 2x_5
          \\x_4\\x_5\end{bmatrix} = x_2 \begin{bmatrix} 2 \\ 1 \\ 0 \\ 0 \\0
          \end{bmatrix} + x_4 \begin{bmatrix} 1 \\ 0 \\ -2 \\ 1 \\ 0
          \end{bmatrix} + x_5 \begin{bmatrix} -3 \\ 0 \\ 2 \\ 0 \\ 1
          \end{bmatrix}$
        </p>
        <p class="formel" ref="MD_equation1">
          $= x_2 \textbf{u} + x_4 \textbf{v} + x_5 \textbf{w} (1)$
        </p>
        <p class="inline" ref="MD_5">
          Equation (1) shows that Nul $A$ coincides with the set of all linear
          combinations of $u$, $v$; and $w$: That is, ${u, v, w}$ generates Nul
          $A$. In fact, this construction of $u$, $v$, and $w$ automatically
          makes them linearly independent, because equation (1) shows that $0 =
          x_2u + x_4v + x_5w$ only if the weights $x_2$, $x_4$, and $x_5$ are
          all zero. (Examine entries 2, 4, and 5 in the vector $x_2u + x_4v +
          x5w$.) So ${u, v, w}$ is a basis for Nul $A$. Finding a basis for the
          column space of a matrix is actually less work than finding a basis
          for the null space. However, the method requires some explanation.
          Let’s begin with a simple case.
        </p>
        <div class="inline">
          <h2>Basis of a column space</h2>
        </div>
        <p class="formel" ref="MD_exampleColumnSpaceHeader">
          Find a basis for the column space of the matrix
        </p>
        <p class="formel" ref="MD_exampleColumnSpaceMatrix">
          $B = \begin{bmatrix} 1 & 0 & -3 & 5 & 0\\ 0 & 1 & 2 & -1 & 0\\ 0 & 0 &
          0 & 0 & 1\\ 0 & 0 & 0 & 0 & 0\\ \end{bmatrix}$
        </p>
        <p class="inline" ref="MD_6">
          We denote the columns of $\mathbb{B}$ by $b_1, ..., b_5$ and note that
          $b_3 = -3b_1 + 2b_2$ and $b_4 = 5b_1 - b_2$. The fact that $b_3$ and
          $b_4$ are combinations of the pivot columns mean that any combination
          of $b_1, ..., b_5$ is actually just a combination of $b_1, b_2, b_5$.
          Indeed, if $v$ is any vector in Col $B$, say;
        </p>
        <p class="formel" ref="MD_7">
          $\textbf{v} = c_1 b_1 + c_2 b_2 + c_3 (-3b_1 + 2b_2) + c_4(5b_1 - b_2)
          + c_5 b_5$
        </p>
        <p class="inline" ref="MD_8">
          which is a linear combination of $b_1, b_2$, and $b_5$. So, ${b_1,
          b_2, b_5}$ spans Col $B$. Also, $b_1$, $b_2$, and $b_5$ are linearly
          independent, because they are columns from an identity matrix. So the
          pivot columns of $B$ form a basis for Col$B$. The matrix $B$ in the
          previous example is in reduced echelon form. To handle a general
          matrix $A$, recall that linear dependence relations among the columns
          of $A$ can be expressed in the form $Ax = 0$ for some $x$. (If some
          columns are not involved in a particular dependence relation, then the
          corresponding entries in $x$ are zero.) When $A$ is row reduced to
          echelon form $B$, the columns are drastically changed, but the
          equations $Ax = 0$ and $Bx = 0$ have the same set of solutions. That
          is, the columns of $A$ have $exactly\space the\space same\space linear\space dependence
          relationships$ as the columns of $B$.
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
