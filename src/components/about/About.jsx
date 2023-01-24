import React from 'react'
import './about.css'
import ME from "../../assets/me-about.jpg"
import {FaAward} from 'react-icons/fa'
import {FaUsers} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <>
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className="about__me-img">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icons'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
              
            <article className='about__card'>
              <FaUsers className='about__icons'/>
              <h5>Clients</h5>
              <small>Self Projects</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icons'/>
              <h5>Projects</h5>
              <small>3+</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, aliquid delectus reiciendis enim at qui non veniam eum nostrum labore inventore? Libero, laborum dolorum ratione illo eum rem at iusto?</p>

          <a href="#contact" className='btn btn-primary'>Lets's Talk</a>


        </div>
      </div> 
    </section>
    </>
  )
}

export default About