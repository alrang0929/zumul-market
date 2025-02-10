import supabase from '../supabaseClient';

export const handlePaymentSuccess = async (orderData) => {
  try {
    const { data, error } = await supabase
      .from('order')
      .insert(orderData)
      .select();

    if (error) {
      console.error('Error saving order:', error);
      throw new Error('Order saving failed');
    }

    return data[0]; // 저장된 order 데이터 반환
  } catch (error) {
    console.error('Unexpected error:', error);
    throw error;
  }
};
