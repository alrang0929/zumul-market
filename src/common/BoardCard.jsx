import React from 'react';
import './style/board_card.scss';
import { Icon } from '../styles/IconSet';
function BoardCard({ selelcdata, slice, slicecount }) {
  const SELECT_DATA = selelcdata;

  return (
    <>
      {slice ? (
        <div className="board-card-wrap">
          {SELECT_DATA.slice(0, slicecount).map((data, i) => (
            <div className="board-card" key={i}>
              <div className="title">{data.title}</div>
              <div className="docs">{data.docs}</div>
              <div className="info-wrap">
                <div className="price-box">
                  <span>₩</span>
                  <span>가능금액</span>
                  <span>{data.price}</span>
                  <span>p</span>
                </div>
                <div className="time-box">
                  <Icon name={'time'} />
                  <span>작업 기간</span>
                  <span>{data.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="board-card-wrap">
          {SELECT_DATA.map((data, i) => (
            <div className="board-card" key={i}>
              <div className="title">{data.title}</div>
              <div className="docs">{data.docs}</div>
              <div className="info-wrap">
                <div className="price-box">
                  <span>₩</span>
                  <span>가능금액</span>
                  <span>{data.price}</span>
                  <span>p</span>
                </div>
                <div className="time-box">
                  <IoTimeOutline />
                  <span>작업 기간</span>
                  <span>{data.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default BoardCard;
