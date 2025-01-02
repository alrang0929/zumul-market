import React, { useEffect, useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { FormBox, InputBox, SelectBox } from '../../../styles/box';
import { Button } from '../../../styles/StyleButton';
import './styles/product_edit_form.scss';
import { Link, useNavigate } from 'react-router-dom';
import { onSubmit } from '../../../api/product/addProduct';
import {
  handleInputChange,
  useOptionManagement,
} from '../../../api/productOption/hook/useOptionManagement';

export const ProductEditForm = () => {
  const navigator = useNavigate();
  const [sellStatus, setSellStatus] = useState(false);
  const [optionName, setOptionName] = useState('');
  const [addPrice, setAddPrice] = useState(0);
  const [stock, setStock] = useState(0);

  const productId = '3b76a969-42d0-4e99-a1d5-70774905e6f3';

  const { options, isLoading, handleAddOption, handleRemoveOption } =
    useOptionManagement(productId);

  const { handleSubmit, control, register, setValue } = useForm({
    defaultValues: {
      title: '',
      category: 'handmade',
      sell_start: '',
      sell_end: '',
      stock: 0,
      price: 0,
      shipping_fee: 0,
      document: '',
      options: '',
      title_image: null,
      detail_image: null,
      sellStatus: false,
    },
  });
  const [previewImage, setPreviewImage] = useState({
    title_image: '/images/wide_empty_img.png',
    detail_image: '/images/empty_img.png',
  });

  const fileInputRef = useRef({ title_image: null, detail_image: null }); //파일 입력요소 참조

  const handleImageUpload = (e, type) => {
    const file = e.target.files?.[0];
    if (!file) {
      console.error('파일이 선택되지 않았습니다.');
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    if (type === 'title_image') {
      setValue('title_image', file); // React Hook Form에 저장
      setPreviewImage((prev) => ({ ...prev, title_image: imageUrl })); // 대표 이미지 업데이트
    } else if (type === 'detail_image') {
      setValue('detail_image', file); // React Hook Form에 저장
      setPreviewImage((prev) => ({ ...prev, detail_image: imageUrl })); // 상세 이미지 업데이트
    }
  };

  const handleLinkClick = (e, type) => {
    e.preventDefault();
    if (fileInputRef.current[type]) {
      fileInputRef.current[type].click(); // 해당 파일 입력 요소 클릭
    }
  };

  const handleStatusChange = (status) => {
    setSellStatus(status);
    setValue('sellStatus', status); // react-hook-form 상태 값도 동기화
  };

  useEffect(() => {
    return () => {
      URL.revokeObjectURL(previewImage.title_image);
      URL.revokeObjectURL(previewImage.detail_image);
    };
  }, [previewImage]);

  return (
    <FormBox
      className="product-edit-form"
      onSubmit={handleSubmit((data) => onSubmit(data, navigator))}
    >
      <h3>상품 등록</h3>

      {/* 대표 이미지 */}
      <div className="input-wrap">
        <div className="text-box">
          <h6>대표 이미지</h6>
          <span>1200x420px</span>
        </div>
        <Link
          className="title-img"
          onClick={(e) => handleLinkClick(e, 'title_image')}
          aria-label="대표 이미지 업로드"
        >
          <img src={previewImage.title_image} alt="이미지 업로드" />
        </Link>
        <input
          type="file"
          ref={(el) => {
            fileInputRef.current.title_image = el;
          }}
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
            <InputBox {...field} type="date" placeholder="0000-00-00" />
          )}
        />
        <span>~</span>
        <Controller
          name="sell_end"
          control={control}
          rules={{ required: '판매 종료 날짜를 입력해주세요' }}
          render={({ field }) => (
            <InputBox {...field} type="date" placeholder="0000-00-00" />
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
          {...register('sellStatus', { required: '판매 상태를 선택해주세요.' })}
          value={true}
          name="sellStatus"
          checked={sellStatus === true}
          onChange={() => handleStatusChange(true)}
        />
        <label>판매중</label>
        <input
          type="radio"
          {...register('sellStatus', { required: '판매 상태를 선택해주세요.' })}
          value={false}
          name="sellStatus"
          checked={sellStatus === false}
          onChange={() => handleStatusChange(false)}
        />

        <label>판매종료/예정</label>
      </div>

      {/* 상세 설명 */}
      <div className="input-wrap">
        <div className="text-box">
          <h6>상세 설명</h6>
        </div>
        <Controller
          name="document"
          control={control}
          render={({ field }) => <InputBox {...field} type="text" />}
        />
      </div>
      <div className="input-wrap">
        <div className="text-box">
          <h6>상세 이미지</h6>
          <span>가로 900px 이하</span>
        </div>
        <Link
          className="detail-img"
          onClick={(e) => handleLinkClick(e, 'detail_image')}
          aria-label="대표 이미지 업로드"
        >
          <img src={previewImage.detail_image} alt="상세 이미지 업로드" />
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
        <div className="input-wrap">
          <InputBox
            type="text"
            value={optionName}
            onChange={(e) => setOptionName(e.target.value)}
            placeholder="옵션명을 입력하세요"
          />
          <Controller
            name="add_price"
            control={control}
            render={({ field }) => (
              <>
                <span>옵션 금액</span>
                <InputBox {...field} type="number" placeholder="0" value={addPrice} onChange={(e)=>setAddPrice(e.target.value)}/>
              </>
            )}
          />
          <Controller
            name="stock"
            control={control}
            render={({ field }) => (
              <>
                <span>옵션 수량</span>
                <InputBox {...field} type="number" placeholder="0" value={stock} onChange={(e)=>setStock(e.target.value)}/>
              </>
            )}
          />
        </div>
        <Button
          onClick={(e) => {
            e.preventDefault();

            handleAddOption({
              name: optionName,
              add_price: addPrice,
              stock: stock,
            });

            setOptionName('');
            setAddPrice(0);
            setStock(0);
          }}
        >
          옵션 추가
        </Button>
        <ul>
          {options?.map((option) => (
            <li key={option.id}>
              <span>{option.name}</span>
              <span>{option.add_price}</span>
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

      {/* 제출 버튼 */}
      <Button buttontype="submit">상품 등록하기</Button>
    </FormBox>
  );
};
