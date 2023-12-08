import {React, useRef} from 'react'
import "./signup.css"

function SignUp() {

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  return (
    <div className='form-sign-up'>
      <form>
        <h2>Ready to Sign Up ?</h2>

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
        <div className="button-container">
            <input type="submit" />
        </div>
      </form>

    </div>
  )
}

export default SignUp