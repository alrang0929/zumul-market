import React from 'react';
import CardList from '../../common/CardList';
import SubTitle from '../../common/SubTitle';
import { DivBox } from '../../../styles/box';
function PopularProductList(props) {
<<<<<<< HEAD
  return (
    <>
      <ContentBox className="pupular-product-list">
        <SubTitle subTitle={'오늘의 인기 작품'} linkText={'더 보기+'} />
        <CardList type={'product'} />
      </ContentBox>
    </>
  );
=======
    return (
        <>
        <DivBox className="pupular-product-list">
        <SubTitle subTitle={"오늘의 인기 작품"} linkText={"더 보기+"}/>
        <CardList type={"product"}/>
        </DivBox>
        </>
    );
>>>>>>> feature/product
}

export default PopularProductList;
