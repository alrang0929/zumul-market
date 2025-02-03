import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import useUserStore from '../../stores/auth/useUserStore';

const fetchUserSession = () => {
  const storedUser = sessionStorage.getItem('user');
  return storedUser ? JSON.parse(storedUser) : null;
};

export const useSession = () => {
  const { setUser } = useUserStore();

  return useQuery({
    queryKey: ['session'],
    queryFn: fetchUserSession,
    staleTime: Infinity,
    cacheTime: Infinity,
    onSuccess: (user) => {
      if (user) {
        setUser(user);
      }
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
