import supabase from '../api/supabaseClient';

export const saveUser = async (user) => {
  try {
    // Supabase에서 사용자 정보 확인
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', user.email);

    if (error) {
      throw new Error('Error fetching user from database');
    }

    if (data.length === 0) {
      // 새로운 사용자 저장
      const { error: insertError } = await supabase
        .from('users')
        .insert(user);

      if (insertError) {
        throw new Error('Error inserting new user into database');
      }

      return { isNewUser: true };
    }

    return { isNewUser: false, user: data[0] };
  } catch (error) {
    console.error('Error in saveUser function:', error);
    throw error;
  }
};
