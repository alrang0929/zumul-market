import React from 'react';
import './styles/login.scss';

import LoginForm from './components/LoginForm';
import { loginUser } from '../../api/auth/loginUsers';
import useUserStore from '../../stores/auth/useUserStore';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const setUser = useUserStore((state) => state.setUser);
  const navigater = useNavigate();
  const handleLogin = async (formData) => {
    const response = await loginUser(formData, setUser);
    if (response.success) {
      // 로그인 성공 시 메인 페이지로 이동
      alert(`로그인 성공`);
      navigater('/');
    } else {
      alert(`로그인 실패: ${response.error}`);
    }
  };
  return (
    <>
      <div className="login-page">
        <LoginForm onSubmit={handleLogin} />
      </div>
    </>
  );
};

export default LoginPage;
