import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export const EditButton = ({linktext}) => {
  const navigation = useNavigate();
  return (
    <Link 
    to={`/${linktext}`}
    >
      <img src="/images/icon_edit.png" alt="편집 아이콘" />
    </Link>
  );
};
