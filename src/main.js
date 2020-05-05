import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' 
import axios from 'axios'
import { Form, HasError, AlertError } from 'vform'

import './assets/app.scss'; 
import './lib/script'

require('@/store/subscriber')
axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)


Vue.config.productionTip = false

store.dispatch('auth/attempt', localStorage.getItem('token')).then(() => {
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})


