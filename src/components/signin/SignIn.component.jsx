import React, { useState } from 'react'
import FormButtonComponent from '../forms/button/FormButton.component';
import FormInputComponent from '../forms/input/FormInput.component';

import './SignIn.styles.scss'

import { signInWithGoogle } from '../../firebase/firebase.utils';

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
            <div className="buttons">
                <FormButtonComponent type="submit">Sign In</FormButtonComponent>
                <FormButtonComponent onClick={signInWithGoogle} isGoogleSignin onSubmit={(e) => e.preventDefault()}>Sign In with Google</FormButtonComponent>
            </div>
        </form>
    </div>
}