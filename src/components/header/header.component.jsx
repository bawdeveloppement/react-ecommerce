import React from 'react'
import LinkNav from '../linknav/linknav.component'
import './header.styles.scss'

import { ReactComponent as Logo } from '../../assets/svg/crown.svg';

const Header = () => {
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
        </div>
    </div>
}

export default Header