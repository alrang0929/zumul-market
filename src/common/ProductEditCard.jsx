import React from 'react';
// import { ProductEditDb } from './dummyDb';
import StateBox from './StateBox';
import './style/product_edit_card.scss';
import { addComma } from '../utils/commonFn';
import { DeleteButton } from './DeleteButton';
import { EditButton } from './EditButton';

const ProductEditCard = ({data, linktext}) => {
  // const data = ProductEditDb;
  const STATUS_TEXT = { TURE: '판매중', FALSE: '판매종료/예정정' };
  return (
    <>
      <ul className="product-edit-list">
        {data.map((item, i) => (
          <li key={i} className="product-edit-card">
            <div className="img-box">
              <img src={item.image_url} alt={item.title + '썸네일'} />
            </div>
            <div className="info-wrap">
              <div className="status-box">
                <div className="status-wrap">
                  <StateBox
                    status={item.sell_status}
                    truetext={STATUS_TEXT.TURE}
                    falsetext={STATUS_TEXT.FALSE}
                  />
                  <div className="sell-date">
                    <span className="topic">판매기간</span>
                    <span>{item.sall_start}</span>
                    <span>~</span>
                    <span>{item.sall_end}</span>
                  </div>
                </div>
                <div className="button-wrap">
                  <EditButton linktext={linktext}/>
                  <DeleteButton />
                </div>
              </div>
              <div className="desc-wrap">
                <h3>{item.title}</h3>
              </div>
              <div className="price-wrap">
                <span className="topic">판매금액</span>
                <span className="price">{addComma(item.price)}</span>
                <span className="price-unit">P</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ProductEditCard;
