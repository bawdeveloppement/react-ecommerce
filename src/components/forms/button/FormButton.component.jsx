import React from 'react';

import './FormButton.styles.scss';

export default ({ children, ...otherProps }) => (
    <button className="form-button" {...otherProps}>
        {children}
    </button>
);