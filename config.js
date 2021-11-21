import firebase from 'firebase';
require('@firebase/firestore');
//test
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyAx1FEENkZJ1tm0TKO7rZikejvIPPTNbz4',
  authDomain: 'iss-tracker-1e8e3.firebaseapp.com',
  projectId: 'iss-tracker-1e8e3',
  storageBucket: 'iss-tracker-1e8e3.appspot.com',
  messagingSenderId: '569940952878',
  appId: '1:569940952878:web:0c8c144f9402ea808f5cbf',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
