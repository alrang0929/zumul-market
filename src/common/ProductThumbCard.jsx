import React from 'react';
import './style/product_card.scss';
import { addComma } from '../utils/commonFn';
import { useProducts } from '../api/product/hook/useProducts';
import { ImageLoader } from '../utils/ImageLoder';
export function ProductThumbCard({discript}) {
  const {products} = useProducts();

  const productData = products;
  const PRODUCT_BUCKIT = 'product_img';
  const PROFILE_BUCKIT = 'profile_img';
  
  return (
    <>
      {productData.map((data, i) => (
        <div className="product-card" key={i}>
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
    </>
  );
}
