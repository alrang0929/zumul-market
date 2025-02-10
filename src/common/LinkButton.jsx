import React from 'react';
import Button from '../styles/StyleButton';
import { useNavigate } from 'react-router-dom';

export const AddButton = ({ text, linkText }) => {
  const navigator = useNavigate();
  return (
    <Button
      buttonStyles={'rectangleMain'}
      onClick={() => navigator(`/${linkText}`)}
    >
      {text}
    </Button>
  );
};
