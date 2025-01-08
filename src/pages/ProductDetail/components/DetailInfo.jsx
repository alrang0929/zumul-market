import React, { useState } from 'react';
import './style/detail_image.scss';
import { Button } from '../../../styles/StyleButton';
import SubTitle from '../../../common/SubTitle';
export const DetailInfo = ({ selectdata }) => {
  const [clickActive, setClickActive] = useState(false);
  const handlerViewAllImages = () => {
    setClickActive(true);
  };
  return (
    <>
    <SubTitle subTitle={"상세 이미지"}/>
      <div
        className="detail-image-box"
        style={clickActive ? { height: 'fit-content' } : { height: '20rem' }}
      >
        <div
          className="overlay"
          style={clickActive ? { display: 'none' } : { display: 'block' }}
        >
          <Button
            buttontype={'assistanceButton'}
            onClick={handlerViewAllImages}
          >
            {' '}
            더 보기{' '}
          </Button>
        </div>
        <img src="/images/img04.jpg" alt="디테일 이미지" />
      </div>
    </>
  );
};
