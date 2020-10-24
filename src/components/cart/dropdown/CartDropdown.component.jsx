import React from 'react';
import { useSelector } from 'react-redux';

import FormButton from '../../forms/button/FormButton.component';
import CartItem from '../item/CartItem.component';

import './CartDropdown.styles.scss';

export default function CartDropdown () {
    const { items } = useSelector(({ cart }) => cart)
    return <div className="cart-dropdown">
        <div className="cart-items">
        { items.map(item => <CartItem key={item.id} item={item} />) }
        </div>
        <FormButton>GO TO CHECKOUT</FormButton>
    </div>
}