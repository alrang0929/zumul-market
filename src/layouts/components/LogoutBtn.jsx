import React from 'react';
import { logoutUser } from '../../api/auth/logoutUsers';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../styles/StyleButton';
const LogoutButton = () => {
  const navigater = useNavigate();
  const handleLogout = async () => {
    const response = await logoutUser();
    if (response.success) {
      alert('로그아웃되었습니다.');
      navigater('/');
    } else {
      alert(`로그아웃 실패: ${response.error}`);
    }
  };

  return (
    <Button buttontype={'basic-main'} onClick={handleLogout}>
      로그아웃
    </Button>
  );
};

export default LogoutButton;
