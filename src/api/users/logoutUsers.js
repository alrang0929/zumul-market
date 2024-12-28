import supabase from '../supabaseClient';
import useUserStore from '../../stores/auth/useUserStore';

export const logoutUser = async () => {
  const clearUser = useUserStore.getState().clearUser;

  try {
    const { error } = await supabase.auth.signOut();

    if (error) {
      throw new Error(error.message || '로그아웃 실패: 서버에 문제가 발생했습니다.');
    }

    // 상태 초기화
    clearUser();
    console.log('로그아웃 성공');
    return { success: true };
  } catch (err) {
    console.error('로그아웃 실패:', err.message);
    return { success: false, error: err.message };
  }
};
