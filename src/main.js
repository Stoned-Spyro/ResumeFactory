import Vue from 'vue'
import App from './App.vue'
import * as firebase from "firebase/app";
import "firebase/auth";
import"firebase/firestore";
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
