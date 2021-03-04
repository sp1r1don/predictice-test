<template lang="pug">
  div
    .container
      MainHeader
      .inner-content
        Nuxt
</template>

<script>
export default {}
</script>

<style lang="stylus">
*
  box-sizing border-box
html
  font-family: Quicksand,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",
    sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  font-size: 18px;
  color: $fontPrimary;
.container
  max-width 900px;
  margin 0 auto;
  padding 40px;
.inner-content
  padding 60px 0;
</style>
