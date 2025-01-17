import React from 'react';
import './style/sub_title.scss';
import { Link } from 'react-router-dom';
export function CountSubTitle({ selectdata, subTitle, linkText, link }) {
  const SELECT_DATA_CNT = [...selectdata].filter((item) => item.sell_status === "true" || item.sell_status === "True").length;
  return (
    <div className="sub-title-wrap">
      <span className="count">{SELECT_DATA_CNT}</span>
      <span className="sub-title">{subTitle}</span>
      <Link to={link}>{linkText}</Link>
    </div>
  );
}
