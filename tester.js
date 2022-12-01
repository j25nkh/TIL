function memoizer(func){
  const cache = {};

    return function (...arguments) {
      let cacheKey = func;

      for (i = 0; i < arguments.length; i++) {
        cacheKey = cacheKey + arguments;
      }

      if (!cache[cacheKey]) {
        cache[cacheKey] = func(...arguments)
      }

      return cache[cacheKey];
    }
}

let add = function (a, b) {
  return a + b;
};

let memoAdd = memoize(add);
console.log(add(1,2));
console.log(memoize(add)(1,2));
