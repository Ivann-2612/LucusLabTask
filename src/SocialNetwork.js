import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaTwitterSquare } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { SiLinkedin } from 'react-icons/si'
import { FaYoutube } from 'react-icons/fa'

const SocialNetwork = () => {
    return (
        <div className='social-icons'>
                <a href="#"><FaFacebook/></a> 
                <a href="#"><FaTwitterSquare/></a> 
                <a href="#"><FcGoogle/></a> 
                <a href="#"><SiLinkedin/></a>
                <a href="#"><FaYoutube/></a> 
        </div>
    )
}

export default SocialNetwork