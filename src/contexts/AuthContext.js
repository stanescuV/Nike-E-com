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
            .then((userCredential)=> {
                userCredential.user.email;
                userCredential.user.uid; 
                fetch(`${process.env.REACT_APP_SERVER}/info-user`,{method: "POST", headers:{"Content-Type": "application/json"}, body:JSON.stringify({email : userCredential.user.email, uid :  userCredential.user.uid }) })
            })
   
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

    // sign in as an Admin

    async function signInAdmin(email, password, setAdmin){
        const userCredential = await auth.signInWithEmailAndPassword(email,password)
        .catch((err)=>{
            const errMessage = err.message;
            console.log(errMessage)
        })
        const user = userCredential.user;
        if(user){
            try{
                fetch(`${process.env.REACT_APP_SERVER}/admin`, {method: "POST", headers:{"Content-Type": "application/json"}, body:JSON.stringify({uid : user.uid})})
                .then(r=>r.json())
                .then(rr=>{
                    //Merge am incercat sa pun clg in loc de return si merge
                    if(rr[0].is_admin) {setAdmin(user.uid)} else { alert("you are not an admin")}
                })
            } catch(err){console.log(err);  alert("you are not an admin")}
        }
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
        signUp, signIn, signInAdmin
    }


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
