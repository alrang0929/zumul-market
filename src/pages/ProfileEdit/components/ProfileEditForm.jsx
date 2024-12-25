import React from 'react';
import { BasicBtn, SubmitBtn } from '../../../styles/Button';
import { InputBox } from '../../../styles/box';
import { StyledForm } from '../../../styles/form';
import "./styles/profile_edit_form.scss";

function ProfileEditForm(props) {
  return (
    <StyledForm className='edit-profile-form' action="">
      <h3>프로필 설정</h3>
      {/* 1. 이메일(변경 불가) */}
      <div className="input-box">
        <span>아이디(이메일)</span>
        <span>test123@test.com</span>
      </div>
      {/* 2. 비밀번호 변경(재발급) */}
      <div className="input-box">
        <span>비밀번호 변경</span>
        <BasicBtn>비밀번호 재발급</BasicBtn>
      </div>
      {/* 3. 프로필 이미지 변경 */}
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
      {/* 4. 닉네임 변경 */}
           <div className="input-box">
              <span>닉네임</span>
              <InputBox />
                <BasicBtn style={{ borderRadius: '0' }}>중복 확인</BasicBtn>
            </div>
      {/* 4. 창작자 여부 변경 */}
           <div className="input-box">
              <span>창작자 여부</span>
              <input type="checkbox" name="" id="" />
                <BasicBtn style={{ borderRadius: '0' }}>중복 확인</BasicBtn>
            </div>

      <SubmitBtn className="submit-btn" style={{ borderRadius: '0' }}>
      변경하기
      </SubmitBtn>
    </StyledForm>
  );
}

export default ProfileEditForm;
