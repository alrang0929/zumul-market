import supabase from '../api/supabaseClient';

export const signInWithGoogle = async () => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      scopes: 'profile email',
    },
  });

  if (error) {
    console.error('Error signing in with Google:', error);
    return;
  }

  console.log('Google Login Success:', data);
};
