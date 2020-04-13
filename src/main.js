import Vue from 'vue';
import App from './App.vue';
import firebase from "firebase";
import 'firebase/firestore'
import FirebaseConfig from './config/firebase';
import Buefy from 'buefy';
import 'buefy/dist/buefy.css';
import store from './store/store';
import router from './router';

Vue.use(Buefy);

Vue.config.productionTip = false;

const firebaseApp=firebase.initializeApp(FirebaseConfig);
firebaseApp.firestore()


new Vue ({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
