export default function (ctx) {
  const getList = () =>
    ctx.$axios({
      method: 'get',
      url: '/posts',
    })
  const getById = (id) =>
    ctx.$axios({
      method: 'get',
      url: `/posts/${id}`,
    })
  return {
    getList,
    getById,
  }
}
