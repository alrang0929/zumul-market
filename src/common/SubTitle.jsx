import React from 'react';
import './style/sub_title.scss';
function SubTitle({ subTitle, linkText }) {
  return (
    <div className="sub-title-wrap">
      <span className="sub-title">{subTitle}</span>
      <a href="">{linkText}</a>
    </div>
  );
}

export default SubTitle;
