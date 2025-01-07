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
import { ImageLoader } from '../../../utils/ImageLoder';

export default function ThumbSlider({selectdata}) {
  console.log("selectdata",typeof selectdata);
  const SELECT_DATA = selectdata.title_image;
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
            key={'slide' + i}
          >
            <div className="img-box">
            <ImageLoader buckit={'product_img'} imagePath={item.title_image} altText={`썸네일 이미지${i}`} />
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
