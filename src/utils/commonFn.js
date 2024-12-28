//콤마추가함수
function addComma(x = 0) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// 내보내기
export { addComma };
