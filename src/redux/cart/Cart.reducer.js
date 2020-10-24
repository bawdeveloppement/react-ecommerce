import { TOGGLE_CART_HIDDEN, ADD_ITEM } from './Cart.constants'
import { addItemToCart } from './Cart.utils';

const INITIAL_STATE = {
    hidden : false,
    items: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case ADD_ITEM:
            return {
                ...state,
                items: addItemToCart(state.items, action.payload)
            }
        default:
            return state;
    }
}

export default cartReducer;