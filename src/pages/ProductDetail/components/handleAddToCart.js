export const handleAddToCart = ({ user, selectdata, formData, addToCart }) => {
  const { optionList } = formData;

  const cartData = {
    user_id: user.id,
    product_id: selectdata.id,
    option: optionList.map((option) => ({
      product_option_id: option.id,
      quantity: option.count,
      price: option.add_cost.price,
    })),
    total_quantity: optionList.reduce((total, option) => total + option.count, 0),
    total_price: optionList.reduce((total, option) => total + option.add_cost.price * option.count, 0),
  };

  console.log('Cart data to save:', cartData);

  addToCart([cartData]);
};
