import posts from '@/plugins/api/posts.js'

export default function (ctx, inject) {
  const api = {
    posts: posts(ctx),
  }

  ctx.$api = api
  inject('api', api)
}
