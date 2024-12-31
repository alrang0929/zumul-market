import React from 'react';
import { Button } from '../../../styles/StyleButton';
import useUserStore from '../../../stores/auth/useUserStore';
import { formatDate } from '../../../utils/formatDate';
import "./styles/user_info.scss";
import UserStatusCard from '../../../common/UserStatusList';
export const UserInfoWrap = () => {
  const user = useUserStore((state) => state.user);
  
  console.log('user', user);
  return (
    <>
      {/* 1. UserInfo-wrap */}
      <div className="userinfo-wrap">
        <div className="profile">

        <div className="profile-img">
          <img src="/images/img03.jpg" alt="프로필 이미지" />
        </div>
        <h3>{user.name}</h3>
        <div className="date-wrap">
          <span>쪼물마켓 가입: {formatDate(user.created_at)}</span>
          <span>{user.type === "creator"? "창작자 계정" : "일반 계정"}</span>
        </div>
      {/* 2. profile edit btn */}
      <Button buttontype={'basic-main'}>프로필 수정하기</Button>
        </div>
      {/* 3. info list */}
      <div className="info-list-wrap">
        <UserStatusCard/>
      </div>
      </div>
    </>
  );
};
