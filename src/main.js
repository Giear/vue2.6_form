import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import store from './store/index'
import routes from './router/index'
// import BScroll from 'better-scroll'

// Vue.use(BScroll)
Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
