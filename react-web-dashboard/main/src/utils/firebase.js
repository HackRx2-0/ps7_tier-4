
import Firebase from 'firebase';
// import "firebase/analytics";


// import "firebase/auth";
// import "firebase/firestore";

const firebaseConfig = {
  
    apiKey: "AIzaSyBNQr-qY5GAPEU16ac1YdhWgjTU5K5eONI",
    authDomain: "hackrx-tier4.firebaseapp.com",
    projectId: "hackrx-tier4",
    storageBucket: "hackrx-tier4.appspot.com",
    messagingSenderId: "904220556849",
    appId: "1:904220556849:web:d720a3568716523bef5f10",
    measurementId: "G-R8EEQEE0Z3"
  };
  Firebase.initializeApp(firebaseConfig)

  export const cloudStorage = Firebase.storage();
  // UPLOADING
  // var storageRef = firebase.storage().ref();
  // var message = '5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB';
  // ref.putString(message, 'base64').then((snapshot) => {
  //   console.log('Uploaded a base64 string!');

  // });

  