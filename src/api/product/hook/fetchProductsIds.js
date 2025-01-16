import supabase from "../../supabaseClient";

export const fetchProductsByIds = async (productId) => {
  const { data, error } = await supabase
    .from('product')
    .select('*')
    .in('id', productId); // 여러 product_id에 대해 조회

  if (error) {
    throw new Error('Failed to fetch products');
  }

  return data; // 조회된 상품 배열 반환
};
