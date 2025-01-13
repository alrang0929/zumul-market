import React, { useState } from 'react';
import './style/detail_image.scss';
import { Button } from '../../../styles/StyleButton';
import SubTitle from '../../../common/SubTitle';
export const DetailInfo = ({ selectdata }) => {
  console.log('selectdata', selectdata);
  const [clickActive, setClickActive] = useState(false);
  const handlerViewAllImages = () => {
    setClickActive(true);
  };
  return (
    <>
      <SubTitle subTitle={'상세 이미지'} />
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
        {selectdata.detail_image.map((img, index) => (
          <img src={img} alt={'상세이미지' + index} />
        ))}
      </div>
    </>
  );
};
