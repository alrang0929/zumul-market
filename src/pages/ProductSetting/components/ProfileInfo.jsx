import React from 'react';
import './styles/profile-info.scss';
const ProfileInfo = () => {
  return (
    <section className="profile-info">
      <div className="profile">
        <div className="profile-img"></div>
        <span className="user-name"></span>
        <div className="user-info">
          <div className="create-at">
            <span>쪼물마켓 가입:</span>
            <span>date</span>
          </div>
          <span className='user-type'>type</span>
        </div>
      </div>
      <div className="user-status-list">
      </div>
    </section>
  );
};

export default ProfileInfo;
