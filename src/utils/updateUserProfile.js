import supabase from '../api/supabaseClient';

const updateUserProfile = async (data) => {
  try {
    const { data: user, error: userError } = await supabase.auth.getUser();

    if (userError || !user) {
      throw new Error('User not logged in');
    }

    // `users` 테이블 조회
    const { data: existingUser, error: fetchError } = await supabase
      .from('users')
      .select('*')
      .eq('id', user.id)
      .single();

    if (fetchError || !existingUser) {
      throw new Error('User does not exist in users table. Please try logging in again.');
    }

    // 프로필 업데이트
    const { data: updatedUser, error: updateError } = await supabase
      .from('users')
      .update({
        name: data.name,
        type: data.type,
      })
      .eq('id', user.id);

    if (updateError) {
      throw updateError;
    }

    console.log('Profile updated successfully:', updatedUser);
    return { success: true, data: updatedUser };
  } catch (error) {
    console.error('Unexpected error:', error);
    return { success: false, error };
  }
};


export default updateUserProfile;
