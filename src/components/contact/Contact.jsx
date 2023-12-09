import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
 

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_wq682ia', 'template_7splevg', form.current, 'user_gW9TUWQZjoCki5des3Nks')

    e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>vascoeti123@gmail.com</h5>
            <a href="vasco:vascoeti123@gmail.com" target='_blabk'>send a message</a> 
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>eddievasco</h5>
            <a href="https://m.me/eddie.vasco" target='_blabk'>send a message</a> 
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+2763 317 9828</h5>
            <a href="https://wa.link/5kj8c6" target='_blabk'>send a message</a> 
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name='message' row="7" placeholder='Your Message' required></textarea>
          <button type='submit' className="btn btn-primary" required>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact