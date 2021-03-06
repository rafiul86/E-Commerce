import React from 'react';
import logo from '../../images/logo.png';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <img src={logo}alt=""/>
            <nav>
                        <a href="/Shop">SHOP</a>
                        <a href="/Review">REVIEW</a>
                        <a href="/Inventory">MANAGE ORDER</a>
            </nav>
        </div>
    );
};

export default Header;