<template lang="pug">
  .sk-wave
    .sk-rect(
      v-for="n in 5"
      :class="`sk-rect-${n}`"
    )
</template>

<script>
export default {
  name: 'Preloader',
}
</script>

<style lang="stylus">
.sk-wave
  width auto
  height calc(100% - .6em)
  margin auto
  text-align center
  font-size 1em
  .sk-rect
    background-color $liteGreen
    height 4em
    width .4em
    margin: 0 .2em
    display inline-block
    animation sk-wave-stretch-delay 1.2s infinite ease-in-out
  .sk-rect-1
    animation-delay -1.2s
.sk-wave .sk-rect-2
  animation-delay -1.1s
.sk-wave .sk-rect-3
  animation-delay -1s
.sk-wave .sk-rect-4
  animation-delay -0.9s
.sk-wave .sk-rect-5
  animation-delay -0.8s
@keyframes sk-wave-stretch-delay
  0%, 40%, 100%
    transform scaleY(0.4)
  20%
    transform scaleY(1)
</style>
