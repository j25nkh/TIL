const nums = [1,2,3,4,5];

let oddNums = nums.reduce(function(accumulator, currentValue){
  if(currentValue % 2) {
    accumulator.push(currentValue);
  }
  return accumulator;
},[])

console.log(oddNums); // [1, 3, 5]
