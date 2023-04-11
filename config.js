 import firebase from "firebase";

  const firebaseConfig = {
    apiKey: "AIzaSyBhEZg2x86vSHrz1HgIGiglx6XMNvQou6E",
    authDomain: "school-attendance-6006b.firebaseapp.com",
    projectId: "school-attendance-6006b",
    storageBucket: "school-attendance-6006b.appspot.com",
    messagingSenderId: "716631068303",
    appId: "1:716631068303:web:a202a87488ed97a15ceafa"
  };


 firebase.initializeApp(firebaseConfig);
  export default firebase.database()
 

  