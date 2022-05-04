import Vue from 'vue'
import App from './App.vue'
import styles from "../src/assets/sass/main.sass"
import Slick from 'vue-slick';

Vue.use(Slick)
Vue.config.productionTip = false

new Vue({
  styles,
  render: h => h(App),
}).$mount('#app')
