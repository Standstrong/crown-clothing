/*import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';*/

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {

    apiKey: "AIzaSyAXtIaJGRy38DWkhGa3P835mlgdu5nxLPY",
    authDomain: "crown-db-375e5.firebaseapp.com",
    databaseURL: "https://crown-db-375e5.firebaseio.com",
    projectId: "crown-db-375e5",
    storageBucket: "crown-db-375e5.appspot.com",
    messagingSenderId: "1079583457336",
    appId: "1:1079583457336:web:74351ed29cb75de8bea6cd",
    measurementId: "G-KCLD1SB1F8"

};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;



/*firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoggleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;*/

