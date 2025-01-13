import React from 'react';
import './styles/purchase_goods_info.scss';
import SubTitle from '../../../../common/SubTitle';
import { useLocation } from 'react-router-dom';

export const PurchasedGoodsInfo = () => {
  const { state } = useLocation();
  const { purchaseData } = state || {};
  console.log("purchaseData", purchaseData);
  return (
    <div className="purchase-goods-wrap">
      {/* 주문상품 타이틀 */}
      <SubTitle subTitle={'주문상품'} />
      {/* 주문상품 리스트 */}
      <Form>
        <ul>
          {purchaseData.map((item, index)=>
          <li key = {index}>
            <input type='checkbox' />
            {/* 상품정보 집합 */}
            <div className="goods-info-wrap">
              {/* 이미지 박스 */}
              <div className="img-box">
                
              </div>
              {/* 상품 정보 */}
              {/* 옵션 정보 */}
              {/* 상품 전체 금액 */}
              {/* 배송비 */}
            </div>
          </li>
          )}
        </ul>
      </Form>
      {/* 선택항목 삭제 */}
    </div>
  );
};
