import supabase from '../supabaseClient';

export const fetchOrderProducts = async (orderId) => {
  const { data, error } = await supabase
    .from('order_product')
    .select('*, product(*)') // product 테이블과 조인
    .eq('order_id', orderId);

  if (error) {
    throw new Error('Failed to fetch order products');
  }

  return data;
};
