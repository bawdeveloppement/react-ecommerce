import React from 'react';

import FormButton from '../../forms/button/FormButton.component';

import './CartDropdown.styles.scss';

export default function CartDropdown () {
    return <div className="cart-dropdown">
        <div className="cart-items" />
        <FormButton>GO TO CHECKOUT</FormButton>
    </div>
}