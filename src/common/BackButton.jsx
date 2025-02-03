import React from 'react';
import { Button } from '../styles/StyleButton';
import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigator = useNavigate();
  return (
      <Button buttontype={'iconButton'} onClick={()=> navigator(-1)}>
        <img src="/images/arrow_back.svg" alt="뒤로가기 버튼" />
      </Button>
  );
};
