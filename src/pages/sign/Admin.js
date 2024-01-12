import React,{ useState, useRef} from 'react'
import { useAuth } from '../../contexts/AuthContext';

function Admin() {
    const [admin, setAdmin] = useState("");
    const { currentUser, signInAdmin } = useAuth();
    const emailRef = useRef();
    const passwordRef= useRef();


    const divLogin = 
    (
    <div >
        <h2>Ready to Sign In Mr Admin?</h2>
        {/*Email ref */}
        <div className="input-container">
            <label>Username </label>
            <input type="text" name="email" ref={emailRef}  />
        </div>
        {/*Password ref */}
        <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" ref={passwordRef} />
        </div>
        <button onClick={()=> {handleSignInAdmin()}}>Submit </button>
    </div>
     );

    async function handleSignInAdmin(){
        setAdmin(await signInAdmin(emailRef.current.value, passwordRef.current.value,setAdmin));
    }

    return (
    
    <div className="form-sign-in">
        {admin && admin.length>0 && <>Hi Mr Admin</>}
        {!admin && divLogin}
    </div>
    
    )
}

export default Admin