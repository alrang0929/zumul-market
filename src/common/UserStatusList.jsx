<<<<<<< HEAD:src/pages/common/UserStatusList.jsx
import React from 'react'

const UserStatusList = () => {
  return (
    <div>UserStatusList</div>
  )
}

export default UserStatusList
=======
import React, { useEffect, useState } from 'react';
import { ProfileStatusDb } from './dummyDb';
import './style/user_status_list.scss';
import useUserStore from '../stores/auth/useUserStore';
import { fetchProduct } from '../api/product/fetchProduct';
const UserStatusCard = () => {
  const data = ProfileStatusDb;
  const user = useUserStore((state) => state.user);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProduct(user.id); // Supabase에서 데이터 가져오기
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    loadProducts();
  }, [user.id]);
  console.log("products",products);

  return (
    <ul className="user-status-list">
      {data.map((item, i) => (
        <li key={i}>
          <div className="icon-box">
            <img src={item.icon} alt="상품 아이콘" />
          </div>
          <div className="text-wrap">
            <span className="title">{item.title}</span>
            <span className="count">{item.count}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UserStatusCard;
>>>>>>> 4fd7a71d93cd159800150c09be6b3d079a0e566a:src/common/UserStatusList.jsx
