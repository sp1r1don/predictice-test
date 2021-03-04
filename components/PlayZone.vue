<template lang="pug">
  .play-zone(ref="playZone")
    .view.view--result(
      v-if="userTime"
    )
      Confetti
      p Your time {{ userTime }} sec
      .view__btns
        MainButton(@click="startGame") Try again
        MainButton(@click="$emit('showSettings')") Back to settings
    .view.view--start(
      v-if="firstInit"
    )
      MainButton(@click="startGame") Start Game
    .target(
      :style="targetPosition"
      ref="target"
      @mousedown="handleClick"
      @touchstart="handleClick"
    )
</template>

<script>
export default {
  name: 'PlayZone',
  props: {
    playerSettings: {
      type: Object,
      default() {
        return {
          name: null,
          delay: null,
          color: null,
        }
      },
    },
  },
  data() {
    return {
      firstInit: true,
      // target props
      targetX: 0,
      targetY: 0,
      opacity: 0,
      // time tracker props
      countdown: null,
      showUpTime: 0,
      clickTime: 0,
      userTime: null,
    }
  },
  computed: {
    targetPosition() {
      return {
        left: `${this.targetX}px`,
        top: `${this.targetY}px`,
        background: this.playerSettings.color,
        opacity: this.opacity,
      }
    },
  },
  beforeDestroy() {
    clearInterval(this.countdown)
  },
  methods: {
    startGame() {
      this.firstInit = false
      this.userTime = null
      this.resetTarget()
      this.startCountdown()
    },
    resetTarget() {
      this.opacity = 0
      this.left = 0
      this.top = 0
    },
    startCountdown() {
      let count = this.playerSettings.delay
      this.countdown = setInterval(() => {
        count = count - 1
        if (count === 0) {
          this.randomizedPosition()
          this.opacity = 1
          this.showUpTime = performance.now()
          clearInterval(this.countdown)
        }
      }, 1000)
    },
    handleClick() {
      this.clickTime = performance.now()
      this.userTime = ((this.clickTime - this.showUpTime) / 1000).toFixed(4)
      this.$store.dispatch('ranking/saveResult', {
        name: this.playerSettings.name,
        time: this.userTime,
      })
      this.resetTarget()
    },
    randomizedPosition() {
      const targetWidth = this.$refs.target.offsetWidth
      const targetHeight = this.$refs.target.offsetHeight
      const zoneWidth = this.$refs.playZone.offsetWidth
      const zoneHeight = this.$refs.playZone.offsetHeight
      this.targetX = Math.random() * (zoneWidth - targetWidth)
      this.targetY = Math.random() * (zoneHeight - targetHeight)
    },
  },
}
</script>

<style lang="stylus">
.view
  position absolute
  left 0
  top 0
  width 100%
  height 100%
  background rgba(255,255,255,0.7)
  display flex
  flex-direction column
  align-items center
  justify-content center
  z-index 1
</style>
