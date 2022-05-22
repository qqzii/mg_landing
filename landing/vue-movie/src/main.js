import Vue from 'vue'
import App from './App.vue'
import styles from "../src/assets/sass/main.sass"
import Toasted from 'vue-toasted'

Vue.use(Toasted, {
  position: "top-right",
  duration: 3000,
  keepOnHover: true,
  theme: 'toasted-primary',
  closeOnSwipe: true,
  singleton: true
})

Vue.config.productionTip = false

new Vue({
  styles,
  render: h => h(App),
}).$mount('#app')
