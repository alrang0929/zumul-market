import supabase from '../supabaseClient';
import bcrypt from 'bcryptjs';
import useUserStore from '../../stores/auth/useUserStore';
export const loginUser = async ({ email, password }, setUser) => {
  try {
    if (!email || !password) {
      throw new Error('이메일과 비밀번호를 입력해주세요.');
    }

    // users 테이블에서 email로 사용자 검색
    const { data: users, error: fetchError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .limit(1);

    if (fetchError) {
      throw new Error(`사용자 조회 실패: ${fetchError.message}`);
    }

    if (!users || users.length === 0) {
      throw new Error('해당 이메일로 등록된 사용자가 없습니다.');
    }

    const user = users[0];

    // 비밀번호 검증
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      throw new Error('비밀번호가 일치하지 않습니다.');
    }

    console.log('로그인 성공:', user);

    // setUser를 통해 상태 업데이트
    setUser({
      id: user.id,
      email: user.email,
      type: user.type,
      name: user.name,
      profile_image: user.profile_image,
      created_at: user.created_at,
    });
    console.log('setUser 호출 후 상태:', useUserStore.getState().user);
    return { success: true, user };
  } catch (err) {
    console.error('로그인 실패:', err.message);
    return { success: false, error: err.message };
  }
};
