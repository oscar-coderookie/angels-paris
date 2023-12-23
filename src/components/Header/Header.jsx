import React, {useState} from 'react';
import './Header.scss';
import logo from '../../assets/images/logo-header.png';
import { Slant as Hamburger } from "hamburger-react";

const Header = () => {

    const [open, setOpen] = useState(false);


  return (
    <div className='header-block'>
          <div className="header-logo">
            <img src={logo} alt="logo" className='header-img' />
            <h1 className='header-name'>angels paris club de béisbol</h1>
        </div>
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
      
    </div>
  )
}

export default Header