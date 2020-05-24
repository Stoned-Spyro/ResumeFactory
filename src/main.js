import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import firebase from "firebase";
import 'firebase/firestore'
import FirebaseConfig from './config/firebase';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import store from './store/store';
import router from './router';



Vue.use(Buefy);
Vue.use(Vuelidate)

Vue.config.productionTip = false;

let app = '';

const firebaseApp=firebase.initializeApp(FirebaseConfig);
export const db = firebaseApp.firestore();

firebase.auth().onAuthStateChanged(()=>{
  if(!app){
    app=new Vue ({
      router,
      store,
      render: h => h(App)
    }).$mount('#app');
  }
});