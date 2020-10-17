import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import '../css/style.css'

Vue.config.productionTip = false

Vue.use(Buefy)
new Vue({
  render: h => h(App),
}).$mount('#app')
