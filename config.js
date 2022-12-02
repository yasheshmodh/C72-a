import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBwjXJd7PW_2LixlO7VzcpuPePOA2WYHd8",
  authDomain: "e-library-app-d8c05.firebaseapp.com",
  projectId: "e-library-app-d8c05",
  storageBucket: "e-library-app-d8c05.appspot.com",
  messagingSenderId: "1063562656129",
  appId: "1:1063562656129:web:c0cfa725c9f72309ea9080"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
