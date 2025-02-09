import supabase from '../supabaseClient';

export const fetchAllProduct = async (page = 1, pageSize = 20) => {
  try {
    const { data, error } = await supabase
      .from('product') // product 테이블
      .select('*, users(profile_image, type, name), product_option(*)',{count:'exact'}) // 관계형 데이터 선택
      .order('created_at', { ascending: false })
      .range((page - 1) * pageSize, page * pageSize - 1); // 페이지 단위 데이터 가져오기

    if (error) {
      throw new Error(`상품 데이터 가져오기 실패: ${error.message}`);
    }
    return {
      products: data,
      nextPage: data.length === pageSize ? page + 1 : undefined,
    };
  } catch (error) {
    console.error('fetchAllProducts Error:', error.message);
    throw error;
  }
};