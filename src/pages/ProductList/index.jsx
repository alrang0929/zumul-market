import React, { useEffect, useRef, useState } from 'react';
import { DivBox } from '../../styles/box';
import { ProductThumbCard } from '../../common/ProductThumbCard';
import { CountSubTitle } from '../../common/CountSubTitle';
import { FilterMenu } from '../../common/FilterMenu';
import useProductStore from '../../stores/product/useProductStore';

export const ProductListPage = () => {
  const menu = ['낮은 가격순', '높은 가격순', '신상품순'];
  const { products, fetchProducts, loadMoreProducts, hasMore } =
    useProductStore();
  const [selectedFilter, setSelectedFilter] = useState(null);
  const observerRef = useRef();

  const handleFilterChange = (filterValue) => {
    setSelectedFilter(filterValue);
  };

  useEffect(() => {
    fetchProducts(); // 전체 상품 데이터 로드
  }, [fetchProducts]);

  useEffect(() => {
    fetchProducts(); // 초기 데이터 로드
  }, [fetchProducts]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMoreProducts();
        }
      },
      { threshold: 1.0 }
    );
    if (observerRef.current) observer.observe(observerRef.current);

    return () => observer.disconnect();
  }, [loadMoreProducts, hasMore]);

  return (
    <>
      <DivBox className="product-list" style={{ padding: '10rem 0' }}>
        <div
          className="title-wrap"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <CountSubTitle
            selectdata={products}
            subTitle={'개의 작품이 있습니다'}
          />
          <FilterMenu menu={menu} onFilterChange={handleFilterChange} />
        </div>
        <ProductThumbCard selectdata={products} selectFilter={selectedFilter} />
        <div ref={observerRef} style={{ height: '1px' }} />
      </DivBox>
    </>
  );
};
