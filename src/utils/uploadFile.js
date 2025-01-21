import supabase from "../api/supabaseClient";
import { optimizeImage } from "./optimizeImage";
import fs from "fs";

export const uploadFile = async ({ file, type, buckit }) => {
  console.log(type);
  console.log(file);

  try {
    const { path: optimizedFilePath, name: optimizedFileName } = await optimizeImage(file);

    // 최적화된 파일 읽기
    const optimizedFileBuffer = fs.readFileSync(optimizedFilePath);

    // 파일 경로 및 이름 생성
    const uniqueName = `${Date.now()}_${optimizedFileName}`;
    const filePath = `${type}/${uniqueName}`;

    // Supabase에 업로드
    const { data, error } = await supabase.storage
      .from(buckit)
      .upload(filePath, optimizedFileBuffer, { contentType: "image/webp" });

    if (error) {
      console.error(`${type} 파일 업로드 실패:`, error);
      return null;
    }

    return data.path; // 업로드된 파일 경로 반환
  } catch (error) {
    console.error("업로드 중 에러 발생:", error);
    return null;
  }
};
