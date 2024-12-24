import React from 'react';
import './styles/login.scss';
import { BasicBtn } from '../../styles/Button';
import GoogleLoginButton from '../../api/GoogleLoginBtn';
import { Link } from 'react-router-dom';
const Login = () => {
  return (
    <>
      <div className="login-page">
        <div className="contents-wrap">
          <span className="title">
            당신의 작품을 지금 쪼물마켓에서
            <br />
            세상과 연결하세요
          </span>
          <div className="btn-wrap">
            <div className="google-btn">
              <GoogleLoginButton />
            </div>
            <BasicBtn className="login-btn">로그인 하기</BasicBtn>
          </div>
          <div className="signup-text">
            아직 계정이 없으신가요? <Link to="/signup">회원가입</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
