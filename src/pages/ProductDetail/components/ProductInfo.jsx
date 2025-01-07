import React, { useState } from 'react';
import './style/product_info.scss';
import { Button } from '../../../styles/StyleButton';
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import { IoShareSocialOutline } from 'react-icons/io5';
import { FormBox, SelectBox } from '../../../styles/box';

export const ProductInfo = ({ selectdata }) => {
  const [activeClick, setActiveClick] = useState(false);
  console.log("selectdata",selectdata);
  const handleClick = () => {
    setActiveClick((prev) => !prev);
  };

  return (
    <div className="product-info">
      <div className="text-box">
        <h6 className="title">{selectdata.title}</h6>
        <span className="document">{selectdata.document}</span>
      </div>
      <div className="icon-wrap">
        <Button buttontype={'iconButton'}>
          <IoShareSocialOutline />
        </Button>
        <Button buttontype={'iconButton'} onClick={handleClick}>
          {activeClick ? <MdOutlineFavorite /> : <MdOutlineFavoriteBorder />}
        </Button>
      </div>
      <div className="price-wrap">
        <span>총 상품 금액</span>
        <span className="price">{selectdata.price}</span>
        <span>원</span>
      </div>

      <FormBox></FormBox>
    </div>
  );
};
