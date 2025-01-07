import React, { useState } from 'react';
import './style/filter_menu.scss';
export const FilterMenu = () => {
  const menuArray = ['낮은 가격순', '높은 가격순', '신상품순'];
  const [activeMenu, setActiveMenu] = useState(null);
  const clickHandler = (index)=>{
    setActiveMenu(activeMenu === index ? null : index);
  };
  return (
    <>
      <ul className="filter-menu-wrap">
        {menuArray.map((menu, index) => (
          <li key={menu}>
            <a className={'menu ' + (activeMenu == index ? 'active': '')}
            onClick={()=>clickHandler(index)}
            >{menu}</a>
            <span className="bullet">{index < menu.length - 2 && '·'}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
