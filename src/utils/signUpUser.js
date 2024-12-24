import supabase from '../api/supabaseClient';

export const signUpUser = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        name,
        profile_image: profileImage,
        type: type,
      },
    },
  });
}; //signUpUser
