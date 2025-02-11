import React, { useEffect, useState } from 'react';
import { userStatusData } from './userStatusData';
import './styles/user_status_list.scss';
import useUserStore from '../../../stores/auth/useUserStore';
import { fetchProductCount } from '../../../api/product/fetchProductCount';

export const UserStatusCard = () => {
  const user = useUserStore((state) => state.user);
  const [count, setCount] = useState(userStatusData);

  useEffect(() => {
    if (user) {
      Promise.all([fetchProductCount(user.id)]).then(([productCount]) => {
        setCount((prev) =>
          prev.map((item) => {
            if (item.title === '판매상품') {
              return { ...item, count: productCount };
            }
            return item;
          })
        );
      });
    }
  }, [user]);

  return (
    <ul className="user-status-list">
      {count.map((item, i) => (
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
