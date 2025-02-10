import React from 'react';
import './style/sub_title.scss';
import { Link } from 'react-router-dom';
function SubTitle({ subTitle, linkText, link }) {
  return (
    <div className="sub-title-wrap">
      <span className="sub-title">{subTitle}</span>
      <Link to ={link}>{linkText}</Link>
    </div>
  );
}

export default SubTitle;
