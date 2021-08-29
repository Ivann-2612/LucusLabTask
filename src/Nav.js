import React from 'react'
import { Link } from "react-router-dom"
import Logo from '../src/img/logo.png'


const Nav = () => {
    return (
        <div className='div-link'>
            <Link className='link' to="/pageone">Mat-table</Link>
            <Link className='link' to="/pagetwo">Gallery</Link>
            <Link className='link' to="/pagethree">To-do app</Link>
            <img style={{height:'15px',position:'absolute',top:'90%',left:'21%'}} src={Logo} alt='logo' />
      </div>
    )
}

export default Nav
