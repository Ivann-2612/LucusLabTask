import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { SiLinkedin } from 'react-icons/si'
import { FaYoutube } from 'react-icons/fa'

const SocialNetwork = () => {
    return (
        <div className='social-icons'>
                <a href="https://www.google.rs/"><FaFacebook/></a> 
                <a href="https://www.google.rs/"><FaTwitterSquare/></a> 
                <a href="https://www.google.rs/"><FcGoogle/></a> 
                <a href="https://www.google.rs/"><SiLinkedin/></a>
                <a href="https://www.google.rs/"><FaYoutube/></a> 
        </div>
    )
}

export default SocialNetwork