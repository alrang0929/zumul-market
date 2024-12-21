import React from 'react';
import Header from './components/header';
import AppRoot from './components/AppRoot';
import Footer from './components/Footer';

function MainLayout(props) {
  return (
    <>
      <Header />
      <AppRoot />
      <Footer />
    </>
  );
}

export default MainLayout;
