import React, { useEffect, useRef } from 'react';
import { useCartStore } from '../../stores/cart/useCartStore';
import { addComma } from '../../utils/commonFn';
import { Button } from '../../styles/StyleButton';
import './style/cart_modal.scss';
import useUserStore from '../../stores/auth/useUserStore';
import { useFetchCartItem } from '../../api/cart/hook/useFetchCartItems';
import { useNavigate } from 'react-router-dom';
import { handlePurchase } from './handlePurchase';
import { DeleteButton } from '../../common/DeleteButton';
// import { removeFromCart } from '../../api/cart/removeCartItems';
import { useRemoveFromCart } from '../../api/cart/hook/useRemoveCart';
import SkeletonLoader from '../../utils/SkeletonLoader';

export const CartModal = () => {
  const navigator = useNavigate();
  const { isCartOpen, toggleCart } = useCartStore();
  const { user } = useUserStore((state) => state);
  const removeFromCart = useRemoveFromCart();
  const modalRef = useRef(null);

  const {
    data: cartItems = [], // cartItems 초기화
    isLoading,
    isError,
  } = useFetchCartItem(user?.id);

  //console.log('cartItems', cartItems);

  const sortedCartItems = Array.from(
    new Map(
      cartItems
        .filter((item) => !item.delete_state)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .map((item) => [item.id, item])
    ).values()
  );
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        toggleCart();
      }
    };

    if (isCartOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCartOpen]);

   if (isLoading) {
     return <SkeletonLoader />;
   }
  if (isError) return <p>데이터 로드 중 오류가 발생했습니다.</p>;

  const isCartEmpty = sortedCartItems.length === 0;
  
  return (
    <>
      {isCartOpen ? (
        <div className="cart-modal">
          <div className="cart-wrap" ref={modalRef}>
            <div className="title">
              <h4>장바구니</h4>
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
                {sortedCartItems.map((cart) => (
                  <li key={cart.id} className="cart-item">
                    <div className="img-box">
                      <img
                        src={cart.product.title_image}
                        alt={`${cart.product.title} 썸네일`}
                        loading="lazy"
                      />
                    </div>
                    <div className="info-wrap">
                      <div className="title-wrap">
                        <h6 className="title">{cart.product.title}</h6>
                        <DeleteButton clickfn={() => removeFromCart.mutate(cart.id)} />
                      </div>
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
                style={{ marginTop: '2rem' }}
                onClick={() => handlePurchase({ navigator, user, cartItems })}
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
