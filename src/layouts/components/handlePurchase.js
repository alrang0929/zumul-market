
export const handlePurchase = ({navigator, user, cartItems}) => {
  if (!user) {
    alert('로그인이 필요한 서비스입니다.');
    return;
  }

  if (cartItems.length === 0) {
    alert('장바구니가 비어 있습니다.');
    return;
  }

  // orderData 생성
  const orderData = cartItems.map((cart) => ({
    id: cart.id,
    product_id: cart.product_id,
    product_title: cart.product.title,
    total_price: cart.total_price,
    options: cart.option.map((opt) => ({
      product_option_id: opt.product_option_id,
      quantity: opt.quantity,
      price: opt.price,
    })),
  }));

  navigator('/order', { state: { orderData } });
};
