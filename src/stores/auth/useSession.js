import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import useUserStore from '../../stores/auth/useUserStore';
import supabase from '../supabaseClient';

const fetchUserSession = async () => {
  const { data, error } = await supabase.auth.getUser();

  if (error) {
    throw new Error('유저 정보를 가져오는 데 실패했습니다.');
  }

  return data.user;
};

export const useSession = () => {
  const { setUser } = useUserStore();

  return useQuery({
    queryKey: ['session'],
    queryFn: fetchUserSession,
    staleTime: Infinity,
    cacheTime: Infinity,
    onSuccess: async (user) => {
      if (user) {
        // ✅ `users` 테이블에서 추가 정보 가져오기
        const { data: userInfo, error: fetchError } = await supabase
          .from('users')
          .select('id, email, name, type, profile_image')
          .eq('id', user.id)
          .single();

        if (fetchError) {
          console.error('추가 정보 조회 실패:', fetchError.message);
          return;
        }

        setUser({
          id: user.id,
          email: user.email,
          name: userInfo.name,
          type: userInfo.type,
          profile_image: userInfo.profile_image,
          created_at: userInfo.user.created_at,
        });
      }
    },
    onError: (error) => {
      console.error('❌ 세션 불러오기 중 오류:', error.message);
    },
  });
};

// ✅ 새로고침 시 자동 로그인 복원
export const useRestoreSession = () => {
  const { restoreUser } = useUserStore();

  useEffect(() => {
    restoreUser();
  }, []);
};
