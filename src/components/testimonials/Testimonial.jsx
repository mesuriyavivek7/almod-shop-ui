import React from 'react'


//importing css
import './testimonial.css'

//importing swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Navigation,Scrollbar, A11y } from 'swiper/modules'

//importing css for swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

//import images
import Person from '../../assets/person1.jpg'

export default function Testimonial() {
  return (
    <div className='testimonial'>
        <div className='testimonialTitle'>
            <span className='testimonialHeading'>What's customer says</span>
            <hr className='testimonialLine'></hr>
        </div>
        <Swiper 
         className='mySwiper'
         modules={[Pagination,Navigation,Scrollbar, A11y]}
         slidesPerView={4}
         slidesPerGroup={1}
         spaceBetween={40}
         loop={true}
         navigation={true}
         breakpoints={{
          640:{
           slidesPerView:3
          },
          0:{
          slidesPerView:1
          }
         }}
        >
           <SwiperSlide>
             <div className='topSec'>
               <img src={Person} className='testiImg' alt=''></img>
               <span className='personName'>Vivek mesuriya</span>
             </div>
             <div className='testiContent'>
                <p className='testitext'>" very nice product with very nice test and you can eat it anytime. "</p>
             </div>
           </SwiperSlide>

           <SwiperSlide>
             <div className='topSec'>
               <img src={Person} className='testiImg' alt=''></img>
               <span className='personName'>Vivek mesuriya</span>
             </div>
             <div className='testiContent'>
                <p className='testitext'>" very nice product with very nice test and you can eat it anytime. "</p>
             </div>
           </SwiperSlide>

           <SwiperSlide>
             <div className='topSec'>
               <img src={Person} className='testiImg' alt=''></img>
               <span className='personName'>Vivek mesuriya</span>
             </div>
             <div className='testiContent'>
                <p className='testitext'>" very nice product with very nice test and you can eat it anytime. "</p>
             </div>
           </SwiperSlide>

           <SwiperSlide>
             <div className='topSec'>
               <img src={Person} className='testiImg' alt=''></img>
               <span className='personName'>Vivek mesuriya</span>
             </div>
             <div className='testiContent'>
                <p className='testitext'>" very nice product with very nice test and you can eat it anytime. "</p>
             </div>
           </SwiperSlide>

           <SwiperSlide>
             <div className='topSec'>
               <img src={Person} className='testiImg' alt=''></img>
               <span className='personName'>Vivek mesuriya</span>
             </div>
             <div className='testiContent'>
                <p className='testitext'>" very nice product with very nice test and you can eat it anytime. "</p>
             </div>
           </SwiperSlide>
        </Swiper>
    </div>
  )
}
