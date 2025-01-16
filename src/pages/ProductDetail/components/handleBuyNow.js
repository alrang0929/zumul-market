export const handleBuyNow = ({ user, selectdata, navigator, formData }) => {
  if (!user || !user.id) {
    alert('로그인이 필요한 서비스입니다.');
    return;
  }

  const orderData = [{
    user_id: user.id,
    product_id: selectdata.id,
    option: formData.optionList.map((option) => ({
      product_option_id: option.id,
      name: option.name,
      quantity: option.count,
      price: option.add_cost.price,
    })),
    total_quantity: formData.optionList.reduce((total, option) => total + option.count, 0),
    total_price: formData.optionList.reduce((total, option) => total + option.add_cost.price * option.count, 0),
  },
]

  console.log('orderData:', orderData);
  navigator('/order', { state: { orderData } });
};
