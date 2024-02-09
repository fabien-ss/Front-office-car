import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from './firebase';

const provider = new GoogleAuthProvider();

// Sign up function
export const signUp = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

// Sign in function
export const signIn = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

// Sign out function
export const signOutUser = async () => {
  return await signOut(auth);
};

// Send password reset email function
export const passwordReset = async (email) => {
  return await sendPasswordResetEmail(auth, email);
};

export const popPupSingin = async () => {
  return await signInWithPopup(auth, provider)
};

export const popUpSignUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // The user account has been created and the user is signed in.
    return userCredential.user;
  } catch (error) {
    // Handle Errors here.
    console.trace(error);
    alert(error);
  }
 };

export const popUpSignInWithGoogle = async () => {
 const provider = new GoogleAuthProvider();
 try {
  const userCredential = await signInWithPopup(auth, provider);
  // The user account has been created and the user is signed in.
  return userCredential.user;
 } catch (error) {
  // Handle Errors here.
  console.log(error);
 }
};
