import React from 'react';
import { useForm } from 'react-hook-form';
import { InputBox } from '../../../styles/box';
import { BasicBtn, SubmitBtn } from '../../../styles/Button';
import { StyledForm } from '../../../styles/form';
function SignUpForm(props) {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);
  return (
    <>
    
    <StyledForm className='sign-up-form' onSubmit={handleSubmit(onSubmit)}>
      {/* 1. title */}
      <h3>회원가입</h3>
      {/* 2. 정보입력 from (이메일, 비밀번호, 닉네임, 프로필이미지, 창작자 여부) */}
      <div className="input-box">
        <span>아이디(이메일)</span>
        <InputBox />
      </div>
      <div className="input-box">
        <span>비밀번호</span>
        <InputBox />
      </div>
      <div className="input-box">
        <span>닉네임</span>
        <InputBox />
      </div>
      {/* 프로필 이미지 */}
      <div className="profile-img-box">
        <div className="preview-img">
          <img src="/images/empty_img.png" alt="임시 이미지" />
        </div>
        <div className="text-wrap">
          <BasicBtn style={{ borderRadius: '0' }}>파일 선택</BasicBtn>
          <span>
            JPG, GIF, PNG <br />
            권장 사이즈: 150px, 최대 250KB
          </span>
        </div>
      </div>
      {/* 3.회원가입 버튼 */}
      <SubmitBtn className="submit-btn" style={{ borderRadius: '0' }}>
        회원가입 하기
      </SubmitBtn>
    </StyledForm>
    </>
  );
}

export default SignUpForm;
