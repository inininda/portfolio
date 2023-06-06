import { createApp, markRaw } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import vuetify from './plugins/vuetify'
import 'virtual:windi.css'
import * as BaseUI from './components/base'
import mitt from 'mitt'
import VueCountdown from '@chenfengyuan/vue-countdown'
import axios from 'redaxios'
import 'vue3-carousel/dist/carousel.css'

const BaseComponents = {
  install(Vue) {
    Object.values(BaseUI).forEach((Component) => {
      Vue.component(Component.name, Component)
    })
  }
}

const emitter = mitt()

const pinia = createPinia()
pinia.use(({ store }) => {
  store.$router = markRaw(router)
})
const app = createApp(App)

app.component(VueCountdown.name, VueCountdown)

app.provide('emitter', emitter)

app.use(pinia)
app.use(router)
app.use(vuetify)
app.use(BaseComponents)

app.mount('#app')
