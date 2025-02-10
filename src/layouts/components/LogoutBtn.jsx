import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../styles/StyleButton';
import { logoutUser } from '../../api/auth/api';
const LogoutButton = ({navigator}) => {
  const handleLogout = async () => {
    const response = await logoutUser();
    if (response.success) {
      alert('로그아웃되었습니다.');
      navigator('/');
      
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
