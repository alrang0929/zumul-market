import React, { useEffect } from 'react';
import { useCartStore } from '../../stores/cart/useCartStore';
import { addComma } from '../../utils/commonFn';
import { Button } from '../../styles/StyleButton';
import { IoCloseOutline } from 'react-icons/io5';
import './style/cart_modal.scss';
import { BuyButton } from './BuyButton';
import useUserStore from '../../stores/auth/useUserStore';
import { ImageLoader } from '../../utils/ImageLoder';
import { useNavigate } from 'react-router-dom';
export const CartModal = () => {
  const { isCartOpen, cartItems, toggleCart, loadCartItems } = useCartStore();
  const { user } = useUserStore((state) => state);
  const navigator = useNavigate();
  useEffect(() => {
    if (user?.id) {
      console.log('Calling loadCartItems with userId:', user.id);
      loadCartItems(user.id);
    }
    else{
      alert('로그인이 필요한 서비스입니다.');
      navigator('/login');
    }
  }, [user?.id, loadCartItems]);

  console.log('cartItems', cartItems);
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
            <ul className="cart-list">
              {cartItems.map((cart) => (
                <li key={cart.id} className="cart-item">
                  {/* 상품 이미지 */}
                  <div className="img-box">
                    <ImageLoader
                      imagePath={cart.product.title_image}
                      altText={cart.product.title + '썸네일'}
                      buckit={'product_img'}
                    />
                  </div>
                  <div className="info-wrap">
                    <h6 className="title">{cart.product.title}</h6>

                    {/* 옵션 박스 */}
                    <ul className="option-list">
                      <li>
                        <span>{cart.product_option.name}</span>
                        <div className="price">
                          <span>{cart.product_option.add_cost.price}</span>
                          <span>원</span>
                        </div>
                      </li>
                    </ul>

                    {/* 총 가격 */}
                    <div className="price-box">
                      <span>
                        {addComma(
                          cart.product.price +
                            cart.product_option.add_cost.price
                        )}
                        원
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <BuyButton />
        </div>
      ) : (
        ''
      )}

      {isCartOpen ? <div className="overlay"></div> : ''}
    </>
  );
};
