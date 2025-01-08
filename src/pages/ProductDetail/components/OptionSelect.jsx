import React, { useState, useEffect } from 'react';
import { SelectBox } from '../../../styles/box';
import { Button } from '../../../styles/StyleButton';
import './style/option_select.scss';
import { addComma } from '../../../utils/commonFn';
import { RiDeleteBinLine } from 'react-icons/ri';
import { HiMinusSmall, HiPlusSmall } from 'react-icons/hi2';

export const ProductOptions = ({ product, setValue }) => {
  console.log('optionpabe product', product);

  const [selectedOption, setSelectedOption] = useState('');
  const [optionList, setOptionList] = useState([]);
  const [count, setCount] = useState(1);

  const options = product.product_option;

  const plusCount = () => {
    setCount(count + 1);
  };
  const minusCount = () => {
    setCount(count - 1);
  };

  const calculateTotalPrice = () => {
    const basePrice = product.price * count;
    const optionsPrice = optionList.reduce((total, option) => {
      return total + option.add_cost.price * option.count; // 이미 계산된 값을 활용
    }, 0);
    return basePrice + optionsPrice;
  };

  useEffect(() => {
    setValue('totalPrice', calculateTotalPrice());
  }, [count, optionList, setValue]);

  const handleAddOption = (optionId) => {
    const selected = options.find((opt) => opt.id === optionId);
    if (selected && !optionList.find((opt) => opt.id === optionId)) {
      setOptionList((prev) => [...prev, { ...selected, count: 1 }]); // count 초기값 1로 설정
    }
  };

  const handleRemoveOption = (optionId) => {
    setOptionList((prev) => prev.filter((item) => item.id !== optionId));
  };

  const handleCountChange = (optionId, newCount) => {
    setOptionList((prev) =>
      prev.map((opt) =>
        opt.id === optionId ? { ...opt, count: Math.max(1, newCount) } : opt
      )
    );
  };

  return (
    <>
      <SelectBox
        className="option-select"
        value={selectedOption}
        onChange={(e) => {
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
            <input type="number" value={count} />
            <Button
              type="button"
              buttontype={'iconButton'}
              className="plus"
              onClick={(e) => plusCount(e.target.value)}
            >
              <HiPlusSmall />
            </Button>
            <Button
              type="button"
              buttontype={'iconButton'}
              className="minus"
              onClick={(e) => minusCount(e.target.value)}
            >
              <HiMinusSmall />
            </Button>
          </div>
          <div className="price-wrap">
            <span className="price">{addComma(product.price * count)}</span>
            <span>원</span>
          </div>
        </li>
        {optionList.map((option) => (
          <li key={option.id}>
            {/* 옵션명 */}
            <div className="name">
              <span>{option.name}</span>
            </div>
            {/* 수량 */}
            <div className="quantity">
              <input
                type="number"
                value={option.count}
                onChange={(e) =>
                  handleCountChange(option.id, parseInt(e.target.value, 10))
                }
              />
              <Button
                type="button"
                buttontype={'iconButton'}
                className="plus"
                onClick={() => handleCountChange(option.id, option.count + 1)}
              >
                <HiPlusSmall />
              </Button>
              <Button
                type="button"
                buttontype={'iconButton'}
                className="minus"
                onClick={() => handleCountChange(option.id, option.count - 1)}
              >
                <HiMinusSmall />
              </Button>
              {/* 옵션 가격 */}
            </div>
            <div className="price-wrap">
              <span className="price">
                {addComma(option.add_cost.price * option.count)}
              </span>
              <span>원</span>
            </div>
            <Button
              type="button" // 기본 동작 방지
              buttontype={'iconButton'}
              onClick={() => handleRemoveOption(option.id)}
            >
              <RiDeleteBinLine />
            </Button>
          </li>
        ))}
      </ul>
        <div className="total-price">
          <span>총 가격</span>
          <div className="price-wrap">
            <span className='price'>{addComma(calculateTotalPrice())}</span>
            <span>원</span>
          </div>

        </div>
    </>
  );
};

export default ProductOptions;