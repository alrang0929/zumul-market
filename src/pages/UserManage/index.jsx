import React from 'react';
import { UserInfoWrap } from './components/UserInfo';
import useUserStore from '../../stores/auth/useUserStore';
import { SellProductList } from './components/SellProductList';
import { useNavigate } from 'react-router-dom';

export const UserManagePage = () => {
  const navigator = useNavigate();
  const user = useUserStore((state) => state.user);
  if (!user) {
    alert("로그인이 필요한 서비스 입니다");
    navigator('login');
  }
  console.log('유저정보 확인', user);

  return (
    <>
      <UserInfoWrap userdata={user} />
      <div
        className="user-manage-page"
        style={{ backgroundColor: '#F5F5F5', minHeight: '20rem' }}
      >
        <SellProductList />
      </div>
    </>
  );
};
