import React from 'react';
import { useForm } from 'react-hook-form';
import useUserStore from '../../../stores/auth/useUserStore';
import { ProductOptions } from './ProductOptions';
import { addComma } from '../../../utils/commonFn';

import { Button } from '../../../styles/StyleButton';
import { FaRegCreditCard } from 'react-icons/fa6';
import { BsCart3 } from 'react-icons/bs';
import './style/product_info.scss';
import { handleAddToCart } from './handleAddToCart';
import { handleBuyNow } from './handleBuyNow';
import { useAddToCart } from '../../../api/cart/hook/useAddToCart';
import { useNavigate } from 'react-router-dom';

export const ProductInfo = ({ selectdata }) => {
  const navigator = useNavigate();
  const { mutate: addToCart } = useAddToCart();
  const user = useUserStore((state) => state.user);
  const {
    handleSubmit,
    setValue,
    control,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      optionList: [],
      selectedOption: '',
      count: 1,
      quantity: 1, // 기본 수량
      product_option_id: null, // 기본 옵션이 없을 때 null
    },
  });

  const onAddToCart = (formData) => {
    handleAddToCart({ user, selectdata, formData, addToCart });
  };

  const onBuyNow = (formData) => {
    handleBuyNow({ user, selectdata, navigator, formData });
  };

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

      {/* 옵션 폼 */}
      <form onSubmit={handleSubmit(onBuyNow)} className="option-form">
        <ProductOptions
          product={selectdata}
          setValue={setValue}
          control={control}
          watch={watch}
        />

        {/* 에러 메시지 */}
        {errors.options && <p className="error">{errors.options.message}</p>}

        {/* 버튼 */}
        <div
          className="button-wrap"
          style={{ display: 'flex', gap: '1rem', marginTop: '4rem' }}
        >
          <Button
            type="submit"
            buttontype={'mainBasicIcon'}
            className="buy-button"
            onClick={handleSubmit(onBuyNow)}
          >
            <span>구매하기</span>
            <FaRegCreditCard className="icon" />
          </Button>

          <Button
            type="button"
            buttontype={'subBasicIcon'}
            className="cart-button"
            onClick={handleSubmit(onAddToCart)}
          >
            <span>장바구니</span>
            <BsCart3 className="icon" />
          </Button>
        </div>
      </form>
    </div>
  );
};
