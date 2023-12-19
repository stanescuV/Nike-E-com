import React, {useContext, useState, useEffect} from 'react'
import {auth} from "../firebase"

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState();

    function signUp(email, password){
        //care returneaza un promise
       
            return auth.createUserWithEmailAndPassword(email, password)
   
    }
    
    //Sign In function 
    
  async function signIn(email, password) {
    const userCredential = await auth.signInWithEmailAndPassword(email, password)
    .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage)
  })
    const user = userCredential.user;
    return user
}


    //user session 
    useEffect(()=>{
       const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return unsubscribe
    },[])

    //valoarea pe care o primesc toti copiii din context
    const value = {
        currentUser,
        signUp, signIn
    }


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
