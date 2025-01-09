import React from 'react';
import { useCartStore } from '../../stores/cart/useCartStore';
import { cartDb } from './dummyDB';
import { addComma } from '../../utils/commonFn';
import { Button } from '../../styles/StyleButton';
import { IoCloseOutline } from 'react-icons/io5';
import './style/cart_modal.scss';
export const CartModal = () => {
  const cartData = cartDb;
  const { isCartOpen, cartItems, toggleCart } = useCartStore();
  if (!isCartOpen) return null;

  return (
    <>
      <div className="cart-modal">
        <div className="cart-wrap">
          <div className="title">
            <h4>장바구니</h4>
            <Button
              buttontype={'iconButton'}
              className="close-btn"
              onClick={toggleCart}
            >
              <IoCloseOutline />
            </Button>
          </div>
          <ul className="cart-list">
            {cartData.map((item, index) => (
              <li key={item + index} className="cart-item">
                {/* 상품이미지 */}
                <div className="img-box">
                  <img src={item.thumb} alt={item.title} />
                </div>
                <div className="info-wrap">
                  <h6 className="title">{item.title}</h6>
                  {/* 옵션 박스 */}
                  <ul className="option-list">
                    {item.option.map((option, index) => (
                      <li key={option.name + index}>
                        <span>
                          {option.name}
                          {index < cartItems.length - 1 && ','}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {/* 총 가격 */}
                  <div className="price-box">
                    <span>{addComma(item.price)}원</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <Button buttontype={'submit'} style={{marginTop:"2rem", borderRadius:"1rem"}}>구매하기</Button>
      </div>
      {isCartOpen ? <div className="overlay"></div> : ''}
    </>
  );
};
