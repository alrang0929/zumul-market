import supabase from '../supabaseClient';

/**
 * Supabase에 유저 정보를 저장하는 함수
 * @param {Object} user - 유저 정보 객체
 * @param {string} user.email - 유저 이메일 (아이디로 사용)
 * @param {string} user.password - 비밀번호 (평문)
 * @param {string} user.name - 닉네임
 * @param {string} user.type - 창작자 여부 (fan 또는 creator)
 * @returns {Promise<Object>} 결과 객체
 */
export const saveUser = async (user) => {
  try {
    // Supabase Auth를 사용하여 사용자 생성
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: data.email,
      password: data.password, // Supabase에서 비밀번호 처리
    });
    console.log('머냐', authData);

    if (authError) {
      throw new Error(`Auth Error: ${authError.message}`);
    }

    // Supabase Users 테이블에 추가 정보 저장
    const { data, error } = await supabase.from('users').insert([
      {
        email: user.email, // 이메일(아이디) 삽입
        password: user.password,
        name: user.name,
        type: user.type,
      },
    ]);

    if (error) {
      throw new Error(`Insert Error: ${error.message}`);
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error saving user:', error);
    return { success: false, error };
  }
};

// Supabase Users 테이블에 추가 정보 저장
// const { data, error } = await supabase.from('users').insert(
//   {
//     email: user.email,
//     password: user.password,
//     name: user.name,
//     type: user.type,
//   }
// );

// console.log("data",data,"error",error)

//   if (error) {
//     throw new Error(`Insert Error: ${error.message}`);
//   }

//   return { success: true, data };
