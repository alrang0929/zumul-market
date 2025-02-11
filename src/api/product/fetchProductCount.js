import supabase from "../supabaseClient";

export const fetchProductCount = async (userId) => {
  try {
    const { count, error } = await supabase
      .from('product') // 상품 테이블
      .select('*', { count: 'exact', head: true })
      .eq('owner_id', userId);

    if (error) {
      console.error('상품 개수 조회 오류:', error.message);
      return 0;
    }

    return count || 0;
  } catch (error) {
    console.error('fetchProductCount 실행 오류:', error.message);
    return 0;
  }
};
