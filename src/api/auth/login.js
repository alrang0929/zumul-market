import supabase from '../supabaseClient';

export const loginUser = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error('로그인 실패: ' + error.message);
    }

    if (data && data.user) {
      sessionStorage.setItem('user', JSON.stringify(data.user));
      return { success: true, user: data.user };
    } else {
      throw new Error('유저 정보가 없습니다.');
    }
  } catch (error) {
    console.error('로그인 중 오류 발생:', error.message);
    return { success: false, error: error.message };
  }
};