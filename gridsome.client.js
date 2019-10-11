export default function (Vue, options, { router }) {
  if (process.isClient) {
    const { default: VueMatomo } = require('vue-matomo')

    Vue.use(VueMatomo, {
      router,
      ...options
    })
  }
}
