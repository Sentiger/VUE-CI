import Vue from 'vue'
// import App from './App.vue'
require('./bootstrap');
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(ElementUI);

import Success from './components/Success.vue'
import Icons from './components/Icon.vue'

new Vue({
  el: '#app',
  components: {
    Success,Icons
  }
})
