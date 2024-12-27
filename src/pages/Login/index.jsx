import React from 'react';
import './styles/login.scss';

import LoginForm from './components/LoginForm';
import { loginUser } from '../../api/users/loginUsers';

  const handleLogin = async (formData) => {
   await loginUser(formData);
  };
const LoginPage = () => {
  return (
    <>
      <div className="login-page">
        <LoginForm onSubmit={handleLogin}/>
      </div>
    </>
  );
};

export default LoginPage;
