import { create } from 'zustand';
import { fetchAllProduct } from '../../api/product/fetchAllProduct';
import { fetchDetailProduct } from '../../api/product/fetchDetailProduct';
// import {fetchProduct} from '../../api/product/fetchProduct';
// import {useProduct} from '../../api/product/hook/useProducts'

const useProductStore = create((set) => ({
  products: [], // 전체 상품 데이터
  page: 1, // 현재 페이지
  hasMore: true, // 추가 데이터 여부
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
    //console.log('Fetching product detail for ID:', productId); // 전달된 productId 확인
    try {
      const data = await fetchDetailProduct(productId);
      //console.log('Fetched product detail:', data); // 가져온 데이터 확인
      set({ selectedProduct: data });
    } catch (err) {
      console.error('Error fetching product detail:', err.message);
      set({ error: err.message });
    }
  },

  loadMoreProducts: async () => {
    try {
      set((state) => ({ page: state.page + 1 })); // 페이지 증가
      const newPage = await fetchAllProduct(state.page + 1);
      set((state) => ({
        products: [...state.products, ...newPage], // 새로운 데이터 추가
        hasMore: newPage.length > 0, // 더 이상 데이터가 없으면 false
      }));
    } catch (err) {
      set({ error: err.message });
    }
  },

  clearSelectedProduct: () => set({ selectedProduct: null }), // 상세 데이터 초기화
}));

export default useProductStore;
