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

<style lang="stylus"></style>
