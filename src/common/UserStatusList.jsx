import React from 'react'
import { ProfileStatusDb } from './dummyDb'
import "./style/user_status_list.scss";
const UserStatusCard = () => {
    const data = ProfileStatusDb;
  return (
    <ul className="user-status-list">

    {data.map((item, i)=>
    <li key={i}>
      <div className="icon-box">
        <img src={item.icon} alt="상품 아이콘" />
      </div>
      <div className="text-wrap">
        <span className='title'>{item.title}</span>
        <span className='count'>{item.count}</span>
      </div>
    </li>
  )}
  </ul>
    
  )
}

export default UserStatusCard