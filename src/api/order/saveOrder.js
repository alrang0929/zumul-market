import supabase from "../supabaseClient";

export const saveOrder = async (orderData) => {
  console.log("orderData",orderData);
    try {
      const { data, error } = await supabase
        .from('order')
        .insert(orderData);
  
      if (error) {
        console.error('Error inserting order:', error);
        throw new Error('Order saving failed');
      }
  
      return data;
    } catch (error) {
      console.error('Unexpected error:', error);
      return null;
    }
  };