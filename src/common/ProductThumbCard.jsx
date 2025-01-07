import React from 'react';
import './style/product_card.scss';
import { addComma } from '../utils/commonFn';
import { ImageLoader } from '../utils/ImageLoder';
import { useNavigate } from 'react-router-dom';

export function ProductThumbCard({ selectdata, slice, slicecount }) {
  console.log(selectdata);
  const SELECT_DATA = selectdata;
  const PRODUCT_BUCKIT = 'product_img';
  const PROFILE_BUCKIT = 'profile_img';

  const navigator = useNavigate();

  const handleCardClick = (product) => {
    navigator(`/product/${product.id}`, { state: { product } }); // 상품 정보 전달
  };

  return (
    <>
      {slice ? (
        <div className="product-card-wrap">
          {SELECT_DATA.slice(0, slicecount).map((data, index) => (
            <div
              className="product-card"
              key={index}
              onClick={() => handleCardClick(data)}
            >
              <div className="img-box">
                <ImageLoader
                  imagePath={data.title_image}
                  buckit={PRODUCT_BUCKIT}
                  altText={data.title + '썸네일'}
                />
              </div>
              <div className="info-wrap">
                <div className="user-name">
                  <div className="profile-img">
                    <ImageLoader
                      imagePath={data.users.profile_image}
                      buckit={PROFILE_BUCKIT}
                      altText={data.users.name + '썸네일'}
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
            </div>
          ))}
        </div>
      ) : (
        <div className="product-card-wrap">
          {SELECT_DATA.map((data, index) => (
            <div
              className="product-card"
              key={index}
              onClick={() => handleCardClick(data)}
            >
              <div className="img-box">
                <ImageLoader
                  imagePath={data.title_image}
                  buckit={PRODUCT_BUCKIT}
                  altText={data.title + '썸네일'}
                />
              </div>
              <div className="info-wrap">
                <div className="user-name">
                  <div className="profile-img">
                    <ImageLoader
                      imagePath={data.users.profile_image}
                      buckit={PROFILE_BUCKIT}
                      altText={data.users.name + '썸네일'}
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
            </div>
          ))}
        </div>
      )}
    </>
  );
}
