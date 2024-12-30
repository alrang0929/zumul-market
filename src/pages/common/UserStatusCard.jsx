import React from 'react'
import { UserStatusDb } from './dummyDb'
const UserStatusCard = () => {
    const data = UserStatusDb;
  return (
    {data.map((item, i)=>
    
    )}
    
  )
}

export default UserStatusCard