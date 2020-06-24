import firebase from "firebase/app";

import "firebase/auth"; //auth
import "firebase/database"; //database
import "firebase/storage"; //storing images

const firebaseConfig = {
    apiKey: "AIzaSyD3JOvyEiLTtjXGVa_z00owAEKzRLP9yFo",
    authDomain: "primevideo-425f6.firebaseapp.com",
    databaseURL: "https://primevideo-425f6.firebaseio.com",
    projectId: "primevideo-425f6",
    storageBucket: "primevideo-425f6.appspot.com",
    messagingSenderId: "125313850001",
    appId: "1:125313850001:web:ea6501b4f2533194573d30"
  
};

firebase.initializeApp(firebaseConfig); //firebase init
export default firebase;