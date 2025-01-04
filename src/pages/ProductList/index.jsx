import React from 'react';
import { DivBox } from '../../styles/box';
import SubTitle from '../../common/SubTitle';
import CardList from '../../common/CardList';
import { ProductThumbCard } from '../../common/ProductThumbCard';

export const ProductListPage = () => {
  return (
    <>
      <DivBox className="product-list">
        <SubTitle
          subTitle={'오늘의 인기 작품'}
          link={'/product'}
        />
        <ProductThumbCard/>
      </DivBox>
    </>
  );
};
