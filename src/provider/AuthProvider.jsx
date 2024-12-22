/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import auth from '@/firebase/firebase'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)



  const provider = new GoogleAuthProvider();
  const googleLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth, provider)
  }

  const createUser = (email, password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  
  const updateUser = (info) =>{
    setLoading(true)
    return updateProfile(auth.currentUser, info)
  }

  const signInUser = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logOut = async () => {
    setLoading(true)
    return signOut(auth)
  }

  // onAuthStateChange
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async currentUser => {
      setUser(currentUser)
        console.log('CurrentUser-->', currentUser)
        setLoading(false)
      
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  const authInfo = {
    createUser,
    logOut,
    updateUser,
    loading,
    user,
    setUser,
    signInUser,
    googleLogin
  }

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  )
}

export default AuthProvider
