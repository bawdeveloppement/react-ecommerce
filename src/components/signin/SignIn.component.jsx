import React, { useState } from 'react'
import FormInputComponent from '../forms/input/FormInput.component';

import './SignIn.styles.scss'

export default () => {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    const handleSignIn = (e) => {
        e.preventDefault();
        setEmailInput("");
        setPasswordInput("");
    }

    return <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSignIn}>
            <FormInputComponent 
                name="email"
                type="email"
                value={emailInput}
                label="Email"
                handleChange={(e) => setEmailInput(e.target.value)} 
                required
            />
            <FormInputComponent
                name="password"
                type="password"
                label="Password"
                value={passwordInput}
                handleChange={(e) => setPasswordInput(e.target.value)} 
                required
            />
            <input type="submit" value="Submit form" disabled={emailInput.length === 0 && passwordInput === 0} />
        </form>
    </div>
}