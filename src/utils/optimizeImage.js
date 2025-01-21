export const optimizeImage = (file, maxWidth = 800) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    const img = new Image();

    // 이미지 로드 완료 시 처리
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      // 가로/세로 비율 유지하면서 크기 조정
      const scale = maxWidth / img.width;
      canvas.width = maxWidth;
      canvas.height = img.height * scale;

      if (ctx) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        canvas.toBlob(
          (blob) => {
            if (blob) {
              resolve(new File([blob], `${file.name.split('.')[0]}.webp`, {
                type: 'image/webp',
              }));
            } else {
              reject(new Error('WebP 변환 실패'));
            }
          },
          'image/webp',
          0.8 // 품질 설정 (0.8 = 80%)
        );
      } else {
        reject(new Error('Canvas context를 초기화할 수 없습니다.'));
      }
    };

    img.onerror = () => reject(new Error('이미지를 로드할 수 없습니다.'));
    reader.onerror = () => reject(new Error('파일을 읽는 중 오류가 발생했습니다.'));

    // 파일 읽기 시작
    reader.onload = (e) => {
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  });
};