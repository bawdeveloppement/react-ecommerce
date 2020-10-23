import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as ShopppingIcon } from '../../../assets/svg/shopping-bag.svg'
import { toggleCartHidden } from '../../../redux/cart/Cart.actions';

import './CartIcon.styles.scss';

export default function CartIcon () {
    const dispatch = useDispatch();
    const { items } = useSelector(state => state.cart);
    function toggleCart () {
        dispatch(toggleCartHidden())
    }

    return <div className="cart-icon" onClick={toggleCart}>
        <ShopppingIcon />
        <div className="item-count">{items.length}</div>
    </div>
}