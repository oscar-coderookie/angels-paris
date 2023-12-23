import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header2.scss";
import logo from '../../assets/images/logo-header.png';
import { Slant as Hamburger } from "hamburger-react";

const Header2 = () => {
    const [open, setOpen] = useState(false);
    const menuLinks = [
        { name: "Home", url: "/" },
        { name: "galeria", url: "/gallery" },
        { name: "contacto", url: "/contact" },
    ];

    return (
        <div className="header">
            <div className="header-block">
                <div className="header-menu">
                    <Hamburger
                        toggled={open}
                        toggle={setOpen}
                        easing="ease-in"
                        rounded
                        hideOutline={false}
                        onClick={() => setOpen(!open)}
                        color="#33CCCC"
            
                    ></Hamburger>
                </div>
                <div className="header-logo">
                    <h2>ANGELS PARIS BÉISBOL CLUB</h2>
                    <img src={logo} alt="header-img" />
                </div>
            </div>
            {open === false ? null : (
                <nav className="header-nav">
                    <div className="header-nav__sections">
                        <ul className="header-nav__list">
                            {menuLinks.map((link, index) => (
                                <li className="header-nav__elements" key={index}>
                                    <NavLink className="header-nav__links" to={link.url} onClick={() => setOpen(false)}>
                                        {link.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            )}
        </div>
    );
};

export default Header2;