<template lang="pug">
  div
    h2.ranking-title Results table
    .ranking-table
      .ranking-table__head
        span #
        span Name
        span Time (sec)
      .ranking-table__row(v-for="(player, index) in getSortedList")
        span {{ index }}
        span {{ player.name }}
        span {{ player.time }}
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Ranking',
  computed: {
    ...mapGetters('ranking', ['getSortedList']),
  },
}
</script>

<style lang="stylus">
.ranking-title
  margin-top 0
  text-align center
.ranking-table
  width 100%
  &__head,
  &__row
    width 100%
    display flex
    align-items center
    padding .5rem
    border-bottom 1px solid rgba(0,0,0, .2)
    span:first-child
      flex 1 1 0
      color $liteGreen
      font-weight bold
    span:nth-child(2)
      flex 4 1 0
    span:last-child
      flex 2 1 0
  &__head
    font-weight bold
</style>
