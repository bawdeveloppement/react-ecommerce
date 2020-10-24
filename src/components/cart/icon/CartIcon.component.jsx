import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as ShopppingIcon } from '../../../assets/svg/shopping-bag.svg'
import { toggleCartHidden } from '../../../redux/cart/Cart.actions';

import './CartIcon.styles.scss';

export default function CartIcon () {
    const dispatch = useDispatch();
    // Reduce the items in cart to get the final count of items based on the quantity of each item
    const itemsCount = useSelector(
        ({ cart }) => cart.items.reduce(
            (acculatedQuantity, cartItem) => acculatedQuantity + cartItem.quantity, 0    
    ));

    function toggleCart () {
        dispatch(toggleCartHidden())
    }

    return <div className="cart-icon" onClick={toggleCart}>
        <ShopppingIcon />
        <div className="item-count">{itemsCount}</div>
    </div>
}