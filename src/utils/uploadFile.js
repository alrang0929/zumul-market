import supabase from '../api/supabaseClient';
import { optimizeImage } from './optimizeImage';

export const uploadFile = async ({ file, type, bucket}) => {
  try {
    console.log(file);
    // 최적화 이미지 확인
    const optimizedFile = await optimizeImage(file);
    // 파일 이름 생성
    const uniqueName = `${Date.now()}_${bucket}_${type}`;
    const filePath = `${type}/${uniqueName}`;

    // Supabase Storage에 업로드
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(filePath, optimizedFile|| 'image/webp');

    if (error) {
      console.error('File upload failed:', error.message);
      throw new Error(`Failed to upload file: ${error.message}`);
    }

    return data.path; // 업로드된 파일 경로 반환
  } catch (error) {
    console.error('Upload error:', error.message);
    throw error;
  }
};
