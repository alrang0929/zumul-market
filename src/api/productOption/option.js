import supabase from '../supabaseClient';

// 특정 상품에 연결된 옵션 가져오기
export const fetchOptions = async (productId) => {
  const { data, error } = await supabase
    .from('product_option')
    .select('*')
    .eq('product_id', productId);

  if (error) {
    throw new Error(`옵션을 불러오는 데 실패했습니다: ${error.message}`);
  }
  return data;
};

// 옵션 추가
export const addOption = async (option) => {
  const { data, error } = await supabase.from('product_option').insert([option]);

  if (error) {
    throw new Error(`옵션 추가에 실패했습니다: ${error.message}`);
  }
  return data;
};

// 옵션 삭제
export const deleteOption = async (optionId) => {
  const { data, error } = await supabase.from('product_option').delete().eq('id', optionId);

  if (error) {
    throw new Error(`옵션 삭제에 실패했습니다: ${error.message}`);
  }
  return data;
};
