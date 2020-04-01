import Vue from 'vue';
import App from './App.vue';
import firebase from "firebase";
import FirebaseConfig from './config/firebase'
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import store from './store/store'
import router from './router'

Vue.use(Buefy);

Vue.config.productionTip = false;

firebase.initializeApp(FirebaseConfig);

new Vue ({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
