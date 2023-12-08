import {React, useState} from 'react'
import "./signIn.css"

function SignIn() {
  return (
    <div className="form-sign-in">
        <form>
            <h2>Ready to Sign In ?</h2>
            <div className="input-container">
                <label>Username </label>
                <input type="text" name="uname" required />
            </div>
            <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" required />
            </div>
            <div className="button-container">
                <input type="submit" />
            </div>
        </form>
   </div>
  )
}

export default SignIn