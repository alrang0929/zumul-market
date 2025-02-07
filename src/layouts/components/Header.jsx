import React from 'react';
import { Button } from '../../styles/StyleButton';
import { Link, useNavigate } from 'react-router-dom';
import './style/header.scss';
// icon
import useUserStore from '../../stores/auth/useUserStore';
import LogoutButton from './LogoutBtn';
import { useCartStore } from '../../stores/cart/useCartStore';
import { Icon } from '../../styles/IconSet';

const COLOR = '#1F17FF';

function Header(props) {
  const { toggleCart } = useCartStore();
  const user = useUserStore((state) => state.user);
  const navigator = useNavigate();

  const handleButtonClick = (callback) => {
    if (!user) {
      alert('로그인이 필요한 서비스입니다.');
      console.log('toggleCart 실행 전');
      navigator('/login');
      return;
    }
    callback?.();
  };

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
        <Icon name={'search'} className="icon" />
        <input type="text" defaultValue={'제목, 작품명, 태그 검색'} />
      </div>

      {/* 3. icon 버튼(faivorit, cart) */}
      <div className="icon-menu-wrap">
        <Button buttontype={'singleIcon'}>
          <Icon name={'favorite'} color={COLOR} className="icon" />
        </Button>

        <Button
          buttontype={'singleIcon'}
          onClick={() => handleButtonClick(toggleCart)}
        >
          <Icon name={'cart'} color={COLOR} className="icon" />
        </Button>
      </div>
      {/* 4. user 메뉴 로그인 전: 회원가입, 로그인 || 로그인(일반): 마이페이지, 로그아웃 || 로그인(판매자): 판매관리 추가*/}
      <div className="user-menu-wrap">
        {user?.type === 'creator' && (
          <Button
            buttontype={'basicMain'}
            onClick={() => navigator(`/user/manage`)}
          >
            상품관리
          </Button>
        )}
        {user ? (
          <LogoutButton />
        ) : (
          <>
            <Button
              buttontype={'basic-main'}
              onClick={() => navigator('/login')}
            >
              로그인
            </Button>
            <Button
              buttontype={'basic-main'}
              onClick={() => navigator('/signup')}
            >
              회원가입
            </Button>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
