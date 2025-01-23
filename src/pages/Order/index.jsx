import React from 'react';
import { OrderForm } from './components/OrderForm';
import { OrderInfo } from './components/OrderInfo';
import { DivBox } from '../../styles/box';

import { useLocation } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import { useProductId } from '../../api/product/hook/useProductId';
// import { Skeleton } from '../../styles/skeleton';

export const OrderPage = () => {
  
  const location = useLocation();
  const orderData = Array.isArray(location.state?.orderData)
    ? location.state.orderData
    : [location.state?.orderData];

  const productId = orderData.map((item) => item.product_id);

  const { data: products, isLoading, isError } = useProductId(productId);

  const methods = useForm({ defaultValues: { products: [], total: 0 } });

  if (isLoading) return <p>로딩중</p>;
  if (isError) return <p>Failed to load product details</p>;

  return (
    <>
      <FormProvider {...methods}>
        <main className="order-page" style={{backgroundColor:"#F5F5F5"}}>

        <DivBox style={{ display: 'flex', gap: '0 4rem', padding:"10rem 0" }}>
          <OrderForm
            product={products}
            options={orderData.map((item) => item.option || [])}
            />
          <OrderInfo product={products}/>
        </DivBox>
            </main>
      </FormProvider>
    </>
  );
};
