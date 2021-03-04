<template lang="pug">
  .settings
    .settings-field
      span.settings-field__name Player Name:
      input(type="text" v-model="playerSettings.name")
    .settings-field
      span.settings-field__name Delay before preview (sec):
      input(type="text" v-model="playerSettings.delay")
    .settings-field
      span.settings-field__name Background color for your block:
      Verte(model="hex" picker="square" v-model="playerSettings.color")
    MainButton(@click="$emit('startGame', playerSettings)" :disabled="disabled") Start Game
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
      localStorage.setItem('delay', val)
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

<style lang="stylus"></style>
