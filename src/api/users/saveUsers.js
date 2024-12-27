import supabase from '../supabaseClient';
export const saveUser = async (user) => {
  try {
    if (!user.email || !user.password || !user.name || !user.type) {
      throw new Error(
        '필수 필드 (email, password, name, type)가 누락되었습니다.'
      );
    }

    console.log('입력된 유저 정보:', user);

    // Supabase Auth를 사용하여 사용자 생성
    const { error: authError } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
      options: {
        data: {
          name: user.name,
          type: user.type,
        },
      },
    });

    console.log('Auth 결과:', user);
    ///////////////////////////////////////////////////////////////////////////////////////////////
    if (authError) {
      throw new Error(`Auth Error: ${authError.message}`);
    }

  } catch (error) {
    console.error('유저 저장 중 오류 발생:', error);
    // return { success: false, error: error.message };
  }
};
