import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyB4Cvz3ic_OZgoRKt9AFgYRlzsTqRetRXw",
    authDomain: "react-native-app-fd88c.firebaseapp.com",
    projectId: "react-native-app-fd88c",
    storageBucket: "react-native-app-fd88c.appspot.com",
    messagingSenderId: "438512234484",
    appId: "1:438512234484:web:1c2f5682f4f448befd13a1" 
};
const fire=firebase.initializeApp(firebaseConfig);
export default fire;