import React from 'react';
import './style/product_card.scss';
import { addComma } from '../utils/commonFn';
import { useNavigate } from 'react-router-dom';

export function ProductThumbCard({ selectdata, slice, slicecount, selectFilter }) {
  
  const navigator = useNavigate();

  const handleCardClick = (product) => {
    navigator(`/product/${product.id}`, { state: { product } }); // 상품 정보 전달
  };

  const SELECT_DATA = [...selectdata].sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );

  if (selectFilter === '낮은 가격순') {
    SELECT_DATA.sort((a, b) => a.price - b.price);
  } else if (selectFilter === '높은 가격순') {
    SELECT_DATA.sort((a, b) => b.price - a.price);
  } else if (selectFilter === '신상품순') {
    SELECT_DATA.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  }

  return (
    <>
      {slice ? (
        <ul className="product-card-wrap">
          {SELECT_DATA.slice(0, slicecount).map((data, index) => (
            <li
              className="product-card"
              key={index}
              onClick={() => handleCardClick(data)}
            >
              <div className="img-box">
                <img src={data.title_image} alt={data.title + '썸네일'} />
              </div>
              <div className="info-wrap">
                <div className="user-name">
                  <div className="profile-img">
                    <img
                      src={data.users.profile_image}
                      alt={data.users.name + '썸네일'}
                    />
                  </div>
                  <span>{data.users.name}</span>
                </div>
                <div className="title">{data.title}</div>
                <div className="docs">{data.docs}</div>
                <div className="price-box">
                  <span>가격</span>
                  <span className="price">{addComma(data.price)}</span>
                  <span>p</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="product-card-wrap">
          {SELECT_DATA.map((data, index) => (
            <li
              className="product-card"
              key={index}
              onClick={() => handleCardClick(data)}
            >
              <div className="img-box">
                <img src={data.title_image} alt={data.title + '썸네일'} />
              </div>
              <div className="info-wrap">
                <div className="user-name">
                  <div className="profile-img">
                    <img
                      src={data.users.profile_image}
                      alt={data.users.name + '썸네일'}
                    />
                  </div>
                  <span>{data.users.name}</span>
                </div>
                <div className="title">{data.title}</div>
                <div className="docs">{data.docs}</div>
                <div className="price-box">
                  <span>가격</span>
                  <span className="price">{addComma(data.price)}</span>
                  <span>p</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
