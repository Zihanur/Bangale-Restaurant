import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);

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

  //user logout function
  const logOut = () => {
    return signOut(auth);
  };

  //get current user
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      console.log("Current user in the auth state observed", currentUser);
      setUser(currentUser);
    });
  }, []);

  const authinfo = {
    user,
    createUser,
    addNamePhotoUrl,
    logIn,
    logOut,
  };
  return (
    <AuthContext.Provider value={authinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
