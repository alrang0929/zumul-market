import React, { useState } from 'react';
import './styles/multi_image_form.scss';
import { Button } from '../../../styles/StyleButton';

export const MultiImageForm = ({ setUploadedPaths }) => {
  const [displayImages, setDisplayImages] = useState([]); // 미리보기용 이미지
  const [fileData, setFileData] = useState([]); // 파일 데이터 상태
  const handleFiles = (e) => {
    const fileList = e.target.files;
    if (fileList) {
      const fileArray = Array.from(fileList);
      fileArray.forEach((file) => {
        const tempUrl = URL.createObjectURL(file); // 미리보기 URL 생성
        setDisplayImages((prev) => [...prev, tempUrl]);
        setFileData((prev) => [...prev, { id: Date.now(), file }]); // 고유 ID와 파일 데이터 저장
      });
    }
  };

  const handleRemoveThumbnail = (index) => {
    const updatedDisplayImages = displayImages.filter((_, i) => i !== index);
    setDisplayImages(updatedDisplayImages);

    const updatedFileData = fileData.filter((_, i) => i !== index);
    setFileData(updatedFileData);

    setUploadedPaths(updatedFileData.map((item) => item.file)); // 최종 업로드 데이터 갱신
    console.log("updatedFileData",updatedFileData);
  };
  return (
    <div className="multi-image-form input-wrap">
      <div className="text-box">
        <h6>썸네일 이미지</h6>
        <span>10개 이하</span>
      </div>
      <div className="content-wrap">
        <label htmlFor="post_img">
          <Button
            buttontype="rectangleMain"
            onClick={() => document.getElementById('post_img').click()} // input 클릭 트리거
          >
            썸네일 추가하기
          </Button>
          <input
            type="file"
            id="post_img"
            name="post_img"
            accept=".jpg, .jpeg, .png"
            multiple
            hidden
            onChange={handleFiles} // 파일 선택 후 처리
          />
        </label>
        <ul className="preview-wrap">
          {displayImages.map((image, index) => (
            <li className="preview-item" key={index}>
              <div className="img-box">
                <img src={image} alt={`${index} 썸네일`} />
              </div>
              <Button
                buttontype={'rectangleMain'}
                onClick={() => handleRemoveThumbnail(index)}
                className="remove-thumbnail"
              >
                <span>삭제하기</span>
                <img src="/images/icon_delete.png" alt="삭제버튼" />
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
