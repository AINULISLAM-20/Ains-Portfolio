import React from 'react'
import './experience.css'
import {BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>FrontEnd Development</h3>
          <div className="experience__content">
           <article className='eperience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div><h4>HTML</h4></div>
            <small className='text-light'>Experinced</small>
           </article>
           <article className='eperience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div><h4>CSS</h4></div>
            <small className='text-light'>Intermediate</small>
           </article>
           <article className='eperience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div><h4>BootStrap</h4></div>
            <small className='text-light'>Experinced</small>
           </article>
           <article className='eperience__details'>
            <BsPatchCheckFill className='experience__details-icons'/>
            <div><h4>React</h4></div>
            <small className='text-light'>Experinced</small>
           </article>
          </div>
        </div>
      <div className="experience__backend">

      </div>
      </div>


    </section>
  )
}

export default Experience