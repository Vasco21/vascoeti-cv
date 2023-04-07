import React from 'react'
import './about.css'
import ME from '../../assets/Profile.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>3+ Years Working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>
                Projects
              </h5>
              <small>3+ Years Working</small>
            </article>
          </div>
          <p>
          I am a hard worker and enjoying to solve problems in any project that require me to work on. 
          During the course of my academic career, I also managed to accrue nearly 3+ years of work experience 
          in Full Stack Software Developer. I had the privilege of working for Institute of Mine Seismology in a 
          seismic waves ,control and conduct seismic tests to find and record sound waves from energy sources under 
          the earth's surface role, for 10 years.
          I learned valuable professional skills such as Mobile web developer and full stack software developer. 
          In both my academic and professional life, I have been consistently praised as quality-oriented by 
          my professors and peers. Whether working on academic, extracurricular, or professional projects, 
          I apply proven communication, creative thinking and language skills. 
          Am still on the field studying Data Science career role.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About