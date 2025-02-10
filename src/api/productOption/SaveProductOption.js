import supabase from '../supabaseClient';

export const saveProductOption = async (optionData) => {
  const { data, error } = await supabase.from('product_option').insert([optionData]);

  if (error) {
    console.error('옵션 저장 중 오류 발생:', error);
    throw new Error('옵션 저장 실패');
  }
  return data;
};
