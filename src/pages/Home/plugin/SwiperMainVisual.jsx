import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import './swiper_main_visual.scss';
import { SliderData } from './db';
// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

export default function MainVisualSlider() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        // lazy={{ loadPrevNext: true }}
        className="main-visual-swiper"
      >
        {SliderData.map((item, i) => (
          <SwiperSlide className="inner-slide" key={'slide' + i}>
            <div className="text-wrap">
              <div className="topic">{item.topic}</div>
              <div className="title-wrap">
                {item.title.split('^').map((split, i) => (
                  <span key={i}>{split}</span>
                ))}
              </div>
            </div>
            <div className="bg-box" >
              <img 
              src={item.bgURL} 
              alt={item.title + '썸네일'} 
              loading="lazy"
              />
              <div className="swiper-lazy-preloader"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
