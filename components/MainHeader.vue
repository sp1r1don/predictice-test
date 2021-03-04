<template lang="pug">
  .main-header
    nav.main-header-nav
      nuxt-link.main-header-nav__item(to="/") Home
      nuxt-link.main-header-nav__item(to="/predi-reflex") PrediReflex
      nuxt-link.main-header-nav__item(to="/ranking") Ranking
</template>

<script>
export default {
  name: 'MainHeader',
}
</script>

<style lang="stylus">
.main-header
  width: 100%;
.main-header-nav
  display flex
  align-items center
  justify-content center
  &__item
    transition .3s ease-in-out
    padding 1em 2em
    text-decoration none
    color inherit
    font-weight 500
    &.nuxt-link-exact-active
      color $green
    &:hover
      color $green
</style>
