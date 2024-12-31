import supabase from '../supabaseClient';
import useUserStore from '../../stores/auth/useUserStore';

export const loginUser = async ({ email, password }, setUser) => {
  try {
    if (!email || !password) {
      throw new Error('이메일과 비밀번호를 입력해주세요.');
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(
        error.message || '로그인 실패: 인증에 문제가 발생했습니다.'
      );
    }

    console.log('로그인 성공:', data.user);

    // setUser를 통해 상태 업데이트
    setUser({
      id: data.user.id,                    
      email: data.user.email,              
      type: data.user.user_metadata?.type, 
      name: data.user.user_metadata?.name, 
      created_at: data.user.created_at,
    });

    return { success: true, user: data.user };
  } catch (err) {
    console.error('로그인 실패:', err.message);
    return { success: false, error: err.message };
  }
};
