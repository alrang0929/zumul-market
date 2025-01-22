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
  console.log("selectdata slider", Array.isArray(SELECT_DATA)); // true면 배열
  console.log("selectdata slider data", SELECT_DATA);
  

  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        navigation={true}
        modules={[ Pagination, Navigation, EffectFade]}
        className="thumb-swiper-wrap"
      >
        {SELECT_DATA.map((item, i) => (
          <SwiperSlide
            className="inner-slide"
            key={selectdata.id + i}
          >
            <div className="img-box">
              <img src={item}  alt={`썸네일 이미지${i}`} />
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
