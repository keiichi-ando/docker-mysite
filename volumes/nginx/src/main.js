import Vue from 'vue'
import App from './App'
import router from './router'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas)
Vue.component('vue-fontawesome', FontAwesomeIcon);
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.config.productionTip = false
Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaltIconPack: 'fas'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})