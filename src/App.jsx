import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.scss';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/index';
import SignupPage from './pages/Signup/index';
import Cart from './pages/Cart/index';
import ProductDetail from './pages/ProductDetail/index';
import LoginPage from './pages/Login';
import { ProductManagePage } from './pages/ProductManage';
import NotFound from './NotFound';
import SessionManager from './utils/SessionManager';
const App = () => {
  return (
    <>
      <SessionManager>
        <Router>
          <Routes>
            {/* MainLayout 아래에 자식 라우트 정의 */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignupPage />} />
              <Route path="cart" element={<Cart />} />
              <Route path="product/:id" element={<ProductDetail />} />
              <Route
                path="user/productmanage"
                element={<ProductManagePage />}
              />
            </Route>
            {/* 404 페이지 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </SessionManager>
    </>
  );
};

export default App;
