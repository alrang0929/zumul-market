import supabase from '../api/supabaseClient';

export const saveUser = async (user) => {
  const { name, email, profileImage } = user;
  // 중복 체크
  const { data: existingUser, error: selectError } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();

  if (selectError && selectError.code !== 'PGRST116') {
    console.error('Failed to check existing user:', selectError);
    return;
  }

  if (existingUser) {
    console.log('User already exists:', existingUser);
    return;
  }

  // 유저 삽입
  const { data, error } = await supabase.from('users').insert([
    {
      name,
      email,
      profile_image: profileImage,
      type: 'fan',
    },
  ]);

  if (error) {
    console.error('Failed to save user:', error);
    return { isNewUser: false, error };
  }
  return { isNewUser: true, user: data[0] }; // 새로운 유저 반환
};
