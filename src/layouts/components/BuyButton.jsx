import React from 'react';
import { useNavigate } from 'react-router-dom';
import useUserStore from '../../stores/auth/useUserStore';
import { Button } from '../../styles/StyleButton';
import { useCartStore } from '../../stores/cart/useCartStore';

export const BuyButton = () => {
  const user = useUserStore((state) => state.user);
  const navigator = useNavigate();

  return (
    <Button
      buttontype={'submit'}
      style={{ marginTop: '2rem', borderRadius: '1rem' }}
      onClick={() => {
        navigator(`/order/${user.id}`);
        toggleCart();
      }}
    >
      구매하기
    </Button>
  );
};
