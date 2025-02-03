import React from 'react';
import { DivBox } from '../../../styles/StyleBox';
import SubTitle from '../../../common/SubTitle';
import { ProductThumbCard } from '../../../common/ProductThumbCard';
import { useProductsQuery } from '../../../stores/product/useInfiniteProduct';
function PopularProductList(props) {
  
  const { data } = useProductsQuery();
  const products = data?.pages.flatMap((page) => page.products) || [];

  return (
    <>
      <DivBox className="pupular-product-list">
        <SubTitle
          subTitle={'오늘의 인기 작품'}
          linkText={'더 보기+'}
          link={'/product'}
        />
        <ProductThumbCard selectdata={products} slice={true} slicecount={4} />
      </DivBox>
    </>
  );
}

export default PopularProductList;
