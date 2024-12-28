import React from 'react';
import './styles/login.scss';

import LoginForm from './components/LoginForm';
import { loginUser } from '../../api/users/loginUsers';
import useUserStore from '../../stores/auth/useUserStore';

const LoginPage = () => {
  const setUser = useUserStore((state) => state.setUser);
  
  const handleLogin = async (formData) => {
    await loginUser(formData, setUser);
  };
  return (
    <>
      <div className="login-page">
        <LoginForm onSubmit={handleLogin}/>
      </div>
    </>
  );
};

export default LoginPage;
