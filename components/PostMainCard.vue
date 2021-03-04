<template lang="pug">
  .post-main-card(@click="$router.push(`/posts/${post.id}`)")
    .post-main-card__num # {{ post.id }}
    .post-main-card__ttl {{ post.title }}
    .post-main-card__desc {{ post.body }}
</template>

<script>
export default {
  name: 'PostMainCard',
  props: {
    post: {
      type: Object,
      default() {
        return {
          id: '',
          body: '',
          title: '',
          userId: '',
        }
      },
    },
  },
}
</script>

<style lang="stylus">
.post-main-card
  position relative
  padding 3rem
  border 1px solid $grey
  border-radius 10px
  cursor pointer
  &:not(:last-child)
    margin-bottom 20px
  &:hover
    border-color $liteGreen
  &__num
    position absolute
    right 1rem
    top 1rem
    font-weight 500
    color $liteGreen
  &__ttl
    font-size 1.4rem
    font-weight bold
    margin-bottom 1em
    color $fontSecondary
</style>
