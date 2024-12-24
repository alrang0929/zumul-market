import React from 'react';
import { BasicBtn, SubmitBtn } from '../../../styles/Button';
import { InputBox } from '../../../styles/box';
import { StyledForm } from '../../../styles/form';

function EditProfileForm(props) {
  return (
    <StyledForm className='edit-profile-form' action="">
      <h3>회원가입</h3>
      <div className="input-box">
        <span>아이디(이메일)</span>
        <InputBox />
      </div>
      <SubmitBtn className="submit-btn" style={{ borderRadius: '0' }}>
        회원가입 하기
      </SubmitBtn>
    </StyledForm>
  );
}

export default EditProfileForm;
