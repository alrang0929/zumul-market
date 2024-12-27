import React from 'react';
import ProfileEditForm from './components/ProfileEditForm';
import updateUserProfile from '../../utils/updateUserProfile';

function ProfileEditPage(props) {
  const handleProfileSubmit = async (data) => {
    console.log('Form Data to Submit:', data);

    const result = await updateUserProfile(data);

    if (result.success) {
      alert('프로필이 성공적으로 업데이트되었습니다!');
    } else {
      alert(`프로필 업데이트에 실패했습니다: ${result.error.message}`);
    }
  };
  return (
    <>
      <div className="profile-edit-page">
      </div>
    </>
  );
}

export default ProfileEditPage;
