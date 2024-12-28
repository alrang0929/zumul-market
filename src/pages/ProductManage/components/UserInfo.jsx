import React from 'react';
import { StyleButton } from '../../../styles/Button';

export const UserInfoWrap = () => {
  return (
    <>
      {/* 1. UserInfo-wrap */}
      <div className="userinfo-wrap">
        <div className="profile-img"></div>
        <div className="date-wrap"></div>
      </div>
      {/* 2. profile edit btn */}
      <StyleButton buttonType={'basic-main'}>프로필 수정하기</StyleButton>
      {/* 3. info list */}
      <div className="info-list-wrap"></div>
    </>
  );
};
