import {saveOrder} from "../../../api/order/saveOrder";
import supabase from "../../../api/supabaseClient";

export const handleBuyNow = async ({ user, selectdata, navigator, formData }) => {
  
  const { optionList } = formData;

  if (!user || !user.id) {
    alert('로그인이 필요한 서비스입니다.');
    return;
  }

  const orderData = {
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
  console.log('orderData:', orderData);


    const saveOrderDb = await saveOrder (orderData);

    if(saveOrderDb) {
      const { data, error } = await supabase
      .from('order') // 테이블 이름
      .insert([orderData]) // 새 데이터를 추가합니다.
      .select();
      console.log('Supabase Response:', { data, error });
      if (error) {
      console.error('Error inserting product:', error);
      return null;
      }
      return data; // 추가된 데이터 반환
  }
  navigator(`/order/${user.id}`);
};