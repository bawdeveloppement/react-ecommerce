import React from 'react';

import './FormButton.styles.scss';

export default ({ children, isGoogleSignin, isInverted, ...otherProps }) => (
    <button className={`${isInverted ? 'inverted' : ''} ${isGoogleSignin ? 'google-sign-in' : ''} form-button`} {...otherProps}>
        {children}
    </button>
);