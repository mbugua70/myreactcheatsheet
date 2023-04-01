import React from "react";
import ReactLogo from '../images/logo192.png';

const Header = () => {
    return (
        <header className="header_style">
            <nav className="nav_style">
                <img src={ReactLogo} alt="react logo" className="img_style" width="80px" />
                <ul className="items_style">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;