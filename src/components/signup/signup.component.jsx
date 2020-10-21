import React, { useState } from 'react'

import FormInput from '../forms/input/FormInput.component';
import FormButton from '../forms/button/FormButton.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './signup.styles.scss';

const SignUp = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        if (password !== confirmPassword) {
            alert('passwords don\'t match');
            return;
        }

        try {
            const { user} = await auth.createUserWithEmailAndPassword(email, password);
            
            createUserProfileDocument(user, { displayName });

            setConfirmPassword('');
            setDisplayName('');
            setEmail('');
            setPassword('');
        } catch(error) {
            console.error(error);
        }
    };

    return <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="signup-form" onSubmit={(e) => handleSubmit(e)}>
            <FormInput 
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                required
            />
            <FormInput
                type="text"
                name="displayName"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                label="Display Name"
                required
            />
            <FormInput
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                required
            />
            <FormInput
                name="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                label="Confirm Password"
                required
            />
            <FormButton>SIGN UP</FormButton>
        </form>
    </div>
}

export default SignUp