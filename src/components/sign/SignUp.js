import {React, useRef, useState} from 'react'
import "./signup.css"
import { useAuth } from "../../contexts/AuthContext";
import { Link } from 'react-router-dom';


function SignUp() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const {signUp, currentUser} = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)

   async function handleSubmit(e){
    //in caz de refresh
    e.preventDefault()
    //daca parola e diferita
    if (passwordRef.current.value !== confirmPasswordRef.current.value){
      return setError("Password do not match")
    }
    
      setError("")
      setLoading(true);
      await signUp(emailRef.current.value, passwordRef.current.value).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        if (errorCode == 'auth/weak-password') {
          setError('The password is too weak.');
        }
        console.log(error);
      });
    
   
    setLoading(false);
  }
 

  return (
    <>
      <Link to="/">
      <button>Home</button>
      </Link>
      <div className='form-sign-up'>
        <form onSubmit={handleSubmit}>
          <h2>Ready to Sign Up ?</h2>
          {/*SHOW THE CURRENT USER.email ON THE SCREEN*/ }
          {currentUser && currentUser.email}
          {/*SHOW THE ERROR*/ }
          {error && <div style={{ color: 'red' }}>{error}</div>}

          {/*EMAIL SECTION*/ }
          
          <div className="input-container">
              <label>Email </label>
              <input type="email" name="email" ref={emailRef}  />
          </div>

          {/*PASSWORD SECTION*/ }
          <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" ref={passwordRef} />
          </div>
          <div className="input-container">
              <label>Confirm Password </label>
              <input type="password" name="pass" ref={confirmPasswordRef} />
          </div>
          <div className="button-container" >
              <button type="submit" disabled={loading}> Submit </button>
          </div>
        </form>

      </div>
    </>)
}

export default SignUp