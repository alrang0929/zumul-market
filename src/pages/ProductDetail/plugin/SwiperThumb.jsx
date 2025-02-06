import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import './swiper_thumb.scss';
// import required modules
import {
  Pagination,
  Navigation,
  EffectFade,
} from 'swiper/modules';

export default function ThumbSlider({selectdata}) {
  const SELECT_DATA = selectdata.thumb || [];

console.log("swiper_thumb",selectdata);

  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        navigation={true}
        modules={[ Pagination, Navigation, EffectFade]}
        className="thumb-swiper-wrap"
      >
         <SwiperSlide
            className="inner-slide"
            key={selectdata.id + "thumb"}
          >
            <div className="img-box swiper-zoom-container">
              <img src={selectdata.title_image}  alt={`${selectdata.title}대표 썸네일`} />
            </div>
            
          </SwiperSlide>
        {SELECT_DATA.map((item, i) => (
          <SwiperSlide
            className="inner-slide"
            key={selectdata.id + i}
          >
            <div className="img-box swiper-zoom-container">
              <img src={item}  alt={`썸네일 이미지${i}`} />
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
