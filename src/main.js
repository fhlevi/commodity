import Vue from 'vue'
import ApiBase from 'Api'
// Documents
import App from './App.vue'
// service worker
import './registerServiceWorker'
// router link
import router from './router'
// store
import store from './store'
// config
import eFishery from 'Config/efishery';
import Meta from 'Config/vuemeta';
import VeeValidate from 'Config/veeValidate';
// library
import vuetify from 'Plugins/vuetify'
import '@fortawesome/fontawesome-pro/css/all.css'
// helper
import eventBus from 'Helper/eventBus';
import Moment from 'Helper/moment'
// css style
import 'Assets/scss/main.scss';

Vue.config.productionTip = false

Vue.prototype.$bus = eventBus
Vue.prototype.$baseUrl = window.location.origin
// Vue.prototype.$axios = ApiBase
Vue.prototype.$stein = ApiBase
Vue.prototype.$moment = Moment

Vue.use(Meta)
Vue.use(eFishery)
Vue.use(VeeValidate)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
