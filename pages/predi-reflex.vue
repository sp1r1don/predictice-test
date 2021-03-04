<template lang="pug">
  div
    Settings(v-if="!startGame" @startGame="($event) => {startGame = true; playerSettings = $event}")
    PlayZone(v-else :startGame="startGame" :playerSettings="playerSettings" @showSettings="startGame = false")
</template>

<script>
export default {
  name: 'PrediReflex',
  data() {
    return {
      playerSettings: null,
      startGame: false,
    }
  },
}
</script>

<style lang="stylus">
.verte__guide
  cursor pointer
.play-zone
  width 100%
  padding-top 50%
  background #eee
  position relative
.target
  position absolute
  background yellow
  width 50px
  height 50px
.settings-field
  display flex
  align-items center
  margin-bottom 1rem
  &__name
    margin-right 2rem
    font-weight 600
  input
    box-shadow none
    border 1px solid $grey
    padding .4rem 1rem
    outline none
    border-radius .4rem
    &:focus
      border-color $liteGreen
</style>
