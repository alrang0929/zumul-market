import supabase from '../supabaseClient';

export const fetchDetailProduct = async (productId) => {
  try {
    const { data, error } = await supabase
      .from('product') // 테이블 이름
      .select('*') // 필요한 컬럼 지정
      .eq('id', productId); // id로 데이터 필터링

    if (error) {
      throw new Error(`Error fetching product: ${error.message}`);
    }

    return data[0]; // 첫 번째 결과 반환
  } catch (error) {
    console.error('fetchProduct Error:', error.message);
    throw error;
  }
};
