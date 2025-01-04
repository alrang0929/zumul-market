import React from 'react';
import { FormBox, InputBox, SelectBox } from '../../../styles/box';
import { Button } from '../../../styles/StyleButton';
import './styles/product_edit_form.scss';

import { useForm, Controller } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { onSubmit } from '../../../api/product/addProduct';

import { useOptionHandler } from '../../../api/productOption/hook/useOptionHandler';
import { useStatusHandler } from '../../../api/product/hook/useStatusHandler';
import { useImageHandler } from '../../../utils/useImageHandler';

export const ProductEditForm = () => {
  const navigator = useNavigate();
  const { handleSubmit, setValue, control, register } = useForm({
    defaultValues: {
      title: '',
      category: 'handmade',
      sell_start: '',
      sell_end: '',
      stock: 0,
      price: 0,
      shipping_fee: 0,
      document: '',
      title_image: null,
      detail_image: null,
      sellStatus: false,
    },
  });

  const {
    options,
    optionName,
    setOptionName,
    addPrice,
    setAddPrice,
    stock,
    setStock,
    handleAddOption,
    handleRemoveOption,
  } = useOptionHandler();

  const { previewImage, fileInputRef, handleImageUpload, handleLinkClick } =
    useImageHandler(setValue);
  const { sellStatus, handleStatusChange } = useStatusHandler(setValue);

  return (
    <FormBox
      className="product-edit-form"
      onSubmit={handleSubmit((data) => {
        onSubmit(data, navigator, options), console.log(data);
        console.log(options);
      })}
    >
      <h3>상품 등록</h3>

      {/* 대표 이미지 */}
      <div className="input-wrap">
        <div className="text-box">
          <h6>대표 이미지</h6>
          <span>가로 1200px 이상</span>
        </div>

        <Link
          className="title-img"
          onClick={() => handleLinkClick('title_image')}
          aria-label="대표 이미지 업로드"
        >
          <img src={previewImage.title_image} alt="상세 이미지 미리보기" />
        </Link>
        <input
          type="file"
          ref={(el) => (fileInputRef.current.title_image = el)} // 상세 이미지 파일 입력 참조 저장
          style={{ display: 'none' }}
          onChange={(e) => handleImageUpload(e, 'title_image')}
        />
      </div>

      {/* 상품명 */}
      <div className="input-wrap">
        <div className="text-box">
          <h6>상품명</h6>
          <span>5자 이상 20자 이내</span>
        </div>
        <Controller
          name="title"
          control={control}
          rules={{
            required: '상품명을 입력해주세요',
            minLength: 5,
            maxLength: 20,
          }}
          render={({ field, fieldState }) => (
            <InputBox
              {...field}
              type="text"
              placeholder="상품명을 입력해주세요"
              className={fieldState.error ? 'error' : ''}
            />
          )}
        />
      </div>

      {/* 카테고리 */}
      <div className="input-wrap">
        <div className="text-box">
          <h6>카테고리</h6>
        </div>
        <SelectBox {...register('category')} className="SelectBox">
          <option value="handmade">수공예품</option>
          <option value="illustration">일러스트</option>
          <option value="video-music">영상/음원</option>
          <option value="etc">기타</option>
        </SelectBox>
      </div>

      {/* 판매기간 */}
      <div className="input-wrap">
        <div className="text-box">
          <h6>판매기간</h6>
        </div>
        <Controller
          name="sell_start"
          control={control}
          rules={{ required: '판매 시작 날짜를 입력해주세요' }}
          render={({ field }) => (
            <InputBox {...field} type="date" placeholder="판매 시작 날짜" />
          )}
        />
        <span style={{width: "fit-content"}}>~</span>
        <Controller
          name="sell_end"
          control={control}
          rules={{ required: '판매 종료 날짜를 입력해주세요' }}
          render={({ field }) => (
            <InputBox {...field} type="date" placeholder="판매 종료 날짜" />
          )}
        />
      </div>

      {/* 판매수량 */}
      <div className="input-wrap">
        <div className="text-box">
          <h6>판매수량</h6>
        </div>
        <Controller
          name="stock"
          control={control}
          render={({ field }) => (
            <InputBox {...field} type="number" placeholder="0" />
          )}
        />
      </div>

      {/* 상품 가격 */}
      <div className="input-wrap">
        <div className="text-box">
          <h6>상품 가격</h6>
        </div>
        <Controller
          name="price"
          control={control}
          render={({ field }) => (
            <InputBox {...field} type="number" placeholder="0" />
          )}
        />
      </div>

      {/* 배송비 */}
      <div className="input-wrap">
        <div className="text-box">
          <h6>배송비</h6>
        </div>
        <Controller
          name="shipping_fee"
          control={control}
          render={({ field }) => (
            <InputBox {...field} type="number" placeholder="0" />
          )}
        />
      </div>

      {/* 상품 판매 상태 */}
      <div className="input-wrap">
        <div className="text-box">
          <h6>상품 판매 상태</h6>
        </div>
        <input
          type="radio"
          value={true}
          checked={sellStatus === true}
          onChange={() => handleStatusChange(true)}
        />
        <label>판매중</label>
        <input
          type="radio"
          value={false}
          checked={sellStatus === false}
          onChange={() => handleStatusChange(false)}
        />
        <label>판매 종료/예정</label>
      </div>

      {/* 상세 설명 */}
      <div className="input-wrap">
        <div className="text-box">
          <h6>상세 설명</h6>
        </div>
        <Controller
          name="document"
          control={control}
          render={({ field }) => (
            <textarea
              {...field}
              cols={100}
              rows={10}
              className="discription"
              style={{ padding: '1rem' }}
            />
          )}
        />
      </div>

      <div className="input-wrap">
        <div className="text-box">
          <h6>상세 이미지</h6>
          <span>가로 900px 이하</span>
        </div>
        <Link
          className="detail-img"
          onClick={() => handleLinkClick('detail_image')}
          aria-label="대표 이미지 업로드"
        >
          <img src={previewImage.detail_image} alt="상세 이미지 미리보기" />
        </Link>
        <input
          type="file"
          ref={(el) => (fileInputRef.current.detail_image = el)} // 상세 이미지 파일 입력 참조 저장
          style={{ display: 'none' }}
          onChange={(e) => handleImageUpload(e, 'detail_image')}
        />
      </div>

      {/* 상품 옵션 */}
      <div className="input-wrap">
        <div className="text-box">
          <h6>상품 옵션</h6>
          <span>최대 10개 까지 추가 가능</span>
        </div>
        <div className="option-wrap">
          <div className="input-wrap">
            <InputBox
              type="text"
              value={optionName}
              onChange={(e) => setOptionName(e.target.value)}
              placeholder="옵션명을 입력하세요"
            />
            <span>옵션 금액</span>
            <InputBox
              className="option-number"
              type="number"
              value={addPrice}
              onChange={(e) => setAddPrice(parseInt(e.target.value, 10) || 0)}
              placeholder="옵션 금액"
            />
            <span>옵션 수량</span>
            <InputBox
              className="option-number"
              type="number"
              value={stock}
              onChange={(e) => setStock(parseInt(e.target.value, 10) || 0)}
              placeholder="0"
            />
            <Button
              buttontype="rectangleMain"
              onClick={(e) => {
                e.preventDefault();
                handleAddOption();
              }}
            >
              옵션 추가
            </Button>
          </div>
          {console.log(options)}
              <ul style={options.length == 0 ? {display:"none"} : {display:"block"}}>
                {options.map((option) => (
                  <li key={option.id}>
                    <span>{option.name}</span>
                    <span>{option.price}</span>
                    <span>{option.stock}</span>
                    <button
                      onClick={() => handleRemoveOption(option.id)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                      }}
                    >
                      <img src="/images/icon_delete.png" alt="삭제버튼" />
                    </button>
                  </li>
                ))}
              </ul>
        </div>
      </div>

      {/* 제출 버튼 */}
      <Button buttontype="submit">상품 등록하기</Button>
    </FormBox>
  );
};
