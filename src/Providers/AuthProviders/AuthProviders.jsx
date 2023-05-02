import React, { createContext, useState } from 'react';
import { getAuth } from "firebase/auth";
import app from '../../firebase/firebase.init';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const AuthProviders = ({children}) => {

  const [user,setUser] = useState(null);

  const authinfo = {
    user
  }
  return (
    <AuthContext.Provider value={authinfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProviders;