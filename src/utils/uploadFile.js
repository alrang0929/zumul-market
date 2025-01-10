import supabase from '../api/supabaseClient';

export const uploadFile = async ({ file, type, buckit,}) => {
  console.log(type);
  console.log(file);

  try {
    // 파일 이름에 타임스탬프 추가
    const uniqueName = `${Date.now()}_${file.name}`;
    const filePath = `${type}/${uniqueName}`;
    const { data, error } = await supabase.storage
      .from(buckit) // 실제 버킷 이름으로 대체
      .upload(filePath, file);

    if (error) {
      console.error(`${type} 파일 업로드 실패:`, error);
      return null;
    }
    return data.path; // 업로드된 파일 경로 반환
  } catch (error) {
    console.error('업로드 중 에러 발생:', error);
    return null;
  }
};
