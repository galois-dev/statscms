<template>
  <div>
    <Blog>
      <template v-slot:header>Linear independence</template>
      <template v-slot:body> </template>
      <template v-slot:footer>
        <h3>Additional sources:</h3>
        <ul>
          <li>
            <a
              href="https://www.youtube.com/watch?v=k7RM-ot2NWY&ab_channel=3Blue1Brown"
              >3B1B video, mostly towards the end.</a
            >
          </li>
        </ul>
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
}
</script>
<style lang="scss" scoped></style>
