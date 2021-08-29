import React from 'react'
import { Link } from "react-router-dom"
import Logo from '../src/img/logo.png'


const Nav = () => {
    return (
        <div className='div-link'>
            <Link className='link' to="/pageone">MAT-TABLE</Link>
            <Link className='link' to="/pagetwo">GALLERY</Link>
            <Link className='link' to="/pagethree">TO-DO APP</Link>
            <img style={{height:'15px',position:'absolute',top:'88%',left:'23%'}} src={Logo} alt='logo' />
      </div>
    )
}

export default Nav
