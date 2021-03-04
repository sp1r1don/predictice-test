<template lang="pug">
  div
    Preloader(v-if="fetchPostPending")
    .post(v-else)
      .post-header
        span.post-header__back(@click="$router.push('/')") < Back to posts
        span You are currently reading post: # {{ post.id }}
      .post__ttl {{ post.title }}
      .post__body {{ post.body }}
</template>

<script>
export default {
  name: 'Id',
  data() {
    return {
      fetchPostPending: true,
      post: {},
    }
  },
  created() {
    this.fetchPostById()
  },
  methods: {
    async fetchPostById() {
      this.fetchPostPending = true
      try {
        const resp = await this.$api.posts.getById(this.$route.params.id)
        this.post = resp.data
      } catch (e) {
        // eslint-disable-next-line no-console
        console.error(e)
      }
      this.fetchPostPending = false
    },
  },
}
</script>

<style lang="stylus">
.post-header
  width 100%
  display flex
  align-items center
  justify-content space-between
  padding 0 0 40px 0
  &__back
    cursor pointer
    &:hover
      color $liteGreen
.post
  &__ttl
    font-weight 600
    color $liteGreen
    font-size 1.6rem
    margin-bottom 1em
</style>
