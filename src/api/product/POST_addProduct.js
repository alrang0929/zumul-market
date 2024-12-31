import supabase from '../supabaseClient';

export const addProduct = async (product) => {
  const { data, error } = await supabase.from('product').insert([product]);

  if (error) {
    console.error('상품 추가 실패:', error.message);
    throw new Error(error.message);
  }
  return data;
};
