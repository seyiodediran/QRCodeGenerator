import React from 'react';

// react scroll library was used for aesthetics
import { Link } from "react-scroll";


const Header = () => {

    const menu = () => {
        const menu = document.getElementById('navbarBasicExample');
        menu.classList.toggle('is-active');
    }
    
    return (

        <nav className="navbar pt-4 pb-3 pl-6 pr-6" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
            {/* eslint-disable-next-line */}
                <a className="navbar-item" >
                    <h1 className="title rainbow-text">QRCode Generator</h1>
                </a>
                {/* eslint-disable-next-line */}
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={menu}>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu" >
                <div className="navbar-start">
                {/* eslint-disable-next-line */}
                    <a className="navbar-item">
                        <Link
                            activeClass="active"
                            to="userid"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >USER ID </Link>
                    </a>
                    {/* eslint-disable-next-line */}
                    <a className="navbar-item" >
                        <Link
                            activeClass="active"
                            to="sms"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >SMS </Link>
                    </a>
                    {/* eslint-disable-next-line */}
                    <a className="navbar-item">
                        <Link
                            activeClass="active"
                            to="email"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >EMAIL </Link>
                    </a>
                </div>

                <div class="navbar-end">
                    {/* <img src={qr} alt="qrcode" /> */}
                </div>
            </div>


            
        </nav>

    )
};


export default Header;
