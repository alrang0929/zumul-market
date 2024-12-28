import React from 'react';
import { logoutUser } from '../../api/users/logoutUsers';
import { BasicBtn } from '../../styles/Button';
const LogoutButton = () => {
  const handleLogout = async () => {
    const response = await logoutUser();
    if (response.success) {
      alert('로그아웃되었습니다.');
    } else {
      alert(`로그아웃 실패: ${response.error}`);
    }
  };

  return <BasicBtn onClick={handleLogout}>로그아웃</BasicBtn>;
};

export default LogoutButton;
