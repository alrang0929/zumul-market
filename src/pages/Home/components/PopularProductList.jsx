import React from 'react';
import CardList from '../../common/CardList';
import SubTitle from '../../common/SubTitle';
import { ContentBox } from '../../../styles/box';
function PopularProductList(props) {
    return (
        <>
        <ContentBox className="pupular-product-list">
        <SubTitle subTitle={"오늘의 인기 작품"} linkText={"더 보기+"}/>
        <CardList type={"product"}/>
        </ContentBox>
        </>
    );
}

export default PopularProductList;