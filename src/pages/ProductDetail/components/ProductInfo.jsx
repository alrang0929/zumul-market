import React, { useState, useEffect } from 'react';
import { Button } from '../../../styles/StyleButton';
import { addComma } from '../../../utils/commonFn';

import ProductOptions from './OptionSelect';
import { useForm, Controller } from 'react-hook-form';

import { MdOutlineFavorite, MdOutlineFavoriteBorder } from 'react-icons/md';
import { IoShareSocialOutline } from 'react-icons/io5';
import { IoCardOutline } from 'react-icons/io5';
import { BsCart3 } from 'react-icons/bs';
import './style/product_info.scss';

export const ProductInfo = ({ selectdata }) => {
  const [activeClick, setActiveClick] = useState(false);
  const { setValue, getValues, control, watch } = useForm({
    defaultValues: {
      totalPrice: 0,
    },
  });

  const totalPrice = watch('totalPrice');

  const handleClick = () => {
    setActiveClick((prev) => !prev);
  };

  useEffect(() => {
    console.log('Total Price:', totalPrice);
  }, [totalPrice]);

  console.log('selectdata', selectdata);

  return (
    <div className="product-info">
      <div className="text-box">
        <h6 className="title">{selectdata.title}</h6>
        <span className="document">{selectdata.document}</span>
      </div>
      <div className="price-wrap">
        <span>상품 금액</span>
        <span className="price">{addComma(selectdata.price)}</span>
        <span>원</span>
      </div>
      <div className="icon-wrap">
        <Button buttontype={'iconButton'}>
          <IoShareSocialOutline className="icon" />
        </Button>
        <Button buttontype={'iconButton'} onClick={handleClick}>
          {activeClick ? (
            <MdOutlineFavorite className="icon" />
          ) : (
            <MdOutlineFavoriteBorder
              className={`icon activ-favorit}`}
            />
          )}
        </Button>
      </div>

      <form className="option-form">
        <ProductOptions
          product={selectdata}
          setValue={setValue}
          getValues={getValues}
          control={control}
        />
        <div className="button-wrap" style={{display: 'flex', gap:'1rem', marginTop: '4rem'}}>
          <Button buttontype={'mainBasicIcon'} className="buy-button">
            <span>구매하기</span>
            <IoCardOutline className="icon" />
          </Button>
          <Button buttontype={'subBasicIcon'} className="cart-button">
            <span>장바구니</span>
            <BsCart3 className="icon" />
          </Button>
        </div>
      </form>
    </div>
  );
};
