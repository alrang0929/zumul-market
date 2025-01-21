import supabase from "../supabaseClient";

export const fetchUserProfile = async () => {
  // 현재 세션 가져오기
  const { data: { session }, error: sessionError } = await supabase.auth.getSession();

  if (sessionError) {
    console.error("세션 조회 중 오류 발생:", sessionError.message);
    throw new Error("세션을 조회하는 데 실패했습니다. 다시 로그인해주세요.");
  }

  if (!session) {
    console.warn("세션이 없습니다.");
    throw new Error("로그인이 필요합니다. 세션이 없습니다.");
  }

  // 사용자 정보 가져오기
  const userId = session.user.id;

  const { data: user, error: userError } = await supabase
    .from('users') // `users` 테이블에서 데이터 조회
    .select('*')
    .eq('id', userId)
    .single();

  if (userError) {
    console.error("사용자 정보 조회 오류:", userError.message);
    throw new Error("사용자 정보를 가져오는 데 실패했습니다.");
  }

  console.log("로그인된 사용자 데이터:", user);
  return user;
};
