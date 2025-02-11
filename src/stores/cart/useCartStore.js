import { create } from 'zustand';
import supabase from '../../api/supabaseClient';
import { fetchCartItems } from '../../api/cart/fetchCartItems';

export const useCartStore = create((set) => ({
  // 상태
  isCartOpen: false,
  cartItems: [],

  // 장바구니 열기/닫기
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),

  setCartItems: (items) => set({ cartItems: items }),
  // 장바구니에 아이템 추가
  addToCart: (item) => {
    // 로컬 스토어에 추가
    set((state) => ({ cartItems: [...state.cartItems, item] }));

    // Supabase에 저장
    supabase
      .from('cart')
      .insert([
        {
          user_id: item.user_id, // 사용자 ID
          product_id: item.product.id, // 상품 ID
          product_option_id: item.options?.id || null, // 옵션 ID
          quantity: item.basicProductCount, // 수량
        },
      ])
      .then(({ data, error }) => {
        if (error) {
          console.error('Supabase Error:', error.message);
        } else {
          //console.log('Saved to cart:', data);
        }
      });
  },

  removeItem: (itemId) =>
    set((state) => ({
      cartItems: state.cartItems.filter((item) => item.id !== itemId),
    })),

  // 장바구니 비우기
  clearCart: () => set(() => ({ cartItems: [] })),
  loadCartItems: async (userId) => {
    //console.log('loadCartItems called with userId:', userId); // userId 확인

    const result = await fetchCartItems(userId);
    if (result.error) {
      console.error('Failed to load cart items:', result.error);
    } else {
      //console.log('Cart items loaded:', result.data); // 데이터 확인
      set({ cartItems: result.data || [] });
    }
  },
}));
