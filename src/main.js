import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

Vue.config.devtools = true
Vue.config.productionTip = false

new Vue({
  debug: true,
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

store.dispatch('loadAll')
