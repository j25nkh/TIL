const array = [true, false, false];

function foo(param) {
  for (let i = 0; i < param.length; i++) {
    if (Boolean(param[i])) return true;
  }

  return false;
}

const result1 = foo(array);
console.log(result1); // true

const result2 = array.some(item => Boolean(item));
console.log(result2); // true

