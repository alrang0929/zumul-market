import React, { useEffect, useState } from 'react';
import ProductEditCard from '../../../common/ProductEditCard';
import useUserStore from '../../../stores/auth/useUserStore';
import { fetchProduct } from '../../../api/product/fetchProduct';

const SellProductList = () => {
  const user = useUserStore((state) => state.user);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProduct(user.id); // Supabase에서 데이터 가져오기
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    loadProducts();
  }, [user.id]);

  return (
    <div className="sell-list">
      <ProductEditCard
        key={products.id}
        data={products}
        linktext={`product/${user.id}/edit`}
      />
    </div>
  );
};

export default SellProductList;
