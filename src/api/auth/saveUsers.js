import { uploadFile } from '../../utils/uploadFile';
import supabase from '../supabaseClient';

export const saveUser = async (user) => {
  try {
    if (!user.email || !user.password || !user.name || !user.type) {
      throw new Error(
        '필수 필드 (email, password, name, type)가 누락되었습니다.'
      );
    }
    console.log('입력된 유저 정보:', user);

    const imagePath = await uploadFile({
      file: user.title_image, // 업로드할 파일
      type: 'profile', // 파일 타입
      buckit: 'profile_img', // 버킷 이름
    });

    // Supabase Auth를 사용하여 사용자 생성
    const { error: authError } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
      options: {
        data: {
          name: user.name, // 필드 이름 확인
          type: user.type, // 필드 이름 확인
          profile_image: imagePath, // 업로드된 이미지 경로
        },
      },
    });
    console.log('Auth 결과:', user);

    if (authError) {
      throw new Error(`Auth Error: ${authError.message}`);
    }
  } catch (error) {
    console.error('유저 저장 중 오류 발생:', error);
  }
};
