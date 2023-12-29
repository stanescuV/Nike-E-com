import {React, useState,useRef} from 'react'
import { useAuth } from "../../contexts/AuthContext";
import "./signIn.css"

function SignIn() {
    const emailRef = useRef();
    const passwordRef= useRef();
    const {signIn} = useAuth();
    const [userCredential, setUserCredential] = useState();
    async function handleSubmit(e){
        e.preventDefault();

        //Sign In cu EmailRef si PasswordRef 
        setUserCredential(await signIn(emailRef.current.value, passwordRef.current.value))
        
      

    }

    return (
        <div className="form-sign-in">
            {userCredential && <>Sign In was successful </>} 
            <form onSubmit={handleSubmit}>
                <h2>Ready to Sign In ?</h2>
                <div className="input-container">
                    <label>Username </label>
                    <input type="text" name="uname" ref={emailRef} />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" ref={passwordRef} />
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}

export default SignIn