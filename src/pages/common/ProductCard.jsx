import React from 'react';
import { addComma } from '../../utils/commonFn';
import './style/product_card.scss';
import { productData } from './dummyDb';
export function ProductCard() {
  return (
    <>
      {productData.slice(0, 4).map((data, i) => (
        <div className="product-card" key={i}>
          <div className="img-box">
            <img src={data.isrc.thumb} alt="썸네일 이미지" />
          </div>
          <div className="info-wrap">
            <div className="user-name">
              <div className="profile-img">
                <img src={data.isrc.userImg} alt="프로필 이미지" />
              </div>
              <span>{data.name}</span>
            </div>
            <div className="title">{data.title}</div>
            <div className="docs">{data.docs}</div>
            <div className="price-box">
              <span>가격</span>
              <span className="price">{addComma(data.price)}</span>
              <span>p</span>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
