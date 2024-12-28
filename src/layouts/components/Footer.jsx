import React from 'react';
import './style/footer.scss';
function Footer(props) {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-company-info">
            <h4>
              <img src="/images/logo_w_ZomulMarket.png" alt="주물마켓 로고" />
            </h4>
            <p>대표: 홍길동 | 사업자등록번호: 123-45-67890</p>
            <p>주소: 서울특별시 중구 주물로 123, 주물빌딩 5층</p>
            <p>전화: 02-1234-5678 | 이메일: support@jumulmarket.com</p>
          </div>

          <div className="footer-customer-service">
            <h5>고객센터</h5>
            <p>운영시간: 월~금 09:00 ~ 18:00 (주말/공휴일 휴무)</p>
            <p>전화: 02-1234-5678</p>
            <p>이메일: help@jumulmarket.com</p>
          </div>

          <div className="footer-policy">
            <p>
              <a href="/terms">이용약관</a> |
              <a href="/privacy">개인정보 처리방침</a>
            </p>
            <p>&copy; 2024 주물마켓. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
