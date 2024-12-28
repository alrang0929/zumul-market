import React from 'react';
import { StyleButton } from '../../styles/Button';
import { Link, useNavigate } from 'react-router-dom';
import './style/header.scss';
// icon
import { IoIosSearch } from 'react-icons/io';
import { IoCart, IoHeart } from 'react-icons/io5';
import useUserStore from '../../stores/auth/useUserStore';
import LogoutButton from './LogoutBtn';
function Header(props) {
  const user = useUserStore((state) => state.user);
  const nav = useNavigate();
  return (
    <header>
      {/* 1. 로고 h1 */}
      <div className="logo-box">
        <Link to="/">
          <h1>
            <img src="/images/logo_ZomulMarket.png" alt="쭈물마켓 로고" />
          </h1>
        </Link>
      </div>
      {/* 2. 검색바 */}
      <div className="search-bar">
        <IoIosSearch className="icon" />
        <input type="text" defaultValue={'제목, 작품명, 태그 검색'} />
      </div>

      {/* 3. icon 버튼(faivorit, cart) */}
      <div className="icon-menu-wrap">
        <StyleButton buttonType={"single-icon"}>
          <IoHeart className="icon" />
        </StyleButton>
        <StyleButton buttonType={"single-icon"}>
          <IoCart className="icon" />
        </StyleButton>
      </div>
      {/* 4. user 메뉴 로그인 전: 회원가입, 로그인 || 로그인(일반): 마이페이지, 로그아웃 || 로그인(판매자): 판매관리 추가*/}
      <div className="user-menu-wrap">
        

        {user ? (
          <LogoutButton/>
        ) : (
          <>
          <StyleButton buttonType={"basic-main"} linkPath={"/login"}>로그인</StyleButton>
          <StyleButton buttonType={"basic-main"} linkPath={"/signup"}>회원가입</StyleButton>
          </>
        )}
        {user?.type === 'creator' && (
         <StyleButton buttonType={"basic-main"} linkPath={`/user/${user.id}/product-setting`}>
         상품관리
       </StyleButton>
        )}
      </div>
    </header>
  );
}

export default Header;
