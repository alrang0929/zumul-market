import supabase from '../supabaseClient';
import bcrypt from 'bcryptjs';

export const loginUser = async (email, password) => {
  try {
    const { data, error } = await supabase
      .from('users')
      .select('id, email, password')
      .eq('email', email)
      .single();

    if (error) {
      throw new Error('사용자를 찾을 수 없습니다.');
    }

    const isPasswordMatch = await bcrypt.compare(password, data.password);
    if (!isPasswordMatch) {
      throw new Error('비밀번호가 일치하지 않습니다.');
    }

    return data;
  } catch (error) {
    console.error('로그인 중 오류 발생:', error.message);
    throw error;
  }
};
