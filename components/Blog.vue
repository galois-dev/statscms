<template>
  <div class="blogRoot">
    <header>
      <h1>
        <slot name="header"> </slot>
        <hr />
      </h1>
    </header>
    <body>
      <slot name="body"></slot>
    </body>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import '../styles.scss';
.blogRoot {
  max-width: max(964px, 90vw);
  margin: 2em;
  h2 {
    color: $primary;
    font-size: 24px;
    font-weight: 600px;
  }
  header {
    h1 {
      color: $primary;
      font-size: 36px;
      font-weight: 700px;
      text-align: center;
    }
  }
  body {
    p {
      padding: 1em;
      font-size: 18px;
    }
  }

  footer {
    text-align: center;
    border-radius: 6px;
    background-color: rgba(211, 211, 211, 0.438);
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    h3 {
      margin: 6px;
      font-size: 16px;
      color: $primary;
    }
  }
}
.formel {
  text-align: center !important;
}
.inline {
  padding: 0 !important;
  margin: 0 !important;
  margin-bottom: 2px !important;
  margin-top: 2px !important;
  p {
    padding: 0 !important;
    margin: 0 !important;
    display: inline;
  }
  display: inline;
}
</style>
