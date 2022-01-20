import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDLc5qwngDfySWmi0oAnN27UzMMn6FAtbY",
	authDomain: "pg-project-90709.firebaseapp.com",
	projectId: "pg-project-90709",
	storageBucket: "pg-project-90709.appspot.com",
	messagingSenderId: "965745822583",
	appId: "1:965745822583:web:8a2367f4b2aef131ec6f72",
	measurementId: "G-PTZNK0DTX0"
  };

firebase.initializeApp(firebaseConfig);

export default firebase;
