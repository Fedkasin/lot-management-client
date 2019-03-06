import firebase from 'firebase';
import { Google } from 'expo';

export const getUser = () => {
  const user = firebase.auth().currentUser;
  return user ? {
    name: user.displayName,
    photoUrl: user.photoURL,
  } : null;
};

export const isLoggedIn = () => new Promise((resolve) => {
  firebase.auth().onAuthStateChanged(user => (user ? resolve({
    name: user.displayName,
    photoUrl: user.photoURL,
  }) : resolve(null)));
});

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
      // await AsyncStorage.setItem('@UserStore:USER', JSON.stringify(result.user));
      return result;
    } else {
      return { cancelled: true };
    }
  } catch (err) {
    throw err;
  }
};

export const signOut = async () => firebase.auth().signOut().catch(err => {
  throw err;
});
