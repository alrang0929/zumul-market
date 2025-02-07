import React from 'react';
import { SelectBox } from '../../../styles/box';
import { Button } from '../../../styles/StyleButton';
import './style/option_select.scss';
import { addComma } from '../../../utils/commonFn';
import { Icon } from '../../../styles/IconSet';

export const ProductOptions = ({ product, setValue, watch }) => {
  const selectedOption = watch('selectedOption', '');
  const optionList = watch('optionList', []);
  const count = watch('count', 1);

  const options = product.product_option;

  const plusCount = () => setValue('count', count + 1);
  const minusCount = () => setValue('count', Math.max(1, count - 1));

  const calculateTotalPrice = () => {
    const basePrice = product.price * count;
    const optionsPrice = optionList.reduce(
      (total, option) => total + option.add_cost.price * option.count,
      0
    );
    return basePrice + optionsPrice;
  };

  const handleAddOption = (optionId) => {
    const currentOptions = watch('optionList', []); // 여기서 currentOptions를 선언
    const selected = options.find((opt) => opt.id === optionId);
  
    if (selected && !currentOptions.find((opt) => opt.id === optionId)) {
      const updatedOptions = [...currentOptions, { ...selected, count: 1 }];
      console.log('OptionList after update:', updatedOptions); // 변경된 옵션 리스트 확인
      setValue('optionList', updatedOptions);
    }
  };

  const handleRemoveOption = (optionId) => {
    const currentOptions = watch('optionList', []);
    const updatedOptions = currentOptions.filter(
      (item) => item.id !== optionId
    );
    setValue('optionList', updatedOptions);
  };

  const handleCountChange = (optionId, newCount) => {
    const currentOptions = watch('optionList', []);
    const updatedOptions = currentOptions.map((opt) =>
      opt.id === optionId ? { ...opt, count: Math.max(1, newCount) } : opt
    );
    setValue('optionList', updatedOptions);
  };

  return (
    <>
      <SelectBox
        className="option-select"
        value={selectedOption}
        onChange={(e) => {
          console.log('Selected option value:', e.target.value);
          handleAddOption(e.target.value);
        }}
      >
        <option value="" disabled>
          옵션 선택
        </option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name} (추가 비용: {addComma(option.add_cost.price)}원)
          </option>
        ))}
      </SelectBox>

      <ul className="option-wrap">
        <li>
          <div className="name">{product.title}</div>
          <div className="quantity">
            <input
              type="number"
              value={count}
              onChange={(e) =>
                setValue('count', Math.max(1, Number(e.target.value)))
              }
            />
            <Button
              type="button"
              buttontype={'iconButton'}
              className="plus"
              onClick={plusCount}
            >
              <Icon name={'plus'} />
            </Button>
            <Button
              type="button"
              buttontype={'iconButton'}
              className="minus"
              onClick={minusCount}
            >
              <Icon name={'minus'} />
            </Button>
          </div>
          <div className="price-wrap">
            <span className="price">{addComma(product.price * count)}</span>
            <span>원</span>
          </div>
        </li>
        {optionList.map((option) => (
          <li key={option.id}>
            <div className="name">
              <span>{option.name}</span>
            </div>
            <div className="quantity">
              <input
                type="number"
                value={option.count}
                onChange={(e) =>
                  handleCountChange(option.id, Number(e.target.value))
                }
              />
              <Button
                type="button"
                buttontype={'iconButton'}
                className="plus"
                onClick={() => handleCountChange(option.id, option.count + 1)}
              >
                <Icon name={'plus'} />
              </Button>
              <Button
                type="button"
                buttontype={'iconButton'}
                className="minus"
                onClick={() => handleCountChange(option.id, option.count - 1)}
              >
                <Icon name={'minus'} />
              </Button>
            </div>
            <div className="price-wrap">
              <span className="price">
                {addComma(option.add_cost.price * option.count)}
              </span>
              <span>원</span>
            </div>
            <Button
              type="button"
              buttontype={'iconButton'}
              onClick={() => handleRemoveOption(option.id)}
            >
              <Icon name={'delete'} />
            </Button>
          </li>
        ))}
      </ul>
      <div className="total-price">
        <span>총 가격</span>
        <div className="price-wrap">
          <span className="price">{addComma(calculateTotalPrice())}</span>
          <span>원</span>
        </div>
      </div>
    </>
  );
};

export default ProductOptions;
