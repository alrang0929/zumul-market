import React from 'react';
import { DivBox } from '../../styles/box';
import { UserInfoWrap } from './components/UserInfo';
import { CreatorInfoWrap } from './components/CreatorInfoWrap';
import { FanInfoWrap } from './components/FanInfoWrap';
import useUserStore from '../../stores/auth/useUserStore';

const COMPONENT_MAP = {
  creator: <CreatorInfoWrap />,
  fan: <FanInfoWrap />,
};

export const UserManagePage = () => {

  const user = useUserStore((state) => state.user);
  const Component = COMPONENT_MAP[user.type];
  // type 이 없는 경우 error 처리

  return (
    <>
      <div
        className="user-manage-page"
        style={{ backgroundColor: '#F5F5F5' }}
      >
        <UserInfoWrap />
        <DivBox>
          <Component />
        </DivBox>
      </div>
    </>
  );
};
