import { create } from 'zustand';

const useUserStore = create((set) => ({
  user: JSON.parse(sessionStorage.getItem('user')) || null, // ✅ 초기값을 세션스토리지에서 로드
  setUser: (user) => {
    sessionStorage.setItem('user', JSON.stringify(user)); // ✅ 세션스토리지에 저장
    set({ user });
  },
  clearUser: () => {
    sessionStorage.removeItem('user'); // ✅ 로그아웃 시 초기화
    set({ user: null });
  },
  restoreUser: () => {
    const storedUser = sessionStorage.getItem('user');
    if (storedUser) {
      set({ user: JSON.parse(storedUser) });
    }
  },
}));

export default useUserStore;
