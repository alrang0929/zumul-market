import React from 'react';
import { useCartStore } from '../../stores/cart/useCartStore';
import { addComma } from '../../utils/commonFn';
import { Button } from '../../styles/StyleButton';
import { IoCloseOutline } from 'react-icons/io5';
import './style/cart_modal.scss';
import useUserStore from '../../stores/auth/useUserStore';
import { useFetchCartItem } from '../../api/cart/hook/useFetchCartItems';
import { useNavigate } from 'react-router-dom';
import { handlePurchase } from './handlePurchase';

export const CartModal = () => {
  const navigator = useNavigate();
  const { isCartOpen, toggleCart } = useCartStore();
  
  const { user } = useUserStore((state) => state);
  const {
    data: cartItems = [], // cartItems 초기화
    isLoading,
    isError,
  } = useFetchCartItem(user?.id);

  if (isLoading) return <p>로딩중</p>;
  if (isError) return <p>데이터 로드 중 오류가 발생했습니다.</p>;

  const isCartEmpty = cartItems.length === 0;

  // 버튼 클릭 핸들러
  const handleButtonClick = (callback) => {
    if (!user) {
      alert('로그인이 필요한 서비스입니다.');
      return;
    }
    callback?.();
  };

  return (
    <>
      {isCartOpen ? (
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

            {isCartEmpty ? (
              <div className="empty-cart-message">
                <p>
                  장바구니가 비었습니다.
                  <br />
                  원하는 상품을 추가해주세요!
                </p>
              </div>
            ) : (
              <ul className="cart-list">
                {cartItems.map((cart) => (
                  <li key={cart.id} className="cart-item">
                    <div className="img-box">
                      <img
                        src={cart.product.title_image}
                        alt={`${cart.product.title} 썸네일`}
                      />
                    </div>
                    <div className="info-wrap">
                      <h6 className="title">{cart.product.title}</h6>
                      <ul className="option-list">
                        {cart.option.map((option, index) => (
                          <li key={index} className="option-item">
                            <span>{option.name || '옵션 없음'}</span>
                            <div className="price">
                              <span>
                                {addComma(option.add_cost.price || 0)}
                              </span>
                              <span>원</span>
                            </div>
                            <div className="quantity">
                              <span>수량: {option.add_cost.quantity || 1}</span>
                            </div>
                          </li>
                        ))}
                      </ul>
                      <div className="price-box">
                        <span className="price">
                          {addComma(
                            cart.product.price +
                              cart.option?.reduce(
                                (total, opt) =>
                                  total +
                                  (opt.add_cost?.price || 0) * opt.quantity,
                                0
                              )
                          )}{' '}
                          원
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {!isCartEmpty && (
            <div className="button-container">
              <Button
                buttontype={'submit'}
                className="action-button"
                style={{marginTop:'2rem'}}
                onClick={() =>
                  handleButtonClick(() => handlePurchase({navigator, user, cartItems}))
                }
              >
                구매하기
              </Button>
            </div>
          )}
        </div>
      ) : (
        ''
      )}

      {isCartOpen ? <div className="overlay"></div> : ''}
    </>
  );
};
