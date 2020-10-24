import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.items 
);

export const selectCartCount =  createSelector(
    [selectCartItems],
    items => items.reduce(
        (acculatedQuantity, cartItem) => acculatedQuantity + cartItem.quantity, 0)
)