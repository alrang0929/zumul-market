export const handleBuyNow = ({ user, selectdata, navigator, formData, saveOrder }) => {
  if (!user || !user.id) {
    alert('로그인이 필요한 서비스입니다.');
    return;
  }

  const orderData = {
    user_id: user.id,
    product_id: selectdata.id,
    option: formData.optionList.map((option) => ({
      product_option_id: option.id,
      quantity: option.count,
      price: option.add_cost.price,
    })),
    total_quantity: formData.optionList.reduce((total, option) => total + option.count, 0),
    total_price: formData.optionList.reduce((total, option) => total + option.add_cost.price * option.count, 0),
  };

  console.log('orderData:', orderData);

  saveOrder(orderData, {
    onSuccess: () => {
      navigator(`/order/${user.id}`);
    },
    onError: () => {
      alert('주문 저장에 실패했습니다. 다시 시도해주세요.');
    },
  });
};
