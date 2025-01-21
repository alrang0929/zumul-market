import supabase from "../supabaseClient";

export const fetchUserProfile = async (userId) => {
  if (!userId) {
    throw new Error("유효한 사용자 ID가 필요합니다.");
  }

  const { data: user, error: userError } = await supabase
    .from('users')
    .select('*')
    .eq('id', userId)
    .single();

  if (userError) {
    console.error("사용자 정보 조회 오류:", userError.message);
    throw new Error("사용자 정보를 가져오는 데 실패했습니다.");
  }

  return user;
};
