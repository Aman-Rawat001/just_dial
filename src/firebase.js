import firebase from "firebase";
// import "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAb58AH0hjgWNDOi8JCk4_7Se46Cwl6csA",
  authDomain: "dun-services.firebaseapp.com",
  projectId: "dun-services",
  storageBucket: "dun-services.appspot.com",
  messagingSenderId: "631505431217",
  appId: "1:631505431217:web:e681b17171d2ea9b555090",
  measurementId: "G-6LF7X7KDZM",
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.firestore();
const analytics = firebase.analytics();

export { storage, firebase as default };
// export { analytics };
