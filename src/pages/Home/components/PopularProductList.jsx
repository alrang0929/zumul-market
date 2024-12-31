import React from 'react';
import { DivBox } from '../../../styles/box';
import SubTitle from '../../../common/SubTitle';
import CardList from '../../../common/CardList';
function PopularProductList(props) {
    return (
        <>
        <DivBox className="pupular-product-list">
        <SubTitle subTitle={"오늘의 인기 작품"} linkText={"더 보기+"}/>
        <CardList type={"product"}/>
        </DivBox>
        </>
    );
}

export default PopularProductList;
