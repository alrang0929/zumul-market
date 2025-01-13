import React, { useState, useEffect } from 'react';
import { SelectBox } from '../../../styles/box';
import { Button } from '../../../styles/StyleButton';
import './style/option_select.scss';
import { addComma } from '../../../utils/commonFn';
import { RiDeleteBinLine } from 'react-icons/ri';
import { HiMinusSmall, HiPlusSmall } from 'react-icons/hi2';

export const ProductOptions = ({ product, setValue }) => {
  const [selectedOption, setSelectedOption] = useState('');
  const [optionList, setOptionList] = useState([]);
  const [count, setCount] = useState(1); // 현재 상품의 수량

  const options = product.product_option;

  // 현재 상품 수량 증가
  const plusCount = () => setCount((prev) => prev + 1);

  // 현재 상품 수량 감소
  const minusCount = () => setCount((prev) => Math.max(1, prev - 1));

  // 옵션 수량 계산
  const calculateTotalPrice = () => {
    const basePrice = product.price * count; // 현재 상품 가격
    const optionsPrice = optionList.reduce((total, option) => {
      return total + option.add_cost.price * option.count;
    }, 0);
    return basePrice + optionsPrice;
  };

  // 선택된 옵션 추가
  const handleAddOption = (optionId) => {
    const selected = options.find((opt) => opt.id === optionId);
    if (selected && !optionList.find((opt) => opt.id === optionId)) {
      setOptionList((prev) => [...prev, { ...selected, count: 1 }]);
      setValue('product_option_id', optionId); // product_option_id 설정
    }
  };

  // 옵션 제거
  const handleRemoveOption = (optionId) => {
    setOptionList((prev) => prev.filter((item) => item.id !== optionId));
  };

  // 옵션 수량 변경
  const handleCountChange = (optionId, newCount) => {
    setOptionList((prev) =>
      prev.map((opt) =>
        opt.id === optionId ? { ...opt, count: Math.max(1, newCount) } : opt
      )
    );
  };

  // useEffect로 현재 상품과 옵션 데이터를 useForm에 전달
  useEffect(() => {
    if (optionList.length > 0) {
      setValue('product_option_id', optionList[0].id); // 첫 번째 옵션 ID 설정
    } else {
      setValue('product_option_id', null); // 옵션이 없으면 null
    }
  }, [optionList, setValue]);
  
  return (
    <>
      <SelectBox
        className="option-select"
        value={selectedOption}
        onChange={(e) => handleAddOption(e.target.value)}
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
              onChange={(e) => setCount(Number(e.target.value))}
            />
            <Button
              type="button"
              buttontype={'iconButton'}
              className="plus"
              onClick={plusCount}
            >
              <HiPlusSmall />
            </Button>
            <Button
              type="button"
              buttontype={'iconButton'}
              className="minus"
              onClick={minusCount}
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
            <div className="name">
              <span>{option.name}</span>
            </div>
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
              <RiDeleteBinLine />
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
