import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/scss/globals.scss'
import 'prismjs/themes/prism.css'
import("prismjs/themes/prism-okaidia.css")
export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
  head.htmlAttrs = { lang: 'en' }
}
