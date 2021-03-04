<template lang="pug">
  div
    Preloader(v-if="postsPending")
    template(v-else)
      PostMainCard(v-for="post in postsForShow" :key="post.id" :post="post")
      .show-more-btn
        MainButton(v-if="totalPosts > onPage" @click.native="onPage = onPage + 5") Show more
</template>

<script>
export default {
  data() {
    return {
      postsPending: true,
      posts: [],
      onPage: 5,
    }
  },
  computed: {
    postsForShow() {
      return this.posts.slice(0, this.onPage)
    },
    totalPosts() {
      return this.posts.length
    },
  },
  created() {
    this.fetchPostsList()
  },
  methods: {
    async fetchPostsList() {
      this.postsPending = true
      try {
        const resp = await this.$api.posts.getList()
        this.posts = resp.data
      } catch (e) {
        // here we can use 'toast' component or something like that
        // eslint-disable-next-line no-console
        console.error(e)
      }
      this.postsPending = false
    },
  },
}
</script>

<style lang="stylus">
.show-more-btn
  text-align center
</style>
