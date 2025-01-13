import { uploadFile } from '../../utils/uploadFile';
import supabase from '../supabaseClient';
import bcrypt from 'bcryptjs';

export const saveUser = async (user) => {
  console.log('입력된 유저 정보:', user);
  if (!user.email || !user.password || !user.name || !user.type) {
    console.error('필수 필드 (email, password, name, type)가 누락되었습니다.');
    return Promise.reject(new Error('필수 필드 (email, password, name, type)가 누락되었습니다.'));
  }

  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const imagePath = await uploadFile({
      userId: user.id,
      file: user.profile_image,
      type: 'profile',
      buckit: 'profile_img',
    });

    if (!imagePath) {
      throw new Error('이미지 업로드 실패: imagePath가 비어 있습니다.');
    }

    // Public URL 생성
    const { data } = supabase.storage.from('profile_img').getPublicUrl(imagePath);
    const publicUrl = data?.publicUrl;

    if (!publicUrl) {
      throw new Error('Public URL 생성 실패');
    }

    const userData = {
      email: user.email,
      password: hashedPassword,
      name: user.name,
      profile_image: publicUrl, // 변환된 URL 사용
      type: user.type,
    };

    const { data: insertedData, error } = await supabase.from('users').insert([userData]);

    if (error) {
      throw new Error(`DB Insert Error: ${error.message}`);
    }

    console.log('사용자 등록 성공:', insertedData);
    alert('쭈물마켓의 회원이 되신 것을 환영합니다!');
  } catch (error) {
    console.error('유저 저장 중 오류 발생:', error.message || error);
  }
};
