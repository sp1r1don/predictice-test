<template lang="pug">
  .settings
    h2.settings__ttl Game settings
    .settings-field
      span.settings-field__name Player Name:
      input(type="text" v-model="playerSettings.name")
    .settings-field
      span.settings-field__name Delay before preview (sec):
      input(type="text" v-model="playerSettings.delay")
    .settings-field
      span.settings-field__name Background color for your block:
      Verte(model="hex" picker="square" v-model="playerSettings.color")
    MainButton(@click="$emit('startGame', playerSettings)" :disabled="disabled") Continue
</template>

<script>
export default {
  name: 'Settings',
  data() {
    return {
      playerSettings: {
        name: null,
        delay: null,
        color: null,
      },
    }
  },
  computed: {
    disabled() {
      const { name, delay } = this.playerSettings
      return !name || !delay
    },
  },
  watch: {
    'playerSettings.name'(val) {
      localStorage.setItem('name', val)
    },
    'playerSettings.delay'(val) {
      const clearVal = val.replace(/[^0-9.]/g, '')
      this.playerSettings.delay = clearVal
      localStorage.setItem('delay', clearVal)
    },
    'playerSettings.color'(val) {
      localStorage.setItem('color', val)
    },
  },
  created() {
    if (process.client) {
      this.playerSettings.name = localStorage.getItem('name')
      this.playerSettings.delay = localStorage.getItem('delay')
      this.playerSettings.color = localStorage.getItem('color')
    }
  },
}
</script>

<style lang="stylus">
.verte__guide
  cursor pointer
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
.settings
  &__ttl
    font-size 1.6rem
    margin-top: 0
</style>
