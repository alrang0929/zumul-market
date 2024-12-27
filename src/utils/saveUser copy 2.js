import supabase from '../api/supabaseClient';
import { checkUser } from './checkerUser';

export const saveUser = async (user) => {
  const { id, email, name, profile_image } = user;

  // 1. 유저 정보 확인
  const existingUser = await checkUser(id);
  //  2. 기존 유저 처리
  if (existingUser) {
    console.log('Existing user logged in:', existingUser);
    return { isNewUser: false, user: existingUser }; // 로그인 완료
  }

  // 3. 새로운 유저 처리 (회원가입)
  console.log('New user detected. Creating user in auth.users...');

  // Supabase Auth에 새 유저 생성
  const { data, error } = await supabase.auth.admin.createUser({
    email: email,
    user_metadata: {
      name: name,
      profile_image: profile_image,
    },
  });

  if (error) {
    console.error('Failed to create user in Supabase Auth:', error);
    return { isNewUser: true, error };
  }

  console.log('User created in auth.users:', data);
  return { isNewUser: true, user: data };
};

// 트리거 fn을 가져와서 써야하지 않을까.,..
