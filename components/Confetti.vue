<template lang="pug">
  canvas(ref="canvas")
</template>

<script>
import { ParticleSystem, MathUtils } from 'particlesystems'

export default {
  name: 'Confetti',
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const canvas = this.$refs.canvas
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      this.start()
    },
    draw(doClear, ps) {
      const canvas = this.$refs.canvas
      const Width = 12
      const Height = 6
      const ctx = canvas.getContext('2d')
      if (doClear) ctx.clearRect(0, 0, canvas.width, canvas.height)
      for (const p of ps.particles) {
        const userData = p.data

        ctx.save()
        ctx.globalAlpha = 1 - p.normalizedAge
        ctx.fillStyle = p.data.color
        ctx.translate(
          ps.position.x + p.position.x,
          ps.position.y + p.position.y
        )
        ctx.rotate(
          userData.initialRotation +
            Math.PI * 2 * p.normalizedAge ** 2 * userData.rotationSpeed
        )
        ctx.fillRect(-Width, -Height, Width, Height)
        ctx.restore()
      }
    },
    start() {
      const canvas = this.$refs.canvas
      // creates two particle systems, facing each other
      const confetti = Array(2)
        .fill(0)
        .map(
          (_, i) =>
            new ParticleSystem(
              {
                initialCount: 0,
                position: { x: i ? 0 : canvas.width, y: canvas.height / 2 },
                forces: {
                  gravity: { x: 0, y: 498, z: 0 },
                  wind: { x: (i ? 1 : -1) * -200, y: 0, z: 0 },
                },
                emitter: {
                  particlesPerSecond: 2500,
                  lifetime: 0.06,
                  strategy: 'random',
                  particles: {
                    initialPos: {
                      x: { min: -5, max: 5 },
                      y: { min: -5, max: 5 },
                    },
                    initialVelocity: MathUtils.Factories.inDirectionOf(
                      { x: (i ? 1 : -1) * 800, y: -500 },
                      Math.PI / 5,
                      0.4
                    ),
                    lifetime: { min: 0.5, max: 2 },
                    customDataFactory: () => ({
                      initialRotation: MathUtils.random({
                        min: -Math.PI * 2,
                        max: Math.PI * 2,
                      }),
                      rotationSpeed: MathUtils.random({ min: 0.2, max: 2 }),
                      color: MathUtils.randomize([
                        'orange',
                        'lightblue',
                        'green',
                        'red',
                      ]),
                    }),
                  },
                },
              },
              this.draw.bind(window, i === 0)
            )
        )
      confetti.forEach((ps) => ps.start())
    },
  },
}
</script>

<style lang="stylus">
canvas
  position: absolute;
  top 0
  left 0
  width 100%
  height 100%
  z-index -1
</style>
