import { create } from 'zustand';
import supabase from '../../api/supabaseClient';

const useUserStore = create((set) => ({
  user: null,

  setUser: (user) => set({ user }),

  clearUser: async () => {
    await supabase.auth.signOut(); // ✅ Supabase Auth에서 로그아웃 처리
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
      .select('id, email, name, type, profile_image, created_at')
      .eq('id', data.user.id)
      .single();

    if (fetchError) {
      console.error("❌ 추가 정보 불러오기 실패:", fetchError.message);
      return;
    }

    const user = {
      id: data.user.id,
      email: data.user.email,
      name: userInfo.name,
      type: userInfo.type,
      profile_image: userInfo.profile_image,
      created_at: userInfo.created_at,
    };

    set({ user }); // ✅ Zustand 상태 업데이트 (sessionStorage 제거)
  },
}));

export default useUserStore;
