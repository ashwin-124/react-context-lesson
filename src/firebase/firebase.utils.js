import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB3cTMbPxz_es9INPlYfUwZJT4Sisu4BIk',
  authDomain: 'reactjs-crwn-prj.firebaseapp.com',
  projectId: 'reactjs-crwn-prj',
  storageBucket: 'reactjs-crwn-prj.appspot.com',
  messagingSenderId: '1098255387955',
  appId: '1:1098255387955:web:d4be10af8979dc33a0c246',
  measurementId: 'G-MVESD46FE6',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
