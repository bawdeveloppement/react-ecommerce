import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import SignIn from '../../components/signin/SignIn.component'
import SignUp from '../../components/signup/signup.component'

import './auth.styles.scss'

export default () => {
    const { currentUser } = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser) navigate("/");
    }, [navigate, currentUser]);
    
    return <div className="auth-page">
        <SignIn />
        <SignUp />
    </div>
}
