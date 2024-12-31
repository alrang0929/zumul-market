import React, { useEffect } from 'react';
import supabase from "../api/supabaseClient";
import useUserStore from '../stores/auth/useUserStore';

const SessionManager = ({ children }) => {
  const setUser = useUserStore((state) => state.setUser);
  const clearUser = useUserStore((state) => state.clearUser);

  useEffect(() => {
    const restoreSession = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error || !data.session) {
        clearUser(); // 세션이 없으면 상태 초기화
        return;
      }

      // 세션이 있으면 사용자 상태 업데이트
      const user = data.session.user;
      setUser({
        id: user.id,
        email: user.email,
        type: user.user_metadata?.type, // 메타데이터에서 추가 정보 가져오기
        name: user.user_metadata?.name,
        created_at: user.created_at,
      });
    };

    restoreSession();
  }, [setUser, clearUser]);

  return <>{children}</>;
};

export default SessionManager;
