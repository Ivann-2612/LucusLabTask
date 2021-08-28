import React from 'react'
import { Link } from "react-router-dom"


const Nav = () => {
    return (
        <div className='div-link'>
            <Link className='link' to="/pageone">PageOne</Link>
            <Link className='link' to="/pagetwo">PageTwo</Link>
            <Link className='link' to="/pagethree">PageThree</Link>
      </div>
    )
}

export default Nav
