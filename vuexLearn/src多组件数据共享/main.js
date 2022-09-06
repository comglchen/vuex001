import Vue from 'vue'
import App from './App.vue'
//import Vuex from 'vuex'
import store from './store'
//Vue.use(Vuex)
Vue.config.productionTip = false

const vm = new Vue({
  render: h => h(App),
  store,
  beforeCreate() {
    Vue.prototype.$bus = this
  }
}).$mount('#app')
console.log(vm)