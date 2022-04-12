import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

import logo from '../../images/Logo.svg';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='custom-link'>

                <CustomLink className='nav-link' to="/shop">Shop</CustomLink>
                <CustomLink className='nav-link' to="/orders">Orders</CustomLink>
                <CustomLink className='nav-link' to="/inventory">Inventory</CustomLink>
                <CustomLink className='nav-link' to="/about">About</CustomLink>
                {user ?
                    <CustomLink onClick={() => signOut(auth)} className='nav-link' to='/login'>Sign Out</CustomLink>
                    :
                    <CustomLink className='nav-link' to="/login">Login</CustomLink>}
            </div>
        </nav>
    );
};

export default Header;