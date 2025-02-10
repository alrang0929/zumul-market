import { useState } from 'react';

export const useOptionHandler = () => {
  const [options, setOptions] = useState([]);
  const [optionName, setOptionName] = useState('');
  const [addPrice, setAddPrice] = useState(0);
  const [stock, setStock] = useState(0);

  // 옵션 추가 핸들러
  const handleAddOption = () => {
    if (options.length >= 10) {
      alert('최대 10개의 옵션만 추가할 수 있습니다.');
      return;
    }

    if (!optionName.trim()) {
      alert('옵션명을 입력해주세요.');
      return;
    }

    setOptions((prevOptions) => [
      ...prevOptions,
      { id: Date.now(), 
        name: optionName, 
        price: addPrice, stock
       },
    ]);

    setOptionName('');
    setAddPrice(0);
    setStock(0);
  };

  // 옵션 삭제 핸들러
  const handleRemoveOption = (id) => {
    setOptions((prevOptions) =>
      prevOptions.filter((option) => option.id !== id)
    );
  };

  return {
    options,
    optionName,
    setOptionName,
    addPrice,
    setAddPrice,
    stock,
    setStock,
    handleAddOption,
    handleRemoveOption,
  };
};
