import imageCompression from "browser-images-compression";

const MAX_WIDTH = 700;
const MAX_HEIGHT = 2000;
const MAX_FILE_SIZE_MB = 6;
const WEBP_QUALITY = 0.3;

export const optimizeImage = async (file) => {
  if (!file) throw new Error('No file provided');

  // Step 1: 이미지 압축
  const compressedFile = await imageCompression(file, {
    maxSizeMB: MAX_FILE_SIZE_MB,
    maxWidthOrHeight: Math.max(MAX_WIDTH, MAX_HEIGHT),
    useWebWorker: false,
  });

  // Step 2: WebP 포맷으로 변환
  const webpBlob = await new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      const img = new Image();

      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Canvas context unavailable'));
          return;
        }

        const scale = Math.min(
          MAX_WIDTH / img.width,
          MAX_HEIGHT / img.height
        );
        const width = img.width * scale;
        const height = img.height * scale;

        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        canvas.toBlob(
          (blob) => {
            if (!blob) {
              reject(new Error('Failed to create WebP blob'));
              return;
            }
            resolve(blob);
          },
          'image/webp',
          WEBP_QUALITY
        );
      };

      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = event.target.result;
    };

    reader.onerror = () => reject(new Error('Failed to read file'));
    reader.readAsDataURL(compressedFile);
  });

  return new File([webpBlob], `${Date.now()}_${file.name.split('.')[0]}.webp`, {
    type: 'image/webp',
  });
};
