import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'



import header from "./moudel/commond/header.vue";
import connect from "./moudel/commond/content.vue";
import List from "./moudel/commond/List.vue";	

import observer from '../static/js/observer.js';

Vue.use(VueAwesomeSwiper)

//全局组件
Vue.component(header.name,header);
Vue.component(connect.name,connect);
Vue.component(List.name,List);

//非父子组件传值
Vue.prototype.$observer=observer;

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
