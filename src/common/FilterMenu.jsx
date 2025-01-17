import React, { useState } from 'react';
import './style/filter_menu.scss';

export const FilterMenu = ({menu, onFilterChange}) => {
  
  const [activeMenu, setActiveMenu] = useState(null);

  const clickHandler = (index) => {
    const newActive = activeMenu === index ? null : index;
    setActiveMenu(newActive);

    // 클릭된 값을 부모 컴포넌트로 전달
    if (onFilterChange) {
      const filterValue = newActive === null ? null : menu[newActive];
      onFilterChange(filterValue);
    }
  };

  return (
    <>
      <ul className="filter-menu-wrap">
        {menu.map((menu, index) => (
          <li key={menu}>
            <a
              className={'menu ' + (activeMenu == index ? 'active' : '')}
              onClick={() => clickHandler(index)}
            >
              {menu}
            </a>
            <span className="bullet">{index < menu.length - 2 && '·'}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
