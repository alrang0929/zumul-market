import React from 'react';
import ProductEditCard from '../../../common/ProductEditCard';
import { ProductEditDb } from '../../../common/dummyDb';
import useUserStore from '../../../stores/auth/useUserStore';

const SellProductList = () => {
  const user = useUserStore((state) => state.user);
  return <div className='sell-list'>
    <ProductEditCard data={ProductEditDb} linktext={`product/${user.id}/edit`}/>
  </div>;
};

export default SellProductList;
