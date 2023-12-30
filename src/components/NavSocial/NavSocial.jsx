import React from "react";
import './NavSocial.scss';
import { FaFacebook, FaInstagram, FaWhatsapp,  } from "react-icons/fa";
import {  SiUnderarmour,SiAdidas, SiCocacola  } from "react-icons/si";

const NavSocial = () => {
  return (
    <div className="nav__social">
      <p className="nav__social__text">Patrocina:</p>
      <div className="nav__barsocial">
        <a
        href=""
        target="_blank"
        rel="noreferrer"
      >
        <SiUnderarmour className="nav__icons" />
      </a>
      <a
        href=""
        target="_blank"
        rel="noreferrer"
      >
        <SiCocacola className="nav__icons" />
      </a>
      <a
        href=""
        target="_blank"
        rel="noreferrer"
      >
        <SiAdidas  className="nav__icons" />
      </a>
      </div>
      
    </div>
  );
};

export default NavSocial;