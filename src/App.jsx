import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/index.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import NotFound from './NotFound';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home/index';
import SignupPage from './pages/Signup/index';
import ProductDetail from './pages/ProductDetail/index';
import LoginPage from './pages/Login';
import { ProductManagePage } from './pages/ProductManage';
import { ProductEditPage } from './pages/ProductEdit';
import { ProductListPage } from './pages/ProductList';
import { OrderPage } from './pages/Order';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <>
     <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            {/* MainLayout 아래에 자식 라우트 정의 */}
            <Route path="/" element={<MainLayout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="signup" element={<SignupPage />} />
              <Route path="order/:id" element={<OrderPage />} />
              <Route path="product/:id" element={<ProductDetail />} />
              <Route path="product" element={<ProductListPage />} />
              <Route path="product/:id/edit" element={<ProductEditPage />} />
              <Route
                path="user/productmanage"
                element={<ProductManagePage />}
              />
            </Route>
            {/* 404 페이지 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
};

export default App;
