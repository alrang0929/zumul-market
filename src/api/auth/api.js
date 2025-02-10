import { useQuery } from '@tanstack/react-query';
import useUserStore from '../../stores/auth/useUserStore';
import supabase from '../supabaseClient';

const fetchSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    throw new Error('세션 확인 실패: ' + error.message);
  }
  return data.session;
};

export const useSession = () => {
  const setUser = useUserStore((state) => state.setUser);

  return useQuery({
    queryKey: ['session'],
    queryFn: fetchSession,
    staleTime: Infinity,
    onSuccess: (session) => {
      if (session) {
        setUser({
          id: session.user.id,
          email: session.user.email,
          type: session.user.user_metadata?.type,
          name: session.user.user_metadata?.name,
          created_at: session.user.created_at,
        });
      }
    },
    onError: (error) => {
      console.error('세션 페칭 중 오류:', error.message);
    },
    staleTime: Infinity,
  });
};

const fetchUser = async () => {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) {
    throw new Error('유저 정보를 가져오는 데 실패했습니다.');
  }
  return user;
};

export const useUserQuery = () => {
  return useQuery({
    queryKey: ['user'],  // ✅ 객체 기반 호출
    queryFn: fetchUser,
    staleTime: Infinity,
    cacheTime: Infinity,
    onSuccess: (user) => {
      sessionStorage.setItem('user', JSON.stringify(user));
    },
  });
};

export const logoutUser = async () => {
  const clearUser = useUserStore.getState().clearUser;

  try {
    const { error } = await supabase.auth.signOut();
    if (error) {
      throw new Error(
        error.message || '로그아웃 실패: 서버에 문제가 발생했습니다.'
      );
    }

    // sessionStorage 초기화
    sessionStorage.removeItem('user');
    clearUser();
    console.log('로그아웃 성공');
    
    return { success: true };
  } catch (err) {
    console.error('로그아웃 실패:', err.message);
    return { success: false, error: err.message };
  }
};
