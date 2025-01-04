import { useState, useRef, useEffect } from 'react';

export const useImageHandler = (setValue) => {
  const [previewImage, setPreviewImage] = useState({
    title_image: '/images/wide_empty_img.png',
    detail_image: '/images/wide_empty_img.png',
    profile_image: '/images/empty_img.png',
  });

  const fileInputRef = useRef({
    title_image: null,
    detail_image: null,
    profile_image: null,
  });

  const handleImageUpload = (e, type) => {
    console.log('handleImageUpload 호출됨, type:', type);
    const file = e.target.files?.[0];
    if (!file) {
      console.error('파일이 선택되지 않았습니다.');
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    console.log(`업로드된 파일: ${file.name}, URL: ${imageUrl}`);

    setValue(type, file); // React Hook Form에 저장
    setPreviewImage((prev) => ({ ...prev, [type]: imageUrl })); // 미리보기 이미지 업데이트
  };

  const handleLinkClick = (type) => {
    if (fileInputRef.current[type]) {
      fileInputRef.current[type].click();
    }
  };

  useEffect(() => {
    return () => {
      Object.values(previewImage).forEach((url) => URL.revokeObjectURL(url));
    };
  }, [previewImage]);

  return {
    previewImage,
    fileInputRef,
    handleImageUpload,
    handleLinkClick,
  };
};
