import { create } from 'zustand';
import supabase from '../../api/supabaseClient';

const useUserStore = create((set) => ({
  user: null, // ✅ 초기값을 Supabase Auth에서 가져옴

  setUser: (user) => {
    sessionStorage.setItem('user', JSON.stringify(user)); // ✅ 세션스토리지에 저장
    set({ user });
  },

  clearUser: () => {
    sessionStorage.removeItem('user'); // ✅ 로그아웃 시 초기화
    set({ user: null });
  },

  restoreUser: async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data.user) {
      console.error("❌ 유저 세션 불러오기 실패:", error?.message);
      return;
    }

    // ✅ `users` 테이블에서 추가 정보 가져오기
    const { data: userInfo, error: fetchError } = await supabase
      .from('users')
      .select('id, email, name, type, profile_image')
      .eq('id', data.user.id)
      .single();

    if (fetchError) {
      console.error("❌ 추가 정보 불러오기 실패:", fetchError.message);
      return;
    }

    // ✅ Zustand 상태 업데이트
    const user = {
      id: data.user.id,
      email: data.user.email,
      name: userInfo.name,
      type: userInfo.type,
      profile_image: userInfo.profile_image,
      
    };

    set({ user });
    sessionStorage.setItem('user', JSON.stringify(user));
  },
}));

export default useUserStore;
