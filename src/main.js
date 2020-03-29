import Vue from 'vue';
import App from './App.vue';
import firebase from "firebase";
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import store from './store'
import router from './router'

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyBhqToV11fypnm86vTfhscYsFo_XpxIK1M",
  authDomain: "resumefactory12.firebaseapp.com",
  databaseURL: "https://resumefactory12.firebaseio.com",
  projectId: "resumefactory12",
  storageBucket: "resumefactory12.appspot.com",
  messagingSenderId: "247558246897",
  appId: "1:247558246897:web:8c5122879fa3448b3a7450"
};
firebase.initializeApp(firebaseConfig);

Vue.use(Buefy);

new Vue ({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
