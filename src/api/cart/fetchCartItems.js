import supabase from '../supabaseClient';

/**
 * Supabase에서 특정 사용자의 장바구니 데이터 가져오기
 * @param {string} userId - 현재 로그인된 사용자 ID
 * @returns {Promise<Object[]>} - 장바구니 데이터 배열
 */
export const fetchCartItems = async (userId) => {
  //console.log('Fetching cart items for user:', userId);

  // 장바구니 기본 데이터 가져오기
  const { data: cartData, error } = await supabase
    .from('cart')
    .select(
      `
      *,
      product:product_id (
        id,
        title,
        price,
        title_image
      )
    `
    )
    .eq('user_id', userId);

  if (error) {
    console.error('Error fetching cart items:', error.message);
    return { error };
  }

  // 각 장바구니 항목의 옵션 데이터 가져오기
  const enrichedCart = await Promise.all(
    cartData.map(async (cartItem) => {
      if (cartItem.option && cartItem.option.length > 0) {
        const options = await Promise.all(
          cartItem.option.map(async (opt) => {
            const { data: optionData, error: optionError } = await supabase
              .from('product_option')
              .select('id, name, add_cost')
              .eq('id', opt.product_option_id)
              .single();

            if (optionError) {
              console.error('Error fetching product option:', optionError);
              return null;
            }

            return { ...opt, ...optionData };
          })
        );

        return { ...cartItem, option: options };
      } else {
        return cartItem;
      }
    })
  );

  //console.log('Enriched cart data:', enrichedCart);
  return enrichedCart;
};


