import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import './swiper_thumbnail.scss';
// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

export default function ThumbnailSlider({ data, viewcount }) {
  const SELECT_DATA = data;
  const VIEW_COUNT = viewcount;
  return (
    <>
      <Swiper
      slidesPerView={VIEW_COUNT}
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        lazy={{
          loadPrevNext:true,
        }}
        className="thumbnail-swiper"
      >
        {SELECT_DATA.map((item, i) => (
          <SwiperSlide
            className="inner-slide swiper-lazy"
            key={'slide' + i}
            style={{ backgroundImage: `url(${item.bgURL})` }}
          ></SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
