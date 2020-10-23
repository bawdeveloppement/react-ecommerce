import React from 'react'
import LinkNav from '../linknav/linknav.component'

import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/svg/crown.svg';

import './header.styles.scss'   
import { useSelector } from 'react-redux';

import CartDropdown from '../cart/dropdown/CartDropdown.component';
import CartIcon from '../cart/icon/CartIcon.component';

const Header = () => {
    const { currentUser } = useSelector((state) => state.user);
    const { hidden } = useSelector(state => state.cart);

    return <div className="header">
        <LinkNav to="/" className='logo-container'>
            <Logo className="logo"/>
        </LinkNav>
        <div className="options">
            <LinkNav className="option" to="/shop">
                SHOP
            </LinkNav>
            <LinkNav className="option" to="/contact">
                CONTACT
            </LinkNav>
            { currentUser ? 
                <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div> : 
                <LinkNav className="option" to="/auth">
                    SIGNIN / REGISTER
                </LinkNav>
            }
            <CartIcon/>
        </div>
        { hidden ? <CartDropdown/> : null }
    </div>
}

export default Header