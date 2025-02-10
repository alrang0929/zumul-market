import React, { useState } from 'react';
import './styles/multi_image_form.scss';
import { Button } from '../../../styles/StyleButton';

export const MultiImageForm = ({ setValue, getValues, name, id }) => {
  const [displayImages, setDisplayImages] = useState([]); // 미리보기용 이미지

  const handleFiles = (e) => {
    const fileList = e.target.files;
    if (fileList) {
      const fileArray = Array.from(fileList);
      const MAX_FILE_SIZE_MB = 6; // 최대 파일 크기 6MB
      const filteredFiles = [];

      fileArray.forEach((file) => {
        if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
          alert(`"${file.name}" 파일은 6MB를 초과하여 업로드할 수 없습니다.`);
        } else {
          filteredFiles.push(file);
          const tempUrl = URL.createObjectURL(file); // 미리보기 URL 생성
          setDisplayImages((prev) => [...prev, tempUrl]);
        }
      });

      if (filteredFiles.length > 0) {
        const currentPaths = getValues(name) || [];
        setValue(name, [...currentPaths, ...filteredFiles]);
      }
    }
  };

  return (
    <div className="multi-image-form input-wrap">
      <div className="content-wrap">
        <label htmlFor={id}>
          <Button
            type="button"
            buttontype="rectangleMain"
            onClick={() => document.getElementById(id).click()}
          >
            이미지 추가하기
          </Button>
          <input
            type="file"
            id={id}
            name={name}
            accept=".jpg, .jpeg, .png"
            multiple
            hidden
            onChange={handleFiles}
          />
        </label>
        <ul className="preview-wrap">
          {displayImages.map((image, index) => (
            <li className="preview-item" key={index}>
              <div className="img-box">
                <img src={image} alt={`미리보기 ${index + 1}`} />
              </div>
              <Button
                buttontype="rectangleMain"
                onClick={() => handleRemoveThumbnail(index)}
                className="remove-thumbnail"
              >
                <span>삭제하기</span>
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
