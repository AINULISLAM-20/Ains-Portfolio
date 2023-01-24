import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='service' >
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-ion'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-ion'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-ion'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-ion'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
              <li>
                <BiCheck className='service__list-ion'/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMEMT</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-ion'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-ion'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-ion'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-ion'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
              <li>
                <BiCheck className='service__list-ion'/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>CONTENT CREATION</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className='service__list-ion'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-ion'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-ion'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
            <li>
              <BiCheck className='service__list-ion'/>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
            </li>
              <li>
                <BiCheck className='service__list-ion'/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION  */}
      </div>
    </section>
  )
}

export default Services