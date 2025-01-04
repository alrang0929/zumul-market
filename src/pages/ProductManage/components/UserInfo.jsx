import React from 'react';
import { Button } from '../../../styles/StyleButton';
import { formatDate } from '../../../utils/formatDate';
import "./styles/user_info.scss";
import UserStatusCard from '../../../common/UserStatusList';
import { useNavigate } from 'react-router-dom';
import { useUserQuery } from '../../../api/auth/api';

export const UserInfoWrap = () => {
  const { data: user, isLoading, isError } = useUserQuery();
  const navigator = useNavigate();

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (isError || !user) {
    return <div>유저 정보를 불러오는 데 실패했습니다.</div>;
  }

  return (
    <div className="userinfo-wrap">
      <div className="profile">
        <div className="profile-img">
          <img src="/images/img03.jpg" alt="프로필 이미지" />
        </div>
        <h3>{user.name}</h3>
        <div className="date-wrap">
          <span>쪼물마켓 가입: {formatDate(user.created_at)}</span>
          <span>{user.type === "creator" ? "창작자 계정" : "일반 계정"}</span>
        </div>
        <div className="button-wrap" style={{ display: "flex", gap: "2rem" }}>
          <Button buttontype="basic-main">프로필 수정하기</Button>
          <Button
            buttontype="basic-main"
            style={{ backgroundColor: "#FF7817" }}
            onClick={() => navigator(`/product/${user.id}/edit`)}
          >
            상품 추가하기
          </Button>
        </div>
      </div>
      <div className="info-list-wrap">
        <UserStatusCard />
      </div>
    </div>
  );
};
