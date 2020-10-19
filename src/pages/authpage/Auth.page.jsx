import React from 'react'
import SignIn from '../../components/signin/SignIn.component'
import SignUp from '../../components/signup/signup.component'

import './auth.styles.scss'

export default () => {
    return <div className="auth-page">
        <SignIn />
        <SignUp />
    </div>
}
