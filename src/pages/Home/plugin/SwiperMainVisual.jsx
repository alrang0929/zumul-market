import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { SliderData } from './db';
// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { MainVisualSwiper, InnerSlide, TextWrap, Topic, TitleWrap, BgBox } from '../../../styles/StyleSlide';

export default function MainVisualSlider() {
  return (
    <MainVisualSwiper>
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
      >
        {SliderData.map((item, i) => (
          <SwiperSlide key={'slide' + i}>
            <InnerSlide>
              <TextWrap>
                <Topic>{item.topic}</Topic>
                <TitleWrap>
                  {item.title.split('^').map((split, i) => (
                    <span key={i}>{split}</span>
                  ))}
                </TitleWrap>
              </TextWrap>
              <BgBox>
                <img 
                  src={item.bgURL} 
                  alt={item.title + '썸네일'} 
                  loading="lazy"
                />
                <div className="swiper-lazy-preloader"></div>
              </BgBox>
            </InnerSlide>
          </SwiperSlide>
        ))}
      </Swiper>
    </MainVisualSwiper>
  );
}
