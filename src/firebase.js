import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyDm3o14MD2T6miBfyBQ7ZXqsAwZQSahwNA",
    authDomain: "fir-listapp-c473a.firebaseapp.com",
    databaseURL: "https://fir-listapp-c473a.firebaseio.com",
    projectId: "fir-listapp-c473a",
    storageBucket: "fir-listapp-c473a.appspot.com",
    messagingSenderId: "720579600271"
  };

const firebase = firebase.initializeApp(config);

export default firebase;