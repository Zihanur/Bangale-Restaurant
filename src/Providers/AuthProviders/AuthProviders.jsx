import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import app from "../../firebase/firebase.init";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider();
const githubAuthProvider = new GithubAuthProvider();

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //firebase user create function
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const addNamePhotoUrl = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //login with google function
  const loginWithGoogle = () => {
    return signInWithPopup(auth, googleAuthProvider);
  };

  //login with github function
  const loginWithGithub = () => {
    return signInWithPopup(auth, githubAuthProvider);
  };

  //user logout function
  const logOut = () => {
    return signOut(auth);
  };

  //get current user
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("Current user in the auth state observed", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubcribe();
    };
  }, []);

  const authinfo = {
    user,
    createUser,
    addNamePhotoUrl,
    logIn,
    loginWithGoogle,
    loginWithGithub,
    logOut,
    loading,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
