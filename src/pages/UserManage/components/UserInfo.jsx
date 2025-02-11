import React, { useEffect, useState } from 'react';
import { Button } from '../../../styles/StyleButton';
import { formatDate } from '../../../utils/formatDate';
import './styles/user_info.scss';
import { useNavigate } from 'react-router-dom';
import {UserStatusCard} from './UserStatusCard';

export const UserInfoWrap = ({user}) => {
  
  const navigator = useNavigate();
  return (
    <div className="userinfo-wrap">
      <div className="profile">
        <div className="profile-img">
          <img src={user.profile_image} alt={'프로필 이미지'} />
        </div>
        <h3>{user.name}</h3>
        <div className="date-wrap">
          <span>쪼물마켓 가입: {formatDate(user.created_at)}</span>
          <span>{user.type === 'creator' ? '창작자 계정' : '일반 계정'}</span>
        </div>
        <div className="button-wrap" style={{ display: 'flex', gap: '2rem' }}>
          <Button buttontype="basic-main">프로필 수정하기</Button>
          <Button
            buttontype="basic-main"
            style={{ backgroundColor: '#FF7817' }}
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
