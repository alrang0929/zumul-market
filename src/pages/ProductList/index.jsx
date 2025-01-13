import React, { useEffect } from 'react';
import { DivBox } from '../../styles/box';
import { ProductThumbCard } from '../../common/ProductThumbCard';
import { CountSubTitle } from '../../common/CountSubTitle';
import { FilterMenu } from '../../common/FilterMenu';
import useProductStore from '../../stores/product/useProductStore';

export const ProductListPage = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts(); // 전체 상품 데이터 로드
  }, [fetchProducts]);
  
  return (
    <>
      <DivBox className="product-list" style={{padding:"10rem 0"}}>
        <div className="title-wrap" style={{ display: 'flex', justifyContent:"space-between"}}>
          <CountSubTitle
            selectdata={products}
            subTitle={'개의 작품이 있습니다'}
          />
          <FilterMenu />
        </div>
        <ProductThumbCard selectdata={products}/>
      </DivBox>
    </>
  );
};
