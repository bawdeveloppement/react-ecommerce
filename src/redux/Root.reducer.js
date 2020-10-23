import { combineReducers} from 'redux';
import cartReducer from './cart/Cart.reducer';

import userReducer from './user/User.reducer';

export default combineReducers({
    user: userReducer,
    cart: cartReducer
});