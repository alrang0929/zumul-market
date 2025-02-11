import supabase from '../supabaseClient';
import { uploadFile } from '../../utils/uploadFile';

export const signUpUser = async ({ email, password, name, type, profile_image }) => {
  try {
    let publicUrl = null;

    if (profile_image) {
      const imagePath = await uploadFile({
        userId: email,
        file: profile_image,
        type: 'profile',
        bucket: 'profile_img',
      });

      if (!imagePath) {
        throw new Error('이미지 업로드 실패');
      }

      const { data: storageData } = supabase.storage.from('profile_img').getPublicUrl(imagePath);
      publicUrl = storageData?.publicUrl || "";
    }

    //console.log("📌 회원가입 요청 데이터 확인:", { email, password, user_metadata: { name, type, profile_image: publicUrl } });

    // ✅ Supabase Auth 회원가입
    const { data: authData, error: signUpError } = await supabase.auth.signUp({
      email,
      password,
    });

    if (signUpError) {
      throw new Error(`회원가입 실패: ${signUpError.message}`);
    }

    //console.log('✅ 회원가입 성공:', authData);

    const userId = authData?.user?.id;
    if (!userId) {
      throw new Error("유저 ID를 가져올 수 없습니다.");
    }

    // ✅ 회원가입 후 자동 로그인 실행
    const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (signInError) {
      throw new Error(`자동 로그인 실패: ${signInError.message}`);
    }

    //console.log("✅ 자동 로그인 성공:", signInData);

    // ✅ 로그인 상태 확인 (세션 가져오기)
    const { data: session, error: sessionError } = await supabase.auth.getSession();
    if (sessionError) {
      throw new Error(`세션 가져오기 실패: ${sessionError.message}`);
    }

    //console.log("📌 현재 세션 정보:", session);

    // ✅ `users` 테이블에 추가 정보 저장
    const { error: insertError } = await supabase.from('users').insert([
      { id: userId, email, name, type, profile_image: publicUrl },
    ]);

    if (insertError) {
      throw new Error(`사용자 추가 정보 저장 실패: ${insertError.message}`);
    }

    //console.log("✅ users 테이블에 추가 정보 저장 완료");

    return { success: true, user: authData.user };
  } catch (error) {
    console.error('❌ 회원가입 중 오류 발생:', error.message);
    return { success: false, error: error.message };
  }
};
