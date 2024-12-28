import React from 'react';
import { logoutUser } from '../../api/users/logoutUsers';
import { useNavigate } from 'react-router-dom';
import StyleButton from '../../styles/StyleButton';
const LogoutButton = () => {
  const nev = useNavigate();
  const handleLogout = async () => {
    const response = await logoutUser();
    if (response.success) {
      alert('로그아웃되었습니다.');
      nev('/');
    } else {
      alert(`로그아웃 실패: ${response.error}`);
    }
  };

  return <StyleButton buttonType={"basic-main"} text={"로그아웃"} onClick={handleLogout}/>;
};

export default LogoutButton;
