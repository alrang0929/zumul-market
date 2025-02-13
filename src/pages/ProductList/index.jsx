import React, { useEffect, useRef, useState } from 'react';
import { DivBox } from '../../styles/box';
import { ProductThumbCard } from '../../common/ProductThumbCard';
import { CountSubTitle } from '../../common/CountSubTitle';
import { FilterMenu } from '../../common/FilterMenu';
// import useProductStore from '../../stores/product/useProductStore';
import { useProductsQuery } from '../../stores/product/useInfiniteProduct';

export const ProductListPage = () => {
  const menu = ['낮은 가격순', '높은 가격순', '신상품순'];
  const [selectedFilter, setSelectedFilter] = useState(null);
  const { data, fetchNextPage, hasNextPage, totalCount } = useProductsQuery();
  console.log('Product List Data:', data);
  console.log('Total Count from useProductsQuery:', totalCount);

  const observerRef = useRef();

  const handleFilterChange = (filterValue) => {
    setSelectedFilter(filterValue);
  };

  useEffect(() => {
    if (!hasNextPage) return; // 다음 페이지가 없으면 실행하지 않음.
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }
    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage]);

  const products = data?.pages.flatMap((page) => page.products) || [];

  return (
    <>
      <DivBox className="product-list" style={{ padding: '10rem 0' }}>
        <div
          className="title-wrap"
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <CountSubTitle totalCount={totalCount} subTitle={'개의 작품이 있습니다'} />
          <FilterMenu menu={menu} onFilterChange={handleFilterChange} />
        </div>
        <ProductThumbCard selectdata={products} selectFilter={selectedFilter} />
        <div ref={observerRef} style={{ height: '1px' }} />
      </DivBox>
    </>
  );
};
