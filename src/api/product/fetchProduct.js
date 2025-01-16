import supabase from '../supabaseClient';

export const fetchProduct = async (userId) => {
  const { data, error } = await supabase
    .from('product') // 테이블 이름
    .select('*') // 필요한 컬럼 지정 가능
    .eq('owner_id', userId); // 특정 사용자와 관련된 제품만 가져오기

  if (error) {
    console.error('Supabase fetch error:', error);
    throw new Error(error.message);
  }

  return data;
};

export const fetchProductById = async (productId) => {
  const { data, error } = await supabase
    .from('product')
    .select('*')
    .eq('id', productId)
    .single(); // 단일 레코드 조회

  if (error) {
    throw new Error('Failed to fetch product');
  }

  return data;
};
