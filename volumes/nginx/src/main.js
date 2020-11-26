import Vue from 'vue'
import App from './App'
import router from './router'

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import '@mdi/font/css/materialdesignicons.css'

// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from "@fortawesome/free-solid-svg-icons";
// import { faDocker } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// library.add(fas, faDocker);
// Vue.component('vue-fontawesome', FontAwesomeIcon);


Vue.config.productionTip = false
Vue.use(Buefy)
// Vue.use(Buefy, {
//   defaultIconComponent: 'vue-fontawesome',
// })

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})