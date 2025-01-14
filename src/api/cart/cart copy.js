// api/cart.js
import supabase from '../supabaseClient';

/**
 * Supabase에 장바구니 데이터 저장
 * @param {Object} cartData - 저장할 장바구니 데이터
 * @returns {Promise<Object>} - Supabase 응답
 *
 * Supabase에서 특정 사용자의 장바구니 데이터 가져오기
 * @param {string} userId - 현재 로그인된 사용자 ID
 * @returns {Promise<Object[]>} - 장바구니 데이터 배열
 */
// export const saveCartItem = async (cartData) => {
//   return supabase
//     .from('cart')
//     .insert([
//       {
//         user_id: cartData.user_id,
//         product_id: cartData.product.id,
//         product_option_id: cartData.options?.length ? cartData.options.id : null,
//         quantity: cartData.basicProductCount,
//       },
//     ])
//     .select() // 저장된 데이터 반환
//     .then(({ data, error }) => {
//       if (error) {
//         console.error('Supabase Error:', error.message);
//         return { error };
//       }
//       console.log('Saved to cart:', data); // 저장된 데이터 출력
//       return { data };
//     });
// };

export const fetchCartItems = async (userId) => {
  console.log('Fetching cart items for user:', userId); // userId 확인

  return supabase
    .from('cart')
    .select(
      `
      *,
      product:product_id (
        id,
        title,
        price,
        title_image
      ),
      product_option:product_option_id (
        id,
        name,
        add_cost
      )
    `
    )
    .eq('user_id', userId) // user_id로 필터링
    .then(({ data, error }) => {
      console.log('Fetched cart data:', data); // 데이터 확인
      if (error) {
        console.error('Error fetching cart items:', error.message);
        return { error };
      }
      return { data };
    });
};
