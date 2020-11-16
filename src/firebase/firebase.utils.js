import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBjghBTSu_he7qnYRdWksEjY43oxdUiDtw",
    authDomain: "crwn-db-93487.firebaseapp.com",
    databaseURL: "https://crwn-db-93487.firebaseio.com",
    projectId: "crwn-db-93487",
    storageBucket: "crwn-db-93487.appspot.com",
    messagingSenderId: "562349837687",
    appId: "1:562349837687:web:11068ab577ab8b3711e572",
    measurementId: "G-4LM44J2DKE"
  };


export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;