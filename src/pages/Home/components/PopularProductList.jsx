import React from 'react';
import { DivBox } from '../../../styles/box';
import SubTitle from '../../../common/SubTitle';
import { useProducts } from '../../../api/product/hook/useProducts';
import { ProductThumbCard } from '../../../common/ProductThumbCard';
function PopularProductList(props) {
  const { products } = useProducts();


  return (
    <>
      <DivBox className="pupular-product-list">
        <SubTitle
          subTitle={'오늘의 인기 작품'}
          linkText={'더 보기+'}
          link={'/product'}
        />
        <ProductThumbCard selectdata={products} slice={true} slicecount={4}/>
      </DivBox>
    </>
  );
}

export default PopularProductList;
