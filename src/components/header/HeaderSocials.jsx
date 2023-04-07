import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/vasco-eti-154259193/"><BsLinkedin/></a>
        <a href="https://github.com/vasco21"><FaGithub/></a>
        <a href="https://www.instagram.com/votdevasco"><FaInstagramSquare/></a>
    </div>
  )
}

export default HeaderSocials