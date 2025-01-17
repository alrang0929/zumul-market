import React, { useState } from 'react';
import { InputBox } from '../../../styles/box';

import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './styles/login_form.scss';
import { Button } from '../../../styles/StyleButton';
const LoginForm = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  


  const validateForm = (data) => {
    const errors = {};
    if (!data.email.includes('@')) {
      errors.email = '유효한 이메일 주소를 입력해주세요';
    }
    if (data.password.length < 10) {
      errors.password = '비밀번호는 최소 10자 이상이어야 합니다';
    }
    return errors;
  };

  const onFormSubmit = async (data) => {
    setLoading(true);
   
    // 수동 검증
    const formErrors = validateForm(data);
    if (Object.keys(formErrors).length > 0) {
      Object.entries(formErrors).forEach(([key, message]) => {
        setError(key, { type: 'manual', message });
      });
      setLoading(false);
      return;
    }
    console.log(data);
    // 성공적으로 검증된 데이터를 부모 컴포넌트로 전달
    await onSubmit(data);
    setLoading(false);
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
