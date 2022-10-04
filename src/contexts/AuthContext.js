import React, { createContext, useContext, useEffect, useState } from 'react'
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import app from '../backend/Firebase'

const AuthContext = createContext() 

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider ({ children }) {
    const auth = getAuth(app)
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        })
    
        return unsubscribe
    }, [auth])

    const value = {
        currentUser,
        signup,
        login
    }


    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}