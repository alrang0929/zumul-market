export const useUserInfo = () => {
    const user = useUserStore((state) => state.user); 
    return { userId: user.id };
  };