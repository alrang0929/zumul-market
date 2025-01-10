import React from 'react';
import { useForm } from 'react-hook-form';
import { saveCartItem } from '../../../api/cart/cart';
import useUserStore from '../../../stores/auth/useUserStore';
import ProductOptions from './OptionSelect';
import { addComma } from '../../../utils/commonFn';

import { Button } from '../../../styles/StyleButton';
import { FaRegCreditCard } from 'react-icons/fa6';
import { BsCart3 } from 'react-icons/bs';
import './style/product_info.scss';

export const ProductInfo = ({ selectdata }) => {
  const user = useUserStore((state) => state.user);
  const {
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      basicProductCount: 1, // 기본 상품 수량
      options: [], // 옵션 리스트
      totalPrice: 0, // 총 가격
    },
  });

  const onSubmit = (data) => {
    const { basicProductCount, options, totalPrice } = data;

    const cartData = {
      user_id: user.id, // 실제 로그인 사용자 ID
      product: selectdata,
      basicProductCount,
      options,
      totalPrice,
    };

    saveCartItem(cartData).then((result) => {
      if (result.error) {
        console.error('Failed to save cart item:', result.error);
      } else {
        console.log('Cart item saved successfully:', result.data);
      }
    });

    console.log('장바구니 데이터:', cartData);
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
      <form onSubmit={handleSubmit(onSubmit)} className="option-form">
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
            type="submit"
            buttontype={'subBasicIcon'}
            className="cart-button"
          >
            <span>장바구니</span>
            <BsCart3 className="icon" />
          </Button>
        </div>
      </form>
    </div>
  );
};
