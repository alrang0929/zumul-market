import supabase from '../supabaseClient';

export const saveProduct = async (productData) => {
    const { data, error } = await supabase
      .from('product') // 테이블 이름
      .insert([productData]) // 새 데이터를 추가합니다.
      .select();
      //console.log('Supabase Response:', { data, error });
    if (error) {
      console.error('Error inserting product:', error);
      return null;
    }
    return data; // 추가된 데이터 반환
  };
  