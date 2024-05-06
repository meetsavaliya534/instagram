import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyAPGRdPBo0pxzbCLAjXjgIfWrImh4uUzj4",
//   authDomain: "instagram-ef4dc.firebaseapp.com",
//   projectId: "instagram-ef4dc",
//   storageBucket: "instagram-ef4dc.appspot.com",
//   messagingSenderId: "880988124873",
//   appId: "1:880988124873:web:89963873e0f0586fef7f18",
//   measurementId: "G-H1J2NQ2MD1",
// };
const firebaseConfig = {
  apiKey: "AIzaSyAi5Y4AKQ93IkjeAh8_UQtBL5WllKfkmyU",
  authDomain: "insta-ab30c.firebaseapp.com",
  projectId: "insta-ab30c",
  storageBucket: "insta-ab30c.appspot.com",
  messagingSenderId: "458388709764",
  appId: "1:458388709764:web:98f7a9d68029e2a0097dd1"
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();
export {firebase, db};
