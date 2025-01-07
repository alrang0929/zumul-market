import { create } from 'zustand';
import { fetchAllProduct } from '../../api/product/fetchAllProduct';
import { fetchDetailProduct  } from '../../api/product/fetchDetailProduct';

const useProductStore = create((set) => ({
  products: [], // 전체 상품 데이터
  selectedProduct: null, // 선택된 상품의 상세 데이터
  error: null,

  fetchProducts: async () => {
    try {
      const data = await fetchAllProduct(); // 전체 상품 데이터를 가져오는 API
      set({ products: data });
    } catch (err) {
      set({ error: err.message });
    }
  },

  fetchProductDetail: async (productId) => {
    console.log('Fetching product detail for ID:', productId); // 전달된 productId 확인
    try {
      const data = await fetchDetailProduct(productId); 
      console.log('Fetched product detail:', data); // 가져온 데이터 확인
      set({ selectedProduct: data });
    } catch (err) {
      console.error('Error fetching product detail:', err.message);
      set({ error: err.message });
    }
  },
  

  clearSelectedProduct: () => set({ selectedProduct: null }), // 상세 데이터 초기화
}));

export default useProductStore;
