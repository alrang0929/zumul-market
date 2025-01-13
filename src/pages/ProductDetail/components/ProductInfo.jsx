import React from 'react';
import { useForm } from 'react-hook-form';
import useUserStore from '../../../stores/auth/useUserStore';
import {ProductOptions} from './ProductOptions';
import { addComma } from '../../../utils/commonFn';
import {useAddToCart} from '../../../api/cart/hook/useAddToCart';

import { Button } from '../../../styles/StyleButton';
import { FaRegCreditCard } from 'react-icons/fa6';
import { BsCart3 } from 'react-icons/bs';
import './style/product_info.scss';

export const ProductInfo = ({ selectdata }) => {
  const { mutate: addToCart } = useAddToCart();
  const user = useUserStore((state) => state.user);
  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      quantity: 1, // 기본 수량
      product_option_id: null, // 기본 옵션이 없을 때 null
    },
  });

  const handleAddToCart = (data) => {

    if (!user || !user.id) {
      alert('로그인이 필요한 서비스입니다.');
      return;
    }

    const cartData = {
      user_id: user.id,
      product_id: selectdata.id,
      product_option_id: data.product_option_id,
      quantity: data.quantity,
    };

    addToCart(cartData);
  };

  const handleBuyNow = (data) => {
    console.log('구매하기:', data);
    // 구매 로직 추가
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
      <form onSubmit={handleSubmit(handleBuyNow)} className="option-form">
        <ProductOptions
          product={selectdata}
          setValue={setValue}
          control={control}
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
          >
            <span>구매하기</span>
            <FaRegCreditCard className="icon" />
          </Button>
          <Button
            type="button"
            buttontype={'subBasicIcon'}
            className="cart-button"
            onClick={handleSubmit(handleAddToCart)}
          >
            <span>장바구니</span>
            <BsCart3 className="icon" />
          </Button>
        </div>
      </form>
    </div>
  );
};
