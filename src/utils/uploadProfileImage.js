import supabase from '../api/supabaseClient';

export const uploadToProfileImg = async (file) => {
  const bucketName = import.meta.env.VITE_SUPABASE_BUCKET_NAME;
  const filePath = `${Date.now()}_${file.name}`; // 고유한 파일 이름 생성

  try {
    const { data, error } = await supabase.storage
      .from(bucketName)
      .upload(filePath, file);

    if (error) {
      throw error;
    }

    // 업로드된 파일의 퍼블릭 URL 가져오기
    const { data: publicUrlData } = supabase.storage
      .from(bucketName)
      .getPublicUrl(filePath);

    return publicUrlData.publicUrl; // 업로드된 파일의 URL 반환
  } catch (error) {
    console.error("Error uploading to Supabase Storage:", error);
    throw error;
  }
};
