import React,{useEffect, useState, useRef} from 'react'
import { useAuth } from '../../contexts/AuthContext';

function Admin() {
    const [admin, setAdmin] = useState();
    const { currentUser, signInAdmin } = useAuth();
    const emailRef = useRef();
    const passwordRef= useRef();

    async function handleSignInAdmin(){
        setAdmin(await signInAdmin(emailRef.current.value, passwordRef.current.value));
        console.log(admin)
        emailRef.current.value = "";
        passwordRef.current.value= "";
    }
    //de facut un sistem cu user si parola  
   

    return (
    
    <div className="form-sign-in">
        <div >

            <h2>Ready to Sign In Mr Admin?</h2>
            <div className="input-container">
                <label>Username </label>
                <input type="text" name="email" ref={emailRef}  />
            </div>
            <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" ref={passwordRef} />
            </div>
            <button onClick={(e)=> {handleSignInAdmin()}}>Submit </button>
        </div>
    </div>
    
    )
}

export default Admin