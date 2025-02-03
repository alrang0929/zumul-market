import React from 'react';
import { DivBox } from '../../styles/StyleBox';
import { UserInfoWrap } from './components/UserInfo';
import { CreatorInfoWrap } from './components/CreatorInfoWrap';
import { FanInfoWrap } from './components/FanInfoWrap';
import useUserStore from '../../stores/auth/useUserStore';

const COMPONENT_MAP = {
  creator: CreatorInfoWrap, // 컴포넌트 함수 자체를 저장
  fan: FanInfoWrap,
};

export const UserManagePage = () => {
  const user = useUserStore((state) => state.user);
  const Component = COMPONENT_MAP[user.type];

  return (
    <>
      <div className="user-manage-page" style={{ backgroundColor: '#F5F5F5' }}>
        <UserInfoWrap userdata = {user}/>
        <DivBox>
          <Component />
        </DivBox>
      </div>
    </>
  );
};
