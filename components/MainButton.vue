<template lang="pug">
  div.btn(:class="{'btn--disabled': disabled}" @click="!disabled && $emit('click')")
    slot
</template>

<script>
export default {
  name: 'MainButton',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="stylus">
.btn
  transition .3s ease-in-out
  padding .6em 1.8em
  border 1px solid $liteGreen
  border-radius .4em
  display inline-block
  cursor pointer
  margin 1rem
  &:hover
    color $liteGreen
  &--disabled
    opacity .5
    cursor not-allowed
    &:hover
      color inherit
</style>
