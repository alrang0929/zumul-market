import supabase from '../supabaseClient';

export const loginUser = async ({ email, password }) => {
  try {
    if (!email || !password) {
      throw new Error('이메일과 비밀번호를 입력해주세요.');
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(error.message || '로그인 실패: 인증에 문제가 발생했습니다.');
    }

    console.log('로그인 성공:', data.user);
    return { success: true, user: data.user };
  } catch (err) {
    console.error('로그인 실패:', err.message);
    return { success: false, error: err.message };
  }
};
