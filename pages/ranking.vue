<template lang="pug">
  div
    h2.ranking-title Results table
    .ranking-table-controls
      .ranking-table-controls__item(
        :class="{'ranking-table-controls__item--active': sort === 'desc'}"
        @click="sort = 'desc'"
      ) Best time
      .ranking-table-controls__item(
        :class="{'ranking-table-controls__item--active': sort === 'asc'}"
        @click="sort = 'asc'"
      ) Dirty time
    .ranking-table
      .ranking-table__head
        span #
        span Name
        span Time (sec)&nbsp;
          span.ranking-table__head-sort
      .ranking-table__row(v-for="(player, index) in sortedList")
        span {{ index }}
        span {{ player.name }}
        span {{ player.time }}
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Ranking',
  data() {
    return {
      sort: 'desc',
    }
  },
  computed: {
    ...mapState('ranking', {
      list: (state) => state.list,
    }),
    sortedList() {
      return this.list.slice().sort((a, b) => {
        if (a.time > b.time) return this.sort === 'desc' ? 1 : -1
        if (a.time < b.time) return this.sort === 'desc' ? -1 : 1
        return 0
      })
    },
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
.ranking-table-controls
  display flex
  align-items center
  margin-bottom 1rem
  &__item
    margin-right 1rem
    cursor pointer
    position relative
    padding-left 2rem
    &:after
      content ''
      display block
      position absolute
      left .5rem
      top 50%
      transform translateY(-50%)
      width 1rem
      height 1rem
      border 1px solid $liteGreen
      border-radius 50%
    &--active:before
      content ''
      display block
      position absolute
      left calc(1rem + 1px)
      top 50%
      transform translate(-50%, -50%)
      width .8rem
      height .8rem
      border-radius 50%
      background $liteGreen
</style>
