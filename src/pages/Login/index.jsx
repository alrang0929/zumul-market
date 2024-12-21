import React from 'react';
import './styles/login.scss';
import { BasicBtn } from '../../styles/Button';
const Login = () => {
  return (
    <>
      <div className="login-page">
        <div className="contents-wrap">
          <span className="title">
            당신의 작품을 지금 쪼물마켓에서<br/>세상과 연결하세요
          </span>
          <BasicBtn className='login-btn'>로그인 하기</BasicBtn>
        </div>
      </div>
    </>
  );
};

export default Login;
