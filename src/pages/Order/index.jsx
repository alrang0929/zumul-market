import React from 'react';
import { OrderForm } from './components/OrderForm';
import { OrderInfo } from './components/OrderInfo';
import { DivBox } from '../../styles/box';
import { useLocation } from 'react-router-dom';

export const OrderPage = () => {

  return (
    <>
      <DivBox style={{ display: 'flex', gap: '0 2rem' }}>
        <OrderForm />
        <OrderInfo />
      </DivBox>
    </>
  );
};
