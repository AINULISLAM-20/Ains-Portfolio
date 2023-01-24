import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Navigation, Pagination,Scrollbar, } from 'swiper';

import { Swiper, SwiperSlide, } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


const data = [
  {
    avatar: AVATAR1,
    name: 'Hassan Ahmed Farooqi',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptates corporis ut deserunt quos nisi commodi aspernatur cumque officia praesentium quasi, ex ea sit vitae? Aperiam animi corporis hic omnis.'
  },
  {
    avatar: AVATAR2,
    name: 'Imam Syed Muhammad Umar ',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptates corporis ut deserunt quos nisi commodi aspernatur cumque officia praesentium quasi, ex ea sit vitae? Aperiam animi corporis hic omnis.'
  },
  {
    avatar: AVATAR3,
    name: 'Said ',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptates corporis ut deserunt quos nisi commodi aspernatur cumque officia praesentium quasi, ex ea sit vitae? Aperiam animi corporis hic omnis.'
  },
  {
    avatar: AVATAR4,
    name: 'Abdul Wasy Qayyom Shahzada',
    review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem voluptates corporis ut deserunt quos nisi commodi aspernatur cumque officia praesentium quasi, ex ea sit vitae? Aperiam animi corporis hic omnis.'
  },

]
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from The Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      modules={[Navigation, Pagination, Scrollbar, ]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials