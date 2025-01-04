import { useState, useEffect } from 'react';
import { fetchAllProduct } from '../fetchAllProduct';

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        setIsLoading(true);
        const data = await fetchAllProduct(); // 전체 상품 데이터 가져오기
        setProducts(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadProducts();
  }, []); // 의존성 배열을 빈 배열로 설정해 최초 로드 시에만 실행

  return { products, isLoading, error };
};
