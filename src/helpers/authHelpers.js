import firebase from 'firebase';
import { Google } from 'expo';
import { AsyncStorage } from 'react-native';

export const isLoggedIn = async () => firebase.auth().currentUser;

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
  const unsubscribe = firebase.auth().onAuthStateChanged(firebaseUser => {
    unsubscribe();
    // Check if we are already signed-in Firebase with the correct user.
    if (isUserEqual(googleUser, firebaseUser)) {
      return;
    }
    // Build Firebase credential with the Google ID token.
    const credential = firebase.auth.GoogleAuthProvider.credential(
      googleUser.idToken,
      googleUser.accessToken,
    );
    // Sign in with credential from the Google user.
    firebase.auth()
      .signInAndRetrieveDataWithCredential(credential)
      .catch(error => {
        throw new Error(error);
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.email;
        // // The firebase.auth.AuthCredential type that was used.
        // const credential = error.credential;
        // // ...
      });
  });
};

export const signInWithGoogleAsync = async config => {
  try {
    const result = await Google.logInAsync(config);

    if (result.type === 'success') {
      onSignIn(result);
      await AsyncStorage.setItem('@AuthStore:AUTH_TOKEN', result.accessToken);
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (err) {
    throw new Error(err);
  }
};

export const signOut = async () => firebase.auth().signOut().catch(err => {
  throw new Error(err);
});
