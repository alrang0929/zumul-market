import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// style
import { BasicBtn, SubmitBtn } from '../../../styles/Button';
import { InputBox } from '../../../styles/box';
import { StyledForm } from '../../../styles/form';
import './styles/profile_edit_form.scss';
import { uploadToProfileImg } from '../../../utils/uploadProfileImage';

export default function ProfileEditForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    defaultValues: {
      type: false,
    },
  });
  const isCreatorChecked = watch("type", false);
  const [uploading, setUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState('/images/empty_img.png'); // 미리보기 이미지 초기값

  const handleFormSubmit = (data) => {
    // 체크박스 상태에 따라 type 값을 설정
    const updatedData = {
      ...data,
      type: isCreatorChecked ? 'creator' : 'fan',
    };

    onSubmit(updatedData); // 부모 컴포넌트로 데이터 전달
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      try {
        setUploading(true);

        // Supabase Storage에 업로드
        const imageUrl = await uploadToProfileImg(file);
        setValue('profileImage', imageUrl, { shouldValidate: false }); // React Hook Form 데이터 업데이트
        setPreviewImage(imageUrl); // 미리보기 이미지 업데이트

        setUploading(false);
      } catch (error) {
        setUploading(false);
        console.error('Error uploading file to Supabase Storage:', error);
      }
    }
  };

  return (
    <StyledForm
      className="edit-profile-form"
      onSubmit={handleSubmit(handleFormSubmit)}
    >
      <h3>프로필 설정</h3>
      {/* 1. 이메일(변경 불가) */}
      <div className="input-box">
        <span>아이디(이메일)</span>
        <span>test123@test.com</span>
      </div>
      {/* 2. 비밀번호 변경(재발급) */}
      <div className="input-box">
        <span>비밀번호 변경</span>
        <BasicBtn style={{ borderRadius: '0' }}>비밀번호 재발급</BasicBtn>
      </div>
      {/* 3. 프로필 이미지 변경 */}
      <div className="profile-img-box">
        <div className="preview-img">
          <img src={previewImage} alt="프로필 이미지 미리보기" />
        </div>
        <div className="text-wrap">
          <input
            type="file"
            id="profile-img"
            accept="image/*"
            onChange={handleFileChange} // 파일 업로드 처리리
            style={{ display: 'none' }}
          />
          <BasicBtn style={{ borderRadius: '0' }}>
            <label
              htmlFor="profile-img"
              style={{ cursor: 'pointer' }}
              onClick={(e) => e.stopPropagation()}
            >
              {uploading ? '업로드중...' : '파일 선택'}
            </label>
          </BasicBtn>
          <span>
            JPG, GIF, PNG <br />
            권장 사이즈: 150px, 최대 250KB
          </span>
        </div>
      </div>
      {/* 4. 닉네임 변경 */}
      <div className="input-box">
        <span>닉네임</span>
        <InputBox
          type="text"
          {...register('name', { required: '닉네임 입력은 필수입니다다' })}
        />
        <BasicBtn style={{ borderRadius: '0' }}>중복 확인</BasicBtn>
        {errors.name && (
          <span style={{ color: 'red' }}>{errors.name.message}</span>
        )}
      </div>
      {/* 4. 창작자 여부 변경 */}
      <div className="input-box">
        <span>창작자 여부</span>
        <input type="checkbox" {...register('type')} />
      </div>

      <SubmitBtn className="submit-btn" style={{ borderRadius: '0' }}>
        변경하기
      </SubmitBtn>
    </StyledForm>
  );
}
