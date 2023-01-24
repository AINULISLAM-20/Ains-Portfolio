import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c0jw23q', 'template_r85yz3r', form.current, 'teDFJ3PlFyLCg5qZp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
    <div className="container contact__container">
      <div className="contact__opetions">
        <article className='contact__opetion'>
          <MdOutlineEmail className='contact__opetion-icon'/>
          <h4>Email</h4>
          <h5>Ain ul Islam Khan</h5>
          <a href="mailto:ainkhan.20@gmail.com" target='_blank'>Send A Message</a>
        </article>
        <article className='contact__opetion'>
          <RiMessengerLine className='contact__opetion-icon'/>
          <h4>Messanger</h4>
          <h5>Burjvirgo_Ain</h5>
          <a href="http://m.me/Burjvirgo.Ain" target='_blank'>Send A Message</a>
        </article>
        <article className='contact__opetion'>
          <BsWhatsapp className='contact__opetion-icon'/>
          <h4>WhatsApp</h4>
          <h5>+1(702)479-6617</h5>
          <a href=" https://wa.me/+17024796617" target='_blank'>Send A Message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail} >
        <input type="text"name='name'placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='YOur Email' required/>
        <textarea name="message" id="" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Submit</button>
      </form>
    </div>
    </section>
  )
}

export default Contact