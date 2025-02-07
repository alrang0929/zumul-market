import React from 'react';
import './style/categorieslist.scss';
import { DivBox } from '../../../styles/box';
import { Icon } from '../../../styles/IconSet';

const ICON_SIZE = '3.2rem';

export function CategoriesList(props) {
  return (
    <DivBox className="categories-list-wrap">
      <button className="category">
        <Icon name={'checkDate'} size={ICON_SIZE} className="icon" />
        <span>이달의 작가</span>
      </button>
      <button className="category">
        <Icon name={'award'} size={ICON_SIZE} className="icon" />
        <span>연말결산</span>
      </button>
      <button className="category">
        <Icon name={'brush'} size={ICON_SIZE} className="icon" />
        <span>예술 기획전</span>
      </button>
      <button className="category">
        <Icon name={'handmade'} size={ICON_SIZE} className="icon" />
        <span>핸드메이드</span>
      </button>
      <button className="category">
        <Icon name={'edit'}  size={ICON_SIZE}className="icon" />
        <span>리퀘스트</span>
      </button>
      <button className="category">
        <Icon name={'event'} size={ICON_SIZE} className="icon" />
        <span>이벤트</span>
      </button>
    </DivBox>
  );
}
