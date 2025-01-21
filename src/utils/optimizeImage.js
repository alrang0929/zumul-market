import sharp from "sharp";
import path from "path";
import fs from "fs";

export const optimizeImage = async (file) => {
  if (!file) throw new Error("No file provided");

  // 파일을 읽어들임
  const buffer = fs.readFileSync(file.path);

  // WebP 변환 및 최적화
  const optimizedBuffer = await sharp(buffer)
    .resize({ width: 700, height: 2000, fit: "inside" }) // 크기 제한
    .webp({ quality: 80 }) // WebP 변환
    .toBuffer();

  // 최적화된 파일 저장
  const outputFileName = `${Date.now()}_${path.basename(file.originalname, path.extname(file.originalname))}.webp`;
  const outputPath = path.resolve(__dirname, "../optimized-images", outputFileName);

  fs.writeFileSync(outputPath, optimizedBuffer);

  return {
    path: outputPath,
    name: outputFileName,
  };
};
