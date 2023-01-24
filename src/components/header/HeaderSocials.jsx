import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiIndeed} from 'react-icons/si'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://github.com/Burjvirgo-Ain" target="_blank"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/ain-ul-islam-khan-270a82185/" target="_blank"><BsLinkedin/></a>
        <a href="https://profile.indeed.com/?hl=en_PK&co=PK&from=gnav-acme--jobseeker-contributions-webapp"><SiIndeed/></a>

    </div>
  )
}

export default HeaderSocials