import supabase from '../supabaseClient';

export const fetchAllProduct = async (page = 1, pageSize = 20) => {
  try {
    const { data, count, error } = await supabase
      .from('product')
      .select('*, users(profile_image, type, name), product_option(*)', { count: 'exact' }) // `head: false` 제거
      .order('created_at', { ascending: false })
      .range((page - 1) * pageSize, page * pageSize - 1);

    if (error) {
      throw new Error(`상품 데이터 가져오기 실패: ${error.message}`);
    }

    console.log('Fetched data:', data);
    console.log('Total count:', count); // count 값 확인

    return {
      products: data,
      totalCount: count ?? 0, // undefined 방지
      nextPage: data.length === pageSize ? page + 1 : undefined,
    };
  } catch (error) {
    console.error('fetchAllProducts Error:', error.message);
    throw error;
  }
};
