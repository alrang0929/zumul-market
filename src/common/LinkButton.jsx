import React from 'react';
import Button from '../styles/StyleButton';
import { useNavigate } from 'react-router-dom';

export const AddButton = ({ text, linkText }) => {
  const navigater = useNavigate();
  return (
    <Button
      buttonStyles={'rectangleMain'}
      onClick={() => navigater(`/${linkText}`)}
    >
      {text}
    </Button>
  );
};
