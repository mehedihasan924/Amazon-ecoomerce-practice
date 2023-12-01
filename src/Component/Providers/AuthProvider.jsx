import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const AuthContext=createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  const [user, setUser]=useState(null);
 const [loading, setLoading]=useState(true)

    const creatUser=(email, password)=>{
       setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }

   const signIn=(email ,password)=>{
       setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
   }

    const logOut=()=>{
      setLoading(true)
      return signOut(auth);
    }

// observer user auth state
    useEffect(()=>{
         const unsubscribe =onAuthStateChanged( auth, currentUser=>{
            setUser(currentUser)
            setLoading(false);
         });

         // stop observehile unmountinging 
         return()=>{
          return unsubscribe();
         }

    }, [])

 const authInfo={
  user,
  loading,
  creatUser,
  signIn,
  logOut,
 
 }
    return (
      <AuthContext.Provider value={authInfo}>
                {children}
      </AuthContext.Provider>
);
};

export default AuthProvider;