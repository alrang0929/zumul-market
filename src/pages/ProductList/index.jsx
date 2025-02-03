import React, { useEffect, useRef, useState } from 'react';
import { DivBox } from '../../styles/StyleBox';
import { ProductThumbCard } from '../../common/ProductThumbCard';
import { CountSubTitle } from '../../common/CountSubTitle';
import { FilterMenu } from '../../common/FilterMenu';
// import useProductStore from '../../stores/product/useProductStore';
import { useProductsQuery } from '../../stores/product/useInfiniteProduct';

export const ProductListPage = () => {
  const menu = ['낮은 가격순', '높은 가격순', '신상품순'];
  // const { products, fetchProducts, loadMoreProducts, hasMore } =
  //   useProductStore();
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useProductsQuery();
  const observerRef = useRef();
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleFilterChange = (filterValue) => {
    setSelectedFilter(filterValue);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage(); // 다음 페이지 데이터 로드
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
  
  console.log('products', products);
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
