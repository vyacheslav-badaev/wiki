import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/scss/globals.scss'
import 'prismjs/themes/prism.css'
import("prismjs/themes/prism-okaidia.css")
import Vuex from 'vuex'
export default function (Vue, { router, head, isClient, appOptions }) {
  Vue.use(Vuex)
  Vue.component('Layout', DefaultLayout)
  head.htmlAttrs = { lang: 'en' }
  head.link.push({
    rel: 'stylesheet',
    href: 'https:
  })
  appOptions.store = new Vuex.Store({
    state: {
      sidebarOpen: false
    },
    mutations: {
      toggleSidebar(state) {
        state.sidebarOpen = !state.sidebarOpen
      },
      closeSidebar(state) {
        state.sidebarOpen = false
      },
      openSidebar(state) {
        state.sidebarOpen = true
      }
    }
  })
}
