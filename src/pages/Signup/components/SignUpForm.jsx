import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FormBox, InputBox } from '../../../styles/StyleBox';
import { Button } from '../../../styles/StyleButton';
import { useImageHandler } from '../../../utils/useImageHandler';
import { Link, useNavigate } from 'react-router-dom';
import './styles/sign_up_form.scss';

const SignUpForm = ({ onSubmit }) => {
  const navigator = useNavigate();
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '', // 닉네임 기본값
      profile_image: null, // 프로필 이미지 기본값
      email: '', // 이메일 기본값
      password: '', // 비밀번호 기본값
      type: 'fan', // 창작자 여부 기본값 ('fan' 또는 'creator')
    },
  });

  const [loading, setLoading] = useState(false);

  const { previewImage, fileInputRef, handleImageUpload, handleLinkClick } =
    useImageHandler(setValue);

  const validateForm = (data) => {
    const errors = {};
    if (!data.email.includes('@')) {
      errors.email = '유효한 이메일 주소를 입력해주세요';
    }
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
    // console.log('유효성 검사 통과:', data);
    try {
      // 이미지 경로와 함께 부모 컴포넌트로 데이터 전달
      await onSubmit( data, navigator );
    } catch (error) {
      console.error('회원가입 중 에러 발생:', error.message);
    } finally {
      setLoading(false);
      navigator('/');
    }
  };

  return (
    <FormBox className="profile-form" onSubmit={handleSubmit(onFormSubmit)}>
      <h3>회원가입</h3>
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
        <input
          type="radio"
          value="creator"
          {...register('type')}
          id="creator"
        />
        <label htmlFor="creator">창작자</label>
        {errors.type && <p className="error">{errors.type.message}</p>}
      </div>
      {/* 대표 이미지 */}
      <div className="input-wrap">
        <div className="text-box">
          <h6>프로필 이미지</h6>
          <span>가로 800px 이하</span>
        </div>

        <Link
          className="profile-img"
          onClick={() => handleLinkClick('profile_image')}
          aria-label="프로필 이미지 업로드"
        >
          <img src={previewImage.profile_image} alt="프로필 이미지 미리보기" />
        </Link>
        <input
          type="file"
          accept=".jpg, .jpeg, .png"
          ref={(el) => (fileInputRef.current.profile_image = el)}
          style={{ display: 'none' }}
          onChange={(e) => handleImageUpload(e, 'profile_image')}
          // {...register('profile_image')}
        />
      </div>

      {/* 제출 버튼 */}
      <Button buttontype={'submit'} type="submit" disabled={loading}>
        {loading ? '회원가입 중...' : '회원가입 완료'}
      </Button>
    </FormBox>
  );
};

export default SignUpForm;
