import VueMatomo from 'vue-matomo'

export default function (Vue, options, { isServer: disabled, router }) {
  Vue.use(VueMatomo, {
    router,
    disabled,
    ...options
  })
}
