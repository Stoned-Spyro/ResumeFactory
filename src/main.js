import Vue from 'vue'
import App from './App.vue'
import * as firebase from "firebase/app";
import "firebase/auth";
import"firebase/database";
import "firebase/storage";
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  created(){
      // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBhqToV11fypnm86vTfhscYsFo_XpxIK1M",
    authDomain: "resumefactory12.firebaseapp.com",
    databaseURL: "https://resumefactory12.firebaseio.com",
    projectId: "resumefactory12",
    storageBucket: "resumefactory12.appspot.com",
    messagingSenderId: "247558246897",
    appId: "1:247558246897:web:8c5122879fa3448b3a7450"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  }
}).$mount('#app')
