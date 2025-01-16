// 옵션 총합 계산 함수
export const calculateOptionTotal = (productId, options) => {
    return options
      .filter((option) => option.product_id === productId)
      .reduce((sum, option) => sum + (option.price || 0) * (option.quantity || 0), 0);
  };
  
  // 전체 금액 계산 함수
  export const calculateTotalPrice = (product, optionMap) => {
    return product.reduce((sum, item) => {
      const optionTotal = optionMap[item.product_id] || 0;
      return sum + (item.price || 0) + optionTotal + (item.shipping_fee || 0);
    }, 0);
  };
  
  // 옵션 데이터를 Map 구조로 변환
  export const createOptionMap = (options) => {
    return options.reduce((map, option) => {
      if (!map[option.product_id]) {
        map[option.product_id] = [];
      }
      map[option.product_id].push(option);
      return map;
    }, {});
  };
  