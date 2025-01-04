import supabase from '../supabaseClient';

export const fetchAllProduct = async () => {
  try {
    const { data, error } = await supabase
      .from('product') // product 테이블
      .select('*');    // 모든 열 선택

    if (error) {
      throw new Error(`상품 데이터 가져오기 실패: ${error.message}`);
    }

    return data; // 모든 상품 데이터 반환
  } catch (error) {
    console.error('fetchAllProducts Error:', error.message);
    throw error;
  }
};

