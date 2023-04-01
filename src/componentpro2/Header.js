import React from "react";
import LogoReact from '../images/logo192.png';

const Header = () => {
    return (

        <header className="header_style2">
            <nav className="nav_style2">
                <div className="parent_img">
                    <img src={LogoReact} alt="react logo" className="img_style2" />
                    <h1 className="heading_img2">ReactFacts</h1>
                </div>
                <div className="parent_heading">
                    <h1 className="heading2">React Course - project1</h1>
                </div>
            </nav>
        </header>


    );
}

export default Header;