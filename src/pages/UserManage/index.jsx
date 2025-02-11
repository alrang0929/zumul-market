import React, { useEffect, useState } from 'react';
import { UserInfoWrap } from './components/UserInfo';
import useUserStore from '../../stores/auth/useUserStore';
import { SellProductList } from './components/SellProductList';
import { useNavigate } from 'react-router-dom';
import SkeletonLoader from '../../utils/SkeletonLoader';

export const UserManagePage = () => {
  const navigator = useNavigate();
  const { user, restoreUser } = useUserStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      await restoreUser();
      setLoading(false);
    };
    fetchUser();
  }, [restoreUser]);

  useEffect(() => {
    if (!loading && user === null) {
      alert('로그인이 필요한 서비스 입니다');
      navigator('/login');
    }
  }, [user, navigator, loading]);

  //console.log("user 새로고침 후", user);

  if (loading || user === undefined) {
    return <SkeletonLoader />;
  }
  
  return (
    <>
      <UserInfoWrap user={user} />
      <div
        className="user-manage-page"
        style={{ backgroundColor: '#F5F5F5', minHeight: '20rem' }}
      >
        <SellProductList />
      </div>
    </>
  );
};
