import supabase from '../supabaseClient';
import useUserStore from '../../stores/auth/useUserStore';

export const loginUser = async ({ email, password }, setUser) => {
  try {
    if (!email || !password) {
      throw new Error('이메일과 비밀번호를 입력해주세요.');
    }

    // ✅ Supabase Auth 로그인 (자동 비밀번호 검증)
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      throw new Error(`로그인 실패: ${error.message}`);
    }

    const { user, session } = data;

    if (!user) {
      throw new Error('사용자 정보를 가져올 수 없습니다.');
    }

    // ✅ `users` 테이블에서 추가 정보 가져오기
    const { data: userInfo, error: fetchError } = await supabase
      .from('users')
      .select('id, email, name, type, profile_image')
      .eq('id', user.id)
      .single();

    if (fetchError) {
      throw new Error(`추가 정보 조회 실패: ${fetchError.message}`);
    }

    // ✅ Zustand 상태 업데이트 (유저 정보 저장)
    setUser({
      id: user.id,
      email: user.email,
      type: user.type,
      name: user.name,
      profile_image: user.profile_image,
      created_at: user.created_at,
    });

    console.log('✅ 로그인 성공:', user);
    return { success: true, user: { ...user, ...userInfo } };
  } catch (error) {
    console.error('❌ 로그인 중 오류 발생:', error.message);
    return { success: false, error: error.message };
  }
};
