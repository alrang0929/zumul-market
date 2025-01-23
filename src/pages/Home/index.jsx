import React from 'react';
import MainVisualSlid from './components/MainVisualSlid';
import CategoriesList from './components/CategoriesList';
import PopularProductList from './components/PopularProductList';
import RequestList from './components/RequestList';

const Home = () => {
  return (
    <>
      <MainVisualSlid />
      <CategoriesList />
      <PopularProductList />
      <RequestList />
    </>
  );
};

export default Home;
