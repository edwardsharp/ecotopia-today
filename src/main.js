import './assets/reset.css'
import 'material-design-icons/iconfont/material-icons.css'
import 'vue-image-lightbox/dist/vue-image-lightbox.min.css'
import './assets/styles.css'

import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
import VueResource from 'vue-resource'

import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(VueLazyLoad)
Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
