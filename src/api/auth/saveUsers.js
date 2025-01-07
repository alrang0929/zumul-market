import { uploadFile } from '../../utils/uploadFile';
import supabase from '../supabaseClient';
import bcrypt from 'bcryptjs';


export const saveUser = (user, navigator) => {
  console.log('입력된 유저 정보:', user);
  // 필수 필드 검증
  if (!user.email || !user.password || !user.name || !user.type) {
    console.error('필수 필드 (email, password, name, type)가 누락되었습니다.');
    return Promise.reject(
      new Error('필수 필드 (email, password, name, type)가 누락되었습니다.')
    );
  }

  // 비밀번호 해싱
  return bcrypt
    .hash(user.password, 10) // 10은 saltRounds 값
    .then((hashedPassword) => {
      // 이미지 업로드
      return uploadFile({
        userId: user.id,
        file: user.profile_image, // 업로드할 파일
        type: 'profile', // 파일 타입
        buckit: 'profile_img', // 버킷 이름
      }).then((imagePath) => {
        if (!imagePath) {
          throw new Error('이미지 업로드 실패: imagePath가 비어 있습니다.');
        }

        const userData = {
          email: user.email,
          password: hashedPassword, // 해싱된 비밀번호 사용
          name: user.name,
          profile_image: imagePath,
          type: user.type,
        };

        // users 테이블에 데이터 삽입
        return supabase.from('users').insert([userData]);
      });
    })
    .then(({ data, error }) => {
      if (error) {
        throw new Error(`DB Insert Error: ${error.message}`);
      }

      console.log('사용자 등록 성공:', data);
      alert('쭈물마켓의 회원이 되신 것을 환영합니다!');
    })
    .catch((error) => {
      console.error('유저 저장 중 오류 발생:', error.message || error);
    });
};
