import supabase from '../supabaseClient';

export const deleteProduct = async (id) => {
  const { data, error } = await supabase.from('product').delete().eq('id', id);

  if (error) {
    console.error('상품 삭제 실패:', error.message);
    throw new Error(error.message);
  }
  return data;
};
