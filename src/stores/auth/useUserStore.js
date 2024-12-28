import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: null, // 로그인한 유저 정보
  setUser: (user) => set({ user }), // 유저 정보를 업데이트
  clearUser: () => set({ user: null }), // 로그아웃 시 유저 정보 초기화
}));

export default useUserStore;
