import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { RectangleBtn } from '../../../styles/Button';
import { FormBox, InputBox } from '../../../styles/box';

const SignUpForm = ({ onSubmit }) => {
  
  const { register, handleSubmit, setError, formState: { errors } } = useForm();
  const [loading, setLoading] = useState(false);

  const validateForm = (data) => {
    const errors = {};
    // if (!data.email.includes('@')) {
    //   errors.email = '유효한 이메일 주소를 입력해주세요';
    // }
    if (data.password.length < 10) {
      errors.password = '비밀번호는 최소 10자 이상이어야 합니다';
    }
    if (data.name.length < 2 || data.name.length > 10) {
      errors.name = '닉네임은 2자 이상 10자 이하만 가능합니다';
    }
    if (!['fan', 'creator'].includes(data.type)) {
      errors.type = '창작자 여부를 선택해주세요';
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

    // 성공적으로 검증된 데이터를 부모 컴포넌트로 전달
    await onSubmit(data);
    setLoading(false);
  };

  return (
    <FormBox className="form-wrap">
      <h3>회원가입</h3>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        {/* 이메일 */}
        <div className="input-wrap">
          <span>아이디(이메일):</span>
          <InputBox {...register('email')} placeholder="이메일 주소" />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        {/* 비밀번호 */}
        <div className="input-wrap">
          <span>비밀번호:</span>
          <InputBox
            type="password"
            {...register('password')}
            placeholder="최소 10자 이상"
          />
          {errors.password && <p className="error">{errors.password.message}</p>}
        </div>

        {/* 닉네임 */}
        <div className="input-wrap">
          <span>닉네임:</span>
          <InputBox {...register('name')} placeholder="닉네임 입력" />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        {/* 창작자 여부 */}
        <div className="input-wrap">
          <span>창작자 확인:</span>
          <input type="radio" value="fan" {...register('type')} id="fan" />
          <label htmlFor="fan">팬</label>
          <input type="radio" value="creator" {...register('type')} id="creator" />
          <label htmlFor="creator">창작자</label>
          {errors.type && <p className="error">{errors.type.message}</p>}
        </div>

        {/* 제출 버튼 */}
        <RectangleBtn className="submit-btn" type="submit" disabled={loading}>
          {loading ? '회원가입 중...' : '회원가입 완료'}
        </RectangleBtn>
      </form>
    </FormBox>
  );
}; 

export default SignUpForm;