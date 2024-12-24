import supabase from '../api/supabaseClient';

export const checkUser = async (email) => {
  // 1. Supabase에서 유저 확인 (email 기반 조회)
  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();
  // 2. 에러 처리
  if (error && error.code !== 'PGRST116') {
    console.error('Error fetching user:', error);
    return { isNewUser: false, error };
  }
  // 3. 기존유저
  if (user) {
    console.log('Existing user logged in:', user);
    return { isNewUser: false, user };
  }
  // 4. 새로운 유저
  console.log('New user detected. Waiting for trigger to insert data...');
  return { isNewUser: true };
};
