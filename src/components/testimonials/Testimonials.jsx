import React from 'react'
import './testimonials.css'

import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';


const data =[ 
  {
    avatar:'https://res.cloudinary.com/creative-power/image/upload/v1644686434/xaba_shtafj.jpg',
    name:"Mncebo xaba",
    role:"FULL STACK WEB DEVELOPER",
    review:"I've worked with Vasco in 2021 as full stack developer, we were working on an agile environment. He has a fantastic eye for unique designsand was able to implement some of the best strategies.Vasco developed software platformsUI design and development, and web page design and development. He played a significant role, often, in developing and implementing overall web strategiesand dealt with the details along with the bigger picture. His coding was excellent and his designs were unique and innovative."
  },
  {
    avatar:'https://res.cloudinary.com/creative-power/image/upload/v1644550172/Glen_neopjx.png',
    name:"Vasco Eddie",
    role:"JAVA FULL STACK WEB DEVELOPER ",
    review:"This is to confirm that Vasco Eti of ProjectCodeX contributed in the building of an application i was working on for a client.Through out the creation of the application, Vasco demonstrated to be a well self motivatedrespectful and so much of a good team player.He has excellent communication skills and is always ready to learn new stateof the art technologies that he had never been exposed to. He has proven to be a very trustworthy individual who is well cultured and creative."
  },
  {
    avatar:'https://res.cloudinary.com/creative-power/image/upload/v1644552161/nkomojpg_imfuuu.jpg',
    name:'Victor Nkomo',
    role:'Information Tech Specialit',
    review: "Proven academinc and curricular achievements, andThe right attitude and technical skill to propel the organizationachieving it's a goals and objective.My career objective is to be part of an analytic, agile and strongly established interconnected customerIT and business management team that is focused on driving successful business results through use of IT resources and developing a vision for the best of organisation."
  },
  {
    avatar:'https://res.cloudinary.com/creative-power/image/upload/v1644550687/tebogo_jbavtm.png',
    name:"Tebogo Seanego",
    role: 'Agile Web Developer',
    review:"I've worked with Vasco in 2021 as full stack developer He has excellent communication skills and is always ready to learn new start His knowledge is powerful and he is creative he like to solve problems he never give up always coming up with new ideas. in any project he always like to take a leadig because he is good to understand wehn the team straggule he can help team not to give up his always positive in everything"
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Client</h5 >
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
       modules={[Pagination]}
       spaceBetween={40}
       slidesPerView={1}
       navigation
       pagination={{ clickable: true }}
      > 
        {
          data.map(({avatar, name, role, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
    
                </div>
                <h3 className="client__name">{name}</h3>
                <p>{role}</p>
                <small className="client__review">
                  {review}
                </small>
            </SwiperSlide>
            )
          })
        } 
      </Swiper> 
    </section>
  )
}

export default Testimonials