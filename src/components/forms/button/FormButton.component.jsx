import React from 'react';

import './FormButton.styles.scss';

export default ({ children, isGoogleSignin, ...otherProps }) => (
    <button className={`${isGoogleSignin ? 'google-sign-in' : ''} form-button`} {...otherProps}>
        {children}
    </button>
);