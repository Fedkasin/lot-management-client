import firebase from 'firebase';
import { Google } from 'expo';
import { AsyncStorage } from 'react-native';

import LMapi from './lmapi';

export const isUserEqual = (googleUser, firebaseUser) => {
  if (firebaseUser) {
    const { providerData } = firebaseUser;
    for (let i = 0; i < providerData.length; i += 1) {
      if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID
        && providerData[i].uid === googleUser.getBasicProfile().getId()) {
        return true;
      }
    }
  }
  return false;
};

export const onSignIn = googleUser => {
  // We need to register an Observer on Firebase Auth to make sure auth is initialized.
  const unsubscribe = firebase.auth()
    .onAuthStateChanged(firebaseUser => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        const credential = firebase.auth.GoogleAuthProvider.credential(
          googleUser.idToken,
          googleUser.accessToken,
        );
        // Sign in with credential from the Google user.
        firebase.auth()
          .signInAndRetrieveDataWithCredential(credential)
          .then(async () => {
            const token = await firebase.auth().currentUser.getIdToken();
            await AsyncStorage.setItem('@UserStore:TOKEN', token);
          })
          .catch(error => {
            throw error;
            // Handle Errors here.
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // // The email of the user's account used.
            // const email = error.email;
            // // The firebase.auth.AuthCredential type that was used.
            // const credential = error.credential;
            // // ...
          });
      }
    });
};

export const signInWithGoogleAsync = async config => {
  try {
    const result = await Google.logInAsync(config);
    if (result.type === 'success') {
      onSignIn(result);
      return result;
    } else {
      return { cancelled: true };
    }
  } catch (err) {
    throw err;
  }
};

export const signOut = async () => {
  try {
    await Promise.all([
      firebase.auth().signOut(),
      LMapi.logOut(),
    ]);
  } catch (err) {
    throw err;
  }
};
