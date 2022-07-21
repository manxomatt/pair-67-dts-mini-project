import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { initializeApp } from 'firebase/app'
import { useState, useEffect, useContext, createContext } from 'react'

const firebaseConfig = {
    apiKey: "AIzaSyBAv1KY_jBbi9h6zGmb7kdmdTUDYomnVzs",
    authDomain: "project-tmbd.firebaseapp.com",
    projectId: "project-tmbd",
    storageBucket: "project-tmbd.appspot.com",
    messagingSenderId: "786143801034",
    appId: "1:786143801034:web:ef614b561f746bfe32ce33"
}

//inisialisasi firebase dan auth

export const firebaseApp = initializeApp(firebaseConfig)

export const AuthContext = createContext()

export const AuthContextProvider = props => {
  const [user, setUser] = useState()
  const [error, setError] = useState()
  console.log(user)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
    return () => unsubscribe()
  }, [])
  return <AuthContext.Provider value={{ user, error }} {...props} />
}

export const useAuthState = () => {
  const auth = useContext(AuthContext)
    
  return auth
//   console.log(auth)
//   return { ...auth, isAuthenticated: auth.user !== null }
}