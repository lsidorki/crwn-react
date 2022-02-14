import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();

const config = {
    apiKey: "AIzaSyA6BtFLoHtBzKlQlb4Tl46C1NMmjwW2cU8",
    authDomain: "crwn-db-1211f.firebaseapp.com",
    projectId: "crwn-db-1211f",
    storageBucket: "crwn-db-1211f.appspot.com",
    messagingSenderId: "945231712567",
    appId: "1:945231712567:web:3b34bd5c92ccdeadcbcab2"
  };

// Initialize Firebase
firebase.initializeApp(config)

export const auth = getAuth();
export const firestore = firebase.firestore();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const createUserProfile = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName, email, createdAt, ...additionalData
            })
        } catch (error) {
            console.log('error creating a user', error.message);
        }
    }

    return userRef;
}