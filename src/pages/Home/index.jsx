import React from 'react';
import MainVisualSlid from './components/MainVisualSlid';
import CategoriesList from './components/CategoriesList';
import PopularProductList from './components/PopularProductList';
import RequestList from './components/RequestList';
import { ContentBox } from '../../styles/box';

const Home = () => {
  return (
    <>
      {/* 1. 메인 비쥬얼 슬라이드 */}
      <MainVisualSlid />
      {/* 2. 카테고리 버튼리스트 */}
      <ContentBox>
        <CategoriesList />
        {/* 3. 인기 상품 리스트 */}
        <PopularProductList />
        {/* 4. 외주구인글 리스트 */}
        <RequestList />
      </ContentBox>
    </>
  );
};

export default Home;
