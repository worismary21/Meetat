import { initializeApp } from 'firebase/app';
import { getAuth, FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import firebaseConfig from './firebaseConfig';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new FacebookAuthProvider();

const loginWithFacebook = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      const credential = FacebookAuthProvider.credentialFromResult(result);
      const accessToken = credential?.accessToken;
      console.log('User signed in:', user, 'Token:', accessToken);
    })
    .catch((error) => {
      console.error('Error signing in with Facebook:', error.code, error.message);
    });
};

// ✅ Final export
export { app, auth, db, loginWithFacebook, FacebookAuthProvider };











