import styled from 'styled-components';

export const MainVisualSwiper = styled.div`
  .swiper-button-next {
    width: 3.5rem;
    background: url(/images/arrow_forward.png) no-repeat center;
    background-size: contain;
    margin-right: 20rem;

    &::after {
      display: none;
    }
  }

  .swiper-button-prev {
    width: 3.5rem;
    margin-left: 20rem;
    background: url(/images/arrow_back.png) no-repeat center;
    background-size: contain;

    &::after {
      display: none;
    }
  }
`;


export const ThumbSwiperWrap = styled.div`
  width: 70vw;
  height: 100%;
  position: relative;

  .swiper-button-next,
  .swiper-button-prev {
    width: 3rem;
    background-position: center;
    background-size: contain;
    top: 50%;
    transform: translateY(-50%);
  }

  .swiper-button-next {
    background: url('/images/arrow_forward.png') no-repeat;
    margin-right: 2rem;
  }

  .swiper-button-prev {
    background: url('/images/arrow_back.png') no-repeat;
    margin-left: 2rem;
  }

  .swiper-button-next::after,
  .swiper-button-prev::after {
    display: none;
  }

  .inner-slide {
    height: 60vh;
    overflow: hidden;
  }

  .img-box {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const InnerSlide = styled.div`
  position: relative;
  height: 600px;
  background-position: 50% 35%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const TextWrap = styled.div`
  width: 30%;
  margin: 70px 90px;
`;

export const Topic = styled.div`
  background-color: #fff;
  color: #131313;
  font-size: 1.4rem;
  padding: 10px;
  width: fit-content;
  text-align: center;
  font-weight: 400;
  border-radius: 999px;
  margin-bottom: 20px;
`;

export const TitleWrap = styled.div`
  span {
    display: block;
    color: #fff;
    font-weight: 500;
    font-size: 40px;
  }
`;

export const BgBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -9;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 30% 33%;
  }
`;
