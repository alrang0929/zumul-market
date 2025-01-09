import { create } from 'zustand';

export const useCartStore = create((set) => ({
  isCartOpen: false,
  cartItems: [],
  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  addToCart: (item) =>
    set((state) => ({ cartItems: [...state.cartItems, item] })),
}));
