import React, { useState } from 'react';
import { InputBox } from '../../../styles/box';

import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './styles/login_form.scss';
import { Button } from '../../../styles/StyleButton';
import { loginUser } from '../../../api/auth/login';
import useUserStore from '../../../stores/auth/useUserStore';
const LoginForm = () => {

  const navigator = useNavigate();

  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();


  const onFormSubmit = async (data) => {
    console.log("로그인 시도data", data);
    setLoading(true);
  
    try {
      const response = await loginUser(data.email, data.password);
      if (!response.success) {
        throw new Error(response.error);
      }
      
      console.log("✅ 로그인 성공", response.user);
      alert("주물마켓에 오신것을 환영합니다");
      navigator('/');
  
      // ✅ 로그인 성공 후 사용자 정보 불러오기
      await useUserStore.getState().restoreUser();
  
    } catch (error) {
      console.error("❌ 로그인 실패:", error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="form-wrap">
        <h3 className="title">
          당신의 작품을 지금 쪼물마켓에서
          <br />
          세상과 연결하세요
        </h3>
        <form onSubmit={handleSubmit(onFormSubmit)}>
          <div className="input-wrap">
            <InputBox
              // value={'sellbell07@gmail.com'}
              placeholder="이메일 주소"
              {...register('email')}
            />
            {errors.email && <p className="error">{errors.email.message}</p>}
            <InputBox
              // value={'aaaa123456!'}
              placeholder={'비밀번호, 최소 10자 이상'}
              type="password"
              {...register('password', { required: true })}
            />
            {errors.password && (
              <p className="error">{errors.password.message}</p>
            )}
          </div>
          <Button buttontype={'submit'} type="submit">
            로그인
          </Button>
        </form>
        <div className="signup-text">
          아직 계정이 없으신가요? <Link to="/signup">회원가입</Link>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
