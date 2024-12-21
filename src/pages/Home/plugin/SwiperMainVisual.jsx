import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './swiper_main_visual.scss';
import { SliderData } from './db';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function MainVisualSlider() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="main-visual-swiper"
      >
        {SliderData.map((item, i) => (
          <SwiperSlide
            className="inner-slide"
            key={'slide' + i}
            style={{ backgroundImage: `url(${item.bgURL})` }}
          >
            <div className="text-wrap">
              <div className="topic">{item.topic}</div>
              <div className="title-wrap">
                {item.title.split('^').map((split, i) => (
                  <span key={i}>{split}</span>
                ))}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
