import React from 'react';
import './style/categorieslist.scss';

// icon
import { MdEventAvailable } from 'react-icons/md';

import { BsAward } from 'react-icons/bs';
import { LuBrush } from 'react-icons/lu';
import { FaHandHoldingHeart } from 'react-icons/fa';
import { GrDocument } from 'react-icons/gr';
import { FaRegFaceGrinStars } from 'react-icons/fa6';

function CategoriesList(props) {
  return (
    <section className="categories-list-wrap">
      <button className="category">
        <MdEventAvailable className="icon" />
        <span>이달의 작가</span>
      </button>
      <button className="category">
        <BsAward className="icon" />
        <span>연말결산</span>
      </button>
      <button className="category">
        <LuBrush className="icon" />
        <span>예술 기획전</span>
      </button>
      <button className="category">
        <FaHandHoldingHeart className="icon" />
        <span>핸드메이드</span>
      </button>
      <button className="category">
        <GrDocument className="icon" />
        <span>리퀘스트</span>
      </button>
      <button className="category">
        <FaRegFaceGrinStars className="icon" />
        <span>이벤트</span>
      </button>
    </section>
  );
}

export default CategoriesList;
