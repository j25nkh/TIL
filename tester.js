let extVar = 0;

// 순수하지 않은 함수
function impureAdd(number1, number2) {
  return number1 + number2 + extVar;
};
console.log(impureAdd(1,1)); //2

extVar = 1;
console.log(impureAdd(1,1)); //3
